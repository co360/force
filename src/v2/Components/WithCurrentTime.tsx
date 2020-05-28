import { useSystemContext } from "v2/Artsy"
import { DateTime } from "luxon"
import React, { useEffect, useState } from "react"
import { getCurrentTimeAsIsoString } from "v2/Utils/getCurrentTimeAsIsoString"
import { getOffsetBetweenGravityClock } from "v2/Utils/time"

/**
 * Render prop component to provide the current time as an ISO string, and
 * an offset from the current time to the server time (in milliseconds).
 *
 * If the `syncWithServer` prop is provided the offset is calculated and included
 * with the current time. Any errors in offset calculation, or if that prop is not
 * provided, will result in the offset being calculated as 0.
 *
 * Example usage:
 *
 *     <WithCurrentTime>
 *       {currentTime => (
 *          <>The current time is {currentTime}</>
 *       )}
 *     </WithCurrentTime>
 *
 * @param interval The interval (in ms) with which to update the time.
 *                 The default value is 1000, i.e. the time is updated once
 *                 every second.
 */

interface WithCurrentTimeProps {
  interval?: number
  syncWithServer?: boolean
  children: (currentTime: string) => React.ReactElement<any>
}

export const WithCurrentTime: React.FC<WithCurrentTimeProps> = ({
  children,
  interval = 1000,
  syncWithServer,
}) => {
  const { relayEnvironment } = useSystemContext()
  const [currentTime, setCurrentTime] = useState(getCurrentTimeAsIsoString())
  const [timeOffsetInMilliseconds, setTimeOffsetInMilliseconds] = useState(0)
  let intervalId

  function updateCurrentTime() {
    setCurrentTime(getCurrentTimeAsIsoString())
  }

  useEffect(() => {
    if (syncWithServer) {
      getOffsetBetweenGravityClock(relayEnvironment).then(offset => {
        setTimeOffsetInMilliseconds(offset)
      })
    }

    intervalId = setInterval(updateCurrentTime, interval || 1000)

    return () => {
      clearInterval(intervalId)
    }
  }, [])

  return children(
    DateTime.fromISO(currentTime)
      .minus({ millisecond: timeOffsetInMilliseconds })
      .toString()
  )
}
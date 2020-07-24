interface Window {
  analytics?: {
    page: (object, object) => void
    identify: (userId: string, email: string, object) => void
    track: (
      action: string,
      properties: object,
      getTrackingOptions?: object
    ) => void
    __artsyClientSideRoutingReferrer?: string
  }
  __BOOTSTRAP__?: any
}

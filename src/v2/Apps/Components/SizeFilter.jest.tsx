import { mount } from "enzyme"
import React from "react"
import { act } from "react-dom/test-utils"
import {
  ArtworkFilterContextProps,
  ArtworkFilterContextProvider,
  useArtworkFilterContext,
} from "v2/Components/v2/ArtworkFilter/ArtworkFilterContext"
import { SizeFilter } from "./SizeFilter"

describe("SizeFilter", () => {
  let context: ArtworkFilterContextProps

  const getWrapper = () => {
    return mount(
      <ArtworkFilterContextProvider>
        <SizeFilterTest />
      </ArtworkFilterContextProvider>
    )
  }

  const SizeFilterTest = () => {
    context = useArtworkFilterContext()
    return <SizeFilter useFilterContext={useArtworkFilterContext} />
  }

  it("updates context on filter change", done => {
    const wrapper = getWrapper() as any

    act(() => void wrapper.find("Checkbox").at(0).simulate("click"))
    expect(context.filters.sizes).toEqual(["SMALL"])

    act(() => void wrapper.find("Checkbox").at(2).simulate("click"))
    expect(context.filters.sizes).toEqual(["SMALL", "LARGE"])

    done()
  })
})

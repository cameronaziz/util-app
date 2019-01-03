import * as React from "react"
import "react-native"
import * as renderer from "react-test-renderer"
import BlankPage from "../index"

const navigation = { state: jest.fn() }

it("renders correctly", () => {
  const tree = renderer.create(<BlankPage navigation={navigation} />).toJSON()
  expect(tree).toMatchSnapshot()
})

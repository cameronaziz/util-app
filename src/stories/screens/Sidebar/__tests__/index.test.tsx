import * as React from "react"
import "react-native"
import * as renderer from "react-test-renderer"
import Sidebar from "../index"

const navigation = { navigate: jest.fn() }

it("renders correctly", () => {
  const tree = renderer.create(<Sidebar navigation={navigation} />).toJSON()
  expect(tree).toMatchSnapshot()
})

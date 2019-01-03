import * as React from "react"
import "react-native"
import * as renderer from "react-test-renderer"
import Home from "../index"

const navigation = { navigate: jest.fn() }
const list = { map: jest.fn() }

it("renders correctly", () => {
  const tree = renderer
    .create(<Home navigation={navigation} list={list} />)
    .toJSON()
  expect(tree).toMatchSnapshot()
})

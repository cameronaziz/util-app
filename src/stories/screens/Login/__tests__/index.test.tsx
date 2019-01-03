import * as React from "react"
import "react-native"
import * as renderer from "react-test-renderer"
import Login from "../index"

const onLogin = jest.fn()
const loginForm = React.Component

it("renders correctly", () => {
    const tree = renderer
        .create(<Login onLogin={onLogin} loginForm={loginForm} />)
        .toJSON()
    expect(tree).toMatchSnapshot()
})

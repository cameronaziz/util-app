import * as Expo from "expo"
import * as React from "react"
import { StyleProvider } from "native-base"
import { Provider } from "react-redux"

import configureStore from "./configureStore"
import App from "../App"
import getTheme from "../theme/components"
import variables from "../theme/variables/platform"

export interface State {
    isReady: boolean
}

const store = configureStore()

export default class Setup extends React.Component<{}, State> {
    constructor(props: {}) {
        super(props)
        this.state = {
            isReady: false,
        }
    }

    componentWillMount() {
        this.loadFonts()
    }

    async loadFonts() {
        await Expo.Font.loadAsync({
            Roboto: require("native-base/Fonts/Roboto.ttf"),
            Roboto_medium: require("native-base/Fonts/Roboto_medium.ttf"),
            Ionicons: require("@expo/vector-icons/fonts/Ionicons.ttf"),
        })

        this.setState({ isReady: true })
    }

    render() {
        if (!this.state.isReady) {
            return <Expo.AppLoading />
        }

        return (
            <StyleProvider style={getTheme(variables)}>
                <Provider store={store}>
                    <App />
                </Provider>
            </StyleProvider>
        )
    }
}

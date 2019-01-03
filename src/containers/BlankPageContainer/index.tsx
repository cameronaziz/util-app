import * as React from "react"
import BlankPage from "../../stories/screens/BlankPage"

export interface Props {
    navigation: any,
}

class BlankPageContainer extends React.Component<Props> {
    render() {
        return <BlankPage navigation={this.props.navigation} />
    }
}

export default BlankPageContainer

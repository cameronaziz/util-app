import * as React from "react"
import Sidebar from "../../stories/screens/Sidebar"

export interface Props {
    navigation: any
}
export default class SidebarContainer extends React.Component<Props> {
    render() {
        return <Sidebar navigation={this.props.navigation} />
    }
}

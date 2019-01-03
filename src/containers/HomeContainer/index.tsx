import * as React from "react"
import { connect } from "react-redux"
import { Dispatch, bindActionCreators } from "redux"
import Home from "../../stories/screens/Home"
import datas from "./data"
import { fetchList } from "./actions"

export interface Props {
    navigation: any
    fetchList: (url: any) => void
    data: object
}
class HomeContainer extends React.Component<Props> {
    componentDidMount() {
        this.props.fetchList(datas)
    }

    render() {
        return <Home navigation={this.props.navigation} list={this.props.data} />
    }
}

const mapDispatchToProps = (dispatch: Dispatch) => bindActionCreators({
    fetchList: (url: any) => fetchList(url),
}, dispatch)

const mapStateToProps = (state: ReduxState.Root) => ({
    data: state.home.list,
    isLoading: state.home.isLoading,
})

export default connect(mapStateToProps, mapDispatchToProps)(HomeContainer)

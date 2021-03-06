import * as React from "react"
import { Text, Container, List, ListItem, Content } from "native-base"
import { NavigationActions } from "react-navigation"

const routes = [
  {
    route: "Home",
    caption: "Home",
  },
  {
    route: "BlankPage",
    caption: "Blank Page",
  },
  {
    route: "Login",
    caption: "Logout",
  },
]

export interface Props {
  navigation: any
}
const resetAction = NavigationActions.navigate({ routeName: "Login" })
export default class Sidebar extends React.Component<Props> {
  render() {
    return (
      <Container>
        <Content>
          <List
            style={{ marginTop: 40 }}
            dataArray={routes}
            renderRow={data => {
              return (
                <ListItem
                  button
                  onPress={() => {
                    data.route === "Login"
                      ? this.props.navigation.reset([resetAction], 0)
                      : this.props.navigation.navigate(data.route)
                  }}
                >
                  <Text>{data.caption}</Text>
                </ListItem>
              )
            }}
          />
        </Content>
      </Container>
    )
  }
}

import * as React from "react"
import { Platform } from "react-native"
import { Container, Content, Header, Body, Title, Button, Text, View, Footer } from "native-base"
// import styles from "./styles";
export interface Props {
    loginForm: any
    onLogin: () => void
}
export default class Login extends React.Component<Props> {
    render() {
        return (
            <Container>
                <Header style={{ height: 200 }}>
                    <Body style={{ alignItems: "center" }}>
                        <Title>Utility App</Title>
                        <View padder>
                            <Text style={{ color: Platform.OS === "ios" ? "#000" : "#FFF" }} />
                        </View>
                    </Body>
                </Header>
                <Content>
                    {this.props.loginForm}
                    <View padder>
                        <Button block onPress={() => this.props.onLogin()}>
                            <Text>Login</Text>
                        </Button>
                    </View>
                </Content>
                <Footer style={{ backgroundColor: "#F8F8F8" }}>
                    <View style={{ alignItems: "center", opacity: 0.5, flexDirection: "row" }}>
                        <View padder>
                            <Text style={{ color: "#000" }}>Made by me.</Text>
                        </View>
                    </View>
                </Footer>
            </Container>
        )
    }
}

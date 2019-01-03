import * as React from "react"
import { Platform } from "react-native"
import { Container, Content, Header, Body, Title, Button, Text, View, Icon, Footer } from "native-base"
// import styles from "./styles";
export interface Props {
    loginForm: any
    onLogin: () => void
}

const Login = (props: Props) => (
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
            {props.loginForm}
            <View padder>
                <Button block onPress={() => props.onLogin()}>
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

export default Login

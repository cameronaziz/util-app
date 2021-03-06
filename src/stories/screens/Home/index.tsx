import * as React from "react"
import {
    Container,
    Header,
    Title,
    Content,
    Text,
    Button,
    Icon,
    Left,
    Body,
    Right,
    List,
    ListItem,
} from "native-base"

import styles from "./styles"
export interface Props {
    navigation: any
    list: any
}

const Home = (props: Props) => (
    <Container style={styles.container}>
        <Header>
            <Left>
                <Button transparent>
                    <Icon
                        active
                        name="menu"
                        onPress={() => props.navigation.openDrawer()}
                    />
                </Button>
            </Left>
            <Body>
                <Title>Home</Title>
            </Body>
            <Right />
        </Header>
        <Content>
            <List>
                {props.list.map((item, i) => (
                    <ListItem
                        key={i}
                        onPress={() =>
                            props.navigation.navigate("BlankPage", {
                                name: { item },
                            })
                        }
                    >
                        <Text>{item}</Text>
                    </ListItem>
                ))}
            </List>
        </Content>
    </Container>
    )

export default Home

import { Row, Container } from "react-bootstrap";
import React from "react";
import "./Cart.css";
import { CartContext } from "./../../cart-conext";
import ListGroup from "react-bootstrap/ListGroup";

export default class Cart extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            items: [],
        };
    }

    componentDidMount() {
        this.setState({
            items: this.context.items,
        });
    }

    render() {
        if (this.state.items) {
            return (
                <Container>
                    <Row>
                        <ListGroup>
                            {this.state.items.map((item) => (
                                <ListGroup.Item key={item.id}>{item.name}</ListGroup.Item>
                            ))}
                        </ListGroup>
                    </Row>
                </Container>
            );
        }
    }
}

Cart.contextType = CartContext;

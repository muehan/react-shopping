import { Row, Container } from "react-bootstrap";
import React from "react";
import "./Cart.css";
import { CartContext } from "./../../cart-conext";
import ListGroup from "react-bootstrap/ListGroup";
import Table from "react-bootstrap/Table";

export default class Cart extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            items: [],
        };
    }

    componentDidMount() {
        console.log(this.context.items);

        this.setState({
            items: this.context.items,
        });
    }

    render() {
        if (this.state.items.length >= 1) {
            return (
                <Container>
                    <Table striped bordered hover>
                        <thead>
                            <tr>
                                <th>Amount</th>
                                <th>Name</th>
                                <th>Price</th>
                                <th>Price Calc</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.state.items.map((item) => (
                                <tr>
                                    <td>{item.amount}</td>
                                    <td>{item.name}</td>
                                    <td>{item.price}</td>
                                    <td>{item.amount * item.price}</td>
                                </tr>
                            ))}
                        </tbody>
                    </Table>
                </Container>
            );
        } else {
            return (
                <Container>
                    <Row>
                        <h2>Your basket is empty</h2>
                    </Row>
                </Container>
            );
        }
    }
}

Cart.contextType = CartContext;

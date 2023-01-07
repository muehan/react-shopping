import { Row, Container } from "react-bootstrap";
import React from "react";
import "./Cart.css";
import { CartContext } from "./../../cart-conext";
import Table from "react-bootstrap/Table";

export default class Cart extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            items: [],
        };
    }

    formatDecimal = (number) => Number.parseFloat(number).toFixed(2);

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
                                <React.Fragment key={item.id}>
                                    <tr>
                                        <td>{item.amount}</td>
                                        <td>{item.name}</td>
                                        <td>
                                            {this.formatDecimal(item.price) +
                                                "$"}
                                        </td>
                                        <td>
                                            {this.formatDecimal(
                                                item.amount * item.price
                                            ) + "$"}
                                        </td>
                                    </tr>
                                </React.Fragment>
                            ))}
                        </tbody>
                    </Table>

                    <h5>
                        Total:{" "}
                        {this.formatDecimal(
                            this.state.items.reduce(
                                (partialTotal, item) =>
                                    partialTotal + item.amount * item.price,
                                0
                            )
                        )}
                    </h5>
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

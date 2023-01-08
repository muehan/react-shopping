import { Row, Container } from "react-bootstrap";
import React from "react";
import "./Cart.css";
import { CartContext } from "./../../cart-conext";
import Table from "react-bootstrap/Table";
import { Trash } from 'react-bootstrap-icons';

export default class Cart extends React.Component {
    constructor(props) {
        super(props);

    }

    formatDecimal = (number) => Number.parseFloat(number).toFixed(2);

    componentDidMount() {

    }

    render() {
        if (this.context.items.length >= 1) {
            return (
                <Container>
                    <Table striped bordered hover>
                        <thead>
                            <tr>
                                <th>Amount</th>
                                <th>Name</th>
                                <th>Price</th>
                                <th>Price Calc</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.context.items.map((item) => (
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
                                        <td>
                                        <CartContext.Consumer>
                                        {({ deleteArticle }) => (
                                            <Trash onClick={() => deleteArticle(item.id)} />
                                            )}
                                            </CartContext.Consumer>
                                        </td>
                                    </tr>
                                </React.Fragment>
                            ))}
                        </tbody>
                    </Table>

                    <h5>
                        Total:{" "}
                        {this.formatDecimal(
                            this.context.items.reduce(
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

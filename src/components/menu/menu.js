import React from "react";
import "./Menu.css";
import { CartContext } from "./../../cart-conext";
import Container from "react-bootstrap/Container";
import { Nav, Navbar } from "react-bootstrap";
import { NavLink, Link } from "react-router-dom";

export default class Menu extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        let cart;

        if (this.context.items.length <= 0) {
            cart = (
                <Nav.Link as={NavLink} to="/cart">
                    Cart
                </Nav.Link>
            );
        } else {
            let count = this.context.items.length;
            cart = (
                <Nav.Link as={NavLink} to="/cart">
                    {"Cart(" + count + ")"}
                </Nav.Link>
            );
        }

        return (
            <Navbar bg="light" expand="lg">
                <Container>
                    <Navbar.Brand as={Link} to="/">
                        Demo Shop
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link as={Link} to="/home">
                                Home
                            </Nav.Link>
                            <Nav.Link as={Link} to="/articles">
                                Articles
                            </Nav.Link>
                            {cart}
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        );
    }
}

Menu.defaultProps = {};
Menu.contextType = CartContext;

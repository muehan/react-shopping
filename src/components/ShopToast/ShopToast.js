import React from "react";
import { Toast, ToastContainer } from "react-bootstrap";
import { CartContext } from "../../cart-conext";
import "./ShopToast.css";

export default class ShopToast extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            show: false,
        };
    }

    componentDidMount() {
        this.props.showToast({
            showToastChild: this.showToast,
        });
    }

    showToast = (event) => {
        this.setState({ show: true });
    };

    render() {
        return (
            <ToastContainer className="p-3" position="top-end">
                <Toast
                    onClose={() => this.setState({ show: false })}
                    show={this.state.show}
                    delay={3000}
                    autohide
                    bg="success"
                >
                    <Toast.Header>
                        <img
                            src="holder.js/20x20?text=%20"
                            className="rounded me-2"
                            alt=""
                        />
                        <strong className="me-auto">React Shop</strong>
                        <small>now</small>
                    </Toast.Header>
                    <Toast.Body>Added to basket</Toast.Body>
                </Toast>
            </ToastContainer>
        );
    }
}

ShopToast.contextType = CartContext;

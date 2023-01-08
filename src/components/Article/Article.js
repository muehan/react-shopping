import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { CartContext } from "./../../cart-conext";
import "./Article.css";

export default class Article extends React.Component {
    constructor(props) {
        super(props);
    }

    formatDecimal = (number) => Number.parseFloat(number).toFixed(2);

    render() {
        return (
            <Card style={{ width: "18rem", padding: "10px", margin: "10px" }}>
                <Card.Img variant="top" height="150" src={this.props.article.image} />
                <Card.Body>
                    <Card.Title>{this.props.article.name}</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">
                        {this.formatDecimal(this.props.article.price)}$
                    </Card.Subtitle>
                    <Card.Text>{this.props.article.description}</Card.Text>
                    <Card.Link href="#">Details</Card.Link>
                    <CartContext.Consumer>
                        {({ addItemToArticle }) => (
                            <Button
                                variant="secondary"
                                onClick={() => addItemToArticle(this.props.article)}
                            >
                                Add to Card
                            </Button>
                        )}
                    </CartContext.Consumer>
                </Card.Body>
            </Card>
        );
    }
}

Article.contextType = CartContext;

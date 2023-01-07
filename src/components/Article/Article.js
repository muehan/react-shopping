import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

import "./Article.css";

export default class Article extends React.Component {
    constructor(props) {
        super(props);
    }

    formatDecimal = (number) => Number.parseFloat(number).toFixed(2);

    render() {
        return (
            <Card style={{ width: "18rem", padding: "10px", margin: "10px" }}>
                <Card.Img variant="top" height="150" src={this.props.image} />
                <Card.Body>
                    <Card.Title>{this.props.name}</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">
                        {this.formatDecimal(this.props.price)}$
                    </Card.Subtitle>
                    <Card.Text>{this.props.description}</Card.Text>
                    <Card.Link href="#">Details</Card.Link>
                    <Button variant="secondary">Add to Card</Button>
                </Card.Body>
            </Card>
        );
    }
}

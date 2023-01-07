import { Row, Container } from "react-bootstrap";
import React from "react";
import Article from "../Article/Article";
import "./Articles.css";

import { createServer } from "miragejs";

import articles from "./mock-data/articledata";


let server = createServer();
server.get("/api/articles", articles);

export default class Articles extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            articles: [],
            images: [],
        };
    }

    componentDidMount() {
        fetch("/api/articles")
            .then((res) => res.json())
            .then(
                (result) => {
                    this.setState({
                        isLoaded: true,
                        articles: result.articles,
                    });
                },
                (error) => {
                    this.setState({
                        isLoaded: true,
                        error,
                    });
                }
            );
    }

    render() {
        if (this.state.articles) {
            return (
                <Container>
                    <Row>
                        {this.state.articles.map((article) => (
                            <Article
                                article={article}
                                key={article.id}
                            />
                        ))}
                    </Row>
                </Container>
            );
        }
    }
}

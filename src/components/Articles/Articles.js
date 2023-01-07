import Container from "react-bootstrap/Container";
import React from "react";
import Article from "../Article/Article";
import "./Articles.css";

import { createServer } from "miragejs";

let server = createServer();
server.get("/api/articles", {
    articles: [{ id: 1, name: "Cake", description: "jummy cake" }],
});

export default class Articles extends React.Component {
    constructor(props) {
        super(props);
        this.state = { articles: [] };
    }

    componentDidMount() {
        fetch("/api/articles")
            .then((res) => res.json())
            .then(
                (result) => {
                    console.log(result);
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
                    {this.state.articles.map((article) => (
                        <Article
                            key={article.id}
                            name={article.name}
                            description={article.description}
                        />
                    ))}
                </Container>
            );
        }
    }
}

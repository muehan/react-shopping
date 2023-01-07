import "./App.css";
import React from "react";

import { CartContext } from "./cart-conext";

import {
    Routes,
    Route,
    Navigate,
    BrowserRouter,
} from "react-router-dom";

import Menu from "./components/Menu/Menu";
import Home from "./components/Home/Home";
import Articles from "./components/Articles/Articles";
import Cart from "./components/Cart/Cart";


export default class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            items: [ ],
            addItemToArticle: this.handleAddToCart,
        };
    }

    handleAddToCart = (article) => {
        this.setState((oldstate) => ({
            items: [...oldstate.items, article],
            addItemToArticle: this.handleAddToCart,
        }));
    };

    render() {
        return (
            <div className="App">
                <CartContext.Provider value={this.state}>
                    <BrowserRouter>
                        <Menu />

                        <Routes>
                            <Route
                                path="/"
                                element={<Navigate to="/home" replace />}
                            />
                            <Route path="/home" element={<Home />} />
                            <Route path="/articles" element={<Articles />} />
                            <Route path="/cart" element={<Cart />} />
                        </Routes>
                    </BrowserRouter>
                </CartContext.Provider>
            </div>
        );
    }
}

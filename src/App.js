import "./App.css";
import React from "react";

import { CartContext } from "./cart-conext";

import { Routes, Route, Navigate, BrowserRouter } from "react-router-dom";

import Menu from "./components/Menu/Menu";
import Home from "./components/Home/Home";
import Articles from "./components/Articles/Articles";
import Cart from "./components/Cart/Cart";
import ShopToast from "./components/ShopToast/ShopToast";

export default class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            items: [],
            addItemToArticle: this.handleAddToCart,
            deleteArticle: this.handleDeleteArticle,
        };
    }

    childEvent = null;
    
    setChildEvent = (event) => {
       this.childEvent = event;
    }

    handleDeleteArticle = (articleId) => {
        this.setState((oldstate) => ({
            items: oldstate.items.filter((x) => x.id !== articleId),
        }));
    }

    handleAddToCart = (article) => {

        let basketItem = this.state.items.filter((x) => x.id === article.id)[0];

        if (basketItem) {
            basketItem.amount += 1;
        } else {
            basketItem = {
                ...article,
                amount: 1,
            };

            this.setState((oldstate) => ({
                items: [...oldstate.items, basketItem],
            }));
        }

        this.childEvent.showToastChild();
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

                    <ShopToast showToast={this.setChildEvent} />
                </CartContext.Provider>
            </div>
        );
    }
}

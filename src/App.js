import Nav from './components/Nav';
import React, { useState, useEffect } from "react";
import Footer from './components/Footer';
import { BrowserRouter as Router, Route, Routes} 
from 'react-router-dom';
import Home from './pages/Home';
import Books from './pages/Books';
import { books } from './data.js';
import BookInfo from './pages/BooksInfo.jsx';
import Cart from './pages/Cart.jsx';

function App() {
  const [cart, setCart] = useState([]);

  function addItemToCart(book) {
    const dupeItem = cart.find((item) => item.id === book.id);
    setCart((oldCart) =>
      dupeItem
        ? [
            ...oldCart.map((item) => {
              return item.id === dupeItem.id
                ? {
                    ...item,
                    quantity: item.quantity + 1,
                  }
                : item;
            }),
          ]
        : [...oldCart, { ...book, quantity: 1 }]
    );
  }

  function updateCart(item, newQuantity) {
    setCart((oldCart) =>
      oldCart.map((oldItem) => {
        if (oldItem.id === item.id) {
          return {
            ...oldItem,
            quantity: newQuantity,
          };
        } else {
          return oldItem;
        }
      })
    );
  }

  function removeItem(item) {
    setCart((oldCart) => oldCart.filter((cartItem) => cartItem.id !== item.id));
  }

  function numberOfItems() {
    let counter = 0;
    cart.forEach((item) => {
      counter += +item.quantity;
    });
    return counter;
  }

  function numberOfItems() {
    let counter = 0;
    cart.forEach((item) => {
      counter += +item.quantity;
    });
    return counter;
  }

  function calcPrices() {
    let total = 0;
    cart.forEach((item) => {
      total += (item.salePrice || item.originalPrice) * item.quantity;
    });
    return {
      subtotal: total * 0.9,
      tax: total * 0.1,
      total,
    };
  }

  return (
    <Router>
      <div className="App">
        <Nav numberOfItems={numberOfItems()} />
        <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/books" exact element={<Books books={books} />} />
        <Route path="/books/:id" element={<BookInfo books={books} addItemToCart={addItemToCart} />}
        />
        <Route path="/cart" element={<Cart cart={cart} updateCart={updateCart} removeItem={removeItem} totals={calcPrices()}/>}
        />
        </Routes>    
        <Footer />
      </div>
    </Router>
  );
}

export default App;

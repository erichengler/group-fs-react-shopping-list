import React from 'react';

import Header from '../Header/Header.jsx'
import Footer from '../Footer/Footer.jsx'
import ShoppingList from '../ShoppingList/ShoppingList.jsx';
import './App.css';


function App() {
    return (
        <div className="App">
            <Header />
            <main>
                <ShoppingList />
            </main>
            <Footer />
        </div>
    );
}

export default App;

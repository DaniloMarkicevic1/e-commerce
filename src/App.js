import { useState } from 'react';
import './App.css';
import CardList from './components/CardList';
import Header from './components/Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import Dell from './assets/images/del.jpg';
import Hp from './assets/images/hp.jpg';
import Acer from './assets/images/acer.webp';
import Benq from './assets/images/benq.webp';
import Lg from './assets/images/lg.jpg';

const itemList = [
    {
        img: Dell,
        name: 'dell',
        price: '$50',
        id: 0,
    },
    {
        img: Dell,
        name: 'dell',
        price: '$50',
        id: 1,
    },
    {
        img: Dell,
        name: 'dell',
        price: '$100',
        id: 2,
    },
    {
        img: Hp,
        name: 'hp',
        price: '$37',
        id: 3,
    },
    {
        img: Hp,

        name: 'hp',
        price: '$68',
        id: 4,
    },
    {
        img: Acer,
        name: 'Acer',
        price: '$200',
        id: 5,
    },
    {
        img: Acer,
        name: 'Acer',
        price: '$400',
        id: 6,
    },
    {
        img: Benq,
        name: 'BenQ',
        price: '$1000',
        id: 7,
    },
    {
        img: Benq,
        name: 'BenQ',
        price: '$600',
        id: 8,
    },
    {
        img: Lg,
        name: 'LG',
        price: '$200',
        id: 9,
    },
    {
        img: Lg,
        name: 'LG',
        price: '$300',
        id: 10,
    },
];

function App() {
    const [items, setItems] = useState(itemList);
    const [counter, setCounter] = useState(0);
    const [modalItems, setModalItems] = useState([]);
    let newItems = [];
    function addCardToCartHandler(id) {
        newItems = [...modalItems];
        newItems.push(items[id]);
        setModalItems(newItems);
        counterIncreaseHandler();
    }

    function removeFromCartHandler(id) {
        newItems = [...modalItems];
        newItems.splice(id, 1);
        setModalItems(newItems);
        counterDecreaseHandler();
    }

    function counterIncreaseHandler() {
        setCounter(counter + 1);
    }

    function counterDecreaseHandler() {
        setCounter(counter - 1);
    }

    function clearAllHandler() {
        setModalItems([]);
        setCounter(0);
    }
    return (
        <div className="App">
            <Header
                setItemFunc={setItems}
                clearAll={clearAllHandler}
                counter={counter}
                cartItems={modalItems}
                handleCard={(id) => removeFromCartHandler(id)}
            />
            <CardList
                items={items}
                counter={counter}
                handleCard={(id) => addCardToCartHandler(id)}
            />
        </div>
    );
}

export default App;

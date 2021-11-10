import { useState } from 'react';
import './App.css';
import CardList from './components/Body/CardList';
import Header from './components/CartModal/Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import Dell from './assets/images/del.jpg';
import Hp from './assets/images/hp.jpg';
import Acer from './assets/images/acer.webp';
import Benq from './assets/images/benq.webp';
import Lg from './assets/images/lg.jpg';

const itemList = [
    {
        img: Dell,
        name: 'dell-1',
        price: '$20',
        id: 0,
        count: 0,
    },
    {
        img: Dell,
        name: 'dell-2',
        price: '$50',
        id: 1,
        count: 0,
    },
    {
        img: Dell,
        name: 'dell-3',
        price: '$100',
        id: 2,
        count: 0,
    },
    {
        img: Hp,
        name: 'hp-1',
        price: '$37',
        id: 3,
        count: 0,
    },
    {
        img: Hp,
        name: 'hp-2',
        price: '$68',
        id: 4,
        count: 0,
    },
    {
        img: Acer,
        name: 'Acer-1',
        price: '$200',
        id: 5,
        count: 0,
    },
    {
        img: Acer,
        name: 'Acer-2',
        price: '$400',
        id: 6,
        count: 0,
    },
    {
        img: Benq,
        name: 'BenQ-1',
        price: '$1000',
        id: 7,
        count: 0,
    },
    {
        img: Benq,
        name: 'BenQ-2',
        price: '$600',
        id: 8,
        count: 0,
    },
    {
        img: Lg,
        name: 'LG-1',
        price: '$200',
        id: 9,
        count: 0,
    },
    {
        img: Lg,
        name: 'LG-2',
        price: '$300',
        id: 10,
        count: 0,
    },
];
function App() {
    const [items, setItems] = useState(itemList);
    const [counter, setCounter] = useState(0);
    const [modalItems, setModalItems] = useState([]);

    let newItems = [];
    function addCardToCartHandler(id) {
        newItems = [...modalItems];
        let index = [newItems.length];
        if (newItems.includes(items[id])) {
            return;
        } else {
            newItems.push(items[id]);
            newItems[index].count += 1;
        }
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

    function plusHandler(id) {
        newItems = [...modalItems];
        newItems[id].count += 1;
        setModalItems(newItems);
        counterIncreaseHandler();
    }

    function minusHandler(id) {
        newItems = [...modalItems];
        if (newItems[id].count === 1) {
            removeFromCartHandler(id);
            return;
        } else {
            newItems[id].count -= 1;
            setModalItems(newItems);
            counterDecreaseHandler();
        }
    }
    return (
        <div className="App">
            <Header
                asd={setItems}
                clearAll={clearAllHandler}
                counter={counter}
                cartItems={modalItems}
                handleCard={(id) => removeFromCartHandler(id)}
                handlePlus={(id) => plusHandler(id)}
                handleMinus={(id) => minusHandler(id)}
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

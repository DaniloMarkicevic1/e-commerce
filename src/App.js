import { useState } from 'react';
import './App.css';
import CardList from './components/Body/CardList';
import Header from './components/CartModal/Header';
import Filter from './components/Body/Filter';

import 'bootstrap/dist/css/bootstrap.min.css';
import Dell from './assets/images/del.jpg';
import Hp from './assets/images/hp.jpg';
import Acer from './assets/images/acer.webp';
import Benq from './assets/images/benq.webp';
import Lg from './assets/images/lg.jpg';

const itemList = [
    {
        img: Dell,
        name: 'Dell-1',
        price: '$20',
        id: 0,
        count: 0,
    },
    {
        img: Dell,
        name: 'Dell-2',
        price: '$50',
        id: 1,
        count: 0,
    },
    {
        img: Dell,
        name: 'Dell-3',
        price: '$100',
        id: 2,
        count: 0,
    },
    {
        img: Hp,
        name: 'Hp-1',
        price: '$37',
        id: 3,
        count: 0,
    },
    {
        img: Hp,
        name: 'Hp-2',
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

// Seting up Local Storage
let storageItems;
let storageCounterItem;
let storageModalItems = [];

if (localStorage.getItem('localStorageList')) {
    storageModalItems = JSON.parse(
        localStorage.getItem('localStorageModalItems')
    );
    localStorage.setItem('localStorageList', JSON.stringify(storageModalItems));

    storageItems = JSON.parse(localStorage.getItem('localStorageList'));

    storageCounterItem = localStorage.getItem('localStorageCounter');
} else {
    localStorage.setItem('localStorageList', JSON.stringify(itemList));
    storageItems = JSON.parse(localStorage.getItem('localStorageList'));

    localStorage.setItem('localStorageCounter', 0);
    storageCounterItem = 0;

    localStorage.setItem('localStorageModalItems', JSON.stringify([]));
}

function App() {
    const [items, setItems] = useState(storageItems);
    const [counter, setCounter] = useState(+storageCounterItem);
    const [modalItems, setModalItems] = useState(storageModalItems);
    let newItems = [];

    function storage(items) {
        localStorage.setItem('localStorageModalItems', JSON.stringify(items));

        storageModalItems = JSON.parse(
            localStorage.getItem('localStorageModalItems')
        );
    }

    function counterStorage(count) {
        localStorage.setItem('localStorageCounter', +count);
    }

    function addCardToCartHandler(id) {
        newItems = [...modalItems];
        let index = [newItems.length];

        if (newItems.includes(items[id])) {
            return;
        } else {
            newItems.push(items[id]);
            newItems[index].count += 1;
        }

        storage(newItems);
        setModalItems(newItems);
        counterIncreaseHandler();
    }

    function removeFromCartHandler(id) {
        newItems = [...modalItems];
        newItems.splice(id, 1);

        setModalItems(newItems);
        storage(newItems);
        counterDecreaseHandler();
    }

    function counterIncreaseHandler() {
        setCounter(counter + 1);
        counterStorage(+counter + 1);
    }

    function counterDecreaseHandler() {
        setCounter(counter - 1);
        counterStorage(+counter - 1);
    }

    function plusHandler(id) {
        newItems = [...modalItems];
        newItems[id].count += 1;

        counterIncreaseHandler();
        setModalItems(newItems);
        storage(newItems);
    }

    function minusHandler(id) {
        newItems = [...modalItems];

        if (newItems[id].count === 1) {
            removeFromCartHandler(id);
            return;
        } else {
            newItems[id].count -= 1;
            counterDecreaseHandler();
        }

        storage(newItems);
    }

    function filterHandler(name) {
        const filteredItems = [...itemList];
        let newList = filteredItems.filter((item) => item.name.includes(name));

        setItems(newList);
        storage(newList);
    }

    function removeFilterHandler() {
        setItems(itemList);
        storage(itemList);
    }

    function clearAllHandler() {
        setModalItems([]);
        storage([]);
        storageCounterItem = 0;
    }

    function submitHandler(e) {
        const filteredItems = [...itemList];
        let searchParam = e.target.childNodes[0].value;

        let newList = filteredItems.filter((item) =>
            item.name.toLowerCase().includes(searchParam)
        );

        setItems(newList);
        storage(newList);
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
                handleSubmit={(e) => submitHandler(e)}
            />
            <Filter
                filter={(e) => filterHandler(e)}
                removeFilter={removeFilterHandler}
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

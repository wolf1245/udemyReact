import React from 'react';
//
import AppHeader from '../app-header';
//
import SearchPanel from '../search-panel';
//
import PostStatusFilter from '../post-status-filter';
//
import PostList from '../post-list';
//
import PostAddForm from '../post-add-form';

//цсс стили app
import './app.css';

const App = () => {
    //данные с сервера, где id нужен для реакта,который будет динамически генерировать добавление саттьи
    const data = [
        {label: 'Lorem IIIIIII', important: true, id: 'wwp'},
        {label: 'Lorem NKJKHJKHKJHKJHKJHKJ', important: false, id: 'rrp'},
        {label: 'Lorem ;LKL;K;LK;LK;LK;LKL;K;LKL;K;', important: false, id: 'ttp'}
    ];
    
    return (
        <div className="app">
            <AppHeader/>
            <div className="search-panel d-flex">
                <SearchPanel/>
                <PostStatusFilter/>
            </div>
            <PostList posts= {data}/>
            <PostAddForm/>
        </div>
    )
}

export default App;
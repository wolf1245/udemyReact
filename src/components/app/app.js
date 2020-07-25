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
// styled-components
import styled from 'styled-components';

// создаем стили styled-components
const AppBlock = styled.div`
    margin: 0 auto;
    max-width: 800px; 
`
// создаем наследование и добавляем свойтсва стилей styled-components
const StyledAppBlock = styled(AppBlock)`
    backgroond-color: gray;
`

const App = () => {
    //данные с сервера, где id нужен для реакта,который будет динамически генерировать добавление саттьи
    const data = [
        {label: 'Lorem IIIIIII', important: true, id: 'wwp'},
        {label: 'Lorem NKJKHJKHKJHKJHKJHKJ', important: false, id: 'rrp'},
        {label: 'Lorem ;LKL;K;LK;LK;LK;LKL;K;LKL;K;', important: false, id: 'ttp'}
    ];
    
    return (
        <AppBlock>
            <AppHeader/>
            <div className="search-panel d-flex">
                <SearchPanel/>
                <PostStatusFilter/>
            </div>
            <PostList posts= {data}/>
            <PostAddForm/>
        </AppBlock>
    )
}

export default App;
import React, {Component} from 'react';
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

export default class App extends Component 
{
    constructor(props)
    {
        // наследие от родителя
        super(props);
        //данные с сервера, где id нужен для реакта,который будет динамически генерировать добавление саттьи
        this.state = {
            data : [
                {label: 'Lorem IIIIIII', important: true, like: false, id: 1},
                {label: 'Lorem NKJKHJKHKJHKJHKJHKJ', important: false, like: false, id: 2},
                {label: 'Lorem ;LKL;K;LK;LK;LK;LKL;K;LKL;K;', important: false, like: false, id: 3}
            ],
            term: '',
            filter: 'all'
        };
        // биндим контекст вызова
        this.deleteItem = this.deleteItem.bind(this);
        // биндим контекст вызова
        this.addItem = this.addItem.bind(this);
        // биндим контекст вызова
        this.onToggleImportant = this.onToggleImportant.bind(this);
        // биндим контекст вызова
        this.onToggleLiked = this.onToggleLiked.bind(this);
        // биндим контекст вызова
        this.onUpdateSearch = this.onUpdateSearch.bind(this);
        // биндим контекст вызова
        this.onFilterSelect = this.onFilterSelect.bind(this);
        // от этого айди будет генерировать
        this.maxId = 4;
    }
    
    // метод удаления
    deleteItem(id)
    {
        // передаем через дестрируктизацию data
        this.setState(({data}) => {
            // сравниваем айди который пришел с тем которое записанно
            const index = data.findIndex(elem => elem.id === id);
            /*создаем новый имассив без ненужного жлемента
            *указываем от какого до ненужного
            */
            const before = data.slice(0, index);
            // начинаем с ненужного + 
            const after = data.slice(index + 1);
            // изпользуем спред для соеденения
            const newArr = [...before, ...after];
            // записываем новый массив
            return {
                data: newArr
            }
        })
    }

    // метод добавления поста, получает текст с формы
    addItem(body)
    {
        // создаем новый обьек с теми же свойства что и в свойстве data
        const newItem = {
            label: body,
            important: false,
            id: this.maxId++
        }
        // помещаем его в state
        this.setState(({data}) => {
            // не меняем напрямую state, для этого создаем новый массив и sreed туда data
            const newArr = [...data, newItem];
            // обновляем state
            return {
                data: newArr
            }
        });
    }

    // метод отмести звездочки поста
    onToggleImportant(id)
    {
        // // деструктиризируем чтоб достать массив из state.data
        // this.setState(({data}) => {
        //     // ищет индекс id и сравниваем  с тем который отметили
        //     const index = data.findIndex(elem => elem.id === id);
        //     // получаем по индекту этот элемент
        //     const old = data[index];
        //     //  с помощью спред оператора перезаписываем свойство обьекта,так как оно передаеться последнее
        //     const newItem = {...old, important: !old.important};
        //     const before = data.slice(0, index);
        //     // начинаем с ненужного + 
        //     const after = data.slice(index + 1);
        //     // изпользуем спред для соеденения, и в середину вставляем тот обьект который вырезали
        //     const newArr = [...before, newItem, ...after];
        //     // записываем новый массив
        //     return {
        //         data: newArr
        //     }
        // });
        this.generaSetState(id, true);
    }

    // общий метод onToggleLiked и onToggleImportant
    generaSetState(id, lll)
    {
         // деструктиризируем чтоб достать массив из state.data
        this.setState(({data}) => {
            // ищет индекс id и сравниваем  с тем который отметили
            const index = data.findIndex(elem => elem.id === id);
            // получаем по индекту этот элемент
            const old = data[index];
            //  с помощью спред оператора перезаписываем свойство обьекта,так как оно передаеться последнее
            let newItem = '';
            if(lll)
            {
                newItem = {...old, important: !old.important};
            }
            else
            {
                newItem = {...old, like: !old.like};
            }
            const before = data.slice(0, index);
            // начинаем с ненужного + 
            const after = data.slice(index + 1);
            // изпользуем спред для соеденения, и в середину вставляем тот обьект который вырезали
            const newArr = [...before, newItem, ...after];
            // записываем новый массив
            return {
                data: newArr
            }
        });
    }
    // метод лайка поста
    onToggleLiked(id)
    {
        // // деструктиризируем чтоб достать массив из state.data
        // this.setState(({data}) => {
        //     // ищет индекс id и сравниваем с тем который лайкнули
        //     const index = data.findIndex(elem => elem.id === id);
        //     // получаем по индекту этот элемент
        //     const old = data[index];
        //     //  с помощью спред оператора перезаписываем свойство обьекта,так как оно передаеться последнее
        //     const newItem = {...old, like: !old.like};
        //     const before = data.slice(0, index);
        //     // начинаем с ненужного + 
        //     const after = data.slice(index + 1);
        //     // изпользуем спред для соеденения, и в середину вставляем тот обьект который вырезали
        //     const newArr = [...before, newItem, ...after];
        //     // записываем новый массив
        //     return {
        //         data: newArr
        //     }
        // });
        this.generaSetState(id, false);
    }
    
    // метод фильтра кнопок все и понравилось
    filterPost(items, filter)
    {
        //сравниваем
        switch(filter)
        {
            case "like":
                return items.filter(item => item.like)
                break;
            default:
                return items
        }
    }

    // метод фильтра где items где ищем, term что ищем
    searchPost(items, term)
    {
        // 
        if(term.length === 0)
        {
            return items;
        }
        // проходит и ищет что ввел пользователь
        return items.filter((item) => {
            // возращаем только то что ввел пользователь
            return item.label.indexOf(term) > -1
        });
    }
    
    // метод обновления state с уучетом фильтра
    onUpdateSearch(term)
    {
        // передаем обьек согласно новому ЕС8
        this.setState({term});
    }

    //метод фильтрации кнопок все или понравилось
    onFilterSelect(filter)
    {
        // передаем обьек согласно новому ЕС8
        this.setState({filter});
    }

    // метов вывода
    render()
    {
        //  вытаскиваем из state
        const {data, term, filter} = this.state;
        // сколько постов лайкнул пользователь, берем массив и счетаем через фильтр,те которые равны true
        const liked = data.filter(item => item.like).length;
        // сколько постов в общем
        const allPost= data.length;

        //вызываем и предаем аргументы в метод поиска, оборащиваем в метов, и передаем еще 1 параметр так как метод принимае 2 аргумента
        const viziblePosts = this.filterPost(this.searchPost(data, term), filter);

        return (
            <AppBlock>
                <AppHeader
                liked={liked}
                allPost={allPost}
                />
                <div className="search-panel d-flex">
                    <SearchPanel
                    onUpdateSearch={this.onUpdateSearch}
                    />
                    <PostStatusFilter
                    filter={filter}
                    onFilterSelect={this.onFilterSelect}
                    />
                </div>
                <PostList posts= {viziblePosts}
                onDelete={this.deleteItem}
                onToggleImportant={this.onToggleImportant}
                onToggleLiked={this.onToggleLiked}
                />
                <PostAddForm
                onAdd={this.addItem}
                />
            </AppBlock>
        )
    }
}
import React, {Component} from 'react';

// цсс стили
import './search-panel.css';

export default class SearchPanel extends Component 
{   
    constructor(props)
    {
        super(props);
        this.state = {
            term: ''
        };
        // биндим контекст вызова
        this.onUpdateSearch = this.onUpdateSearch.bind(this);
    }

    // метод которая отслеживает ввод в инпут поиска
    onUpdateSearch(event)
    {
        // помещаем что ввел рользователь
        const term = event.target.value
        // передаем обьек согласно новому ЕС8
        this.setState({term});
        //передаем еще ф-ю и аргумент
        this.props.onUpdateSearch(term);
    }

    //
    render()
    {
        return (
            <input 
                className="form-control search-input" 
                type="text"
                placeholder="Поиск по записям"
                onChange={this.onUpdateSearch}
            />
        )
    }
}
import React, {Component} from 'react';
// цсс стили
import './post-status-filter.css';

export default class PostStatusFilter extends Component
{
    constructor(props)
    {
        super(props);
        // массив с кнопками
        this.buttons = [
            {name: 'all', label: 'Все'},
            {name: 'like', label: 'Понравилось'}
        ];
    }

    //
    render()
    {
        //  вытаскиваем кнопки
        const buttons = this.buttons.map(({name, label}) => {
            // деструктирируем 
            const {filter, onFilterSelect} =this.props;
            // указываем какая кнопка должна быть активна
            const active = filter === name;
            // делаем проверку если active true то делаем кнопку активной
            const clazz = active ? 'btn-info' : 'btn-outline-secondary';
            // возращаем верстку кнопок с уникальными ключами
            return (
                <button 
                key={name} 
                type="button" 
                className={`btn ${clazz}`}
                onClick={() => onFilterSelect(name)}
                >{label}</button>
            )
        });
        return(
            <div className="btn-group">
                {buttons}
            </div>
        )
    }
}
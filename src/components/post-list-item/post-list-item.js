import React, {Component} from 'react';

// цсс стили
import './post-list-item.css';

// импортируем класс компонента с динамикой
export default class PostListItem extends Component
{
    constructor(props)
    {
        super(props);
        // встроенное динамически меняющиеся свойство
        this.state = {
            important: false,
            like: false
        };
        // привязываем вызов к контенсту this
        this.onImportant = this.onImportant.bind(this);
        // привязываем вызов к контенсту this
        this.onLike = this.onLike.bind(this);
    }

    // обработчик события клик
    onImportant()
    {
        this.setState(({important}) => ({
            important: !important
        }));
    }

    // обработчик события клик
    onLike()
    {
        this.setState(({like}) => ({
            like: !like
        }));
    }

    render()
    {
        // вытаскиваю данные из пропса
        const {label} = this.props;
        // вытаскиваем из state
        const {important, like} = this.state;
        // перемнная классов элемента ли
        let classNames ='app-list-item d-flex justify-content-between';
        //
        // если important true то добавляем класс
        if(important)
        {
            classNames += ' important';
        }
        // если like true то добавляем класс
        if(like)
        {
            classNames += ' like';
        }
        return (
            <div className={classNames}>
                <span 
                className="app-list-item-label"
                onClick={this.onLike}
                >
                    {label}
                </span>
                <div className="d-flex justify-content-center aling-item-center">
                    <button 
                    type="button" 
                    className="btn-star btn-sm"
                    onClick={this.onImportant}
                    >
                        <i className="fa fa-star"></i>
                    </button>
                    <button 
                    type="button" 
                    className="btn-trash btn-sm">
                        <i className="fa fa-trash-o"></i>
                    </button>
                    <i className="fa fa-heart"></i>
                </div>
            </div>
        )
    }
}
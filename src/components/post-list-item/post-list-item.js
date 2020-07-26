import React, {Component} from 'react';

// цсс стили
import './post-list-item.css';

// импортируем класс компонента с динамикой
export default class PostListItem extends Component
{

    render()
    {
        // вытаскиваю данные из пропса
        const {label, onDelete, important, like, onToggleImportant, onToggleLiked} = this.props;
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
                onClick={onToggleLiked}
                >
                    {label}
                </span>
                <div className="d-flex justify-content-center aling-item-center">
                    <button 
                    type="button" 
                    className="btn-star btn-sm"
                    onClick={onToggleImportant}
                    >
                        <i className="fa fa-star"></i>
                    </button>
                    <button 
                    type="button" 
                    className="btn-trash btn-sm"
                    onClick={onDelete}
                    >
                        <i className="fa fa-trash-o"></i>
                    </button>
                    <i className="fa fa-heart"></i>
                </div>
            </div>
        )
    }
}
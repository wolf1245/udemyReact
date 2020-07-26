import React from 'react';
import PostListItem from '../post-list-item';

// сцц стили
import './post-list.css';

//принимаем props
const PostList = ({posts, onDelete, onToggleImportant, onToggleLiked}) => {
    // проверка на пустые свойства обьект 
    const post = posts.filter(value => {
        if(value !== "" && typeof value === 'object' && typeof value === 'string')
        {
            return value;
        }
    })
    
    //фильтрую массив label и important, так как мы используем название переменных которыее равны свойствам обьекта
    const elems = posts.map((item) => { 
        //  вытаскием отдельно id и item
        const {id, ...itemProps} = item;

        //выводим жлемент ли
        return (
            <li key={id} className="list-group-item">
                <PostListItem {...itemProps}
                onDelete={() => onDelete(id)}
                onToggleImportant={() => onToggleImportant(id)}
                onToggleLiked={() => onToggleLiked(id)}
                />
            </li>
        )
    })

    return (
        <ul className="app-list list-group">
            {elems}
        </ul>
    )
}

export default PostList;
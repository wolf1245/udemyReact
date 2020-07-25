import React from 'react';

// цсс стили
import './post-list-item.css';

const PostListItem = () => {
    return (
        <li className="app-list-item d-flex justify-content-beetween">
            <span className="app-list-item-label">

            </span>
            <div className="d-flex justify-content-center aling-item-center">
                <button 
                type="button" 
                className="btn-star btn-sm">
                    <i className="fa fa-star"></i>
                </button>
                <button 
                type="button" 
                className="btn-trash btn-sm">
                    <i className="fa fa-trash-o"></i>
                </button>
                <i className="fa fa-heart"></i>
            </div>
        </li>
    )
}

export default PostListItem;
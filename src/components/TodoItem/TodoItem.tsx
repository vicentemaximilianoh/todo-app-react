import React from 'react';

import './TodoItem.css';

export interface ITodoItem {
    text: string,
    isCompleted: boolean,
    id: string
}

function TodoItem({item, onDeleteItem}: {item: ITodoItem, onDeleteItem: Function}) {

    return (
        <div className="TodoItem">
            <div className="TodoItem-text">{item.text}</div>
            <div className="TodoItem-actions">
                <button 
                    className="TodoItem-action-delete"
                    onClick={() => onDeleteItem(item)}>
                    x
                </button>
            </div>
        </div>
    );
}

export default TodoItem;
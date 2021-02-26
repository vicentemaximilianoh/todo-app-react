import React from 'react';

import './TodoItem.css';

export interface ITodoItem {
    text: string,
    isCompleted: boolean,
    id: string
}

function TodoItem({item, onDeleteItem, onEditItem}: {item: ITodoItem, onDeleteItem: Function, onEditItem: Function}) {

    return (
        <div className="TodoItem">
            <div 
                className="TodoItem-text"
                onClick={() => onEditItem(item)}>
                {item.text}
            </div>
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
import React from 'react';

import './TodoItem.css';

export interface ITodoItem {
    text: string,
    isCompleted: boolean,
    id: string
}

function TodoItem({
        item, 
        onDeleteItem, 
        onEditItem, 
        onCompleteItem
    }: {
        item: ITodoItem, 
        onDeleteItem: Function, 
        onEditItem: Function, 
        onCompleteItem: Function
    }) {

    return (
        <div className="TodoItem">
            <input 
                type="checkbox"
                onClick={() => onCompleteItem(item)}/>
            <div
                className={item.isCompleted ? 'TodoItem-completed TodoItem-text' : 'TodoItem-text'}
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
import React from 'react';

import './TodoItem.css';

export interface ITodoItem {
    text: string,
    isCompleted: boolean,
    key: number
}

function TodoItem({item}: {item: ITodoItem}) {

    function deleteItem(item: string) {

    }

    return (
        <div className="TodoItem">
            <div className="TodoItem-text">{item.text}</div>
            <div className="TodoItem-actions">
                {/* <button onClick={() => deleteItem(item)}>x</button> */}
            </div>
        </div>
    );
}

export default TodoItem;
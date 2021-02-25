import React from 'react';

import './TodoItem.css';

function TodoItem({item}: {item: string}) {

    function deleteItem(item: string) {

    }

    return (
        <div className="TodoItem">
            <div className="TodoItem-text">{item}</div>
            <div className="TodoItem-actions">
                {/* <button onClick={() => deleteItem(item)}>x</button> */}
            </div>
        </div>
    );
}

export default TodoItem;
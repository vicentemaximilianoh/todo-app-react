import React, {FormEvent, useState} from 'react';

import TodoItem from '../TodoItem/TodoItem';

import './TodoList.css';

function TodoList() {
    const initialItems: string[] = [];

    const [newItem, setNewItem]: [string, React.Dispatch<React.SetStateAction<string>>] = useState('');
    const [items, setItems]: [string[], React.Dispatch<React.SetStateAction<string[]>>] = useState(initialItems);

    const onSubmit = function(e: Event) {
        e.preventDefault();
        setItems(items.concat(newItem));
        setNewItem('');
    }

    let listItems: JSX.Element[] = [];
    items.forEach((item, index) => {
        listItems.push(<TodoItem item={item} />);
    })

    return (
        <div className="TodoList">
            <div className="TodoList-title">Todo List</div>
            <form 
                className="TodoList-add"
                onSubmit={(e: any) => onSubmit(e)}>
                <input 
                    onChange={(e) => setNewItem(e.target.value)}
                    value={newItem}/>
            </form>
            <ul className="TodoList-items">
                {listItems}
            </ul>
        </div>
    )
}

export default TodoList;

import React, { useState } from 'react';

import { uniqueId } from 'lodash';

import TodoItem, { ITodoItem } from '../TodoItem/TodoItem';

import './TodoList.css';

function TodoList() {
    const initialItems: ITodoItem[] = [];

    const [newTextItem, setNewTextItem]: [string, React.Dispatch<React.SetStateAction<string>>] = useState('');
    const [items, setItems]: [ITodoItem[], React.Dispatch<React.SetStateAction<ITodoItem[]>>] = useState(initialItems);

    const onSubmit = function(e: Event) {
        e.preventDefault();

        const newItem: ITodoItem = {
            text: newTextItem,
            isCompleted: false,
            id: uniqueId()
        }

        const newItems = [...items];
        newItems.push(newItem);

        setItems(newItems);
        setNewTextItem('');
    }

    const onChangeText = function(event: Event) {
        setNewTextItem((event.target as HTMLInputElement).value);
    }

    const onDeleteItem = function(item: ITodoItem) {
        setItems(items.filter((itemItems) => item.id !== itemItems.id) || []);
    }

    let listItems: JSX.Element[] = [];
    items.forEach((item, index) => {
        listItems.push(
            <TodoItem 
                key={item.id} 
                item={item} 
                onDeleteItem={onDeleteItem}
                />
        );
    })

    return (
        <div className="TodoList">
            <div className="TodoList-title">Todo List</div>
            <form 
                className="TodoList-add"
                onSubmit={(e: any) => onSubmit(e)}>
                <input 
                    onChange={(e: any) => onChangeText(e)}
                    value={newTextItem}
                    />
            </form>
            <ul className="TodoList-items">
                {listItems}
            </ul>
        </div>
    )
}

export default TodoList;

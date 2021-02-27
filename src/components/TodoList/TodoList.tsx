import React, { useState } from 'react';

import { uniqueId } from 'lodash';

import TodoItem, { ITodoItem } from '../TodoItem/TodoItem';
import TodoFilter, { ITodoFilter } from '../TodoFilter/TodoFilter';

import './TodoList.css';

function TodoList() {
    const initialItems: ITodoItem[] = [];

    const [newTextItem, setNewTextItem]: [string, React.Dispatch<React.SetStateAction<string>>] = useState<string>('');
    const [items, setItems]: [ITodoItem[], React.Dispatch<React.SetStateAction<ITodoItem[]>>] = useState<Array<ITodoItem>>(initialItems);
    const [selectedItem, setSelectedItem]: [ITodoItem | undefined, React.Dispatch<React.SetStateAction<ITodoItem|undefined>>] = useState<ITodoItem|undefined>();
    const [filter, setFilter]: [ITodoFilter | undefined, React.Dispatch<React.SetStateAction<ITodoFilter|undefined>>] = useState<ITodoFilter|undefined>();

    const onSubmit = function(e: Event) {
        e.preventDefault();

        if (selectedItem) {
            selectedItem.text = newTextItem;
            const idx = items.findIndex((it) => {
                return it.id === selectedItem.id;
            });

            const newItems = [...items];
            newItems[idx] = selectedItem;

            setItems(newItems);
        } else {

            const newItem: ITodoItem = {
                text: newTextItem,
                isCompleted: false,
                id: uniqueId()
            }

            const newItems = [...items];
            newItems.push(newItem);

            setItems(newItems);

        }

        // Cleanup state
        setNewTextItem('');
        setSelectedItem(undefined);
    }

    const onChangeText = function(event: Event) {
        setNewTextItem((event.target as HTMLInputElement).value);
    }

    const onEditItem = function(item: ITodoItem) {
        setNewTextItem(item.text);
        setSelectedItem(item);
    }

    const onDeleteItem = function(item: ITodoItem) {
        setItems(items.filter((itemItems) => item.id !== itemItems.id) || []);
    }

    const onCompleteItem = function(item: ITodoItem) {
        item.isCompleted = !item.isCompleted;
        const idx = items.findIndex((it) => {
            return it.id === item.id;
        });

        const newItems = [...items];
        newItems[idx] = item;

        setItems(newItems);
    }

    const onFilterChanged = function(f: ITodoFilter|undefined)  {
        setFilter(f);
    }

    let listItems: JSX.Element[] = [];
    items.forEach((item, index) => {
        if (filter && filter.type === 'SHOW') {
            if (filter.value === 'COMPLETED' && !item.isCompleted) {
                return;
            }

            if (filter.value === 'TO_DO' && item.isCompleted) {
                return;
            }
        }
        listItems.push(
            <TodoItem 
                key={item.id} 
                item={item}
                onCompleteItem={onCompleteItem}
                onDeleteItem={onDeleteItem}
                onEditItem={onEditItem}
                />
        );
    })

    return (
        <div className="TodoList">
            <TodoFilter 
                filter={filter}
                onFilterChanged={onFilterChanged}></TodoFilter>
            <form 
                className="TodoList-add"
                onSubmit={(e: any) => onSubmit(e)}>
                <input
                    placeholder="Something to do..."
                    className="TodoList-add-input"
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

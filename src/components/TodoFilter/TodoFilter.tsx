import React from 'react';

import './TodoFilter.css';

export interface ITodoFilter {
    type: string,
    value: string
}

export enum TodoFilterTypes {
    SHOW = 'SHOW'
}

export enum TodoFilterShow {
    ALL = 'ALL',
    COMPLETED = 'COMPLETED',
    TO_DO = 'TO_DO'
}

function TodoFilter({filter, onFilterChanged}: {filter: ITodoFilter|undefined, onFilterChanged: Function}) {

    function getShowFilterClassname(filterValue: TodoFilterShow) {
        return (filter && filter.type === TodoFilterTypes.SHOW && filter.value === filterValue) ? 
            'TodoFilter-button TodoFilter-button-active' : 
            'TodoFilter-button'
    }

    return (
        <div className="TodoFilter">
            <button 
                type="button"
                className={getShowFilterClassname(TodoFilterShow.ALL)}
                onClick={() => onFilterChanged({
                    type: TodoFilterTypes.SHOW, 
                    value: TodoFilterShow.ALL
                })}>All</button>
            <button 
                type="button" 
                className={getShowFilterClassname(TodoFilterShow.COMPLETED)}
                onClick={() => onFilterChanged({
                    type: TodoFilterTypes.SHOW, 
                    value: TodoFilterShow.COMPLETED
                })}>Completed</button>
            <button 
                type="button" 
                className={getShowFilterClassname(TodoFilterShow.TO_DO)}
                onClick={() => onFilterChanged({
                    type: TodoFilterTypes.SHOW, 
                    value: TodoFilterShow.TO_DO
                })}>To Do</button>
        </div>
    );
}

export default TodoFilter;
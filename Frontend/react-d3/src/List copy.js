import React from 'react'
import './List.css';

function List() {
    const items = ['Item1', 'Item2', 'Item3', 'Item4', 'Item5']
    

    const itemList = items.map(item =>
        {
            return <div className="list" key="item.key">
                <h2>{item}</h2>
            </div>
        })
    return <div>{itemList}</div>
}
export default List

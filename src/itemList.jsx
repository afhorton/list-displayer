import React from "react";

function ItemList ({items}) {

    return (
        <div>
            <h2>Your items are:</h2>
            <ul>
                {items.map(
                    (item, index) => 
                    (
                        <li key={index}>{item}</li>
                    )
                )}
            </ul>
        </div>
    )

} 

export default ItemList;
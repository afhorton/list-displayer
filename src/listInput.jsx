import { useState } from "react";
import ItemList from './itemList'

function ItemInput() {
    const [inputValue, setInputValue] = useState('');
    const [listItems, setListItems] = useState([]);

    const handleInputChange = (e) => {
        setInputValue(e.target.value)
};

    const handleAddItem = () => {
        if (inputValue.trim() !== '') {
            setListItems([...listItems, inputValue]);
            setInputValue('');
        }
    }
    return ( 
        <>
        <h1>What do you need?</h1>
        <div>
        <input
        type="text"
        value={inputValue}
        onChange={handleInputChange}
        placeholder="Put in an item..."
        />
        <button onClick={handleAddItem}>Add</button>
        </div>
        <h1>Here's your list:</h1>
        <ItemList items={listItems}/>
        </>

    )

}

export default ItemInput;
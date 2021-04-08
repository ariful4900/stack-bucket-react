import React from 'react';
import useShoppingItems from '../../hooks/useShoppingItem';

const Suggestions = () => {
    const { createItem, getSuggestions } = useShoppingItems();

    const handleClick = (sug) => {
        createItem(sug.text, sug)
    }

    const suggestions = getSuggestions()
    return (
        <div style={{wid:'100%', paddingRight: '2rem'}}>
            <div className="add-item_suggestions">
                <div className="add-item_suggestion-chips">
                    {suggestions.length > 0 && suggestions.map(sug=>(
                        <div className="add-item__suggestion-chip-item" key={sug.id} onClick={()=>handleClick(sug)}>
                            {sug.text}
                        </div>
                    ))}
                </div>
            </div>

        </div>
    );
}

export default Suggestions;

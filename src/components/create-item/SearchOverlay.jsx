import { useStoreActions, useStoreState } from 'easy-peasy';
import React, { useEffect } from 'react';
import { icons } from '../../assets';
import useShoppingItems from '../../hooks/useShoppingItem';

const SearchOverlay = () => {
    const { createItem } = useShoppingItems();

    const { serachTerm, searchItems } = useStoreState(state => state.suggestions);

    const focus = useStoreState(state => state.ui.searchOverlayFocus);

    const setFocus = useStoreActions(actions => actions.ui.setSearchOverlayFocus);
    const changeSearchTerm = useStoreActions(actions => actions.suggestions.changeSearchTerm);

    useEffect(() => {
        if (serachTerm && serachTerm.length > 0) {
            setFocus(true)
        } else {
            setFocus(false)
        }
    }, [serachTerm, setFocus, searchItems]);


    const handleClick = (sug) => {
        if (createItem(sug.text, sug)) {
            changeSearchTerm('');
        }
    }
    return (
        <div className={focus ? "add-item_filter-overlay" : "add-item_filter-overlay hide"}>
            <ul className="add-item__filter-list">
                {searchItems.map(sug => (
                    <li key={sug.id} className="add-ite__filter-item" onClick={() => { handleClick(sug) }}>
                        <div className="add-item__filter-content">
                            <img src={icons.searchIcon} alt="Search Icon" className="add-item__filter-icon" />
                            {sug.text}
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default SearchOverlay;

import React from 'react';
import { icons } from '../../assets';
import SearchOverlay from './SearchOverlay';

const CreateItem = ({value, placeholder, onChange, onKeyPress, searchOverlay}) => {
    return (
        <section className="section add-item no-print __shadow-sm">
            <div className="add-item__relative">
                <div className="add-item__input">
                    <img className="add-item__icon" src={icons.pluseIcon} alt="Create New Bucket Icon" />
                    <input type="text"
                        className="add-item__input-field"
                        placeholder={placeholder}
                        value={value}
                        onChange={onChange }
                        onKeyPress={onKeyPress} />
                </div>
                {searchOverlay && <SearchOverlay/>}
            </div>
        </section>
    );
}

export default CreateItem;

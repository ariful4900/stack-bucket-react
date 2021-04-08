import { createStore } from "easy-peasy";
import BucketModel from "./bucketModel";
import ItemModel from "./itemModel";
import SuggestionModel from "./suggestionModel";
import UIModel from "./uiModel";

const store = createStore({
    buckets: BucketModel,
    shoppingItems: ItemModel,
    suggestions: SuggestionModel,
    ui: UIModel,
});

export default store
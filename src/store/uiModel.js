import { action } from "easy-peasy";

const UIModel = {
    searchOverlayFocus: false,
    setSearchOverlayFocus: action((state, payload) => {
        state.searchOverlayFocus = payload
    })
}
export default UIModel;
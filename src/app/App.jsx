import { StoreProvider } from "easy-peasy";
import Nav from "../components/nav";
import store from "../store";
import {brand} from "../assets"
import CreateItem from "../components/create-item";

function App() {
    return (
        <StoreProvider store={store}>
            <Nav brandLogo={brand.brandLogo} name="Stack Bucket" showMenu/>
            <CreateItem/>
        </StoreProvider>
    );
}

export default App;
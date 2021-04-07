import { StoreProvider } from "easy-peasy";
import store from "../store";

function App() {
    return ( 
    <StoreProvider store={store}> 
         <h1> Hello World </h1>
    </StoreProvider>
    );
}

export default App;
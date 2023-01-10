import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools} from "redux-devtools-extension";
import rootReducer from "./reducers/rootReducer";

const store = createStore(rootReducer, {}, compose( //compose burada iki farklı şey çağırmak istediğimde bunları burada birleştirmeme yardımcı oluyor
    applyMiddleware(thunk), // istediğimiz middlewareleri parantez iççine aynı şekilde yazarak çağırabiliriz
    composeWithDevTools()
));

export default store;
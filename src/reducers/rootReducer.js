import { combineReducers } from "redux";
import postReducer from "./post"; //frontend tarafında .js olarak uzantı belirtmemize gerek yok backend tarafında vardı

const rootReducer = combineReducers ({
    posts: postReducer, //storeda state.post dediğimde burası çağrılacak
});

export default rootReducer;
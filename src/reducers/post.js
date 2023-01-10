import * as types from "../actions/types";

const initialState = {
    posts: [],
};

const postReducer =(state = initialState, action) => {
    switch (action.type) {
        case types.FETCH_POSTS:
            return {
                ...state, //state'i doğrudan değiştirmememiz gerekiyor kopyasının dönmesi lazım
                posts: action.payload, //değiştirmek istediğim alan
            };


    default:    
        return {
            ...state, //hiçbir action tipiyle uyumlu değilse, değişiklik yapmadan stateimi döndür
        };
    }
};

export default postReducer;
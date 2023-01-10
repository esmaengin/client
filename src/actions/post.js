import * as types from "./types"; //types.js deki her şeyi import ediyorum 

export const fetchPosts = () => {
    return {
        type: types.FETCH_POSTS,
        payload: [] //verinin taşındığı kısım (mongoDB den gelecek)
    }
}


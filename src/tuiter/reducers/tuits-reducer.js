import { createSlice } from "@reduxjs/toolkit";
import tuits from "./tuits.json";

const currentUser = {
    "userName": "Master Owl",
    "handle": "@master_owl",
    "image": "owl.jpg",
};

const templateTuit = {
    ...currentUser,
    "topic": "Owls",
    "time": "2h",
    "liked": false,
    "replies": 0,
    "retuits": 0,
    "likes": 0,
}


const tuitsSlice = createSlice({
    name: 'tuits',
    initialState: { tuits: tuits },
    reducers: {
        createTuit(state, action) {
            console.log(JSON.stringify(action.payload))
            console.log((JSON.stringify(state.tuits)))
            state.tuits.unshift({
                ...action.payload,
                ...templateTuit,
                _id: (new Date()).getTime(),
            })
        },
        likeTuit(state, action) {
            // state represents the current state of all tuits (can modify the state by using state)
            // action.payload is the argument passed to the likeTuit function
            const tuit = state.tuits.find(tuit => tuit._id === action.payload._id);
            tuit.likes = action.payload.liked ? tuit.likes - 1 : tuit.likes + 1;
            tuit.liked = !action.payload.liked
        },
        deleteTuit(state, action) {
            const index = state.tuits
                .findIndex(tuit =>
                    tuit._id === action.payload);
            state.tuits.splice(index, 1);
        }
    }

});

export const { createTuit, likeTuit, deleteTuit } = tuitsSlice.actions;
export default tuitsSlice.reducer;
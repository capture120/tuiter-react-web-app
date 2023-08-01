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

        }
    }

});

export const { createTuit, likeTuit} = tuitsSlice.actions;
export default tuitsSlice.reducer;
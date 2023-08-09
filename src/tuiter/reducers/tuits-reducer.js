import { createSlice } from "@reduxjs/toolkit";
// import tuits from "./tuits.json";
import { createTuitThunk, findTuitsThunk, updateTuitThunk, deleteTuitThunk } from "../services/tuits-thunks";


// initial state has no tuits
const initialState = {
    tuits: [],
    loading: false // loading flag to display spinner
}


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
    initialState, // same as "initialState": initialState
    // define asynchronous reducers
    extraReducers: {
        // if request is not yet fulfilled set loading true so UI can display spinner
        [findTuitsThunk.pending]:
            (state) => {
                state.loading = true
                // empty tuits since we are still fetching them
                state.tuits = []
            },
        // when we get response, request is fulfilled
        [findTuitsThunk.fulfilled]:
            // we extract/destruct payload from action object
            (state, { payload }) => {
                state.loading = false
                // payload has tuits from server and update redux state
                state.tuits = payload
            },
        [findTuitsThunk.rejected]:
            (state, action) => {
                state.loading = false
                state.error = action.error
            },
        [deleteTuitThunk.fulfilled]:
            (state, { payload }) => {
                state.loading = false
                state.tuits = state.tuits.filter(t => t._id !== payload)
            },
        [createTuitThunk.fulfilled]:
            (state, { payload }) => {
                state.loading = false
                state.tuits.push(payload)
            },
        // when server update is done
        [updateTuitThunk.fulfilled]:
            // payload contains updated tuit
            (state, { payload }) => {
                state.loading = false
                const tuitNdx = state.tuits.findIndex((t) => t._id === payload._id)
                state.tuits[tuitNdx] = { ...state.tuits[tuitNdx], ...payload } // merge old tuit with updated tuit
            },


    },
    // initialState: { tuits: tuits },
    reducers: {
        // createTuit(state, action) {
        //     console.log(JSON.stringify(action.payload))
        //     console.log((JSON.stringify(state.tuits)))
        //     state.tuits.unshift({
        //         ...action.payload,
        //         ...templateTuit,
        //         _id: (new Date()).getTime(),
        //     })
        // },
        // likeTuit(state, action) {
        //     // state represents the current state of all tuits (can modify the state by using state)
        //     // action.payload is the argument passed to the likeTuit function
        //     const tuit = state.tuits.find(tuit => tuit._id === action.payload._id);
        //     tuit.likes = action.payload.liked ? tuit.likes - 1 : tuit.likes + 1;
        //     tuit.liked = !action.payload.liked
        // },
        // deleteTuit(state, action) {
        //     const index = state.tuits
        //         .findIndex(tuit =>
        //             tuit._id === action.payload);
        //     state.tuits.splice(index, 1);
        // }
    }

});

// export const { createTuit, likeTuit, deleteTuit } = tuitsSlice.actions;
export default tuitsSlice.reducer;
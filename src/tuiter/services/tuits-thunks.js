import { createAsyncThunk } from "@reduxjs/toolkit";
import * as service from './tuits-service'; // import all exported functions as service

// create thunk for findTuits
// give unique name, thunk invokes
export const findTuitsThunk = createAsyncThunk(
    "tuits/findTuits",
    async () => await service.findTuits() // service function, returned data goes in redux's action's payload
);

export const deleteTuitThunk = createAsyncThunk(
    'tuits/deleteTuit', // unique thunk identifier
    async (tuitId) => {
        await service.deleteTuit(tuitId)
        // return tuit ID so we can remove tuit from reducer's store
        return tuitId
    })

export const createTuitThunk = createAsyncThunk(
    'tuits/createTuit',
    async (tuit) => {
        const newTuit = await service.createTuit(tuit)
        return newTuit
    })

export const updateTuitThunk =
    createAsyncThunk(
        'tuits/updateTuit',
        async (tuit) =>
            await service.updateTuit(tuit) // sends updated tuit to server with service
    )

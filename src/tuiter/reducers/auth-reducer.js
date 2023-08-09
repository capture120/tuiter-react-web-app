import { createSlice } from "@reduxjs/toolkit";
import { loginThunk, registerThunk, logoutThunk, profileThunk, updateUserThunk } from "../services/auth-thunks";


const authSlice = createSlice({
    name: "auth",
    initialState: { currentUser: null },
    reducers: {},
    extraReducers: {
        /*
            - STATE is the current Redux store state
            - PAYLOAD represents the response json that is sent by the authentication controller
              in tuiter-node-server-app/controllers/auth-controller.js (or is undefined when response is a status)

        FUNCITONALITY
        - thunk is called with dispatch, thunk calls the service, if service returns okay thunk is fulfilled,
        - reducer handles if thunk is fulfilled (generally uses paylaod from the thunk to update the store's state)

        AUTHENTICATION
        - to track who is logged in, we use the currentUser attribute in the store state
        - currentUser in state should only be on the frontend (this react project) side 
          since the store is only accessible at the frontend where it is created
        */
        [loginThunk.fulfilled]: (state, { payload }) => {
            state.currentUser = payload;
        },
        [logoutThunk.fulfilled]: (state) => {
            state.currentUser = null;
        },

        [profileThunk.fulfilled]: (state, { payload }) => {
            state.currentUser = payload;
            // console.log("REACHED$$$$$$$$$$$$$$$$$$$$$$$$")
            // console.log(state.currentUser)
        },
        [profileThunk.rejected]: (state, { payload }) => {
            state.currentUser = null;
            // console.log("REJECTED#######################")
        },
        [profileThunk.pending]: (state, action) => {
            state.currentUser = null;
            // console.log("PENDING!!!!!!!!!!!!!!!!!!!!!!!!")
        },

        [updateUserThunk.fulfilled]: (state, { payload }) => {
            state.currentUser = payload;
        },

        [registerThunk.fulfilled]: (state, { payload }) => {
            state.currentUser = payload;
        },
    },
});

export default authSlice.reducer;
import { createAsyncThunk } from "@reduxjs/toolkit";
import * as authService from "./auth-service";


export const loginThunk = createAsyncThunk(
    "user/login", async (credentials) => {
        const user = await authService.login(credentials);
        return user;
    }
);

export const profileThunk = createAsyncThunk(
    "auth/profile", async () => {
        const response = await authService.profile();
        // !!!!!!!!!!! Fixed bug here, there was no await so service would get info but thunk would not !!!!!!!!
        // console.log(`RESPONSE Thunk: ${JSON.stringify(response)}`);
        return response.data;
    }
);

export const logoutThunk = createAsyncThunk(
    "auth/logout", async () => {
        return await authService.logout();
    }
);

export const updateUserThunk = createAsyncThunk(
    "user/updateUser", async (user) => {
        await authService.updateUser(user);
        // console.log(`updateUserThunk: ${JSON.stringify(user)}`);
        return user;
    }
);

export const registerThunk = createAsyncThunk(
    "user/register", async (credentials) => {
        const user = await authService.register(credentials);
        return user;
    }
);
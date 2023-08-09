import { Routes, Route, redirect, Navigate } from "react-router";
import Nav from "../nav";
import NavigationSidebar from "./navigation-sidebar";
import WhoToFollowList from "./who-to-follow-list";
// import WhoToFollowListItem from "./who-to-follow-list/who-to-follow-list-item";
import HomeScreen from "./home-screen";
import BookmarksScreen from "./bookmarks-screen";
// import ProfileScreen from "./profile-screen";
import ExploreScreen from "./explore-screen";

import ProfileScreen from "./user/profile";
import LoginScreen from "./user/login-screen";
import RegisterScreen from "./user/register-screen";

// a4
import whoReducer from "./reducers/who-reducer.js";
import tuitsReducer from "./reducers/tuits-reducer.js";
import authReducer from "./reducers/auth-reducer";
import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
const store = configureStore({
    reducer: { who: whoReducer, tuits: tuitsReducer, user: authReducer }
});


function Tuiter() {
    return (
        <Provider store={store}>
            <div>
                <Nav />
                <div className="row">
                    <div className="col-2">
                        <NavigationSidebar />
                    </div>
                    <div className="col-7 col-lg-6 col-md-10 col-sm-10">
                        <Routes>
                            {/* <Route path="/" element={<Navigate to="/login"/> }/> */}
                            <Route path="/home" element={<HomeScreen />} />
                            <Route path="/explore" element={<ExploreScreen />} />
                            <Route path="/bookmarks" element={<BookmarksScreen />} />
                            <Route path="/login" element={<LoginScreen />} />
                            <Route path="/register" element={<RegisterScreen />} />
                            <Route path="/profile" element={<ProfileScreen />} />
                        </Routes>
                    </div>
                    <div className="col-3 col-lg-4 d-none d-lg-block">
                        <WhoToFollowList />
                    </div>
                </div>
            </div>
        </Provider>
    );
}
export default Tuiter;
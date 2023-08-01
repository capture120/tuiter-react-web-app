import { Routes, Route } from "react-router";
import Nav from "../nav";
import NavigationSidebar from "./navigation-sidebar";
import WhoToFollowList from "./who-to-follow-list";
// import WhoToFollowListItem from "./who-to-follow-list/who-to-follow-list-item";
import HomeScreen from "./home-screen";
import BookmarksScreen from "./bookmarks-screen";
import ProfileScreen from "./profile-screen";
import ExploreScreen from "./explore-screen";

// a4
import whoReducer from "./reducers/who-reducer.js";
import tuitsReducer from "./reducers/tuits-reducer.js";
import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
const store = configureStore({ reducer: { who: whoReducer, tuits: tuitsReducer } });


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
                            <Route path="/home" element={<HomeScreen />} />
                            <Route path="/explore" element={<ExploreScreen />} />
                            <Route path="/bookmarks" element={<BookmarksScreen />} />
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
import React from "react";
import Tuits from "./tuits-list";
import WhatsHappening from "./whats-happening";

function HomeScreen() {
    return (
        <>
            <h4>Home</h4>
            <WhatsHappening />
            <Tuits />
        </>);
}
export default HomeScreen;
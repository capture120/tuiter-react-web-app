import React from "react";
import { useSelector } from "react-redux";
import TuitItem from "./tuit-item";

const Tuits = () => {
    const {tuits} = useSelector(state => state.tuits);
    return (
        <>
            <h1>Tuits</h1>
            <ul className="list-group">
                {
                    tuits.map(tuit => <TuitItem key={tuit._id} tuit={tuit}/>)
                }
            </ul>
        </>
    )
};

export default Tuits;
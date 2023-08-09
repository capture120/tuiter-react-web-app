import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import TuitItem from "./tuit-item";
import { findTuitsThunk } from "../services/tuits-thunks";

const TuitsList = () => {
    const { tuits, loading } = useSelector(state => state.tuits) // grab tuits and loading flag from reducer
    const dispatch = useDispatch(); // on component load
    /*
    invoke find tuits thunk to fetch tuits and
    put them in the reducer's store so we can
    extract them with useSelector() and render
    the tuits here
    */
    useEffect(() => {
        dispatch(findTuitsThunk())
    }, [])
    return (
        // if loading flag is true, then show a
        // loading message while data is still
        // coming back from the server
        <ul className="list-group">
            {loading &&
                <li className="list-group-item">
                    Loading...
                </li>
            }
            {
                tuits.map(tuit => <TuitItem key={tuit._id} tuit={tuit} />)
            }

        </ul>
    );
};
export default TuitsList;
import React from "react";
import TuitSummaryItem from "./tuit-summary-item";

// a4
import { useSelector } from "react-redux";

const TuitSummaryList = () => {
    const {tuits} = useSelector(state => state.tuits);
    return (
        <ul className="list-group">
            {
                tuits.map(tuit =>
                    <TuitSummaryItem
                        key={tuit._id} tuit={tuit} />)
                // * Github Copilot States: "key is a special prop that React uses to keep track of the elements in the list" *
                // NOTE: YOU CANNOT USE IT FOR YOURSELF AS A VARIABLE
            }
        </ul>
    )
};

export default TuitSummaryList;
import React from "react";
import tuitsArray from './tuits.json';
import TuitSummaryItem from "./tuit-summary-item";

const TuitSummaryList = () => {
    return (
        <ul className="list-group">
            {
                tuitsArray.map(tuit =>
                    <TuitSummaryItem
                        key={tuit._id} tuit={tuit} />)
                // * Github Copilot: key is a special prop that React uses to keep track of the elements in the list *
                // NOTE: YOU CANNOT USE IT FOR YOURSELF AS A VARIABLE
            }
        </ul>
    )
};

export default TuitSummaryList;
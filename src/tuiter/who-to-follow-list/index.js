import React from "react";
import whoArray from './who.json';
import WhoToFollowListItem from "./who-to-follow-list-item";
const WhoToFollowList = () => {
    return (
        <ul className="list-group">
            <li className="list-group-item">
                <h3>Who to follow</h3>
            </li>
            {
                whoArray.map(who =>
                    <WhoToFollowListItem
                        key={who._id}
                        who={who} />
                        // * Github Copilot: key is a special prop that React uses to keep track of the elements in the list *
                        // NOTE: YOU CANNOT USE IT FOR YOURSELF AS A VARIABLE
                )
            }
        </ul>
    );
};
export default WhoToFollowList;
import { React, useState } from "react";
import "./styles.css"

import { IconContext } from "react-icons";
import { BiMessageRounded, BiShare } from "react-icons/bi";
import { AiFillHeart, AiOutlineRetweet, AiOutlineHeart } from "react-icons/ai";

// import { likeTuit } from "../reducers/tuits-reducer.js";
import { updateTuitThunk } from "../services/tuits-thunks";
import { useDispatch } from "react-redux";

const TuitStats = (
    {
        tuit = {
            "_id": 345,
            "liked": true,
            "replies": 1,
            "retuits": 1,
            "likes": 1,
        }
    }
) => {
    // const [cur_tuit, setLikes] = useState({ ...tuit });
    const dispatch = useDispatch();
    const likePressedEvent = () => {
        if (tuit.liked === true) {
            dispatch(updateTuitThunk({ ...tuit, likes: tuit.likes - 1, liked: false}))
        } else {
            dispatch(updateTuitThunk({ ...tuit, likes: tuit.likes + 1, liked: true}))
        }
    }
    return (
        <div className="row ms-5 ps-3">
            <div className="col-3">
                <div className="row">
                    <span className="col-2">
                        <BiMessageRounded className="wd-button" />
                    </span>
                    <span className="col-6">{tuit.replies}</span>
                </div>
            </div>
            <div className="col-3">
                <div className="row">
                    <span className="col-2">
                        <AiOutlineRetweet className="wd-button" />
                    </span>
                    <span className="col-6">{tuit.retuits}</span>
                </div>
            </div>
            <div class="col-3">
                <div className="row">
                    <span className="col-2">
                        {tuit.liked ? <IconContext.Provider value={{ color: "red" }}>
                            <AiFillHeart className="wd-button" onClick={likePressedEvent} />
                        </IconContext.Provider> : <AiOutlineHeart className="wd-button" onClick={likePressedEvent} />}
                    </span>
                    <span className="col-6">{tuit.likes}</span>
                </div>
            </div>
            <div className="col-3">
                <BiShare className="wd-button" />
            </div>
        </div>
    )
};

export default TuitStats;
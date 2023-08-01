import React from "react";
import TuitStats from "./tuit-stats";
import { IconContext } from "react-icons";
import { IoMdCheckmarkCircle } from "react-icons/io";
import { BsDot } from "react-icons/bs";

const TuitHomeItem = (
    {
        tuit = {
            "_id": 345,
            "userName": "Calm Owl",
            "time": "4d",
            "image": "owl.jpg",
            "liked": true,
            "replies": 1,
            "retuits": 1,
            "likes": 1,
            "handle": "@owl3",
            "tuit": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas pharetra nisl."
        }
    }
) => {
    return (
        <li className="list-group-item">
            <div className="row">
                <div className="col-1 ">
                    <img width={70} height={70} className="float-start rounded-circle" src={`/images/${tuit.image}`} />
                </div>
                <div className="col-10 ms-4 ps-4 ps-xxl-3">
                    <div>
                        <span class="fw-bold">{tuit.userName}</span>
                        <span className="ms-2 ps-1">
                            <IconContext.Provider value={{ color: "blue" }}>
                                <IoMdCheckmarkCircle />
                            </IconContext.Provider>
                        </span>
                        <span className="ms-2">{tuit.handle}</span>
                        <BsDot />{tuit.time}
                    </div>
                    <div>{tuit.tuit}</div>
                </div>
            </div>
            <TuitStats key={tuit._id} tuit={tuit} />
        </li>
    )
};

export default TuitHomeItem;
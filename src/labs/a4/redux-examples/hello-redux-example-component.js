import React from "react";
import { useSelector } from "react-redux";

const HelloReduxExampleComponent = () => {
    const message = useSelector((state) => state.hello.message);
    return (
        <h4>
            {message}
        </h4>
    )
}

export default HelloReduxExampleComponent;
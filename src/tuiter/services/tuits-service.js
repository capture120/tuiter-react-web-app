import axios from 'axios';

// location of HTTP services
const TUITS_API = 'http://localhost:4000/api/tuits';

export const createTuit = async (tuit) => {
    const response = await axios.post(TUITS_API, tuit)
    return response.data;
}


export const findTuits = async () => {
    // send HTTP GET request to TUITS_API
    const response = await axios.get(TUITS_API);
    // extract JSON array from response from server
    const tuits = response.data;
    return tuits;
}

// send HTTP DELETE request to server
export const deleteTuit = async (tid) => {
    // append tuit's ID to URL
    const response = await axios.delete(`${TUITS_API}/${tid}`)
    // data contains response's status we'll ignore for now
    return response.data
}

// service function accepts tuit to send server
export const updateTuit = async (tuit) => {
    // send HTTP PUT request appending tuit's ID
    // to URL, and embed tuit object in BODY
    const response = await axios
        .put(`${TUITS_API}/${tuit._id}`, tuit);
    // return tuit update to update in reducer's state's store
    return tuit;
}


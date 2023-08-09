import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import { profileThunk, logoutThunk, updateUserThunk } from "../services/auth-thunks";

function ProfileScreen() {
    const { currentUser } = useSelector((state) => { return state.user });
    // const { currentUser } = useSelector((state) => {console.log(`######### STATE #######: ${JSON.stringify(state)}`); return state.user});
    const [profile, setProfile] = useState(currentUser);
    // console.log(`######### Current User #######: ${JSON.stringify(currentUser)}`);
    // console.log(`######### Profile #######: ${JSON.stringify(profile)}`);

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const save = async () => { await dispatch(updateUserThunk(profile)); };

    const loadProfile = async () => {
        const { payload } = await dispatch(profileThunk());
        setProfile(payload);
        // console.log(`!!!!!!!! PAYLOAD !!!!!!!!: ${JSON.stringify(payload)}`);
    };
    useEffect(() => {
        loadProfile();
    }, []);

    // ? for some reason this still works even though profileThunk uses an async call
    // useEffect(() => {
    //     dispatch(profileThunk())
    // }, []);


    return (
        <div>
            <h1>Profile Screen</h1>
            {profile && (
                <div>
                    <div>
                        <label>First Name</label>
                        <input type="text" value={profile.firstName}
                            onChange={(event) => {
                                const newProfile = {
                                    ...profile, firstName: event.target.value,
                                };
                                setProfile(newProfile);
                            }} />
                    </div>
                    <div>
                        <label>Last Name</label>
                        <input type="text" value={profile.lastName}
                            onChange={(event) => {
                                const newProfile = {
                                    ...profile, lastName: event.target.value,
                                };
                                setProfile(newProfile);
                            }} />
                    </div>
                </div>
            )}
            <button
                onClick={() => {
                    dispatch(logoutThunk());
                    navigate("/tuiter/login");
                }}>
                Logout
            </button>
            <button onClick={save}>
                Save
            </button>
        </div>);

}
export default ProfileScreen;
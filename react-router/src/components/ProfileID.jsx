import {useLocation, useParams} from "react-router-dom";


function ProfileID() {
    // Get the id parameter from the route
    const { id } = useParams();
    const location  = useLocation()
    console.log(location)

    return (
        <div>
            <h1>Profile ID: {id}</h1>
        </div>
    );
}

export default ProfileID;
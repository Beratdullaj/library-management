import { getAuth } from "firebase/auth";
import apiCaller from "../apiCaller";

const deleteAssets= async (id) => {

    const token = await getAuth().currentUser.getIdToken();

    return apiCaller.delete(`assets/${id}`, {
        headers: {authorization: `Bearer ${token}`}
    })

};

export default deleteAssets;
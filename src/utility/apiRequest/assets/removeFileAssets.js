import { getAuth } from "firebase/auth";
import apiCaller from "../apiCaller";

const removeFileAssets = async (id, file) => {

    const token = await getAuth().currentUser.getIdToken();

    return apiCaller.put(`assets/${id}/removeFile/${file.name}`, {
        headers: {authorization: `Bearer ${token}`}
    })

};

export default removeFileAssets;
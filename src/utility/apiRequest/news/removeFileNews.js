import { getAuth } from "firebase/auth";
import apiCaller from "../apiCaller";

const removeFileNews = async (id, file) => {

    const token = await getAuth().currentUser.getIdToken();

    return apiCaller.put(`news/${id}/removeFile/${file.name}`, {
        headers: {authorization: `Bearer ${token}`}
    })

};

export default removeFileNews;
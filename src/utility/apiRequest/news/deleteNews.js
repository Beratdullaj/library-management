import { getAuth } from "firebase/auth";
import apiCaller from "../apiCaller";

const deleteNews = async (id) => {

    const token = await getAuth().currentUser.getIdToken();

    return apiCaller.delete(`news/${id}`, {
        headers: {authorization: `Bearer ${token}`}
    })

};

export default deleteNews;
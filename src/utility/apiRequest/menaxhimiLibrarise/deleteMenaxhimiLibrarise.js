import { getAuth } from "firebase/auth";
import apiCaller from "../apiCaller";

const deleteMenaxhimiLibrarise = async (id) => {

    const token = await getAuth().currentUser.getIdToken();

    return apiCaller.delete(`menaxhimi-librarise/${id}`, {
        headers: {authorization: `Bearer ${token}`}
    })

};

export default deleteMenaxhimiLibrarise;
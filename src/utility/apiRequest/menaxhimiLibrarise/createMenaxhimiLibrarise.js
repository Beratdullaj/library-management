import { getAuth } from "firebase/auth";
import apiCaller from "../apiCaller";

const createMenaxhimiLibrarise = async (menaxhimiLibrariseBody) => {
    const token = await getAuth().currentUser.getIdToken();
    const {data} = await apiCaller.post('menaxhimi-librarise/create', menaxhimiLibrariseBody,{
        authorization: `Beare ${token}`,
    });
    return data;
};
export default createMenaxhimiLibrarise;
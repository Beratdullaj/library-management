import { getAuth } from "firebase/auth";
import apiCaller from "../apiCaller";

const createAssets = async (assetsBody) => {
    const token = await getAuth().currentUser.getIdToken();
    const {data} = await apiCaller.post('assets/create', assetsBody,{
        authorization: `Beare ${token}`,
    });
    return data;
};
export default createAssets;
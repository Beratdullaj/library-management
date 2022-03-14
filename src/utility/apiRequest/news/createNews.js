import { getAuth } from "firebase/auth";
import apiCaller from "../apiCaller";

const createNews = async (newsBody) => {
    const token = await getAuth().currentUser.getIdToken();
    const {data} = await apiCaller.post('news/create', newsBody,{
        authorization: `Beare ${token}`,
    });
    return data;
};
export default createNews;
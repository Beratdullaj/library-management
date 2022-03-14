import apiCaller from "../apiCaller";
import {getAuth} from 'firebase/auth';

const getNewsList = async () => {
    const token = await getAuth().currentUser.getIdToken();
    const result =  await  apiCaller.get("news/list",{
    headers: {
        authorization: `Bearer ${token}`,
    },
});
     return result.data;
};
export default getNewsList;
import apiCaller from "../apiCaller";
import {getAuth} from 'firebase/auth';

const getNews = async (newsId) => {
    const token = await getAuth().currentUser.getIdToken();
    const result =  await  apiCaller.get(`news/${newsId}`,{
    headers: {
        authorization: `Bearer ${token}`,
    },
});
     return result.data;
};
export default getNews;
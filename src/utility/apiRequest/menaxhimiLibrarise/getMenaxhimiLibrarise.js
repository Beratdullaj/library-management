import apiCaller from "../apiCaller";
import {getAuth} from 'firebase/auth';

const getLibrariaList = async (menaxhimiLibrariseId) => {
    const token = await getAuth().currentUser.getIdToken();
    const result =  await  apiCaller.get(`menaxhimi-librarise/${menaxhimiLibrariseId}`,{
    headers: {
        authorization: `Bearer ${token}`,
    },
});
     return result.data;
};
export default getLibrariaList;
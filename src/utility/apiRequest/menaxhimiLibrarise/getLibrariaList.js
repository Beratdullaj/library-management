import apiCaller from "../apiCaller";
import {getAuth} from 'firebase/auth';

const getLibrariaList = async () => {
    const token = await getAuth().currentUser.getIdToken();
    const result =  await  apiCaller.get("menaxhimi-librarise/list",{
    headers: {
        authorization: `Bearer ${token}`,
    },
});
     return result.data;
};
export default getLibrariaList;
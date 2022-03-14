import apiCaller from "../apiCaller";
import {getAuth} from 'firebase/auth';

const getAssets= async (assetsId) => {
    const token = await getAuth().currentUser.getIdToken();
    const result =  await  apiCaller.get(`assets/${assetsId}`,{
    headers: {
        authorization: `Bearer ${token}`,
    },
});
     return result.data;
};
export default getAssets;
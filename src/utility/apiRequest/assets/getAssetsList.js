import apiCaller from "../apiCaller";
import {getAuth} from 'firebase/auth';

const getAssetsList = async () => {
    const token = await getAuth().currentUser.getIdToken();
    const result =  await  apiCaller.get("assets/list",{
    headers: {
        authorization: `Bearer ${token}`,
    },
});
     return result.data;
};
export default getAssetsList;
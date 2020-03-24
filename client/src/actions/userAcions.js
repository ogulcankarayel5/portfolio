import axios from "axios";
import {USER_LOADING,USER_LOADED} from './types';


export const getUser =  () => async (dispatch,getState) => {

    try{
        dispatch({type:USER_LOADING});
        const user = await axios.get("http://localhost:5000/api/users");
        
        dispatch({type:USER_LOADED,payload:user.data.data});
    }
    catch(err){
        console.log(err);
    }
   
}
import Axios from 'axios';
import authHeader from '../../services/auth-header';


export const GetUserList = () => async dispatch => {
    try{
        dispatch({
            type:"USERS_LOADING"
        })
        const res= await Axios.get("http://localhost:8080/Users",{ headers: authHeader() });
        dispatch({
            type: "USERS_LOADED",
            payload: res.data
        })
    }
    catch(e){
        dispatch({
        type:"USERS_FAILED",
    })
    }
};


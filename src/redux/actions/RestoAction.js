import Axios from 'axios';
import authHeader from '../../services/auth-header';


export const GetRestoList = () => async dispatch => {
    try{
        dispatch({
            type:"RESTAURANT_LIST_LOADING"
        })
        const res= await Axios.get("http://localhost:8080/Restaurants",{ headers: authHeader() });

        dispatch({
            type: "RESTAURANT_LIST_SUCCESS",
            payload: res.data
        })
    }
    catch(e){
        dispatch({
        type:"RESTAURANT_LIST_FAILED",
    })
    }
};


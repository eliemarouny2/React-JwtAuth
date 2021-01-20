import Axios from 'axios';
import { useSelector } from 'react-redux';
import AuthService from "../../services/auth.service";
import authHeader from '../../services/auth-header';





export const GetVisitList = (data) => async dispatch => {
    try{
        dispatch({
            type:"VISIT_LIST_LOADING"
        })
        const user=JSON.parse(localStorage.getItem('current'));
        console.log(user);
       const currentUser = AuthService.getCurrentUser();
        const res=await Axios.get(`http://localhost:8080/Visits`,{ headers: authHeader() });






        dispatch({
            type:"VISIT_LIST_SUCCESS",
            payload: res.data
        })
    }
    catch(e){
        dispatch({
            type:"VISIT_LIST_FAILED",
        })
    }
};

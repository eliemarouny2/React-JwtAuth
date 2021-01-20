import Axios from 'axios';
import authHeader from '../../services/auth-header';

export const AddVisitAction=(data) => async dispatch => {
try{
    dispatch({
        type:"NO_NEW_VISITS"
    })
    const config = {
        headers:   authHeader() 
    };

    await Axios.post("http://localhost:8080/addVisit",data,config);
    dispatch({
        type:"NEW_VISIT",
        payload:data.data
    })
  

    }
catch(error){
    dispatch({
        type:"NEW_VISIT_FAILED",
        errorMsg:"new visit failed to save"
    })
}
}
export default AddVisitAction;
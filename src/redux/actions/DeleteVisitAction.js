import Axios from 'axios';
import authHeader from '../../services/auth-header';

export const DeleteVisitAction=(data) => async dispatch => {
try{
    dispatch({
        type:"NO_VISITS_DELETED"
    })
    const config = {
        "headers":   authHeader() 
    };
    await Axios.delete(`http://localhost:8080/Visits/${data}`,config);
    dispatch({
        type:"VISIT_DELETED",
        payload:data.data
    })
  

    }
catch(error){
    dispatch({
        type:"VISIT_FAILED_TO_DELETE",
        errorMsg:"new visit failed to save"
    })
}
}
export default DeleteVisitAction
import Axios from 'axios';

export const RegistrationAction=(data) => async dispatch => {
try{
    dispatch({
        type:"NO_REGISTRATION_ADDED"
    })
    await Axios.post(`http://localhost:8080/registration`);
    dispatch({
        type:"REGISTRATION_ADDED",
        payload:data.data
    })
  

    }
catch(error){
    dispatch({
        type:"REGISTRATION_FAILED",
        errorMsg:"registration failed to save"
    })
}
}
export default RegistrationAction
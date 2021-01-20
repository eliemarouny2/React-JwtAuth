const DefaultState = {
    type:false,
    data:[]
}

const DeleteVisitReducer = (state=DefaultState,action) => {
    switch(action.type){
        case "NO_REGISTRATION_ADDED":
            return{
                ...state,
            }
        case"REGISTRATION_ADDED":
            return{
                type:true,
                data:action.payload
                
            }
        case "REGISTRATION_FAILED":
            return{
                type:false,
                errorMsg: "visit didn't delete"
            }
        default:
            return state
    }
};
export default DeleteVisitReducer
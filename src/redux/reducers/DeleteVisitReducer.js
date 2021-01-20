const DefaultState = {
    type:false,
    data:[]
}

const DeleteVisitReducer = (state=DefaultState,action) => {
    switch(action.type){
        case "NO_VISITS_DELETED":
            return{
                ...state,
            }
        case"VISIT_DELETED":
            return{
                type:true,
                data:action.payload
                
            }
        case "VISIT_FAILED_TO_DELETE":
            return{
                type:false,
                errorMsg: "visit didn't delete"
            }
        default:
            return state
    }
};
export default DeleteVisitReducer
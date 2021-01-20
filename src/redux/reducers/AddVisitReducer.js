const DefaultState = {
    type:false,
    data:[]
}

const AddVisitReducer = (state=DefaultState,action) => {
    switch(action.type){
        case "NO_NEW_VISITS":
            return{
                ...state,
            }
        case"NEW_VISIT":
            return{
                type:true,
                data:action.payload
                
            }
        case "NEW_VISIT_FAILED":
            return{
                type:false,
                errorMsg: "New visit not added"
            }
        default:
            return state
    }
};
export default AddVisitReducer;
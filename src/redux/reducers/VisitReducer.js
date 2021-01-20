const DefaultState = {
    loading: false,
    data: []
};

const VisitReducer = (state=DefaultState,action) => {
    switch(action.type){
        case "VISIT_LIST_LOADING":
            return{
                ...state,
                loading: true
            }
        case "VISIT_LIST_FAILED":
            return{
                ...state,
                loading:false,
                errorMsg: "unable to retrieve visited restaurants"
            }
        case "VISIT_LIST_SUCCESS":
            return{
                ...state,
                loading:true,
                data:action.payload,
                errorMsg:""
            }
        default:
            return state
    }
};
export default VisitReducer
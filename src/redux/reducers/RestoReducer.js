const DefaultState = {
    loading: false,
    data: []
};

const RestoReducer = (state=DefaultState,action) => {
    switch(action.type){
        case "RESTAURANT_LIST_LOADING":
            return{
                ...state,
                loading: true
                }
        case "RESTAURANT_LIST_FAILED":
            return{
                ...state,
                loading: false,
                 errorMsg: "unable to retrieve available restaurants"
                }
        case "RESTAURANT_LIST_SUCCESS":
            return{
                ...state,
                loading: true,
                data: action.payload,
                errorMsg:""
                }


        default:
            return state
    }
};
export default RestoReducer;
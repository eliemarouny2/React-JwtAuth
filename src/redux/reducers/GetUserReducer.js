const DefaultState = {
    loading: false,
    data: []
};

const GetUserReducer = (state=DefaultState,action) => {
    switch(action.type){
        case "USERS_LOADING":
            return{
                ...state,
                loading: true
                }
        case "USERS_FAILED":
            return{
                ...state,
                loading: false,
                 errorMsg: "unable to retrieve available users"
                }
        case "USERS_LOADED":
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
export default GetUserReducer;
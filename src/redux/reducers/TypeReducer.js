const DefaultState={
    type:false,
    data: ""
};

const TypeReducer=(state=DefaultState,action) =>{
    switch(action.type){
        case 'NO_TYPE_CHOSEN':
            return{
                ...state
            }
            case 'TYPE_CHOSEN':
                return{
                    type:true,
                    data:action.payload,
                }
                default:
                    return state
    }
};
export default TypeReducer;
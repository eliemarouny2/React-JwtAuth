const DefaultState={
	type:false,
	data: ""
};

const SearchReducer = (state=DefaultState,action) =>{
	switch(action.type){
		case 'INPUT_EMPTY':
			return{
			...state
			}
			case 'INPUT_NOT_EMPTY':
				return{
					type:true,
					data: action.payload,
					
				}
		default:
			return state
	}
};
export default SearchReducer;
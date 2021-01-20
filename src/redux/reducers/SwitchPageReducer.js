const SwitchPageReducer=(state=true, action ) => {
	switch( action.type ){
        
		case "RESTO_PAGE":
			return true;
		case "VISIT_PAGE":
			return false;
		default:
			return state;

	}
}

export default SwitchPageReducer;
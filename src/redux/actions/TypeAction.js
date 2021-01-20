export const GetTypeChosen = () => async dispatch => {
    try{
        dispatch({
            type:"NO_TYPE_CHOSEN"
        })
        const input=

        dispatch({
            type:"TYPE_CHOSEN",
            payload: input.data
        })
    }
    catch(e){
        dispatch({
            type:"TYPE_FAIL",
        })
    }
}
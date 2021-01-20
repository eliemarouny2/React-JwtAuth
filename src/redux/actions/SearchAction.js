
export const GetSearchInput = () => async dispatch => {
    try{
        dispatch({
            type:"INPUT_EMPTY"
        })
        const input= 

        dispatch({
            type:"INPUT_NOT_EMPTY",
            payload: input.data
        })
    }
    catch(e){
        dispatch({
            type:"INPUT FAILED",
        })
    }
};
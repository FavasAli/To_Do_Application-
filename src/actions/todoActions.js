export const storeTodo = (todo) => async (dispatch) => {
    try {
      
      dispatch({
        type: "STORE_SUCCESS",
        payload:{todo:todo,id:Math.random().toFixed(2)}
      }); 
      
    } catch (error) {
      dispatch({
        type: "STORE_FAIL",
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      });
    }
  };

export const deleteTodo = (id) => async (dispatch,getState) => {
    try {
      const {
        addedTodo:  todo ,
      } = getState()
      let datas=  todo.filter((data) => data.id != id)
      dispatch({
        type: "DELETE_TODO",
        payload:datas
      }); 
    } catch (error) {
      dispatch({
        type: "TODO_FAIL",
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      });
    }
  };

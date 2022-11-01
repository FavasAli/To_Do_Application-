export const storeTodo = (state = [{}], action) => {
    switch (action.type) {
      case "STORE_SUCCESS":
        // return {  ...state,bookmark: [state.bookmark,...action.payload] }
        return [...state,action.payload]
        case "DELETE_TODO":
        // return {  ...state,bookmark: [state.bookmark,...action.payload] }
        return action.payload
      default:
        return state
    }
  }
  



  
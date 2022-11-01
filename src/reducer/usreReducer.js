export const storeName = (state ='', action) => {
    switch (action.type) {
      case "USER-LOGIN":
        // return {  ...state,bookmark: [state.bookmark,...action.payload] }
        console.log(action.payload,'action.payload')
        return action.payload
      default:
        return state
    }
  }
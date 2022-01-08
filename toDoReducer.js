export const toDoReducer = (state=[], action) => {
    const {type} = action;
    switch (type) {
        case "ADD":
            return [...state,{id: Math.random(),description: action.description}]
          
        case "REMOVE":
           return state.filter(toDoReducer => toDoReducer.id !== action.id)
         
       default:
            return state
    }
}


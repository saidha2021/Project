const ADD = "ADD";
const REMOVE = "REMOVE";
export const add = (description,title) => {
    const action={  
        type: ADD,
        description,
        title
    } 
    return action;
} 

export const remove = (id) => {
    const action={  
        type: REMOVE,
        id
    }
    return action;
}

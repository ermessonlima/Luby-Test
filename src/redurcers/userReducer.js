const initialState = {
    userLogin:[],
};

export default (state = initialState, action) =>{

    switch(action.type) {
        case'SET_USER':   
            return{...state, userLogin:action.payload.userLogin};
        break;
        }


    return state;
}
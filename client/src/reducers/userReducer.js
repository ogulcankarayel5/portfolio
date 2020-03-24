import {USER_LOADING,USER_LOADED} from '../actions/types';

const initialState={
    isLoading:true,
    user:null
};


export default function(state=initialState,action){
    switch(action.type){
        case USER_LOADING:
            return {
                ...state,
                
            }
        case USER_LOADED:
            return{
                ...state,
                isLoading:false,
                user:action.payload
            }
        default:
            return state;
    }
}
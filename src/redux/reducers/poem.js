import {UPDTAE_POEMS} from '../constant'

// 初始状态
const initSate = {
    poems:[],
    showForm:false
}


/**
 * 诗词相关状态的reducer
 * @param {*} state 
 * @param {*} action 
 */
export default function poemReducer(state=initSate,action){
    switch(action.type){
        case UPDTAE_POEMS:
            return {...state,poems:action.data}
        default:
            return state
    }
}


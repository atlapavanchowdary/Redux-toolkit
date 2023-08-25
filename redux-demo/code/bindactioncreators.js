const redux = require('redux')
const createStore = redux.createStore
const bindActionCreators = redux.bindActionCreators

const CAKE_ORDERED = 'CAKE_ORDERED'
const CAKE_RESTOCKED = 'CAKE_RESTOCKED'
const ICECREAM_ORDERED = 'ICECREAM_ORDERED'
const ICECREAM_RESTOCKED = 'ICECREAM_RESTOCKED'

function orderCake(){
    return {
        type: CAKE_ORDERED,
        payload: 1,
    }
}

function restockCake(qty=1){
    return{
        type: CAKE_RESTOCKED,
        payload: qty,
    }
}

function orderIceCream(qty = 1){
    return{
        type: ICECREAM_ORDERED,
        payload: qty,
    }
}

function restockIceCream(qty = 1){
    return{
        type: ICECREAM_RESTOCKED,
        payload: qty,
    }
}

const initialState = {
    numOfCakes: 10,
    numOfIcecreams: 20,
}

const reducer = (state = initialState, action) => {  // 2 actions 1 reducer
    switch(action.type){ 
        case CAKE_ORDERED:
            return {
                ...state,
                numOfCakes: state.numOfCakes - 1,
            }
        case CAKE_RESTOCKED:
            return{
                ...state,
                numOfCakes: state.numOfCakes + action.payload,
            }
        case ICECREAM_ORDERED:
            return {
                ...state,
                numOfIcecreams: state.numOfIcecreams - 1,
            }
        case ICECREAM_RESTOCKED:
            return {
                ...state,
                numOfIcecreams: state.numOfIcecreams + action.payload,
            }
            default:
                return state
    }
}

const store = createStore(reducer)
console.log('Initial state', store.getState())

const unsubscribe = store.subscribe(() => console.log('update state',store.getState()))

const actions = bindActionCreators({orderCake, restockCake, orderIceCream, restockIceCream}, store.dispatch)
actions.orderCake()
actions.orderCake()
actions.orderCake()
actions.restockCake(3)
actions.orderIceCream()
actions.orderIceCream()
actions.restockIceCream(2)

unsubscribe()
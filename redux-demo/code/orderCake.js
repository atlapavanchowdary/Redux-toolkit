const redux = require('redux')
const createStore = redux.createStore

const CAKE_ORDERED = 'CAKE_ORDERED'   // 1. const declaration

function orderCake() {  // 2. action
  return {
    type: CAKE_ORDERED,
    quantity: 1,
  }
}

const initialState = {  // 3. initial state
  numOfCakes: 10,
}

const reducer = (state = initialState, action) => {  // 4. reducer
  switch(action.type){
    case CAKE_ORDERED:
      return{
        ...state,
        numOfCakes: state.numOfCakes - 1,
      }
      default:
        return state
  }
}

const store = createStore(reducer)  // 5. store
console.log('Initial state',store.getState())  // 5.1 getState

const unsubscribe = store.subscribe(() => console.log('update state', store.getState())) // 5.2 subscribe

store.dispatch(orderCake())  // 5.3 dispatch (logs the subscribe method)
store.dispatch(orderCake())
store.dispatch(orderCake())

unsubscribe();  // 5.4 unsubscribe
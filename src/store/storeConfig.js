// reducers

import { createStore, combineReducers} from 'redux'

const reducers = combineReducers({
    numbers: function(state, action) {

        switch(action.type) {
            case 'MIN_NUMBER_CHANGED':
                return {
                    ...state, 
                    min: action.payload
                }
            break;

            case 'MAX_NUMBER_CHANGED':
                return {
                    ...state,
                    max: action.payload
                }
            default: 
                return {
                    min: 7,
                    max: 31
                }
        }
    },

    names: function(state, action) {
        console.log('Names reducer')
        console.log(state, ' ', action)
        return [
            'Anne',
            'Beatrice',
            'Carl'
        ]
    }
})

function storeConfig() {
    return createStore(reducers)
}

export default storeConfig
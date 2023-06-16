import { generatorKey } from '../utils/toobox'

export const ADD_ITEM = 'ADD_ITEM'
export const SET_DISPLAY = 'SET_DISPLAY'

export const addItem = item => ({
    type: ADD_ITEM,
    payload: item
})

export const setDisplay = item => ({
  type: SET_DISPLAY,
  payload: item
})

// TO DO clear itemList
const initialState = {
    itemList: [
        // { title: 'Designing for emotions', text: 'wireframes , ui ux design and emotion design Designing for users', watch: true, background: '#fdffb2', key: '0' },
        // { title: 'Wash the dishes', text: 'wireframes , ui ux design and emotion design Designing for users', watch: true, background: '#fecb4d', key: '1' },
        // { title: 'Shopping list in the store', text: 'wireframes , ui ux design and emotion design Designing for users, wireframes , ui ux design and emotion design Designing for users, wireframes , ui ux design and emotion design Designing for users', watch: false, background: '#f0e9ff', key: '2' },
        // { title: 'Self-study', text: 'wireframes , ui ux design and emotion design Designing for users', watch: true, background: '#f29c98', key: '3' },
        // { title: 'Go to a workout', text: 'wireframes , ui ux design and emotion design Designing for users', watch: true, background: '#fdffb2', key: '4' }
    ],
    display: 'flex'
}

const rootReducer = (state = initialState, action) => {

    switch (action.type) {
      case ADD_ITEM:
        return {
          ...state,
          itemList: state.itemList.concat([action.payload])
          // itemList: [...state.itemList, action.payload]
        }

      case SET_DISPLAY:
        return {
          ...state,
          display: action.payload
        }

      default:
        return state
    }
}

export default rootReducer
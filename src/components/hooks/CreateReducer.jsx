import React, { useReducer } from 'react'

const initialState = {
    count: 0,
    name:''
}

function Reducer(state, action){
    console.log(state, action)

    switch(action.type){
        case 'increment':
            return {
                ...state,
                count: state.count + 1
            }
        break;

        case 'decrement':
            return {
                ...state,
                count:state.count - 1
            }

        break;

        case 'reset':
            return{
                ...state,
                count : 0
            }

        case 'nameChange':
            return {
                ...state,
                name: action.payload
            }
    }

}

function CreateReducer() {
    let[state, dispatch] = useReducer(Reducer, initialState)
  return (
    <div>
        <button className='btn btn-primary' onClick={() => dispatch({type:'increment'})}>+</button>
        <button className='btn btn-danger' onClick={() => dispatch({type:'decrement'})}>-</button>
        <button className='btn btn-warning' onClick={() => dispatch({type:'reset'})}>Reset</button>

        <input type='text' onChange={(e) => dispatch({type:'nameChange', payload:e.target.value})}/>
        {state.count } / {state.name}
    </div>
  )
}

export default CreateReducer
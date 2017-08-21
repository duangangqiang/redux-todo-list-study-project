import { combineReducers } from 'redux';
import todos from './todos';

/**
 * combineReducers会将分离的reducer整合,不同的reducer处理不同的state属性
 * 
 * 当前就是指的state中的todos的reducer为导入的todos
 */
const rootReducer = combineReducers({
    todos
})

export default rootReducer;
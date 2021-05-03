import React ,{useReducer, createContext} from 'react'
import ContextReducer from './ContextReducer'
const initialState=[];

export const ExpenseTrackerContent =createContext(initialState);

export const Provider =({children})=>{
    const  [transactions, dispatch] = useReducer(ContextReducer, initialState)
    //action creators
    const deleteTransaction =(id)=> dispatch({type:'DELETE_TRANSACTION',payload:id});
    const addTransaction =(transaction)=>  dispatch({type:'ADD_TRANSACTION',payload:transaction});
   // console.log( "transactions",transactions )

    return (
        <ExpenseTrackerContent.Provider value={{ 
            //object
            deleteTransaction,
            addTransaction,
            transactions

        }}>
            {children}
        </ExpenseTrackerContent.Provider>
    )
}
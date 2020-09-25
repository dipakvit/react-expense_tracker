import React, {createContext,useReducer} from 'react';
import AppReducer from './AppReducer'
//initial state
const initialState={
    transactions: []
}

//create context

export const GlobalContext=createContext(initialState);

//provider component
export const GlobalProvider=({children})=>{
    const [state,dispatch] = useReducer(AppReducer, initialState);

    //actions 
    function deleteTransaction(id){
        dispatch({
            type: 'DELETE_TRANSACTION',
            payload: id
        });
    }

    function updateTransaction(transaction){
        dispatch({
            type: 'UPADTE_TRANSACTION',
            payload: transaction
        });
    }

    function addTransaction(transaction) {
        dispatch({
          type: 'ADD_TRANSACTION',
          payload: transaction
        });
      }

    return (<GlobalContext.Provider value={{
        transactions:state.transactions,
        deleteTransaction,
        updateTransaction,
        addTransaction
    }}>
        {children}
    </GlobalContext.Provider>);
}
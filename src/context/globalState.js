import { createContext, useReducer } from "react";
import AppReducer from './appReducer';
// initial state

const initialState = {
    transactions: []
}
 // global context
export const GlobalContext = createContext(initialState);

// provider for global context
export const GlobalProvider = ({ children }) => {
    const [state, dispatch] = useReducer(AppReducer, initialState);

    // actions for transactions

    function deleteTransac(id){
        dispatch({
            type: 'DELETE_TRANSACTION',
            payload: id
        });
    }

    function addTransac(transaction) {
        dispatch({
            type: 'ADD_TRANSACTION' ,
            payload: transaction
        })
        
    }

    return (
        <GlobalContext.Provider value={
            {
                transactions: state.transactions,
                deleteTransac,
                addTransac
            }
        }>
            { children }
        </GlobalContext.Provider>
    );
}
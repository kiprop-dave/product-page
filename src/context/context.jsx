import React, { createContext } from 'react';

const Context = createContext();

function ContextProvider({ children }) {

    const values = {

    };
    return (
        <Context.Provider value={values}>
            {children}
        </Context.Provider>
    )
}

export { ContextProvider, Context };
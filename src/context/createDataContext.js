import React, {useReducer} from 'react';

export default (reducer,actions,defaultValue) => {
    const Context = React.createContext();

    const Provider = ({children}) => {
        const [state,dispatch] = useReducer(reducer,defaultValue);
        const boundActions = {};

        for(let key in actions){
            boundActions[key] = actions[key](dispatch);
        }
        return(
            //el state y el boundActions es lo que la pasamos a los componentes secundarios
            <Context.Provider value={{ state, ...boundActions }}>
                {children}
            </Context.Provider>
        );
    };

    return{Context,Provider}
};

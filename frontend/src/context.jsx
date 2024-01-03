import { useObservable } from "@legendapp/state/react"
import { createContext, useState } from "react"
import { persistObservable } from "@legendapp/state/persist"
import { ObservablePersistLocalStorage } from "@legendapp/state/persist-plugins/local-storage"
 

export const Context = createContext(null)


export default function ContextApi({children}) {
    const states = useObservable({
        bool: false, token: ""
    })
    persistObservable(states, {
        local: 'bool',
        pluginLocal: ObservablePersistLocalStorage,
      })
    return (
        <Context.Provider value={{states}}> 
            {children}
         </Context.Provider>   
    )
}
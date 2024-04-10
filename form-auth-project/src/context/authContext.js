import { useContext, createContext} from 'react'

const authContext = createContext()

export function AuthProvider({value, children}) {
    <authContext.Provider value={value}>{children}</authContext.Provider>
}

export function authValue() {
    return useContext(authContext)
};
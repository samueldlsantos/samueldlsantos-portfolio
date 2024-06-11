import { Dispatch, ReactNode, createContext, useReducer } from "react"
import { PortfolioActions, PortfolioState, initialState, portfolioReducer } from "../reducers/portfolio-reducer"

type PortfolioContextProps = {
    state: PortfolioState,
    dispatch: Dispatch<PortfolioActions>
}

type PortfolioProviderProps = {
    children: ReactNode
}

export const PortfolioContext = createContext<PortfolioContextProps>({} as PortfolioContextProps);

export const PortfolioProvider = ({children} : PortfolioProviderProps) => {
    const [state, dispatch] = useReducer(portfolioReducer, initialState)
    return(
        <PortfolioContext.Provider
        value={{
            state,
            dispatch
        }}
        >
            {children}
        </PortfolioContext.Provider>
    )
}
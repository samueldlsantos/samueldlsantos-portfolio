import { experiences, personalInformation, projects } from "../data"
import { Experience, PersonalInformation, Project } from "../types"

export type PortfolioActions = {
    type: "set-theme", payload: {theme:string}
}

export type PortfolioState = {
    theme: string,
    personalInformation: PersonalInformation,
    experiences: Experience[],
    projects: Project[]
}

const localStorageTheme = () => {
    const resp = localStorage.getItem("theme");
    if (resp) {
      return resp;
    } else {
      if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
        return "dark";
      } else {
        return "light";
      }
    }
}


export const initialState: PortfolioState = {
    theme: localStorageTheme(),
    personalInformation: personalInformation,
    experiences: experiences,
    projects: projects
}

console.log(initialState)

export const portfolioReducer = (
state: PortfolioState = initialState,
actions: PortfolioActions
) => {

    if(actions.type === 'set-theme') {
        localStorage.setItem('theme', actions.payload.theme);
        return {
            ...state,
            theme: actions.payload.theme
        }
    }

    return state

}
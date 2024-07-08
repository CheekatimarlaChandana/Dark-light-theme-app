import { createContext,useContext, useEffect, useState } from "react";

const ThemeContext = createContext();

export const useTheme = () => {
    return useContext(ThemeContext)
}

export const ThemeProvider = ({children}) => {

    const[isDarkMode,setIsDarkMode] = useState(false);

    const toggleTheme = () => {
        setIsDarkMode((prevstate) => !prevstate)
    }

    const theme = isDarkMode ? "dark" : "light";

    useEffect(()=> {
        document.documentElement.setAttribute("data-theme",theme)

    },[isDarkMode])

    //data-attribute given to html element to  acces and change the css part

    return(

        <ThemeContext.Provider value={{toggleTheme,theme}}>
             {children}
        </ThemeContext.Provider>

    )

}
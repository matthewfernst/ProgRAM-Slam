import React, {useEffect, useRef, useState} from "react";

import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import CssBaseline from "@material-ui/core/CssBaseline";

import BootUp from "./BootUp/BootUp";
import Terminal from "./Terminal/Terminal";

const App = () =>
{
    const [bootingUp, setBootingUp] = useState(true);
    const [darkMode, setDarkMode] = useState(true);

    const firstRender = useRef(true);

    const theme = React.useMemo(
        () =>
            createMuiTheme({
                palette: {
                    type: darkMode ? 'dark' : 'light',
                    primary: { main: '#C8C372' },
                    secondary: { main: '#1E4D2B' },
                }
            }),
        [darkMode],
    );

    useEffect(() =>
    {
        if (!firstRender.current)
        {
            console.log("Here");

            document.getElementById("root").setAttribute('style', `background-color: ${darkMode ? '#141313' : '#FCFCFC'} !important`);
            document.body.setAttribute('style', `background-color: ${darkMode ? '#141313' : '#FCFCFC'} !important`);
        }

        else
        {
            firstRender.current = false;
        }
    }, [darkMode])


    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            {bootingUp ? <BootUp setBootingUp={setBootingUp} darkMode={darkMode}/> : <Terminal darkMode={darkMode} setDarkMode={setDarkMode}/>}
            <div style={{position: "absolute", bottom: 10, right: 10, fontSize: 12}}>
                Created By <a href={"https://github.com/mrrosoff"} target="_blank" style={{color: darkMode ? '#FCFCFC' : "#141313", fontSize: 12}}>Max Rosoff</a> and <a href={"https://github.com/matthewfernst"} target="_blank" style={{color: darkMode ? '#FCFCFC' : "#141313", fontSize: 12}}>Matthew Ernst</a>
            </div>
        </ThemeProvider>
    );
};

export default App;

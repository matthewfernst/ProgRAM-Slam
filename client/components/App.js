import React, {useState} from "react";

import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import CssBaseline from "@material-ui/core/CssBaseline";

import BootUp from "./BootUp/BootUp";
import Terminal from "./Terminal/Terminal";

const App = () =>
{
    const [bootingUp, setBootingUp] = useState(true);
    const [darkMode, setDarkMode] = useState(true);

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


    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            {bootingUp ? <BootUp setBootingUp={setBootingUp}/> : <Terminal darkMode={darkMode} setDarkMode={setDarkMode}/>}
        </ThemeProvider>
    );
};

export default App;

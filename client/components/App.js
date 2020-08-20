import React, {useState} from "react";

import useMediaQuery from '@material-ui/core/useMediaQuery';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import CssBaseline from "@material-ui/core/CssBaseline";

import Terminal from "./Terminal/Terminal";

import ClaconFont from '../static/fonts/clacon.ttf';

const App = () =>
{
    const [darkMode, setDarkMode] = useState(true);
    const daveMode = useState(false);

    const theme = React.useMemo(
        () =>
            createMuiTheme({
                palette: {
                    type: darkMode ? 'dark' : 'light',
                    primary: { main: '#C8C372' },
                    secondary: { main: '#1E4D2B' },
                },
                typography: { fontFamily: 'Clacon' },
                overrides: {
                    MuiCssBaseline: {
                        '@global': {
                            '@font-face': [{ fontFamily: 'Clacon', src: `url(${ClaconFont}) format('woff2')`}]
                        }
                    }
                },
            }),
        [darkMode],
    );

    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <Terminal darkMode={darkMode} setDarkMode={setDarkMode}/>
        </ThemeProvider>
    );
};

export default App;

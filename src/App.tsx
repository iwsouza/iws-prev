import { Routes } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { AuthProvider } from './contexts/auth';
import { ToggleThemeProvider } from './contexts/toggle-theme';
import { useTheme } from './hooks/theme';
import GlobalStyles from './view/environments/styles.global';

function App() {
  const { theme, toggleTheme } = useTheme();
  return (
    <ThemeProvider theme={theme}>
      <ToggleThemeProvider toggleTheme={toggleTheme}>
        <GlobalStyles />
        <AuthProvider>
          <Routes />
        </AuthProvider>
      </ToggleThemeProvider>
    </ThemeProvider>
  );
}

export default App;

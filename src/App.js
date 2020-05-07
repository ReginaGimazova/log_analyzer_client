import React from "react";
import { ThemeProvider } from "styled-components";
import { Switch, Route, BrowserRouter } from "react-router-dom";

import theme from "./static/styles/theme";
import GlobalStyle from "./static/styles/globalStyles";
import OriginalDumpAnalyzePage from "./components/pages/OriginalDumpAnalyzePage";
import CriticalStatusesPage from "./components/pages/CriticalStatusesPage";
import TableCallsStatsPage from "./components/pages/TableCallsStatsPage";
import ConfigurationPage from "./components/pages/ConfigurationPage";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <GlobalStyle />
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={OriginalDumpAnalyzePage} />
            <Route path="/critical-statuses" component={CriticalStatusesPage} />
            <Route path="/tables" component={TableCallsStatsPage} />
            <Route path="/configuration" component={ConfigurationPage} />
          </Switch>
        </BrowserRouter>
      </div>
    </ThemeProvider>
  );
}

export default App;

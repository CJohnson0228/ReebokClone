import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { ThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Header from './components/MainNav';
import Home from './components/Home';
import SiteMap from './components/SiteMap';
import Footer from './components/Footer';

import theme from './theme';

function App() {
  return (
    <Router>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Header />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/department" component={Home} /> {/* change with default department page */}
        </Switch>
        <SiteMap />
        <Footer />
      </ThemeProvider>
    </Router>
  );
}

export default App;

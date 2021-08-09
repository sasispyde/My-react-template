import React from 'react';

/* Router */
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

/* Context */
import ContextProvider from './context/contextProvider';

/* Default Dashboard container */
import Dashboard from './components/containers/dashboard/dashboard';

/* Protected routes */
import ProtectedRoute from './protectedRoute/protectedRoute';

/* Chart */
const Chart = React.lazy( () => import('./components/pages/chart/chart'));

/* Cards */
const Card = React.lazy( () => import('./components/pages/card/card'));

/* Error pages */
const Error404 = React.lazy( () => import('./errorComponents/404/error404'));
const Error401 = React.lazy( () => import('./errorComponents/401/error401'));
const Error500 = React.lazy( () => import('./errorComponents/500/error500'));

/* Table */
const Table = React.lazy( () => import('./components/pages/table/table'));

const App = () => {
  return (
    <>
      <ContextProvider>
        <Router>
          <Switch>
            <Route exact path="/">
              <Dashboard></Dashboard>
            </Route>
            <ProtectedRoute  exact={true} component={Table} path={"/table"} />
            <ProtectedRoute  exact={true} component={Chart} path={"/charts"} />
            <ProtectedRoute  exact={true} component={Card} path={"/cards"} />
            <ProtectedRoute  exact={true} component={Error401} path={"/error401"} />
            <ProtectedRoute  exact={true} component={Error404} path={"/error404"} />
            <ProtectedRoute  exact={true} component={Error500} path={"/error500"} />
            <Route path="*">
              <Error404 />
            </Route>
          </Switch>
        </Router>
      </ContextProvider>
    </>
  );
}

export default App;

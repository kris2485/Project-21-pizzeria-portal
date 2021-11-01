import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './redux/store';
import MainLayout from '../src/components/layout/MainLayout/MainLayout';
import Home from './components/views/Home/Home';
import Login from '../src/components/views/Login/Login';
import Tables from '../src/components/views/Tables/Tables';
import Waiter from '../src/components/views/Waiter/WaiterContainer.js';
import Kitchen from '../src/components/views/Kitchen/Kitchen';
import BookedTable from '../src/components/views/BookedTable/BookedTable';
import NewBooking from '../src/components/views/NewBooking/NewBooking';
import BookedEvents from '../src/components/views/BookedEvents/BookedEvents';
import NewEvent from '../src/components/views/NewEvent/NewEvent';
import NewOrder from '../src/components/views/NewOrder/NewOrder';
import OrderDetails from '../src/components/views/OrderDetails/OrderDetails';

import { StylesProvider } from '@material-ui/core/styles';
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';

const theme = createMuiTheme({
  palette: {
    primary: { main: '#2B4C6F' },
    // secondary: { main: '#11cb5f', },
  },
});

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <StylesProvider injectFirst>
          <ThemeProvider theme={theme}>
            <MainLayout>
              <Switch>
                <Route exact path={process.env.PUBLIC_URL + '/'} component={Home} />
                <Route exact path={process.env.PUBLIC_URL + '/login'} component={Login} />
                <Route exact path={process.env.PUBLIC_URL + '/tables'} component={Tables} />
                <Route exact path={process.env.PUBLIC_URL + '/tables/booking/new'} component={NewBooking} />
                <Route exact path={process.env.PUBLIC_URL + '/tables/booking/:id'} component={BookedTable} />
                <Route exact path={process.env.PUBLIC_URL + '/tables/events/new'} component={NewEvent} />
                <Route exact path={process.env.PUBLIC_URL + '/tables/events/:id'} component={BookedEvents} />
                <Route exact path={process.env.PUBLIC_URL + '/waiter'} component={Waiter} />
                <Route exact path={process.env.PUBLIC_URL + '/waiter/order/new'} component={NewOrder} />
                <Route exact path={process.env.PUBLIC_URL + '/waiter/order/:id'} component={OrderDetails} />
                <Route exact path={process.env.PUBLIC_URL + '/kitchen'} component={Kitchen} />
              </Switch>
            </MainLayout>
          </ThemeProvider>
        </StylesProvider>
      </BrowserRouter>
    </Provider>
  );
}

export default App;

import React, {Fragment} from 'react';
import {BrowserRouter} from "react-router-dom"
import AppRouter from './components/Routers/AppRouter';
import { library } from '@fortawesome/fontawesome-svg-core';
import {fas} from "@fortawesome/free-solid-svg-icons"

library.add(fas);

const App = () => {
  console.log(process.env.TEST);
  console.log('hi')
  return (
    <Fragment>
      <BrowserRouter>
        <AppRouter />
      </BrowserRouter>
    </Fragment>
  )
}

export default App;
import React from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";
import { Jobs } from './component/Jobs'
import { Editor } from './component/Editor'
import { DataProvider} from './dataContext/DataProvider'

const App = () => {
  return( 
    <DataProvider>
      <Router>
        <Switch>
          <Route path="/jobs" exact={true} component={Jobs} />
          <Route path="/edit/:id" exact={true} component={Editor} />
          <Redirect to="/jobs" />
        </Switch>
      </Router>
    </DataProvider>
  )
}

export default App;
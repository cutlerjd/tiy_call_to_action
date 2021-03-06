import React, { Component } from 'react'
import {BrowserRouter as Router, Switch} from 'react-router-dom'
import {AuthRoute as Route} from '../lib/auth'
import {Provider} from 'react-redux'
import store from '../store'
import 'normalize.css/normalize.css'
import 'font-awesome/css/font-awesome.min.css'
import '../styles/css/main.css'
import '../styles/css/main2.css'
import TexterForm from './Texter/TexterForm'
import ErrorRegistering from './Texter/ErrorRegistering'
import ThanksRegistering from './Texter/ThanksRegistering'
import CampaignerReg from './CampaignerReg'
import Login from './Login'
import Letter from './Letter'
import Main from './Main'


class App extends Component {
  componentDidMount() {
    document.title = "Text to Action"
  }
  
  render() {
    return (
      <Provider store={store}>
        <Router>
          <Switch>
            <Route exact path="/registration" component={CampaignerReg} />
            <Route exact path="/reg/:phone" component={TexterForm} />
            <Route exact path="/error" component={ErrorRegistering} />
            <Route exact path="/thanks/:id" component={ThanksRegistering}/>
            <Route exact path="/ltr/:id_campaign" component={Letter} />
            <Route exact path="/login" component={Login} />
            <Route path="/" component={Main} />
          </Switch>
        </Router>
      </Provider>
    )
  }
}

export default App

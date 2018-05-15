import React from 'react'
import { Switch, Route} from 'react-router-dom'
import MainComponent from './components/Main.js'
import Home from './components/Home.js'
import Aera from './components/Aera.js'

const Main = () => (
  <main>
    <Switch>
      <Route exact path='/' component={MainComponent}/>
      <Route path = '/home' component={Home}/>
      <Route path='/stop/:label' render={props =>
        <div className="h100">
          <Aera label={props.match.params.label} code={props.location.code} coords={props.location.coords}/>
        </div> }
      />
    </Switch>
  </main>
)

export default Main

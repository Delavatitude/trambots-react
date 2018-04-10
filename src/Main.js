import React from 'react'
import { Switch, Route} from 'react-router-dom'
import MainComponent from './components/Main.js'
import Home from './components/Home.js'
import Aera from './components/Card.js'

const Main = () => (
  <main>
    <Switch>
      <Route exact path='/' component={MainComponent}/>
      <Route path = '/home' component={Home}/>
      <Route path='/aera/:name' render={props =>
        <div>
          <Aera id={props.match.params.name} />
        </div> }
      />
    </Switch>
  </main>
)

export default Main

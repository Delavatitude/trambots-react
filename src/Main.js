import React from 'react'
import { Switch, Route} from 'react-router-dom'
import MainComponent from './components/Main.js'
import Home from './components/Home.js'
import Card from './components/Card.js'

const Main = () => (
  <main>
    <Switch>
      <Route exact path='/' component={MainComponent}/>
      <Route path = '/home' component={Home}/>
      <Route path='/area/:name' render={props =>
        <div>
          <Card id={props.match.params.name} />
        </div> }
      />
    </Switch>
  </main>
)

export default Main

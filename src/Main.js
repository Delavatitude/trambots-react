import React from 'react'
import { Switch, Route} from 'react-router-dom'
import MainComponent from './components/Main.js'
import Home from './components/Home.js'

const Main = () => (
  <main>
    <Switch>
      <Route exact path='/' component={MainComponent}/>
      <Route path = '/home' component={Home}/>
    </Switch>
  </main>
)

export default Main

import React, { Component } from 'react'
import './App.css'
import Counter from './components/Counter'
import Greet from './components/Greet'
import FunctionClick from './components/FunctionClick'
import ClassClick from './components/ClassClick'
import EventBinding from './components/EventBinding'
import UserGreeting from './components/UserGreeting'
import List from './components/List'
import Stylesheet from './components/Stylesheet'
import Inline from './components/Inline'
import './appStyles.css'
import styles from './appStyles.module.css'
import FormComponenet from './components/FormComponenet'
import LifecycleA from './components/LifecycleA'
import ParentComp from './components/ParentComp'
import RefsDemo from './components/RefsDemo'
import Hero from './components/Hero'
import ErrorBoundary from './components/ErrorBoundary'
import HoverCounter from './components/HoverCounter'
import ClickCounter from './components/ClickCounter'

export class App extends Component {

  render() {
    return (
      <div className="App">
        {/*<Counter /> */}
        {/* <Greet name="akrem" age="25" />*/}
        {/*<FunctionClick /> */}
        {/*<EventBinding /> */}
        {/* <Parent />*/}
        {/* <UserGreeting />*/}
        {/* <List />*/}
        {/*<Stylesheet primary={true} /> */}
        {/* <Inline />*/}
        {/* <FormComponenet />*/}
        {/* <LifecycleA />*/}
        {/*<ParentComp /> */}
        {/* <RefsDemo />*/}
        {/*<ErrorBoundary>
          <Hero heroName='batman' />
        </ErrorBoundary>
        <ErrorBoundary>
          <Hero heroName='superman' />
        </ErrorBoundary>
        <ErrorBoundary>
          <Hero heroName='joker' />
        </ErrorBoundary> */}
        {/*   <HoverCounter name='akrem'/>
       <ClickCounter /> */}

        {/* */}
        {/* */}
      </div>
    )
  }
}

export default App

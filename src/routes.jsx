import React from 'react'
import { Route } from 'react-router-dom'

// Import our components
import CustomNav from './components/nav'
import Footer from './components/footer'

// Import pages
import Home from './components/views/home'
import About from './components/views/about'
import Projects from './components/views/projects'




export default class Routes extends React.Component {
  render () {
    return (
      <div className="wrapper">
        <CustomNav />
        <Route exact={true} path="/" component={Home}/>
        <Route path="/about" component={About}/>
        <Route path="/projects" component={Projects}/>
        <Footer />
      </div>
    )
  }
}
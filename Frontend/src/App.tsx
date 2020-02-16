import * as React from 'react'
import { Route, Switch } from 'react-router-dom'
import Footer from './components/footer/footer'
import Header from './components/header/headerConnected'
import AboutUs from './pages/about/about'
import Detail from './pages/detail/detailConnected'
import Error from './pages/error'
import Homepage from './pages/homepage/homepageConnected'
import ReportModal from './components/reportModal/reportModalConnected'

import './App.scss'

const App: React.FC = () => {
  return (
    <div className="App">
      <div className="banner-beta">Jedná se o testovací web s testovacími daty.</div>
      <Header />
      <div className="body">
        <Switch>
          <Route path="/" component={Homepage} exact />
          <Route path="/detail/:id" component={Detail} />
          <Route path="/o-projektu" component={AboutUs} />
          <Route component={Error} />
        </Switch>
      </div>
      <Footer />
      <ReportModal />
    </div>
  )
}

export default App
import React from 'react';
import Footer from './Footer';
import VisitTable from './VisitTable';
import RestaurantContainer from './RestaurantContainer';
import SignUp from './SignUp';
import SignIn from './SignIn';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import ErrorComponent from './ErrorComponent';


function RestoApp()  {
    return (  
      <div className="RestoApp">
          <Header1/>
          <Router>
            <Switch>
          <Route path="/login"  exact component={SignIn}/>
            <Route path="/page1" component={RestaurantContainer}/>
            <Route path="/page2" component={VisitTable}/>
            <Route path="/signup" component={SignUp}/>
            <Route  component={ErrorComponent}/>
            </Switch>
          </Router>

        
          <Footer/>
      </div>
    )
  }
export default RestoApp




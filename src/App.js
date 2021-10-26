import React from 'react';
import {  BrowserRouter as Router,Route,Redirect,Switch} from 'react-router-dom';

import './App.css';

import HomePage from './pages/homepage/homepage.comonent'
import Floor from './pages/homepage/sartulebi/floor.component'
import FirstFloor from './components/sartuli-1/first_floor';
import SecondFloor from './components/sartuli-2/second_floor';
import ThirdFloor from './components/sartuli-3/third_floor';
import FourthFloor from './components/sartuli-4/fourth_floor';
import FifthFloor from './components/sartuli-5/fifth_floor';
import SixthFloor from './components/sartuli-6/sixth_floor';
import SeventhFloor from './components/sartuli-7/seventh_floor';
import EighthFloor from  './components/sartuli-8/eighth_floor';
import NinthFloor from './components/sartuli-9/ninth_floor';
import TenthFloor from './components/sartuli-10/tenth_floor';

const  App = ()=> {

  return <Router>
          <Switch>
              <Route exact  path="/" component={HomePage}/>
              <Route exact  path="/sartulebi" component={Floor}/>
              <Route exact   path="/sartulebi/1" component={FirstFloor}/>
              <Route exact  path="/sartulebi/2" component={SecondFloor}/>
              <Route exact  path="/sartulebi/3" component={ThirdFloor}/>
              <Route exact  path="/sartulebi/4" component={FourthFloor}/>
              <Route exact  path="/sartulebi/5" component={FifthFloor}/>
              <Route exact  path="/sartulebi/6" component={SixthFloor}/>
              <Route exact  path="/sartulebi/7" component={SeventhFloor}/>
              <Route exact  path="/sartulebi/8" component={EighthFloor}/>
              <Route exact  path="/sartulebi/9" component={NinthFloor}/>
              <Route exact  path="/sartulebi/10" component={TenthFloor}/>

              <Redirect to ="/" />
        </Switch>
  </Router>
  // return (
  //   <div>
  //     <Switch>
  //       <Route exact  path="/" component={HomePage}/>
  //       <Route exact  path="/sartulebi" component={Floor}/>
  //       <Route   path="/sartulebi/:floorId" component={FirstFloor}/>
  //     </Switch>
  //   </div>
  // );
};

export default App;

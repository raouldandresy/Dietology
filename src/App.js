import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import lightBaseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import {cyan500} from 'material-ui/styles/colors';
import './App.css'
import { connect } from 'react-redux'
import { BrowserRouter, Route } from 'react-router-dom'
import AppBar from 'material-ui/AppBar';
import { openToggle } from "./Actions/drawerAction";

// components
import DrawerBar from './Components/drawerBar';
import GridListPatients from "./Components/gridList";
import FormInsert from "./Components/form";
import HomePage from "./Components/homePage";
import HistoryTable from "./Components/historyTable";
import CheckForm from "./Components/checkForm";
import DietList from "./Components/dietList";
import TabsDiet from "./Components/tabsWeek";

const muiTheme = getMuiTheme({
  palette: {
    textColor: cyan500,
  },
  appBar: {
    height: 50,
  },
});

class App extends Component {

  constructor(props){
    super(props);
    this.openDrawer = this.openDrawer.bind(this);
  }

  openDrawer(){
    this.props.openDrawer();
  }

  render() {
    return (
      <MuiThemeProvider muiTheme={getMuiTheme(lightBaseTheme)}>
        <BrowserRouter>
          <div className="App">
            {/* <Route exact="/" component={HomeDescription}/>  SECTION MAIN */}
            <div id="main">
            <AppBar
                title="Dietology"
                iconClassNameRight="muidocs-icon-navigation-expand-more"
                onLeftIconButtonClick={this.openDrawer}
                />
            <DrawerBar/>
            <Route path="/homepage" component={HomePage}/>
            <Route path="/insert" component={FormInsert}/>
            <Route path="/list" component={GridListPatients}/>
            <Route path="/table" component={HistoryTable}/>
            <Route path="/check" component={CheckForm}/>
            <Route path="/diets" component={DietList}/>
            <Route path="/dietNew" component={TabsDiet}/>
            </div>
            {/* <Footer /> */}
          </div>
        </BrowserRouter>
      </MuiThemeProvider>
    );
  }
}

const mapStateToProps = (state) => ({
  patience: state.patience,
  diet: state.diet
});

const mapActionToProps = {
  openDrawer: openToggle
};


export default connect(mapStateToProps, mapActionToProps)(App)
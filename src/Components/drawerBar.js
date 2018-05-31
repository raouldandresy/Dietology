import React from 'react';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import { connect } from "react-redux";
import { closeToggle } from "../Actions/drawerAction";
import { Link } from 'react-router-dom';

class DrawerBar extends React.Component {

  constructor(props) {
    super(props);
    this.handleClose = this.handleClose.bind(this);
  }

  handleClose(){
    this.props.handleClose();
  }



  render() {
    return (
      <div>
        <Drawer
          docked={false}
          width={200}
          open={this.props.drawer.open}
          onRequestChange={this.handleClose}
        >
          <MenuItem  containerElement={<Link to="/homepage" />} onClick={this.handleClose} primaryText="Home"/>
          <MenuItem  containerElement={<Link to="/list" />} onClick={this.handleClose} primaryText="List Patients"/>
          <MenuItem  containerElement={<Link to="/insert" />} onClick={this.handleClose} primaryText="Insert Patients"/>
          
        </Drawer>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
    drawer: state.drawer
});

const mapActionToProps = {
  handleClose: closeToggle
}
  
export default connect(mapStateToProps,mapActionToProps)(DrawerBar);
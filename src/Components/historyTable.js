import React, {Component} from 'react';
import { connect } from "react-redux";
import {
  Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn,
} from 'material-ui/Table';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';
import { getPatient } from "../Actions/patienceAction";
import { Link } from 'react-router-dom'
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';

class HistoryTable extends Component {

  constructor(props){
    super(props);
    this.state = {selected: [], open: false};
    this.openPatient = this.openPatient.bind(this);
    this.handleOpen = this.handleOpen.bind(this);
    this.handleClose = this.handleClose.bind(this);
  } 

  handleOpen = () => {
    this.setState({open: true});
  };

  handleClose = () => {
    this.setState({open: false});
  };


  isSelected = (index) => {
    return this.state.selected.indexOf(index) !== -1;
  };

  handleRowSelection = (selectedRows) => {
    this.setState({
      selected: selectedRows
    });
  };

  openPatient(){
    this.props.getPatient(this.props.patience.id);
  }


  render() {

      const rows = this.props.checks.map((check,index) => (
        <TableRow key={check._id} selected={this.isSelected(index)}>
        <TableRowColumn>{check._id}</TableRowColumn>
        <TableRowColumn>{check.date}</TableRowColumn>
        <TableRowColumn>
        <FlatButton primary={true} label="Note" onClick={this.handleOpen} />
        <Dialog
          title="Note"
          modal={false}
          open={this.state.open}
          onRequestClose={this.handleClose}
        >
         {check.note}
        </Dialog>
        </TableRowColumn>
      </TableRow>
      ));

    return (
      <div>
      <Table onRowSelection={this.handleRowSelection}>
        <TableHeader>
          <TableRow>
            <TableHeaderColumn>ID</TableHeaderColumn>
            <TableHeaderColumn>Date</TableHeaderColumn>
            <TableHeaderColumn>Note</TableHeaderColumn>
          </TableRow>
        </TableHeader>
        <TableBody>
          {rows}
        </TableBody>
      </Table>
      <br/>
       <FloatingActionButton  containerElement={<Link to="/check" />} onClick={this.openPatient} >
       <ContentAdd />
       </FloatingActionButton>
       </div>
    );
  }
}

const mapStateToProps = (state) => ({
    patience: state.patience,
    diet: state.diet,
    checks: state.check.checks
  });
  
  const mapActionToProps = {
    getPatient: getPatient
  };
  

export default connect(mapStateToProps,mapActionToProps)(HistoryTable);
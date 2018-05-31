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
import { Link } from 'react-router-dom';
import { getDietsList } from "../Actions/dietAction";
import FloatingActionButton from 'material-ui/FloatingActionButton';
import { getPatient } from "../Actions/patienceAction";
import ContentAdd from 'material-ui/svg-icons/content/add';


class DietList extends Component {

  constructor(props){
    super(props);
    this.state = {selected: []};
    this.openPatient = this.openPatient.bind(this);
  } 

  componentWillMount(){
      this.props.getDietsList(this.props.patience.id);
  }

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

      const rows = this.props.diet.diets.map((diet,index) => (
        <TableRow key={diet._id} selected={this.isSelected(index)}>
        <TableRowColumn>{diet._id}</TableRowColumn>
        <TableRowColumn>{diet.idPatient}</TableRowColumn>
        <TableRowColumn>{diet.date}</TableRowColumn>
        <TableRowColumn>{diet.week}</TableRowColumn>
      </TableRow>
      ));

    return (
        <div>
      <Table onRowSelection={this.handleRowSelection}>
        <TableHeader>
          <TableRow>
            <TableHeaderColumn>ID</TableHeaderColumn>
            <TableHeaderColumn>idPatient</TableHeaderColumn>
            <TableHeaderColumn>Date</TableHeaderColumn>
            <TableHeaderColumn>Week</TableHeaderColumn>
          </TableRow>
        </TableHeader>
        <TableBody>
          {rows}
        </TableBody>
      </Table>
       <br/>
       <FloatingActionButton  containerElement={<Link to="/dietNew" />} onClick={this.openPatient} >
       <ContentAdd />
       </FloatingActionButton>
       </div>
    );
  }
}

const mapStateToProps = (state) => ({
    patience: state.patience,
    diet: state.diet
  });
  
  const mapActionToProps = {
    getDietsList: getDietsList,
    getPatient: getPatient
  };
  

export default connect(mapStateToProps,mapActionToProps)(DietList);
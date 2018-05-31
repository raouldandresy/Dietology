import React from 'react';
import {GridList, GridTile} from 'material-ui/GridList';
import IconButton from 'material-ui/IconButton';
import Subheader from 'material-ui/Subheader';
import ActionOpenInBrowser from 'material-ui/svg-icons/action/open-in-browser';
import SocialPerson from 'material-ui/svg-icons/social/person';
import { connect } from "react-redux";
import { getPatientsList,getPatient } from "../Actions/patienceAction";
import { Link } from 'react-router-dom'
import { getChecksList } from "../Actions/checkAction";
import image from "../user.png";
import Badge from 'material-ui/Badge';

const styles = {
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
      },
      gridList: {
        display: 'flex',
        flexWrap: 'wrap',
        overflowX: 'auto',
        overflowY: 'auto',
        width: '1300px'
      }
};



class GridListPatients extends React.Component{

    constructor(props){
        super(props);
        this.openPatient = this.openPatient.bind(this);
    }

    componentDidMount(){
        this.props.getPatientsList();
    }

    openPatient(patient){
        this.props.getPatient(patient);
        this.props.getChecksList(patient);
    }

    render(){
        return(
        <div style={styles.root}>
            <GridList
            cellHeight={300}
            cols={5}
            padding={20}
            style={styles.gridList}
            >
            <Subheader style={{fontSize:'30px',paddingTop:20}}>Patients
            <Badge badgeContent={this.props.patience.patientsList.length} primary={true}/></Subheader>
            {this.props.patience.patientsList.map((patient) => (
                <GridTile
                key={patient._id}
                title={patient.lastname}
                subtitle={<span>{patient.name}</span>}
                actionIcon={<div>
                <IconButton containerElement={<Link to="/table" />} onClick={() => this.openPatient(patient._id)}><ActionOpenInBrowser color="white" /></IconButton>
                <IconButton containerElement={<Link to="/diets" />} onClick={() => this.openPatient(patient._id)}><SocialPerson color="white" /></IconButton>
                </div>}>
                <img src={image} />
                </GridTile>
            ))}
            </GridList>
        </div>
         );
    }
}

const mapStateToProps = (state) => ({
    patience: state.patience,
    checks: state.check.checks
});

const mapActionToProps = {
    getPatientsList: getPatientsList,
    getChecksList: getChecksList,
    getPatient: getPatient
  }

export default connect(mapStateToProps,mapActionToProps)(GridListPatients);

import React from "react";
import { connect } from "react-redux";
import AppBar from 'material-ui/AppBar';
import DrawerBar from './drawerBar';
import { setCheck } from "../Actions/checkAction";
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import DatePicker from 'material-ui/DatePicker';
import Paper from 'material-ui/Paper';

const style = {
    paper:{
        height: '600px',
        width: '1200px',
        margin: 20,
        textAlign: 'center',
        display: 'inline-block'
    },
    text:{
        width: '800px',
    }
  };

class CheckForm extends React.Component{

    constructor(props){
        super(props);
        this.state = {date:null};
        this.setCheck = this.setCheck.bind(this);
    }


    setCheck(){
        let check = {
            idPatient: this.props.patience.id,
            date: this.state.date,
            note: this.state.note,
        } 
        this.props.setCheck(check);
    }

    render(){

        const form =
        <div style={{textAlign:"center",paddingTop:100}}>
         <DatePicker 
        hintText="date"
        value={this.state.date}
        onChange={(event,date) => this.setState({date: date})}
      />
      <br/><br/>
        <TextField style={style.text}
        hintText="note"
        onChange={(event) => this.setState({note: event.target.value})}
        multiLine={true}
        rows={12}
        rowsMax={40}
        /><br />
        <RaisedButton label="Submit" primary={true}  onClick={this.setCheck}/>
            </div>;

        return(
            <div>
           <Paper style={style.paper} zDepth={5} rounded={false} children={form}/>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    patience: state.patience,
    diet: state.diet,
    check: state.check
});

const mapActionToProps = {
    setCheck: setCheck
};
  
export default connect(mapStateToProps,mapActionToProps)(CheckForm);
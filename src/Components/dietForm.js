import React from "react";
import { connect } from "react-redux";
import AppBar from 'material-ui/AppBar';
import DrawerBar from './drawerBar';
import { setCheck } from "../Actions/checkAction";
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import DatePicker from 'material-ui/DatePicker';


const style = {
    text:{
        width: '800px',
    }
  };

class DietForm extends React.Component{

    constructor(props){
        super(props);
        this.state = {};
    }

    render(){
        let index = this.props.index;
        return(
            <div style={{textAlign:"center",paddingTop:50}}>
            <TextField style={style.text}
            hintText="breakfast"
            onChange={(event) => (this.props.diet.week.day1.breakfast = event.target.value)}
            /><br /><br />
            <TextField style={style.text}
            hintText="snack1"
            onChange={(event) => this.setState({snack1: event.target.value})}
            /><br /><br />
            <TextField style={style.text}
            hintText="lunch"
            onChange={(event) => this.setState({lunch: event.target.value})}
            /><br /><br />
            <TextField style={style.text}
            hintText="snack2"
            onChange={(event) => this.setState({snack2: event.target.value})}
            /><br /><br />
            <TextField style={style.text}
            hintText="dinner"
            onChange={(event) => this.setState({dinner: event.target.value})}
            />            
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    patience: state.patience,
    diet: state.diet
});

const mapActionToProps = {
};
  
export default connect(mapStateToProps,mapActionToProps)(DietForm);
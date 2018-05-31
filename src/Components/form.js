import React from "react";
import { connect } from "react-redux";
import AppBar from 'material-ui/AppBar';
import DrawerBar from './drawerBar';
import { setPatienceName,setPatienceDB,getPatientsList } from "../Actions/patienceAction";
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
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

class FormInsert extends React.Component{

    constructor(props){
        super(props);
        this.setPatience = this.setPatience.bind(this);
    }


    setPatience(){
        let patience = {
            name: this.state.name,
            lastname: this.state.lastname,
            age: this.state.age,
            weight: this.state.weight,
            height : this.atste.height,
            email: this.state.email,
            number: this.state.number
        } 
        this.props.setPatience(patience);
    }

    render(){

        const form =
        <div style={{textAlign:"center",paddingTop:50}}>
        <TextField style={style.text}
        hintText="name"
        onChange={(event) => this.setState({name: event.target.value})}
        /><br /><br />
        <TextField style={style.text}
        hintText="lastname"
        onChange={(event) => this.setState({lastname: event.target.value})}
        /><br /><br />
        <TextField style={style.text}
        hintText="age"
        onChange={(event) => this.setState({age: event.target.value})}
        /><br /><br />
         <TextField style={style.text}
        hintText="weight"
        onChange={(event) => this.setState({weight: event.target.value})}
        /><br /><br />
        <TextField style={style.text}
        hintText="height"
        onChange={(event) => this.setState({height: event.target.value})}
        /><br /><br />
        <TextField style={style.text}
        hintText="email"
        onChange={(event) => this.setState({email: event.target.value})}
        /><br /><br />
        <TextField style={style.text}
        hintText="number"
        onChange={(event) => this.setState({number: event.target.value})}
        /><br /><br />
        <RaisedButton label="Submit" primary={true}  onClick={this.setPatience}/>
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
    diet: state.diet
});

const mapActionToProps = {
    setPatience : setPatienceDB
};
  
export default connect(mapStateToProps,mapActionToProps)(FormInsert);
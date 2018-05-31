import React from 'react';
import {Tabs, Tab} from 'material-ui/Tabs';
import Slider from 'material-ui/Slider';
import DietForm from "./dietForm";
import Paper from 'material-ui/Paper';
import { connect } from "react-redux";
import FlatButton from 'material-ui/FlatButton/FlatButton';
import { setDiet } from '../Actions/dietAction';

const styles = {
  headline: {
    fontSize: 24,
    paddingTop: 16,
    marginBottom: 12,
    fontWeight: 400,
  },
  paper:{
    height: '600px',
    width: '1200px',
    margin: 20,
    textAlign: 'center',
    display: 'inline-block'
    },
    container: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
      },
      submitButton: {
        position: 'absolute',
        bottom:-100,
        height:50
        }
};


class TabsDiet extends React.Component{

    constructor(props){
        super(props);
        this.setDiet = this.setDiet.bind(this);
    }

    setDiet = () =>{
        this.props.setDiet(this.props.diet);
    } 

    render(){
      let tabs =
        <Tabs>
            <Tab label="Day1" >
            <div>
                <DietForm index={'day1'}/>
            </div>
            </Tab>
            <Tab label="Day2" >
            <div>
                <DietForm index={'day2'}/>
            </div>
            </Tab>
            <Tab label="Day3" >
            <div>
                <DietForm index={'day3'}/>
            </div>
            </Tab>
            <Tab label="Day4" >
            <div>
                <DietForm index={'day4'}/>
            </div>
            </Tab>
            <Tab label="Day5" >
            <div>
                <DietForm index={'day5'}/>
            </div>
            </Tab>
            <Tab label="Day6" >
            <div>
                <DietForm index={'day6'}/>
            </div>
            </Tab>
            <Tab label="Day7" >
            <div style={styles.container}>
                <DietForm index={'day7'}/>
                <FlatButton fullWidth={true} label="Save" primary={true} onClick={this.setDiet}
                style={styles.submitButton} labelStyle={{ fontSize: '45px'}}/>
            </div>
            </Tab>
        </Tabs>;
     
        return(
            <div>
            <Paper style={styles.paper} zDepth={5} rounded={false} children={tabs}/>
            </div>
        );
    }

}

const mapStateToProps = (state) => ({
    patience: state.patience,
    diet: state.diet
});

const mapActionToProps = {
    setDiet: setDiet
};
  
export default connect(mapStateToProps,mapActionToProps)(TabsDiet);
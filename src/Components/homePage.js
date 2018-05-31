import React from "react";
import { connect } from "react-redux";
import image from "../pyramid.jpg";
import '../App.css';

class HomePage extends React.Component{

    constructor(props){
        super(props);
    }

    render(){
        return (
            <div>
                <img className='pyramid' style={{height: '600px',paddingTop:'50px'}} src={image}/>
            </div>
        );
    }
}

  
const mapStateToProps = (state) => ({
    patience: state.patience,
    diet: state.diet
});

  
export default connect(mapStateToProps)(HomePage);
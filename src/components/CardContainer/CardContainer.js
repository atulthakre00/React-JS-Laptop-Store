import React, { Component } from 'react'
import Card from '../Card/Card'
import ActionBar from '../ActionBar/ActionBar'
import axios from 'axios';
import './style.css'

class CardContainer extends Component {
    constructor(props) {
        super(props)    
        this.state = {
             laptopData: [],
             modalState: false
        }
    }

    updateState = (newState) => {
        this.setState(newState);
    }

    componentDidMount(){
        axios.get('http://localhost:5000/laptops').then((response) => {
            let laptopList = [];
            console.log('axios resp', response.data)
            response.data.forEach(element => {
                element.displayCSS = 'block';
                laptopList.push(element);
            });
            this.setState({laptopData: laptopList});
          });
    }
    
    render() {
        return (
            <div className="cardHolder">
                
                <ActionBar updateState={this.updateState} state={this.state}/>

                {this.state.laptopData.map((laptop,index) => laptop.displayCSS !== 'none' ? <Card key={laptop.name}
                laptop={laptop} updateState={this.updateState} state={this.state}/> : null )}

                {this.state.laptopData.length === 0 ? <h4>No Laptops In The Inventory.</h4> : null}
            </div>
        )
    }
}

export default CardContainer;
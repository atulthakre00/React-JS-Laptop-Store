import React, { Component } from 'react'
import './style.css';
import axios from 'axios';
import Button from '../Button/Button';

class card extends Component {
    constructor(props) {
        super(props)
        this.state = {
        }
    }

    changeQuantity = (change) => {
        let newVal = parseInt(this.props.laptop.quantity) + change;
        if(newVal < 0)
            return;
        let newState = [];
        let modLaptop;

        this.props.state.laptopData.forEach((laptop, index) => {
            if(laptop.name === this.props.laptop.name){
                laptop.quantity = newVal;
                modLaptop = laptop;
            }                
            newState.push(laptop);
        });
        

        axios.patch('http://localhost:5000/laptops/' + this.props.laptop._id, modLaptop)
            .then(resp => {
                console.log(resp);
                if(resp.status === 200){
                    this.props.updateState({laptopData: newState});
                }
            })
    }

    deleteLaptop = () => {
        let newState = [];
        this.props.state.laptopData.forEach((laptop, index) => {
            if(laptop.name !== this.props.laptop.name)
                newState.push(laptop);            
        });
        axios.delete('http://localhost:5000/laptops/'+ this.props.laptop._id).
        then(response => {
            console.log("delete response", response);
            if(response.status === 200){
                this.props.updateState({laptopData: newState});
            }
        }).
        catch((error) => {
            console.log(error)
        })      

        
    }

    render() {
        console.log(this.props.laptop);
        return (
            <div className="CardContainer">
                
                <img src={this.props.laptop.imageUrl} />

                <div className="dataContainer">
                    <div className="dataHead">{this.props.laptop.name}</div>
                    <div className="dataPoint">Processor: {this.props.laptop.processor}</div>
                    <div className="dataPoint">Memory: {this.props.laptop.memory}</div>
                    <div className="dataPoint">Ram: {this.props.laptop.ram}</div>
                    <div className="dataPoint">Display: {this.props.laptop.display} Inch</div>
                    <div className="dataHead">Rs. {this.props.laptop.price}</div>

                    <div className="dataControl">
                        <div className="box"><Button name="-" onClick={() => this.changeQuantity(-1)}/></div>
                        <div className="box displayQuant">{this.props.laptop.quantity}</div>
                        <div className="box"><Button name="+" onClick={() => this.changeQuantity(1)}/></div>
                        <div className="box"><Button name="Delete" onClick={() => this.deleteLaptop()}/></div>
                        <br/>
                    </div>
                </div>
            </div>
        )
    }
}

export default card;
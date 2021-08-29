import React from 'react'
import Button from '../Button/Button';
import Modal from '../Modal/Modal';
import './style.css';

function ActionBar(props) {
    const showModal = () => {
        console.log("Show Modal called");
        props.updateState({...props.state, modalState: true});
    }

    const searchLaptop = (e) => {
        const query = e.target.value.toLowerCase();
        let modifiedData = props.state.laptopData;
        modifiedData.forEach(element => {
            let laptopText = "";
            Object.keys(element).forEach((value) => {
                laptopText += element[value] + " ";
            });
            if(laptopText.toLowerCase().indexOf(query) !==-1)
                element.displayCSS = 'block';
            else
                element.displayCSS = 'none';
        });
        props.updateState({laptopData: modifiedData});
    }

    return (
        <div className="actionBar">
            <div className="actionSpan">
                <label>Actions</label>
            </div>

            {props.state.modalState ? <Modal state={props.state} updateState={props.updateState}/> : null}

            <Button name="Add Laptop" onClick={showModal}/>

            <div className="searchContainer">
                <label>Search</label>
                <input type="text" onChange={searchLaptop} />
            </div>
        </div>
    )
}

export default ActionBar
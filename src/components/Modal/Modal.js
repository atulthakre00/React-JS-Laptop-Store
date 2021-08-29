import React, {useState} from 'react'
import './style.css';
import Button from '../Button/Button';
import axios from 'axios';

function Modal(props) {
    const [state, setState] = useState({name: '',
processor: '', memory: '', ram: '', display: '', price: '', quantity: '', imageUrl: ''});

    const changeHandler = (e) => {
        setState({...state, [e.target.name]: e.target.value});
    }

    const clickHandler = () => {
        let laptopObj = state;
        if(laptopObj.quantity === '')
            laptopObj.quantity = 0;
        laptopObj.displayCSS = 'block';
        let newList = props.state.laptopData;
        newList.unshift(laptopObj);
        props.updateState({laptopData: newList, modalState:false});

        axios.post('http://localhost:5000/laptops', laptopObj).then((response) => {
            console.log("post laptops", response);
          });
    }

    const closeModal = () => {
        props.updateState({...state, modalState: false});
    }

    return (
        <div className="modal">
            <div className="modal-content">
                <div className="modal-header">
                    Add Laptop Entries In Inventory Data
                </div>  

                <div className="modal-body">
                    <label>Name</label>
                    <input type="text" name="name" onChange={changeHandler} value={state.name} required/><br/>

                    <label>Processor</label>
                    <input type="text" name="processor" onChange={changeHandler} value={state.processor}/><br/>

                    <label>Memory</label>
                    <input type="text" name="memory" onChange={changeHandler} value={state.memory}/><br/>

                    <label>Ram</label>
                    <input type="text" name="ram" onChange={changeHandler} value={state.ram}/><br/>

                    <label>Display</label>
                    <input type="text" name="display" onChange={changeHandler} value={state.display}/><br/>

                    <label>Price</label>
                    <input type="text" name="price" onChange={changeHandler} value={state.price}/><br/>

                    <label>Quantity</label>
                    <input type="text" name="quantity" minlength="1" onChange={changeHandler} value={state.quantity} required/><br/>

                    <label>Image URL </label>
                    <input type="text" name="imageUrl" onChange={changeHandler} value={state.imageUrl}/><br/>
                </div>  

                <div className="modal-footer">
                    <Button name="Add Laptop" onClick={clickHandler}></Button>
                    <Button name="Close" onClick={closeModal}></Button>
                </div>  
            </div>            
        </div>
    )
}

export default Modal;
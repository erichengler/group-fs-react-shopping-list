import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';


function ShoppingForm({ itemName, setItemName, itemQuant, setItemQuant, itemUnit, setItemUnit, fetchItemList }) {

    const addItem = (event) => {
        event.preventDefault();
        
        axios.post('/list', {
            name: itemName,
            quantity: itemQuant,
            unit: itemUnit
        }).then((response) => {
            setItemName('');
            setItemQuant('');
            setItemUnit('');
            fetchItemList();
        }).catch((error) => {
            console.log(`Error in POST ${error}`);
            alert('GobbledeMessedup, my guy');
        })
    }

    return (
        <>
         <form onSubmit={addItem}>
            <h2>Add Item</h2>
            Item: <TextField id="filled-basic" label="Example: Apple" color="success" variant="filled" type="text" onChange={e => setItemName(e.target.value)} />
            <br />
            <br />
            Quantity: <TextField id="filled-basic" label="Example: 5" color="success" variant="filled" type="number" onChange={e => setItemQuant(e.target.value)} />
            <br />
            <br />
            Unit: <TextField id="filled-basic" label="Example: Pounds" color="success" variant="filled" type="text" onChange={(e) => setItemUnit(e.target.value)} />
            <br />
            <br />
            <button >Save</button>
            <br />
            <br />
        </form>
        </>
    )
}


export default ShoppingForm;
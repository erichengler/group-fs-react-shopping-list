import axios from 'axios';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';


function ShoppingItem ({ item, fetchItemList }) {

    const removeItem = (event) => {
        console.log( `removeItem ${item.id}` );
        axios.delete(`/list/${item.id}`).then((response) => {
            fetchItemList();
        }).catch((error) => {
            console.log( `Error in removeItem ${error}` );
            alert( 'Something went wrong.' );
        })
    }

    const purchaseItem = (event) => {
        axios.put( `/list/${item.id}` ).then((response) => {
            fetchItemList();
        }).catch((error) => {
            console.log( `Error PUT ${error}` );
            alert( 'Something went wrong' );
        })
    }

    return (
        <div className="contentDiv">
            <div className="listItem" key={item.id}>

                < br/>
                {item.name}
                <br />
                <br />
                {item.quantity} {item.unit}
                <br />
                <br />
                <Button size="small" variant="outlined" className="buy-button" onClick={ (event) => purchaseItem(event) }>{item.purchased}</Button>
                <br />
                <Button size="small" variant="outlined" className="remove-button"onClick={ (event) => removeItem(event) }>Remove</Button>
            </div>
        </div>
    )
}

export default ShoppingItem;
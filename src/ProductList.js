import Header from './Header';
import { useNavigate } from 'react-router-dom';
import react, { useState, useEffect } from 'react';
import Table from 'react-bootstrap/Table'
function ProductList() {
    const[data,setData] = useState([]);

    useEffect(async () => {
        let products = await fetch('http://localhost:8000/api/getproduct');
        products = await products.json();
        setData(products);

    }, [])
    console.warn("data",data);
    let productCount=1;
    return (

        <>
            <Header /><br />
            <div className="col-sm-10 offset-sm-1">
                <h1> Product List</h1><br />
                <Table  striped bordered hover>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Id</th>
                            <th>Naem</th>
                            <th>Price</th>
                            <th>Quentity</th>                        
                            <th>Description</th>
                            <th>Image</th>
                            <th>Delete</th>
                            <th>Update</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            
                            data.map((item)=>
                            <tr>
                                <td>{productCount}</td>
                                <td>{item.id}</td>
                                <td>{item.name}</td>
                                <td>{item.price}</td>
                                <td>{item.quantity}</td>                           
                                <td>{item.description}</td>
                                <td><img style={{width:100}} src={"http://localhost:8000/"+item.image} /></td>
                                <td><button className="btn btn-danger">Delete</button></td>
                                <td><button className="btn btn-primary">Edit</button></td>
                            </tr>                     
                            )
                        }
                    
                    </tbody>
                </Table>
            </div>
		</>
	)
}
export default ProductList
import Header from './Header';
import { useNavigate } from 'react-router-dom';
import react, { useState, useEffect } from 'react';
import Table from 'react-bootstrap/Table'
import { confirm } from "react-confirm-box";
function ProductList() {
    const[data,setData] = useState([]);

    useEffect(() => {
        getProduct();

    }, [])
   // console.warn("data",data);

   async function delteProduct(id)
    {
        const result = await confirm("Are you sure?");
        if(result){
            let del = await fetch('http://localhost:8000/api/deleteproduct/'+id,{
                method:'DELETE'
            });
            del=del.json();
           getProduct();
        }
    }

    async function getProduct()
    {
        let products = await fetch('http://localhost:8000/api/getproduct');
        products = await products.json();
        setData(products);
    }
   
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
                            
                            data.map((item,i)=>
                            <tr>
                                <td>{i+1}</td>
                                <td>{item.id}</td>
                                <td>{item.name}</td>
                                <td>{item.price}</td>
                                <td>{item.quantity}</td>                           
                                <td>{item.description}</td>
                                <td><img style={{width:100}} src={"http://localhost:8000/"+item.image} /></td>
                                <td><button onClick={()=>{delteProduct(item.id)}} className="btn btn-danger">Delete</button></td>
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
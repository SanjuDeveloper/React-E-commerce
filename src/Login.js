import react,{useState,useEffect} from 'react';
import { Link, useNavigate } from 'react-router-dom'

function Login()
{
	const navigate=useNavigate();
	const [email,setEmail]=useState("");
	const [password,setPassword]=useState("");

	useEffect(()=>{
		if(localStorage.getItem('user-info')){
			navigate('/ProductList')	
		}
	},[])


	async function login()
	{
		console.warn("data",email,password);
		let userInfo = {email,password};		
		let result = await fetch('http://localhost:8000/api/login',{
			method:"post",
			headers:{
				"content-type":"application/json",
				"Accept":"Application/JSON"
			},
			body:JSON.stringify(userInfo)
		});
		result=await result.json();
		//console.warn(result);
		localStorage.setItem("user-info",JSON.stringify(result));
		navigate('/ProductList');
		

	}
	return(
		<>		
			<div className="modal">

				<h1>Login Page</h1>
				<br />
				<div className="col-sm-6 offset-sm-3">
					<input type="text" onChange={(e)=>setEmail(e.target.value)} placeholder="Enter email" className=" container form-control" required></input>
					<br />
					<input type="text" onChange={(e)=>setPassword(e.target.value) }  placeholder="Enter password" className="container form-control" required></input>
					<br />
						
					<button onClick={login} class="btn btn-success">Login</button>&nbsp;&nbsp;
					<Link to="/register" ><button class="btn btn-primary">Sign up</button></Link>
				</div>
			</div>			
		</>
	)
}
export default Login
import react,{useState} from 'react';
function Register()
{
	const [name,setName]=useState("");
	const [email,setemail]=useState("");
	const [password,setPassword]=useState("");

	async function signup()
	{
		let formValues = {name,email,password};
		console.warn(formValues);
		let result = await fetch("http://localhost:8000/api/register",{
			method:"post",
			headers:{
				"content-type":"application/json",
				"Accept":"Application/JSON"
			},
			body:JSON.stringify(formValues)
		});
		result=await result.json();
		console.warn(result);
	}
	return(
		<div className="col-sm-6 offset-sm-3">
			<h1>User Sign up Page</h1>
			<br />
			<input type="text" onChange={(e)=>setName(e.target.value)} placeholder="Enter user name" className="form-control"></input>
			<br />
			<input type="text" onChange={(e)=>setemail(e.target.value)} placeholder="Enter user email" className="form-control"></input>
			<br />
			<input type="password" onChange={(e)=>setPassword(e.target.value)}  placeholder="Enter user password" className="form-control"></input>
			<br />	
			<button onClick={signup} class="btn btn-primary">Sign up</button>
			

		</div>
	)
}
export default Register
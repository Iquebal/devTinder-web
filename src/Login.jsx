import axios from "axios";
import { useState } from "react";

const Login = () => {

    const [emailId, setEmailId] = useState("pinki@gmail.com");
    const [password, setPassword] = useState("Test@123");
       const handleLogin = async () => {
    try{
      
      const res = await  axios.post("http://localhost:3000/login" , {emailId, password

      }, { withCredentials: true }
    );
       console.log(res.data);
    }
    catch(err){
        console.error(err);
    }
       }

    return (
        <div className="flex justify-center my-10">
       <div className="card bg-neutral  w-96">
  <div className="card-body items-center text-center">
    <h2 className="card-title">Login</h2>
      <div>
        <fieldset className="fieldset">
  <legend className="fieldset-legend text-white">Email ID {emailId}</legend>
  <input type="text" className="input"  value={emailId} onChange={(e) => setEmailId(e.target.value)}/>
 
</fieldset>
      </div>
      <div>
        <fieldset className="fieldset">
  <legend className="fieldset-legend text-white">Password</legend>
  <input type="password" className="input" value={password} onChange={(e) => setPassword(e.target.value)}/>
 
</fieldset>
      </div>
    <div className="card-actions justify-end">
     
      <button className="btn btn-primary" onClick={handleLogin}>Login</button>
    </div>
  </div>
</div></div>
    )
}

export default Login;
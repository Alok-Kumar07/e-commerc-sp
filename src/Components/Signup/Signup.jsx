import React, {useState} from 'react'
import {useNavigate } from 'react-router-dom'
import {signInWithEmailAndPassword} from 'firebase/auth';
import { auth } from '../../firebase';

const Signup = () => {
    const navigate = useNavigate();
    const [values, setValues] = useState({
    email:"",
    pass:"",
  });

  const [errorMsg,setErrorMsg] = useState("");
  const [submitButtonDisabled, setSubmitButtonDisabled] = useState(false);

  const handleSubmission=()=>{
    if(!values.email||!values.pass){
      setErrorMsg("Fill all fields");
      return;
    }
    setErrorMsg("");
    setSubmitButtonDisabled(true);
    signInWithEmailAndPassword(auth, values.email, values.pass).then(
      async(res) => {
        setSubmitButtonDisabled(false);
        await navigate("/");
      }
    )
    .catch((err) => {
      setSubmitButtonDisabled(false);
      setErrorMsg(err.message)});
  }
    return (
        <div className='loginsignup'>
          <div className='loginsignup-container'>
            <h1>Login</h1>
            <div className='loginsignup-fields'>
                <input type='email' placeholder='Email Address'
                onChange={(event) =>
                setValues((prev) => ({...prev, email: event.target.value}))
                }/>
                <input type='password' placeholder='Password'
                onChange={(event) =>
                    setValues((prev) => ({...prev, pass: event.target.value}))
                    }/>
            </div>
            <b>{errorMsg}</b>
            <button disabled={submitButtonDisabled} onClick={handleSubmission}>Continue</button>
            <div className='loginsignup-agree'>
                <input type='checkbox' name='' id=''/>
                <p>By continuing, i agree to the terms of use & privacy policy.</p>
            </div>
          </div>
        </div>
      )
}

export default Signup
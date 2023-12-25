import React, {useState} from 'react'
import './Contactus.css'

const Contactus = () => {
  const [userData,setUserData] = useState({
    firstName:"",
    lastNAme:"",
    phone:"",
    email:"",
    message:"",
  });

  let name, value;
  const postUserData = (event) => {
    name = event.target.name;
    value = event.target.value;

    setUserData({...userData,[name]:value});
  };

  //connect with firebase
  const submitData = async(event)=>{
    event.preventDefault();
    const{firstName, lastName,phone,email,message} = userData;
    const res = fetch('https://e-commerce-auth-7-default-rtdb.firebaseio.com/userDataRecords.json',{
      method:'POST',
      Headers:{
      "Content-Type": "application/json",
    },
    body:JSON.stringify({
      firstName, 
      lastName,
      phone,
      email,
      message
    }),
    }
    );
    if(res){
      alert("Data Stored")
    }else{
      alert("please fill the data")
    }
  }
  return (
      <div class="card">
        <h2>Contact Us</h2>
        <div class="row">
          <div class="col">
            <div class="form-group">
        <label>First Name</label>
        <input type="text"
        name='firstName'
        value={userData.firstName}
        onChange={postUserData}
        />
      </div>
    </div>

    <div class="col">
      <div class="form-group">
        <label>Lastname</label>
        <input type="text"
        name='lastName'
        value={userData.lastName}
        onChange={postUserData}/>
      </div>
    </div>

    <div class="col">
      <div class="form-group">
        <label>Email</label>
        <input type="text"
        name='email'
        value={userData.email}
        onChange={postUserData}/>
      </div>
    </div>

    <div class="col">
      <div class="form-group">
        <label>Phone</label>
        <input type="text"
        name='phone'
        value={userData.phone}
        onChange={postUserData}/>
      </div>
    </div>

    <div class="col">
      <div class="form-group">
        <label>Message</label>
        <textarea
        name='message'
        value={userData.message}
        onChange={postUserData}></textarea>
      </div>
    </div>

    <div class="col">
      <input type="submit" value="Submit" onClick={submitData}/>
    </div>
  </div>
</div>
  )
}

export default Contactus

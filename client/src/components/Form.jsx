import React, {useState} from 'react'

const Form = () => {

  const [user, setUser] = useState({
    firstName:"",
    lastName:"",
    email:"",
    password:"",
    confirm:""
  })

  const changeHandler = (e)=>{
    // console.log(e.target.name, e.target.value)
     setUser({...user,[e.target.name]: e.target.value})
  }

  return (
    <div className='container'>
      <h1>Hook Form</h1>
      <div className="row">
        <from className="col-md-4 offset-1">
          <div className="form-group">
            <label htmlFor="firstName">First Name:</label>
            <input type="text" name='firstName' id='firstName' className='form-control' onChange={changeHandler}/>
          </div>
          <div className="form-group">
            <label htmlFor="lastName">Last Name:</label>
            <input type="text" name='lastName' id='lastName' className='form-control' onChange={changeHandler}/>
          </div>
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input type="email" name='email' id='email' className='form-control' onChange={changeHandler}/>
          </div>
          <div className="form-group">
            <label htmlFor="password">Password:</label>
            <input type="password" name='password' id='password' className='form-control' onChange={changeHandler}/>
          </div>
          <div className="form-group">
            <label htmlFor="confirm">Confirm Password:</label>
            <input type="password" name='confirm' id='confirm' className='form-control' onChange={changeHandler}/>
          </div>
        </from>
        <div className="col-md-4 offset-1">
          <h2>First Name: {user.firstName}</h2>
          <h2>Last Name: {user.lastName}</h2>
          <h2>Email: {user.email}</h2>
          <h2>Password: {user.password}</h2>
          <h2>Confirm Password: {user.confirm}</h2>
        </div>
      </div>
    </div>
  )
}

export default Form


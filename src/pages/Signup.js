import React, {useState} from 'react'

export default function Signup() {
    const [input, setInput] = useState({
       email: '', 
       psw: '',
       psw_repeat:''
    })

    function handleChange(event){
        const { name,value}=event.target;
        setInput(prevInput => {
            return {
                ...prevInput, 
                [name]:value

            }
        })
    }

    function handleClick(event){
        event.preventDefault();
        console.log(input);
    }
  return (
    <React.Fragment>
    <section className='sec-sign'>
    <div className='main'>
        <form action="signup.html" style={{border:"1px solid #ccc"}}>
        <div className="signform">
    <div className="container">
      <h1>Sign Up</h1>
      
      <hr/>
  
      <label for="email"><b>Email</b></label>
      <input onChange={handleChange} type="text" placeholder="Enter Email" name="email" value={input.email} required/>
  
      <label for="psw"><b>Password</b></label>
      <input onChange={handleChange} type="password" placeholder="Enter Password" name="psw" value={input.psw} required/>
  
      <label for="psw-repeat"><b>Repeat Password</b></label>
      <input onChange={handleChange} type="password" placeholder="Repeat Password" name="psw_repeat" value={input.psw_rpt} required/>
  
      
  
      <div class="clearfix">
        <button type="button" className="cancelbtn">Cancel</button>
        <button onClick={handleClick} type="submit" className="signupbtn">Sign Up</button>
      </div>
    </div>
    <div className="signup-image">
                        <figure><img src="assets/images/signup-image.jpg" alt=""/></figure>
                        
                    </div>
    </div>
  </form>
  </div>
  </section>
  
  </React.Fragment>
  )
}


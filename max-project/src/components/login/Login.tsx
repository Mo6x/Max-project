import './login.css'
import Rocket from '../../assets/undraw_To_the_stars_qhyy.svg'
import Astronut from '../../assets/undraw_Astronaut_xko2.svg'


function Login(){

  return (
    <div className='login-container'>
        <div className='login-left'>
        <h3>Welcome to Star Wars the Clone Wars</h3>
        <img className='left-image' src={Rocket} alt="rocket" />
        </div>
        <div className='login-right'>
           <form className='login-form'>
            <h3>Sign in to continue to your account</h3>

            <div className='form-input'>
                <label htmlFor="">Email address</label>
                <input 
                type="text" 
                placeholder='Email address' 
                />
            </div>

            <div className='form-input'>
                <label htmlFor="">Password</label>
                <input 
                type="password" 
                placeholder='Enter strong password'
                />
            </div>
            <button className='form-button'>Sign in</button>
           </form>
           <div className='right-image'>
            <img src={Astronut} alt="" />
            </div> 

        </div>

    </div>
  )
}

export default Login
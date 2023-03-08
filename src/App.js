//import logo from './logo.svg';
//import './App.css';
import './Registration.css'
 import{Registration} from './Registration.js'
 import {Input} from './input.js'
 import {Button} from './Button2.js'

function App() {
  const register="Register ..."
  const button="Submit"
  return (
    
    // <div class="Registration">
    // <h1 class="H1">Register here ...</h1>
    //  <input class="Mobile" type="text" placeholder=" mobile ..."></input><br></br>
    //  <input class="Password" type="password" placeholder=" password ..."></input>
    //  <button>Submit</button>
    //  </div>
    
    <>
<Registration registration={register}/>
<Input/>
<Button button={button}/>
   </> 
  );
}

export default App;

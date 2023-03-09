//import logo from './logo.svg';
//import './App.css';
import './Card.css'
import {Card} from './Card.js'


function App() {
   const image="https://images.pexels.com/photos/1183266/pexels-photo-1183266.jpeg"
   const name="Amit"
   const description="Highly creative and multitalented Graphic Designer with extensive experience in multimedia, marketing, and print design."
const designation="Graphic Designer"

  return (
    
    <div>
    <Card image={image} name={name} description={description} designation={designation}/>
    <Card
     image="https://images.pexels.com/photos/3775131/pexels-photo-3775131.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
     name="Ruhi"
     description="perform a variety of music for recordings and live audiences. They audition for positions in choruses, orchestras, bands, plays,
    	           and other types of music groups. "
    designation="Singer"             
    />
    
    </div>

  );
}

export default App;

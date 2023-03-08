import './Registration.css'
export function Registration(props){
        return(
    <h1 class="H1">{props.registration}</h1>
        );
}


//a type of object where the value of attributes of a tag is stored. The word “props” implies “properties”, and its working functionality is 
//quite similar to HTML attributes. Basically, these props components are read-only components.
//Props are used to store data that can be accessed by the children of a React component.
export function Card(props){

    return(
       
        <div className="User1">
        <img src={props.image} style={{height:"80px" , width:"80px" ,borderRadius:"50%"}} alt="" />
        <br/>
        <h7 class="Designation">{props.designation}</h7>
        <h3 class="Name">{props.name}</h3>
        <p class="Description">{props.description}</p>

        </div>
        
        
    );
}


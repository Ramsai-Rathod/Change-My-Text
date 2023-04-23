import React ,{useState}from 'react'



export default function About() {
    const[myStyle,setmyStyle]=useState({
        backgroundColor:'white',
        color:'black',
        border:'0px solid black'
    });
    const [mode,setmode]=useState("Enable Dark Mode")
    const toggleStyle=()=>{
        if(myStyle.backgroundColor==='white')
        {setmyStyle({
            backgroundColor:'black',
            color:'white',
            border:'1px solid white',


         } ) 
         setmode("Enable Light Mode");

        }
        else
        {setmyStyle({
            backgroundColor:'white',
            color:'black',
            border:'0px solid black'
         } ) 
         setmode("Enable Dark Mode");

        }
    };

  return (
   <>
            <div className="container" style={myStyle}>
                <h1 className='my-5'>About Us</h1>
            <div className="accordion" id="accordionExample">
            <div className="accordion-item">
                <h2 className="accordion-header">
                <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne"  style={myStyle}>
                </button>
                </h2>
                <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
                <div className="accordion-body" style={myStyle}>

                </div>
                </div>
            </div>
            <div className="accordion-item">
                <h2 className="accordion-header">
                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo" style={myStyle}>
                </button>
                </h2>
                <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                <div className="accordion-body" style={myStyle}>
            
                </div>
                </div>
            </div>
            <div className="accordion-item">
                <h2 className="accordion-header">
                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree" style={myStyle}>
                </button>
                </h2>
                <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                <div className="accordion-body" style={myStyle}>
        
                </div>
                </div>
            </div>
            </div>    
           
            <div className="container">

                      <button className="btn btn-primary my-3 mx-3" onClick={toggleStyle}>{mode}</button>
             </div>
            </div>

   </>
  )
}


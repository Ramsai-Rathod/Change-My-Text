
import './App.css';
import Textform from './components/Textform';
import Navbar from './components/Navbar';
import { useState } from 'react';
import Alert from './components/Alert';
import About from './components/About';
function App() {
  const [mode, setMode]=useState('light');
  const[alert,setalert]=useState(null);
  const showalert=(message,type)=>{
    setalert({
      msg:message,
      type:type
    })
    setTimeout(() => {
      setalert(null);
      
    }, 3000);

  }
  const tooglemode=()=>{
    if(mode==='light')
    {
      setMode('dark');
      document.body.style.backgroundColor='black';
      showalert("Dark mode is enabled","success");
     
    }
    else{
      setMode('light');
      document.body.style.backgroundColor='white';
      showalert("Light mode is enabled","success");
      
    }
      
  }
  return (
    <>
<Navbar pagename="TEXT-CHANGER" contact='contact'mode={mode} tooglemode={tooglemode} />
<div className="container">
  <Alert alert={alert}/>
<Textform content='Content Here' pagename="iam about start"mode={mode} showalert={showalert}/>
</div>

{<div className="container">
  <About/>
</div> }
</> );
}

export default App;

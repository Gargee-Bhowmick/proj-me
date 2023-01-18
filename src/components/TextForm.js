import React,{useState} from 'react'
import PropType from 'prop-types';
import { isLabelWithInternallyDisabledControl } from '@testing-library/user-event/dist/utils';
export default function TextForm(props) {
    const[text,setText] = useState("");

    const handleChange = (event)=>{
     setText(event.target.value)
    }

    const handleUpper = () =>{
      if(text==='')
      {
      props.showAlert('No text has been entered','warning')
      return
    }
       let l = text.toUpperCase();
       setText(l);
       props.showAlert('Text has been converted into uppercase','success')
    }
    
    const handleLower = ()=>{
      if(text==='')
      {
      props.showAlert('No text has been entered','warning')
      return
    }
      let l = text.toLowerCase();
      setText(l);
      props.showAlert('Text has been converted into lowercase','success')
    }

    const [myStyle,setStyle] = useState({
      color: 'black',
      backgroundColor: 'white'
      })

  return (
  <>
<div className="container mb-3 my-4" style = {{color:props.mode==='light'?'#3A3636':'white'}}>
<h1>{props.heading}</h1>
<textarea className="form-control my-3" style = {{backgroundColor:props.mode==='light'?'white':'#3A3636' , color:props.mode==='light'?'black':'white' }} value={text} onChange={handleChange} id="myText" rows="8"></textarea>
<button className="btn btn-danger my-3" onClick={handleUpper} >Convert to Uppercase</button>
<button className="btn btn-danger my-3 mx-3" onClick={handleLower} >Convert to Lowercase</button>
</div> 
<div style = {{color:props.mode==='light'?'#3A3636':'white'}} className="container" >
<h2>{props.property}</h2>
<p>The word count is: {text.split(" ").length} and the character count is {text.length}</p>
<p>Time taken to read {0.008*text.split(" ").length}</p>
<h2>Preview</h2>
<p>{text}</p>
</div>
</>
  )
}

TextForm.propTypes = {
  heading: PropType.string,
  property: PropType.string,
}

TextForm.defaultProps = {
  heading: "Please set the heading",
  property: "Please fill the property element",
}
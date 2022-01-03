import React from 'react' ;
import "./MyProfile.css" ;
import Data from './data/countries.json' ;

const InputField = (props)=>{
    return(
        <div id="inf">
            <label>{props.label}</label> <input type='text' className='info' required={props.require}/>
        </div>
    )
}
const MyProfile = ()=>{
    const validation = ()=>{
        let inputList= document.getElementsByClassName("info") ;
        let datasets=[inputList[0].value ?inputList[0].value:'' ,inputList[1].value?inputList[1].value:'',inputList[2].value?inputList[2].value:'',inputList[3].value?inputList[3].value:'',inputList[4].value?inputList[4].value:'']
        console.log("test") ;
        localStorage.setItem("userData",JSON.stringify(datasets)) ;
        console.log(JSON.parse(localStorage.getItem("userData"))) ;
        
    }
    return(
        <div>
            <h3>Create your profile</h3>
            <form id = "form">
            <InputField label='First Name:' require={true}/>
            <InputField label='Last Name:' require={true}/>
            <InputField label='Address Line 1:' require={true}/>
            <InputField label='Address Line 2:' require={false}/>
            <div id="inf">
                <label>Country:</label> 
                <input type='text' list='countries' required/>
                <datalist id='countries'>
                    {Data.map(data =>{
                        return(
                            <option id={data.code} value={data.name}/>
                        )
                    })}  
                </datalist>
            </div>
            <input type="submit" value="Create" onClick={validation}/>
            <button onClick={validation}>hello</button>
            </form>
        </div>
        
    )
}
export default MyProfile ;

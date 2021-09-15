import './App.css';
import React,{useState} from 'react'
import Form from './Form'

function App(props) {
  const {initialFormValues, memberMember}= props;

    const [members, setMembers]=useState(memberMember);
    const [formValues, setFormValues]= useState(initialFormValues)
    
    const change = (evt)=>{
      const{name, value}=evt.target;
      setFormValues({...formValues,[name]:value})
    }
  
    const submit = (evt)=>{
      evt.preventDefault();
  
      const newMember={
        membername: formValues.membername.trim(),
        email:formValues.email.trim(),
        role:formValues.role
      }
      setMembers(members.concat(newMember));
      setFormValues(initialFormValues);
    }
   
  return (
    <div className="App">
      <Form members={members} submit={submit} formValues={formValues} change={change}/>
    </div>
  );
  
  }





  


export default App;

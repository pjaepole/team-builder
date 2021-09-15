import React from "react";



  
  function Form(props){
  const {members, submit, formValues, change}=props
  
    return(
      <div>
        <h1>Current Team Member</h1>
        {members.map((member,idx)=>(
          <div key={idx}>
            {member.membername} is working on {member.role}
          </div>))}
          <form onSubmit={submit}>
            <input type="text"value={formValues.membername} name="membername"onChange={change}></input>
            <input type="text"value={formValues.email} name="email"onChange={change}></input>
            <select value={formValues.role}  name="role" onChange={change}>
              <option value="">select a role</option>
              <option value="Front">Frontend engineer</option>
              <option value="Back">Backend engineer</option>
              <option value="Full">Fullstack engineer</option>
              <option value="Design">Designer</option>
            </select>
            
            
            
            <input type='submit' value='submit'/>
  
  
  
  
          </form>
      </div>
  
    )
  
  
  }
  export default Form;
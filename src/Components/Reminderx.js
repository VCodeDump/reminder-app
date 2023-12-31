import React,{useState} from 'react'
import './Reminderx.css'

function Reminderxr() {

  const [reminder, setReminder] = useState([])
  const [newReminder, setNewReminder] = useState('')

  const handleInputChange =(event)=>{
  setNewReminder(event.target.value)
  }

  const handleAddReminder =()=>{
  if(newReminder.trim()){
    setReminder([...reminder,newReminder])
    setNewReminder("")
  }
  }

  const handleDeleteReminder=(index)=>{
    setReminder(reminder.filter((item,itemIndex) => itemIndex != index))
  }

  return (
    <div className='container'>

      <h1>Reminder App</h1>

      <div className='input-container'>
        
      <input 
      type='text'  
      value={newReminder}
      placeholder='Enter a Reminder' 
      onChange={handleInputChange}
      />

      <button className='add-btn' onClick={handleAddReminder}>
         Add Reminder
      </button>

      </div>

      {
        reminder.length >0 ? (
        <ul className='reminder-list'> 
        {
          reminder.map((reminder,index)=>(
  
  
            <li key={index}> 
              {reminder}
              <button className='deleteButton' onClick={()=>handleDeleteReminder(index)} > Delete</button>
            </li>
  
          ))
  
        }
        </ul>):

        <p> No Reminders Found </p>
      }

  
      

      </div>
  )
}

export default Reminderxr
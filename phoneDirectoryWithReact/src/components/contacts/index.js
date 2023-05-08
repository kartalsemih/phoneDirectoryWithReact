import { useState, useEffect } from 'react'
import List from './List'
import Form from './Form'
import './styles.css'


function Contacts() {


  const [contact, setContact] = useState([
    {
      fullname: 'Semih',
      phone_number: '123123'
    }, {
      fullname: 'Ayşe',
      phone_number: '12233341'
    }, {
      fullname: 'Nazlı',
      phone_number: '98523654'
    }
  ]);

  useEffect(() => {
    console.log(contact);
  }, [contact])
  return (
    <div id='container'>
      <h1>Contacts</h1>
      <List contact={contact} />
      <Form addContact={setContact} contact={contact} />
    </div>
  )
}

export default Contacts
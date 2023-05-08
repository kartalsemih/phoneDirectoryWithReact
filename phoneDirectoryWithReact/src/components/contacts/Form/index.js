import { useState, useEffect } from 'react'

const initialFormValues = { fullname: '', phone_number: '' };

function Form({ addContact, contact }) {
  const [form, setForm] = useState(initialFormValues)



  useEffect(() => {
    setForm(initialFormValues)
  }, [contact])

  const onChangeInput = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const onSubmit = (e) => {
    e.preventDefault();

    if (form.fullname == '' || form.phone_number == '') {
      return false;
    }
    addContact([...contact, form])
    console.log(form);

  }
  return (
    <form onSubmit={onSubmit}>
      <div className='inputs'>
        <input value={form.fullname} name='fullname' placeholder='Full Name' onChange={onChangeInput} autoComplete='new-password' />
      </div>
      <div className='inputs'>
        <input value={form.phone_number} name='phone_number' placeholder='Phone Number' onChange={onChangeInput} autoComplete='new-password' />
      </div>
      <div className='btn'>
        <button onClick={onSubmit}>Add</button>
      </div>

    </form>
  )
}

export default Form
import { useState } from 'react'

function List({ contact }) {

  const [filterText, setFilterText] = useState('');

  const filtered = contact.filter((item) => {
    return Object.keys(item).some((key) => {
      return item[key].toString().toLowerCase().includes(filterText.toLowerCase())
    })
  }).sort((a, b) => a.fullname.localeCompare(b.fullname))



  console.log(filtered);
  return (
    <div>

      <input placeholder='filter contact ' value={filterText} onChange={(e) => setFilterText(e.target.value)} />
      <ul className='list'>
        {
          filtered.map((contact, index) => {
            return (
              <li key={index}>
                <span>{contact.fullname}</span>
                <span>{contact.phone_number}</span>
              </li>

            )

          })
        }
      </ul>

      <p>
        total contacts ({filtered.length})
      </p>
    </div>
  )
}

export default List
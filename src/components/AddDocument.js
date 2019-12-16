import React, { useState } from 'react'

const AddDocument = props => {
  const initialFormState = { id: null, docTitle: '', description: '', publisher:'' }
  const [document, setUser] = useState(initialFormState)

  const handleInputChange = event => {
		const { name, value } = event.target

		setUser({ ...document, [name]: value })
  }
  
  return (
    <form 	onSubmit={event => {
      event.preventDefault()
      if (!document.docTitle || !document.description || !document.publisher) return

      props.addDocument(document)
      setUser(initialFormState)
    }}>
      <input type="text" name="docTitle" placeholder="Enter Title" value={document.docTitle} onChange={handleInputChange} />
      <input type="text" name="description" placeholder="Enter Description" value={document.description} onChange={handleInputChange} />
      <input type="text" name="publisher" placeholder="Enter Publisher" value={document.name} onChange={handleInputChange}/>
      <button className="btn btn-primary">Add Document</button>
    </form>
  )
}

export default AddDocument
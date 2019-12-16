import React, { useState } from 'react';
import './App.css';
import DocumentList from './components/DocumentList'
import  AddDocument from './components/AddDocument';

const App= () => {
  const documentData = [
    { id: 1, docTitle: 'document1', description: 'desc1', publisher: 'publisher1' },
    { id: 2, docTitle: 'document2', description: 'desc2', publisher: 'publisher2'},
    { id: 3, docTitle: 'document3', description: 'desc3', publisher: 'publisher3' },
  ]

  const [editing, setEditing] = useState(false);
const initialFormState = { id: null, docTitle: '', description: '', publisher: '' }
const [currentDocument, setCurrentDocument] = useState(initialFormState)

  const [documents, setDocuments] = useState(documentData)
  // Add Document...
  const addDocument = document => {
    document.id = documents.length + 1
    setDocuments([...documents, document])
  }
  // delete documents...
  const deleteDocument = id => {
    setDocuments(documents.filter(document => document.id !== id))
  }
  // edit document...
  const editDocument = user => {
    setEditing(true)
    setCurrentDocument({ id: document.id, docTitleme: document.docTitle, description: document.description, publisher : document.publisher })
  }
  //  update doc
  const updateDocument = (id, updatedDocument) => {
    setEditing(false)
  
    setDocuments(documents.map(item => (item.id === id ? updatedDocument : item)))
  }

  return (
    <div className="container">
      <h2 className="text-center">React.js CRUD App using Hooks</h2>
      <div className="row">
        
        <h3 className="text-center">Add Document</h3>
        <div className="col-md-8 col-md-offset-2">
          <AddDocument addDocument={addDocument} />
        </div>
      </div>
      <div className="row">
        <h3 className="text-center">Document List</h3>
        <div className="col-md-6 col-md-offset-3">
          <DocumentList documents={documents} editDocument={editDocument}  deleteDocument={deleteDocument}/>
        </div>
      </div>
    </div>
  );
}

export default App;

import React, { useState } from 'react';
import { Note } from './models/note.model';
import './App.css';
import Header from './components/Hader';
import NotesList from './components/NotesList';
import { Col, Container, Row } from 'react-bootstrap';
import CreateNotes from './components/CreateNotes';


function App() {

  const [notes, setNotes] = useState<Note[]>([{
    id: new Date().toString(),
    title: "Meeting",
    text: "Schedule Meeting with UI/UX Team",
    color: "#dfdfdf",
    date: new Date().toString()
  }])


  return (
    <>
      <Header />
      <Container className='mt-5'>
        <Row>
          <Col>
            <NotesList notes={notes} setNotes={setNotes}/>
          </Col>
        </Row>
        <Row>
          <Col>
            <CreateNotes notes={notes} setNotes={setNotes}/>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default App;

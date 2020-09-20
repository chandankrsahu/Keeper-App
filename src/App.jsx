import React from "react";
import Note from "./components/Note";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Notes from "../src/notes";


function App(){
  return (
    <div>
      <Header />
      {Notes.map( (note1) =>
  <Note 
    key={note1.key}
    title={note1.title}
    content={note1.content}
  />
  
)}
      
      <Footer />
      </div>
  );
}

export default App;

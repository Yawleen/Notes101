import { HashRouter as Router, Routes, Route } from "react-router-dom"
import Sidebar from "./components/Sidebar"
import SideNotes from "./components/SideNotes"
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { getNotesList } from "./features/notes";
import NotesList from "./components/NotesList";
import FullNote from "./components/FullNote";
import NoteForm from "./components/NoteForm"

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getNotesList());
  }, [])


  return (
    <div className="flex flex-col sm:flex-row flex min-h-screen bg-emerald-800 min-w-[320px]">
      <Router>
        <Sidebar />
        <SideNotes />

        <Routes>
          <Route path="/" element={<NotesList />} />
          <Route path="/note/:id" element={<FullNote />} />
          <Route path="/create" element={<NoteForm />} />
          <Route path="/edit/:id" element={<NoteForm />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App

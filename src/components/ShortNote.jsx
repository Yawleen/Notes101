import { Link } from "react-router-dom";

export default function ShortNote({ note }) {
  return (
    <li className="relative hover:bg-slate-200 border-t border-slate-400 focus-within:bg-slate-200 cursor-pointer">
      <Link to={`note/${note.id}`} state={note} className="block p-4 w-full h-full">
        <span className="block text-xl text-slate-900 truncate">{note.title}</span>
        <span className="block text-lg text-slate-800 truncate">{note.subtitle}</span>
      </Link>
    </li>
  )
}
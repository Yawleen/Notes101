import { useSelector } from "react-redux";
import { Link } from "react-router-dom"

export default function NotesList() {
    const notes = useSelector(state => state?.notes?.list);

    return (
        <div className="w-full py-6 px-8 overflow-hidden">
            <p className="text-2xl text-slate-100 mb-5">Bienvenue sur Notes101.</p>
            <ul className="flex gap-4 overflow-x-auto p-4 sm:p-8">
                {notes && notes.map(note => <li key={note.id} className="shrink-0 w-[200px] bg-slate-100 hover:bg-slate-50 rounded cursor-pointer">
                    <Link to={`note/${note.id}`} state={note} className="block p-4 w-full h-full">
                        <span className="block text-lg font-semibold truncate">{note.title}</span>
                        <span className="block text-gray-700 truncate">{note.subtitle}</span>
                    </Link>
                </li>)}
            </ul>
        </div>
    )
}
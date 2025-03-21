import { Link, useLocation, useNavigate } from "react-router-dom"
import { useDispatch } from "react-redux"
import { deleteNote } from "../features/notes";


export default function FullNote() {
    const dispatch = useDispatch();
    const location = useLocation();
    const navigate = useNavigate();
    const note = location.state || {};

    const onDelete = () => {
        dispatch(deleteNote(note.id));
        navigate("/");
    };

    return (
        <div className="w-full py-6 px-8">
            <div className="flex flex-wrap gap-2 mb-8">
                <Link to="/" className="text-xs p-1.5 bg-slate-300 hover:bg-slate-400 rounded">
                    Notes
                </Link>
                <Link to={`/edit/${note.id}`} state={note} className="text-xs p-1.5 bg-green-600 hover:bg-green-700 text-slate-100 rounded">
                    Mettre à jour
                </Link>
                <button onClick={onDelete} className="text-xs p-1.5 bg-red-600 hover:bg-red-700 text-slate-100 rounded">
                    Supprimer
                </button>
            </div>
            <h3 className="text-xl font-bold text-slate-100 mb-2">
                {note.title}
            </h3>
            <h4 className="text-lg text-slate-100 mb-4">
                {note.subtitle}
            </h4>
            <p className="text-slate-100">
                {note.bodyText}
            </p>
        </div>
    )
}
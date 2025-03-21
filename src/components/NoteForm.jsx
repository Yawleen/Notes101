import { useRef, useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { addNote, updateNote } from "../features/notes";
import { useLocation, useNavigate } from "react-router-dom"
import { v4 as uuidv4 } from "uuid";

export default function NoteForm() {
    const title = useRef();
    const subtitle = useRef();
    const bodyText = useRef();
    const dispatch = useDispatch();
    const location = useLocation();
    const navigate = useNavigate();
    const [showValidation, setshowValidation] = useState({
        title: false,
        subtitle: false,
        bodyText: false,
    })
    const note = location.state || undefined;

    useEffect(() => {
        if (!location.state) {
            title.current.value = "";
            subtitle.current.value = "";
            bodyText.current.value = "";
        }

    }, [location.pathname]);

    const handleOnSubmit = (e) => {
        e.preventDefault();

        if (title.current.value && subtitle.current.value && bodyText.current.value) {
            setshowValidation({
                title: false,
                subtitle: false,
                bodyText: false,
            })
            if (!note) {
                const newNote = { id: uuidv4(), title: title.current.value, subtitle: subtitle.current.value, bodyText: bodyText.current.value };
                dispatch(addNote(newNote));
                navigate(`/note/${newNote.id}`, { state: newNote });
            } else {
                const updatedNote = { ...note, title: title.current.value, subtitle: subtitle.current.value, bodyText: bodyText.current.value };
                dispatch(updateNote(updatedNote))
                navigate(`/note/${note.id}`, { state: updatedNote });
            }
        } else {
            const formValues = { "title": title.current.value, "subtitle": subtitle.current.value, "bodyText": bodyText.current.value };
            for (const [key, value] of Object.entries(formValues)) {
                if (value.length === 0) {
                    setshowValidation(state => ({ ...state, [key]: true }))
                } else {
                    setshowValidation(state => ({ ...state, [key]: false }))
                }
            }
        }
    };


    return (
        <div className="w-full py-6 px-8">
            <form onSubmit={handleOnSubmit}>
                <h2 className="text-lg text-slate-100 mb-4">{!note ? "Créer" : "Modifier"} une note</h2>
                <div className="mb-5">
                    <label className="block text-slate-100 mb-1" htmlFor="title">Titre</label>
                    <input ref={title} {...(note && { defaultValue: note.title })} className="block h-[30px] w-full bg-slate-200 px-2 rounded" type="text" id="title" required />
                    {showValidation.title && (
                        <p className="text-red-400 mb-2">Veuillez renseigner un titre.</p>
                    )}

                </div>
                <div className="mb-5">
                    <label className="block text-slate-100 mb-1" htmlFor="subtitle">Sous-titre</label>
                    <input ref={subtitle} {...(note && { defaultValue: note.subtitle })} className="block h-[30px] w-full bg-slate-200 px-2 rounded" type="text" id="subtitle" required />
                    {showValidation.subtitle && (
                        <p className="text-red-400 mb-2">
                            Veuillez renseigner un sous-titre.
                        </p>
                    )}
                </div>
                <div className="mb-5">
                    <label className="block text-slate-100 mb-1" htmlFor="content">Contenu de la note</label>
                    <textarea
                        id="content"
                        ref={bodyText}
                        {...(note && { defaultValue: note.bodyText })}
                        spellCheck="false"
                        className="p-2 block w-full min-h-[300px] bg-slate-200 resize-none rounded" required ></textarea>
                    {showValidation.bodyText && (
                        <p className="text-red-400 mb-2">Veuillez écrire du contenu.</p>
                    )}
                </div>
                <button className="p-2 bg-slate-200 rounded" type="submit">
                    Enregistrer
                </button>
            </form>
        </div>
    )
}
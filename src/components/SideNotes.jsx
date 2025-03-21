import { useSelector, } from "react-redux";
import ShortNote from "./ShortNote";

export default function SideNotes() {
    const notes = useSelector(state => state?.notes?.list);

    return (
        <aside className="flex flex-col sm:shrink-0 w-full h-[250px] sm:w-[250px] sm:h-auto bg-slate-200 py-6">
            <p className="text-center font-bold text-l mb-10">Mes notes</p>
            <ul className="grow overflow-y-auto">
                {notes && notes.map(note => <ShortNote key={note.id} note={note} />)}
            </ul>
        </aside>
    )
}
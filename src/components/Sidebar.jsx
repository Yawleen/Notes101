import { Link } from "react-router-dom"
import edit from "../assets/edit.svg"
import folder from "../assets/folder.svg"

export default function Sidebar() {
    return (
        <aside className="sm:shrink-0 w-full sm:w-[100px] bg-emerald-900 py-6">
            <div className="flex justify-center gap-x-2 mb-12">
                <button className="w-[10px] h-[10px] bg-red-600 rounded-full"></button>
                <button className="w-[10px] h-[10px] bg-yellow-300 rounded-full"></button>
                <button className="w-[10px] h-[10px] bg-lime-700 rounded-full"></button>
            </div>
            <div className="flex sm:flex-col gap-x-2 sm:gap-y-10">
                <Link to="/" className="block w-[35px] h-[35px] m-auto">
                    <img className="w-full h-full object-contain" src={folder} alt="Voir toutes les notes" />
                </Link>
                <Link to="/create" className="block w-[35px] h-[35px] m-auto">
                    <img className="w-full h-full object-contain" src={edit} alt="Écrire une note" />
                </Link>
            </div>
        </aside>
    )
}
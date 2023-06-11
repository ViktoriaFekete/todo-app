import {Link} from "react-router-dom";

interface NavbarProps {
    title: string;
}

function Navbar(props: NavbarProps): JSX.Element {
    return (
        <div className="navbar bg-base-100">
            <div className="navbar-start">
                <Link to={"/"} className="text-slate-600 hover:text-slate-600">
                    <button className="btn btn-ghost btn-circle">
                        <span className="material-symbols-outlined w-4.5">home</span>
                    </button>
                </Link>
            </div>
            <div className="navbar-center text-black text-lg ">
               {props.title}
            </div>
            <div className="navbar-end"></div>
        </div>
    );
}

export default Navbar;

interface NavbarProps {
    title: string;
}

function Navbar(props: NavbarProps): JSX.Element {
    return (
        <div className="navbar bg-base-100">
            <div className="navbar-start">

                    <button className="btn btn-ghost btn-circle">
                        <span className="material-symbols-outlined w-3.5">arrow_back_ios</span>
                    </button>

                {/*<div className="dropdown">*/}
                {/*    <label tabIndex={0} className="btn btn-ghost btn-circle">*/}
                {/*        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24"*/}
                {/*             stroke="currentColor">*/}
                {/*            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"*/}
                {/*                  d="M4 6h16M4 12h16M4 18h7"/>*/}
                {/*        </svg>*/}
                {/*    </label>*/}
                {/*    <ul tabIndex={0}*/}
                {/*        className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">*/}
                {/*        <li><a>Homepage</a></li>*/}
                {/*        <li><a>Portfolio</a></li>*/}
                {/*        <li><a>About</a></li>*/}
                {/*    </ul>*/}
                {/*</div>*/}
            </div>
            <div className="navbar-center">
               {props.title}
            </div>
            {/*<div className="navbar-end">*/}
            {/*    <button className="btn btn-ghost btn-circle">*/}
            {/*        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24"*/}
            {/*             stroke="currentColor">*/}
            {/*            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"*/}
            {/*                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/>*/}
            {/*        </svg>*/}
            {/*    </button>*/}

            {/*</div>*/}
        </div>
    );
}

export default Navbar;
import { Link } from "react-router-dom"
import FiltroCategorias from "./FiltroCategorias"

const Header = () => {
  return (
    <>
      <div className="navbar bg-base-100  ">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </div>
            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
              <li><a>Inicio</a></li>
              <li><Link to="/tienda">Tienda</Link></li>
              <li>
                <a>Parent</a>
                <ul className="">
                  <FiltroCategorias/>
                </ul>
              </li>
              <li><a>Item 3</a></li>
            </ul>
          </div>
          <a className="btn btn-ghost text-xl">daisyUI</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li><a>Inicio</a></li>
            <li><Link to="/tienda">Tienda</Link></li>
            <li>
              <details>
                <summary>Parent</summary>
                <ul className="p-2 z-10" >
                  <FiltroCategorias/>
                </ul>
              </details>
            </li>
            <li><a>Item 3</a></li>
          </ul>
        </div>
        <div className="navbar-end">
          <div class="form-control">
            <input type="text" placeholder="Search" class="input input-bordered w-24 md:w-auto" />
      
          </div>
        </div>
      </div>
    </>
  )
}

export default Header
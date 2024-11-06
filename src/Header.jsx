import {Link} from "react-router-dom"

export function Header() {
  return (
    <header>
      <nav className="bg-gray-800 text-gray-300 p-4" >
        <a className="px-2 py-2 hover:bg-gray-700 rounded-lg"  href="/">Home</a> | <Link className="px-2 py-2 hover:bg-gray-700 rounded-lg" to="/apples/new">Make Apple</Link>
      </nav>
    </header>
  )
}
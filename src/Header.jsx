import {Link} from "react-router-dom"

export function Header() {
  return (
    <header>
      <nav>
        <a href="#">Home</a> | <Link to="/apples/new">Make Apple</Link>
      </nav>
    </header>
  )
}
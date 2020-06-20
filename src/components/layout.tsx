import React from "react"
import { Link } from "react-router-dom"

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className={"layout"}>
      <section className="header">
        <h1>Header</h1>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/users">Users</Link>
            </li>
          </ul>
        </nav>
      </section>
      <section className="content">{children}</section>
      <section className="footer">
        <h1>Footer</h1>
      </section>
    </div>
  )
}

export default Layout

import React from "react"
import { NavLink } from "react-router-dom"
import { MDXProvider } from "@mdx-js/react"

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className={"layout"}>
      <section className="header">
        <h1 style={{ fontSize: "3rem" }}>The Handbook</h1>
        <div style={{ width: "100%" }}>
          <nav>
            <ul>
              <li>
                <NavLink
                  to="/"
                  exact
                  className={"nav-link"}
                  activeClassName={"activeNav"}>
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/about"
                  className={"nav-link"}
                  activeClassName={"activeNav"}>
                  About
                </NavLink>
              </li>
            </ul>
          </nav>
        </div>
      </section>
      <section className="content">
        <MDXProvider components={components}>{children}</MDXProvider>
      </section>
      <section className="footer"></section>
    </div>
  )
}

const components = {
  pre: (props) => <div {...props} />,
  code: (props) => <pre style={{ color: "tomato" }} {...props} />,
}

export default Layout

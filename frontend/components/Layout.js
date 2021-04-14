import React from "react"
import Head from "next/head"
import Link from "next/link"

import { Container, Nav, NavItem } from "reactstrap"

export default function Layout(props) {
  const title = "Restaurants in Coventry"
  return (
    <div>
      <Head>
        <title>{title}</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <script src="https://js.stripe.com/v3" />
      </Head>
      <header>
        <style jsx>
          {`
            a {
              color: #060606;
            }
            a:hover {
              text-decoration: underline;
            }
          `}
        </style>
        <Nav className="navbar navbar-light bg-light">
          <NavItem>
            <Link href="/">
              <a className="navbar-brand">Restaurants</a>
            </Link>
          </NavItem>

          <NavItem className="ml-auto">
            <Link href="/login">
              <a className="nav-link">Sign In</a>
            </Link>
          </NavItem>

          <NavItem>
            <Link href="/register">
              <a className="nav-link"> Sign Up</a>
            </Link>
          </NavItem>
        </Nav>
      </header>
      <Container>{props.children}</Container>
    </div>
  )
}

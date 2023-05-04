import { Navbar } from "../../index"
import "./Container.css"

export default function Container({ children, title }) {
  return (
    <div className="Container">
      <Navbar />

      <header>
        <h1>{title}</h1>
      </header>

      <main>{children}</main>
    </div>
  )
}

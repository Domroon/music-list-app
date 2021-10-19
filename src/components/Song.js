import "../App.css"
import { useState } from "react"

function Song({ title, interpreter, leadsheet, music, index }) {
  const [hiddenContent, setHiddenContent] = useState(false)

  return (
    <div
      className={`song-row ${index % 2 === 0 ? "odd" : "even"}`}
      onClick={() => {
        setHiddenContent(!hiddenContent)
      }}
    >
      <div className="song-no border">
        <p>1</p>
      </div>
      <div className="song-title border">
        <p>{title}</p>
      </div>
      <div className="song-interpreter border">
        <p>{interpreter}</p>
      </div>
      {hiddenContent && (
        <div className="hidden-content">
          <a href={leadsheet}>Leadsheet</a>
          <a href={music}>Anhören</a>
        </div>
      )}
    </div>
  )
}

export default Song

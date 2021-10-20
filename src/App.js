import "./App.css"
import songs from "./songs"
import Song from "./components/Song"

function App() {
  return (
    <div className="App">
      <h1>Jubeltachmusiktanz</h1>
      <div className="music-list">
        <div className="name-row">
          <div className="col-name no">
            <h2>NO</h2>
          </div>
          <div className="col-name title">
            <h2>Titel</h2>
          </div>
          <div className="col-name interpreter">
            <h2>Interpreter</h2>
          </div>
        </div>
        {songs.map((song, index) => {
          return <Song {...song} index={index} />
        })}
      </div>
      <p className="last">Stand: 20.10.2021, 10:00 Uhr</p>
    </div>
  )
}

export default App

import "./App.css"

function App() {
  return (
    <div className="App">
      <h1>music-list-app</h1>
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
        {/* <div className="leadsheet">
          <p>leadsheet</p>
        </div>
        <div className="listen">
          <p>anhören</p>
        </div> */}
        <div className="song-row odd">
          <div className="song-no border">
            <p>1</p>
          </div>
          <div className="song-title border">
            <p>Toxic</p>
          </div>
          <div className="song-interpreter border">
            <p>Britney Spears</p>
          </div>
        </div>
        <div className="song-row even">
          <div className="song-no border">
            <p>2</p>
          </div>
          <div className="song-title border">
            <p>Strobe</p>
          </div>
          <div className="song-interpreter border">
            <p>Deadmau5</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App

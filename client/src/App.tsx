
import './App.css'

function App() {
  const games = [
    { id: 1, title: "Azul", players: "2-4", playtime: 45, weight: "Medium" },
    { id: 2, title: "Sea Salt & Paper", players: "2-4", playtime: 30, weight: "Light" },
    { id: 3, title: "Blood on the Clocktower", players: "5-20", playtime: 90, weight: "Heavy" },
  ];

  return (
    <div>
      <h1>Meeple Manager</h1>

      {games.map((game) => (
        <div key={game.id}>
          <h2>{game.title}</h2>
          <p>{game.players} players</p>
          <p>{game.playtime} min</p>
          <p>{game.weight}</p>
        </div>
      ))}
    </div>
  );
}

export default App;
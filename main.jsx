import { useState, useEffect } from 'react';

function App() {
  const [joke, setJoke] = useState('');

  useEffect(() => {
    fetchJoke();
  }, []);

  async function fetchJoke() {
    const response = await fetch('https://official-joke-api.appspot.com/random_joke');
    const data = await response.json();
    setJoke(`${data.setup} ${data.punchline}`);
  }

  return (
    <div>
      <h1>Random Joke Generator</h1>
      <p>{joke}</p>
      <button onClick={fetchJoke}>Get a new joke</button>
    </div>
  );
}

export default App;

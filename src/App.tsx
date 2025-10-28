import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import SimpleWeather from "./simple_weather/SimpleWeather";


function Home() {
  return <h1>Home Page</h1>;
}

function App() {
  return (
    <BrowserRouter>
      <nav>
        <Link to="/react_portfolio">Home</Link> | {" "}
        <Link to="/react_portfolio/simple_weather">Simple Weather</Link> | {" "}
      </nav>

      <Routes>
        <Route path="/react_portfolio" element={<Home/>} />
        <Route path="/react_portfolio/simple_weather" element={<SimpleWeather/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App

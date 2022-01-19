import "./App.css";
import "./RowContainer";
import RowContainer from "./RowContainer";
import Banner from "./Banner";
import Navbar from "./Navbar";
function App() {
  return (
    <div className="App">
      {/* navbar banner content */}
      <Navbar />
      <Banner />
      <RowContainer />
    </div>
  );
}

export default App;

// https://api.themoviedb.org/3/movie/76341?api_key=<<api_key>>
// 3e293e77edbe7c457847e8104337baa9

// https://image.tmdb.org/t/p/w500/

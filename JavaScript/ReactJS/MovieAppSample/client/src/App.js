import Movies from './components/movies';
import Header from './components/header';
import AddMovie from './components/addMovie';

function App() {
  return (
    <div className="App">
      <Header />
      <Movies />
      <AddMovie />
    </div>
  );
}

export default App;

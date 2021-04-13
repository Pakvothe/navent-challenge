import './App.css';
import LinkedListComponent from './components/LinkedListComponent'
import LinkedListSort from './components/LinkedListSort'


const App = () => {
  return (
    <div className="App">
      <header className="App-header">
     <LinkedListComponent/>
     <LinkedListSort />
      </header>
    </div>
  );
}

export default App;

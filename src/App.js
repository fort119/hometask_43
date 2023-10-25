import {BrowserRouter} from 'react-router-dom'
import './App.css';
import { Users } from './pages/users';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Users></Users>
      </BrowserRouter>
    </div>
  );
}

export default App;

import { useSelector } from 'react-redux';
import './App.css';
import Logout from './components/Logout';
import Login from './components/Login';
import { selectUser } from './features/userSlice';

function App() {
  const user = useSelector(selectUser);

  return <div className="App">{user ? <Logout /> : <Login />}</div>;
}

export default App;

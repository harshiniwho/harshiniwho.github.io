import './App.css';
import Navbar from './app/Navbar';
import { Typography } from '@material-ui/core'

function App() {
  
  return (
    <div className="App">
      <Navbar />
      <Typography variant={'h2'} >
          Hello! 
      </Typography>
    </div>
  );
}

export default App;

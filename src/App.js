import Navbar from './app/Navbar';
import Navlinks from './app/Navlinks';
import Jumbotron from './app/Jumbotron';

function App() {
  
  return (
    <div className="App">
      <Navbar
        rightLinks={<Navlinks />}
        absolute
        color="black"
        changeColorOnScroll={{
          height: 400,
          color: "white",
        }}
      />
      <Jumbotron />
    </div>
  );
}

export default App;

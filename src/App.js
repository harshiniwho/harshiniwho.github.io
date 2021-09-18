import './App.css';
import About from './components/About';

import Feature from './components/Feature';
import Footer from './components/footer/Footer';
import Header from './components/Header';
import Jumbotron from './components/Jumbotron';
import Portfolio from './components/Portfolio';
import Promo from './components/Promo';

function App() {
  return (
	<div className="homepage is-preload">
		<div id="page-wrapper">
				<div id="header-wrapper">
					<Header />
					<Jumbotron />
				</div>
				<About />
				<Feature />
				<Promo />
				<Portfolio />
        <Footer />
		</div>
    </div>
  );
}

export default App;

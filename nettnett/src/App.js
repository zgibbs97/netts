import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';
import About from './components/About';
import Bio from './components/Bio';
import Gallery from './components/Gallery';
import Shop from './components/Shop';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';

const App = () => (
  <Router>
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/about" component={About} />
          <Route path="/bio" component={Bio} />
          <Route path="/gallery" component={Gallery} />
          <Route path="/shop" component={Shop} />
          <Route path="/contact" component={ContactForm} />
        </Switch>
      </main>
      <Footer />
    </div>
  </Router>
);

export default App;

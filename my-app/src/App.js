import './App.css';
import Footer from './componentes/Footer';
import Navbar from './componentes/Navbar';
import Page from './componentes/home/Page';

function App() {
  return (
    <div className="App">
      
      <Navbar></Navbar>
      <Page></Page>
      <Footer></Footer>
    </div>
  );
}

export default App;

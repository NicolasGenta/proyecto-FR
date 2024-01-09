import CardsContainer from './backEnd/CardContainer';
import './App.css';
import Footer from './componentes/Footer';
import Navbar from './componentes/Navbar';
import Page from './componentes/home/Page';

function App() {
  return (
    <div className="App">
      
      <Navbar></Navbar>
      <CardsContainer/>
      <Page></Page>
      <Footer></Footer>
    </div>
  );
}

export default App;


import './App.css';
import Footer from './componentes/Footer';
import Navbar from './componentes/Navbar';
import Page from './componentes/home/Page';
import ProductosFiltrados from './componentes/home/ProductosFiltrados';

function App() {
  return (
    <div className="App">
      
      <Navbar></Navbar>
      <Page></Page>
      <ProductosFiltrados/>
      <Footer></Footer>
    </div>
  );
}

export default App;

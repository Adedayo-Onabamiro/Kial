import './App.css';
import { AppRouter } from './AppRouter';
import { ProductProvider } from './ProductContext';


function App() {
  return (
    <ProductProvider>
    <div className="App">
      <AppRouter></AppRouter>
    </div>
    </ProductProvider>
  );
}

export default App;

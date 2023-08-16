import './App.css';
import { AppRouter } from './AppRouter';
import { ProductProvider, SelectedProductProvider } from './ProductContext';


function App() {
  return (
    <ProductProvider>
      <SelectedProductProvider>
        <div className="App">
          <AppRouter></AppRouter>
        </div>
      </SelectedProductProvider>
    </ProductProvider>
  );
}

export default App;

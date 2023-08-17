import './App.css';
import { AppRouter } from './AppRouter';
import { CartProvider, ProductProvider, SelectedProductProvider } from './ProductContext';


function App() {
  return (
    <ProductProvider>
      <SelectedProductProvider>
        <CartProvider>
          <div className="App">
            <AppRouter></AppRouter>
          </div>
        </CartProvider>
      </SelectedProductProvider>
    </ProductProvider>
  );
}

export default App;

import { ToastContainer } from 'react-toastify';
import './App.css';
import { AppRouter } from './AppRouter';
import { CartProvider, FavoriteProvider, ProductProvider, SelectedProductProvider } from './ProductContext';


function App() {
  return (
        <ProductProvider>
          <SelectedProductProvider>
            <CartProvider>
              <FavoriteProvider>
                <div className="App">
                  <AppRouter></AppRouter>
                  <ToastContainer></ToastContainer>
                </div>
              </FavoriteProvider>
            </CartProvider>
          </SelectedProductProvider>
      </ProductProvider>
  );
}

export default App;

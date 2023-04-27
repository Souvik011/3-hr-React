import "./App.css";
import Header from "./Layout/Header";
import CartProvider from "./Context/CartProvider";


function App() {
  return (
    <CartProvider>
      
        <Header />
    
    </CartProvider>
  );
}

export default App;

import './App.css';
import Navbar from './components/Navbar/Navbar';
import CategoriesList from './components/CategoriesList/CategoriesList';
import Carousel from './components/Carousel/Carousel';
import BankImage from './components/BankImage/BankImage';
import Products from './components/Products/Products';

function App() {
  // 1. Navbar
  // 2. List of categories
  // 3. carousel
  // 4. Top Offers and side by side boat product
  // 5. Cards component
  return (
    <div>
      <Navbar />
      <CategoriesList />
      <Carousel />
      <BankImage />
      <Products />
    </div>
  );
}

export default App;
import logo from './logo.svg';
import './App.css';
import Navigation from './customers/components/navigation/navigation';
//import HomePage from './customers/pages/hompage/homepage';
import PackageData from './customers/components/packages/package';
import Footer from './customers/components/footer/footer';
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <div>
      <Navigation />
      {/* <HomePage /> */}
      <BrowserRouter>
        <PackageData />
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;

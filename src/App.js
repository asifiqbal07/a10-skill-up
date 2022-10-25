import { RouterProvider } from 'react-router-dom';
import './App.css';
import Footer from './Pages/Shared/Footer/Footer';
import { routes } from './Routes/Routes/Routes';

function App() {
  return (
    <div className="">
      <RouterProvider router={routes} ></RouterProvider>
    </div>
  );
}

export default App;

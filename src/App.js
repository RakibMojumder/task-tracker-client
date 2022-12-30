
import { Toaster } from 'react-hot-toast';
import { RouterProvider } from 'react-router-dom';
import './App.css';
import router from './Routes/Routes';

function App() {
  return (
    <div className="w-[90%] mx-auto">
      <RouterProvider router={router}></RouterProvider>
      <Toaster position='top-center' />
    </div>
  );
}

export default App;

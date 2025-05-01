import './App.css'
import RouterConfig from './CONFIG/RouterConfig'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {

  return (
    <div>
      <RouterConfig />
      <ToastContainer position='bottom-right' />
    </div>
  )
}

export default App

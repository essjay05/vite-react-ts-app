import { HashRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';

function App() {
  return (
    <>
      {/* <form>
        <input
          id="dinosaur_name"
          name="dinosaur_name"
          className="dinosaur-input"
          aria-describedby="dinosaur_name_info"
        />
      </form> */}
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </>
  );
}

function WrappedApp() {
  return (
    <HashRouter>
      <App />
    </HashRouter>
  );
}

export default WrappedApp;

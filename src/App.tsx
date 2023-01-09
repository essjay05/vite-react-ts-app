import { HashRouter } from 'react-router-dom';

function App() {
  return (
    <>
      <h1>Hello World</h1>
      <form>
        <input
          id="dinosaur_name"
          name="dinosaur_name"
          className="dinosaur-input"
          aria-describedby="dinosaur_name_info"
        />
      </form>
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

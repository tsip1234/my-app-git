import './App.css';
import { Routing } from './Routing';
import Navbar from './Navbar';
// import { ToolView } from './features/tool/toolView'
function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      {/* <ToolView /> */}
      <Routing />
    </div>
  );
}

export default App;

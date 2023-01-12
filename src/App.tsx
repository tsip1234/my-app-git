import './App.css';
import { Routing } from './Routing';
import Navbar from './Navbar';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { getLends } from './features/lend/lendSlice';
import { getUsers } from './features/user/userSlice';
import { getTools } from './features/tool/toolSlice';
import { getCategories } from './features/category/categorySlice';
import { AppDispatch } from './app/store';
// import { ToolView } from './features/tool/toolView'
function App() {
  const dispatch: AppDispatch = useDispatch();
  useEffect(() => {
    dispatch(getLends());
    dispatch(getUsers());
    dispatch(getTools());
    dispatch(getCategories());
  }, [])
  return (
    <div className="App">
      <Navbar></Navbar>
      {/* <ToolView /> */}
      <Routing />
    </div>
  );
}

export default App;

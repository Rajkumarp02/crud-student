import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import Rootlayout from './Navbar/RootLayout';
import Home from './Components/Home';
import Studentlist from './page/Studentlist';
import { useEffect } from 'react';
import { getstudent, updatestudent } from './Action/student';
import { useDispatch } from 'react-redux';
import Edit from './page/Edit';
import './App.css'




function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getstudent())
    dispatch(updatestudent())
  }, [dispatch])

  const router = createBrowserRouter(createRoutesFromElements(
    <Route path='/' element={<Rootlayout />}>
      <Route index element={<Home />} />
      <Route path='/list' element={<Studentlist />} />
      <Route path='/edit/:id' element={<Edit />} />
    </Route>
  )

  )


  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;

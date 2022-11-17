import logo from './logo.svg';
import './App.css';
import Home from './pages/home/Home';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/'>
            <Route index element={<Home />} />
            <Route path='hotels' element={<Home />} />
            <Route path='hotel/:id' element={<Home />} />
            <Route path='login' element={<Home />} />

          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

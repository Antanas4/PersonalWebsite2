import { NavigationBar } from './components/Navbar';
import { Home } from './components/Home'; 
import { Profile } from './components/Profile'; 

function App() {
  return (
    <div className="App">
      <NavigationBar/>
      <Home />
      <Profile />
    </div>
  );
}

export default App;

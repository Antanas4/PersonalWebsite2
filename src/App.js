import  NavigationBar from './components/Navbar';
import { Home } from './components/Home'; 
import { Profile } from './components/Profile'; 
import { Experience } from './components/Experience'; 

function App() {
  return (
    <div className="App">
      <NavigationBar/>
      <Home />
      <Profile />
      <Experience />
    </div>
  );
}

export default App;

import  NavigationBar from './components/Navbar';
import { Home } from './components/Home'; 
import { Profile } from './components/Profile'; 
import { Experience } from './components/Experience'; 
import ContactButton from './components/ContactButton';

function App() {
  const handleContactClick = () => {
    alert('ClickClick');
  };
  return (
    <div className="App">
      <NavigationBar/>
      <Home />
      <Profile />
      <Experience />
      {/* <ContactButton onClick={handleContactClick} label="Contact Me"></ContactButton> */}
    </div>
  );
}

export default App;

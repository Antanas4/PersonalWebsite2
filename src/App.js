import  NavigationBar from './components/Navbar';
import Home from './components/Home'; 
import Profile from './components/Profile'; 
import Experience from './components/Experience'; 
// import Projects from './components/Projects';

function App() {
  // const handleContactClick = () => {
  //   alert('ClickClick');
  // };
  return (
    <div className="App">
      <NavigationBar/>
      <Home />
      <Profile />
      <Experience />
      {/* <Projects /> */}
    </div>
  );
}

export default App;

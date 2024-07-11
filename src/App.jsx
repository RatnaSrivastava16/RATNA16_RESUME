
import './App.css'
import Navbar from './components/navbar/navbar';
import HomePage from './components/homepage/homepage';
import TechStack from './components/TechStack/TechStack';
import Experience from './components/Experience/Experience';
import Projects from './components/Projects/Projects';
function App() {
  return (
    <div className='app'>
      <Navbar/>
      <HomePage/>
      <TechStack/>
      <Experience/>
      <Projects/>
    </div>
  )
}
export default App;
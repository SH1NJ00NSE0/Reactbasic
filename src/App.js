import logo from './logo.svg';
import './App.css';

function App() {

   let titleName = 'React';

   return (
      <div className="App">
         <div className='header'>
            <div className='logo'>
               <a href='#'>
                  <img src='img/React.svg'></img>
                  <span className='title'>{titleName}</span>
               </a>
            </div>
            <ul className='nav'>
               <li><a href='#'>Docs</a></li>
               <li><a href='#'>Tutorial</a></li>
               <li><a href='#'>Blog</a></li>
               <li><a href='#'>Community</a></li>
            </ul>
         </div>
         <div className='section'>
            <img className='bg' src='img/section_bgimg.svg'></img>
            <h1 className='section_title'>React</h1>
            <p className='section_description'>A JavaScript library for building user interfaces</p>
         </div>
         <div className='main'>
            <h1>sfsfd</h1>
            <h1>sfsfd</h1>
            <h1>sfsfd</h1>
            <h1>sfsfd</h1>
            <h1>sfsfd</h1>
         </div>
      </div>
   );
}

export default App;

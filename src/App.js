import logo from './logo.svg';
import './App.css';

function App() {

   let titleName = 'React';

   return (
      <div className="App">
         <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Rounded:opsz,wght,FILL,GRAD@48,400,0,0" />
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
            <div className='button_wrap'>
               <div className='get_started'>Get Started</div>
               <div className='tutorial'>
                  <span>Take the Tutorial</span>
                  <span class="material-symbols-rounded">arrow_forward_ios</span>
               </div>
            </div>
         </div>
         <div className='main'>
            <h1>sfsfd</h1>
            <h1>sfsfd</h1>
            <h1>sfsfd</h1>
            <h1>sfsfd</h1>
            <h1>sfsfd</h1>
            <h1>sfsfd</h1>
            <h1>sfsfd</h1>
            <h1>sfsfd</h1>
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

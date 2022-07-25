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
            <p className='section_description'>사용자 인터페이스를 만들기 위한 JavaScript 라이브러리</p>
         </div>
      </div>
   );
}

export default App;

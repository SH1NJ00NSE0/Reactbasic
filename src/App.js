import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {

   let titleName = 'React';
   let [num, renum] = useState(0);
   let [value, calc] = useState(0);
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
            <h1 className='section_title'>{titleName}</h1>
            <p className='section_description'>A JavaScript library for building user interfaces</p>
            <div className='link_wrap'>
               <div className='get_started'>Get Started</div>
               <div className='tutorial'>
                  <span>Take the Tutorial</span>
                  <span class="material-symbols-rounded">arrow_forward_ios</span>
               </div>
            </div>
         </div>
         <div className='main'>
            <div className='features'>
               <div className='item'>
                  <p className='feature'>Declarative</p>
                  <p className='sub'>
                     React makes it painless to create interactive UIs.
                     Design simple views for each state in your application,
                     and React will efficiently update and render
                     just the right components when your data changes.
                  </p>
                  <p className='conclusion'>
                     Declarative views make your code more predictable
                     and easier to debug.
                  </p>
               </div>
               <div className='item'>
                  <p className='feature'>Component-Based</p>
                  <p className='sub'>
                     Build encapsulated components that manage their own state,
                     then compose them to make complex UIs.
                  </p>
                  <p className='conclusion'>
                     Since component logic is written in JavaScript instead of templates,
                     you can easily pass rich data through your app and keep state out of the DOM.
                  </p>
               </div>
               <div className='item'>
                  <p className='feature'>Learn Once, Write Anywhere</p>
                  <p className='sub'>
                     We don’t make assumptions about the rest of your technology stack,
                     so you can develop new features in React without rewriting existing code.
                  </p>
                  <p className='conclusion'>
                     React can also render on the server using Node and power mobile apps using
                     <span>React Native.</span>
                  </p>
               </div>
            </div>

            <hr></hr>

            <div className='state_test'>
               <div className='button_wrap'>
                  <span className='button' onClick={() => {
                     renum(0);
                  }}>Reset</span>

                  <span className='button' onClick={() => {
                     renum(num + 1);
                  }}>Plus</span>

                  <span className='button' onClick={() => {
                     renum(num - 1);
                  }}>Minus</span>

                  <span className='button' onClick={() => {
                     renum(Math.pow(num, 2));
                  }}>square</span>

                  <span className='button' onClick={() => {
                     renum(Math.sqrt(num));
                  }}>root</span>
               </div>
               <span className='display'>{num}</span>
            </div>

            <div className='contaioner'>
               <form className='calculator' name='calc'>
                  <input type="text" className='value' readOnly name='txt' />
                  <span className='num' onClick={() => {
                     calc.txt.value = '3';
                  }}><i>C</i></span>
               </form>
            </div>
         </div>
      </div>/*App div의 끝*/
   );
}

export default App;

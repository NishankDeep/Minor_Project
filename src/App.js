import logo from './logo.svg';
import './App.css';
import React from 'react';
import {BrowserRouter as Router,Route,Navigate,Routes} from 'react-router-dom';
import TitleBar from './Components/TitleElement/TitleBar';
import Body from './Components/BodyContent/Body';
import LoginPage from './Components/Login/Login';
import SignupPage from './Components/SignUp/SignUpPage';
import Footer from './Components/UIElement/Footer';
import Post from './Components/Posts/Post';
import Suggestions from './Components/Suggestion/Suggestion';
import LeftSideBox from './Components/Suggestion/LeftBox';

const App = () => {

  const pages = (
    <Routes>
      <Route path="/" exact element={<><Body/> </>}>
      </Route>
      <Route path="/login" exact element={<LoginPage/>}>
      </Route>
      <Route path="/signup" exact element={<SignupPage/>}>
      </Route>
      <Route path="/post" exact element={<><Post/> <Suggestions/> <LeftSideBox/></>}>
      </Route>
      {/* <Navigate to="/" /> */}
    </Routes>
  );

    return (
      <Router>
        <TitleBar></TitleBar>
        <div className='content'>
            {pages}
        </div>
        <Footer />
      </Router>
    );
}
// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

export default App;

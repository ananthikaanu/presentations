
// import './App.css';
// // import ContextProvider from './context/ContextProvider';
// import Reuse from'./Reuse'
// function App() {
//   return (
//     <div className="App">
//       {/* <ContextProvider/> */}
//       {/* <Reuse>
//         <h1>i am reuse component</h1>
//         </Reuse> */}
//         context api
//     </div>
//   );
// }

// export default App;

import React, { Component } from 'react';
import './App.css';
import ComponentC from './components/ComponentC';
import { UserProvider, ChannelProvider } from './components/userContext'; // Update this line

class App extends Component {
  render() {
    return (
      <div className='App'>
        <UserProvider value="Midun">
          <ChannelProvider value="Context API">
            <ComponentC />
          </ChannelProvider>
        </UserProvider>
      </div>
    );
  }
}

export default App;
// App.js
import React from 'react';
import SignIn from './components/SignIn';
import Translate from './components/Translate';
import Welcome from './components/Welcome';
import Header from './components/Header';


const App = () => {
    return (
        <div>
            <Header />
            <Welcome />
            <Translate />
            {/* <SignIn /> */}
        </div>
    );
};

export default App;

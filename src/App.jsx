import React from 'react';
import './App.scss';
import Main from './components/Main';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';


function App() {
	return (
		<div className="App root">
			<Main/>
			<SignIn/>
			<SignUp/>
		</div>
	);
}

export default App;

import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'react-bootstrap';

function App() {
	return (
		<div className='App'>
			<header className='App-header'>
				<img src={logo} className='App-logo mb-4' alt='logo'
 />
				<p className='mt-4'>Bootstrap has been included and I am ready to go.</p>
				<p>
					Edit <code>src/App.js</code> and save to reload.
				</p>
        <div className='d-flex gap-2'>
				<Button
					className='App-link'
					href='https://reactjs.org'
					target='_blank'
					rel='noopener noreferrer'
				>
					Learn React
				</Button>
				<Button
					className='App-link'
					href='https://react-bootstrap.github.io'
					target='_blank'
					rel='noopener noreferrer'
				>
					Learn Bootstrap
				</Button>
        </div>
			</header>
		</div>
	);
}

export default App;

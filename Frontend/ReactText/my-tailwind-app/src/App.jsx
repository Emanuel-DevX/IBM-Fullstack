import React, { useState, useEffect } from 'react';

function App() {
	const [count, setCount] = useState(0);
	const currDate = new Date();
  const [time, setTime] = useState(new Date().toLocaleTimeString());

	useEffect(() => {
		const interval = setInterval(() => {
			setTime(new Date().toLocaleTimeString());
		}, 1000); // updates every second

		return () => clearInterval(interval); // cleanup on unmount
	}, []);

	return (
		<>
			<div className="bg-slate-950 h-screen w-screen mx-auto self-center text-white p-10">
				<h1>Hello World!</h1>
				<h2>The time now is {currDate.toLocaleTimeString()}.</h2>
				<p>The current time is:</p>
				<p className="font-mono mt-2 text-blue-600">{time}</p>

				<button onClick={() => setCount(count => count + 1)}>
					{' '}
					Count: {count}
				</button>
			</div>
		</>
	);
}

export default App;

import { useEffect, useState } from 'react';
import reactLogo from './assets/react.svg';
import './App.css';
import { Button } from '@mantine/core';

function App() {
  const [count, setCount] = useState(0);

  console.log(1);

  useEffect(() => {
    console.log(2);
  }, []);

  return (
    <div>
      <Button>Test</Button>
    </div>
  );
}

export default App;

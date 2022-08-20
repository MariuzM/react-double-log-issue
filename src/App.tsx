import { Button } from '@mantine/core';
import { useEffect } from 'react';

function App() {
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

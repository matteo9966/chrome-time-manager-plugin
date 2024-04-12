import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import { Button } from '@/components/button';
import { Card } from '@/components/ui/card';
function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <br />
      <div className="bg-primary text-primary-foreground">Hello</div>
      <br />
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      <Button variant={'destructive'}>Click me</Button>
      <Button variant={'ghost'}>Click me</Button>
      <Button variant={'link'}>Click me</Button>
      <Button variant={'outline'}>Click me</Button>
      <Button variant={'secondary'}>Click me</Button>
      <Card>
        <h1>Card</h1>
      </Card>
    </>
  );
}

export default App;

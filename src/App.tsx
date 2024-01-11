import Button from './components/Button';
import Alert from './components/Alert';



function App() {
  return (
    <div>
      <Alert>My alert</Alert>
      <Button color="primary" onClick={() => console.log('Clicked')}>My Button</Button>
    </div>
  );
}

export default App;
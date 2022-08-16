import './App.css';
import  Container from '@material-ui/core/Container';

function App() {
  return (

      <Container maxWidth="xs" className="App">
        <button>1</button>
        <button>2</button>
        <button>3</button>

        <button>4</button>
        <button>5</button>
        <button>6</button>
        
        <button>7</button>
        <button>8</button>
        <button>9</button>
       
        <button>0</button>
        <button>,</button>

        <button className="orange">/</button>
        <button className="orange">x</button>
        <button className="orange">-</button>
        <button className="orange">+</button>
        <button className="orange">=</button>

        <button className="gray">AC</button>
        <button className="gray">+/-</button>
        <button className="gray">%</button>
      </Container>
      
  );
}

export default App;

import './App.css';
import { useRef,useState} from 'react';
import { CardComponent } from './CardComponent';
const cardData=[
  {
    title:'Card1',
    text:'text for card1'
  },
  {
    title:'Card1',
    text:'Welcome to World'
  },
  {
    title:'Card3',
    text:'Gotcha it'
  },
  {
    title:'Card4',
    text:'last One remains'
  }]
function App() {
  const animate=useRef(null);
  return (
    <div className="App" >
     <CardComponent data={cardData}/>
    </div>
  );
}

export default App;

import './App.css'
import Card from './Components/Card'

function App() {
  return (
    <>
      <h1>Students:- </h1>
      <div className='dataCards'>
      <Card name='Sontu' roll={21} stuClass='5' />
      <Card name="Mantu" roll={1} stuClass='6' />
      <Card name='Kocha' roll={2} stuClass='3' />
      <Card name='Poncha' roll={31} stuClass='2' />
      <Card name='Leo' roll={43} stuClass='1' />
      <Card name='Josh' roll={32}  />
      </div>
    </>
  )
}

export default App;

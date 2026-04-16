import './App.css'
import Navbar from './components/Navbar'
import Header from './components/Header'
import List from './components/List'
import Counter from './components/Counter'
import Form from './components/Form'

function App() {
  const nomi = ['Mario', 'Piero', 'Angelo']

  return (
    <>
      <Navbar />
      <Header />
      <List nomi={nomi}/>
      <Counter />
      <Form />
    </>
  )
}

export default App

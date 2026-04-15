import './App.css'
import Navbar from './components/Navbar'
import Header from './components/Header'
import List from './components/List'

function App() {
  const nomi = ['Mario', 'Piero', 'Angelo']

  return (
    <>
      <Navbar />
      <Header />
      <List nomi={nomi}/>
    </>
  )
}

export default App

import { useState, createContext } from 'react'
import Form from './components/Form';
export const userContext = createContext();
const App = () => {
const [user, setUser] = useState('Siam Ahmed');
  return (
     <>
     <userContext.Provider value={user}>
     <Form/>
     </userContext.Provider>
     </>
  )
}

export default App
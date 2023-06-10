import './App.css'
import { ToDoList } from './components/ToDoList'
import { AllToDoLists } from './components/AllToDoLists'

import {Navbar} from "./components/Navbar";
import { Routes, Route } from 'react-router-dom'

function App() {

  return (
    <div>
        <Navbar title={"What to do?"}/>
        <Routes>
           <Route path="/list/:listId" element={<ToDoList/>}/>
            <Route path="/" element={<AllToDoLists/>}/>

        </Routes>


      {/*<ToDoList />*/}
      {/*<button className="btn btn-primary bg-primary">primary button</button>*/}
      {/*<button className="btn btn-secondary bg-secondary">secondary button</button>*/}

      {/*<button className="h-10 px-6 font-semibold rounded-md bg-black text-white" type="submit">Buy now</button>*/}
      {/*<button type="button" className="bg-indigo-600 text-white text-sm leading-6 font-medium py-2 px-3 rounded-lg">*/}
      {/*    Check availability*/}
      {/*</button>*/}

    </div>
  )
}

export default App


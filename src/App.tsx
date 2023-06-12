import './App.css'
import { ToDoList } from './components/ToDoList'
import { AllToDoLists } from './components/AllToDoLists'
import {Navbar} from "./components/Navbar";
import { Routes, Route } from 'react-router-dom'


function App() {
    return (
        <div>
            <Navbar title={"What to do?"}/>
            <div className="w-11/12 m-auto">
                <Routes>
                   <Route path="/list/:listId" element={<ToDoList/>}/>
                    <Route path="/" element={<AllToDoLists/>}/>
                </Routes>
            </div>
        </div>
  )
}

export default App


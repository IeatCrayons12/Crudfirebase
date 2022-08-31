import { useState,useEffect } from 'react';
import './App.css';
import {db} from "./firebase-config"
import {collection, getDocs,addDoc,updateDoc,deleteDoc,doc} from "firebase/firestore"

function App() {
  const [newName, setNewName] = useState("*")
  const [newAge, setNewAge] = useState(0)

  const [users,setUsers] = useState([])
  const usersCollectionRef = collection(db,"Users")

  const createUser = async () => {
   await addDoc(usersCollectionRef,{Name: newName, Age: Number(newAge)})
  }

  const updateUser = async (id,Age)=>{
    const userDoc = doc(db, "Users",id)
   const newFields = {Age: Age+1}
   await updateDoc(userDoc, newFields)
  }

  const deleteUser = async (id)=> {
    const userDoc = doc(db,"User",id)
    await deleteDoc(userDoc)
  }
  
  useEffect(()=>{ 
    const getUsers = async () => {
    const data = await getDocs(usersCollectionRef)
    setUsers(data.docs.map((doc)=>({...doc.data(),id:doc.id})))
   }
  getUsers()
  },[])

  return (
    <div className="App">
   <input placeholder='Name' onChange={(event)=>{setNewName(event.target.value)}}/>
   <input type="number" placeholder='Age' onChange={(event)=>{setNewAge(event.target.value)}}/>

    <button onClick={createUser}>Create User</button>
    {users.map((user)=> {
      return (
        <div>
        <h1>ID: {user.ID}</h1>
        <h1>Name: {user.Name}</h1>
        <h1>Age: {user.Age}</h1>
        <button onClick={()=>{updateUser(user.id, user.Age)}}>Increase Age</button>
        <button onClick={()=>{deleteUser(user.id)}}>Delete User</button>
       </div>
       )
    })}
    </div>
  );
}

export default App;

import React, {useState} from 'react'

function Todolist() {
    const [myTasks, setTaks] = useState([
        "🍎 Create new components",
        "🍊 Make pull request",
        "🍌 Add some features",
        "🍇 Delete get.js file",
      ])
    const [addTask, setAddTask] = useState('');

    const handleChange = task => {
        setAddTask(task.target.value);
    };

    const deleteByValue = value => {
        setTaks(oldValues => {
          return oldValues.filter(fruit => fruit !== value)
    })
    }
      const AddByValue = value => {
        setTaks(current => [...current, value]);
        setAddTask("")
      }

  return (
        
    <div className='min-h-screen flex flex-col justify-center font-Poppins'>
        <div className='max-w-[500PX] w-full mx-auto mt-4 bg-white p-8 rounded-3xl shadow-lm space-y-4'>
            <h1 className='text-center text-[#857E61] text-2xl font-bold py-4'>My To Do App</h1>
            <div className='flex flex-row justify-center items-center space-x-5'>
                <input onChange={handleChange} value={addTask} type="text" placeholder='Saisissez la tâche à ajouter' className='border w-full p-2 py-sm-3 rounded-xl outline-none placeholder:font-extrabold' required/>
                <button onClick={() => AddByValue(addTask)} className="bg-[#857E61] font-bold whitespace-nowrap px-4 py-2 rounded-xl text-white text-center hover:scale-125 transition duration-500 hover:duration-500">Add</button>
            </div>
            <ul className='space-y-3'>
                {myTasks.map(myTasks => {
                    return (
                    <li key={myTasks} className='flex justify-between bg-white px-3 py-2 drop-shadow-lm rounded-lg'>
                        <span>{myTasks}</span>
                        <button onClick={() => deleteByValue(myTasks)} className='text-[#857E61] font-extrabold'>Delete</button>
                    </li>
                )
                })}
            </ul>
        </div>
    </div>
  )
}

export default Todolist
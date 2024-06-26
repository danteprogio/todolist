import axios from 'axios';

export const getTodoList = async () => {
    let {data} = await axios.get(`/api/todo`)
    return data.results;
};

export const addTask = async (__taskTitle) => {
    let {data} = await axios.post(`/api/todo`,{
        task: __taskTitle
    })
    return data
};


export const deleteTask = async (deleteTask) => {
    let {data} = await axios.delete(`/api/todo/${deleteTask}`)
    return data
};

export const updateTask = async (updateTask,type,newTask = 'Sample') => {
   
    const checkingOfType =()=>{
        console.log(type)
        let typeOfUpdate = '';
        type === 'Status' ?

            typeOfUpdate = {
                status: "complete"
            }
        :
            typeOfUpdate = {
                taskname: newTask
            }
        return typeOfUpdate
    }

    let {data} = await axios.patch(`/api/todo/${updateTask}`,checkingOfType())
    return data
};



// export const getPokemonList = async (limit = 10) => {
//   const { data } = await axios.get(`https://pokeapi.co/api/v2/pokemon?limit=${limit}`);
//   return data;
// };

// export const getPokemonMetaByURL = async (url) => {
//   const { data } = await axios.get(url);
//   return data;
// };

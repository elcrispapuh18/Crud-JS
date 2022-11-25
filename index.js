import {getTasks, onGetTasks, saveTasks, deleteTask, getTask, updateTask} from './firebase.js'

 
 const taskForm = document.getElementById('task-form');
 const taskContainer = document.getElementById('tasks-container')

 let editStatus = false;
 let id = '';

 window.addEventListener('DOMContentLoaded', async () => {
   onGetTasks((querySnapshot)=>{
      taskContainer.innerHTML = '';
      querySnapshot.forEach(doc => {
         const task = doc.data()
         taskContainer.innerHTML += `
         <div class="card card-body mt-2 border-primary">
                <h3 class="h5">${task.title}</h3>
                <p>${task.description}</p>
                <div clas="">
                <button class = 'btn btn-primary btn-delete' data-id="${doc.id}">Eliminar</button>
                <button class = 'btn btn-secondary btn-edit' data-id="${doc.id}">Editar</button>
                </div>
         </div>
         `;
      });
      const btnsDelete = taskContainer.querySelectorAll('.btn-delete')

      btnsDelete.forEach(btn => {
         btn.addEventListener('click', ({target: {dataset}}) => {
            deleteTask(dataset.id)
         })
      })
      const btnsEdit = taskContainer.querySelectorAll('.btn-edit')
      btnsEdit.forEach((btn) => {
         btn.addEventListener('click', async (e) => {
            const doc = await getTask(e.target.dataset.id)
            const task = doc.data()

            taskForm['task-title'].value = task.title
            taskForm['task-description'].value = task.description

            editStatus = true;
            id = doc.id

            taskForm['guardar'].innerText = 'actualizando'
            
         })
      })
      
   });  
 });
 taskForm.addEventListener('submit', (e) => {
    e.preventDefault()
    const title= taskForm['task-title']
    const description= taskForm['task-description']
    if(!editStatus){
      saveTasks(title.value, description.value);
    }else{
      updateTask(id, {
         title: title.value,
         description: description.value,
      });
      editStatus = false;
    }
    taskForm.reset()
 })
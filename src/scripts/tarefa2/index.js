console.log('========================index Tarefa 2 ========================');
import { tasks } from './database.js';

// Função retorna um novo array com apenas as descrições das tarefas
const getTasksDescriptions = (tasksList) => {
  const tasksDescriptions = tasksList.map(({ description }) => {
    return description;
  });

  return tasksDescriptions;
};

console.log(getTasksDescriptions(tasks));

// Função para filtrar tarefas por prioridade
const filterTasksByPriority = (tasksList, priority) => {
  const highPriorityTasks = tasksList.filter((taskItem) => {
    return taskItem.priority === priority;
  });

  return highPriorityTasks;
};

console.log(filterTasksByPriority(tasks, 'alta'));

// Função para obter uma task pelo seu id
const findTaskById = (tasksList, id) => {
  const found = tasksList.find((taskItem) => {
    return taskItem.id === id;
  });

  return found;
};

console.log(findTaskById(tasks, 1));

const removeTask = (tasksList, id) => {
  const found = tasksList.find((taskItem) => {
    return taskItem.id === id;
  });

  if (!found) {
    console.log('Tarefa não encontrada.');
  }

  tasksList.forEach((taskItem, index) => {
    if (taskItem.id === id) {
      tasksList.splice(index, 1);
      return;
    }
  });

  return tasksList;
};

console.log(removeTask(tasks, 12));

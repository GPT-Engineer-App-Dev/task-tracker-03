import { Box, Container, VStack, Text, Input, Button, List, ListItem, ListIcon, IconButton } from "@chakra-ui/react";
import { useState } from "react";
import { FaTrash, FaCheckCircle } from "react-icons/fa";

// DoApp component for managing and displaying tasks
const DoApp = () => {
  // State Management
  const [tasks, setTasks] = useState([]);
  const [taskInput, setTaskInput] = useState("");

  // Task Handlers
  // Function to add a new task
  const addTask = () => {
    if (taskInput.trim() !== "") {
      const newTasks = [...tasks, { id: Date.now(), text: taskInput, isCompleted: false }];
      setTasks(newTasks);
      setTaskInput("");
    }
  };

  // Function to delete an existing task
  const deleteTask = (id) => {
    const newTasks = tasks.filter(task => task.id !== id);
    setTasks(newTasks);
  };

  // Function to toggle the completion status of a task
  const toggleTaskCompletion = (id) => {
    const newTasks = tasks.map(task => {
      if (task.id === id) {
        return { ...task, isCompleted: !task.isCompleted };
      }
      return task;
    });
    setTasks(newTasks);
  };

  // UI Components
  return (
    <Container maxW="container.md" py={8}>
      <VStack spacing={8}>
        <Text fontSize="2xl" fontWeight="bold">Todo App</Text>
        <Box w="100%">
          <Input
            placeholder="Add a new task"
            value={taskInput}
            onChange={(e) => setTaskInput(e.target.value)}
            onKeyPress={(e) => e.key === 'Enter' && addTask()}
          />
          <Button onClick={addTask} colorScheme="blue" ml={2}>Add Task</Button>
        </Box>
        <List spacing={3} w="100%">
          {tasks.map(task => (
            <ListItem key={task.id} display="flex" justifyContent="space-between" alignItems="center">
              <Text as={task.isCompleted ? "s" : undefined}>{task.text}</Text>
              <Box>
                <IconButton icon={<FaCheckCircle />} onClick={() => toggleTaskCompletion(task.id)} colorScheme="green" aria-label="Complete Task" />
                <IconButton icon={<FaTrash />} onClick={() => deleteTask(task.id)} colorScheme="red" ml={2} aria-label="Delete Task" />
              </Box>
            </ListItem>
          ))}
        </List>
      </VStack>
    </Container>
  );
};

export default DoApp;
import { Box, Container, VStack, Text, Input, Button, List, ListItem, ListIcon, IconButton } from "@chakra-ui/react";
import { useState } from "react";
import { FaTrash, FaCheckCircle } from "react-icons/fa";

const Index = () => {
  const [tasks, setTasks] = useState([]);
  const [input, setInput] = useState("");

  const handleAddTask = () => {
    if (input.trim() !== "") {
      const newTasks = [...tasks, { id: Date.now(), text: input, isCompleted: false }];
      setTasks(newTasks);
      setInput("");
    }
  };

  const handleDeleteTask = (id) => {
    const newTasks = tasks.filter(task => task.id !== id);
    setTasks(newTasks);
  };

  const handleCompleteTask = (id) => {
    const newTasks = tasks.map(task => {
      if (task.id === id) {
        return { ...task, isCompleted: !task.isCompleted };
      }
      return task;
    });
    setTasks(newTasks);
  };

  return (
    <Container maxW="container.md" py={8}>
      <VStack spacing={8}>
        <Text fontSize="2xl" fontWeight="bold">Todo App</Text>
        <Box w="100%">
          <Input
            placeholder="Add a new task"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyPress={(e) => e.key === 'Enter' && handleAddTask()}
          />
          <Button onClick={handleAddTask} colorScheme="blue" ml={2}>Add Task</Button>
        </Box>
        <List spacing={3} w="100%">
          {tasks.map(task => (
            <ListItem key={task.id} display="flex" justifyContent="space-between" alignItems="center">
              <Text as={task.isCompleted ? "s" : ""}>{task.text}</Text>
              <Box>
                <IconButton icon={<FaCheckCircle />} onClick={() => handleCompleteTask(task.id)} colorScheme="green" aria-label="Complete Task" />
                <IconButton icon={<FaTrash />} onClick={() => handleDeleteTask(task.id)} colorScheme="red" ml={2} aria-label="Delete Task" />
              </Box>
            </ListItem>
          ))}
        </List>
      </VStack>
    </Container>
  );
};

export default Index;
// Define the User interface
interface User {
    id: string;
    name: string;
    room: string;
  }
  
  // Initialize an empty array to store users
  const users: User[] = [];
  
  // Function to add a user
  const addUser = ({ id, name, room }: { id: string; name: string; room: string }): { error?: string; user?: User } => {
    // Normalize the name and room
    name = name.trim().toLowerCase();
    room = room.trim().toLowerCase();
  
    // Check if the user already exists in the room
    const existingUser = users.find((user) => user.room === room && user.name === name);
  
    // Handle errors
    if (!name || !room) return { error: 'Username and room are required.' };
    if (existingUser) return { error: 'Username is taken.' };
  
    // Create a new user and add to the users array
    const user: User = { id, name, room };
    users.push(user);
  
    return { user };
  }
  
  // Function to remove a user by ID
  const removeUser = (id: string): User | undefined => {
    const index = users.findIndex((user) => user.id === id);
  
    if (index !== -1) return users.splice(index, 1)[0];
  }
  
  // Function to get a user by ID
  const getUser = (id: string): User | undefined => users.find((user) => user.id === id);
  
  // Function to get all users in a specific room
  const getUsersInRoom = (room: string): User[] => users.filter((user) => user.room === room);
  
  export { addUser, removeUser, getUser, getUsersInRoom };
  
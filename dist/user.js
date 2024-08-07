"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getUsersInRoom = exports.getUser = exports.removeUser = exports.addUser = void 0;
// Initialize an empty array to store users
const users = [];
// Function to add a user
const addUser = ({ id, name, room }) => {
    // Normalize the name and room
    name = name.trim().toLowerCase();
    room = room.trim().toLowerCase();
    // Check if the user already exists in the room
    const existingUser = users.find((user) => user.room === room && user.name === name);
    // Handle errors
    if (!name || !room)
        return { error: 'Username and room are required.' };
    if (existingUser)
        return { error: 'Username is taken.' };
    // Create a new user and add to the users array
    const user = { id, name, room };
    users.push(user);
    return { user };
};
exports.addUser = addUser;
// Function to remove a user by ID
const removeUser = (id) => {
    const index = users.findIndex((user) => user.id === id);
    if (index !== -1)
        return users.splice(index, 1)[0];
};
exports.removeUser = removeUser;
// Function to get a user by ID
const getUser = (id) => users.find((user) => user.id === id);
exports.getUser = getUser;
// Function to get all users in a specific room
const getUsersInRoom = (room) => users.filter((user) => user.room === room);
exports.getUsersInRoom = getUsersInRoom;

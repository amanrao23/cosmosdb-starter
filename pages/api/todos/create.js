// api/createTodo.js
import { v4 as uuidv4 } from "uuid";
import { cosmosContainer } from "../../../lib/cosmos";

export default async function handler(req, res) {
  if (req.method === "POST") {
    const { title } = req.body;
    const newTodo = { id: uuidv4(), title, completed: false };
    const {container} = await cosmosContainer();
    const { resource: createdTodo } = await container.items.create(newTodo);
    res.status(201).json(createdTodo);
  } else {
    res.status(405).end(); // Method Not Allowed
  }
}
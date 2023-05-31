// api/createTodo.js
import { v4 as uuidv4 } from "uuid";
import { container } from "../../../lib/cosmos";

export default async function handler(req, res) {
  if (req.method === "POST") {
    const { title } = req.body;
    const newTodo = { id: uuidv4(), title, completed: false };
    try{
    const { resource: createdTodo } = await container.items.create(newTodo);
    res.status(201).json(createdTodo);
    }catch(err){
        console.log(err);
    }
  } else {
    res.status(405).end(); // Method Not Allowed
  }
}
import express from "express";
import { dataAccess } from './dataAccess.js';
import cors from 'cors';
const app = express();
const PORT = 3001;

app.use(express.json()); // Enable JSON body parsing
app.use(cors());   


//using ASYNC , try , catch for error handling 

// GET all tasks
app.get('/tasks', async (req, res) => {
    try {
        const tasks = await dataAccess.readData();
        res.json(tasks);
    } catch (error) {
        res.status(500).json({ message: 'Error retrieving data', error: error.message });
    }
});

// GET task by ID
app.get('/tasks/:id', async (req, res) => {
    try {
        const tasks = await dataAccess.readData();
        const id = parseInt(req.params.id);
        const task = tasks.find(item => item.id == id);
        if (task) {
            res.json(task);
        } else {
            res.status(404).json({ message: 'Task not found' });
        }
    } catch (error) {
        res.status(500).json({ message: 'Error retrieving task', error: error.message });
    }
});

// POST new task
app.post('/tasks', async (req, res) => {
    try {
        const tasks = await dataAccess.readData();
        console.log("tasks", tasks)
        const newTask = req.body;
        if (!newTask || Object.keys(newTask).length === 0) {
            return res.status(400).json({ error: "task need to be required." });
        }
        const id = Date.now().toString();
        tasks.push({ id, ...newTask })
        const parentObject = {"tasks": tasks}
        await dataAccess.writeData(parentObject);
        res.status(201).json({ id, ...newTask });
    } catch (error) {
        res.status(500).json({ message: 'Error creating item', error: error.message });
    }
});


// PUT update task
app.put('/tasks/:id', async (req, res) => {
    try {
        let tasks = await dataAccess.readData();
        const index = tasks.findIndex(task => task.id == req.params.id);
        console.log("indxxxxx", index)
        if (index != -1) {
            tasks[index] = { ...tasks[index], ...req.body, id: req.params.id};
            const parentObject = {"tasks": tasks}
            await dataAccess.writeData(parentObject);
            res.json(tasks[index]);
        } else {
            res.status(404).json({ message: 'Item not found' });
        }
    } catch (error) {
        res.status(500).json({ message: 'Error updating item', error: error.message });
    }

});

// DELETE task
app.delete('/tasks/:id', async (req, res) => {
    try {
        let tasks = await dataAccess.readData();
        const ind = tasks.findIndex(item => item.id === req.params.id)
       if (ind !== -1) {
            tasks.splice(ind,1)
            const parentObject = {"tasks": tasks}
            await dataAccess.writeData(parentObject);
            res.status(200).json({ message: "Task has been deleted." });
        } else {
            res.sendStatus(404);
        }
    } catch (error) {
        res.status(500).json({ message: 'Error deleting item', error: error.message });
    }
});

//server running port
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});

export default app;

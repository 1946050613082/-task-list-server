const express = require('express');
const app = express();

app.get('/tasks', (req, res) => {
    const tasks = [
        {
            "id": "123456",
            "isCompleted": false,
            "description": "Walk the dog"
        }
        // ... otras tareas
    ];
    res.json(tasks);
});

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

// Parse the incoming request

app.use(express.json());

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`)
});

// Define a list of items
// const items = [
//     { id: 1, name: 'Item 1' },
//     { id: 2, name: 'Item 2' },
//     { id: 3, name: 'Item 3' },
// ];

// app.get('/api/items', (req, res) => {
//     res.send(items);
// })

// app.get('/api/items/:id', (req, resp) => {
//     const itemId = parseInt(req.params.id);
//     const item = items.find(i => i.id === itemId);

//     if (!item) {
//         return resp.status(404).json({
//             status: 'error',
//             message: 'Item not found'
//         });

//         res.json(item);
//     }
// });


// // add a new item POST

// app.post('api/items', (req, resp) => {
//     const newItem = req.body;
//     items.push(newItem);
//     resp.status(201).json(newItem);
// })

// // update an item PUT

// app.put('/api/items/:id', (req, resp) => {
//     const itemId = parseInt(req.params.id);
//     const updateItem = req.body;

//     const index = items.findIndex(i => i.id === itemId);
//     if (index === -1) {
//         return resp.status(404).json({
//             status: 'error',
//             message: 'Item not found'
//         });
//     }

//     items[index] = updateItem;
//     res.json(updateItem);
// });

// // delete an item DELETE

// app.delete('/api/items/:id', (req, resp) => {
//     const itemId = parseInt(req.params.id);
//     const index = items.findIndex(i => i.id === itemId);

//     if (index === -1) {
//         return resp.status(404).json({
//             status: 'error',
//             message: 'Item not found'
//         });
//     }

//     items.splice(index, 1);
//     res.json({ status: 'success', message: 'Item removed' });
// })
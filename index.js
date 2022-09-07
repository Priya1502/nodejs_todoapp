import express from  'express';
import bodyParser from 'body-parser';
import studentsRoutes from './routes/students.js';

const app = express();
const PORT = 5000;


app.use(bodyParser.json());
app.use('/students' , studentsRoutes);
app.get('/', (req,res) => {
    console.log('[TEST]!');
    res.send('Hello from homepage.');
});


app.listen(PORT, () => console.log(`Server running on port:http://localhost:${PORT}`));
import express, { Application } from 'express'; 
import todoRoutes from './routes/todoRoutes';

const app: Application = express();
const PORT = 3000;

app.use(express.json());

app.use('/api', todoRoutes);

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});






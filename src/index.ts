import express, { Application } from 'express'; 
import todoRoutes from './routes/todoRoutes';
import { errorHandler } from './middleware/errorHandler';

const app: Application = express();
const PORT = 3000;

app.use(express.json());

app.use('/api', todoRoutes);

app.use(errorHandler);

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});






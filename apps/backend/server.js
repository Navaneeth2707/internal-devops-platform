import Express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';

dotenv.config();
const app = Express();
app.use(cors()); // Enable CORS for all routes
const PORT = process.env.PORT||5000; // Default to 5000 if PORT is not set in .env
// Log the port to the console for debugging
console.log(process.env.PORT); 
app.get('/', (req, res) => {
     res.json({ message: 'Hello from backend' });
    });



    app.listen(PORT, () => {
    
    console.log(`Server is running on port ${PORT}`);
    });
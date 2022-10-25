import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
import config from './config';
// Routes
import productsRoutes from './routes/products.routes';
import productRoutes from './routes/product.routes';
import userRoutes from './routes/users.routes'

const app = express();

// settings
app.set('port', config.port || 8080);

// Middlewares
app.use(morgan('dev'));
app.use(express.json());
app.use(cors({ origin: '*' }));
// Routes
app.use('/api/products', productsRoutes);
app.use('/api/product', productRoutes);
app.use('/api/users', userRoutes);
app.get('/', (req, res)=> {
    res.json({
        "OldWave-Backend": "api v1"
    })
})

export default app;
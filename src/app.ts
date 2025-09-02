import express from 'express';
import bodyParser from 'body-parser';
import todoRoutes from './routes/todoRoutes.js';
import swaggerUi from 'swagger-ui-express';
// @ts-ignore
import swaggerSpec from './swagger.js';

const app = express();
app.use(bodyParser.json());

// Swagger UI
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));


app.get('/', (req, res) => {
	res.send('Backend running on <a href="/api-docs">http://localhost:3000/api-docs</a>');
});

app.use('/', todoRoutes);

// Middleware de gestion des erreurs
import type { Request, Response, NextFunction } from 'express';

app.use((err: any, req: Request, res: Response, next: NextFunction) => {
	console.error(err);
	res.status(err.status || 500).json({
		error: err.message || 'Erreur interne du serveur'
	});
});

export default app;

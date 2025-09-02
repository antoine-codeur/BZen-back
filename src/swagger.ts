import swaggerJsdoc from 'swagger-jsdoc';
import type { Options } from 'swagger-jsdoc';

const options: Options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'ToDoList API',
      version: '1.0.0',
      description: 'API pour gérer une todolist',
    },
    servers: [
      {
        url: 'http://localhost:3000',
      },
    ],
  },
  apis: ['./src/routes/*.ts'], // Documentation via JSDoc dans les routes
};

const swaggerSpec = swaggerJsdoc(options);

export default swaggerSpec;

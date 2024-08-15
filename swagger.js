const swaggerJsdoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');
require('dotenv').config();

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Menu Management API',
      version: '1.0.0',
      description: 'API documentation for the Menu Management system',
    },
    servers: [
      {
        url: `${process.env.HOST_URL}`,
      },
    ],
  },
  apis: ['./routes/*.js'], // Path to the API routes to document
};

const swaggerSpec = swaggerJsdoc(options);

function swaggerDocs(app, port) {
  // Swagger Page
  app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

  // Documentation in JSON format
  app.get('/api-docs.json', (req, res) => {
    res.setHeader('Content-Type', 'application/json');
    res.send(swaggerSpec);
  });

  console.log(`Swagger docs available at ${process.env.HOST_URL}/api-docs`);
}

module.exports = swaggerDocs;

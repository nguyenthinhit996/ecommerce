const swaggerJsDoc = require("swagger-jsdoc");
const swaggerUi = require("swagger-ui-express");

// Swagger configuration options
const swaggerOptions = {
  swaggerDefinition: {
    openapi: "3.0.0",
    info: {
      title: "Commerce Backend API",
      version: "1.0.0",
      description: "API documentation for the commerce backend",
      contact: {
        name: "Edip",
      },
      servers: [
        {
          url: "http://localhost:5000",
        },
      ],
    },
    components: {
      securitySchemes: {
        bearerAuth: {
          type: "http",
          scheme: "bearer",
          bearerFormat: "JWT",
        },
      },
      schemas: {
        Product: {
          type: "object",
          properties: {
            id: {
              type: "integer",
              description: "Product ID",
            },
            name: {
              type: "string",
              description: "Product name",
            },
            price: {
              type: "number",
              description: "Product price",
            },
            description: {
              type: "string",
              description: "Product description",
            },
            category: {
              type: "string",
              description: "Product category",
            },
            stock: {
              type: "integer",
              description: "Stock quantity",
            },
          },
        },
        Staff: {
          type: "object",
          properties: {
            id: {
              type: "integer",
              description: "Staff ID",
            },
            NAME: {
              type: "string",
              description: "Staff name",
            },
            MAIL: {
              type: "string",
              description: "Staff email",
            },
            PHONE: {
              type: "string",
              description: "Staff phone number",
            },
            COUNTRY: {
              type: "string",
              description: "Staff country",
            },
            DESCRIPTION: {
              type: "string",
              description: "Staff description",
            },
            ADDRESS: {
              type: "string",
              description: "Staff address",
            },
            DATE_OF_BIRTH: {
              type: "string",
              format: "date",
              description: "Staff date of birth",
            },
            COMPANY_NAME: {
              type: "string",
              description: "Staff company name",
            },
            CONTACT_PERSON: {
              type: "string",
              description: "Staff contact person",
            },
            URL_WEBSITE: {
              type: "string",
              description: "Staff website URL",
            },
            PROVINCE: {
              type: "string",
              description: "Staff province",
            },
            CITY: {
              type: "string",
              description: "Staff city",
            },
            POSTAL_COST: {
              type: "number",
              description: "Postal cost for staff",
            },
            ID_DEPARTMENT_INVENTORY: {
              type: "integer",
              description: "Staff department inventory ID",
            },
            USER_NAME: {
              type: "string",
              description: "Staff username",
            },
            PASSWORD: {
              type: "string",
              description: "Staff password",
            },
            LAST_LOGIN: {
              type: "string",
              format: "date-time",
              description: "Last login date and time",
            },
            LAST_PASSWORD_CHANGE: {
              type: "string",
              format: "date-time",
              description: "Last password change date and time",
            },
          },
        },
      },
    },
    security: [
      {
        bearerAuth: [],
      },
    ],
  },
  apis: ["*.js", "./routes/*.js"], // Path to the API docs
};

// Initialize Swagger
const swaggerDocs = swaggerJsDoc(swaggerOptions);

module.exports = { swaggerUi, swaggerDocs };

const { createLogger, format, transports } = require("winston");
const { combine, timestamp, printf, colorize } = format;

// Custom log format
const customFormat = printf(({ level, message, timestamp }) => {
  return `${timestamp} ${level}: ${message}`;
});

// Create the logger instance
const logger = createLogger({
  level: "info", // Log levels (error, warn, info, http, verbose, debug, silly)
  format: combine(
    timestamp({ format: "YYYY-MM-DD HH:mm:ss" }), // Add timestamps
    colorize(), // Colorize output in the console
    customFormat // Use the custom log format
  ),
  transports: [
    new transports.Console(), // Log to console
    new transports.File({ filename: "logs/combined.log" }), // Log to file
    new transports.File({ filename: "logs/error.log", level: "error" }), // Log errors separately
  ],
});

module.exports = logger;

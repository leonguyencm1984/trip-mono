import winston from 'winston';
import 'winston-logstash';

const logger = winston.createLogger({
  level: 'info',
  format: winston.format.combine(
    winston.format.timestamp(),
    winston.format.json()
  ),
  transports: [
    new winston.transports.Console({
      format: winston.format.simple(),
    }),
    new winston.transports.File({
      filename: 'logs/app.log',
      format: winston.format.json()
    }),
  ],
});

export default logger; 
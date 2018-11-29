import Express from 'express';
import logger from 'morgan';
import routes from './server/routes';

/**
 * Define constants
*/
const app = new Express();
const port = process.env.PORT || 3001;

/**
 * Log requests to the console
 */
app.use(logger('dev'));

/**
 * Setup middleware for express parser
 */
app.use(Express.json());
app.use(Express.urlencoded({ extended: false }));

routes(app);
/**
 * Catch non-existent routes
 */
app.all('*', (req, res) => res.status(404).json({
  success: false,
  message: 'The URL you are trying to access does not exist. Please enter a valid url',
}));

/**
 * Listen to the app port
 */
app.listen(port);

export default app;

const routes = (app) => {
  app.get('/', (request, response) => response.status(200).send({
	  success: true,
	  message: 'Welcome to Problem2Ideas',
	}));
};

export default routes;

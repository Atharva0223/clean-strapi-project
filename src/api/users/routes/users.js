module.exports = {
  routes: [
    {
     method: 'GET',
     path: '/users',
     handler: 'users.exampleAction',
     config: {
       policies: [],
       middlewares: [],
     },
    },
  ],
};

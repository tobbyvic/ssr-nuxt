export default ({ app }) => {
  // Every time the route changes (fired on initialization too)
  app.router.afterEach((to, from) => {
    //do something to validate
    console.log("afterEach");
  });
};

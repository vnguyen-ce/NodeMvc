var System =  require('./System'); 
System.extend(require('./System/Web')); 
System.extend(require('./System/Web/Routing'));

var router = new System.Web.Routing.Router();

var MvcApplication = {	
	HandleRequest: function(request, response) {
		var route = router.ResolveRequest(request);
		if (route == null) {
			// process by a FileSystemHandler;
			console.log('Will be implemented by a FileSystemHandler');
		}
		var handler = route.RouteHandler;
		if (handler == null){
			handler = new System.Web.SimpleHttpHandler(); 
		}
		
		handler.ProcessRequest(new System.Web.HttpContext(request, response));
	},
	
	RegisterRoutes: function(routeCollection){
		routeCollection.Ignore('/favicon.ico');
		routeCollection.AddByName('Default Route', 
		{
			Url: '/{controller}/{action}/{id}',
			Defaults: {
				Controller: 'Home', 
				Action: 'Index'
			}
		});
		console.log(routeCollection);
	}	
};

MvcApplication.RegisterRoutes(System.Web.Routing.RouteTable.Routes);

module.exports = MvcApplication;
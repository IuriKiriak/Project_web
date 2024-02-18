const routeList = document.getElementById("route-list"); 
 
const routes = []; 
 
const getRoutes = async () => { 
  await fetch("http://localhost:8080/routes") 
    .then((response) => response.json()) 
    .then((data) => { 
      routes.push(...data); 
      showRoutes(); 
    }) 
    .catch((error) => console.error(error)); 
}; 
 
const showRoutes = () => { 
  console.log(routes); 
  routeList.innerHTML = ""; 
  routes.forEach((route) => { 
    const oneRoute = document.createElement("div"); 
    oneRoute.classList.add("one-route"); 
    const routeName = document.createElement("p"); 
    routeName.classList.add("route-name"); 
    routeName.innerHTML = route.name; 
    const routeDescription = document.createElement("p"); 
    routeDescription.classList.add("route-desc"); 
    routeDescription.innerHTML = route.description; 
    const routeMainObject = document.createElement("p"); 
    routeMainObject.classList.add("route-object"); 
 
    routeMainObject.innerHTML = route.mainObject; 
 
    oneRoute.append(routeName, routeDescription, routeMainObject); 
    routeList.append(oneRoute); 
  }); 
}; 
 
getRoutes();

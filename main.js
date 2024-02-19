const routeList = document.getElementById("route-list"); 
const startTrip = document.getElementById("start-trip"); 
const tripModal = document.getElementById("trip-modal"); 
const tripModalCon = document.querySelector(".trip-modal-container"); 
const closeTripModal = document.getElementById('close-trip-modal'); 
 
const routes = []; 
 
const getRoutes = () => { 
  fetch("http://exam-2023-1-api.std-900.ist.mospolytech.ru/api/routes", { 
    headers: { 
      Authorization: "30068957-8799-402b-bbcd-03a6a76f8f0a", 
    }, 
  }) 
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
 
startTrip.onclick = (e) => { 
  e.preventDefault(); 
  tripModal.classList.remove("hide"); 
  tripModalCon.classList.remove('hide'); 
}; 
 
closeTripModal.onclick = (e) => { 
  e.preventDefault(); 
  tripModal.classList.add("hide"); 
  tripModalCon.classList.add('hide'); 
} 
 
getRoutes();

const routeList = document.getElementById("route-list");
const guidesList = document.getElementById("guides-list");
const startTrip = document.getElementById("start-trip");
const tripModal = document.getElementById("trip-modal");
const tripModalCon = document.querySelector(".trip-modal-container");
const closeTripModal = document.getElementById("close-trip-modal");

const routes = [];
const guides = [];

const getRoutes = async () => {
  await fetch(
    "http://exam-2023-1-api.std-900.ist.mospolytech.ru/api/routes?api_key=30068957-8799-402b-bbcd-03a6a76f8f0a"
  )
    .then((response) => response.json())
    .then((data) => {
      routes.push(...data);
      showRoutes();
    })
    .catch((error) => console.error(error));
};

const createTable = (items) => {
  const classes = ["col", "border", "border-dark", "route-name"];

  const updatedItems = items.map((item) => {
    classes.forEach((className) => item.classList.add(className));
    return item;
  });

  console.log(updatedItems);
  return updatedItems;
};

const showRoutes = () => {
  console.log(routes);
  routeList.innerHTML = "";
  routes.forEach((route) => {
    const oneRoute = document.createElement("div");
    oneRoute.classList.add("row");
    oneRoute.classList.add("one-route");
    oneRoute.classList.add("p-0");

    const routeName = document.createElement("p");  

    routeName.innerHTML = route.name;
    const routeDescription = document.createElement("p");

    routeDescription.innerHTML = route.description;
    const routeMainObject = document.createElement("p");


    routeMainObject.innerHTML = route.mainObject;

    oneRoute.append(routeName, routeDescription, routeMainObject);
    createTable([routeName, routeDescription, routeMainObject])
    routeList.append(oneRoute);
  });
};

startTrip.onclick = (e) => {
  e.preventDefault();
  tripModal.classList.remove("hide");
  tripModalCon.classList.remove("hide");
};

closeTripModal.onclick = (e) => {
  e.preventDefault();
  tripModal.classList.add("hide");
  tripModalCon.classList.add("hide");
};

const getGuides = async () => {
  await fetch(
    `http://exam-2023-1-api.std-900.ist.mospolytech.ru/api/routes/2/guides?api_key=30068957-8799-402b-bbcd-03a6a76f8f0a`
  )
    .then((response) => response.json())
    .then((data) => {
      guides.push(...data);
      showGuides();
      console.log(guides);
    })
    .catch((error) => console.error(error));
};

const showGuides = () => {
  routeList.innerHTML = "";
  guides.forEach((guide) => {
    const oneGuide = document.createElement("div");
    oneGuide.classList.add("one-guide");
    oneGuide.classList.add("row");
    oneGuide.classList.add("p-0");


    const person = document.createElement("img");
    person.src = "./img/профиль.png"
    person.style.height = "150px"


    const guideName = document.createElement("p");
    guideName.innerHTML = guide.name;

    const guideLang = document.createElement("p");
    guideLang.innerHTML = guide.language;

    const workExp = document.createElement("p");
    workExp.innerHTML = guide.workExperience;

    const pricePerHour = document.createElement("p");
    pricePerHour.innerHTML = `${guide.pricePerHour} рублей`;

    const emptyBlock2 = document.createElement("button");
    emptyBlock2.innerHTML = "выбрать";
    emptyBlock2.classList.add("olive-background");

    oneGuide.append(
      person,
      guideName,
      guideLang,
      workExp,
      pricePerHour,
      emptyBlock2
    );
    createTable([
      person,
      guideName,
      guideLang,
      workExp,
      pricePerHour,
      emptyBlock2,
    ]);
    guidesList.append(oneGuide);
  });
};

getGuides();
getRoutes();

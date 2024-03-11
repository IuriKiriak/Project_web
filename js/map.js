ymaps.ready(function () {
    // HTML-элемент.
    const map = new ymaps.Map('map', {
        center: [55.70427752846631,37.64569001835079],
        zoom: 17,
        // Карта будет создана без
        // элементов управления.
        controls: []
      });
    
  console.log("карты загружены")
  });
$(document).ready(function() {
    loadCities();
    getWeather();
    $(".alert").animate({ opacity: 0.01 });
  });
  const apikey = "ed78a20135f89bda9f0c9c48c7397ad2";
  const forcastApiKey = "5d70a9cdc20709a973659b4d0c325acb";
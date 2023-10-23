// Establece la fecha de destino (formato: año, mes, día, hora, minuto, segundo)
var countDownDate = new Date("2023-09-29T23:59:59").getTime();

// Actualiza el contador cada segundo
var x = setInterval(function() {

  // Obtiene la fecha actual
  var now = new Date().getTime();

  // Calcula la diferencia en segundos
  var distance = (countDownDate - now) / 1000;

  // Calcula los días, horas, minutos y segundos restantes
  var days = Math.floor(distance / (60 * 60 * 24));
  var hours = Math.floor((distance % (60 * 60 * 24)) / (60 * 60));
  var minutes = Math.floor((distance % (60 * 60)) / 60);
  var seconds = Math.floor(distance % 60);

  // Actualiza los elementos HTML correspondientes
  document.getElementById("days").innerHTML = days;
  document.getElementById("hours").innerHTML = hours;
  document.getElementById("minutes").innerHTML = minutes;
  document.getElementById("seconds").innerHTML = seconds;

  // Detiene el contador cuando llega a cero
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("countdown").innerHTML = "EXPIRADO";
  }
}, 1000);
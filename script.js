document.addEventListener("DOMContentLoaded", function () {
  // Function to get the value of a cookie by name
  function getCookie(name) {
    let cookieArray = document.cookie.split("; ");
    let cookie = cookieArray.find((row) => row.startsWith(name + "="));
    return cookie ? cookie.split("=")[1] : null;
  }

  // Function to set a cookie
  function setCookie(name, value, daysToExpire) {
    let date = new Date();
    date.setTime(date.getTime() + daysToExpire * 24 * 60 * 60 * 1000);
    document.cookie =
      name + "=" + value + ";expires=" + date.toUTCString() + ";path=/";
  }

  // Get the value of the 'count' cookie
  let count = getCookie("count");

  if (count) {
    count = parseInt(count) + 1;
  } else {
    count = 1;
  }

  setCookie("count", count, 365);

  // Display the count on the webpage
  document.body.innerHTML = <h1>Page visit count: ${count}</h1>;
});
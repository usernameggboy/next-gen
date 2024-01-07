// Sử dụng JavaScript trơn
var userIcon = document.querySelector(".header-icon_item");
var userSubMenu = document.querySelector(".user-submenu");

userIcon.addEventListener("click", function () {
  userSubMenu.style.display =
    userSubMenu.style.display === "block" ? "none" : "block";
});

// Sử dụng jQuery
$(".header-icon_item").click(function () {
  $(".user-submenu").toggle();
});
const findMyState = () => {
  const status = document.querySelector(".status");
  const success = (position) => {
    console.log(position);
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;
    console.log(latitude + " " + longitude);
    const geoApiUrl =
      "https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${latitude}&longitude=${longitude}&localityLanguage=en";
    fetch(geoApiUrl)
      .then((res) => res.json())
      .then((data) => {
        status.textContent = `${data.principalSubdivision}, ${data.locality}, ${data.countryName}`;
        // console.log(data);
      });
  };
  const error = () => {
    status.textContent = "unable to retrieve your location";
  };
  navigator.geolocation.getCurrentPosition(success, error);
};

document.querySelector(".find-state").addEventListener("click", findMyState);


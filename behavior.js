document.addEventListener("DOMContentLoaded", function (event) {
  var thumbnailElement = document.getElementById("smart_thumbnail");
  thumbnailElement.addEventListener("click", function () {
    thumbnailElement.classList.toggle("small");
    //  or
    //      if (thumbnailElement.className == "small") {
    //        thumbnailElement.classList.remove("small");
    //      } else {
    //        thumbnailElement.classList.add("small");
    //      }
  });
});

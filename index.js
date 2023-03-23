document.addEventListener("DOMContentLoaded", function() {
    var collapsibles = document.querySelectorAll(".collapsible");
  
    collapsibles.forEach(function(collapsible) {
      var header = collapsible.querySelector(".collapsible-header");
      var content = collapsible.querySelector(".collapsible-content");
  
      header.addEventListener("click", function() {
        this.classList.toggle("active");
        collapsible.classList.toggle("active");
        var container = collapsible.closest(".collapsible-container");
        container.classList.toggle("active");
      });
    });
  });
  
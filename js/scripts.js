$(document).ready(function() {
  $("#tracker").submit(function() {
    var sidea = parseInt($("input#sidea").val());
    var sideb = parseInt($("input#sideb").val());
    var sidec = parseInt($("input#sidec").val());

    if (sidea + sideb <= sidec || sideb + sidec <= sidea || sidec + sidea <= sideb) {
      alert("This is not a triangle")
    } else {

    //this determines what type of triangle the sides would make

      if (sidea === sideb && sideb === sidec) {
        alert("This would make an equilateral triangle")
      } else if (sidea === sideb || sideb === sidec || sidec === sidea) {
        alert("This is isoscosles")
      } else {
        alert("This is scalene")
      }
    }


  });
});


var academicPrograms = function(){
  $.getJSON("/training/lei/academic-programs.json", function(response){
    var $list =$("<ul>");
    response["academic-programs"].forEach(function(program){
      var $programName = $("<li>");
      $programName.text(program["program-name"]);
      $list.append($programName);
    });
    $("#programs").append($list);
  });
};
$(document).ready(academicPrograms);
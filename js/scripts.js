$(document).ready(function() {
  $("form#questionaire").submit(function(event) {
    event.preventDefault();

var total = 0;

    $("input:checkbox[name=warningSigns]:checked").each(function() {
      var arrayWarningSigns = parseInt($(this).val());
      total += parseInt($(this).val());
    });
    console.log(total);

    $("input:checkbox[name=healthSymptoms]:checked").each(function() {
      var arrayHealthSymptoms = parseInt($(this).val());
      total += parseInt($(this).val());
    });
    console.log(total);

    $("input:checkbox[name=copingMethods]:checked").each(function() {
      var arrayCopingMethods = parseInt($(this).val());
      total -= parseInt($(this).val());
    });
    console.log(total);

    $("#doingGreat").hide();
    $("#doingOK").hide();
    $("#seekHelp").hide();


    if (total < 5) {
      $("#doingGreat").show();
    } else if (total >= 5 && total <= 8) {
      $("#doingOK").show();
    } else if (total > 8) {
      $("#seekHelp").show();
    } else {
      console.log("Help, I'm Broken!")
    }



  });

});

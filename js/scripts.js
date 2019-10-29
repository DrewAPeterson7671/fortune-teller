$(document).ready(function() {
  $("form#questionaire").submit(function(event) {
    event.preventDefault();

    var combined = [];

    $("input:checkbox[name=warningSigns]:checked").each(function() {
       combined.push($(this).val());
    });


    $("input:checkbox[name=healthSymptoms]:checked").each(function() {
       combined.push($(this).val());
    });


    $("input:checkbox[name=copingMethods]:checked").each(function() {
       combined.push($(this).val());
    });
    console.log(combined);


    $("#doingGreat").hide();
    $("#doingOK").hide();
    $("#seekHelp").hide();

    if (combined.includes("cat") === true) {
      $("#doingGreat").show();
    } else {
      $("#seekHelp").show();
    }












    // if (total < 5) {
    //   $("#doingGreat").show();
    // } else if (total >= 5 && total <= 8) {
    //   $("#doingOK").show();
    // } else if (total > 8) {
    //   $("#seekHelp").show();
    // } else {
    //   console.log("Help, I'm Broken!")
    // }



  });

});

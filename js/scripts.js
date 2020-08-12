$(document).ready(function() {
  $("#formOne").submit(function(event) {
    const person1Input = $("input#person1").val();
    const person2Input = $("input#person2").val();

    $(".person1").text(person1Input);
    $(".person2").text(person2Input);

    $("#letter").show();

    event.preventDefault();
  });
});
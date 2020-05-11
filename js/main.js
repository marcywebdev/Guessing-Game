const pics = ["alex.png", "anita.png", "peter.png", "eric.png", "charles.png", "sam.png", "joe.png", "maria.png", "philip.png", "richard.png", "susan.png", "max.png", "alfred.png", "robert.png", "frans.png", "claire.png", "paul.png", "bill.png", "david.png", "bernard.png", "george.png", "tom.png", "herman.png", "anne.png"];

function myCharacter() {
  var myPic = Math.floor(Math.random() * pics.length);

  $("#me").html('<img src="images/' + pics[myPic] + ' ">');

  var name = pics[myPic].substr(0, pics[myPic].lastIndexOf("."))
  name = name.charAt(0).toUpperCase() + name.slice(1);
  $("#name").html('You are ' + name);
}

myCharacter();

$('.card').click(function () {
  if ($(this).hasClass('out'))
    $(this).removeClass('out').addClass('in');
  else
    $(this).addClass('out').removeClass('in');
});
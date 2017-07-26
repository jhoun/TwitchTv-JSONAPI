$.ajax({
  url: 'https://wind-bow.gomix.me/twitch-api/streams/freecodecamp?callback=?',
  dataType: "jsonp",
  success:function(result){
    console.log(result)
  }
})
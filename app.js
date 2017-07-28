var users = ["ESL_SC2", "OgamingSC2", "cretetion", "freecodecamp", "storbeck", "habathcx", "RobotCaleb", "noobs2ninjas"];
var channel = "<ul>";
var status = "<ul>";

users.forEach(function(users){
  $.ajax({
    url: `https://wind-bow.gomix.me/twitch-api/streams/${users}?callback=?`,
    dataType: "jsonp",
    success:function(result){
      console.log('result.stream: ', result.stream);
      if (result.stream === null || result.stream === undefined){
        status += `<li>Offline</li>`;
      } else {
        status += `<li>${result.stream.channel.status}</li>`;
      }
      channel += `<li>${users}</li>`;
      $(".channel_data").html(channel + "</ul>");
      $(".status_data").html(status + "</ul>");
    }
  })
})

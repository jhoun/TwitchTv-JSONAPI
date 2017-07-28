var users = ["ESL_SC2", "OgamingSC2", "cretetion", "freecodecamp", "storbeck", "habathcx", "RobotCaleb", "noobs2ninjas"];
var channel = "<ul>";
var status = "<ul>";

users.forEach(function(users){
  $.ajax({
    url: `https://wind-bow.gomix.me/twitch-api/streams/${users}?callback=?`,
    dataType: "jsonp",
    success:function(result){
      if (result.stream === null || result.stream === undefined){
        status += `<li>Offline</li>`;
      } else {
        status += `<li>${result.stream.channel.status}</li>`;
      }

      $(".status_data").html(status + "</ul>");
    }
  })
  $.ajax({
    url: `https://wind-bow.gomix.me/twitch-api/channels/${users}?callback=?`,
    dataType: "jsonp",
    success:function(result){
      console.log('result.stream: ', result);
      channel += `<a href='${result.url}'><li>${result.name}</li></a>`;
      console.log('channel: ', channel);
      $(".channel_data").html(channel + "</ul>");
    }
  })
})

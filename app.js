var users = ["ESL_SC2", "OgamingSC2", "cretetion", "freecodecamp", "storbeck", "habathcx", "RobotCaleb", "noobs2ninjas"];

users.forEach(function(users){
  $.ajax({
    url: `https://wind-bow.gomix.me/twitch-api/streams/${users}?callback=?`,
    dataType: "jsonp",
    success:function(result){
      var status;
      if (result.stream === null || result.stream === undefined){
        status = `Offline`;
      } else {
        status = result.stream.channel.status;
      }
      $.ajax({
        url: `https://wind-bow.gomix.me/twitch-api/channels/${users}?callback=?`,
        dataType: "jsonp",
        success:function(result){
          var logo = result.logo !== null ? result.logo : 'http://i.imgur.com/bdrXyHv.png';
          var html = `<div class="channel_container">
                    <div class="inner image"><img src=${logo}></div>
                    <div class="inner name"><a href='${result.url}'><div>${result.name}</div></a></div>
                    <div class="inner status">${status}</div>
                    </div>`;
          $("#display").append(html);
        }
      })
    }
  })

})
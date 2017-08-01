var users = ["ESL_SC2", "OgamingSC2", "cretetion", "freecodecamp", "storbeck", "habathcx", "RobotCaleb", "noobs2ninjas", "brunofin", "comster404" ];

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
          status = result.status !== 404 ? status : 'Account Closed';
          var name = result.name !== undefined ? result.name : users;
          var url = result.status !== 404 ? result.url : "#";
          var logo = result.logo !== null && result.status !== 404 ? result.logo : 'http://i.imgur.com/bdrXyHv.png';
          var html = `<div class="channel_container">
                    <div class="inner image"><img src=${logo}></div>
                    <div class="inner name"><a href='${url}'><div>${name}</div></a></div>
                    <div class="inner status">${status}</div>
                    </div>`;
          $("#display").append(html);
        }
      })
    }
  })

})
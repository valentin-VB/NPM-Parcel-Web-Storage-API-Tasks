const iframe=document.querySelector("iframe"),player=new Vimeo.Player(iframe);player.on("play",(function(){console.log("played the video!")})),player.getVideoTitle().then((function(e){console.log("title:",e)}));
//# sourceMappingURL=02-video.724046a2.js.map

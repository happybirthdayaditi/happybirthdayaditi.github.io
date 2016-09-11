


/*-------------------------------------
            JavaScript Code
--------------------------------------*/

a = 0;
function slide()
{
    
    var img = document.getElementById('profile');
    
img.src = "assets/images/face"+a+".jpg";


if (a < 11)
{
a++;
}
else
{
a = 0;
}
setTimeout("slide()" , 4000);
}
/*--------------------------------------
                jQuery code
----------------------------------------*/
$(function(){

    
    /**-----------------------------------
                showing video pane
    -------------------------------------*/
   
    
    
    $('#video-pane').on('show.bs.modal', function (event) {
  var button = $(event.relatedTarget) // Button that triggered the modal
  var recipient = button.data('name') // Extract info from data-* attributes
  var source = button.data('whatever')
  var path = button.data("path")
  var modal = $(this)
  modal.find('.modal-title').text('Message from ' + recipient)
  
  if(source === "no"){
       $("#player").hide();
    $(".no-video").hide();
      $(".no-video").show().addClass("animated bounce")
  }
    else{
         $("#player").hide();
    $(".no-video").hide();
        $("#player").show().addClass("animated zoomIn")
        modal.find('.modal-body iframe').attr("src",source)
    }
        
    if(path === "no"){
        $(".no-image").hide();
        $(".moments").hide();
        $(".no-image").show().addClass("animated pulse");
        
    }
        else{
            $(".no-image").hide();
            $(".moments").hide();
            $(".moments").empty();
            $(".moments").show();
            $(".moments").append("<div class='col-md-6'><img class='img-rounded' data-action='zoom'  src='assets/images/moments/"+path+"/1.jpg'><img class='img-rounded'  src='assets/images/moments/"+path+"/2.jpg' data-action='zoom'></div><div class='col-md-6'><img class='img-rounded'  src='assets/images/moments/"+path+"/3.jpg' data-action='zoom'><img class='img-rounded' src='assets/images/moments/"+path+"/4.jpg' data-action='zoom'></div>")
        }
  
  
})
    
    // 2. This code loads the IFrame Player API code asynchronously.
      var tag = document.createElement('script');

      tag.src = "https://www.youtube.com/iframe_api";
      var firstScriptTag = document.getElementsByTagName('script')[0];
      firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

      // 3. This function creates an <iframe> (and YouTube player)
      //    after the API code downloads.
      var player;
      function onYouTubeIframeAPIReady() {
        player = new YT.Player('player', {
          height: '390',
          width: '640',
          videoId: 'M7lc1UVf-VE',
          events: {
            'onReady': onPlayerReady,
            'onStateChange': onPlayerStateChange
          }
        });
      }

      // 4. The API will call this function when the video player is ready.
      function onPlayerReady(event) {
        event.target.playVideo();
      }

      // 5. The API calls this function when the player's state changes.
      //    The function indicates that when playing a video (state=1),
      //    the player should play for six seconds and then stop.
      var done = false;
      function onPlayerStateChange(event) {
        if (event.data == YT.PlayerState.PLAYING && !done) {
          setTimeout(stopVideo, 6000);
          done = true;
        }
      }
      function stopVideo() {
        player.stopVideo();
      }
    
    
    $('#video-pane').on('hidden.bs.modal', function () {
    $("#player").attr("src","");
})
})
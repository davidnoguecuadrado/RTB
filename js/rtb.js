$( document ).ready(function() {
    window.document.onkeydown = function (e) {
        if (!e) {
            e = event;
        }
        if (e.keyCode == 27) {
            lightbox_close();
        }
    }

    
    $(".lightbox_open1").click(function(){
        window.scrollTo(0, 0);
        document.getElementById('light1').style.display = 'block';
        document.getElementById('fade1').style.display = 'block';
    })

    $(".lightbox_close1").click(function(){
        document.getElementById('light1').style.display = 'none';
        document.getElementById('fade1').style.display = 'none'; 
     })

     $(".lightbox_open2").click(function(){
        window.scrollTo(0, 0);
        document.getElementById('light2').style.display = 'block';
        document.getElementById('fade2').style.display = 'block';
    })
     $(".lightbox_close2").click(function(){
        document.getElementById('light2').style.display = 'none';
        document.getElementById('fade2').style.display = 'none'; 
     })

     $(".lightbox_open3").click(function(){
        window.scrollTo(0, 0);
        document.getElementById('light3').style.display = 'block';
        document.getElementById('fade3').style.display = 'block';
    })
     $(".lightbox_close3").click(function(){
        document.getElementById('light3').style.display = 'none';
        document.getElementById('fade3').style.display = 'none'; 
     })

     $(".lightbox_open4").click(function(){
        window.scrollTo(0, 0);
        document.getElementById('light4').style.display = 'block';
        document.getElementById('fade4').style.display = 'block';
    })
     $(".lightbox_close4").click(function(){
        document.getElementById('light4').style.display = 'none';
        document.getElementById('fade4').style.display = 'none'; 
     })

});
   

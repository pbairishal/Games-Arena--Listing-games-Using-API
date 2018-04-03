$(document).ready(function() {
    //----------------------------------------READY ------------------------
     var settings = {
                         
                          "url":"http://starlord.hackerearth.com/gamesarena",
                          "headers": {
                            "access-control-allow-methods": "GET",
                           "access-control-allow-origin": "*",
                           "server": "cloudflare-nginx"
                            
                             
                                      }
                    }
    
         $.getJSON(settings, function(data) {
             delete data[0];
             
                var html = "";
                    data.forEach(function(val) {
                          html += "<div class='data'>";
                           html += "<h2 style='color:#4A148C;'><span class='fa fa-gamepad'> <strong>" + val.title + "</strong></span></h2>";
                           html += "<strong>Platform</strong>: " + val.platform + "<br>";
                           html += "<strong>Score</strong>: " + val.score + "<br>";
                           html += "<strong>Genre</strong>: " + val.genre + "<br>";
                        var choice=val.editors_choice=='Y'?'YES':'NO';
                           html += "<strong>Editors Choice</strong>: " + choice + "<br>";
                     html += "</div><br>";
                             });
        $(".message").html(html);
            
             
              });
       
    //--------------------------------------------SORTING BY SCORE----------------------
        
   function select() { 
            var select1 = $('#select_id').val();
            
            if(select1 == "low"||"high") {$.getJSON(settings, function(data) {
                delete data[0];
                     var html = "";
                
               data = data.sort(function(a,b) {
                   if(select1=="low"){
  return a.score - b.score;
                   }
                   if(select1=="high"){
  return b.score - a.score;
                   }
});
                
                     data.forEach(function(val) {
                
                      html += "<div class='data'>";
                           html += "<h2 style='color:#4A148C;'><span class='fa fa-gamepad'> <strong>" + val.title + "</strong></span></h2>";
                           html += "<strong>Platform</strong>: " + val.platform + "<br>";
                           html += "<strong>Score</strong>: " + val.score + "<br>";
                           html += "<strong>Genre</strong>: " + val.genre + "<br>";
                          var choice=val.editors_choice=='Y'?'YES':'NO';
                           html += "<strong>Editors Choice</strong>: " + choice + "<br>";
                     html += "</div><br>";
                     });

        $(".message").html(html);

      });
                     
   }
      
   }
    
   //-----------------------------------------------SEARCH BY TEXT---------------------------------------------- 
    function searchText() { 
           var settings = {
                        
                          "url":"http://starlord.hackerearth.com/gamesarena",
                          "headers": {
                            "access-control-allow-methods": "GET",
                            "access-control-allow-origin": "*",
                            server: "cloudflare-nginx"
                             
                          }
           }
            
     
            var searchField = $('#txtSearch').val();
           $.getJSON(settings, function(data) {
               delete data[0];
             
                var html = "";
                data = data.filter(function(val) {
                    var lowcase1=val.title.toLowerCase();
                    var lowcase2=searchField.toLowerCase();
                   if(~lowcase1.indexOf(lowcase2)){
       return val.title;
     }
});
                    
                     data.forEach(function(val) {
                           
                
                      html += "<div class='data'>";
                           html += "<h2 style='color:#4A148C;'><span class='fa fa-gamepad'> <strong>" + val.title + "</strong></span></h2>";
                           html += "<strong>Platform</strong>: " + val.platform + "<br>";
                           html += "<strong>Score</strong>: " + val.score + "<br>";
                           html += "<strong>Genre</strong>: " + val.genre + "<br>";
                           var choice=val.editors_choice=='Y'?'YES':'NO';
                           html += "<strong>Editors Choice</strong>: " + choice + "<br>";
                         html += "</div><br>";
                     });
                     

        $(".message").html(html); 
    
      });
    
    }
 //-------------------------------------------------SORT BY PLATFORM-------------------------------------
     
   function sort() { 
            var select2 = $('#select_id2').val();
       
     if(select2=="PlayStation 3"||"iPad"||"iPhone"||"Xbox 360"||"Macintosh"||"PC"||"Nintendo DS"||"Android"||"PlayStation Vita"){ 
         var html = "";
       $.getJSON(settings, function(data) {
           delete data[0];
           
                data = data.filter(function(val) {

       return select2==val.platform;  
     
});
                    
                     data.forEach(function(val) {
                           
                
                      html += "<div class='data'>";
                           html += "<h2 style='color:#4A148C;'><span class='fa fa-gamepad'> <strong>" + val.title + "</strong></span></h2>";
                           html += "<strong>Platform</strong>: " + val.platform + "<br>";
                           html += "<strong>Score</strong>: " + val.score + "<br>";
                           html += "<strong>Genre</strong>: " + val.genre + "<br>";
                           var choice=val.editors_choice=='Y'?'YES':'NO';
                           html += "<strong>Editors Choice</strong>: " + choice + "<br>";
                         html += "</div><br>";
                     });
                     

        $(".message").html(html); 
    
      }); 
   }
   }
    
//-------------------------------------------------------------------------------------------------------
         $("#getMessage1").on("click", function(){ 
             select();
         });
          $("#getMessage").on("click", function(){ 
             searchText();
         });
         $("#getMessage2").on("click", function(){ 
             sort();
         });
           
         
     });                   

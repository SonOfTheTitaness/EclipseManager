var inBetween = function(strX, str1, str2)
			{
      var nere = strX.split(str1)[1];
        nere = nere.split(str2)[0];
        return nere;
			};


var getText = function(strX)
	{
  var xmlHttp = null;
	xmlHttp = new XMLHttpRequest();
	xmlHttp.open( "GET", strX, false );
	xmlHttp.send( null );
      
  return xmlHttp.responseText;
  };


var onlineQuery = function(number)
	{
  var strX= "https://www.deviantart.com/global/difi/?c%5B%5D=%22User%22%2C%22getStatus%22%2C%5B%5D&c%5B%5D=%22Friends%22%2C%22getFriendsMenu%22%2C%5B%221%22%2C%22";
  strX+= number; 
  strX+= "%22%5D&t=json";
	return strX;
  };    


if (document.URL.indexOf("/feedback") != -1)
  {  
  var target = document.getElementsByClassName("_2ua91")[0];
    
   target.onclick = function() 
    		{
        var friends = [];

        for(var a = 0; a < 3; a++)
					{
          var ee =  getText(onlineQuery(a));
          var objeto = JSON.parse(ee);
          friends = friends.concat(objeto.DiFi.response.calls[1].response.content.friends);
          }
          
        var strW= "<table style='font-size:11px;'>";
          var tdX = "<td align='left' style='background-color:#e4eae3;' width='125'><img src='https://e.deviantart.net/emoticons/b/bulletred.gif?USERNAMENUMBER_'/> <a href='https://www.deviantart.com/USERNAMENUMBER_'>USERNAMENUMBER_<a/></td><td align='left' style='background-color:#e5ebe4; color:#334433;' width='135'>&nbsp;&nbsp;LASTVISITNUMBER_</td>";
        var ii = 0;

        for(var y = 0; y < 60; y++)
					{
          strW += "<tr>";
          for(var x = 0; x < 4; x++)
          		{
 							strW += tdX.replace(/NUMBER/g, ii);
							ii++;
              }
          strW += "</tr>";
          }

        strW += "</table>";
          
        var spot = 0;
        
				for(var i = 0; i < friends.length; i++)
					{ 
          if ((friends[i].lastvisit == "Online")||(friends[i].lastvisit == "Idle"))
          		{
                
							strW = strW.replace("red.gif?USERNAME" + spot + "_","green.gif").replace("USERNAME" + spot + "_", friends[i].username).replace("USERNAME" + spot + "_", friends[i].username).replace("LASTVISIT" + spot + "_", friends[i].lastvisit);
              spot++;
              }
          };
          

 				for(var i = 0; i < friends.length; i++)
					{ 
          if (!((friends[i].lastvisit == "Online")||(friends[i].lastvisit == "Idle")))
          		{
							strW = strW.replace("red.gif?USERNAME" + spot + "_","red.gif").replace("USERNAME" + spot + "_", friends[i].username).replace("USERNAME" + spot + "_", friends[i].username).replace("LASTVISIT" + spot + "_", friends[i].lastvisit);
              spot++;
              }
          };
          

          
        ii = 0;
          
        for(var y = 0; y < 60; y++)
					{
          for(var x = 0; x < 4; x++)
          		{
 							strW = strW.replace("src='https://e.deviantart.net/emoticons/b/bulletred.gif?USERNAME" + ii + "_'", "").replace("USERNAME" + ii + "_", "").replace("USERNAME" + ii + "_", "").replace("LASTVISIT" + ii + "_", "");
							ii++;
              }
          }


        strW = strW.replace(/Idle/g, "Online (idle)");   
          
          
        var textTarget = document.getElementsByClassName("_2O6iG")[0];
        
        textTarget.innerHTML = strW;
          
    		};
    
  };



if (document.URL.indexOf("opennew") != -1)
  {
  var target = document.getElementsByClassName("_21iyf")[0];
  target.focus();
    target.click();
    
    
  setTimeout(
    function r()  {
  }, 3000);
    
    
	};




if (document.URL.indexOf("/shop") != -1)
  {  
  var eeuu = document.getElementsByClassName("_2IzNv")[0];
    

   var xmlHttp = null; 
  xmlHttp = new XMLHttpRequest();
	xmlHttp.open( "GET", "https://www.deviantart.com/watching/", false );
	xmlHttp.send( null );
    
  var nere = xmlHttp.responseText;
    
    nere = inBetween(nere, 'id="add-deviant">', '</div>');
    
    for(var ii=1; ii<6; ii++)
      nere = nere.replace('checked="checked"', "").replace('value="1"', 'value="0"');
    
    eeuu.innerHTML = nere;

    
    var userElement = document.getElementById("username");
    
    
    
    userElement.value = inBetween(document.URL, '.com/', '/shop');
    
    
    
  var eX = eeuu.getElementsByClassName("beacon")[0];
   eX.click();
    
    
	  
    
    
    
	};

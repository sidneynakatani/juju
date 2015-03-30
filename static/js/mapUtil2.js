
var infoWindows = []; 

function setMarkers(map, locations, list) {
                         
                          var image = {
                            url: '/static/img/beachflag.png',
                            size: new google.maps.Size(20, 32),
                            origin: new google.maps.Point(0,0),
                            anchor: new google.maps.Point(0, 32)
                          };
                
                          var shape = {
                              coords: [1, 1, 1, 20, 18, 20, 18 , 1],
                              type: 'poly'
                          };
                          for (var i = 0; i < locations.length; i++) {
                            var beach = locations[i];
                            var myLatLng = new google.maps.LatLng(beach[1], beach[2]);
                            var marker = new google.maps.Marker({
                                position: myLatLng,
                                map: map,
                                icon: image,
                                shape: shape,
                                title: beach[0],
                                zIndex: beach[3]
                            });
                            list[i] = marker;
                          }
                        }



function focus(position, isVisible, map){
                             
                            if(isVisible == true){
                                map.setZoom(15);
                                map.setCenter(list[position].getPosition());

                                var infowindow = new google.maps.InfoWindow({
                                                      content: list[position].title, 
                                                      maxWidth: 300
                                                  });
                                for (var i=0;i<infoWindows.length;i++) {
                                          infoWindows[i].close();
                                }
                                infoWindows.push(infowindow); 
                                infowindow.open(map, list[position]);
                            }
                        }

/*
 Function to create side carousel 
*/
function customDataSuccess(data){
          
	 if(data){                             

		for(var i in data["items"]){
                                        
                      var div = document.createElement('div');
                      var text = document.createTextNode(data["items"][i].alt);
                      var img = document.createElement('img');
		      var divImg = document.createElement('div');
                      var divText = document.createElement('div');

                      img.src = data["items"][i].img;
                      img.setAttribute('width', '45%');
                      img.setAttribute('height', '60%');

                      divImg.appendChild(img);
                      divText.appendChild(text);

                      div.appendChild(divText);
                      div.appendChild(divImg);
		      div.setAttribute("align", "center");
		      div.setAttribute("style", "border:3px solid black; margin-left: 50px; margin-right: 50px;");
		      div.setAttribute("id", i);
		      div.addEventListener("click", function() {
                                                focus(this.id, true, map);
		        });
		      $(".teste").append(div);
                 }
          }      
}



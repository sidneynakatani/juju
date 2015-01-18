
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



function createTable(list, map){
				var footer = document.getElementById("footer");
				var divMain = document.createElement('div');
				divMain.className = "owl-carousel";
				
				
        			for (var j = 0; j < list.length; j++) {
						        
					//cell.addEventListener("click", function() {
   					//				focus(this.id, true, map);
					//				});

					
					var divItem = document.createElement('div');
					divItem.className = "item";

                			var cellText = document.createTextNode(list[j].title);
                                        var img = document.createElement('img');
                                        img.src = "/static/img/cat.png";
					//img.src = "http://res.cloudinary.com/nakatani/image/upload/v1419728610/q6ostz0ydvkdh1hk0xzc.png";
                                        img.setAttribute('width', '25%');
					img.setAttribute('height', '30%');

										

					var divImg = document.createElement('div');
					divImg.appendChild(img);

					var divText = document.createElement('div');
					divText.appendChild(cellText);

					//divItem.appendChild(divImg);
					//divItem.appendChild(divText);

					var h = document.createElement("H1")            
					var t = document.createTextNode(j);
					h.appendChild(t);
					divItem.appendChild(h);

					divMain.appendChild(divItem);

        
        			}
			
				
        			footer.appendChild(divMain);
        			
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




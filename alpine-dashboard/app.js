$(document).ready(function() {

//--  Dark Skies API  -----------------------------

            $('#btndataWU').click(function() {
                $.ajax({
                    url: "https://api.darksky.net/forecast/42090cbb28535bd069e4b8fcd9fa3de3/40.2674738,-105.6490131",
                    dataType: "jsonp",
                    success: function(parsed_json) {

                      //--  Current Conditions  ------------
                        var summary = parsed_json['currently']['summary'];
                        console.log("Summary: " + summary);

                        var temp = parsed_json['currently']['temperature'];
                        console.log("temp: " + temp);

                        var apparentTemp = parsed_json['currently']['apparentTemperature'];
                        console.log("apparentTemp: " + apparentTemp);

                        var icon = parsed_json['currently']['icon'];
                        console.log("icon: " + icon);

                        var precipProb = parsed_json['currently']['precipProbability'];
                        console.log("precipProb: " + precipProb);

                        var windSpeed = parsed_json['currently']['windSpeed'];
                        console.log("windSpeed: " + windSpeed);

                        var cloudCover = parsed_json['currently']['cloudCover'];
                        console.log("cloudCover: " + cloudCover);

                        //--  Daily Conditions  ------------------


                        //--  Hourl Conditions  ------------------




                    }
                });

                //--  appending data to data arr.

                //--  appending retrieved weather data to dashboard

//--  Mountain Project API  -----------------------

                $('#btndataMP').click(function() {
                    $.ajax(`https://www.mountainproject.com/data?action=getRoutes&routeIds=105747952,105747924,105747928,105747920,107981267,105880725,108623351,108623359,108623369,108681313,108145559,106394356,105881940,106149104,105881179,105881228,108077143,106462116,106760970,106112237,106658031,106354242,106701932,105814388,105747558,105838757,106212828,105747232,105747518,105747326,105747709,105916234,105928372,111854898,105861528,105914261,107102695,106059718,105803959,106701932,105814388,106309524,105747163,110019183,105747690,110019203,108421296,105747538,106318396,105747222,105747901,105747218,105910979,106588942,108126537,108881536,106134835,105815254,105757315,105820206,105940195,105756871,105880602,105877747,106690503,107011452,107026322,106378992,106071737,105747949,109677098,107116970,105913731,105913744,105747314,105911209,105911243,105911238,105911227,105911178,105911232,105911194,105911163&key=105891963-86cbe74fd860f58dae8c7a7592c3443b `)
                        .then(function(data) {
                            var allRoutes = data.routes;
                            for (var i = 0; i < allRoutes.length; i++) {
                                var route = allRoutes[i]
                                var name = route.name
                                console.log("Name: " + name);
                                var pitches = route.pitches
                                console.log("Pitches: " + pitches);
                                var routeImg = route.imgMed
                                console.log("Images: " + routeImg);
                                var rating = route.rating;
                                console.log("Rating: " + rating);
                                var stars = route.stars;
                                console.log("Stars: " + stars);
                                var location = route.location;
                                var region = location[3];
                                console.log("Region: " + region);
                                var subRegion = location[4];
                                console.log("Sub-region: " + subRegion);
                                var crag = location[5];
                                console.log("Crag: " + crag);
                            }

                        })
                })
            })

            //--  2nd button drop down$(document).ready(function(){
            $(document).ready(function(){
              $('.dropdown-submenu a.test').on("click", function(e){
                $(this).next('ul').toggle();
                e.stopPropagation();
                e.preventDefault();
              });
            });

//-- self envoked function closure  -------------------------
          })

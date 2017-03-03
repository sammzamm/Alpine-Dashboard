$(document).ready(function() {
    var routeId = localStorage.getItem("routeId");

        var routeId = localStorage.getItem("routeId");

        $.ajax(`https://www.mountainproject.com/data?action=getRoutes&routeIds=${routeId}&key=105891963-86cbe74fd860f58dae8c7a7592c3443b`)
            .then(function(data) {
                console.log(data);
                var allRoutes = data.routes;
                for (var i = 0; i < allRoutes.length; i++) {

                    // --  Route Name + Rating  --
                    var route = allRoutes[i]
                    var name = route.name
                    var rating = route.rating;
                    console.log("Name: " + name);
                    $("#routeName").append(name + "  -  " + rating)

                    //  --  Route type  --
                    var type = route.type
                    $('#type').append(type)

                    //  --  Route pitches  --
                    var pitches = route.pitches
                    console.log("Pitches: " + pitches);
                    $("#pitches").append(pitches)

                    //  --  Route Image --
                    var routeImg = route.imgMed
                    $('#routePhoto').prepend('<img src="' + routeImg + '" />')

                    // --  Route stars  --
                    var stars = route.stars;
                    console.log("Stars: " + stars);
                    $("#stars").append(stars)


                    // --  Route location  --
                    var location = route.location;
                    console.log("Location: " + location);
                    $("#location").append(location)

                }
            })
    // });

    //--  Dark Skies API  -----------------------------
    $('#btndataWU').click(function() {
      console.log('button wqs clickeD');
        $.ajax({
            url: "https://api.darksky.net/forecast/42090cbb28535bd069e4b8fcd9fa3de3/40.2674738,-105.6490131",
            dataType: "jsonp",
            success: function(parsed_json) {

                //--  Current Conditions  ------------
                var summaryC = parsed_json['currently']['summary'];
                console.log("currentSummary: " + summaryC);

                var tempC = parsed_json['currently']['temperature'];
                console.log("currentTemp: " + tempC);

                var apparentTempC = parsed_json['currently']['apparentTemperature'];
                console.log("currentApparentTemp: " + apparentTempC);

                var iconC = parsed_json['currently']['icon'];
                console.log("currentIcon: " + iconC);

                var precipProbC = parsed_json['currently']['precipProbability'];
                console.log("currentPrecipProb: " + precipProbC);

                var windSpeedC = parsed_json['currently']['windSpeed'];
                console.log("currentWindSpeed: " + windSpeedC);

                var cloudCoverC = parsed_json['currently']['cloudCover'];
                console.log("currentCloudCover: " + cloudCoverC);

                //--  Daily Conditions  ------------------

                var summaryD =
                parsed_json['daily']['summary'];
                console.log('dailySummarysumaryD: ' + summaryD);

                //--  Hourl Conditions  ------------------


            }
        })
    });

    //--  appending data to data arr.

    //--  appending retrieved weather data to dashboard

    //--  Mountain Project API  -----------------------


    //-- self envoked function closure  -------------------------


//--  all used route ids  -------

//
});

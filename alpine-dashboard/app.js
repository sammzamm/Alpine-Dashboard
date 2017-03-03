$(document).ready(function() {
    // var routeId = localStorage.getItem("routeId");
        var routeId = localStorage.getItem("routeId");

        $.ajax(`https://www.mountainproject.com/data?action=getRoutes&routeIds=${routeId}&key=105891963-86cbe74fd860f58dae8c7a7592c3443b`)
            .then(function(data) {
                var allRoutes = data.routes;
                for (var i = 0; i < allRoutes.length; i++) {

                    // --  Route Name + Rating  --
                    var route = allRoutes[i]
                    var name = route.name
                    var rating = route.rating;
                    $("#routeName").append(name + "  -  " + rating)

                    //  --  Route type  --
                    var type = route.type
                    $('#type').append(type)

                    //  --  Route pitches  --
                    var pitches = route.pitches
                    $("#pitches").append(pitches)

                    //  --  Route Image --
                    var routeImg = route.imgMed
                    $('#routePhoto').prepend('<img src="' + routeImg + '" />')

                    // --  Route stars  --
                    var stars = route.stars;
                    $("#stars").append(stars)

                    // --  Route location  --
                    var location = route.location;
                    $("#location").append(location)

                }
            })
    // });

    //--  Dark Skies API  -----------------------------

        $.ajax({
            url: "https://api.darksky.net/forecast/42090cbb28535bd069e4b8fcd9fa3de3/40.2674738,-105.6490131",
            dataType: "jsonp",
            success: function(parsed_json) {

                //--  Current Conditions  ------------
                var summaryC = parsed_json['currently']['summary'];
                $('#summaryC').append(summaryC)

                var tempC = parsed_json['currently']['temperature'];
                $('#tempC').append(tempC + "°F")

                var apparentTempC = parsed_json['currently']['apparentTemperature'];
                $('#apparentTempC').append(apparentTempC + "°F")

                var iconC = parsed_json['currently']['icon'];
                $('#iconC').append(iconC)

                var precipProbC = parsed_json['currently']['precipProbability'];
                $('#precipProbC').append(precipProbC + "%")

                var windSpeedC = parsed_json['currently']['windSpeed'];
                $('#windSpeedC').append(windSpeedC)

                var cloudCoverC = parsed_json['currently']['cloudCover'];
                $('#cloudCoverC').append(cloudCoverC)

                //--  Daily Conditions  ------------------

                // var iconD = parsed_json['daily']['icon'];
                // console.log(iconD);
                // $('#iconD').append(`<canvas id="${iconD}" width="128" height="128"></canvas>`)

                var summaryD =
                parsed_json['daily']['summary'];
                $('#summaryD').append("Today:  " + summaryD)

                var daily= parsed_json['daily']['data'][0];
                // console.log(daily);

                var temperatureMin = parsed_json['daily']['data'][0]['temperatureMin'];
                $('#temperatureMin').append(temperatureMin + "°F")
                console.log(temperatureMin);

                var temperatureMax = parsed_json['daily']['data'][0]['temperatureMax'];
                $('#temperatureMax').append(temperatureMax + "°F")
                console.log(temperatureMax);

                var windSpeed =  parsed_json['daily']['data'][0]['windSpeed'];
                $('#windSpeed').append(windSpeed + "mph")
                console.log(windSpeed);

                var sunriseTime = parsed_json['daily']['data'][0]['sunriseTime'];
                $('#sunriseTime').append(moment.unix(sunriseTime).format('HH:mm'));

                var sunsetTime = parsed_json['daily']['data'][0]['sunsetTime'];
                $('#sunsetTime').append(moment.unix(sunsetTime).format('HH:mm'));
                console.log(moment(sunsetTime));

                //-- day 2  ---------------------------------

                var summaryD2 =
                parsed_json['daily']['summary'];
                $('#summaryD2').append("Today:  " + summaryD2)

                var daily2= parsed_json['daily']['data'][1];
                // console.log(daily);

                var temperatureMin2 = parsed_json['daily']['data'][1]['temperatureMin'];
                $('#temperatureMin2').append(temperatureMin2 + "°F")
                console.log(temperatureMin);

                var temperatureMax2 = parsed_json['daily']['data'][1]['temperatureMax'];
                $('#temperatureMax2').append(temperatureMax2 + "°F")
                console.log(temperatureMax2);

                var windSpeed2 =  parsed_json['daily']['data'][1]['windSpeed'];
                $('#windSpeed2').append(windSpeed2 + "mph")
                console.log(windSpeed2);

                var sunriseTime2 = parsed_json['daily']['data'][1]['sunriseTime'];
                $('#sunriseTime2').append(moment.unix(sunriseTime2).format('HH:mm'));
                console.log(sunriseTime2);

                var sunsetTime2 = parsed_json['daily']['data'][1]['sunsetTime'];
                $('#sunsetTime2').append(moment.unix(sunsetTime2).format('HH:mm'))
                console.log(sunsetTime2);

                //--  day 3  ---------------------------

                var summaryD3 =
                parsed_json['daily']['summary'];
                $('#summaryD3').append("Today:  " + summaryD3)

                var daily3= parsed_json['daily']['data'][2];
                // console.log(daily);

                var temperatureMin3 = parsed_json['daily']['data'][2]['temperatureMin'];
                $('#temperatureMin3').append(temperatureMin3 + "°F")
                console.log(temperatureMin3);

                var temperatureMax3 = parsed_json['daily']['data'][2]['temperatureMax'];
                $('#temperatureMax3').append(temperatureMax3 + "°F")
                console.log(temperatureMax3);

                var windSpeed3 =  parsed_json['daily']['data'][2]['windSpeed'];
                $('#windSpeed3').append(windSpeed3 + "mph")
                console.log(windSpeed3);

                var sunriseTime3 = parsed_json['daily']['data'][2]['sunriseTime'];
                $('#sunriseTime3').append(moment.unix(sunriseTime3).format('HH:mm'))
                console.log(sunriseTime3);

                var sunsetTime3 = parsed_json['daily']['data'][2]['sunsetTime'];
                $('#sunsetTime3').append(moment.unix(sunsetTime3).format('HH:mm'))
                console.log(sunsetTime3);

                //--  Hourl Conditions  ------------------

                // var  = parsed_json['currently'][''];
                // $('#').append()

            }
        })


    //--  appending data to data arr.

    //--  appending retrieved weather data to dashboard

    //--  Mountain Project API  -----------------------


    //-- self envoked function closure  -------------------------


//--  all used route ids  -------

//
});

//--  Daily Conditions  ------------------




//--  Hourl Conditions  ------------------

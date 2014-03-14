$(document).ready(function(){

  var getDatamap,
    mapData = {},
    remoteSuccessHandler,
    popupHandler;

  remoteSuccessHandler = function(data){
    var state_obj, mapData = {};
    console.log(data);
    data.forEach(function(state){
        state_obj = {};
        state_obj['fillKey'] = state.fill_color;
        state_obj['hs_rate'] = state.hs_rate;
        state_obj['hs_rank'] = state.hs_rank;
        state_obj['ba_rate'] = state.ba_rate;
        state_obj['ba_rank'] = state.ba_rank;
        state_obj['adv_rate'] = state.adv_rate;
        state_obj['adv_rank'] = state.adv_rank;
        mapData[state.abbrev] = state_obj;
    });
    showDatamap(mapData);
  }

    // Triggered by a mouse over each state.
    popupHandler = function(geo, data) {
        // Markup for the popup
        return ['<div class="hoverinfo"><strong>',
                geo.properties.name,
                '</strong><br><br> High School Diploma',
                ': ' + data.hs_rate,
                '<br> Rank: ',
                ': ' + data.hs_rank,
                '<br><br> Bachelors Degree: ',
                ': ' + data.ba_rate,
                '<br> Rank: ',
                ': ' + data.ba_rank,
                '<br><br> Advanced Degree: ',
                ': ' + data.adv_rate,
                '<br> Rank: ',
                ': ' + data.adv_rank,
                '</div>'].join('');
    };

    // Draw the map
    showDatamap = function(data){

        var map = new Datamap({
            element: document.getElementById('container'),
            fills: {
                HIGH: '#0066CC',
                MEDIUM: 'steelblue',
                LOW: 'lightsteelblue',
                UNKNOWN: 'gray',
                defaultFill: 'gray'
            },
            scope: 'usa',
            data: data,
            geographyConfig: {
                popupTemplate: popupHandler
            }
        });

        // Draw the map legend
        map.legend({legendTitle: "Education rates by State"});
    };

  // remote request to get data.
  $.get('/states/index.json').success(remoteSuccessHandler);

});

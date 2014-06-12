(function() {
  'use strict';
  var app = (function(){


    var fourSquareUrl = 'https://api.foursquare.com/v2/venues/search?client_id=1F2RX5DUSRABEM3QBX4YT5KXH4M0I5TO4F1V2VXGY0OHJEIO&client_secret=JTGCDAVWB4YPHSVT0OMCGW0NQ12JDDPQOLPNAAQDFFLSJ1EO&v=20130815';

    $.ajax(fourSquareUrl, { dataType: 'jsonp', jsonp: 'jsoncallback' })
      .then(function(data, status, xhr) {
        console.log(status);
        console.log('success (promises): ' + data.name);
    }, function(xhr, status, error) {
      console.log('failed (promises): ' + error);
    });


  });
  $(app.run);

})();

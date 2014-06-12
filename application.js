(function() {
  'use strict';

  var fourSquareUrl = 'https://api.foursquare.com/v2/venues/explore?ll=45.5,-122.7&oauth_token=TAM5U5CGI2BMMZYSGGBCM44MMQWP5TGQ3OJ0A4MIVKLNVTMB&v=20140612&query=restaurant';

  var loadVenues = function() {
    $.ajax(fourSquareUrl, { dataType: 'jsonp' })
    .then(function(data, status, xhr) {
      console.log(status);
      console.log('success (promises): ');
      console.log(data);
      console.log(data.response.groups[0].items[0].venue.name);
    }, function(xhr, status, error) {
      console.log('failed (promises): ' + error);
    });
  };

  $(function() {
    loadVenues();
  });

})();

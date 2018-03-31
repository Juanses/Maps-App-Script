var MapClass = function(){
  
  this.StartGeocoder = function(){
    this.Geocoder = Maps.newGeocoder();
  }
  
  this.setBounds = function(lati,longi,latf,longf){
    this.Geocoder.setBounds(lati,longi,latf,longf);
    
  }
  
  this.GeoCode = function(address){
    var response = this.Geocoder.geocode(address);
    this.code_pays = response.results[0]["address_components"][3]["short_name"];
    this.lng = response.results[0]["geometry"]["location"].lng;
    this.lat = response.results[0]["geometry"]["location"].lat;
  }
}

(function(angular){ 'use strict';
	angular.module('conversions.speed', [])
		.factory('conversionsSpeed', ['$log', function($log){
			return {
				//=========
				// !Errors
				//=========
				amtTypeError: function(amt){
					$log.error(amt+' is not a number and cannot be converted');
					return NaN;
				},
				
				//====================
				// !Speed Conversions
				//====================
				milesPerhourToFeetPersec: function(amt){
					if(isNaN(amt)) return this.amtTypeError(amt);
					return amt * 1.46667;
				},
			
				milesPerhourToMetersPersec: function(amt){
					if(isNaN(amt)) return this.amtTypeError(amt);
					return amt * 0.44704;
				},
			
				milesPerhourToKmPerhour: function(amt){
					if(isNaN(amt)) return this.amtTypeError(amt);
					return amt * 1.60934;
				},
			
				milesPerhourToKnot: function(amt){
					if(isNaN(amt)) return this.amtTypeError(amt);
					return amt * 0.868976;
				},
			
				feetPersecToMilesPerhour: function(amt){
					if(isNaN(amt)) return this.amtTypeError(amt);
					return amt * 0.681818;
				},
			
				feetPersecToMetersPersec: function(amt){
					if(isNaN(amt)) return this.amtTypeError(amt);
					return amt * 0.3048;
				},
			
				feetPersecToKmPerhour: function(amt){
					if(isNaN(amt)) return this.amtTypeError(amt);
					return amt * 1.09728;
				},
			
				feetPersecToKnot: function(amt){
					if(isNaN(amt)) return this.amtTypeError(amt);
					return amt * 0.592484;
				},
			
				metersPersecToMilesPerhour: function(amt){
					if(isNaN(amt)) return this.amtTypeError(amt);
					return amt * 2.23694;
				},
			
				metersPersecToFeetPersec: function(amt){
					if(isNaN(amt)) return this.amtTypeError(amt);
					return amt * 3.28084;
				},
			
				metersPersecToKmPerhour: function(amt){
					if(isNaN(amt)) return this.amtTypeError(amt);
					return amt * 3.6;
				},
			
				metersPersecToKnot: function(amt){
					if(isNaN(amt)) return this.amtTypeError(amt);
					return amt * 1.94384;
				},
			
				kmPerhourToMilesPerhour: function(amt){
					if(isNaN(amt)) return this.amtTypeError(amt);
					return amt * 0.621371;
				},
			
				kmPerhourToFeetPersec: function(amt){
					if(isNaN(amt)) return this.amtTypeError(amt);
					return amt * 0.911344;
				},
			
				kmPerhourToMetersPersec: function(amt){
					if(isNaN(amt)) return this.amtTypeError(amt);
					return amt * 0.277778;
				},
			
				kmPerhourToKnot: function(amt){
					if(isNaN(amt)) return this.amtTypeError(amt);
					return amt * 0.539957;
				},
			
				knotToFeetPersec: function(amt){
					if(isNaN(amt)) return this.amtTypeError(amt);
					return amt * 1.68781;
				},
			
				knotToMetersPersec: function(amt){
					if(isNaN(amt)) return this.amtTypeError(amt);
					return amt * 0.514444;
				},
			
				knotToKmPerhour: function(amt){
					if(isNaN(amt)) return this.amtTypeError(amt);
					return amt * 1.852;
				}
				
			};
		}]);
	
})(window.angular);
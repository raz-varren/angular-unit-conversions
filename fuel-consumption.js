(function(angular){ 'use strict';
	angular.module('conversions.fuel', [])
		.factory('conversionsFuel', ['$log', function($log){
			return {
				//=========
				// !Errors
				//=========
				amtTypeError: function(amt){
					$log.error(amt+' is not a number and cannot be converted');
					return NaN;
				},
				
				//====================
				// !Fuel consumption Conversions
				//====================
				mpgUsToMpgImp: function(amt){
					if(isNaN(amt)) return this.amtTypeError(amt);
					return amt * 1.20095;
				},
			
				mpgUsToKmPerLiter: function(amt){
					if(isNaN(amt)) return this.amtTypeError(amt);
					return amt * 0.425144;
				},
			
				mpgImpToMpgUs: function(amt){
					if(isNaN(amt)) return this.amtTypeError(amt);
					return amt * 0.832674;
				},
			
				mpgImpToKmPerLiter: function(amt){
					if(isNaN(amt)) return this.amtTypeError(amt);
					return amt * 0.354006;
				},
			
				kmPerLiterToMpgUs: function(amt){
					if(isNaN(amt)) return this.amtTypeError(amt);
					return amt * 2.35215;
				},
			
				kmPerLiterToMpgImp: function(amt){
					if(isNaN(amt)) return this.amtTypeError(amt);
					return amt * 2.82481;
				}
			};
		}]);
	
})(window.angular);
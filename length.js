(function(angular){ 'use strict';
	angular.module('conversions.length', [])
		.factory('conversionsLength', ['$log', function($log){
			return {
				//=========
				// !Errors
				//=========
				amtTypeError: function(amt){
					$log.error(amt+' is not a number and cannot be converted');
					return NaN;
				},
				
				//====================
				// !Length Conversions
				//====================
				kilometerToMeter: function(amt){
					if(isNaN(amt)) return this.amtTypeError(amt);
					return amt * 1000;
				},
			
				kilometerToCentimeter: function(amt){
					if(isNaN(amt)) return this.amtTypeError(amt);
					return amt * 100000;
				},
			
				kilometerToMillimeter: function(amt){
					if(isNaN(amt)) return this.amtTypeError(amt);
					return amt * 1e+6;
				},
			
				kilometerToMile: function(amt){
					if(isNaN(amt)) return this.amtTypeError(amt);
					return amt * 0.621371;
				},
			
				kilometerToYard: function(amt){
					if(isNaN(amt)) return this.amtTypeError(amt);
					return amt * 1093.61;
				},
			
				kilometerToFoot: function(amt){
					if(isNaN(amt)) return this.amtTypeError(amt);
					return amt * 3280.84;
				},
			
				kilometerToInch: function(amt){
					if(isNaN(amt)) return this.amtTypeError(amt);
					return amt * 39370.1;
				},
			
				kilometerToNauticalMile: function(amt){
					if(isNaN(amt)) return this.amtTypeError(amt);
					return amt * 0.539957;
				},
			
				meterToKilometer: function(amt){
					if(isNaN(amt)) return this.amtTypeError(amt);
					return amt * 0.001;
				},
			
				meterToCentimeter: function(amt){
					if(isNaN(amt)) return this.amtTypeError(amt);
					return amt * 100;
				},
			
				meterToMillimeter: function(amt){
					if(isNaN(amt)) return this.amtTypeError(amt);
					return amt * 1000;
				},
			
				meterToMile: function(amt){
					if(isNaN(amt)) return this.amtTypeError(amt);
					return amt * 0.000621371;
				},
			
				meterToYard: function(amt){
					if(isNaN(amt)) return this.amtTypeError(amt);
					return amt * 1.09361;
				},
			
				meterToFoot: function(amt){
					if(isNaN(amt)) return this.amtTypeError(amt);
					return amt * 3.28084;
				},
			
				meterToInch: function(amt){
					if(isNaN(amt)) return this.amtTypeError(amt);
					return amt * 39.3701;
				},
			
				meterToNauticalMile: function(amt){
					if(isNaN(amt)) return this.amtTypeError(amt);
					return amt * 0.000539957;
				},
			
				centimeterToKilometer: function(amt){
					if(isNaN(amt)) return this.amtTypeError(amt);
					return amt * 1e-5;
				},
			
				centimeterToMeter: function(amt){
					if(isNaN(amt)) return this.amtTypeError(amt);
					return amt * 0.01;
				},
			
				centimeterToMillimeter: function(amt){
					if(isNaN(amt)) return this.amtTypeError(amt);
					return amt * 10;
				},
			
				centimeterToMile: function(amt){
					if(isNaN(amt)) return this.amtTypeError(amt);
					return amt * 6.2137e-6;
				},
			
				centimeterToYard: function(amt){
					if(isNaN(amt)) return this.amtTypeError(amt);
					return amt * 0.0109361;
				},
			
				centimeterToFoot: function(amt){
					if(isNaN(amt)) return this.amtTypeError(amt);
					return amt * 0.0328084;
				},
			
				centimeterToInch: function(amt){
					if(isNaN(amt)) return this.amtTypeError(amt);
					return amt * 0.393701;
				},
			
				centimeterToNauticalMile: function(amt){
					if(isNaN(amt)) return this.amtTypeError(amt);
					return amt * 5.3996e-6;
				},
			
				millimeterToKilometer: function(amt){
					if(isNaN(amt)) return this.amtTypeError(amt);
					return amt * 1e-6;
				},
			
				millimeterToMeter: function(amt){
					if(isNaN(amt)) return this.amtTypeError(amt);
					return amt * 0.001;
				},
			
				millimeterToCentimeter: function(amt){
					if(isNaN(amt)) return this.amtTypeError(amt);
					return amt * 0.1;
				},
			
				millimeterToMile: function(amt){
					if(isNaN(amt)) return this.amtTypeError(amt);
					return amt * 6.2137e-7;
				},
			
				millimeterToYard: function(amt){
					if(isNaN(amt)) return this.amtTypeError(amt);
					return amt * 0.00109361;
				},
			
				millimeterToFoot: function(amt){
					if(isNaN(amt)) return this.amtTypeError(amt);
					return amt * 0.00328084;
				},
			
				millimeterToInch: function(amt){
					if(isNaN(amt)) return this.amtTypeError(amt);
					return amt * 0.0393701;
				},
			
				millimeterToNauticalMile: function(amt){
					if(isNaN(amt)) return this.amtTypeError(amt);
					return amt * 5.3996e-7;
				},
			
				mileToKilometer: function(amt){
					if(isNaN(amt)) return this.amtTypeError(amt);
					return amt * 1.60934;
				},
			
				mileToMeter: function(amt){
					if(isNaN(amt)) return this.amtTypeError(amt);
					return amt * 1609.34;
				},
			
				mileToCentimeter: function(amt){
					if(isNaN(amt)) return this.amtTypeError(amt);
					return amt * 160934;
				},
			
				mileToMillimeter: function(amt){
					if(isNaN(amt)) return this.amtTypeError(amt);
					return amt * 1.609e+6;
				},
			
				mileToYard: function(amt){
					if(isNaN(amt)) return this.amtTypeError(amt);
					return amt * 1760;
				},
			
				mileToFoot: function(amt){
					if(isNaN(amt)) return this.amtTypeError(amt);
					return amt * 5280;
				},
			
				mileToInch: function(amt){
					if(isNaN(amt)) return this.amtTypeError(amt);
					return amt * 63360;
				},
			
				mileToNauticalMile: function(amt){
					if(isNaN(amt)) return this.amtTypeError(amt);
					return amt * 0.868976;
				},
			
				yardToKilometer: function(amt){
					if(isNaN(amt)) return this.amtTypeError(amt);
					return amt * 0.0009144;
				},
			
				yardToMeter: function(amt){
					if(isNaN(amt)) return this.amtTypeError(amt);
					return amt * 0.9144;
				},
			
				yardToCentimeter: function(amt){
					if(isNaN(amt)) return this.amtTypeError(amt);
					return amt * 91.44;
				},
			
				yardToMillimeter: function(amt){
					if(isNaN(amt)) return this.amtTypeError(amt);
					return amt * 914.4;
				},
			
				yardToMile: function(amt){
					if(isNaN(amt)) return this.amtTypeError(amt);
					return amt * 0.000568182;
				},
			
				yardToFoot: function(amt){
					if(isNaN(amt)) return this.amtTypeError(amt);
					return amt * 3;
				},
			
				yardToInch: function(amt){
					if(isNaN(amt)) return this.amtTypeError(amt);
					return amt * 36;
				},
			
				yardToNauticalMile: function(amt){
					if(isNaN(amt)) return this.amtTypeError(amt);
					return amt * 0.000493737;
				},
			
				footToKilometer: function(amt){
					if(isNaN(amt)) return this.amtTypeError(amt);
					return amt * 0.0003048;
				},
			
				footToMeter: function(amt){
					if(isNaN(amt)) return this.amtTypeError(amt);
					return amt * 0.3048;
				},
			
				footToCentimeter: function(amt){
					if(isNaN(amt)) return this.amtTypeError(amt);
					return amt * 30.48;
				},
			
				footToMillimeter: function(amt){
					if(isNaN(amt)) return this.amtTypeError(amt);
					return amt * 304.8;
				},
			
				footToMile: function(amt){
					if(isNaN(amt)) return this.amtTypeError(amt);
					return amt * 0.000189394;
				},
			
				footToYard: function(amt){
					if(isNaN(amt)) return this.amtTypeError(amt);
					return amt * 0.333333;
				},
			
				footToInch: function(amt){
					if(isNaN(amt)) return this.amtTypeError(amt);
					return amt * 12;
				},
			
				footToNauticalMile: function(amt){
					if(isNaN(amt)) return this.amtTypeError(amt);
					return amt * 0.000164579;
				},
			
				inchToKilometer: function(amt){
					if(isNaN(amt)) return this.amtTypeError(amt);
					return amt * 2.54e-5;
				},
			
				inchToMeter: function(amt){
					if(isNaN(amt)) return this.amtTypeError(amt);
					return amt * 0.0254;
				},
			
				inchToCentimeter: function(amt){
					if(isNaN(amt)) return this.amtTypeError(amt);
					return amt * 2.54;
				},
			
				inchToMillimeter: function(amt){
					if(isNaN(amt)) return this.amtTypeError(amt);
					return amt * 25.4;
				},
			
				inchToMile: function(amt){
					if(isNaN(amt)) return this.amtTypeError(amt);
					return amt * 1.5783e-5;
				},
			
				inchToYard: function(amt){
					if(isNaN(amt)) return this.amtTypeError(amt);
					return amt * 0.0277778;
				},
			
				inchToFoot: function(amt){
					if(isNaN(amt)) return this.amtTypeError(amt);
					return amt * 0.0833333;
				},
			
				inchToNauticalMile: function(amt){
					if(isNaN(amt)) return this.amtTypeError(amt);
					return amt * 1.3715e-5;
				},
			
				nauticalMileToInch: function(amt){
					if(isNaN(amt)) return this.amtTypeError(amt);
					return amt * 72913.4;
				},
			
				nauticalMileToMeter: function(amt){
					if(isNaN(amt)) return this.amtTypeError(amt);
					return amt * 1852;
				},
			
				nauticalMileToCentimeter: function(amt){
					if(isNaN(amt)) return this.amtTypeError(amt);
					return amt * 185200;
				},
			
				nauticalMileToMillimeter: function(amt){
					if(isNaN(amt)) return this.amtTypeError(amt);
					return amt * 1.852e+6;
				},
			
				nauticalMileToMile: function(amt){
					if(isNaN(amt)) return this.amtTypeError(amt);
					return amt * 1.15078;
				},
			
				nauticalMileToYard: function(amt){
					if(isNaN(amt)) return this.amtTypeError(amt);
					return amt * 2025.37;
				},
			
				nauticalMileToFoot: function(amt){
					if(isNaN(amt)) return this.amtTypeError(amt);
					return amt * 6076.12;
				}
			};
		}]);
	
})(window.angular);
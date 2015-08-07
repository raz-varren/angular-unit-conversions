(function(angular){ 'use strict';
	angular.module('conversions.mass', [])
		.factory('conversionsMass', ['$log', function($log){
			return {
				//=========
				// !Errors
				//=========
				amtTypeError: function(amt){
					$log.error(amt+' is not a number and cannot be converted');
					return NaN;
				},
				
				//====================
				// !Mass Conversions
				//====================
				metricTonToKilogram: function(amt){
					if(isNaN(amt)) return this.amtTypeError(amt);
					return amt * 1000;
				},
			
				metricTonToGram: function(amt){
					if(isNaN(amt)) return this.amtTypeError(amt);
					return amt * 1e+6;
				},
			
				metricTonToMilligram: function(amt){
					if(isNaN(amt)) return this.amtTypeError(amt);
					return amt * 1e+9;
				},
			
				metricTonToMcg: function(amt){
					if(isNaN(amt)) return this.amtTypeError(amt);
					return amt * 1e+12;
				},
			
				metricTonToLongTon: function(amt){
					if(isNaN(amt)) return this.amtTypeError(amt);
					return amt * 0.984207;
				},
			
				metricTonToShortTon: function(amt){
					if(isNaN(amt)) return this.amtTypeError(amt);
					return amt * 1.10231;
				},
			
				metricTonToStone: function(amt){
					if(isNaN(amt)) return this.amtTypeError(amt);
					return amt * 157.473;
				},
			
				metricTonToPound: function(amt){
					if(isNaN(amt)) return this.amtTypeError(amt);
					return amt * 2204.62;
				},
			
				metricTonToOunce: function(amt){
					if(isNaN(amt)) return this.amtTypeError(amt);
					return amt * 35274;
				},
			
				kilogramToMetricTon: function(amt){
					if(isNaN(amt)) return this.amtTypeError(amt);
					return amt * 0.001;
				},
			
				kilogramToGram: function(amt){
					if(isNaN(amt)) return this.amtTypeError(amt);
					return amt * 1000;
				},
			
				kilogramToMilligram: function(amt){
					if(isNaN(amt)) return this.amtTypeError(amt);
					return amt * 1e+6;
				},
			
				kilogramToMcg: function(amt){
					if(isNaN(amt)) return this.amtTypeError(amt);
					return amt * 1e+9;
				},
			
				kilogramToLongTon: function(amt){
					if(isNaN(amt)) return this.amtTypeError(amt);
					return amt * 0.000984207;
				},
			
				kilogramToShortTon: function(amt){
					if(isNaN(amt)) return this.amtTypeError(amt);
					return amt * 0.00110231;
				},
			
				kilogramToStone: function(amt){
					if(isNaN(amt)) return this.amtTypeError(amt);
					return amt * 0.157473;
				},
			
				kilogramToPound: function(amt){
					if(isNaN(amt)) return this.amtTypeError(amt);
					return amt * 2.20462;
				},
			
				kilogramToOunce: function(amt){
					if(isNaN(amt)) return this.amtTypeError(amt);
					return amt * 35.274;
				},
			
				gramToMetricTon: function(amt){
					if(isNaN(amt)) return this.amtTypeError(amt);
					return amt * 1e-6;
				},
			
				gramToKilogram: function(amt){
					if(isNaN(amt)) return this.amtTypeError(amt);
					return amt * 0.001;
				},
			
				gramToMilligram: function(amt){
					if(isNaN(amt)) return this.amtTypeError(amt);
					return amt * 1000;
				},
			
				gramToMcg: function(amt){
					if(isNaN(amt)) return this.amtTypeError(amt);
					return amt * 1e+6;
				},
			
				gramToLongTon: function(amt){
					if(isNaN(amt)) return this.amtTypeError(amt);
					return amt * 9.8421e-7;
				},
			
				gramToShortTon: function(amt){
					if(isNaN(amt)) return this.amtTypeError(amt);
					return amt * 1.1023e-6;
				},
			
				gramToStone: function(amt){
					if(isNaN(amt)) return this.amtTypeError(amt);
					return amt * 0.000157473;
				},
			
				gramToPound: function(amt){
					if(isNaN(amt)) return this.amtTypeError(amt);
					return amt * 0.00220462;
				},
			
				gramToOunce: function(amt){
					if(isNaN(amt)) return this.amtTypeError(amt);
					return amt * 0.035274;
				},
			
				milligramToMetricTon: function(amt){
					if(isNaN(amt)) return this.amtTypeError(amt);
					return amt * 1e-9;
				},
			
				milligramToKilogram: function(amt){
					if(isNaN(amt)) return this.amtTypeError(amt);
					return amt * 1e-6;
				},
			
				milligramToGram: function(amt){
					if(isNaN(amt)) return this.amtTypeError(amt);
					return amt * 0.001;
				},
			
				milligramToMcg: function(amt){
					if(isNaN(amt)) return this.amtTypeError(amt);
					return amt * 1000;
				},
			
				milligramToLongTon: function(amt){
					if(isNaN(amt)) return this.amtTypeError(amt);
					return amt * 9.8421e-10;
				},
			
				milligramToShortTon: function(amt){
					if(isNaN(amt)) return this.amtTypeError(amt);
					return amt * 1.1023e-9;
				},
			
				milligramToStone: function(amt){
					if(isNaN(amt)) return this.amtTypeError(amt);
					return amt * 1.5747e-7;
				},
			
				milligramToPound: function(amt){
					if(isNaN(amt)) return this.amtTypeError(amt);
					return amt * 2.2046e-6;
				},
			
				milligramToOunce: function(amt){
					if(isNaN(amt)) return this.amtTypeError(amt);
					return amt * 3.5274e-5;
				},
			
				mcgToMetricTon: function(amt){
					if(isNaN(amt)) return this.amtTypeError(amt);
					return amt * 1e-12;
				},
			
				mcgToKilogram: function(amt){
					if(isNaN(amt)) return this.amtTypeError(amt);
					return amt * 1e-9;
				},
			
				mcgToGram: function(amt){
					if(isNaN(amt)) return this.amtTypeError(amt);
					return amt * 1e-6;
				},
			
				mcgToMilligram: function(amt){
					if(isNaN(amt)) return this.amtTypeError(amt);
					return amt * 0.001;
				},
			
				mcgToLongTon: function(amt){
					if(isNaN(amt)) return this.amtTypeError(amt);
					return amt * 9.8421e-13;
				},
			
				mcgToShortTon: function(amt){
					if(isNaN(amt)) return this.amtTypeError(amt);
					return amt * 1.1023e-12;
				},
			
				mcgToStone: function(amt){
					if(isNaN(amt)) return this.amtTypeError(amt);
					return amt * 1.5747e-10;
				},
			
				mcgToPound: function(amt){
					if(isNaN(amt)) return this.amtTypeError(amt);
					return amt * 2.2046e-9;
				},
			
				mcgToOunce: function(amt){
					if(isNaN(amt)) return this.amtTypeError(amt);
					return amt * 3.5274e-8;
				},
			
				longTonToMetricTon: function(amt){
					if(isNaN(amt)) return this.amtTypeError(amt);
					return amt * 1.01605;
				},
			
				longTonToKilogram: function(amt){
					if(isNaN(amt)) return this.amtTypeError(amt);
					return amt * 1016.05;
				},
			
				longTonToGram: function(amt){
					if(isNaN(amt)) return this.amtTypeError(amt);
					return amt * 1.016e+6;
				},
			
				longTonToMilligram: function(amt){
					if(isNaN(amt)) return this.amtTypeError(amt);
					return amt * 1.016e+9;
				},
			
				longTonToMcg: function(amt){
					if(isNaN(amt)) return this.amtTypeError(amt);
					return amt * 1.016e+12;
				},
			
				longTonToShortTon: function(amt){
					if(isNaN(amt)) return this.amtTypeError(amt);
					return amt * 1.12;
				},
			
				longTonToStone: function(amt){
					if(isNaN(amt)) return this.amtTypeError(amt);
					return amt * 160;
				},
			
				longTonToPound: function(amt){
					if(isNaN(amt)) return this.amtTypeError(amt);
					return amt * 2240;
				},
			
				longTonToOunce: function(amt){
					if(isNaN(amt)) return this.amtTypeError(amt);
					return amt * 35840;
				},
			
				shortTonToMetricTon: function(amt){
					if(isNaN(amt)) return this.amtTypeError(amt);
					return amt * 0.907185;
				},
			
				shortTonToKilogram: function(amt){
					if(isNaN(amt)) return this.amtTypeError(amt);
					return amt * 907.185;
				},
			
				shortTonToGram: function(amt){
					if(isNaN(amt)) return this.amtTypeError(amt);
					return amt * 907185;
				},
			
				shortTonToMilligram: function(amt){
					if(isNaN(amt)) return this.amtTypeError(amt);
					return amt * 9.072e+8;
				},
			
				shortTonToMcg: function(amt){
					if(isNaN(amt)) return this.amtTypeError(amt);
					return amt * 9.072e+11;
				},
			
				shortTonToLongTon: function(amt){
					if(isNaN(amt)) return this.amtTypeError(amt);
					return amt * 0.892857;
				},
			
				shortTonToStone: function(amt){
					if(isNaN(amt)) return this.amtTypeError(amt);
					return amt * 142.857;
				},
			
				shortTonToPound: function(amt){
					if(isNaN(amt)) return this.amtTypeError(amt);
					return amt * 2000;
				},
			
				shortTonToOunce: function(amt){
					if(isNaN(amt)) return this.amtTypeError(amt);
					return amt * 32000;
				},
			
				stoneToMetricTon: function(amt){
					if(isNaN(amt)) return this.amtTypeError(amt);
					return amt * 0.00635029;
				},
			
				stoneToKilogram: function(amt){
					if(isNaN(amt)) return this.amtTypeError(amt);
					return amt * 6.35029;
				},
			
				stoneToGram: function(amt){
					if(isNaN(amt)) return this.amtTypeError(amt);
					return amt * 6350.29;
				},
			
				stoneToMilligram: function(amt){
					if(isNaN(amt)) return this.amtTypeError(amt);
					return amt * 6.35e+6;
				},
			
				stoneToMcg: function(amt){
					if(isNaN(amt)) return this.amtTypeError(amt);
					return amt * 6.35e+9;
				},
			
				stoneToLongTon: function(amt){
					if(isNaN(amt)) return this.amtTypeError(amt);
					return amt * 0.00625;
				},
			
				stoneToShortTon: function(amt){
					if(isNaN(amt)) return this.amtTypeError(amt);
					return amt * 0.007;
				},
			
				stoneToPound: function(amt){
					if(isNaN(amt)) return this.amtTypeError(amt);
					return amt * 14;
				},
			
				stoneToOunce: function(amt){
					if(isNaN(amt)) return this.amtTypeError(amt);
					return amt * 224;
				},
			
				poundToMetricTon: function(amt){
					if(isNaN(amt)) return this.amtTypeError(amt);
					return amt * 0.000453592;
				},
			
				poundToKilogram: function(amt){
					if(isNaN(amt)) return this.amtTypeError(amt);
					return amt * 0.453592;
				},
			
				poundToGram: function(amt){
					if(isNaN(amt)) return this.amtTypeError(amt);
					return amt * 453.592;
				},
			
				poundToMilligram: function(amt){
					if(isNaN(amt)) return this.amtTypeError(amt);
					return amt * 453592;
				},
			
				poundToMcg: function(amt){
					if(isNaN(amt)) return this.amtTypeError(amt);
					return amt * 4.536e+8;
				},
			
				poundToLongTon: function(amt){
					if(isNaN(amt)) return this.amtTypeError(amt);
					return amt * 0.000446429;
				},
			
				poundToShortTon: function(amt){
					if(isNaN(amt)) return this.amtTypeError(amt);
					return amt * 0.0005;
				},
			
				poundToStone: function(amt){
					if(isNaN(amt)) return this.amtTypeError(amt);
					return amt * 0.0714286;
				},
			
				poundToOunce: function(amt){
					if(isNaN(amt)) return this.amtTypeError(amt);
					return amt * 16;
				},
			
				ounceToPound: function(amt){
					if(isNaN(amt)) return this.amtTypeError(amt);
					return amt * 0.0625;
				},
			
				ounceToKilogram: function(amt){
					if(isNaN(amt)) return this.amtTypeError(amt);
					return amt * 0.0283495;
				},
			
				ounceToGram: function(amt){
					if(isNaN(amt)) return this.amtTypeError(amt);
					return amt * 28.3495;
				},
			
				ounceToMilligram: function(amt){
					if(isNaN(amt)) return this.amtTypeError(amt);
					return amt * 28349.5;
				},
			
				ounceToMcg: function(amt){
					if(isNaN(amt)) return this.amtTypeError(amt);
					return amt * 2.835e+7;
				},
			
				ounceToLongTon: function(amt){
					if(isNaN(amt)) return this.amtTypeError(amt);
					return amt * 2.7902e-5;
				},
			
				ounceToShortTon: function(amt){
					if(isNaN(amt)) return this.amtTypeError(amt);
					return amt * 3.125e-5;
				},
			
				ounceToStone: function(amt){
					if(isNaN(amt)) return this.amtTypeError(amt);
					return amt * 0.00446429;
				}
			};
		}]);
	
})(window.angular);
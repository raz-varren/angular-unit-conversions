(function(angular){ 'use strict';
	angular.module('conversions.area', [])
		.factory('conversionsArea', ['$log', function($log){
			return {
				//=========
				// !Errors
				//=========
				amtTypeError: function(amt){
					$log.error(amt+' is not a number and cannot be converted');
					return NaN;
				},
				
				//====================
				// !Area Conversions
				//====================
				squareKmToHectare: function(amt){
					if(isNaN(amt)) return this.amtTypeError(amt);
					return amt * 100;
				},
			
				squareKmToSquareMeter: function(amt){
					if(isNaN(amt)) return this.amtTypeError(amt);
					return amt * 1e+6;
				},
			
				squareKmToSquareMile: function(amt){
					if(isNaN(amt)) return this.amtTypeError(amt);
					return amt * 0.386102;
				},
			
				squareKmToAcre: function(amt){
					if(isNaN(amt)) return this.amtTypeError(amt);
					return amt * 247.105;
				},
			
				squareKmToSquareYard: function(amt){
					if(isNaN(amt)) return this.amtTypeError(amt);
					return amt * 1.196e+6;
				},
			
				squareKmToSquareFoot: function(amt){
					if(isNaN(amt)) return this.amtTypeError(amt);
					return amt * 1.076e+7;
				},
			
				squareKmToSquareInch: function(amt){
					if(isNaN(amt)) return this.amtTypeError(amt);
					return amt * 1.55e+9;
				},
			
				hectareToSquareKm: function(amt){
					if(isNaN(amt)) return this.amtTypeError(amt);
					return amt * 0.01;
				},
			
				hectareToSquareMeter: function(amt){
					if(isNaN(amt)) return this.amtTypeError(amt);
					return amt * 10000;
				},
			
				hectareToSquareMile: function(amt){
					if(isNaN(amt)) return this.amtTypeError(amt);
					return amt * 0.00386102;
				},
			
				hectareToAcre: function(amt){
					if(isNaN(amt)) return this.amtTypeError(amt);
					return amt * 2.47105;
				},
			
				hectareToSquareYard: function(amt){
					if(isNaN(amt)) return this.amtTypeError(amt);
					return amt * 11959.9;
				},
			
				hectareToSquareFoot: function(amt){
					if(isNaN(amt)) return this.amtTypeError(amt);
					return amt * 107639;
				},
			
				hectareToSquareInch: function(amt){
					if(isNaN(amt)) return this.amtTypeError(amt);
					return amt * 1.55e+7;
				},
			
				squareMeterToSquareKm: function(amt){
					if(isNaN(amt)) return this.amtTypeError(amt);
					return amt * 1e-6;
				},
			
				squareMeterToHectare: function(amt){
					if(isNaN(amt)) return this.amtTypeError(amt);
					return amt * 1e-4;
				},
			
				squareMeterToSquareMile: function(amt){
					if(isNaN(amt)) return this.amtTypeError(amt);
					return amt * 3.861e-7;
				},
			
				squareMeterToAcre: function(amt){
					if(isNaN(amt)) return this.amtTypeError(amt);
					return amt * 0.000247105;
				},
			
				squareMeterToSquareYard: function(amt){
					if(isNaN(amt)) return this.amtTypeError(amt);
					return amt * 1.19599;
				},
			
				squareMeterToSquareFoot: function(amt){
					if(isNaN(amt)) return this.amtTypeError(amt);
					return amt * 10.7639;
				},
			
				squareMeterToSquareInch: function(amt){
					if(isNaN(amt)) return this.amtTypeError(amt);
					return amt * 1550;
				},
			
				squareMileToSquareKm: function(amt){
					if(isNaN(amt)) return this.amtTypeError(amt);
					return amt * 2.58999;
				},
			
				squareMileToHectare: function(amt){
					if(isNaN(amt)) return this.amtTypeError(amt);
					return amt * 258.999;
				},
			
				squareMileToSquareMeter: function(amt){
					if(isNaN(amt)) return this.amtTypeError(amt);
					return amt * 2.59e+6;
				},
			
				squareMileToAcre: function(amt){
					if(isNaN(amt)) return this.amtTypeError(amt);
					return amt * 640;
				},
			
				squareMileToSquareYard: function(amt){
					if(isNaN(amt)) return this.amtTypeError(amt);
					return amt * 3.098e+6;
				},
			
				squareMileToSquareFoot: function(amt){
					if(isNaN(amt)) return this.amtTypeError(amt);
					return amt * 2.788e+7;
				},
			
				squareMileToSquareInch: function(amt){
					if(isNaN(amt)) return this.amtTypeError(amt);
					return amt * 4.014e+9;
				},
			
				acreToSquareKm: function(amt){
					if(isNaN(amt)) return this.amtTypeError(amt);
					return amt * 0.00404686;
				},
			
				acreToHectare: function(amt){
					if(isNaN(amt)) return this.amtTypeError(amt);
					return amt * 0.404686;
				},
			
				acreToSquareMeter: function(amt){
					if(isNaN(amt)) return this.amtTypeError(amt);
					return amt * 4046.86;
				},
			
				acreToSquareMile: function(amt){
					if(isNaN(amt)) return this.amtTypeError(amt);
					return amt * 0.0015625;
				},
			
				acreToSquareYard: function(amt){
					if(isNaN(amt)) return this.amtTypeError(amt);
					return amt * 4840;
				},
			
				acreToSquareFoot: function(amt){
					if(isNaN(amt)) return this.amtTypeError(amt);
					return amt * 43560;
				},
			
				acreToSquareInch: function(amt){
					if(isNaN(amt)) return this.amtTypeError(amt);
					return amt * 6.273e+6;
				},
			
				squareYardToSquareKm: function(amt){
					if(isNaN(amt)) return this.amtTypeError(amt);
					return amt * 8.3613e-7;
				},
			
				squareYardToHectare: function(amt){
					if(isNaN(amt)) return this.amtTypeError(amt);
					return amt * 8.3613e-5;
				},
			
				squareYardToSquareMeter: function(amt){
					if(isNaN(amt)) return this.amtTypeError(amt);
					return amt * 0.836127;
				},
			
				squareYardToSquareMile: function(amt){
					if(isNaN(amt)) return this.amtTypeError(amt);
					return amt * 3.2283e-7;
				},
			
				squareYardToAcre: function(amt){
					if(isNaN(amt)) return this.amtTypeError(amt);
					return amt * 0.000206612;
				},
			
				squareYardToSquareFoot: function(amt){
					if(isNaN(amt)) return this.amtTypeError(amt);
					return amt * 9;
				},
			
				squareYardToSquareInch: function(amt){
					if(isNaN(amt)) return this.amtTypeError(amt);
					return amt * 1296;
				},
			
				squareFootToSquareKm: function(amt){
					if(isNaN(amt)) return this.amtTypeError(amt);
					return amt * 9.2903e-8;
				},
			
				squareFootToHectare: function(amt){
					if(isNaN(amt)) return this.amtTypeError(amt);
					return amt * 9.2903e-6;
				},
			
				squareFootToSquareMeter: function(amt){
					if(isNaN(amt)) return this.amtTypeError(amt);
					return amt * 0.092903;
				},
			
				squareFootToSquareMile: function(amt){
					if(isNaN(amt)) return this.amtTypeError(amt);
					return amt * 3.587e-8;
				},
			
				squareFootToAcre: function(amt){
					if(isNaN(amt)) return this.amtTypeError(amt);
					return amt * 2.2957e-5;
				},
			
				squareFootToSquareYard: function(amt){
					if(isNaN(amt)) return this.amtTypeError(amt);
					return amt * 0.111111;
				},
			
				squareFootToSquareInch: function(amt){
					if(isNaN(amt)) return this.amtTypeError(amt);
					return amt * 144;
				},
			
				squareInchToSquareFoot: function(amt){
					if(isNaN(amt)) return this.amtTypeError(amt);
					return amt * 0.00694444;
				},
			
				squareInchToHectare: function(amt){
					if(isNaN(amt)) return this.amtTypeError(amt);
					return amt * 6.4516e-8;
				},
			
				squareInchToSquareMeter: function(amt){
					if(isNaN(amt)) return this.amtTypeError(amt);
					return amt * 0.00064516;
				},
			
				squareInchToSquareMile: function(amt){
					if(isNaN(amt)) return this.amtTypeError(amt);
					return amt * 2.491e-10;
				},
			
				squareInchToAcre: function(amt){
					if(isNaN(amt)) return this.amtTypeError(amt);
					return amt * 1.5942e-7;
				},
			
				squareInchToSquareYard: function(amt){
					if(isNaN(amt)) return this.amtTypeError(amt);
					return amt * 0.000771605;
				}
			};
		}]);
	
})(window.angular);
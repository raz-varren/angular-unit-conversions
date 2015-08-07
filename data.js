(function(angular){ 'use strict';
	angular.module('conversions.data', [])
		.factory('conversionsData', ['$log', function($log){
			return {
				//=========
				// !Errors
				//=========
				amtTypeError: function(amt){
					$log.error(amt+' is not a number and cannot be converted');
					return NaN;
				},
				
				//==============================
				// !Digital Storage Conversions
				//==============================
				bitToByte: function(amt){
					if(isNaN(amt)) return this.amtTypeError(amt);
					return amt * 0.125;
				},
			
				bitToKilobit: function(amt){
					if(isNaN(amt)) return this.amtTypeError(amt);
					return amt * 0.001;
				},
			
				bitToKilobyte: function(amt){
					if(isNaN(amt)) return this.amtTypeError(amt);
					return amt * 0.000125;
				},
			
				bitToKibibit: function(amt){
					if(isNaN(amt)) return this.amtTypeError(amt);
					return amt * 0.000976563;
				},
			
				bitToKibibyte: function(amt){
					if(isNaN(amt)) return this.amtTypeError(amt);
					return amt * 0.00012207;
				},
			
				bitToMegabit: function(amt){
					if(isNaN(amt)) return this.amtTypeError(amt);
					return amt * 1e-6;
				},
			
				bitToMegabyte: function(amt){
					if(isNaN(amt)) return this.amtTypeError(amt);
					return amt * 1.25e-7;
				},
			
				bitToMebibit: function(amt){
					if(isNaN(amt)) return this.amtTypeError(amt);
					return amt * 9.5367e-7;
				},
			
				bitToMebibyte: function(amt){
					if(isNaN(amt)) return this.amtTypeError(amt);
					return amt * 1.1921e-7;
				},
			
				bitToGigabit: function(amt){
					if(isNaN(amt)) return this.amtTypeError(amt);
					return amt * 1e-9;
				},
			
				bitToGigabyte: function(amt){
					if(isNaN(amt)) return this.amtTypeError(amt);
					return amt * 1.25e-10;
				},
			
				bitToGibibit: function(amt){
					if(isNaN(amt)) return this.amtTypeError(amt);
					return amt * 9.3132e-10;
				},
			
				bitToGibibyte: function(amt){
					if(isNaN(amt)) return this.amtTypeError(amt);
					return amt * 1.1642e-10;
				},
			
				bitToTerabit: function(amt){
					if(isNaN(amt)) return this.amtTypeError(amt);
					return amt * 1e-12;
				},
			
				bitToTerabyte: function(amt){
					if(isNaN(amt)) return this.amtTypeError(amt);
					return amt * 1.25e-13;
				},
			
				bitToTebibit: function(amt){
					if(isNaN(amt)) return this.amtTypeError(amt);
					return amt * 9.0949e-13;
				},
			
				bitToTebibyte: function(amt){
					if(isNaN(amt)) return this.amtTypeError(amt);
					return amt * 1.1369e-13;
				},
			
				bitToPetabit: function(amt){
					if(isNaN(amt)) return this.amtTypeError(amt);
					return amt * 1e-15;
				},
			
				bitToPetabyte: function(amt){
					if(isNaN(amt)) return this.amtTypeError(amt);
					return amt * 1.25e-16;
				},
			
				bitToPebibit: function(amt){
					if(isNaN(amt)) return this.amtTypeError(amt);
					return amt * 8.8818e-16;
				},
			
				bitToPebibyte: function(amt){
					if(isNaN(amt)) return this.amtTypeError(amt);
					return amt * 1.1102e-16;
				},
			
				byteToBit: function(amt){
					if(isNaN(amt)) return this.amtTypeError(amt);
					return amt * 8;
				},
			
				byteToKilobit: function(amt){
					if(isNaN(amt)) return this.amtTypeError(amt);
					return amt * 0.008;
				},
			
				byteToKilobyte: function(amt){
					if(isNaN(amt)) return this.amtTypeError(amt);
					return amt * 0.001;
				},
			
				byteToKibibit: function(amt){
					if(isNaN(amt)) return this.amtTypeError(amt);
					return amt * 0.0078125;
				},
			
				byteToKibibyte: function(amt){
					if(isNaN(amt)) return this.amtTypeError(amt);
					return amt * 0.000976563;
				},
			
				byteToMegabit: function(amt){
					if(isNaN(amt)) return this.amtTypeError(amt);
					return amt * 8e-6;
				},
			
				byteToMegabyte: function(amt){
					if(isNaN(amt)) return this.amtTypeError(amt);
					return amt * 1e-6;
				},
			
				byteToMebibit: function(amt){
					if(isNaN(amt)) return this.amtTypeError(amt);
					return amt * 7.6294e-6;
				},
			
				byteToMebibyte: function(amt){
					if(isNaN(amt)) return this.amtTypeError(amt);
					return amt * 9.5367e-7;
				},
			
				byteToGigabit: function(amt){
					if(isNaN(amt)) return this.amtTypeError(amt);
					return amt * 8e-9;
				},
			
				byteToGigabyte: function(amt){
					if(isNaN(amt)) return this.amtTypeError(amt);
					return amt * 1e-9;
				},
			
				byteToGibibit: function(amt){
					if(isNaN(amt)) return this.amtTypeError(amt);
					return amt * 7.4506e-9;
				},
			
				byteToGibibyte: function(amt){
					if(isNaN(amt)) return this.amtTypeError(amt);
					return amt * 9.3132e-10;
				},
			
				byteToTerabit: function(amt){
					if(isNaN(amt)) return this.amtTypeError(amt);
					return amt * 8e-12;
				},
			
				byteToTerabyte: function(amt){
					if(isNaN(amt)) return this.amtTypeError(amt);
					return amt * 1e-12;
				},
			
				byteToTebibit: function(amt){
					if(isNaN(amt)) return this.amtTypeError(amt);
					return amt * 7.276e-12;
				},
			
				byteToTebibyte: function(amt){
					if(isNaN(amt)) return this.amtTypeError(amt);
					return amt * 9.0949e-13;
				},
			
				byteToPetabit: function(amt){
					if(isNaN(amt)) return this.amtTypeError(amt);
					return amt * 8e-15;
				},
			
				byteToPetabyte: function(amt){
					if(isNaN(amt)) return this.amtTypeError(amt);
					return amt * 1e-15;
				},
			
				byteToPebibit: function(amt){
					if(isNaN(amt)) return this.amtTypeError(amt);
					return amt * 7.1054e-15;
				},
			
				byteToPebibyte: function(amt){
					if(isNaN(amt)) return this.amtTypeError(amt);
					return amt * 8.8818e-16;
				},
			
				kilobitToBit: function(amt){
					if(isNaN(amt)) return this.amtTypeError(amt);
					return amt * 1000;
				},
			
				kilobitToByte: function(amt){
					if(isNaN(amt)) return this.amtTypeError(amt);
					return amt * 125;
				},
			
				kilobitToKilobyte: function(amt){
					if(isNaN(amt)) return this.amtTypeError(amt);
					return amt * 0.125;
				},
			
				kilobitToKibibit: function(amt){
					if(isNaN(amt)) return this.amtTypeError(amt);
					return amt * 0.976563;
				},
			
				kilobitToKibibyte: function(amt){
					if(isNaN(amt)) return this.amtTypeError(amt);
					return amt * 0.12207;
				},
			
				kilobitToMegabit: function(amt){
					if(isNaN(amt)) return this.amtTypeError(amt);
					return amt * 0.001;
				},
			
				kilobitToMegabyte: function(amt){
					if(isNaN(amt)) return this.amtTypeError(amt);
					return amt * 0.000125;
				},
			
				kilobitToMebibit: function(amt){
					if(isNaN(amt)) return this.amtTypeError(amt);
					return amt * 0.000953674;
				},
			
				kilobitToMebibyte: function(amt){
					if(isNaN(amt)) return this.amtTypeError(amt);
					return amt * 0.000119209;
				},
			
				kilobitToGigabit: function(amt){
					if(isNaN(amt)) return this.amtTypeError(amt);
					return amt * 1e-6;
				},
			
				kilobitToGigabyte: function(amt){
					if(isNaN(amt)) return this.amtTypeError(amt);
					return amt * 1.25e-7;
				},
			
				kilobitToGibibit: function(amt){
					if(isNaN(amt)) return this.amtTypeError(amt);
					return amt * 9.3132e-7;
				},
			
				kilobitToGibibyte: function(amt){
					if(isNaN(amt)) return this.amtTypeError(amt);
					return amt * 1.1642e-7;
				},
			
				kilobitToTerabit: function(amt){
					if(isNaN(amt)) return this.amtTypeError(amt);
					return amt * 1e-9;
				},
			
				kilobitToTerabyte: function(amt){
					if(isNaN(amt)) return this.amtTypeError(amt);
					return amt * 1.25e-10;
				},
			
				kilobitToTebibit: function(amt){
					if(isNaN(amt)) return this.amtTypeError(amt);
					return amt * 9.0949e-10;
				},
			
				kilobitToTebibyte: function(amt){
					if(isNaN(amt)) return this.amtTypeError(amt);
					return amt * 1.1369e-10;
				},
			
				kilobitToPetabit: function(amt){
					if(isNaN(amt)) return this.amtTypeError(amt);
					return amt * 1e-12;
				},
			
				kilobitToPetabyte: function(amt){
					if(isNaN(amt)) return this.amtTypeError(amt);
					return amt * 1.25e-13;
				},
			
				kilobitToPebibit: function(amt){
					if(isNaN(amt)) return this.amtTypeError(amt);
					return amt * 8.8818e-13;
				},
			
				kilobitToPebibyte: function(amt){
					if(isNaN(amt)) return this.amtTypeError(amt);
					return amt * 1.1102e-13;
				},
			
				kilobyteToBit: function(amt){
					if(isNaN(amt)) return this.amtTypeError(amt);
					return amt * 8000;
				},
			
				kilobyteToByte: function(amt){
					if(isNaN(amt)) return this.amtTypeError(amt);
					return amt * 1000;
				},
			
				kilobyteToKilobit: function(amt){
					if(isNaN(amt)) return this.amtTypeError(amt);
					return amt * 8;
				},
			
				kilobyteToKibibit: function(amt){
					if(isNaN(amt)) return this.amtTypeError(amt);
					return amt * 7.8125;
				},
			
				kilobyteToKibibyte: function(amt){
					if(isNaN(amt)) return this.amtTypeError(amt);
					return amt * 0.976563;
				},
			
				kilobyteToMegabit: function(amt){
					if(isNaN(amt)) return this.amtTypeError(amt);
					return amt * 0.008;
				},
			
				kilobyteToMegabyte: function(amt){
					if(isNaN(amt)) return this.amtTypeError(amt);
					return amt * 0.001;
				},
			
				kilobyteToMebibit: function(amt){
					if(isNaN(amt)) return this.amtTypeError(amt);
					return amt * 0.00762939;
				},
			
				kilobyteToMebibyte: function(amt){
					if(isNaN(amt)) return this.amtTypeError(amt);
					return amt * 0.000953674;
				},
			
				kilobyteToGigabit: function(amt){
					if(isNaN(amt)) return this.amtTypeError(amt);
					return amt * 8e-6;
				},
			
				kilobyteToGigabyte: function(amt){
					if(isNaN(amt)) return this.amtTypeError(amt);
					return amt * 1e-6;
				},
			
				kilobyteToGibibit: function(amt){
					if(isNaN(amt)) return this.amtTypeError(amt);
					return amt * 7.4506e-6;
				},
			
				kilobyteToGibibyte: function(amt){
					if(isNaN(amt)) return this.amtTypeError(amt);
					return amt * 9.3132e-7;
				},
			
				kilobyteToTerabit: function(amt){
					if(isNaN(amt)) return this.amtTypeError(amt);
					return amt * 8e-9;
				},
			
				kilobyteToTerabyte: function(amt){
					if(isNaN(amt)) return this.amtTypeError(amt);
					return amt * 1e-9;
				},
			
				kilobyteToTebibit: function(amt){
					if(isNaN(amt)) return this.amtTypeError(amt);
					return amt * 7.276e-9;
				},
			
				kilobyteToTebibyte: function(amt){
					if(isNaN(amt)) return this.amtTypeError(amt);
					return amt * 9.0949e-10;
				},
			
				kilobyteToPetabit: function(amt){
					if(isNaN(amt)) return this.amtTypeError(amt);
					return amt * 8e-12;
				},
			
				kilobyteToPetabyte: function(amt){
					if(isNaN(amt)) return this.amtTypeError(amt);
					return amt * 1e-12;
				},
			
				kilobyteToPebibit: function(amt){
					if(isNaN(amt)) return this.amtTypeError(amt);
					return amt * 7.1054e-12;
				},
			
				kilobyteToPebibyte: function(amt){
					if(isNaN(amt)) return this.amtTypeError(amt);
					return amt * 8.8818e-13;
				},
			
				kibibitToBit: function(amt){
					if(isNaN(amt)) return this.amtTypeError(amt);
					return amt * 1024;
				},
			
				kibibitToByte: function(amt){
					if(isNaN(amt)) return this.amtTypeError(amt);
					return amt * 128;
				},
			
				kibibitToKilobit: function(amt){
					if(isNaN(amt)) return this.amtTypeError(amt);
					return amt * 1.024;
				},
			
				kibibitToKilobyte: function(amt){
					if(isNaN(amt)) return this.amtTypeError(amt);
					return amt * 0.128;
				},
			
				kibibitToKibibyte: function(amt){
					if(isNaN(amt)) return this.amtTypeError(amt);
					return amt * 0.125;
				},
			
				kibibitToMegabit: function(amt){
					if(isNaN(amt)) return this.amtTypeError(amt);
					return amt * 0.001024;
				},
			
				kibibitToMegabyte: function(amt){
					if(isNaN(amt)) return this.amtTypeError(amt);
					return amt * 0.000128;
				},
			
				kibibitToMebibit: function(amt){
					if(isNaN(amt)) return this.amtTypeError(amt);
					return amt * 0.000976563;
				},
			
				kibibitToMebibyte: function(amt){
					if(isNaN(amt)) return this.amtTypeError(amt);
					return amt * 0.00012207;
				},
			
				kibibitToGigabit: function(amt){
					if(isNaN(amt)) return this.amtTypeError(amt);
					return amt * 1.024e-6;
				},
			
				kibibitToGigabyte: function(amt){
					if(isNaN(amt)) return this.amtTypeError(amt);
					return amt * 1.28e-7;
				},
			
				kibibitToGibibit: function(amt){
					if(isNaN(amt)) return this.amtTypeError(amt);
					return amt * 9.5367e-7;
				},
			
				kibibitToGibibyte: function(amt){
					if(isNaN(amt)) return this.amtTypeError(amt);
					return amt * 1.1921e-7;
				},
			
				kibibitToTerabit: function(amt){
					if(isNaN(amt)) return this.amtTypeError(amt);
					return amt * 1.024e-9;
				},
			
				kibibitToTerabyte: function(amt){
					if(isNaN(amt)) return this.amtTypeError(amt);
					return amt * 1.28e-10;
				},
			
				kibibitToTebibit: function(amt){
					if(isNaN(amt)) return this.amtTypeError(amt);
					return amt * 9.3132e-10;
				},
			
				kibibitToTebibyte: function(amt){
					if(isNaN(amt)) return this.amtTypeError(amt);
					return amt * 1.1642e-10;
				},
			
				kibibitToPetabit: function(amt){
					if(isNaN(amt)) return this.amtTypeError(amt);
					return amt * 1.024e-12;
				},
			
				kibibitToPetabyte: function(amt){
					if(isNaN(amt)) return this.amtTypeError(amt);
					return amt * 1.28e-13;
				},
			
				kibibitToPebibit: function(amt){
					if(isNaN(amt)) return this.amtTypeError(amt);
					return amt * 9.0949e-13;
				},
			
				kibibitToPebibyte: function(amt){
					if(isNaN(amt)) return this.amtTypeError(amt);
					return amt * 1.1369e-13;
				},
			
				kibibyteToBit: function(amt){
					if(isNaN(amt)) return this.amtTypeError(amt);
					return amt * 8192;
				},
			
				kibibyteToByte: function(amt){
					if(isNaN(amt)) return this.amtTypeError(amt);
					return amt * 1024;
				},
			
				kibibyteToKilobit: function(amt){
					if(isNaN(amt)) return this.amtTypeError(amt);
					return amt * 8.192;
				},
			
				kibibyteToKilobyte: function(amt){
					if(isNaN(amt)) return this.amtTypeError(amt);
					return amt * 1.024;
				},
			
				kibibyteToKibibit: function(amt){
					if(isNaN(amt)) return this.amtTypeError(amt);
					return amt * 8;
				},
			
				kibibyteToMegabit: function(amt){
					if(isNaN(amt)) return this.amtTypeError(amt);
					return amt * 0.008192;
				},
			
				kibibyteToMegabyte: function(amt){
					if(isNaN(amt)) return this.amtTypeError(amt);
					return amt * 0.001024;
				},
			
				kibibyteToMebibit: function(amt){
					if(isNaN(amt)) return this.amtTypeError(amt);
					return amt * 0.0078125;
				},
			
				kibibyteToMebibyte: function(amt){
					if(isNaN(amt)) return this.amtTypeError(amt);
					return amt * 0.000976563;
				},
			
				kibibyteToGigabit: function(amt){
					if(isNaN(amt)) return this.amtTypeError(amt);
					return amt * 8.192e-6;
				},
			
				kibibyteToGigabyte: function(amt){
					if(isNaN(amt)) return this.amtTypeError(amt);
					return amt * 1.024e-6;
				},
			
				kibibyteToGibibit: function(amt){
					if(isNaN(amt)) return this.amtTypeError(amt);
					return amt * 7.6294e-6;
				},
			
				kibibyteToGibibyte: function(amt){
					if(isNaN(amt)) return this.amtTypeError(amt);
					return amt * 9.5367e-7;
				},
			
				kibibyteToTerabit: function(amt){
					if(isNaN(amt)) return this.amtTypeError(amt);
					return amt * 8.192e-9;
				},
			
				kibibyteToTerabyte: function(amt){
					if(isNaN(amt)) return this.amtTypeError(amt);
					return amt * 1.024e-9;
				},
			
				kibibyteToTebibit: function(amt){
					if(isNaN(amt)) return this.amtTypeError(amt);
					return amt * 7.4506e-9;
				},
			
				kibibyteToTebibyte: function(amt){
					if(isNaN(amt)) return this.amtTypeError(amt);
					return amt * 9.3132e-10;
				},
			
				kibibyteToPetabit: function(amt){
					if(isNaN(amt)) return this.amtTypeError(amt);
					return amt * 8.192e-12;
				},
			
				kibibyteToPetabyte: function(amt){
					if(isNaN(amt)) return this.amtTypeError(amt);
					return amt * 1.024e-12;
				},
			
				kibibyteToPebibit: function(amt){
					if(isNaN(amt)) return this.amtTypeError(amt);
					return amt * 7.276e-12;
				},
			
				kibibyteToPebibyte: function(amt){
					if(isNaN(amt)) return this.amtTypeError(amt);
					return amt * 9.0949e-13;
				},
			
				megabitToBit: function(amt){
					if(isNaN(amt)) return this.amtTypeError(amt);
					return amt * 1e+6;
				},
			
				megabitToByte: function(amt){
					if(isNaN(amt)) return this.amtTypeError(amt);
					return amt * 125000;
				},
			
				megabitToKilobit: function(amt){
					if(isNaN(amt)) return this.amtTypeError(amt);
					return amt * 1000;
				},
			
				megabitToKilobyte: function(amt){
					if(isNaN(amt)) return this.amtTypeError(amt);
					return amt * 125;
				},
			
				megabitToKibibit: function(amt){
					if(isNaN(amt)) return this.amtTypeError(amt);
					return amt * 976.563;
				},
			
				megabitToKibibyte: function(amt){
					if(isNaN(amt)) return this.amtTypeError(amt);
					return amt * 122.07;
				},
			
				megabitToMegabyte: function(amt){
					if(isNaN(amt)) return this.amtTypeError(amt);
					return amt * 0.125;
				},
			
				megabitToMebibit: function(amt){
					if(isNaN(amt)) return this.amtTypeError(amt);
					return amt * 0.953674;
				},
			
				megabitToMebibyte: function(amt){
					if(isNaN(amt)) return this.amtTypeError(amt);
					return amt * 0.119209;
				},
			
				megabitToGigabit: function(amt){
					if(isNaN(amt)) return this.amtTypeError(amt);
					return amt * 0.001;
				},
			
				megabitToGigabyte: function(amt){
					if(isNaN(amt)) return this.amtTypeError(amt);
					return amt * 0.000125;
				},
			
				megabitToGibibit: function(amt){
					if(isNaN(amt)) return this.amtTypeError(amt);
					return amt * 0.000931323;
				},
			
				megabitToGibibyte: function(amt){
					if(isNaN(amt)) return this.amtTypeError(amt);
					return amt * 0.000116415;
				},
			
				megabitToTerabit: function(amt){
					if(isNaN(amt)) return this.amtTypeError(amt);
					return amt * 1e-6;
				},
			
				megabitToTerabyte: function(amt){
					if(isNaN(amt)) return this.amtTypeError(amt);
					return amt * 1.25e-7;
				},
			
				megabitToTebibit: function(amt){
					if(isNaN(amt)) return this.amtTypeError(amt);
					return amt * 9.0949e-7;
				},
			
				megabitToTebibyte: function(amt){
					if(isNaN(amt)) return this.amtTypeError(amt);
					return amt * 1.1369e-7;
				},
			
				megabitToPetabit: function(amt){
					if(isNaN(amt)) return this.amtTypeError(amt);
					return amt * 1e-9;
				},
			
				megabitToPetabyte: function(amt){
					if(isNaN(amt)) return this.amtTypeError(amt);
					return amt * 1.25e-10;
				},
			
				megabitToPebibit: function(amt){
					if(isNaN(amt)) return this.amtTypeError(amt);
					return amt * 8.8818e-10;
				},
			
				megabitToPebibyte: function(amt){
					if(isNaN(amt)) return this.amtTypeError(amt);
					return amt * 1.1102e-10;
				},
			
				megabyteToBit: function(amt){
					if(isNaN(amt)) return this.amtTypeError(amt);
					return amt * 8e+6;
				},
			
				megabyteToByte: function(amt){
					if(isNaN(amt)) return this.amtTypeError(amt);
					return amt * 1e+6;
				},
			
				megabyteToKilobit: function(amt){
					if(isNaN(amt)) return this.amtTypeError(amt);
					return amt * 8000;
				},
			
				megabyteToKilobyte: function(amt){
					if(isNaN(amt)) return this.amtTypeError(amt);
					return amt * 1000;
				},
			
				megabyteToKibibit: function(amt){
					if(isNaN(amt)) return this.amtTypeError(amt);
					return amt * 7812.5;
				},
			
				megabyteToKibibyte: function(amt){
					if(isNaN(amt)) return this.amtTypeError(amt);
					return amt * 976.563;
				},
			
				megabyteToMegabit: function(amt){
					if(isNaN(amt)) return this.amtTypeError(amt);
					return amt * 8;
				},
			
				megabyteToMebibit: function(amt){
					if(isNaN(amt)) return this.amtTypeError(amt);
					return amt * 7.62939;
				},
			
				megabyteToMebibyte: function(amt){
					if(isNaN(amt)) return this.amtTypeError(amt);
					return amt * 0.953674;
				},
			
				megabyteToGigabit: function(amt){
					if(isNaN(amt)) return this.amtTypeError(amt);
					return amt * 0.008;
				},
			
				megabyteToGigabyte: function(amt){
					if(isNaN(amt)) return this.amtTypeError(amt);
					return amt * 0.001;
				},
			
				megabyteToGibibit: function(amt){
					if(isNaN(amt)) return this.amtTypeError(amt);
					return amt * 0.00745058;
				},
			
				megabyteToGibibyte: function(amt){
					if(isNaN(amt)) return this.amtTypeError(amt);
					return amt * 0.000931323;
				},
			
				megabyteToTerabit: function(amt){
					if(isNaN(amt)) return this.amtTypeError(amt);
					return amt * 8e-6;
				},
			
				megabyteToTerabyte: function(amt){
					if(isNaN(amt)) return this.amtTypeError(amt);
					return amt * 1e-6;
				},
			
				megabyteToTebibit: function(amt){
					if(isNaN(amt)) return this.amtTypeError(amt);
					return amt * 7.276e-6;
				},
			
				megabyteToTebibyte: function(amt){
					if(isNaN(amt)) return this.amtTypeError(amt);
					return amt * 9.0949e-7;
				},
			
				megabyteToPetabit: function(amt){
					if(isNaN(amt)) return this.amtTypeError(amt);
					return amt * 8e-9;
				},
			
				megabyteToPetabyte: function(amt){
					if(isNaN(amt)) return this.amtTypeError(amt);
					return amt * 1e-9;
				},
			
				megabyteToPebibit: function(amt){
					if(isNaN(amt)) return this.amtTypeError(amt);
					return amt * 7.1054e-9;
				},
			
				megabyteToPebibyte: function(amt){
					if(isNaN(amt)) return this.amtTypeError(amt);
					return amt * 8.8818e-10;
				},
			
				mebibitToBit: function(amt){
					if(isNaN(amt)) return this.amtTypeError(amt);
					return amt * 1.049e+6;
				},
			
				mebibitToByte: function(amt){
					if(isNaN(amt)) return this.amtTypeError(amt);
					return amt * 131072;
				},
			
				mebibitToKilobit: function(amt){
					if(isNaN(amt)) return this.amtTypeError(amt);
					return amt * 1048.58;
				},
			
				mebibitToKilobyte: function(amt){
					if(isNaN(amt)) return this.amtTypeError(amt);
					return amt * 131.072;
				},
			
				mebibitToKibibit: function(amt){
					if(isNaN(amt)) return this.amtTypeError(amt);
					return amt * 1024;
				},
			
				mebibitToKibibyte: function(amt){
					if(isNaN(amt)) return this.amtTypeError(amt);
					return amt * 128;
				},
			
				mebibitToMegabit: function(amt){
					if(isNaN(amt)) return this.amtTypeError(amt);
					return amt * 1.04858;
				},
			
				mebibitToMegabyte: function(amt){
					if(isNaN(amt)) return this.amtTypeError(amt);
					return amt * 0.131072;
				},
			
				mebibitToMebibyte: function(amt){
					if(isNaN(amt)) return this.amtTypeError(amt);
					return amt * 0.125;
				},
			
				mebibitToGigabit: function(amt){
					if(isNaN(amt)) return this.amtTypeError(amt);
					return amt * 0.00104858;
				},
			
				mebibitToGigabyte: function(amt){
					if(isNaN(amt)) return this.amtTypeError(amt);
					return amt * 0.000131072;
				},
			
				mebibitToGibibit: function(amt){
					if(isNaN(amt)) return this.amtTypeError(amt);
					return amt * 0.000976563;
				},
			
				mebibitToGibibyte: function(amt){
					if(isNaN(amt)) return this.amtTypeError(amt);
					return amt * 0.00012207;
				},
			
				mebibitToTerabit: function(amt){
					if(isNaN(amt)) return this.amtTypeError(amt);
					return amt * 1.0486e-6;
				},
			
				mebibitToTerabyte: function(amt){
					if(isNaN(amt)) return this.amtTypeError(amt);
					return amt * 1.3107e-7;
				},
			
				mebibitToTebibit: function(amt){
					if(isNaN(amt)) return this.amtTypeError(amt);
					return amt * 9.5367e-7;
				},
			
				mebibitToTebibyte: function(amt){
					if(isNaN(amt)) return this.amtTypeError(amt);
					return amt * 1.1921e-7;
				},
			
				mebibitToPetabit: function(amt){
					if(isNaN(amt)) return this.amtTypeError(amt);
					return amt * 1.0486e-9;
				},
			
				mebibitToPetabyte: function(amt){
					if(isNaN(amt)) return this.amtTypeError(amt);
					return amt * 1.3107e-10;
				},
			
				mebibitToPebibit: function(amt){
					if(isNaN(amt)) return this.amtTypeError(amt);
					return amt * 9.3132e-10;
				},
			
				mebibitToPebibyte: function(amt){
					if(isNaN(amt)) return this.amtTypeError(amt);
					return amt * 1.1642e-10;
				},
			
				mebibyteToBit: function(amt){
					if(isNaN(amt)) return this.amtTypeError(amt);
					return amt * 8.389e+6;
				},
			
				mebibyteToByte: function(amt){
					if(isNaN(amt)) return this.amtTypeError(amt);
					return amt * 1.049e+6;
				},
			
				mebibyteToKilobit: function(amt){
					if(isNaN(amt)) return this.amtTypeError(amt);
					return amt * 8388.61;
				},
			
				mebibyteToKilobyte: function(amt){
					if(isNaN(amt)) return this.amtTypeError(amt);
					return amt * 1048.58;
				},
			
				mebibyteToKibibit: function(amt){
					if(isNaN(amt)) return this.amtTypeError(amt);
					return amt * 8192;
				},
			
				mebibyteToKibibyte: function(amt){
					if(isNaN(amt)) return this.amtTypeError(amt);
					return amt * 1024;
				},
			
				mebibyteToMegabit: function(amt){
					if(isNaN(amt)) return this.amtTypeError(amt);
					return amt * 8.38861;
				},
			
				mebibyteToMegabyte: function(amt){
					if(isNaN(amt)) return this.amtTypeError(amt);
					return amt * 1.04858;
				},
			
				mebibyteToMebibit: function(amt){
					if(isNaN(amt)) return this.amtTypeError(amt);
					return amt * 8;
				},
			
				mebibyteToGigabit: function(amt){
					if(isNaN(amt)) return this.amtTypeError(amt);
					return amt * 0.00838861;
				},
			
				mebibyteToGigabyte: function(amt){
					if(isNaN(amt)) return this.amtTypeError(amt);
					return amt * 0.00104858;
				},
			
				mebibyteToGibibit: function(amt){
					if(isNaN(amt)) return this.amtTypeError(amt);
					return amt * 0.0078125;
				},
			
				mebibyteToGibibyte: function(amt){
					if(isNaN(amt)) return this.amtTypeError(amt);
					return amt * 0.000976563;
				},
			
				mebibyteToTerabit: function(amt){
					if(isNaN(amt)) return this.amtTypeError(amt);
					return amt * 8.3886e-6;
				},
			
				mebibyteToTerabyte: function(amt){
					if(isNaN(amt)) return this.amtTypeError(amt);
					return amt * 1.0486e-6;
				},
			
				mebibyteToTebibit: function(amt){
					if(isNaN(amt)) return this.amtTypeError(amt);
					return amt * 7.6294e-6;
				},
			
				mebibyteToTebibyte: function(amt){
					if(isNaN(amt)) return this.amtTypeError(amt);
					return amt * 9.5367e-7;
				},
			
				mebibyteToPetabit: function(amt){
					if(isNaN(amt)) return this.amtTypeError(amt);
					return amt * 8.3886e-9;
				},
			
				mebibyteToPetabyte: function(amt){
					if(isNaN(amt)) return this.amtTypeError(amt);
					return amt * 1.0486e-9;
				},
			
				mebibyteToPebibit: function(amt){
					if(isNaN(amt)) return this.amtTypeError(amt);
					return amt * 7.4506e-9;
				},
			
				mebibyteToPebibyte: function(amt){
					if(isNaN(amt)) return this.amtTypeError(amt);
					return amt * 9.3132e-10;
				},
			
				gigabitToBit: function(amt){
					if(isNaN(amt)) return this.amtTypeError(amt);
					return amt * 1e+9;
				},
			
				gigabitToByte: function(amt){
					if(isNaN(amt)) return this.amtTypeError(amt);
					return amt * 1.25e+8;
				},
			
				gigabitToKilobit: function(amt){
					if(isNaN(amt)) return this.amtTypeError(amt);
					return amt * 1e+6;
				},
			
				gigabitToKilobyte: function(amt){
					if(isNaN(amt)) return this.amtTypeError(amt);
					return amt * 125000;
				},
			
				gigabitToKibibit: function(amt){
					if(isNaN(amt)) return this.amtTypeError(amt);
					return amt * 976563;
				},
			
				gigabitToKibibyte: function(amt){
					if(isNaN(amt)) return this.amtTypeError(amt);
					return amt * 122070;
				},
			
				gigabitToMegabit: function(amt){
					if(isNaN(amt)) return this.amtTypeError(amt);
					return amt * 1000;
				},
			
				gigabitToMegabyte: function(amt){
					if(isNaN(amt)) return this.amtTypeError(amt);
					return amt * 125;
				},
			
				gigabitToMebibit: function(amt){
					if(isNaN(amt)) return this.amtTypeError(amt);
					return amt * 953.674;
				},
			
				gigabitToMebibyte: function(amt){
					if(isNaN(amt)) return this.amtTypeError(amt);
					return amt * 119.209;
				},
			
				gigabitToGigabyte: function(amt){
					if(isNaN(amt)) return this.amtTypeError(amt);
					return amt * 0.125;
				},
			
				gigabitToGibibit: function(amt){
					if(isNaN(amt)) return this.amtTypeError(amt);
					return amt * 0.931323;
				},
			
				gigabitToGibibyte: function(amt){
					if(isNaN(amt)) return this.amtTypeError(amt);
					return amt * 0.116415;
				},
			
				gigabitToTerabit: function(amt){
					if(isNaN(amt)) return this.amtTypeError(amt);
					return amt * 0.001;
				},
			
				gigabitToTerabyte: function(amt){
					if(isNaN(amt)) return this.amtTypeError(amt);
					return amt * 0.000125;
				},
			
				gigabitToTebibit: function(amt){
					if(isNaN(amt)) return this.amtTypeError(amt);
					return amt * 0.000909495;
				},
			
				gigabitToTebibyte: function(amt){
					if(isNaN(amt)) return this.amtTypeError(amt);
					return amt * 0.000113687;
				},
			
				gigabitToPetabit: function(amt){
					if(isNaN(amt)) return this.amtTypeError(amt);
					return amt * 1e-6;
				},
			
				gigabitToPetabyte: function(amt){
					if(isNaN(amt)) return this.amtTypeError(amt);
					return amt * 1.25e-7;
				},
			
				gigabitToPebibit: function(amt){
					if(isNaN(amt)) return this.amtTypeError(amt);
					return amt * 8.8818e-7;
				},
			
				gigabitToPebibyte: function(amt){
					if(isNaN(amt)) return this.amtTypeError(amt);
					return amt * 1.1102e-7;
				},
			
				gigabyteToBit: function(amt){
					if(isNaN(amt)) return this.amtTypeError(amt);
					return amt * 8e+9;
				},
			
				gigabyteToByte: function(amt){
					if(isNaN(amt)) return this.amtTypeError(amt);
					return amt * 1e+9;
				},
			
				gigabyteToKilobit: function(amt){
					if(isNaN(amt)) return this.amtTypeError(amt);
					return amt * 8e+6;
				},
			
				gigabyteToKilobyte: function(amt){
					if(isNaN(amt)) return this.amtTypeError(amt);
					return amt * 1e+6;
				},
			
				gigabyteToKibibit: function(amt){
					if(isNaN(amt)) return this.amtTypeError(amt);
					return amt * 7.813e+6;
				},
			
				gigabyteToKibibyte: function(amt){
					if(isNaN(amt)) return this.amtTypeError(amt);
					return amt * 976563;
				},
			
				gigabyteToMegabit: function(amt){
					if(isNaN(amt)) return this.amtTypeError(amt);
					return amt * 8000;
				},
			
				gigabyteToMegabyte: function(amt){
					if(isNaN(amt)) return this.amtTypeError(amt);
					return amt * 1000;
				},
			
				gigabyteToMebibit: function(amt){
					if(isNaN(amt)) return this.amtTypeError(amt);
					return amt * 7629.39;
				},
			
				gigabyteToMebibyte: function(amt){
					if(isNaN(amt)) return this.amtTypeError(amt);
					return amt * 953.674;
				},
			
				gigabyteToGigabit: function(amt){
					if(isNaN(amt)) return this.amtTypeError(amt);
					return amt * 8;
				},
			
				gigabyteToGibibit: function(amt){
					if(isNaN(amt)) return this.amtTypeError(amt);
					return amt * 7.45058;
				},
			
				gigabyteToGibibyte: function(amt){
					if(isNaN(amt)) return this.amtTypeError(amt);
					return amt * 0.931323;
				},
			
				gigabyteToTerabit: function(amt){
					if(isNaN(amt)) return this.amtTypeError(amt);
					return amt * 0.008;
				},
			
				gigabyteToTerabyte: function(amt){
					if(isNaN(amt)) return this.amtTypeError(amt);
					return amt * 0.001;
				},
			
				gigabyteToTebibit: function(amt){
					if(isNaN(amt)) return this.amtTypeError(amt);
					return amt * 0.00727596;
				},
			
				gigabyteToTebibyte: function(amt){
					if(isNaN(amt)) return this.amtTypeError(amt);
					return amt * 0.000909495;
				},
			
				gigabyteToPetabit: function(amt){
					if(isNaN(amt)) return this.amtTypeError(amt);
					return amt * 8e-6;
				},
			
				gigabyteToPetabyte: function(amt){
					if(isNaN(amt)) return this.amtTypeError(amt);
					return amt * 1e-6;
				},
			
				gigabyteToPebibit: function(amt){
					if(isNaN(amt)) return this.amtTypeError(amt);
					return amt * 7.1054e-6;
				},
			
				gigabyteToPebibyte: function(amt){
					if(isNaN(amt)) return this.amtTypeError(amt);
					return amt * 8.8818e-7;
				},
			
				gibibitToBit: function(amt){
					if(isNaN(amt)) return this.amtTypeError(amt);
					return amt * 1.074e+9;
				},
			
				gibibitToByte: function(amt){
					if(isNaN(amt)) return this.amtTypeError(amt);
					return amt * 1.342e+8;
				},
			
				gibibitToKilobit: function(amt){
					if(isNaN(amt)) return this.amtTypeError(amt);
					return amt * 1.074e+6;
				},
			
				gibibitToKilobyte: function(amt){
					if(isNaN(amt)) return this.amtTypeError(amt);
					return amt * 134218;
				},
			
				gibibitToKibibit: function(amt){
					if(isNaN(amt)) return this.amtTypeError(amt);
					return amt * 1.049e+6;
				},
			
				gibibitToKibibyte: function(amt){
					if(isNaN(amt)) return this.amtTypeError(amt);
					return amt * 131072;
				},
			
				gibibitToMegabit: function(amt){
					if(isNaN(amt)) return this.amtTypeError(amt);
					return amt * 1073.74;
				},
			
				gibibitToMegabyte: function(amt){
					if(isNaN(amt)) return this.amtTypeError(amt);
					return amt * 134.218;
				},
			
				gibibitToMebibit: function(amt){
					if(isNaN(amt)) return this.amtTypeError(amt);
					return amt * 1024;
				},
			
				gibibitToMebibyte: function(amt){
					if(isNaN(amt)) return this.amtTypeError(amt);
					return amt * 128;
				},
			
				gibibitToGigabit: function(amt){
					if(isNaN(amt)) return this.amtTypeError(amt);
					return amt * 1.07374;
				},
			
				gibibitToGigabyte: function(amt){
					if(isNaN(amt)) return this.amtTypeError(amt);
					return amt * 0.134218;
				},
			
				gibibitToGibibyte: function(amt){
					if(isNaN(amt)) return this.amtTypeError(amt);
					return amt * 0.125;
				},
			
				gibibitToTerabit: function(amt){
					if(isNaN(amt)) return this.amtTypeError(amt);
					return amt * 0.00107374;
				},
			
				gibibitToTerabyte: function(amt){
					if(isNaN(amt)) return this.amtTypeError(amt);
					return amt * 0.000134218;
				},
			
				gibibitToTebibit: function(amt){
					if(isNaN(amt)) return this.amtTypeError(amt);
					return amt * 0.000976563;
				},
			
				gibibitToTebibyte: function(amt){
					if(isNaN(amt)) return this.amtTypeError(amt);
					return amt * 0.00012207;
				},
			
				gibibitToPetabit: function(amt){
					if(isNaN(amt)) return this.amtTypeError(amt);
					return amt * 1.0737e-6;
				},
			
				gibibitToPetabyte: function(amt){
					if(isNaN(amt)) return this.amtTypeError(amt);
					return amt * 1.3422e-7;
				},
			
				gibibitToPebibit: function(amt){
					if(isNaN(amt)) return this.amtTypeError(amt);
					return amt * 9.5367e-7;
				},
			
				gibibitToPebibyte: function(amt){
					if(isNaN(amt)) return this.amtTypeError(amt);
					return amt * 1.1921e-7;
				},
			
				gibibyteToBit: function(amt){
					if(isNaN(amt)) return this.amtTypeError(amt);
					return amt * 8.59e+9;
				},
			
				gibibyteToByte: function(amt){
					if(isNaN(amt)) return this.amtTypeError(amt);
					return amt * 1.074e+9;
				},
			
				gibibyteToKilobit: function(amt){
					if(isNaN(amt)) return this.amtTypeError(amt);
					return amt * 8.59e+6;
				},
			
				gibibyteToKilobyte: function(amt){
					if(isNaN(amt)) return this.amtTypeError(amt);
					return amt * 1.074e+6;
				},
			
				gibibyteToKibibit: function(amt){
					if(isNaN(amt)) return this.amtTypeError(amt);
					return amt * 8.389e+6;
				},
			
				gibibyteToKibibyte: function(amt){
					if(isNaN(amt)) return this.amtTypeError(amt);
					return amt * 1.049e+6;
				},
			
				gibibyteToMegabit: function(amt){
					if(isNaN(amt)) return this.amtTypeError(amt);
					return amt * 8589.93;
				},
			
				gibibyteToMegabyte: function(amt){
					if(isNaN(amt)) return this.amtTypeError(amt);
					return amt * 1073.74;
				},
			
				gibibyteToMebibit: function(amt){
					if(isNaN(amt)) return this.amtTypeError(amt);
					return amt * 8192;
				},
			
				gibibyteToMebibyte: function(amt){
					if(isNaN(amt)) return this.amtTypeError(amt);
					return amt * 1024;
				},
			
				gibibyteToGigabit: function(amt){
					if(isNaN(amt)) return this.amtTypeError(amt);
					return amt * 8.58993;
				},
			
				gibibyteToGigabyte: function(amt){
					if(isNaN(amt)) return this.amtTypeError(amt);
					return amt * 1.07374;
				},
			
				gibibyteToGibibit: function(amt){
					if(isNaN(amt)) return this.amtTypeError(amt);
					return amt * 8;
				},
			
				gibibyteToTerabit: function(amt){
					if(isNaN(amt)) return this.amtTypeError(amt);
					return amt * 0.00858993;
				},
			
				gibibyteToTerabyte: function(amt){
					if(isNaN(amt)) return this.amtTypeError(amt);
					return amt * 0.00107374;
				},
			
				gibibyteToTebibit: function(amt){
					if(isNaN(amt)) return this.amtTypeError(amt);
					return amt * 0.0078125;
				},
			
				gibibyteToTebibyte: function(amt){
					if(isNaN(amt)) return this.amtTypeError(amt);
					return amt * 0.000976563;
				},
			
				gibibyteToPetabit: function(amt){
					if(isNaN(amt)) return this.amtTypeError(amt);
					return amt * 8.5899e-6;
				},
			
				gibibyteToPetabyte: function(amt){
					if(isNaN(amt)) return this.amtTypeError(amt);
					return amt * 1.0737e-6;
				},
			
				gibibyteToPebibit: function(amt){
					if(isNaN(amt)) return this.amtTypeError(amt);
					return amt * 7.6294e-6;
				},
			
				gibibyteToPebibyte: function(amt){
					if(isNaN(amt)) return this.amtTypeError(amt);
					return amt * 9.5367e-7;
				},
			
				terabitToBit: function(amt){
					if(isNaN(amt)) return this.amtTypeError(amt);
					return amt * 1e+12;
				},
			
				terabitToByte: function(amt){
					if(isNaN(amt)) return this.amtTypeError(amt);
					return amt * 1.25e+11;
				},
			
				terabitToKilobit: function(amt){
					if(isNaN(amt)) return this.amtTypeError(amt);
					return amt * 1e+9;
				},
			
				terabitToKilobyte: function(amt){
					if(isNaN(amt)) return this.amtTypeError(amt);
					return amt * 1.25e+8;
				},
			
				terabitToKibibit: function(amt){
					if(isNaN(amt)) return this.amtTypeError(amt);
					return amt * 9.766e+8;
				},
			
				terabitToKibibyte: function(amt){
					if(isNaN(amt)) return this.amtTypeError(amt);
					return amt * 1.221e+8;
				},
			
				terabitToMegabit: function(amt){
					if(isNaN(amt)) return this.amtTypeError(amt);
					return amt * 1e+6;
				},
			
				terabitToMegabyte: function(amt){
					if(isNaN(amt)) return this.amtTypeError(amt);
					return amt * 125000;
				},
			
				terabitToMebibit: function(amt){
					if(isNaN(amt)) return this.amtTypeError(amt);
					return amt * 953674;
				},
			
				terabitToMebibyte: function(amt){
					if(isNaN(amt)) return this.amtTypeError(amt);
					return amt * 119209;
				},
			
				terabitToGigabit: function(amt){
					if(isNaN(amt)) return this.amtTypeError(amt);
					return amt * 1000;
				},
			
				terabitToGigabyte: function(amt){
					if(isNaN(amt)) return this.amtTypeError(amt);
					return amt * 125;
				},
			
				terabitToGibibit: function(amt){
					if(isNaN(amt)) return this.amtTypeError(amt);
					return amt * 931.323;
				},
			
				terabitToGibibyte: function(amt){
					if(isNaN(amt)) return this.amtTypeError(amt);
					return amt * 116.415;
				},
			
				terabitToTerabyte: function(amt){
					if(isNaN(amt)) return this.amtTypeError(amt);
					return amt * 0.125;
				},
			
				terabitToTebibit: function(amt){
					if(isNaN(amt)) return this.amtTypeError(amt);
					return amt * 0.909495;
				},
			
				terabitToTebibyte: function(amt){
					if(isNaN(amt)) return this.amtTypeError(amt);
					return amt * 0.113687;
				},
			
				terabitToPetabit: function(amt){
					if(isNaN(amt)) return this.amtTypeError(amt);
					return amt * 0.001;
				},
			
				terabitToPetabyte: function(amt){
					if(isNaN(amt)) return this.amtTypeError(amt);
					return amt * 0.000125;
				},
			
				terabitToPebibit: function(amt){
					if(isNaN(amt)) return this.amtTypeError(amt);
					return amt * 0.000888178;
				},
			
				terabitToPebibyte: function(amt){
					if(isNaN(amt)) return this.amtTypeError(amt);
					return amt * 0.000111022;
				},
			
				terabyteToBit: function(amt){
					if(isNaN(amt)) return this.amtTypeError(amt);
					return amt * 8e+12;
				},
			
				terabyteToByte: function(amt){
					if(isNaN(amt)) return this.amtTypeError(amt);
					return amt * 1e+12;
				},
			
				terabyteToKilobit: function(amt){
					if(isNaN(amt)) return this.amtTypeError(amt);
					return amt * 8e+9;
				},
			
				terabyteToKilobyte: function(amt){
					if(isNaN(amt)) return this.amtTypeError(amt);
					return amt * 1e+9;
				},
			
				terabyteToKibibit: function(amt){
					if(isNaN(amt)) return this.amtTypeError(amt);
					return amt * 7.813e+9;
				},
			
				terabyteToKibibyte: function(amt){
					if(isNaN(amt)) return this.amtTypeError(amt);
					return amt * 9.766e+8;
				},
			
				terabyteToMegabit: function(amt){
					if(isNaN(amt)) return this.amtTypeError(amt);
					return amt * 8e+6;
				},
			
				terabyteToMegabyte: function(amt){
					if(isNaN(amt)) return this.amtTypeError(amt);
					return amt * 1e+6;
				},
			
				terabyteToMebibit: function(amt){
					if(isNaN(amt)) return this.amtTypeError(amt);
					return amt * 7.629e+6;
				},
			
				terabyteToMebibyte: function(amt){
					if(isNaN(amt)) return this.amtTypeError(amt);
					return amt * 953674;
				},
			
				terabyteToGigabit: function(amt){
					if(isNaN(amt)) return this.amtTypeError(amt);
					return amt * 8000;
				},
			
				terabyteToGigabyte: function(amt){
					if(isNaN(amt)) return this.amtTypeError(amt);
					return amt * 1000;
				},
			
				terabyteToGibibit: function(amt){
					if(isNaN(amt)) return this.amtTypeError(amt);
					return amt * 7450.58;
				},
			
				terabyteToGibibyte: function(amt){
					if(isNaN(amt)) return this.amtTypeError(amt);
					return amt * 931.323;
				},
			
				terabyteToTerabit: function(amt){
					if(isNaN(amt)) return this.amtTypeError(amt);
					return amt * 8;
				},
			
				terabyteToTebibit: function(amt){
					if(isNaN(amt)) return this.amtTypeError(amt);
					return amt * 7.27596;
				},
			
				terabyteToTebibyte: function(amt){
					if(isNaN(amt)) return this.amtTypeError(amt);
					return amt * 0.909495;
				},
			
				terabyteToPetabit: function(amt){
					if(isNaN(amt)) return this.amtTypeError(amt);
					return amt * 0.008;
				},
			
				terabyteToPetabyte: function(amt){
					if(isNaN(amt)) return this.amtTypeError(amt);
					return amt * 0.001;
				},
			
				terabyteToPebibit: function(amt){
					if(isNaN(amt)) return this.amtTypeError(amt);
					return amt * 0.00710543;
				},
			
				terabyteToPebibyte: function(amt){
					if(isNaN(amt)) return this.amtTypeError(amt);
					return amt * 0.000888178;
				},
			
				tebibitToBit: function(amt){
					if(isNaN(amt)) return this.amtTypeError(amt);
					return amt * 1.1e+12;
				},
			
				tebibitToByte: function(amt){
					if(isNaN(amt)) return this.amtTypeError(amt);
					return amt * 1.374e+11;
				},
			
				tebibitToKilobit: function(amt){
					if(isNaN(amt)) return this.amtTypeError(amt);
					return amt * 1.1e+9;
				},
			
				tebibitToKilobyte: function(amt){
					if(isNaN(amt)) return this.amtTypeError(amt);
					return amt * 1.374e+8;
				},
			
				tebibitToKibibit: function(amt){
					if(isNaN(amt)) return this.amtTypeError(amt);
					return amt * 1.074e+9;
				},
			
				tebibitToKibibyte: function(amt){
					if(isNaN(amt)) return this.amtTypeError(amt);
					return amt * 1.342e+8;
				},
			
				tebibitToMegabit: function(amt){
					if(isNaN(amt)) return this.amtTypeError(amt);
					return amt * 1.1e+6;
				},
			
				tebibitToMegabyte: function(amt){
					if(isNaN(amt)) return this.amtTypeError(amt);
					return amt * 137439;
				},
			
				tebibitToMebibit: function(amt){
					if(isNaN(amt)) return this.amtTypeError(amt);
					return amt * 1.049e+6;
				},
			
				tebibitToMebibyte: function(amt){
					if(isNaN(amt)) return this.amtTypeError(amt);
					return amt * 131072;
				},
			
				tebibitToGigabit: function(amt){
					if(isNaN(amt)) return this.amtTypeError(amt);
					return amt * 1099.51;
				},
			
				tebibitToGigabyte: function(amt){
					if(isNaN(amt)) return this.amtTypeError(amt);
					return amt * 137.439;
				},
			
				tebibitToGibibit: function(amt){
					if(isNaN(amt)) return this.amtTypeError(amt);
					return amt * 1024;
				},
			
				tebibitToGibibyte: function(amt){
					if(isNaN(amt)) return this.amtTypeError(amt);
					return amt * 128;
				},
			
				tebibitToTerabit: function(amt){
					if(isNaN(amt)) return this.amtTypeError(amt);
					return amt * 1.09951;
				},
			
				tebibitToTerabyte: function(amt){
					if(isNaN(amt)) return this.amtTypeError(amt);
					return amt * 0.137439;
				},
			
				tebibitToTebibyte: function(amt){
					if(isNaN(amt)) return this.amtTypeError(amt);
					return amt * 0.125;
				},
			
				tebibitToPetabit: function(amt){
					if(isNaN(amt)) return this.amtTypeError(amt);
					return amt * 0.00109951;
				},
			
				tebibitToPetabyte: function(amt){
					if(isNaN(amt)) return this.amtTypeError(amt);
					return amt * 0.000137439;
				},
			
				tebibitToPebibit: function(amt){
					if(isNaN(amt)) return this.amtTypeError(amt);
					return amt * 0.000976563;
				},
			
				tebibitToPebibyte: function(amt){
					if(isNaN(amt)) return this.amtTypeError(amt);
					return amt * 0.00012207;
				},
			
				tebibyteToBit: function(amt){
					if(isNaN(amt)) return this.amtTypeError(amt);
					return amt * 8.796e+12;
				},
			
				tebibyteToByte: function(amt){
					if(isNaN(amt)) return this.amtTypeError(amt);
					return amt * 1.1e+12;
				},
			
				tebibyteToKilobit: function(amt){
					if(isNaN(amt)) return this.amtTypeError(amt);
					return amt * 8.796e+9;
				},
			
				tebibyteToKilobyte: function(amt){
					if(isNaN(amt)) return this.amtTypeError(amt);
					return amt * 1.1e+9;
				},
			
				tebibyteToKibibit: function(amt){
					if(isNaN(amt)) return this.amtTypeError(amt);
					return amt * 8.59e+9;
				},
			
				tebibyteToKibibyte: function(amt){
					if(isNaN(amt)) return this.amtTypeError(amt);
					return amt * 1.074e+9;
				},
			
				tebibyteToMegabit: function(amt){
					if(isNaN(amt)) return this.amtTypeError(amt);
					return amt * 8.796e+6;
				},
			
				tebibyteToMegabyte: function(amt){
					if(isNaN(amt)) return this.amtTypeError(amt);
					return amt * 1.1e+6;
				},
			
				tebibyteToMebibit: function(amt){
					if(isNaN(amt)) return this.amtTypeError(amt);
					return amt * 8.389e+6;
				},
			
				tebibyteToMebibyte: function(amt){
					if(isNaN(amt)) return this.amtTypeError(amt);
					return amt * 1.049e+6;
				},
			
				tebibyteToGigabit: function(amt){
					if(isNaN(amt)) return this.amtTypeError(amt);
					return amt * 8796.09;
				},
			
				tebibyteToGigabyte: function(amt){
					if(isNaN(amt)) return this.amtTypeError(amt);
					return amt * 1099.51;
				},
			
				tebibyteToGibibit: function(amt){
					if(isNaN(amt)) return this.amtTypeError(amt);
					return amt * 8192;
				},
			
				tebibyteToGibibyte: function(amt){
					if(isNaN(amt)) return this.amtTypeError(amt);
					return amt * 1024;
				},
			
				tebibyteToTerabit: function(amt){
					if(isNaN(amt)) return this.amtTypeError(amt);
					return amt * 8.79609;
				},
			
				tebibyteToTerabyte: function(amt){
					if(isNaN(amt)) return this.amtTypeError(amt);
					return amt * 1.09951;
				},
			
				tebibyteToTebibit: function(amt){
					if(isNaN(amt)) return this.amtTypeError(amt);
					return amt * 8;
				},
			
				tebibyteToPetabit: function(amt){
					if(isNaN(amt)) return this.amtTypeError(amt);
					return amt * 0.00879609;
				},
			
				tebibyteToPetabyte: function(amt){
					if(isNaN(amt)) return this.amtTypeError(amt);
					return amt * 0.00109951;
				},
			
				tebibyteToPebibit: function(amt){
					if(isNaN(amt)) return this.amtTypeError(amt);
					return amt * 0.0078125;
				},
			
				tebibyteToPebibyte: function(amt){
					if(isNaN(amt)) return this.amtTypeError(amt);
					return amt * 0.000976563;
				},
			
				petabitToBit: function(amt){
					if(isNaN(amt)) return this.amtTypeError(amt);
					return amt * 1e+15;
				},
			
				petabitToByte: function(amt){
					if(isNaN(amt)) return this.amtTypeError(amt);
					return amt * 1.25e+14;
				},
			
				petabitToKilobit: function(amt){
					if(isNaN(amt)) return this.amtTypeError(amt);
					return amt * 1e+12;
				},
			
				petabitToKilobyte: function(amt){
					if(isNaN(amt)) return this.amtTypeError(amt);
					return amt * 1.25e+11;
				},
			
				petabitToKibibit: function(amt){
					if(isNaN(amt)) return this.amtTypeError(amt);
					return amt * 9.766e+11;
				},
			
				petabitToKibibyte: function(amt){
					if(isNaN(amt)) return this.amtTypeError(amt);
					return amt * 1.221e+11;
				},
			
				petabitToMegabit: function(amt){
					if(isNaN(amt)) return this.amtTypeError(amt);
					return amt * 1e+9;
				},
			
				petabitToMegabyte: function(amt){
					if(isNaN(amt)) return this.amtTypeError(amt);
					return amt * 1.25e+8;
				},
			
				petabitToMebibit: function(amt){
					if(isNaN(amt)) return this.amtTypeError(amt);
					return amt * 9.537e+8;
				},
			
				petabitToMebibyte: function(amt){
					if(isNaN(amt)) return this.amtTypeError(amt);
					return amt * 1.192e+8;
				},
			
				petabitToGigabit: function(amt){
					if(isNaN(amt)) return this.amtTypeError(amt);
					return amt * 1e+6;
				},
			
				petabitToGigabyte: function(amt){
					if(isNaN(amt)) return this.amtTypeError(amt);
					return amt * 125000;
				},
			
				petabitToGibibit: function(amt){
					if(isNaN(amt)) return this.amtTypeError(amt);
					return amt * 931323;
				},
			
				petabitToGibibyte: function(amt){
					if(isNaN(amt)) return this.amtTypeError(amt);
					return amt * 116415;
				},
			
				petabitToTerabit: function(amt){
					if(isNaN(amt)) return this.amtTypeError(amt);
					return amt * 1000;
				},
			
				petabitToTerabyte: function(amt){
					if(isNaN(amt)) return this.amtTypeError(amt);
					return amt * 125;
				},
			
				petabitToTebibit: function(amt){
					if(isNaN(amt)) return this.amtTypeError(amt);
					return amt * 909.495;
				},
			
				petabitToTebibyte: function(amt){
					if(isNaN(amt)) return this.amtTypeError(amt);
					return amt * 113.687;
				},
			
				petabitToPetabyte: function(amt){
					if(isNaN(amt)) return this.amtTypeError(amt);
					return amt * 0.125;
				},
			
				petabitToPebibit: function(amt){
					if(isNaN(amt)) return this.amtTypeError(amt);
					return amt * 0.888178;
				},
			
				petabitToPebibyte: function(amt){
					if(isNaN(amt)) return this.amtTypeError(amt);
					return amt * 0.111022;
				},
			
				petabyteToBit: function(amt){
					if(isNaN(amt)) return this.amtTypeError(amt);
					return amt * 8e+15;
				},
			
				petabyteToByte: function(amt){
					if(isNaN(amt)) return this.amtTypeError(amt);
					return amt * 1e+15;
				},
			
				petabyteToKilobit: function(amt){
					if(isNaN(amt)) return this.amtTypeError(amt);
					return amt * 8e+12;
				},
			
				petabyteToKilobyte: function(amt){
					if(isNaN(amt)) return this.amtTypeError(amt);
					return amt * 1e+12;
				},
			
				petabyteToKibibit: function(amt){
					if(isNaN(amt)) return this.amtTypeError(amt);
					return amt * 7.813e+12;
				},
			
				petabyteToKibibyte: function(amt){
					if(isNaN(amt)) return this.amtTypeError(amt);
					return amt * 9.766e+11;
				},
			
				petabyteToMegabit: function(amt){
					if(isNaN(amt)) return this.amtTypeError(amt);
					return amt * 8e+9;
				},
			
				petabyteToMegabyte: function(amt){
					if(isNaN(amt)) return this.amtTypeError(amt);
					return amt * 1e+9;
				},
			
				petabyteToMebibit: function(amt){
					if(isNaN(amt)) return this.amtTypeError(amt);
					return amt * 7.629e+9;
				},
			
				petabyteToMebibyte: function(amt){
					if(isNaN(amt)) return this.amtTypeError(amt);
					return amt * 9.537e+8;
				},
			
				petabyteToGigabit: function(amt){
					if(isNaN(amt)) return this.amtTypeError(amt);
					return amt * 8e+6;
				},
			
				petabyteToGigabyte: function(amt){
					if(isNaN(amt)) return this.amtTypeError(amt);
					return amt * 1e+6;
				},
			
				petabyteToGibibit: function(amt){
					if(isNaN(amt)) return this.amtTypeError(amt);
					return amt * 7.451e+6;
				},
			
				petabyteToGibibyte: function(amt){
					if(isNaN(amt)) return this.amtTypeError(amt);
					return amt * 931323;
				},
			
				petabyteToTerabit: function(amt){
					if(isNaN(amt)) return this.amtTypeError(amt);
					return amt * 8000;
				},
			
				petabyteToTerabyte: function(amt){
					if(isNaN(amt)) return this.amtTypeError(amt);
					return amt * 1000;
				},
			
				petabyteToTebibit: function(amt){
					if(isNaN(amt)) return this.amtTypeError(amt);
					return amt * 7275.96;
				},
			
				petabyteToTebibyte: function(amt){
					if(isNaN(amt)) return this.amtTypeError(amt);
					return amt * 909.495;
				},
			
				petabyteToPetabit: function(amt){
					if(isNaN(amt)) return this.amtTypeError(amt);
					return amt * 8;
				},
			
				petabyteToPebibit: function(amt){
					if(isNaN(amt)) return this.amtTypeError(amt);
					return amt * 7.10543;
				},
			
				petabyteToPebibyte: function(amt){
					if(isNaN(amt)) return this.amtTypeError(amt);
					return amt * 0.888178;
				},
			
				pebibitToBit: function(amt){
					if(isNaN(amt)) return this.amtTypeError(amt);
					return amt * 1.126e+15;
				},
			
				pebibitToByte: function(amt){
					if(isNaN(amt)) return this.amtTypeError(amt);
					return amt * 1.407e+14;
				},
			
				pebibitToKilobit: function(amt){
					if(isNaN(amt)) return this.amtTypeError(amt);
					return amt * 1.126e+12;
				},
			
				pebibitToKilobyte: function(amt){
					if(isNaN(amt)) return this.amtTypeError(amt);
					return amt * 1.407e+11;
				},
			
				pebibitToKibibit: function(amt){
					if(isNaN(amt)) return this.amtTypeError(amt);
					return amt * 1.1e+12;
				},
			
				pebibitToKibibyte: function(amt){
					if(isNaN(amt)) return this.amtTypeError(amt);
					return amt * 1.374e+11;
				},
			
				pebibitToMegabit: function(amt){
					if(isNaN(amt)) return this.amtTypeError(amt);
					return amt * 1.126e+9;
				},
			
				pebibitToMegabyte: function(amt){
					if(isNaN(amt)) return this.amtTypeError(amt);
					return amt * 1.407e+8;
				},
			
				pebibitToMebibit: function(amt){
					if(isNaN(amt)) return this.amtTypeError(amt);
					return amt * 1.074e+9;
				},
			
				pebibitToMebibyte: function(amt){
					if(isNaN(amt)) return this.amtTypeError(amt);
					return amt * 1.342e+8;
				},
			
				pebibitToGigabit: function(amt){
					if(isNaN(amt)) return this.amtTypeError(amt);
					return amt * 1.126e+6;
				},
			
				pebibitToGigabyte: function(amt){
					if(isNaN(amt)) return this.amtTypeError(amt);
					return amt * 140737;
				},
			
				pebibitToGibibit: function(amt){
					if(isNaN(amt)) return this.amtTypeError(amt);
					return amt * 1.049e+6;
				},
			
				pebibitToGibibyte: function(amt){
					if(isNaN(amt)) return this.amtTypeError(amt);
					return amt * 131072;
				},
			
				pebibitToTerabit: function(amt){
					if(isNaN(amt)) return this.amtTypeError(amt);
					return amt * 1125.9;
				},
			
				pebibitToTerabyte: function(amt){
					if(isNaN(amt)) return this.amtTypeError(amt);
					return amt * 140.737;
				},
			
				pebibitToTebibit: function(amt){
					if(isNaN(amt)) return this.amtTypeError(amt);
					return amt * 1024;
				},
			
				pebibitToTebibyte: function(amt){
					if(isNaN(amt)) return this.amtTypeError(amt);
					return amt * 128;
				},
			
				pebibitToPetabit: function(amt){
					if(isNaN(amt)) return this.amtTypeError(amt);
					return amt * 1.1259;
				},
			
				pebibitToPetabyte: function(amt){
					if(isNaN(amt)) return this.amtTypeError(amt);
					return amt * 0.140737;
				},
			
				pebibitToPebibyte: function(amt){
					if(isNaN(amt)) return this.amtTypeError(amt);
					return amt * 0.125;
				},
			
				pebibyteToPebibit: function(amt){
					if(isNaN(amt)) return this.amtTypeError(amt);
					return amt * 8;
				},
			
				pebibyteToByte: function(amt){
					if(isNaN(amt)) return this.amtTypeError(amt);
					return amt * 1.126e+15;
				},
			
				pebibyteToKilobit: function(amt){
					if(isNaN(amt)) return this.amtTypeError(amt);
					return amt * 9.007e+12;
				},
			
				pebibyteToKilobyte: function(amt){
					if(isNaN(amt)) return this.amtTypeError(amt);
					return amt * 1.126e+12;
				},
			
				pebibyteToKibibit: function(amt){
					if(isNaN(amt)) return this.amtTypeError(amt);
					return amt * 8.796e+12;
				},
			
				pebibyteToKibibyte: function(amt){
					if(isNaN(amt)) return this.amtTypeError(amt);
					return amt * 1.1e+12;
				},
			
				pebibyteToMegabit: function(amt){
					if(isNaN(amt)) return this.amtTypeError(amt);
					return amt * 9.007e+9;
				},
			
				pebibyteToMegabyte: function(amt){
					if(isNaN(amt)) return this.amtTypeError(amt);
					return amt * 1.126e+9;
				},
			
				pebibyteToMebibit: function(amt){
					if(isNaN(amt)) return this.amtTypeError(amt);
					return amt * 8.59e+9;
				},
			
				pebibyteToMebibyte: function(amt){
					if(isNaN(amt)) return this.amtTypeError(amt);
					return amt * 1.074e+9;
				},
			
				pebibyteToGigabit: function(amt){
					if(isNaN(amt)) return this.amtTypeError(amt);
					return amt * 9.007e+6;
				},
			
				pebibyteToGigabyte: function(amt){
					if(isNaN(amt)) return this.amtTypeError(amt);
					return amt * 1.126e+6;
				},
			
				pebibyteToGibibit: function(amt){
					if(isNaN(amt)) return this.amtTypeError(amt);
					return amt * 8.389e+6;
				},
			
				pebibyteToGibibyte: function(amt){
					if(isNaN(amt)) return this.amtTypeError(amt);
					return amt * 1.049e+6;
				},
			
				pebibyteToTerabit: function(amt){
					if(isNaN(amt)) return this.amtTypeError(amt);
					return amt * 9007.2;
				},
			
				pebibyteToTerabyte: function(amt){
					if(isNaN(amt)) return this.amtTypeError(amt);
					return amt * 1125.9;
				},
			
				pebibyteToTebibit: function(amt){
					if(isNaN(amt)) return this.amtTypeError(amt);
					return amt * 8192;
				},
			
				pebibyteToTebibyte: function(amt){
					if(isNaN(amt)) return this.amtTypeError(amt);
					return amt * 1024;
				},
			
				pebibyteToPetabit: function(amt){
					if(isNaN(amt)) return this.amtTypeError(amt);
					return amt * 9.0072;
				},
			
				pebibyteToPetabyte: function(amt){
					if(isNaN(amt)) return this.amtTypeError(amt);
					return amt * 1.1259;
				}
			};
		}]);
	
})(window.angular);
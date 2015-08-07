(function(angular){ 'use strict';
	angular.module('conversions.volume', [])
		.factory('conversionsVolume', ['$log', function($log){
			return {
				//=========
				// !Errors
				//=========
				amtTypeError: function(amt){
					$log.error(amt+' is not a number and cannot be converted');
					return NaN;
				},
				
				//====================
				// !Volume Conversions
				//====================
				usGalToUsQuart: function(amt){
					if(isNaN(amt)) return this.amtTypeError(amt);
					return amt * 4;
				},
			
				usGalToUsPint: function(amt){
					if(isNaN(amt)) return this.amtTypeError(amt);
					return amt * 8;
				},
			
				usGalToUsCup: function(amt){
					if(isNaN(amt)) return this.amtTypeError(amt);
					return amt * 16;
				},
			
				usGalToUsOz: function(amt){
					if(isNaN(amt)) return this.amtTypeError(amt);
					return amt * 128;
				},
			
				usGalToUsTbsp: function(amt){
					if(isNaN(amt)) return this.amtTypeError(amt);
					return amt * 256;
				},
			
				usGalToUsTsp: function(amt){
					if(isNaN(amt)) return this.amtTypeError(amt);
					return amt * 768;
				},
			
				usGalToCubicMeter: function(amt){
					if(isNaN(amt)) return this.amtTypeError(amt);
					return amt * 0.00378541;
				},
			
				usGalToLiter: function(amt){
					if(isNaN(amt)) return this.amtTypeError(amt);
					return amt * 3.78541;
				},
			
				usGalToMilliliter: function(amt){
					if(isNaN(amt)) return this.amtTypeError(amt);
					return amt * 3785.41;
				},
			
				usGalToImperialGal: function(amt){
					if(isNaN(amt)) return this.amtTypeError(amt);
					return amt * 0.832674;
				},
			
				usGalToImperialQuart: function(amt){
					if(isNaN(amt)) return this.amtTypeError(amt);
					return amt * 3.3307;
				},
			
				usGalToImperialPint: function(amt){
					if(isNaN(amt)) return this.amtTypeError(amt);
					return amt * 6.66139;
				},
			
				usGalToImperialOz: function(amt){
					if(isNaN(amt)) return this.amtTypeError(amt);
					return amt * 133.228;
				},
			
				usGalToImperialTbsp: function(amt){
					if(isNaN(amt)) return this.amtTypeError(amt);
					return amt * 213.165;
				},
			
				usGalToImperialTsp: function(amt){
					if(isNaN(amt)) return this.amtTypeError(amt);
					return amt * 639.494;
				},
			
				usGalToCubicFoot: function(amt){
					if(isNaN(amt)) return this.amtTypeError(amt);
					return amt * 0.133681;
				},
			
				usGalToCubicInch: function(amt){
					if(isNaN(amt)) return this.amtTypeError(amt);
					return amt * 231;
				},
			
				usQuartToUsGal: function(amt){
					if(isNaN(amt)) return this.amtTypeError(amt);
					return amt * 0.25;
				},
			
				usQuartToUsPint: function(amt){
					if(isNaN(amt)) return this.amtTypeError(amt);
					return amt * 2;
				},
			
				usQuartToUsCup: function(amt){
					if(isNaN(amt)) return this.amtTypeError(amt);
					return amt * 4;
				},
			
				usQuartToUsOz: function(amt){
					if(isNaN(amt)) return this.amtTypeError(amt);
					return amt * 32;
				},
			
				usQuartToUsTbsp: function(amt){
					if(isNaN(amt)) return this.amtTypeError(amt);
					return amt * 64;
				},
			
				usQuartToUsTsp: function(amt){
					if(isNaN(amt)) return this.amtTypeError(amt);
					return amt * 192;
				},
			
				usQuartToCubicMeter: function(amt){
					if(isNaN(amt)) return this.amtTypeError(amt);
					return amt * 0.000946353;
				},
			
				usQuartToLiter: function(amt){
					if(isNaN(amt)) return this.amtTypeError(amt);
					return amt * 0.946353;
				},
			
				usQuartToMilliliter: function(amt){
					if(isNaN(amt)) return this.amtTypeError(amt);
					return amt * 946.353;
				},
			
				usQuartToImperialGal: function(amt){
					if(isNaN(amt)) return this.amtTypeError(amt);
					return amt * 0.208168;
				},
			
				usQuartToImperialQuart: function(amt){
					if(isNaN(amt)) return this.amtTypeError(amt);
					return amt * 0.832674;
				},
			
				usQuartToImperialPint: function(amt){
					if(isNaN(amt)) return this.amtTypeError(amt);
					return amt * 1.66535;
				},
			
				usQuartToImperialOz: function(amt){
					if(isNaN(amt)) return this.amtTypeError(amt);
					return amt * 33.307;
				},
			
				usQuartToImperialTbsp: function(amt){
					if(isNaN(amt)) return this.amtTypeError(amt);
					return amt * 53.2911;
				},
			
				usQuartToImperialTsp: function(amt){
					if(isNaN(amt)) return this.amtTypeError(amt);
					return amt * 159.873;
				},
			
				usQuartToCubicFoot: function(amt){
					if(isNaN(amt)) return this.amtTypeError(amt);
					return amt * 0.0334201;
				},
			
				usQuartToCubicInch: function(amt){
					if(isNaN(amt)) return this.amtTypeError(amt);
					return amt * 57.75;
				},
			
				usPintToUsGal: function(amt){
					if(isNaN(amt)) return this.amtTypeError(amt);
					return amt * 0.125;
				},
			
				usPintToUsQuart: function(amt){
					if(isNaN(amt)) return this.amtTypeError(amt);
					return amt * 0.5;
				},
			
				usPintToUsCup: function(amt){
					if(isNaN(amt)) return this.amtTypeError(amt);
					return amt * 2;
				},
			
				usPintToUsOz: function(amt){
					if(isNaN(amt)) return this.amtTypeError(amt);
					return amt * 16;
				},
			
				usPintToUsTbsp: function(amt){
					if(isNaN(amt)) return this.amtTypeError(amt);
					return amt * 32;
				},
			
				usPintToUsTsp: function(amt){
					if(isNaN(amt)) return this.amtTypeError(amt);
					return amt * 96;
				},
			
				usPintToCubicMeter: function(amt){
					if(isNaN(amt)) return this.amtTypeError(amt);
					return amt * 0.000473176;
				},
			
				usPintToLiter: function(amt){
					if(isNaN(amt)) return this.amtTypeError(amt);
					return amt * 0.473176;
				},
			
				usPintToMilliliter: function(amt){
					if(isNaN(amt)) return this.amtTypeError(amt);
					return amt * 473.176;
				},
			
				usPintToImperialGal: function(amt){
					if(isNaN(amt)) return this.amtTypeError(amt);
					return amt * 0.104084;
				},
			
				usPintToImperialQuart: function(amt){
					if(isNaN(amt)) return this.amtTypeError(amt);
					return amt * 0.416337;
				},
			
				usPintToImperialPint: function(amt){
					if(isNaN(amt)) return this.amtTypeError(amt);
					return amt * 0.832674;
				},
			
				usPintToImperialOz: function(amt){
					if(isNaN(amt)) return this.amtTypeError(amt);
					return amt * 16.6535;
				},
			
				usPintToImperialTbsp: function(amt){
					if(isNaN(amt)) return this.amtTypeError(amt);
					return amt * 26.6456;
				},
			
				usPintToImperialTsp: function(amt){
					if(isNaN(amt)) return this.amtTypeError(amt);
					return amt * 79.9367;
				},
			
				usPintToCubicFoot: function(amt){
					if(isNaN(amt)) return this.amtTypeError(amt);
					return amt * 0.0167101;
				},
			
				usPintToCubicInch: function(amt){
					if(isNaN(amt)) return this.amtTypeError(amt);
					return amt * 28.875;
				},
			
				usCupToUsGal: function(amt){
					if(isNaN(amt)) return this.amtTypeError(amt);
					return amt * 0.0625;
				},
			
				usCupToUsQuart: function(amt){
					if(isNaN(amt)) return this.amtTypeError(amt);
					return amt * 0.25;
				},
			
				usCupToUsPint: function(amt){
					if(isNaN(amt)) return this.amtTypeError(amt);
					return amt * 0.5;
				},
			
				usCupToUsOz: function(amt){
					if(isNaN(amt)) return this.amtTypeError(amt);
					return amt * 8;
				},
			
				usCupToUsTbsp: function(amt){
					if(isNaN(amt)) return this.amtTypeError(amt);
					return amt * 16;
				},
			
				usCupToUsTsp: function(amt){
					if(isNaN(amt)) return this.amtTypeError(amt);
					return amt * 48;
				},
			
				usCupToCubicMeter: function(amt){
					if(isNaN(amt)) return this.amtTypeError(amt);
					return amt * 0.000236588;
				},
			
				usCupToLiter: function(amt){
					if(isNaN(amt)) return this.amtTypeError(amt);
					return amt * 0.236588;
				},
			
				usCupToMilliliter: function(amt){
					if(isNaN(amt)) return this.amtTypeError(amt);
					return amt * 236.588;
				},
			
				usCupToImperialGal: function(amt){
					if(isNaN(amt)) return this.amtTypeError(amt);
					return amt * 0.0520421;
				},
			
				usCupToImperialQuart: function(amt){
					if(isNaN(amt)) return this.amtTypeError(amt);
					return amt * 0.208168;
				},
			
				usCupToImperialPint: function(amt){
					if(isNaN(amt)) return this.amtTypeError(amt);
					return amt * 0.416337;
				},
			
				usCupToImperialOz: function(amt){
					if(isNaN(amt)) return this.amtTypeError(amt);
					return amt * 8.32674;
				},
			
				usCupToImperialTbsp: function(amt){
					if(isNaN(amt)) return this.amtTypeError(amt);
					return amt * 13.3228;
				},
			
				usCupToImperialTsp: function(amt){
					if(isNaN(amt)) return this.amtTypeError(amt);
					return amt * 39.9683;
				},
			
				usCupToCubicFoot: function(amt){
					if(isNaN(amt)) return this.amtTypeError(amt);
					return amt * 0.00835503;
				},
			
				usCupToCubicInch: function(amt){
					if(isNaN(amt)) return this.amtTypeError(amt);
					return amt * 14.4375;
				},
			
				usOzToUsGal: function(amt){
					if(isNaN(amt)) return this.amtTypeError(amt);
					return amt * 0.0078125;
				},
			
				usOzToUsQuart: function(amt){
					if(isNaN(amt)) return this.amtTypeError(amt);
					return amt * 0.03125;
				},
			
				usOzToUsPint: function(amt){
					if(isNaN(amt)) return this.amtTypeError(amt);
					return amt * 0.0625;
				},
			
				usOzToUsCup: function(amt){
					if(isNaN(amt)) return this.amtTypeError(amt);
					return amt * 0.125;
				},
			
				usOzToUsTbsp: function(amt){
					if(isNaN(amt)) return this.amtTypeError(amt);
					return amt * 2;
				},
			
				usOzToUsTsp: function(amt){
					if(isNaN(amt)) return this.amtTypeError(amt);
					return amt * 6;
				},
			
				usOzToCubicMeter: function(amt){
					if(isNaN(amt)) return this.amtTypeError(amt);
					return amt * 2.9574e-5;
				},
			
				usOzToLiter: function(amt){
					if(isNaN(amt)) return this.amtTypeError(amt);
					return amt * 0.0295735;
				},
			
				usOzToMilliliter: function(amt){
					if(isNaN(amt)) return this.amtTypeError(amt);
					return amt * 29.5735;
				},
			
				usOzToImperialGal: function(amt){
					if(isNaN(amt)) return this.amtTypeError(amt);
					return amt * 0.00650526;
				},
			
				usOzToImperialQuart: function(amt){
					if(isNaN(amt)) return this.amtTypeError(amt);
					return amt * 0.0260211;
				},
			
				usOzToImperialPint: function(amt){
					if(isNaN(amt)) return this.amtTypeError(amt);
					return amt * 0.0520421;
				},
			
				usOzToImperialOz: function(amt){
					if(isNaN(amt)) return this.amtTypeError(amt);
					return amt * 1.04084;
				},
			
				usOzToImperialTbsp: function(amt){
					if(isNaN(amt)) return this.amtTypeError(amt);
					return amt * 1.66535;
				},
			
				usOzToImperialTsp: function(amt){
					if(isNaN(amt)) return this.amtTypeError(amt);
					return amt * 4.99604;
				},
			
				usOzToCubicFoot: function(amt){
					if(isNaN(amt)) return this.amtTypeError(amt);
					return amt * 0.00104438;
				},
			
				usOzToCubicInch: function(amt){
					if(isNaN(amt)) return this.amtTypeError(amt);
					return amt * 1.80469;
				},
			
				usTbspToUsGal: function(amt){
					if(isNaN(amt)) return this.amtTypeError(amt);
					return amt * 0.00390625;
				},
			
				usTbspToUsQuart: function(amt){
					if(isNaN(amt)) return this.amtTypeError(amt);
					return amt * 0.015625;
				},
			
				usTbspToUsPint: function(amt){
					if(isNaN(amt)) return this.amtTypeError(amt);
					return amt * 0.03125;
				},
			
				usTbspToUsCup: function(amt){
					if(isNaN(amt)) return this.amtTypeError(amt);
					return amt * 0.0625;
				},
			
				usTbspToUsOz: function(amt){
					if(isNaN(amt)) return this.amtTypeError(amt);
					return amt * 0.5;
				},
			
				usTbspToUsTsp: function(amt){
					if(isNaN(amt)) return this.amtTypeError(amt);
					return amt * 3;
				},
			
				usTbspToCubicMeter: function(amt){
					if(isNaN(amt)) return this.amtTypeError(amt);
					return amt * 1.4787e-5;
				},
			
				usTbspToLiter: function(amt){
					if(isNaN(amt)) return this.amtTypeError(amt);
					return amt * 0.0147868;
				},
			
				usTbspToMilliliter: function(amt){
					if(isNaN(amt)) return this.amtTypeError(amt);
					return amt * 14.7868;
				},
			
				usTbspToImperialGal: function(amt){
					if(isNaN(amt)) return this.amtTypeError(amt);
					return amt * 0.00325263;
				},
			
				usTbspToImperialQuart: function(amt){
					if(isNaN(amt)) return this.amtTypeError(amt);
					return amt * 0.0130105;
				},
			
				usTbspToImperialPint: function(amt){
					if(isNaN(amt)) return this.amtTypeError(amt);
					return amt * 0.0260211;
				},
			
				usTbspToImperialOz: function(amt){
					if(isNaN(amt)) return this.amtTypeError(amt);
					return amt * 0.520421;
				},
			
				usTbspToImperialTbsp: function(amt){
					if(isNaN(amt)) return this.amtTypeError(amt);
					return amt * 0.832674;
				},
			
				usTbspToImperialTsp: function(amt){
					if(isNaN(amt)) return this.amtTypeError(amt);
					return amt * 2.49802;
				},
			
				usTbspToCubicFoot: function(amt){
					if(isNaN(amt)) return this.amtTypeError(amt);
					return amt * 0.00052219;
				},
			
				usTbspToCubicInch: function(amt){
					if(isNaN(amt)) return this.amtTypeError(amt);
					return amt * 0.902344;
				},
			
				usTspToUsGal: function(amt){
					if(isNaN(amt)) return this.amtTypeError(amt);
					return amt * 0.00130208;
				},
			
				usTspToUsQuart: function(amt){
					if(isNaN(amt)) return this.amtTypeError(amt);
					return amt * 0.00520833;
				},
			
				usTspToUsPint: function(amt){
					if(isNaN(amt)) return this.amtTypeError(amt);
					return amt * 0.0104167;
				},
			
				usTspToUsCup: function(amt){
					if(isNaN(amt)) return this.amtTypeError(amt);
					return amt * 0.0208333;
				},
			
				usTspToUsOz: function(amt){
					if(isNaN(amt)) return this.amtTypeError(amt);
					return amt * 0.166667;
				},
			
				usTspToUsTbsp: function(amt){
					if(isNaN(amt)) return this.amtTypeError(amt);
					return amt * 0.333333;
				},
			
				usTspToCubicMeter: function(amt){
					if(isNaN(amt)) return this.amtTypeError(amt);
					return amt * 4.9289e-6;
				},
			
				usTspToLiter: function(amt){
					if(isNaN(amt)) return this.amtTypeError(amt);
					return amt * 0.00492892;
				},
			
				usTspToMilliliter: function(amt){
					if(isNaN(amt)) return this.amtTypeError(amt);
					return amt * 4.92892;
				},
			
				usTspToImperialGal: function(amt){
					if(isNaN(amt)) return this.amtTypeError(amt);
					return amt * 0.00108421;
				},
			
				usTspToImperialQuart: function(amt){
					if(isNaN(amt)) return this.amtTypeError(amt);
					return amt * 0.00433684;
				},
			
				usTspToImperialPint: function(amt){
					if(isNaN(amt)) return this.amtTypeError(amt);
					return amt * 0.00867369;
				},
			
				usTspToImperialOz: function(amt){
					if(isNaN(amt)) return this.amtTypeError(amt);
					return amt * 0.173474;
				},
			
				usTspToImperialTbsp: function(amt){
					if(isNaN(amt)) return this.amtTypeError(amt);
					return amt * 0.277558;
				},
			
				usTspToImperialTsp: function(amt){
					if(isNaN(amt)) return this.amtTypeError(amt);
					return amt * 0.832674;
				},
			
				usTspToCubicFoot: function(amt){
					if(isNaN(amt)) return this.amtTypeError(amt);
					return amt * 0.000174063;
				},
			
				usTspToCubicInch: function(amt){
					if(isNaN(amt)) return this.amtTypeError(amt);
					return amt * 0.300781;
				},
			
				cubicMeterToUsGal: function(amt){
					if(isNaN(amt)) return this.amtTypeError(amt);
					return amt * 264.172;
				},
			
				cubicMeterToUsQuart: function(amt){
					if(isNaN(amt)) return this.amtTypeError(amt);
					return amt * 1056.69;
				},
			
				cubicMeterToUsPint: function(amt){
					if(isNaN(amt)) return this.amtTypeError(amt);
					return amt * 2113.38;
				},
			
				cubicMeterToUsCup: function(amt){
					if(isNaN(amt)) return this.amtTypeError(amt);
					return amt * 4226.75;
				},
			
				cubicMeterToUsOz: function(amt){
					if(isNaN(amt)) return this.amtTypeError(amt);
					return amt * 33814;
				},
			
				cubicMeterToUsTbsp: function(amt){
					if(isNaN(amt)) return this.amtTypeError(amt);
					return amt * 67628;
				},
			
				cubicMeterToUsTsp: function(amt){
					if(isNaN(amt)) return this.amtTypeError(amt);
					return amt * 202884;
				},
			
				cubicMeterToLiter: function(amt){
					if(isNaN(amt)) return this.amtTypeError(amt);
					return amt * 1000;
				},
			
				cubicMeterToMilliliter: function(amt){
					if(isNaN(amt)) return this.amtTypeError(amt);
					return amt * 1e+6;
				},
			
				cubicMeterToImperialGal: function(amt){
					if(isNaN(amt)) return this.amtTypeError(amt);
					return amt * 219.969;
				},
			
				cubicMeterToImperialQuart: function(amt){
					if(isNaN(amt)) return this.amtTypeError(amt);
					return amt * 879.877;
				},
			
				cubicMeterToImperialPint: function(amt){
					if(isNaN(amt)) return this.amtTypeError(amt);
					return amt * 1759.75;
				},
			
				cubicMeterToImperialOz: function(amt){
					if(isNaN(amt)) return this.amtTypeError(amt);
					return amt * 35195.1;
				},
			
				cubicMeterToImperialTbsp: function(amt){
					if(isNaN(amt)) return this.amtTypeError(amt);
					return amt * 56312.1;
				},
			
				cubicMeterToImperialTsp: function(amt){
					if(isNaN(amt)) return this.amtTypeError(amt);
					return amt * 168936;
				},
			
				cubicMeterToCubicFoot: function(amt){
					if(isNaN(amt)) return this.amtTypeError(amt);
					return amt * 35.3147;
				},
			
				cubicMeterToCubicInch: function(amt){
					if(isNaN(amt)) return this.amtTypeError(amt);
					return amt * 61023.7;
				},
			
				literToUsGal: function(amt){
					if(isNaN(amt)) return this.amtTypeError(amt);
					return amt * 0.264172;
				},
			
				literToUsQuart: function(amt){
					if(isNaN(amt)) return this.amtTypeError(amt);
					return amt * 1.05669;
				},
			
				literToUsPint: function(amt){
					if(isNaN(amt)) return this.amtTypeError(amt);
					return amt * 2.11338;
				},
			
				literToUsCup: function(amt){
					if(isNaN(amt)) return this.amtTypeError(amt);
					return amt * 4.22675;
				},
			
				literToUsOz: function(amt){
					if(isNaN(amt)) return this.amtTypeError(amt);
					return amt * 33.814;
				},
			
				literToUsTbsp: function(amt){
					if(isNaN(amt)) return this.amtTypeError(amt);
					return amt * 67.628;
				},
			
				literToUsTsp: function(amt){
					if(isNaN(amt)) return this.amtTypeError(amt);
					return amt * 202.884;
				},
			
				literToCubicMeter: function(amt){
					if(isNaN(amt)) return this.amtTypeError(amt);
					return amt * 0.001;
				},
			
				literToMilliliter: function(amt){
					if(isNaN(amt)) return this.amtTypeError(amt);
					return amt * 1000;
				},
			
				literToImperialGal: function(amt){
					if(isNaN(amt)) return this.amtTypeError(amt);
					return amt * 0.219969;
				},
			
				literToImperialQuart: function(amt){
					if(isNaN(amt)) return this.amtTypeError(amt);
					return amt * 0.879877;
				},
			
				literToImperialPint: function(amt){
					if(isNaN(amt)) return this.amtTypeError(amt);
					return amt * 1.75975;
				},
			
				literToImperialOz: function(amt){
					if(isNaN(amt)) return this.amtTypeError(amt);
					return amt * 35.1951;
				},
			
				literToImperialTbsp: function(amt){
					if(isNaN(amt)) return this.amtTypeError(amt);
					return amt * 56.3121;
				},
			
				literToImperialTsp: function(amt){
					if(isNaN(amt)) return this.amtTypeError(amt);
					return amt * 168.936;
				},
			
				literToCubicFoot: function(amt){
					if(isNaN(amt)) return this.amtTypeError(amt);
					return amt * 0.0353147;
				},
			
				literToCubicInch: function(amt){
					if(isNaN(amt)) return this.amtTypeError(amt);
					return amt * 61.0237;
				},
			
				milliliterToUsGal: function(amt){
					if(isNaN(amt)) return this.amtTypeError(amt);
					return amt * 0.000264172;
				},
			
				milliliterToUsQuart: function(amt){
					if(isNaN(amt)) return this.amtTypeError(amt);
					return amt * 0.00105669;
				},
			
				milliliterToUsPint: function(amt){
					if(isNaN(amt)) return this.amtTypeError(amt);
					return amt * 0.00211338;
				},
			
				milliliterToUsCup: function(amt){
					if(isNaN(amt)) return this.amtTypeError(amt);
					return amt * 0.00422675;
				},
			
				milliliterToUsOz: function(amt){
					if(isNaN(amt)) return this.amtTypeError(amt);
					return amt * 0.033814;
				},
			
				milliliterToUsTbsp: function(amt){
					if(isNaN(amt)) return this.amtTypeError(amt);
					return amt * 0.067628;
				},
			
				milliliterToUsTsp: function(amt){
					if(isNaN(amt)) return this.amtTypeError(amt);
					return amt * 0.202884;
				},
			
				milliliterToCubicMeter: function(amt){
					if(isNaN(amt)) return this.amtTypeError(amt);
					return amt * 1e-6;
				},
			
				milliliterToLiter: function(amt){
					if(isNaN(amt)) return this.amtTypeError(amt);
					return amt * 0.001;
				},
			
				milliliterToImperialGal: function(amt){
					if(isNaN(amt)) return this.amtTypeError(amt);
					return amt * 0.000219969;
				},
			
				milliliterToImperialQuart: function(amt){
					if(isNaN(amt)) return this.amtTypeError(amt);
					return amt * 0.000879877;
				},
			
				milliliterToImperialPint: function(amt){
					if(isNaN(amt)) return this.amtTypeError(amt);
					return amt * 0.00175975;
				},
			
				milliliterToImperialOz: function(amt){
					if(isNaN(amt)) return this.amtTypeError(amt);
					return amt * 0.0351951;
				},
			
				milliliterToImperialTbsp: function(amt){
					if(isNaN(amt)) return this.amtTypeError(amt);
					return amt * 0.0563121;
				},
			
				milliliterToImperialTsp: function(amt){
					if(isNaN(amt)) return this.amtTypeError(amt);
					return amt * 0.168936;
				},
			
				milliliterToCubicFoot: function(amt){
					if(isNaN(amt)) return this.amtTypeError(amt);
					return amt * 3.5315e-5;
				},
			
				milliliterToCubicInch: function(amt){
					if(isNaN(amt)) return this.amtTypeError(amt);
					return amt * 0.0610237;
				},
			
				imperialGalToUsGal: function(amt){
					if(isNaN(amt)) return this.amtTypeError(amt);
					return amt * 1.20095;
				},
			
				imperialGalToUsQuart: function(amt){
					if(isNaN(amt)) return this.amtTypeError(amt);
					return amt * 4.8038;
				},
			
				imperialGalToUsPint: function(amt){
					if(isNaN(amt)) return this.amtTypeError(amt);
					return amt * 9.6076;
				},
			
				imperialGalToUsCup: function(amt){
					if(isNaN(amt)) return this.amtTypeError(amt);
					return amt * 19.2152;
				},
			
				imperialGalToUsOz: function(amt){
					if(isNaN(amt)) return this.amtTypeError(amt);
					return amt * 153.722;
				},
			
				imperialGalToUsTbsp: function(amt){
					if(isNaN(amt)) return this.amtTypeError(amt);
					return amt * 307.443;
				},
			
				imperialGalToUsTsp: function(amt){
					if(isNaN(amt)) return this.amtTypeError(amt);
					return amt * 922.33;
				},
			
				imperialGalToCubicMeter: function(amt){
					if(isNaN(amt)) return this.amtTypeError(amt);
					return amt * 0.00454609;
				},
			
				imperialGalToLiter: function(amt){
					if(isNaN(amt)) return this.amtTypeError(amt);
					return amt * 4.54609;
				},
			
				imperialGalToMilliliter: function(amt){
					if(isNaN(amt)) return this.amtTypeError(amt);
					return amt * 4546.09;
				},
			
				imperialGalToImperialQuart: function(amt){
					if(isNaN(amt)) return this.amtTypeError(amt);
					return amt * 4;
				},
			
				imperialGalToImperialPint: function(amt){
					if(isNaN(amt)) return this.amtTypeError(amt);
					return amt * 8;
				},
			
				imperialGalToImperialOz: function(amt){
					if(isNaN(amt)) return this.amtTypeError(amt);
					return amt * 160;
				},
			
				imperialGalToImperialTbsp: function(amt){
					if(isNaN(amt)) return this.amtTypeError(amt);
					return amt * 256;
				},
			
				imperialGalToImperialTsp: function(amt){
					if(isNaN(amt)) return this.amtTypeError(amt);
					return amt * 768;
				},
			
				imperialGalToCubicFoot: function(amt){
					if(isNaN(amt)) return this.amtTypeError(amt);
					return amt * 0.160544;
				},
			
				imperialGalToCubicInch: function(amt){
					if(isNaN(amt)) return this.amtTypeError(amt);
					return amt * 277.42;
				},
			
				imperialQuartToUsGal: function(amt){
					if(isNaN(amt)) return this.amtTypeError(amt);
					return amt * 0.300238;
				},
			
				imperialQuartToUsQuart: function(amt){
					if(isNaN(amt)) return this.amtTypeError(amt);
					return amt * 1.20095;
				},
			
				imperialQuartToUsPint: function(amt){
					if(isNaN(amt)) return this.amtTypeError(amt);
					return amt * 2.4019;
				},
			
				imperialQuartToUsCup: function(amt){
					if(isNaN(amt)) return this.amtTypeError(amt);
					return amt * 4.8038;
				},
			
				imperialQuartToUsOz: function(amt){
					if(isNaN(amt)) return this.amtTypeError(amt);
					return amt * 38.4304;
				},
			
				imperialQuartToUsTbsp: function(amt){
					if(isNaN(amt)) return this.amtTypeError(amt);
					return amt * 76.8608;
				},
			
				imperialQuartToUsTsp: function(amt){
					if(isNaN(amt)) return this.amtTypeError(amt);
					return amt * 230.582;
				},
			
				imperialQuartToCubicMeter: function(amt){
					if(isNaN(amt)) return this.amtTypeError(amt);
					return amt * 0.00113652;
				},
			
				imperialQuartToLiter: function(amt){
					if(isNaN(amt)) return this.amtTypeError(amt);
					return amt * 1.13652;
				},
			
				imperialQuartToMilliliter: function(amt){
					if(isNaN(amt)) return this.amtTypeError(amt);
					return amt * 1136.52;
				},
			
				imperialQuartToImperialGal: function(amt){
					if(isNaN(amt)) return this.amtTypeError(amt);
					return amt * 0.25;
				},
			
				imperialQuartToImperialPint: function(amt){
					if(isNaN(amt)) return this.amtTypeError(amt);
					return amt * 2;
				},
			
				imperialQuartToImperialOz: function(amt){
					if(isNaN(amt)) return this.amtTypeError(amt);
					return amt * 40;
				},
			
				imperialQuartToImperialTbsp: function(amt){
					if(isNaN(amt)) return this.amtTypeError(amt);
					return amt * 64;
				},
			
				imperialQuartToImperialTsp: function(amt){
					if(isNaN(amt)) return this.amtTypeError(amt);
					return amt * 192;
				},
			
				imperialQuartToCubicFoot: function(amt){
					if(isNaN(amt)) return this.amtTypeError(amt);
					return amt * 0.0401359;
				},
			
				imperialQuartToCubicInch: function(amt){
					if(isNaN(amt)) return this.amtTypeError(amt);
					return amt * 69.3549;
				},
			
				imperialPintToUsGal: function(amt){
					if(isNaN(amt)) return this.amtTypeError(amt);
					return amt * 0.150119;
				},
			
				imperialPintToUsQuart: function(amt){
					if(isNaN(amt)) return this.amtTypeError(amt);
					return amt * 0.600475;
				},
			
				imperialPintToUsPint: function(amt){
					if(isNaN(amt)) return this.amtTypeError(amt);
					return amt * 1.20095;
				},
			
				imperialPintToUsCup: function(amt){
					if(isNaN(amt)) return this.amtTypeError(amt);
					return amt * 2.4019;
				},
			
				imperialPintToUsOz: function(amt){
					if(isNaN(amt)) return this.amtTypeError(amt);
					return amt * 19.2152;
				},
			
				imperialPintToUsTbsp: function(amt){
					if(isNaN(amt)) return this.amtTypeError(amt);
					return amt * 38.4304;
				},
			
				imperialPintToUsTsp: function(amt){
					if(isNaN(amt)) return this.amtTypeError(amt);
					return amt * 115.291;
				},
			
				imperialPintToCubicMeter: function(amt){
					if(isNaN(amt)) return this.amtTypeError(amt);
					return amt * 0.000568261;
				},
			
				imperialPintToLiter: function(amt){
					if(isNaN(amt)) return this.amtTypeError(amt);
					return amt * 0.568261;
				},
			
				imperialPintToMilliliter: function(amt){
					if(isNaN(amt)) return this.amtTypeError(amt);
					return amt * 568.261;
				},
			
				imperialPintToImperialGal: function(amt){
					if(isNaN(amt)) return this.amtTypeError(amt);
					return amt * 0.125;
				},
			
				imperialPintToImperialQuart: function(amt){
					if(isNaN(amt)) return this.amtTypeError(amt);
					return amt * 0.5;
				},
			
				imperialPintToImperialOz: function(amt){
					if(isNaN(amt)) return this.amtTypeError(amt);
					return amt * 20;
				},
			
				imperialPintToImperialTbsp: function(amt){
					if(isNaN(amt)) return this.amtTypeError(amt);
					return amt * 32;
				},
			
				imperialPintToImperialTsp: function(amt){
					if(isNaN(amt)) return this.amtTypeError(amt);
					return amt * 96;
				},
			
				imperialPintToCubicFoot: function(amt){
					if(isNaN(amt)) return this.amtTypeError(amt);
					return amt * 0.020068;
				},
			
				imperialPintToCubicInch: function(amt){
					if(isNaN(amt)) return this.amtTypeError(amt);
					return amt * 34.6774;
				},
			
				imperialOzToUsGal: function(amt){
					if(isNaN(amt)) return this.amtTypeError(amt);
					return amt * 0.00750594;
				},
			
				imperialOzToUsQuart: function(amt){
					if(isNaN(amt)) return this.amtTypeError(amt);
					return amt * 0.0300238;
				},
			
				imperialOzToUsPint: function(amt){
					if(isNaN(amt)) return this.amtTypeError(amt);
					return amt * 0.0600475;
				},
			
				imperialOzToUsCup: function(amt){
					if(isNaN(amt)) return this.amtTypeError(amt);
					return amt * 0.120095;
				},
			
				imperialOzToUsOz: function(amt){
					if(isNaN(amt)) return this.amtTypeError(amt);
					return amt * 0.96076;
				},
			
				imperialOzToUsTbsp: function(amt){
					if(isNaN(amt)) return this.amtTypeError(amt);
					return amt * 1.92152;
				},
			
				imperialOzToUsTsp: function(amt){
					if(isNaN(amt)) return this.amtTypeError(amt);
					return amt * 5.76456;
				},
			
				imperialOzToCubicMeter: function(amt){
					if(isNaN(amt)) return this.amtTypeError(amt);
					return amt * 2.8413e-5;
				},
			
				imperialOzToLiter: function(amt){
					if(isNaN(amt)) return this.amtTypeError(amt);
					return amt * 0.0284131;
				},
			
				imperialOzToMilliliter: function(amt){
					if(isNaN(amt)) return this.amtTypeError(amt);
					return amt * 28.4131;
				},
			
				imperialOzToImperialGal: function(amt){
					if(isNaN(amt)) return this.amtTypeError(amt);
					return amt * 0.00625;
				},
			
				imperialOzToImperialQuart: function(amt){
					if(isNaN(amt)) return this.amtTypeError(amt);
					return amt * 0.025;
				},
			
				imperialOzToImperialPint: function(amt){
					if(isNaN(amt)) return this.amtTypeError(amt);
					return amt * 0.05;
				},
			
				imperialOzToImperialTbsp: function(amt){
					if(isNaN(amt)) return this.amtTypeError(amt);
					return amt * 1.6;
				},
			
				imperialOzToImperialTsp: function(amt){
					if(isNaN(amt)) return this.amtTypeError(amt);
					return amt * 4.8;
				},
			
				imperialOzToCubicFoot: function(amt){
					if(isNaN(amt)) return this.amtTypeError(amt);
					return amt * 0.0010034;
				},
			
				imperialOzToCubicInch: function(amt){
					if(isNaN(amt)) return this.amtTypeError(amt);
					return amt * 1.73387;
				},
			
				imperialTbspToUsGal: function(amt){
					if(isNaN(amt)) return this.amtTypeError(amt);
					return amt * 0.00469121;
				},
			
				imperialTbspToUsQuart: function(amt){
					if(isNaN(amt)) return this.amtTypeError(amt);
					return amt * 0.0187649;
				},
			
				imperialTbspToUsPint: function(amt){
					if(isNaN(amt)) return this.amtTypeError(amt);
					return amt * 0.0375297;
				},
			
				imperialTbspToUsCup: function(amt){
					if(isNaN(amt)) return this.amtTypeError(amt);
					return amt * 0.0750594;
				},
			
				imperialTbspToUsOz: function(amt){
					if(isNaN(amt)) return this.amtTypeError(amt);
					return amt * 0.600475;
				},
			
				imperialTbspToUsTbsp: function(amt){
					if(isNaN(amt)) return this.amtTypeError(amt);
					return amt * 1.20095;
				},
			
				imperialTbspToUsTsp: function(amt){
					if(isNaN(amt)) return this.amtTypeError(amt);
					return amt * 3.60285;
				},
			
				imperialTbspToCubicMeter: function(amt){
					if(isNaN(amt)) return this.amtTypeError(amt);
					return amt * 1.7758e-5;
				},
			
				imperialTbspToLiter: function(amt){
					if(isNaN(amt)) return this.amtTypeError(amt);
					return amt * 0.0177582;
				},
			
				imperialTbspToMilliliter: function(amt){
					if(isNaN(amt)) return this.amtTypeError(amt);
					return amt * 17.7582;
				},
			
				imperialTbspToImperialGal: function(amt){
					if(isNaN(amt)) return this.amtTypeError(amt);
					return amt * 0.00390625;
				},
			
				imperialTbspToImperialQuart: function(amt){
					if(isNaN(amt)) return this.amtTypeError(amt);
					return amt * 0.015625;
				},
			
				imperialTbspToImperialPint: function(amt){
					if(isNaN(amt)) return this.amtTypeError(amt);
					return amt * 0.03125;
				},
			
				imperialTbspToImperialOz: function(amt){
					if(isNaN(amt)) return this.amtTypeError(amt);
					return amt * 0.625;
				},
			
				imperialTbspToImperialTsp: function(amt){
					if(isNaN(amt)) return this.amtTypeError(amt);
					return amt * 3;
				},
			
				imperialTbspToCubicFoot: function(amt){
					if(isNaN(amt)) return this.amtTypeError(amt);
					return amt * 0.000627124;
				},
			
				imperialTbspToCubicInch: function(amt){
					if(isNaN(amt)) return this.amtTypeError(amt);
					return amt * 1.08367;
				},
			
				imperialTspToUsGal: function(amt){
					if(isNaN(amt)) return this.amtTypeError(amt);
					return amt * 0.00156374;
				},
			
				imperialTspToUsQuart: function(amt){
					if(isNaN(amt)) return this.amtTypeError(amt);
					return amt * 0.00625495;
				},
			
				imperialTspToUsPint: function(amt){
					if(isNaN(amt)) return this.amtTypeError(amt);
					return amt * 0.0125099;
				},
			
				imperialTspToUsCup: function(amt){
					if(isNaN(amt)) return this.amtTypeError(amt);
					return amt * 0.0250198;
				},
			
				imperialTspToUsOz: function(amt){
					if(isNaN(amt)) return this.amtTypeError(amt);
					return amt * 0.200158;
				},
			
				imperialTspToUsTbsp: function(amt){
					if(isNaN(amt)) return this.amtTypeError(amt);
					return amt * 0.400317;
				},
			
				imperialTspToUsTsp: function(amt){
					if(isNaN(amt)) return this.amtTypeError(amt);
					return amt * 1.20095;
				},
			
				imperialTspToCubicMeter: function(amt){
					if(isNaN(amt)) return this.amtTypeError(amt);
					return amt * 5.9194e-6;
				},
			
				imperialTspToLiter: function(amt){
					if(isNaN(amt)) return this.amtTypeError(amt);
					return amt * 0.00591939;
				},
			
				imperialTspToMilliliter: function(amt){
					if(isNaN(amt)) return this.amtTypeError(amt);
					return amt * 5.91939;
				},
			
				imperialTspToImperialGal: function(amt){
					if(isNaN(amt)) return this.amtTypeError(amt);
					return amt * 0.00130208;
				},
			
				imperialTspToImperialQuart: function(amt){
					if(isNaN(amt)) return this.amtTypeError(amt);
					return amt * 0.00520833;
				},
			
				imperialTspToImperialPint: function(amt){
					if(isNaN(amt)) return this.amtTypeError(amt);
					return amt * 0.0104167;
				},
			
				imperialTspToImperialOz: function(amt){
					if(isNaN(amt)) return this.amtTypeError(amt);
					return amt * 0.208333;
				},
			
				imperialTspToImperialTbsp: function(amt){
					if(isNaN(amt)) return this.amtTypeError(amt);
					return amt * 0.333333;
				},
			
				imperialTspToCubicFoot: function(amt){
					if(isNaN(amt)) return this.amtTypeError(amt);
					return amt * 0.000209041;
				},
			
				imperialTspToCubicInch: function(amt){
					if(isNaN(amt)) return this.amtTypeError(amt);
					return amt * 0.361223;
				},
			
				cubicFootToUsGal: function(amt){
					if(isNaN(amt)) return this.amtTypeError(amt);
					return amt * 7.48052;
				},
			
				cubicFootToUsQuart: function(amt){
					if(isNaN(amt)) return this.amtTypeError(amt);
					return amt * 29.9221;
				},
			
				cubicFootToUsPint: function(amt){
					if(isNaN(amt)) return this.amtTypeError(amt);
					return amt * 59.8442;
				},
			
				cubicFootToUsCup: function(amt){
					if(isNaN(amt)) return this.amtTypeError(amt);
					return amt * 119.688;
				},
			
				cubicFootToUsOz: function(amt){
					if(isNaN(amt)) return this.amtTypeError(amt);
					return amt * 957.506;
				},
			
				cubicFootToUsTbsp: function(amt){
					if(isNaN(amt)) return this.amtTypeError(amt);
					return amt * 1915.01;
				},
			
				cubicFootToUsTsp: function(amt){
					if(isNaN(amt)) return this.amtTypeError(amt);
					return amt * 5745.04;
				},
			
				cubicFootToCubicMeter: function(amt){
					if(isNaN(amt)) return this.amtTypeError(amt);
					return amt * 0.0283168;
				},
			
				cubicFootToLiter: function(amt){
					if(isNaN(amt)) return this.amtTypeError(amt);
					return amt * 28.3168;
				},
			
				cubicFootToMilliliter: function(amt){
					if(isNaN(amt)) return this.amtTypeError(amt);
					return amt * 28316.8;
				},
			
				cubicFootToImperialGal: function(amt){
					if(isNaN(amt)) return this.amtTypeError(amt);
					return amt * 6.22883;
				},
			
				cubicFootToImperialQuart: function(amt){
					if(isNaN(amt)) return this.amtTypeError(amt);
					return amt * 24.9153;
				},
			
				cubicFootToImperialPint: function(amt){
					if(isNaN(amt)) return this.amtTypeError(amt);
					return amt * 49.8307;
				},
			
				cubicFootToImperialOz: function(amt){
					if(isNaN(amt)) return this.amtTypeError(amt);
					return amt * 996.613;
				},
			
				cubicFootToImperialTbsp: function(amt){
					if(isNaN(amt)) return this.amtTypeError(amt);
					return amt * 1594.58;
				},
			
				cubicFootToImperialTsp: function(amt){
					if(isNaN(amt)) return this.amtTypeError(amt);
					return amt * 4783.74;
				},
			
				cubicFootToCubicInch: function(amt){
					if(isNaN(amt)) return this.amtTypeError(amt);
					return amt * 1728;
				},
			
				cubicInchToUsQuart: function(amt){
					if(isNaN(amt)) return this.amtTypeError(amt);
					return amt * 0.017316;
				},
			
				cubicInchToUsPint: function(amt){
					if(isNaN(amt)) return this.amtTypeError(amt);
					return amt * 0.034632;
				},
			
				cubicInchToUsCup: function(amt){
					if(isNaN(amt)) return this.amtTypeError(amt);
					return amt * 0.0692641;
				},
			
				cubicInchToUsOz: function(amt){
					if(isNaN(amt)) return this.amtTypeError(amt);
					return amt * 0.554113;
				},
			
				cubicInchToUsTbsp: function(amt){
					if(isNaN(amt)) return this.amtTypeError(amt);
					return amt * 1.10823;
				},
			
				cubicInchToUsTsp: function(amt){
					if(isNaN(amt)) return this.amtTypeError(amt);
					return amt * 3.32468;
				},
			
				cubicInchToCubicMeter: function(amt){
					if(isNaN(amt)) return this.amtTypeError(amt);
					return amt * 1.6387e-5;
				},
			
				cubicInchToLiter: function(amt){
					if(isNaN(amt)) return this.amtTypeError(amt);
					return amt * 0.0163871;
				},
			
				cubicInchToMilliliter: function(amt){
					if(isNaN(amt)) return this.amtTypeError(amt);
					return amt * 16.3871;
				},
			
				cubicInchToImperialGal: function(amt){
					if(isNaN(amt)) return this.amtTypeError(amt);
					return amt * 0.00360465;
				},
			
				cubicInchToImperialQuart: function(amt){
					if(isNaN(amt)) return this.amtTypeError(amt);
					return amt * 0.0144186;
				},
			
				cubicInchToImperialPint: function(amt){
					if(isNaN(amt)) return this.amtTypeError(amt);
					return amt * 0.0288372;
				},
			
				cubicInchToImperialOz: function(amt){
					if(isNaN(amt)) return this.amtTypeError(amt);
					return amt * 0.576744;
				},
			
				cubicInchToImperialTbsp: function(amt){
					if(isNaN(amt)) return this.amtTypeError(amt);
					return amt * 0.92279;
				},
			
				cubicInchToImperialTsp: function(amt){
					if(isNaN(amt)) return this.amtTypeError(amt);
					return amt * 2.76837;
				},
			
				cubicInchToCubicFoot: function(amt){
					if(isNaN(amt)) return this.amtTypeError(amt);
					return amt * 0.000578704;
				}
			};
		}]);

})(window.angular);
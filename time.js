(function(angular){ 'use strict';
	angular.module('conversions.time', [])
		.factory('conversionsTime', ['$log', function($log){
			return {
				//=========
				// !Errors
				//=========
				amtTypeError: function(amt){
					$log.error(amt+' is not a number and cannot be converted');
					return NaN;
				},
				
				//====================
				// !Time Conversions
				//====================
				nanosecondToMicrosecond: function(amt){
					if(isNaN(amt)) return this.amtTypeError(amt);
					return amt * 0.001;
				},
			
				nanosecondToMillisecond: function(amt){
					if(isNaN(amt)) return this.amtTypeError(amt);
					return amt * 1e-6;
				},
			
				nanosecondToSecond: function(amt){
					if(isNaN(amt)) return this.amtTypeError(amt);
					return amt * 1e-9;
				},
			
				nanosecondToMinute: function(amt){
					if(isNaN(amt)) return this.amtTypeError(amt);
					return amt * 1.6667e-11;
				},
			
				nanosecondToHour: function(amt){
					if(isNaN(amt)) return this.amtTypeError(amt);
					return amt * 2.7778e-13;
				},
			
				nanosecondToDay: function(amt){
					if(isNaN(amt)) return this.amtTypeError(amt);
					return amt * 1.1574e-14;
				},
			
				nanosecondToWeek: function(amt){
					if(isNaN(amt)) return this.amtTypeError(amt);
					return amt * 1.6534e-15;
				},
			
				nanosecondToMonth: function(amt){
					if(isNaN(amt)) return this.amtTypeError(amt);
					return amt * 3.8027e-16;
				},
			
				nanosecondToYear: function(amt){
					if(isNaN(amt)) return this.amtTypeError(amt);
					return amt * 3.1689e-17;
				},
			
				nanosecondToDecade: function(amt){
					if(isNaN(amt)) return this.amtTypeError(amt);
					return amt * 3.1689e-18;
				},
			
				nanosecondToCentury: function(amt){
					if(isNaN(amt)) return this.amtTypeError(amt);
					return amt * 3.1689e-19;
				},
			
				microsecondToNanosecond: function(amt){
					if(isNaN(amt)) return this.amtTypeError(amt);
					return amt * 1000;
				},
			
				microsecondToMillisecond: function(amt){
					if(isNaN(amt)) return this.amtTypeError(amt);
					return amt * 0.001;
				},
			
				microsecondToSecond: function(amt){
					if(isNaN(amt)) return this.amtTypeError(amt);
					return amt * 1e-6;
				},
			
				microsecondToMinute: function(amt){
					if(isNaN(amt)) return this.amtTypeError(amt);
					return amt * 1.6667e-8;
				},
			
				microsecondToHour: function(amt){
					if(isNaN(amt)) return this.amtTypeError(amt);
					return amt * 2.7778e-10;
				},
			
				microsecondToDay: function(amt){
					if(isNaN(amt)) return this.amtTypeError(amt);
					return amt * 1.1574e-11;
				},
			
				microsecondToWeek: function(amt){
					if(isNaN(amt)) return this.amtTypeError(amt);
					return amt * 1.6534e-12;
				},
			
				microsecondToMonth: function(amt){
					if(isNaN(amt)) return this.amtTypeError(amt);
					return amt * 3.8027e-13;
				},
			
				microsecondToYear: function(amt){
					if(isNaN(amt)) return this.amtTypeError(amt);
					return amt * 3.1689e-14;
				},
			
				microsecondToDecade: function(amt){
					if(isNaN(amt)) return this.amtTypeError(amt);
					return amt * 3.1689e-15;
				},
			
				microsecondToCentury: function(amt){
					if(isNaN(amt)) return this.amtTypeError(amt);
					return amt * 3.1689e-16;
				},
			
				millisecondToNanosecond: function(amt){
					if(isNaN(amt)) return this.amtTypeError(amt);
					return amt * 1e+6;
				},
			
				millisecondToMicrosecond: function(amt){
					if(isNaN(amt)) return this.amtTypeError(amt);
					return amt * 1000;
				},
			
				millisecondToSecond: function(amt){
					if(isNaN(amt)) return this.amtTypeError(amt);
					return amt * 0.001;
				},
			
				millisecondToMinute: function(amt){
					if(isNaN(amt)) return this.amtTypeError(amt);
					return amt * 1.6667e-5;
				},
			
				millisecondToHour: function(amt){
					if(isNaN(amt)) return this.amtTypeError(amt);
					return amt * 2.7778e-7;
				},
			
				millisecondToDay: function(amt){
					if(isNaN(amt)) return this.amtTypeError(amt);
					return amt * 1.1574e-8;
				},
			
				millisecondToWeek: function(amt){
					if(isNaN(amt)) return this.amtTypeError(amt);
					return amt * 1.6534e-9;
				},
			
				millisecondToMonth: function(amt){
					if(isNaN(amt)) return this.amtTypeError(amt);
					return amt * 3.8027e-10;
				},
			
				millisecondToYear: function(amt){
					if(isNaN(amt)) return this.amtTypeError(amt);
					return amt * 3.1689e-11;
				},
			
				millisecondToDecade: function(amt){
					if(isNaN(amt)) return this.amtTypeError(amt);
					return amt * 3.1689e-12;
				},
			
				millisecondToCentury: function(amt){
					if(isNaN(amt)) return this.amtTypeError(amt);
					return amt * 3.1689e-13;
				},
			
				secondToNanosecond: function(amt){
					if(isNaN(amt)) return this.amtTypeError(amt);
					return amt * 1e+9;
				},
			
				secondToMicrosecond: function(amt){
					if(isNaN(amt)) return this.amtTypeError(amt);
					return amt * 1e+6;
				},
			
				secondToMillisecond: function(amt){
					if(isNaN(amt)) return this.amtTypeError(amt);
					return amt * 1000;
				},
			
				secondToMinute: function(amt){
					if(isNaN(amt)) return this.amtTypeError(amt);
					return amt * 0.0166667;
				},
			
				secondToHour: function(amt){
					if(isNaN(amt)) return this.amtTypeError(amt);
					return amt * 0.000277778;
				},
			
				secondToDay: function(amt){
					if(isNaN(amt)) return this.amtTypeError(amt);
					return amt * 1.1574e-5;
				},
			
				secondToWeek: function(amt){
					if(isNaN(amt)) return this.amtTypeError(amt);
					return amt * 1.6534e-6;
				},
			
				secondToMonth: function(amt){
					if(isNaN(amt)) return this.amtTypeError(amt);
					return amt * 3.8027e-7;
				},
			
				secondToYear: function(amt){
					if(isNaN(amt)) return this.amtTypeError(amt);
					return amt * 3.1689e-8;
				},
			
				secondToDecade: function(amt){
					if(isNaN(amt)) return this.amtTypeError(amt);
					return amt * 3.1689e-9;
				},
			
				secondToCentury: function(amt){
					if(isNaN(amt)) return this.amtTypeError(amt);
					return amt * 3.1689e-10;
				},
			
				minuteToNanosecond: function(amt){
					if(isNaN(amt)) return this.amtTypeError(amt);
					return amt * 6e+10;
				},
			
				minuteToMicrosecond: function(amt){
					if(isNaN(amt)) return this.amtTypeError(amt);
					return amt * 6e+7;
				},
			
				minuteToMillisecond: function(amt){
					if(isNaN(amt)) return this.amtTypeError(amt);
					return amt * 60000;
				},
			
				minuteToSecond: function(amt){
					if(isNaN(amt)) return this.amtTypeError(amt);
					return amt * 60;
				},
			
				minuteToHour: function(amt){
					if(isNaN(amt)) return this.amtTypeError(amt);
					return amt * 0.0166667;
				},
			
				minuteToDay: function(amt){
					if(isNaN(amt)) return this.amtTypeError(amt);
					return amt * 0.000694444;
				},
			
				minuteToWeek: function(amt){
					if(isNaN(amt)) return this.amtTypeError(amt);
					return amt * 9.9206e-5;
				},
			
				minuteToMonth: function(amt){
					if(isNaN(amt)) return this.amtTypeError(amt);
					return amt * 2.2816e-5;
				},
			
				minuteToYear: function(amt){
					if(isNaN(amt)) return this.amtTypeError(amt);
					return amt * 1.9013e-6;
				},
			
				minuteToDecade: function(amt){
					if(isNaN(amt)) return this.amtTypeError(amt);
					return amt * 1.9013e-7;
				},
			
				minuteToCentury: function(amt){
					if(isNaN(amt)) return this.amtTypeError(amt);
					return amt * 1.9013e-8;
				},
			
				hourToNanosecond: function(amt){
					if(isNaN(amt)) return this.amtTypeError(amt);
					return amt * 3.6e+12;
				},
			
				hourToMicrosecond: function(amt){
					if(isNaN(amt)) return this.amtTypeError(amt);
					return amt * 3.6e+9;
				},
			
				hourToMillisecond: function(amt){
					if(isNaN(amt)) return this.amtTypeError(amt);
					return amt * 3.6e+6;
				},
			
				hourToSecond: function(amt){
					if(isNaN(amt)) return this.amtTypeError(amt);
					return amt * 3600;
				},
			
				hourToMinute: function(amt){
					if(isNaN(amt)) return this.amtTypeError(amt);
					return amt * 60;
				},
			
				hourToDay: function(amt){
					if(isNaN(amt)) return this.amtTypeError(amt);
					return amt * 0.0416667;
				},
			
				hourToWeek: function(amt){
					if(isNaN(amt)) return this.amtTypeError(amt);
					return amt * 0.00595238;
				},
			
				hourToMonth: function(amt){
					if(isNaN(amt)) return this.amtTypeError(amt);
					return amt * 0.00136895;
				},
			
				hourToYear: function(amt){
					if(isNaN(amt)) return this.amtTypeError(amt);
					return amt * 0.00011408;
				},
			
				hourToDecade: function(amt){
					if(isNaN(amt)) return this.amtTypeError(amt);
					return amt * 1.1408e-5;
				},
			
				hourToCentury: function(amt){
					if(isNaN(amt)) return this.amtTypeError(amt);
					return amt * 1.1408e-6;
				},
			
				dayToNanosecond: function(amt){
					if(isNaN(amt)) return this.amtTypeError(amt);
					return amt * 8.64e+13;
				},
			
				dayToMicrosecond: function(amt){
					if(isNaN(amt)) return this.amtTypeError(amt);
					return amt * 8.64e+10;
				},
			
				dayToMillisecond: function(amt){
					if(isNaN(amt)) return this.amtTypeError(amt);
					return amt * 8.64e+7;
				},
			
				dayToSecond: function(amt){
					if(isNaN(amt)) return this.amtTypeError(amt);
					return amt * 86400;
				},
			
				dayToMinute: function(amt){
					if(isNaN(amt)) return this.amtTypeError(amt);
					return amt * 1440;
				},
			
				dayToHour: function(amt){
					if(isNaN(amt)) return this.amtTypeError(amt);
					return amt * 24;
				},
			
				dayToWeek: function(amt){
					if(isNaN(amt)) return this.amtTypeError(amt);
					return amt * 0.142857;
				},
			
				dayToMonth: function(amt){
					if(isNaN(amt)) return this.amtTypeError(amt);
					return amt * 0.0328549;
				},
			
				dayToYear: function(amt){
					if(isNaN(amt)) return this.amtTypeError(amt);
					return amt * 0.00273791;
				},
			
				dayToDecade: function(amt){
					if(isNaN(amt)) return this.amtTypeError(amt);
					return amt * 0.000273791;
				},
			
				dayToCentury: function(amt){
					if(isNaN(amt)) return this.amtTypeError(amt);
					return amt * 2.7379e-5;
				},
			
				weekToNanosecond: function(amt){
					if(isNaN(amt)) return this.amtTypeError(amt);
					return amt * 6.048e+14;
				},
			
				weekToMicrosecond: function(amt){
					if(isNaN(amt)) return this.amtTypeError(amt);
					return amt * 6.048e+11;
				},
			
				weekToMillisecond: function(amt){
					if(isNaN(amt)) return this.amtTypeError(amt);
					return amt * 6.048e+8;
				},
			
				weekToSecond: function(amt){
					if(isNaN(amt)) return this.amtTypeError(amt);
					return amt * 604800;
				},
			
				weekToMinute: function(amt){
					if(isNaN(amt)) return this.amtTypeError(amt);
					return amt * 10080;
				},
			
				weekToHour: function(amt){
					if(isNaN(amt)) return this.amtTypeError(amt);
					return amt * 168;
				},
			
				weekToDay: function(amt){
					if(isNaN(amt)) return this.amtTypeError(amt);
					return amt * 7;
				},
			
				weekToMonth: function(amt){
					if(isNaN(amt)) return this.amtTypeError(amt);
					return amt * 0.229984;
				},
			
				weekToYear: function(amt){
					if(isNaN(amt)) return this.amtTypeError(amt);
					return amt * 0.0191654;
				},
			
				weekToDecade: function(amt){
					if(isNaN(amt)) return this.amtTypeError(amt);
					return amt * 0.00191654;
				},
			
				weekToCentury: function(amt){
					if(isNaN(amt)) return this.amtTypeError(amt);
					return amt * 0.000191654;
				},
			
				monthToNanosecond: function(amt){
					if(isNaN(amt)) return this.amtTypeError(amt);
					return amt * 2.63e+15;
				},
			
				monthToMicrosecond: function(amt){
					if(isNaN(amt)) return this.amtTypeError(amt);
					return amt * 2.63e+12;
				},
			
				monthToMillisecond: function(amt){
					if(isNaN(amt)) return this.amtTypeError(amt);
					return amt * 2.63e+9;
				},
			
				monthToSecond: function(amt){
					if(isNaN(amt)) return this.amtTypeError(amt);
					return amt * 2.63e+6;
				},
			
				monthToMinute: function(amt){
					if(isNaN(amt)) return this.amtTypeError(amt);
					return amt * 43829.1;
				},
			
				monthToHour: function(amt){
					if(isNaN(amt)) return this.amtTypeError(amt);
					return amt * 730.484;
				},
			
				monthToDay: function(amt){
					if(isNaN(amt)) return this.amtTypeError(amt);
					return amt * 30.4368;
				},
			
				monthToWeek: function(amt){
					if(isNaN(amt)) return this.amtTypeError(amt);
					return amt * 4.34812;
				},
			
				monthToYear: function(amt){
					if(isNaN(amt)) return this.amtTypeError(amt);
					return amt * 0.0833333;
				},
			
				monthToDecade: function(amt){
					if(isNaN(amt)) return this.amtTypeError(amt);
					return amt * 0.00833333;
				},
			
				monthToCentury: function(amt){
					if(isNaN(amt)) return this.amtTypeError(amt);
					return amt * 0.000833333;
				},
			
				yearToNanosecond: function(amt){
					if(isNaN(amt)) return this.amtTypeError(amt);
					return amt * 3.156e+16;
				},
			
				yearToMicrosecond: function(amt){
					if(isNaN(amt)) return this.amtTypeError(amt);
					return amt * 3.156e+13;
				},
			
				yearToMillisecond: function(amt){
					if(isNaN(amt)) return this.amtTypeError(amt);
					return amt * 3.156e+10;
				},
			
				yearToSecond: function(amt){
					if(isNaN(amt)) return this.amtTypeError(amt);
					return amt * 3.156e+7;
				},
			
				yearToMinute: function(amt){
					if(isNaN(amt)) return this.amtTypeError(amt);
					return amt * 525949;
				},
			
				yearToHour: function(amt){
					if(isNaN(amt)) return this.amtTypeError(amt);
					return amt * 8765.81;
				},
			
				yearToDay: function(amt){
					if(isNaN(amt)) return this.amtTypeError(amt);
					return amt * 365.242;
				},
			
				yearToWeek: function(amt){
					if(isNaN(amt)) return this.amtTypeError(amt);
					return amt * 52.1775;
				},
			
				yearToMonth: function(amt){
					if(isNaN(amt)) return this.amtTypeError(amt);
					return amt * 12;
				},
			
				yearToDecade: function(amt){
					if(isNaN(amt)) return this.amtTypeError(amt);
					return amt * 0.1;
				},
			
				yearToCentury: function(amt){
					if(isNaN(amt)) return this.amtTypeError(amt);
					return amt * 0.01;
				},
			
				decadeToNanosecond: function(amt){
					if(isNaN(amt)) return this.amtTypeError(amt);
					return amt * 3.156e+17;
				},
			
				decadeToMicrosecond: function(amt){
					if(isNaN(amt)) return this.amtTypeError(amt);
					return amt * 3.156e+14;
				},
			
				decadeToMillisecond: function(amt){
					if(isNaN(amt)) return this.amtTypeError(amt);
					return amt * 3.156e+11;
				},
			
				decadeToSecond: function(amt){
					if(isNaN(amt)) return this.amtTypeError(amt);
					return amt * 3.156e+8;
				},
			
				decadeToMinute: function(amt){
					if(isNaN(amt)) return this.amtTypeError(amt);
					return amt * 5.259e+6;
				},
			
				decadeToHour: function(amt){
					if(isNaN(amt)) return this.amtTypeError(amt);
					return amt * 87658.1;
				},
			
				decadeToDay: function(amt){
					if(isNaN(amt)) return this.amtTypeError(amt);
					return amt * 3652.42;
				},
			
				decadeToWeek: function(amt){
					if(isNaN(amt)) return this.amtTypeError(amt);
					return amt * 521.775;
				},
			
				decadeToMonth: function(amt){
					if(isNaN(amt)) return this.amtTypeError(amt);
					return amt * 120;
				},
			
				decadeToYear: function(amt){
					if(isNaN(amt)) return this.amtTypeError(amt);
					return amt * 10;
				},
			
				decadeToCentury: function(amt){
					if(isNaN(amt)) return this.amtTypeError(amt);
					return amt * 0.1;
				},
			
				centuryToDecade: function(amt){
					if(isNaN(amt)) return this.amtTypeError(amt);
					return amt * 10;
				},
			
				centuryToMicrosecond: function(amt){
					if(isNaN(amt)) return this.amtTypeError(amt);
					return amt * 3.156e+15;
				},
			
				centuryToMillisecond: function(amt){
					if(isNaN(amt)) return this.amtTypeError(amt);
					return amt * 3.156e+12;
				},
			
				centuryToSecond: function(amt){
					if(isNaN(amt)) return this.amtTypeError(amt);
					return amt * 3.156e+9;
				},
			
				centuryToMinute: function(amt){
					if(isNaN(amt)) return this.amtTypeError(amt);
					return amt * 5.259e+7;
				},
			
				centuryToHour: function(amt){
					if(isNaN(amt)) return this.amtTypeError(amt);
					return amt * 876581;
				},
			
				centuryToDay: function(amt){
					if(isNaN(amt)) return this.amtTypeError(amt);
					return amt * 36524.2;
				},
			
				centuryToWeek: function(amt){
					if(isNaN(amt)) return this.amtTypeError(amt);
					return amt * 5217.75;
				},
			
				centuryToMonth: function(amt){
					if(isNaN(amt)) return this.amtTypeError(amt);
					return amt * 1200;
				},
			
				centuryToYear: function(amt){
					if(isNaN(amt)) return this.amtTypeError(amt);
					return amt * 100;
				}
				
			};
		}]);
	
})(window.angular);
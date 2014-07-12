// Callback function example
// (C) 2014 splashinn

data = 10;
        console.log('1) Data = ', data);
        myFunction(data, function(returned){ data = returned;
            console.log('5) Callback by myFunction (2nd Param) | Data: ', returned); });

        function myFunction(data, returneddata) {
            console.log('2) function myFunction | data: ', data);
            yourFunction(data, function(returned2){ console.log("4) Callback by yourFunction (2nd Param) | Data: ", returned2);
                return3 = (returned2 + 5);
                returneddata(return3);
            });
        }

        function yourFunction(data, returneddata2) {
            console.log('3) function yourFunction | data: ', data);
            returneddata2(data+=5);
        }
        
        console.log('6) Data = ', data);

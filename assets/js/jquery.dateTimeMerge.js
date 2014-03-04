;(function ( $, window, document, undefined ) {

    // Desired API $('#event_date').dateTimeMerge({'date':'#user_start_date', 'time':'#user_start_time'});
    $.fn.dateTimeMerge = function(options){
        if (!this.length) { return this; }

        $.fn.dateTimeMerge.defaults = {
            'dateFormat': 'yy-mm-dd',
            'debug': false
        };

        var opts = $.extend(true, {}, $.fn.dateTimeMerge.defaults, options);
        var self = this;


        this.each(function() {
            var $this = $(this),
                $dateInput = $(opts['date']),
                $timeInput = $(opts['time']);
     
            // Configure dateinput as Jquery UI Datepicker, with ISO-8601 format
            $dateInput.datepicker({ dateFormat: opts['dateFormat']});
            // var today = new Date();
            // $dateInput.val(today.getFullYear() + '-' + today.getMonth() + '-' + today.getDate());

            var existing_value = $this.val();
            if (existing_value !== ''){
                var existing_date = existing_value.split(' ')[0],
                    existing_time = existing_value.split(' ')[1];

                    $dateInput.val(existing_date);
                    $timeInput.val(existing_time);
                    if (opts['debug']) {
                      console.log('Existing value: ' + existing_value);
                      console.log(existing_date);
                      console.log(existing_time);
                    }
            }


            $dateInput.on('change', function(){
                  var dateString = $dateInput.val() + ' ' + $timeInput.val();
                  if (opts['debug']) console.log(dateString);
                  $this.val(dateString);
            });

            $timeInput.on('change', function(){
                  var dateString = $dateInput.val() + ' ' + $timeInput.val();
                  if (opts['debug']) console.log(dateString);
                  $this.val(dateString);
            });
        });

        return this;
    };




})( jQuery, window, document );
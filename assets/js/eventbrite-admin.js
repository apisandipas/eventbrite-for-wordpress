

(function($){
    $(function(){
          $('#start_date').dateTimeMerge({
                  'date':'#user_start_date',
                  'time':'#user_start_time',
                  'debug': true
          });

          $('#end_date').dateTimeMerge({
                  'date':'#user_end_date',
                  'time':'#user_end_time',
                  'debug': true
          });


          $('[id^=user_start_sales_date_],[id^=user_end_sales_date_]').css('width', '100px');


          /**
          *  First Set of tickets
          */



          $('#start_sales_0').dateTimeMerge({
                  'date':'#user_start_sales_date_0',
                  'time':'#user_start_sales_time_0',
                  'debug': true
          });
          $('#end_sales_0').dateTimeMerge({
                  'date':'#user_end_sales_date_0',
                  'time':'#user_end_sales_time_0',
                  'debug': true
          });


          $('#start_sales_1').dateTimeMerge({
                  'date':'#user_start_sales_date_1',
                  'time':'#user_start_sales_time_1',
                  'debug': true
          });
          $('#end_sales_1').dateTimeMerge({
                  'date':'#user_end_sales_date_1',
                  'time':'#user_end_sales_time_1',
                  'debug': true
          });



          /**
          *  2nd Set of tickets
          */
          $('#start_sales_2').dateTimeMerge({
                  'date':'#user_start_sales_date_2',
                  'time':'#user_start_sales_time_2',
                  'debug': true
          });

          $('#end_sales_2').dateTimeMerge({
                  'date':'#user_end_sales_date_2',
                  'time':'#user_end_sales_time_2',
                  'debug': true
          });

          /**
          *  3rd Set of tickets
          */
          $('#start_sales_3').dateTimeMerge({
                  'date':'#user_start_sales_date_3',
                  'time':'#user_start_sales_time_3',
                  'debug': true
          });

          $('#end_sales_3').dateTimeMerge({
                  'date':'#user_end_sales_date_3',
                  'time':'#user_end_sales_time_3',
                  'debug': true
          });

          /**
          *  4th Set of tickets
          */
          $('#start_sales_4').dateTimeMerge({
                  'date':'#user_start_sales_date_4',
                  'time':'#user_start_sales_time_4',
                  'debug': true
          });

          $('#end_sales_4').dateTimeMerge({
                  'date':'#user_end_sales_date_4',
                  'time':'#user_end_sales_time_4',
                  'debug': true
          });
    });
})(jQuery);


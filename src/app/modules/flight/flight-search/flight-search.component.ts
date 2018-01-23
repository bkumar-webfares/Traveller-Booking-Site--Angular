import { Component, AfterViewInit } from '@angular/core';
declare var $: any;

@Component({
  selector: 'app-flight-search',
  templateUrl: './flight-search.component.html'
})
export class FlightSearchComponent implements AfterViewInit {

  dateFormat = "mm/dd/yy"

  private availableTags = [
    "New York",
    "San Francisco",
    "Los Angelis",
    "Chicago",
    "Washington DC",
    "San Diago",
    "Miami",
    "London",
    "Birmingham",
    "Bristol",
    "New Delhi",
    "Jaipur",
    "Udaypur",
    "Mumbai",
    "Kerala",
    "Chennai",
  ];

  constructor() { }

  ngAfterViewInit() {
    $(function(){
      $('.flightSearchBox .uk-input').each(function(i){
        eval($(this).text());
      });
    });   
    var startTimeTextBox = $('#range_example_1_start,#range_example_2_start,#range_example_3_start');
    var endTimeTextBox = $('#range_example_1_end,#range_example_2_end,#range_example_3_end');
    $.timepicker.timeRange(
        startTimeTextBox,
        endTimeTextBox,
        {
            minInterval: (1000*60*60), // 1hr
            timeFormat: 'HH:mm',
            start: {}, // start picker options
            end: {} // end picker options
        }
    );
    $('#slides').superslides({
      animation: 'fade',
      pagination: false,
    });
    $(".citynamesuggetion").autocomplete({
      source: this.availableTags
    });
        
    const from = $(".fromdate")
    .datepicker({
      defaultDate: "+1w",
      changeMonth: true,
      numberOfMonths: 1
    })
    .on("change", () => {
      to.datepicker("option", "minDate", this.getDate(this));
    }),
    to = $("#todate").datepicker({
      defaultDate: "+1w",
      changeMonth: true,
      numberOfMonths: 1
    })
    .on("change", () => {
      from.datepicker("option", "maxDate", this.getDate(this));
    });
  }
  getDate(element) {
  var date;
    try {
      date = $.datepicker.parseDate(this.dateFormat, element.value);
    } catch (error) {
      date = null;
    }
    return date;
  }

}
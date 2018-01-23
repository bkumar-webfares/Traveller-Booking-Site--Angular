import { Component, AfterViewInit } from '@angular/core';
declare var $: any;

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html'
})
export class HotelSearchComponent implements AfterViewInit {

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
    $('#slides').superslides({
      animation: 'fade',
      pagination: true,
    });

    $("#citynamesuggetion").autocomplete({
      source: this.availableTags
    });
    $("#hotelnamesuggetion").autocomplete({
      source: [
        "SHERATON GRAND",
        "CHICAGO, ILLINOIS",
        "THE LEELA PALACE",
        "GODFREY HOTEL",
        "The Oberoi Udaivilas",
        "Taj Lake Place",
        "Hotel del Coronado",
        "Algonquin Hotel",
      ]
    });
    
    const from = $("#fromdate")
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
import {AfterViewInit, Component, OnInit, ViewEncapsulation} from '@angular/core';
/*import {NotificationsService} from 'angular2-notifications';*/

declare const AmCharts: any;
declare var $: any;

import '../../../../assets/charts/amchart/amcharts.js';
import '../../../../assets/charts/amchart/gauge.js';
import '../../../../assets/charts/amchart/pie.js';
import '../../../../assets/charts/amchart/serial.js';
import '../../../../assets/charts/amchart/light.js';
import '../../../../assets/charts/amchart/ammap.js';
import '../../../../assets/charts/amchart/usaLow.js';

import '../../../../assets/charts/float/jquery.flot.js';
import '../../../../assets/charts/float/jquery.flot.categories.js';
import '../../../../assets/charts/float/curvedLines.js';
import '../../../../assets/charts/float/jquery.flot.tooltip.min.js';

@Component({
  selector: 'app-default',
  templateUrl: './default.component.html',
  styleUrls: ['./default.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class DefaultComponent implements OnInit, AfterViewInit {
  options: any = {
    position: ['bottom', 'right'],
  };

  chartOption: any = {
    legend: {
      show: false
    },
    series: {
      label: '',
      curvedLines: {
        active: true,
        nrSplinePoints: 20
      },
    },
    tooltip: {
      show: true,
      content: 'x : %x | y : %y'
    },
    grid: {
      hoverable: true,
      borderWidth: 0,
      labelMargin: 0,
      axisMargin: 0,
      minBorderMargin: 0,
    },
    yaxis: {
      min: 0,
      max: 30,
      color: 'transparent',
      font: {
        size: 0,
      }
    },
    xaxis: {
      color: 'transparent',
      font: {
        size: 0,
      }
    }
  };

  chartEcommerce: any;

  constructor() { // private servicePNotify: NotificationsService
  }

  ngOnInit() {
    setTimeout(() => {
      this.chartEcommerce = AmCharts.makeChart('seo-ecommerce-barchart', {
        'type': 'serial',
        'theme': 'light',
        'marginTop': 0,
        'marginRight': 0,
        'dataProvider': [{
          'year': '1950',
          'value': -0.307
        }, {
          'year': '1951',
          'value': -0.168
        }, {
          'year': '1952',
          'value': -0.073
        }, {
          'year': '1953',
          'value': -0.027
        }, {
          'year': '1954',
          'value': -0.251
        }, {
          'year': '1955',
          'value': -0.281
        }, {
          'year': '1956',
          'value': -0.348
        }, {
          'year': '1957',
          'value': -0.074
        }, {
          'year': '1958',
          'value': -0.011
        }, {
          'year': '1959',
          'value': -0.074
        }, {
          'year': '1960',
          'value': -0.124
        }, {
          'year': '1961',
          'value': -0.024
        }, {
          'year': '1962',
          'value': -0.022
        }, {
          'year': '1963',
          'value': 0
        }, {
          'year': '1964',
          'value': -0.296
        }, {
          'year': '1965',
          'value': -0.217
        }, {
          'year': '1966',
          'value': -0.147
        }, {
          'year': '1967',
          'value': -0.15
        }, {
          'year': '1968',
          'value': -0.16
        }, {
          'year': '1969',
          'value': -0.011
        }, {
          'year': '1970',
          'value': -0.068
        }, {
          'year': '1971',
          'value': -0.19
        }, {
          'year': '1972',
          'value': -0.056
        }, {
          'year': '1973',
          'value': 0.077
        }, {
          'year': '1974',
          'value': -0.213
        }, {
          'year': '1975',
          'value': -0.17
        }, {
          'year': '1976',
          'value': -0.254
        }, {
          'year': '1977',
          'value': 0.019
        }, {
          'year': '1978',
          'value': -0.063
        }, {
          'year': '1979',
          'value': 0.05
        }, {
          'year': '1980',
          'value': 0.077
        }, {
          'year': '1981',
          'value': 0.12
        }, {
          'year': '1982',
          'value': 0.011
        }, {
          'year': '1983',
          'value': 0.177
        }, {
          'year': '1984',
          'value': -0.021
        }, {
          'year': '1985',
          'value': -0.037
        }, {
          'year': '1986',
          'value': 0.03
        }, {
          'year': '1987',
          'value': 0.179
        }, {
          'year': '1988',
          'value': 0.18
        }, {
          'year': '1989',
          'value': 0.104
        }, {
          'year': '1990',
          'value': 0.255
        }, {
          'year': '1991',
          'value': 0.21
        }, {
          'year': '1992',
          'value': 0.065
        }, {
          'year': '1993',
          'value': 0.11
        }, {
          'year': '1994',
          'value': 0.172
        }, {
          'year': '1995',
          'value': 0.269
        }, {
          'year': '1996',
          'value': 0.141
        }, {
          'year': '1997',
          'value': 0.353
        }, {
          'year': '1998',
          'value': 0.548
        }, {
          'year': '1999',
          'value': 0.298
        }, {
          'year': '2000',
          'value': 0.267
        }, {
          'year': '2001',
          'value': 0.411
        }, {
          'year': '2002',
          'value': 0.462
        }, {
          'year': '2003',
          'value': 0.47
        }, {
          'year': '2004',
          'value': 0.445
        }, {
          'year': '2005',
          'value': 0.47
        }],
        'valueAxes': [{
          'axisAlpha': 0,
          // 'gridAlpha': 0,
          'dashLength': 6,
          'position': 'left'
        }],
        'graphs': [{
          'id': 'g1',
          'balloonText': '[[category]]<br><b><span style="font-size:14px;">[[value]]</span></b>',
          'bullet': 'round',
          'bulletSize': 8,
          // 'fillAlphas': 0.1,
          'lineColor': '#448aff',
          'lineThickness': 2,
          'negativeLineColor': '#ff5252',
          'type': 'smoothedLine',
          'valueField': 'value'
        }],
        'chartScrollbar': {
          'graph': 'g1',
          'gridAlpha': 0,
          'color': '#888888',
          'scrollbarHeight': 55,
          'backgroundAlpha': 0,
          'selectedBackgroundAlpha': 0.1,
          'selectedBackgroundColor': '#888888',
          'graphFillAlpha': 0,
          'autoGridCount': true,
          'selectedGraphFillAlpha': 0,
          'graphLineAlpha': 0.2,
          'graphLineColor': '#c2c2c2',
          'selectedGraphLineColor': '#888888',
          'selectedGraphLineAlpha': 1
        },
        'chartCursor': {
          'categoryBalloonDateFormat': 'YYYY',
          'cursorAlpha': 0,
          'valueLineEnabled': true,
          'valueLineBalloonEnabled': true,
          'valueLineAlpha': 0.5,
          'fullWidth': true
        },
        'dataDateFormat': 'YYYY',
        'categoryField': 'year',
        'categoryAxis': {
          'minPeriod': 'YYYY',
          'gridAlpha': 0,
          'parseDates': true,
        },
      });

      $.plot($('#total-value-graph-1'), [{
        data: [
          [0, 20],
          [20, 10],
          [35, 18],
          [50, 12],
          [65, 25],
          [75, 10],
          [90, 20],
        ],
        color: '#fff',
        lines: {
          show: true,
          fill: true,
          lineWidth: 3
        },
        points: {
          show: false
        },
        curvedLines: {
          apply: true,
        }
      }], this.chartOption);

      $.plot($('#total-value-graph-2'), [{
        data: [
          [0, 10],
          [20, 20],
          [35, 18],
          [50, 25],
          [65, 12],
          [75, 10],
          [90, 20],
        ],
        color: '#fff',
        lines: {
          show: true,
          fill: true,
          lineWidth: 3
        },
        points: {
          show: false
        },
        curvedLines: {
          apply: true,
        }
      }], this.chartOption);

      $.plot($('#total-value-graph-3'), [{
        data: [
          [0, 20],
          [20, 10],
          [35, 25],
          [50, 18],
          [65, 18],
          [75, 10],
          [90, 12],
        ],
        color: '#fff',
        lines: {
          show: true,
          fill: true,
          lineWidth: 3
        },
        points: {
          show: false
        },
        curvedLines: {
          apply: true,
        }
      }], this.chartOption);

      $.plot($('#total-value-graph-4'), [{
        data: [
          [0, 18],
          [20, 10],
          [35, 20],
          [50, 10],
          [65, 12],
          [75, 25],
          [90, 20],
        ],
        color: '#fff',
        lines: {
          show: true,
          fill: true,
          lineWidth: 3
        },
        points: {
          show: false
        },
        curvedLines: {
          apply: true,
        }
      }], this.chartOption);

      $.plot($('#power-card-chart1'), [{
        data: [
          [0, 18],
          [20, 10],
          [35, 20],
          [50, 10],
          [65, 27],
          [75, 15],
          [90, 20],
        ],
        color: '#ff5252',
        lines: {
          show: true,
          fill: false,
          lineWidth: 3
        },
        points: {
          show: false
        },
        curvedLines: {
          apply: true,
        }
      }], this.chartOption);

      $.plot($('#power-card-chart2'), [{
        data: [
          [0, 10],
          [20, 25],
          [35, 27],
          [50, 10],
          [65, 20],
          [75, 10],
          [90, 18],
        ],
        color: '#448aff',
        lines: {
          show: true,
          fill: false,
          lineWidth: 3
        },
        points: {
          show: false
        },
        curvedLines: {
          apply: true,
        }
      }], this.chartOption);

    }, 75);

    setTimeout(() => {
      this.chartEcommerce.zoomToIndexes(Math.round(this.chartEcommerce.dataProvider.length * 0.3), Math.round(this.chartEcommerce.dataProvider.length * 0.55));
    }, 2500);
  }

  ngAfterViewInit() {
    /*setTimeout(() => {
      const windowWidth = window.innerWidth;
      if (windowWidth > 992) {
        this.options = {
          position: ['bottom', 'right'],
          maxStack: 8,
          timeOut: 2000,
          showProgressBar: true,
          pauseOnHover: true,
          lastOnBottom: true,
          clickToClose: true,
          preventDuplicates: false,
          preventLastDuplicates: false,
          theClass: 'bg-c-red no-icon',
          rtl: false,
          animate: 'rotate'
        };
        let html = '<h4>Live customizer</h4> <p>Click on Right Gear icon <i class="feather icon-settings"></i>';
        html += 'for apply live styles very first time in Angular 5.</p>';
        this.servicePNotify.html(
          html,
          'success'
        );
      }
    }, 75);*/
  }

}

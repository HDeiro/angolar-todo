import { Component, OnInit, ViewChild } from '@angular/core';
import { BrowserDynamicTestingModule } from '@angular/platform-browser-dynamic/testing';
import { CurrencyPipe } from '@angular/common';
import { ChartComponent } from 'angular2-chartjs';

@Component({
  selector: 'app-dashboard-home',
  templateUrl: './dashboard-home.component.html',
  styleUrls: ['./dashboard-home.component.scss']
})
export class DashboardHomeComponent {
  userMarkers: Array<any> = [];
  userLocation: any = {};
  latitude: number;
  longitude: number;
  zoom: number = 12;
  overlayBaseStyle: any;
  chart: any;
  isShowingSavings: boolean = true;
  @ViewChild('chartComponent', {static : false}) chartComponent: ChartComponent; 

  constructor(private currencyPipe: CurrencyPipe) { 
    this.overlayBaseStyle = {
      body: {
        'min-height': '20px',
        'background': '#FFF',
        'border-radius': '6px',
        'display': 'flex',
        'align-items': 'center',
        'justify-content': 'flex-start',
        'padding': '4px 12px',
        'font-size': '18px',
        'position': 'relative',
        'border': '1px solid gray'
      },
      triangle: {
        'width': '0',
        'height': '0',
        'border-left': '6px solid transparent',
        'border-right': '6px solid transparent',
        'border-top': '6px solid #FFF',
        'position': 'absolute',
        'bottom': '-6px',
        'left': 'calc(50%)',
        'transform': 'translateX(-50%)'
      },
      triangleShadow: {
        'width': '0',
        'height': '0',
        'border-left': '8px solid transparent',
        'border-right': '8px solid transparent',
        'border-top': '8px solid #B1B3B5',
        'position': 'absolute',
        'bottom': '-8px',
        'left': 'calc(50%)',
        'transform': 'translateX(-50%)'
      }
    };
    
    navigator && navigator.geolocation.getCurrentPosition(pos => {
      this.userLocation.latitude = +pos.coords.latitude;
      this.userLocation.longitude = +pos.coords.longitude;
      
      for(let i = 0; i < 1000; i++) {
        this.userMarkers.push({
          latitude: this.userLocation.latitude - (i % 2 ? i : -i)/10,
          longitude: this.userLocation.longitude - (i % 2 ? i : -i)/10,
          iconUrl: 'https://picsum.photos/16',
          title: `Marker nº ${i + 1}`,
          content: `Este é o marcador de testes número ${i+1}`
        });
      }
    });

    this.chart = {
      type: 'bar',
      data: {
        labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"],
        datasets: [{
          label: "Current Savings",
          data: [65, 59, 80, 81, 150, 120, 130],
          backgroundColor: '#0077FF',
        },{
          label: "Current Savings",
          data: [35, 129, 88, 181, 24, 123, 138],
          backgroundColor: '#FF0',
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
          xAxes: [{
            stacked: true
          }],
          yAxes: [{
            position: 'right',
            gridLines: {
              display:false
            },
            ticks: {
              maxTicksLimit: 2,
              beginAtZero: true,
              callback: value => currencyPipe.transform(value)
            }
          }]
        },
        legend: {
          display: false
        },
        tooltips: { 
          // mode: 'point',
          mode: 'index',
          yAlign: 'top',
          xAlign: 'center',
          intersect: true,
          custom: function(tooltipModel) {
            // Tooltip Element
            let tooltipElement:any = document.querySelector('#chartjs-tooltip');

            // Hide if there is no tooltip
            if (tooltipModel.opacity === 0) {
              tooltipElement.style.opacity = 0;
              return;
            }

            // Hide original tooltip
            tooltipModel.opacity = 0;

            // Set caret Position
            tooltipElement.classList.remove('above', 'below', 'no-transform');
            tooltipElement.classList.add(tooltipModel.yAlign || 'no-transform');
            
            // Set text content
            if (tooltipModel.body) {
              let bodyLines = tooltipModel.body.map(bodyItem => bodyItem.lines);
              let contentBodyLines = bodyLines.reduce((result, bodyLine, index) => {
                let bodyParts = bodyLine[0].split(':');
                let color = tooltipModel.labelColors[index].backgroundColor;

                let rightContainerStyle = `
                  font-size: 14px;
                  font-weight: bold;
                  font-family: Lato, sans-serif;
                `;
                let leftContainerStyle = `
                  display: flex;
                  align-items: center;
                  justify-content: flex-start;
                  font-size: 13px;
                  color: #757575;
                  font-family: Lato, sans-serif;
                  margin-right: 30px;
                `;
                let legendColorStyle = `
                  display: block;
                  width: 6px;
                  height: 6px;
                  border-radius: 100%;
                  background-color: ${color};
                  border-color: ${color};
                  border-width: 2px;
                  margin-right: 5px;
                `;
                let liStyle = `
                  display: flex;                  
                  border-radius: 100%;
                  align-items: center;
                  justify-content: space-between;
                  margin-bottom: 5px;
                `;

                return `${result}
                  <li style="${liStyle}">
                    <span style="${leftContainerStyle}">
                      <span id="legend-color" style="${legendColorStyle}"></span>
                      <span id="legend-description">${bodyParts[0]}</span>
                    </span>
                    <span style="${rightContainerStyle}">
                      ${currencyPipe.transform(bodyParts[1])}
                    </span>
                  </li>`;
              }, '');
              let ulStyle = `
                list-style: none;
                padding: 0;
                margin: 0;
                width: 100%;
              `;
              tooltipElement.innerHTML = `<ul style="${ulStyle}">${contentBodyLines}</ul>`;
            }

            tooltipElement.style.opacity = 1;
            tooltipElement.style.left = this._chart.canvas.offsetLeft + tooltipModel.x - 32 + 'px';
            tooltipElement.style.bottom = this._chart.canvas.offsetHeight - tooltipModel.caretY + 8 + 'px';
          }
        }
      }
    }
  }
    
  updateModel() {
    let indexPotential = -1;
    
    this.chart.data.datasets.find((dataset, index) => {
      if(dataset.id == 'POTENTIAL') {
        indexPotential = index;
        return true;
      }
      return false;
    })

    if(this.isShowingSavings) {
      indexPotential < 0 && this.chart.data.datasets.push({
        id: "POTENTIAL",
        label: "Potential Savings",
        data: [85, 79, 88, 190, 160, 130, 130],
        backgroundColor: '#B4D7FF',
      });
    } else {
      indexPotential > 0 && this.chart.data.datasets.splice(indexPotential, 1);
    }

    this.chartComponent.chart.update();
  }
}

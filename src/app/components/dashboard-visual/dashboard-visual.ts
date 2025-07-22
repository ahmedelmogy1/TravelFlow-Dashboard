import { Component, OnInit } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { ChartModule } from 'primeng/chart';

@Component({
  selector: 'app-dashboard-visual',
  imports: [ChartModule,CardModule,ButtonModule ],
  templateUrl: './dashboard-visual.html',
  styleUrl: './dashboard-visual.css'
})
export class DashboardVisual implements OnInit {
  dataGraph1: any;
  dataGraph2: any;
  dataGraph3: any;
  optionGraph1: any;
  optionGraph2: any;
  optionGraph3: any;

  
  ngOnInit(): void {
    this.dataGraph1 = {
      labels: ['January', 'February', 'March', 'April'],
      datasets: [
        {
 
          label: '',
          data: [12, 19, 3, 5],
          fill: true,
          borderColor: '#4CAF53',             //! Graph colo & border color box 
          backgroundColor: '#ECFDF3',         //! box color 
          pointBorderColor: 'transparent',
          pointBackgroundColor: 'transparent',
          tension: 0.5,
          borderWidth: 5,
          borderCapStyle: 'round'
        }
      ]
    };
 this.optionGraph1 = {
  responsive: true,
  maintainAspectRatio: false,
  indexAxis: 'x',
  rtl: true,
  plugins: {
    legend: {
      display: false
    },
    tooltip: {
      backgroundColor: '#1E293B',
      titleColor: '#fff',
      bodyColor: '#E2E8F0',
      borderColor: '#3B82F6',
      borderWidth: 0.5,       // قلل البوردر أو احذفه خالص
      cornerRadius: 6,        // زوايا أصغر
      padding: 4,             // 👈 قلل البادينج عشان الصندوق يصغر
      displayColors: false,
      titleAlign: 'center',
      bodyAlign: 'center',
      titleFont: {
        size: 10,             // 👈 حجم الخط أصغر
        weight: 'bold'
      },
      bodyFont: {
        size: 9               // 👈 حجم الخط أصغر
      }
    }
  },
  scales: {
    x: {
      reverse: true,
      ticks: {
        color: '#495057',
        display: false
      },
      grid: {
        color: '#ebedef',
        display: false
      }
    },
    y: {
      display: false,
      ticks: {
        color: '#495057',
        display: false
      },
      grid: {
        color: '#ebedef',
        display: false
      }
    }
  }
};


     this.dataGraph2 ={
      labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
      datasets: [
        
        {
          type: 'bar',
          label: 'Stacked 1',
          backgroundColor: 'rgba(59,130,246,0.4)', // الأزرق الفاتح
          data: [1000, 1500, 2000, 1200, 1700, 1400],
          stack: 'combined',
          barPercentage: 0.6, 
          
        },
        {
          type: 'bar',
          label: 'Stacked 2',
          backgroundColor: 'rgba(59,130,246,0.7)', // الأزرق الغامق
          data: [1200, 600, 1100, 900, 800, 700],
          stack: 'combined',
          barPercentage: 0.6,  
          borderRadius: {
      topLeft: 40,
      topRight: 40,
      bottomLeft: 0,
      bottomRight: 0
    }
        },
        {
          type: 'line',
          label: 'Trend',
          borderColor: '#2563eb', // أزرق غامق
          borderWidth: 3,
          tension: 0.4, // انسيابية
          fill: false,
          pointBackgroundColor: '#fff',
          pointBorderColor: '#2563eb',
          pointBorderWidth: 2,
          data: [2200, 2100, 3100, 1700, 2500, 2000],
        }
      ]
    };

    this.optionGraph2= {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: {
          display:false,
          labels: { color: '#4B5563' }
        }
      },
      scales: {
        x: {
          stacked: true,
          ticks: { color: '#4B5563' },
          grid: { color: '#E5E7EB' }
        },
        y: {
          stacked: true,
          beginAtZero: true,
          ticks: { color: '#4B5563' },
          grid: { color: '#E5E7EB' }
        }
      }
    };
  
    
    this.dataGraph3 = {
  labels: ['Beach', 'Cultural', 'City', 'Nature', 'Culinary', 'Relax', 'Adventure'],
  datasets: [
    {
      data: [50, 15, 30, 20, 40, 18, 35],
      backgroundColor: [
        'rgb(74, 58, 255)', // Beach
        '#E5EAFC', // Cultural
        '#E5EAFC', // City
        '#E5EAFC', // Nature
        '#E5EAFC',               // Culinary (مميز)
        '#E5EAFC', // Relax
        '#E5EAFC'  // Adventure
      ],
      borderRadius: 8, // تدوير الأعمدة
      
      barPercentage: 1, // عرض العمود
      categoryPercentage: 0.5
    }
  ]
};

this.optionGraph3 = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: {
      display: false // إخفاء المربعات
    },
    tooltip: {
      backgroundColor: '#0F172A',
      titleColor: '#fff',
      bodyColor: '#fff',
      displayColors: false,
      padding: 6,
      cornerRadius: 6,
      titleAlign: 'center',
      bodyAlign: 'center',
      callbacks: {
        label: function(context: any) {
          return context.parsed.y + '%';
        },
        title: function() {
          return ''; // نشيل العنوان ونخلي القيمة بس
        }
      }
    }
  },
  scales: {
    x: {
      grid: {
        display: false
      },
      ticks: {
        color: '#64748B', // لون أسماء الأماكن
        font: {
          size: 12
        }
      }
    },
    y: {
      beginAtZero: true,
      ticks: {
        color: '#CBD5E1',
        stepSize: 10,
        callback: function(value: any) {
          return value + '%';
        }
      },
      grid: {
        color: '#E2E8F0'
      }
    }
  }
};


  }

}

import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule,Platform } from '@ionic/angular';
import { RouterModule } from '@angular/router';

interface Componente{
  icon:string;
  name:string;
  redirectTo:string;
}

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule, RouterModule]
})

export class InicioPage implements OnInit {

listaComponentes: Componente[] = []; // Lista completa de componentes
componentesPagina: Componente[] = []; // Lista de componentes mostrados en la página actual
paginaActual = 1;
elementosPorPagina = 10;
totalPaginas: number;
searchTerm: string;


  constructor( private platform: Platform) { 
    this.totalPaginas = 0;
    this.searchTerm = "";
   }

   actualizarComponentesPagina() {
    const inicio = (this.paginaActual - 1) * this.elementosPorPagina;
    const fin = inicio + this.elementosPorPagina;
    this.componentesPagina = this.listaComponentes.slice(inicio, fin);
  }

  mostrarPaginaAnterior() {
    if (this.paginaActual > 1) {
      this.paginaActual--;
      this.actualizarComponentesPagina();
    }
  }

  toggleDarkMode() {
    const body = document.body;
    const isDarkMode = body.classList.contains('dark');
  
    if (isDarkMode) {
      body.classList.remove('dark');
    } else {
      body.classList.add('dark');
    }
  }
  
  
  mostrarPaginaSiguiente() {
    if (this.paginaActual < this.totalPaginas) {
      this.paginaActual++;
      this.actualizarComponentesPagina();
    }
  }

  ngOnInit() {

       this.listaComponentes = [
     {
       icon: 'chevron-down',
       name: '1.Accordion',
       redirectTo: '/accordion' 
     },
     {
       icon: 'settings',
       name: '2.Action sheet',
       redirectTo: '/action-sheet' 
     },
     {
      icon: 'warning',
      name: '3.Alert',
      redirectTo: '/alert' 
    },
     {
       icon: 'person-circle',
       name: '4.Avatar',
       redirectTo: '/avatar' 
     },
     {
       icon: 'notifications-circle',
       name: '5.Badge',
       redirectTo: '/badge' 
      },
      {
        icon: 'eyedrop',
        name: '6.Breadcrumbs',
        redirectTo: '/breadcrumbs' 
      },
      {
        icon: 'add-circle',
        name: '7.Button',
        redirectTo: '/button' 
      },
      {
        icon: 'images',
        name: '8.Card',
        redirectTo: '/card' 
      },
      {
        icon: 'checkbox',
        name: '9.Checkbox',
        redirectTo: '/checkbox' 
      },
      {
        icon: 'hardware-chip',
        name: '10.Chip',
        redirectTo: '/chip' 
      },
      {
        icon: 'cube',
        name: '11.Content',
        redirectTo: '/content' 
      },
      {
        icon: 'calendar-number',
        name: '12.Date & time picker',
        redirectTo: '/date-time-picker' 
      },
      {
        icon: 'earth',
        name: '13.Floating action button',
        redirectTo: '/floating-action-button' 
      },
      {
        icon: 'grid',
        name: '14.Grid',
        redirectTo: '/grid' 
      },
      {
        icon: 'copy',
        name: '15.Icons',
        redirectTo: '/icons' 
      },
      {
        icon: 'play-forward-circle',
        name: '16.Infinite scroll',
        redirectTo: '/infinite-scroll' 
      },
      {
        icon: 'terminal',
        name: '17.Input',
        redirectTo: '/input' 
      },
      {
        icon: 'extension-puzzle',
        name: '18.Item',
        redirectTo: '/item' 
      },
      {
        icon: 'code-working',
        name: '19.Item group',
        redirectTo: '/item-groud' 
      },
      {
        icon: 'list',
        name: '20.List',
        redirectTo: '/list' 
      },
      {
        icon: 'cloud-upload',
        name: '21.Loading',
        redirectTo: '/loading' 
      },
      {
        icon: 'menu',
        name: '22.Menu',
        redirectTo: '/menu' 
      },
      {
        icon: 'bookmarks',
        name: '23.Modal',
        redirectTo: '/modal' 
      },
      {
        icon: 'arrow-forward-circle',
        name: '24.Navigation',
        redirectTo: '/navigation' 
      },
      {
        icon: 'clipboard',
        name: '25.Note',
        redirectTo: '/note' 
      },
      {
        icon: 'aperture',
        name: '26.Picker',
        redirectTo: '/picker' 
      },
      {
        icon: 'phone-portrait',
        name: '27.Popover',
        redirectTo: '/popover' 
      },
      {
        icon: 'battery-half',
        name: '28.Progress bar',
        redirectTo: '/progress-bar' 
      },
      {
        icon: 'radio-button-on',
        name: '29.Radio',
        redirectTo: '/radio' 
      },
      {
        icon: 'shuffle',
        name: '30.Range',
        redirectTo: '/range' 
      },
      {
        icon: 'refresh-circle',
        name: '31.Refresher',
        redirectTo: '/refresher' 
      },
      {
        icon: 'reorder-two',
        name: '32.Reorder',
        redirectTo: '/reorder' 
      },
      {
        icon: 'search',
        name: '33.Searchbar',
        redirectTo: '/searchbar' 
      },
      {
        icon: 'book',
        name: '34.Segment',
        redirectTo: '/segment' 
      },
      {
        icon: 'create',
        name: '35.Select',
        redirectTo: '/select' 
      },
      {
        icon: 'text',
        name: '36.Skeleton text',
        redirectTo: '/skeleton-text' 
      },
      {
        icon: 'sync',
        name: '37.Spinner',
        redirectTo: '/spinner' 
      },
      {
        icon: 'logo-tableau',
        name: '38.Tabs',
        redirectTo: '/tabs' 
      },
      {
        icon: 'at-circle',
        name: '39.Text',
        redirectTo: '/text' 
      },
      {
        icon: 'camera',
        name: '40.Thumbnail',
        redirectTo: '/thumbnail' 
      },
      {
        icon: 'cloud',
        name: '41.Toast',
        redirectTo: '/toast' 
      },
      {
        icon: 'toggle',
        name: '42.Toggle',
        redirectTo: '/toggle' 
      },
      {
        icon: 'hammer',
        name: '43.Toolbar',
        redirectTo: '/toolbar' 
      },
     
    ];
    
   this.totalPaginas = Math.ceil(this.listaComponentes.length / this.elementosPorPagina);
   this.actualizarComponentesPagina();
  }

  actualizarPagina(pagina: number) {
    const startIndex = (pagina - 1) * this.elementosPorPagina;
    const endIndex = startIndex + this.elementosPorPagina;
    this.componentesPagina = this.listaComponentes.slice(startIndex, endIndex);
    this.paginaActual = pagina;
  }
  
  buscarComponente() {
    if (this.searchTerm) {
      // Filtra la lista de componentes si hay un término de búsqueda
      this.componentesPagina = this.listaComponentes.filter((componente) => {
        return componente.name.toLowerCase().includes(this.searchTerm.toLowerCase());
      });
    } else {
      // Si el término de búsqueda está vacío, restablece la paginación
      this.actualizarPagina(this.paginaActual);
    }
  }

}

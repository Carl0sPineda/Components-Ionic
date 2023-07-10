import { Routes} from '@angular/router';

export const routes: Routes = [
  // {
  //   path: 'home',
  //   loadComponent: () => import('./home/home.page').then((m) => m.HomePage),
  // },
  {
    path: '',
    redirectTo: 'inicio',
    pathMatch: 'full',
  },
  {
    path: 'inicio',
    loadComponent: () => import('./pages/inicio/inicio.page').then( m => m.InicioPage)
  },
  {
    path: 'accordion',
    loadComponent: () => import('./pages/accordion/accordion.page').then( m => m.AccordionPage)
  },
  {
    path: 'action-sheet',
    loadComponent: () => import('./pages/action-sheet/action-sheet.page').then( m => m.ActionSheetPage)
  },
  {
    path: 'alert',
    loadComponent: () => import('./pages/alert/alert.page').then( m => m.AlertPage)
  },
  {
    path: 'avatar',
    loadComponent: () => import('./pages/avatar/avatar.page').then( m => m.AvatarPage)
  },
  {
    path: 'badge',
    loadComponent: () => import('./pages/badge/badge.page').then( m => m.BadgePage)
  },
  {
    path: 'breadcrumbs',
    loadComponent: () => import('./pages/breadcrumbs/breadcrumbs.page').then( m => m.BreadcrumbsPage)
  },
  {
    path: 'button',
    loadComponent: () => import('./pages/button/button.page').then( m => m.ButtonPage)
  },
  {
    path: 'card',
    loadComponent: () => import('./pages/card/card.page').then( m => m.CardPage)
  },
  {
    path: 'checkbox',
    loadComponent: () => import('./pages/checkbox/checkbox.page').then( m => m.CheckboxPage)
  },
  {
    path: 'chip',
    loadComponent: () => import('./pages/chip/chip.page').then( m => m.ChipPage)
  },
  {
    path: 'content',
    loadComponent: () => import('./pages/content/content.page').then( m => m.ContentPage)
  },
  {
    path: 'date-time-picker',
    loadComponent: () => import('./pages/date-time-picker/date-time-picker.page').then( m => m.DateTimePickerPage)
  },
  {
    path: 'floating-action-button',
    loadComponent: () => import('./pages/floating-action-button/floating-action-button.page').then( m => m.FloatingActionButtonPage)
  },
  {
    path: 'grid',
    loadComponent: () => import('./pages/grid/grid.page').then( m => m.GridPage)
  },
  {
    path: 'icons',
    loadComponent: () => import('./pages/icons/icons.page').then( m => m.IconsPage)
  },
  {
    path: 'infinite-scroll',
    loadComponent: () => import('./pages/infinite-scroll/infinite-scroll.page').then( m => m.InfiniteScrollPage)
  },
  {
    path: 'input',
    loadComponent: () => import('./pages/input/input.page').then( m => m.InputPage)
  },
  {
    path: 'item',
    loadComponent: () => import('./pages/item/item.page').then( m => m.ItemPage)
  },
  {
    path: 'item-groud',
    loadComponent: () => import('./pages/item-groud/item-groud.page').then( m => m.ItemGroudPage)
  },
  {
    path: 'list',
    loadComponent: () => import('./pages/list/list.page').then( m => m.ListPage)
  },
  {
    path: 'loading',
    loadComponent: () => import('./pages/loading/loading.page').then( m => m.LoadingPage)
  },
  {
    path: 'menu',
    loadComponent: () => import('./pages/menu/menu.page').then( m => m.MenuPage)
  },
  {
    path: 'modal',
    loadComponent: () => import('./pages/modal/modal.page').then( m => m.ModalPage)
  },
  {
    path: 'navigation',
    loadComponent: () => import('./pages/navigation/navigation.page').then( m => m.NavigationPage)
  },
  {
    path: 'note',
    loadComponent: () => import('./pages/note/note.page').then( m => m.NotePage)
  },
  {
    path: 'picker',
    loadComponent: () => import('./pages/picker/picker.page').then( m => m.PickerPage)
  },
  {
    path: 'popover',
    loadComponent: () => import('./pages/popover/popover.page').then( m => m.PopoverPage)
  },
  {
    path: 'progress-bar',
    loadComponent: () => import('./pages/progress-bar/progress-bar.page').then( m => m.ProgressBarPage)
  },
  {
    path: 'radio',
    loadComponent: () => import('./pages/radio/radio.page').then( m => m.RadioPage)
  },
  {
    path: 'range',
    loadComponent: () => import('./pages/range/range.page').then( m => m.RangePage)
  },
  {
    path: 'refresher',
    loadComponent: () => import('./pages/refresher/refresher.page').then( m => m.RefresherPage)
  },
  {
    path: 'reorder',
    loadComponent: () => import('./pages/reorder/reorder.page').then( m => m.ReorderPage)
  },
  {
    path: 'searchbar',
    loadComponent: () => import('./pages/searchbar/searchbar.page').then( m => m.SearchbarPage)
  },
  {
    path: 'segment',
    loadComponent: () => import('./pages/segment/segment.page').then( m => m.SegmentPage)
  },
  {
    path: 'select',
    loadComponent: () => import('./pages/select/select.page').then( m => m.SelectPage)
  },
  {
    path: 'skeleton-text',
    loadComponent: () => import('./pages/skeleton-text/skeleton-text.page').then( m => m.SkeletonTextPage)
  },
  {
    path: 'spinner',
    loadComponent: () => import('./pages/spinner/spinner.page').then( m => m.SpinnerPage)
  },
  {
    path: 'tabs',
    loadComponent: () => import('./pages/tabs/tabs.page').then( m => m.TabsPage),
    children:[
      {
        path: 'spinner',
        loadComponent: () => import('./pages/spinner/spinner.page').then( m => m.SpinnerPage)
      },
      {
        path: 'picker',
        loadComponent: () => import('./pages/picker/picker.page').then( m => m.PickerPage)
      },
      {
        path: 'action-sheet',
        loadComponent: () => import('./pages/action-sheet/action-sheet.page').then( m => m.ActionSheetPage)
      },
      {
        path: 'searchbar',
        loadComponent: () => import('./pages/searchbar/searchbar.page').then( m => m.SearchbarPage)
      },
    ]

  },
  {
    path: 'text',
    loadComponent: () => import('./pages/text/text.page').then( m => m.TextPage)
  },
  {
    path: 'thumbnail',
    loadComponent: () => import('./pages/thumbnail/thumbnail.page').then( m => m.ThumbnailPage)
  },
  {
    path: 'toast',
    loadComponent: () => import('./pages/toast/toast.page').then( m => m.ToastPage)
  },
  {
    path: 'toggle',
    loadComponent: () => import('./pages/toggle/toggle.page').then( m => m.TogglePage)
  },
  {
    path: 'toolbar',
    loadComponent: () => import('./pages/toolbar/toolbar.page').then( m => m.ToolbarPage)
  },
 
];

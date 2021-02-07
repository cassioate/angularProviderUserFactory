import { Directive, HostBinding, HostListener, Input} from '@angular/core';

@Directive({
  selector: '[appCampoColorido]',
  exportAs: 'campoColorido'
})
export class CampoColoridoDirective {

  @Input() cor = 'gray';

  @HostBinding('style.backgroundColor') corDeFundo: string;


  // tslint:disable-next-line:typedef
  @HostListener('focus') onFocus() {
    this.corDeFundo = this.cor;
  }

  // tslint:disable-next-line:typedef
  @HostListener('blur') offFocus() {
    this.corDeFundo = 'transparent';
  }

}

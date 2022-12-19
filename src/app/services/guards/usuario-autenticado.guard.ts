import { UsuarioService } from './../usuario.service';
import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsuarioAutenticadoGuard implements CanActivate {
  constructor (private usuarioService: UsuarioService,
              private router: Router) {  }
  canActivate() {
    if(this.usuarioService.logado) {
      return true;
    }
    this.router.navigate(['login']);
    return false;
  }

}

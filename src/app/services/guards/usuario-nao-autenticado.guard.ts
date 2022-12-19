import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { UsuarioService } from '../usuario.service';

@Injectable({
  providedIn: 'root'
})
export class UsuarioNaoAutenticadoGuard implements CanActivate {
  constructor(private usuarioService: UsuarioService,
    private router: Router) {}
  canActivate( ) {
    if(this.usuarioService.logado) {
      this.router.navigate(['']);
      return false;
    }
    return true;
  }

}

import { Component, OnInit } from '@angular/core';
import { Funcionalidade } from './models/funcionalidade.model';
import { Menu } from './models/menu.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';
  menus: Array<Menu> = new Array<Menu>();

   ngOnInit(): void {
     const funcionalidades = this.getFuncionalidades();
     this.menus = this.getMenus(funcionalidades);
  }

  getMenus(funcionalidades: Array<Funcionalidade>): Array<Menu> {
    const menus = new Array<Menu>();
    funcionalidades.forEach(funcionalidade => {
        if (funcionalidade.nivel === null)  {
          const menu = new Menu();
          menu.id = funcionalidade.id;
          menu.nome = funcionalidade.nome;
          menu.nivel = funcionalidade.nivel;
          menus.push(menu);
        } else {
          const menu = this.getMenu(funcionalidade.nivel, menus);
          if (menu !== null) {
            const subMenu = new Menu();
            subMenu.id = funcionalidade.id;
            subMenu.nome = funcionalidade.nome;
            subMenu.nivel = funcionalidade.nivel;
            menu.subMenu.push(subMenu);
          }
        }
    });
    return menus;
  }

  getMenu(nivel: number, menus:  Array<Menu>): Menu {
      let menu: Menu = null;
      menus.forEach(item => {
        if (item.id === nivel) {
          menu = item;
          return;
        } else {
          if (item.subMenu.length > 0) {
            menu = this.getMenu(nivel, item.subMenu);
            if (menu != null) {
              return;
            }
          }
        }
      });
      return menu;
  }

  getFuncionalidades(): Array<Funcionalidade> {
     const arrayFromApi = new Array<Funcionalidade>();

      const clientes = new Funcionalidade();
      clientes.id = 1;
      clientes.nome = 'Clientes';
      clientes.nivel = null;

      arrayFromApi.push(clientes);

      const usuario = new Funcionalidade();
      usuario.id = 2;
      usuario.nome = 'Usuário';
      usuario.nivel = null;

      arrayFromApi.push(usuario);

      const cadastro = new Funcionalidade();
      cadastro.id = 3;
      cadastro.nome = 'Cadastro';
      cadastro.nivel = 1;

      arrayFromApi.push(cadastro);

      const rapido = new Funcionalidade();
      rapido.id = 4;
      rapido.nome = 'Rápido';
      rapido.nivel = 3;

      arrayFromApi.push(rapido);

      const outroCadastro = new Funcionalidade();
      outroCadastro.id = 5;
      outroCadastro.nome = 'Cadastro';
      outroCadastro.nivel = 2;

      arrayFromApi.push(outroCadastro);

      return arrayFromApi;
  }
}

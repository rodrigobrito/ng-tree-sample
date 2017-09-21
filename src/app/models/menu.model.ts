export class Menu {
    id: number;
    nome: string;
    subMenu: Array<Menu> = new Array<Menu>();
    nivel: number;
}

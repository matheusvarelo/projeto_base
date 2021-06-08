import { Component, OnInit } from '@angular/core';
import { NotifierService } from 'angular-notifier';
import { ConfirmationService } from 'primeng/api';
import { Usuario } from 'src/app/models/usuario';
import { UsuarioService } from 'src/app/services/usuario/usuario.service';

@Component({
  selector: 'app-usuario-lista',
  templateUrl: './usuario-lista.component.html',
  styleUrls: ['./usuario-lista.component.css'],
  providers:[ConfirmationService]
})
export class UsuarioListaComponent implements OnInit {

  private readonly notifier: NotifierService;

  usuarios: Array<Usuario> = [];

  constructor(
    notifierService: NotifierService,
    private usuarioService: UsuarioService,
    private confirmationService: ConfirmationService,
    private nt: NotifierService
  ) {
    this.notifier = notifierService;
  }

  ngOnInit(): void {
    this.buscarTodos();
  }

  

  private buscarTodos() {
    this.usuarioService.buscarTodos().subscribe(res => {
      this.usuarios = res;
    });
  }

  confirmaExclusao(id: number) {
    this.confirmationService.confirm({
      message: `Você deseja excluir o usuario #${id}?`,
      accept: () => {
        this.usuarioService.deletarPorId(id).subscribe(() => {
          this.nt.notify("sucess", `O usuário ${id} foi excluido com sucesso!`);
          this.buscarTodos();
        });
      }
    });
  }

}

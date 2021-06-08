import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { NotifierService } from 'angular-notifier';
import { Usuario } from 'src/app/models/usuario';
import { UsuarioService } from 'src/app/services/usuario/usuario.service';

@Component({
  selector: 'app-usuario-formulario',
  templateUrl: './usuario-formulario.component.html',
  styleUrls: ['./usuario-formulario.component.css']
})
export class UsuarioFormularioComponent implements OnInit {

  id: any;
  acao: string = "Novo Usuario";
  titulo: string = "Cadastrar o Usuario";
  usuario: Usuario = new Usuario();
  form: FormGroup;

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private usuarioService: UsuarioService,
    private nt: NotifierService,
    public formBuilder: FormBuilder
  ) {
    this.id = this.activatedRoute.snapshot.paramMap.get("id");
  }

  ngOnInit(): void {
    this.montaFormBuilder();
    this.buscarUsuario();
  }

  private montaFormBuilder() {
    this.form = this.formBuilder.group({
      nome: ["", [Validators.required]],
      email: ["", [Validators.required]]
      
    });
  }

  private buscarUsuario() {
    if (this.id) {
      this.acao = "Alterar";
      this.titulo = "Alterar Usuario";
      this.usuarioService.buscarPorId(this.id).subscribe(obj => {
        this.usuario = obj;
      });
    }
  }


  

  

  

  save() {


    if (!this.validateEmail(this.usuario.email)) {
      return this.nt.notify("warning", "E-mail informado é inválido!");
    }
    if (this.id) {
      this.usuarioService.atualizar(this.usuario, this.id).subscribe(() => {
        this.nt.notify("sucess", "Usuario atualizado com sucesso!");
        this.router.navigate(['usuarios']);
      })
    } else {
      this.usuarioService.salvar(this.usuario).subscribe(() => {
        this.nt.notify("sucess", "Usuario cadastrado com sucesso!");
        this.router.navigate(['usuarios']);
      })
    }
  }

  private validateEmail(email) {
    var re = /\S+@\S+\.\S+/;
    return re.test(email);
  }
}

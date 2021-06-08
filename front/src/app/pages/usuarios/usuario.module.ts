import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { DropdownModule } from 'primeng/dropdown';
import { InputMaskModule } from 'primeng/inputmask';
import { InputTextModule } from 'primeng/inputtext';
import { MessagesModule } from 'primeng/messages';
import { PanelModule } from 'primeng/panel';
import { RadioButtonModule } from 'primeng/radiobutton';
import { TableModule } from 'primeng/table';
import { ToolbarModule } from 'primeng/toolbar';
import { UsuarioFormularioComponent } from './usuario-formulario/usuario-formulario.component';
import { UsuarioListaComponent } from './usuario-lista/usuario-lista.component';
import { FieldsetModule } from 'primeng/fieldset';

@NgModule({
  declarations: [UsuarioListaComponent, UsuarioFormularioComponent],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    ReactiveFormsModule,
    TableModule,
    RadioButtonModule,
    DropdownModule,
    ConfirmDialogModule,
    MessagesModule,
    PanelModule,
    ToolbarModule,
    InputTextModule,
    FieldsetModule,
    InputMaskModule
  ]
})
export class UsuarioModule { }

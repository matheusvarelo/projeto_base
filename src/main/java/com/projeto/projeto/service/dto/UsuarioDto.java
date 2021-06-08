package com.projeto.projeto.service.dto;
import lombok.*;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.validation.constraints.Email;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;


@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
@EqualsAndHashCode
public class UsuarioDto {

    private Integer id;
    @NotNull(message = "Campo obrigatorio")
    @Size(min = 5, max = 100,message = "o nome deve conter no minimo 5 e no max 100")
    private String nome;
    @NotNull(message = "Campo obrigatorio")
    @Email (message = "email nao é  valido")
    private String email;
}

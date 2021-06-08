package com.projeto.projeto.service.maping;

import com.projeto.projeto.model.Usuario;
import com.projeto.projeto.service.dto.UsuarioDto;

public class UsuarioMaping {
    public Usuario dtoToEntity(UsuarioDto dto){
        return Usuario.builder()
                .id(dto.getId())
                .nome(dto.getNome())
                .email(dto.getEmail())
                .build();
    }
    public UsuarioDto entityToDto(Usuario entity){
        return UsuarioDto.builder()
                .id(entity.getId())
                .nome(entity.getNome())
                .email(entity.getEmail())
                .build();
    }
}

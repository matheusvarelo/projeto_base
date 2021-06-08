package com.projeto.projeto.service;

import com.projeto.projeto.model.Usuario;
import com.projeto.projeto.repository.UsuarioRepository;
import com.projeto.projeto.service.dto.UsuarioDto;
import com.projeto.projeto.service.maping.UsuarioMaping;
import org.hibernate.ObjectNotFoundException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class UsuarioService {
    @Autowired
    private UsuarioRepository usuarioRepository;

    public List<Usuario> findAll(){
        return usuarioRepository.findAll();

    }
    public Usuario findById(Integer id){
        Optional<Usuario> obj = usuarioRepository.findById(id);
        return obj.orElseThrow(()-> new ObjectNotFoundException(1L,"Objeto não encontrado"));
    }
    public UsuarioDto insert(UsuarioDto usuario){

        UsuarioMaping usuarioMaping = new UsuarioMaping();
        Usuario entity = usuarioMaping.dtoToEntity(usuario);
        return  usuarioMaping.entityToDto(usuarioRepository.save(entity));
    }
    public Usuario update(Usuario usuario,Integer id){
        usuario.setId(id);
        return usuarioRepository.save(usuario);

    }
    public void delete(Integer id) {
        usuarioRepository.delete(findById(id));
    }
}

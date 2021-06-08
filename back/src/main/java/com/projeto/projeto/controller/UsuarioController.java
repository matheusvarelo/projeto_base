package com.projeto.projeto.controller;

import com.projeto.projeto.model.Usuario;
import com.projeto.projeto.service.UsuarioService;
import com.projeto.projeto.service.dto.UsuarioDto;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.List;

@RestController
@RequestMapping(value = "/usuarios")
public class UsuarioController {
    @Autowired
    private UsuarioService usuarioService;
    @GetMapping
    public ResponseEntity<List<Usuario>> findAll(){
        return ResponseEntity.ok().body(usuarioService.findAll());
    }
    @GetMapping(value = "/{id}")
    public ResponseEntity<Usuario> findById(@PathVariable Integer id){
        return ResponseEntity.ok().body(usuarioService.findById(id));
    }
    @PostMapping
    public ResponseEntity<UsuarioDto> insert(@Valid @RequestBody UsuarioDto obj){
        return ResponseEntity.ok().body(usuarioService.insert(obj));
    }
    @PutMapping(value = "/{id}")
    public ResponseEntity<Usuario> update(@PathVariable Integer id, @RequestBody Usuario obj){
        return ResponseEntity.ok().body(usuarioService.update(obj,id));
    }
    @DeleteMapping(value = "/{id}")
    public ResponseEntity<Void> delete(@PathVariable Integer id){
        usuarioService.delete(id);
        return ResponseEntity.noContent().build();
    }

}

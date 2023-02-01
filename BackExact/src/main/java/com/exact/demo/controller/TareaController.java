package com.exact.demo.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.exact.demo.interfacesService.ITareaService;
import com.exact.demo.model.Tarea;

@RestController
@CrossOrigin(origins = {"*"})
@RequestMapping("/api")
public class TareaController {
	@Autowired
	private ITareaService service;
	
	
	@GetMapping("/listar")
	public List<Tarea> listar() {
		return service.listar();
	}
	
	@PostMapping("/insertar")
	public Tarea save(@RequestBody Tarea tarea) {
		return service.save(tarea);
	}
	
	@GetMapping("/listar/{id}") 
	public Tarea mostrar(@PathVariable int id) {
		return service.listarId(id);
	}
	
	@PutMapping("/actualizar/{id}")
	public Tarea update(@RequestBody Tarea tarea,@PathVariable int id) {
		Tarea tareaActual =service.listarId(id);
		
		tareaActual.setNombre(tarea.getNombre());
		tareaActual.setEstado(tarea.getEstado());
		
		return service.save(tareaActual);
	}
	
	@DeleteMapping("/eliminar/{id}")
	public void delete(@PathVariable Integer id) {
		service.delete(id);
	}
}

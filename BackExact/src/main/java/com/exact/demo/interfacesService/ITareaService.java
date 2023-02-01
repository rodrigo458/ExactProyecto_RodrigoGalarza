package com.exact.demo.interfacesService;

import java.util.List;

import com.exact.demo.model.Tarea;

public interface ITareaService {
	public List<Tarea>listar();
	public Tarea listarId(int id);
	public Tarea save(Tarea t);
	public void delete(int id);
}

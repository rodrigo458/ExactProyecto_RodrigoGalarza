package com.exact.demo.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.exact.demo.interfaces.ITarea;
import com.exact.demo.interfacesService.ITareaService;
import com.exact.demo.model.Tarea;


@Service
public class TareaService implements ITareaService{

	@Autowired
	private ITarea data; 
	
	@Override
	@Transactional(readOnly = true)
	public List<Tarea> listar() {
		// TODO Auto-generated method stub
		return (List<Tarea>)data.findAll();
	}

	@Override
	@Transactional(readOnly = true)
	public Tarea listarId(int id) {
		// TODO Auto-generated method stub
		return data.findById(id).orElse(null);
	}

	@Override
	@Transactional(readOnly = false)
	public Tarea save(Tarea t) {
		// TODO Auto-generated method stub
		return data.save(t);
	}

	@Override
	@Transactional(readOnly = false)
	public void delete(int id) {
		// TODO Auto-generated method stub
		data.deleteById(id);
	}

}

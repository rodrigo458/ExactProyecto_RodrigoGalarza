package com.exact.demo.interfaces;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.exact.demo.model.Tarea;

@Repository
public interface ITarea extends CrudRepository<Tarea,Integer>{

}

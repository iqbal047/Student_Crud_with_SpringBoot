package com.idb.springcrud.service;

import com.idb.springcrud.model.Student;

import java.util.List;

public interface StudentService {
    Student save(Student student);
    List<Student> findAll();
    void deleteById(long id);
}

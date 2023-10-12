package com.idb.springcrud.controller;

import com.idb.springcrud.model.Student;
import com.idb.springcrud.service.StudentService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@CrossOrigin("http://localhost:4200")
@RestController
@RequestMapping("/student")
@RequiredArgsConstructor
public class StudentController {

    private final StudentService studentService;

    @PostMapping(value = "/save", consumes = MediaType.APPLICATION_JSON_VALUE, produces = MediaType.APPLICATION_JSON_VALUE)
    public Map<String, String> save(@RequestBody Student student) {
        Student result = studentService.save(student);
        Map<String, String> response = new HashMap<>();
        if (result.getId() != null && result.getId() > 0) {
            response.put("message", "Successfully stored data");
        } else {
            response.put("message", "Failed to store data") ;
        }
        return response;
    }

    @GetMapping
    public List<Student> findAll() {
        return studentService.findAll();
    }

    @DeleteMapping("/delete/{id}")
    public Map<String, String> delete(@PathVariable("id") Long id) {
        studentService.deleteById(id);
        Map<String, String> response = new HashMap<>();
        response.put("message", "Deleted successfully");
        return response;
    }
}

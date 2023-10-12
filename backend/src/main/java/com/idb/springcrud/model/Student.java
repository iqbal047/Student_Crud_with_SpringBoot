package com.idb.springcrud.model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import lombok.Data;

@Entity
@Data
public class Student {
    @Id
    @GeneratedValue
    private Long id;
    private String name;
    private String email;
    private String password;
    private String designation;
    private String department;
    private String salary;

}

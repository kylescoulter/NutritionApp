package com.nutrinav.models


import javax.persistence.Entity
import javax.persistence.GeneratedValue
import javax.persistence.GenerationType
import javax.persistence.Id

@Entity
class AccountEntity {

    @Id
    @GeneratedValue(strategy= GenerationType.AUTO)
    private int id
    private String email
    private String username
    private String password
    private String firstName
    private String lastName

    AccountEntity() {

    }

    AccountEntity(String email, String username, String password, String firstName, String lastName) {
        this.id = id
        this.email = email
        this.username = username
        this.password = password
        this.firstName = firstName
        this.lastName = lastName
    }
    int getId() {
        return id
    }
    void setId(Integer id) {
        this.id = id
    }
    String getFirstName() {
        return firstName
    }
    void setFirstName(String name) {
        this.firstName = name
    }
    String getEmail() {
        return email
    }
    void setEmail(String email) {
        this.email = email
    }

    void setUsername(String username) {
        this.username = username
    }

    String getUsername() {
        return username
    }

    void setPassword(String password) {
        this.password = password
    }

    String getPassword(){
        return password
    }

    void setLastName(String lastName) {
        this.lastName = lastName
    }

    String getLastName() {
        return lastName
    }
}

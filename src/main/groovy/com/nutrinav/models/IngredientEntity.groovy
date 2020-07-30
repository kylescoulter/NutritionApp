package com.nutrinav.models

import javax.persistence.Entity
import javax.persistence.GeneratedValue
import javax.persistence.GenerationType
import javax.persistence.Id

@Entity
class IngredientEntity {

    @Id
    @GeneratedValue(strategy= GenerationType.IDENTITY)
    private int id
    private String name
    private int calories

    IngredientEntity() {

    }

    IngredientEntity(String name, int calories) {
        this.id = id
        this.name = name
        this.calories = calories
    }

    int getId() {
        return id
    }

    void setId(Integer id) {
        this.id = id
    }

    String getName() {
        return name
    }

    void setName(String name) {
        this.name = name
    }

    int getCalories() {
        return calories
    }

    void setCalories(int calories) {
        this.calories = calories
    }
}

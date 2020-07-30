package com.nutrinav.controllers

import com.nutrinav.models.IngredientEntity
import com.nutrinav.repositories.IngredientRepository
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.http.ResponseEntity
import org.springframework.web.bind.annotation.CrossOrigin
import org.springframework.web.bind.annotation.PostMapping
import org.springframework.web.bind.annotation.RequestBody
import org.springframework.web.bind.annotation.RestController


@CrossOrigin
@RestController
class IngredientController {

    @Autowired
    private IngredientRepository ingredientRepository

    @PostMapping("/ingredient/create")
    ResponseEntity<IngredientEntity> createIngredient(@RequestBody IngredientEntity ingredientEntity) {
        IngredientEntity result = ingredientRepository.save(ingredientEntity)
        return ResponseEntity.created(new URI("/ingredient/create/" + result.getName())).body(result)
    }


}

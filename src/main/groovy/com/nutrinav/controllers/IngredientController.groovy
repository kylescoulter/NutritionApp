package com.nutrinav.controllers

import com.nutrinav.models.IngredientEntity
import com.nutrinav.repositories.IngredientRepository
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.http.HttpStatus
import org.springframework.http.ResponseEntity
import org.springframework.web.bind.annotation.CrossOrigin
import org.springframework.web.bind.annotation.GetMapping
import org.springframework.web.bind.annotation.PathVariable
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

    @GetMapping("/ingredient/{name}")
    ResponseEntity<IngredientEntity> findIngredientByName(@PathVariable String name) {
        IngredientEntity ingredientEntity = ingredientRepository.findByName(name)
        return new ResponseEntity<IngredientEntity>(ingredientEntity, HttpStatus.OK)
    }

}

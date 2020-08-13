package com.nutrinav.repositories

import com.nutrinav.models.IngredientEntity
import org.springframework.data.jpa.repository.JpaRepository

interface IngredientRepository extends JpaRepository<IngredientEntity, Integer> {

    IngredientEntity findByName(String ingredientName);
}

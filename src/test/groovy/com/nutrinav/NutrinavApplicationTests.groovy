package com.nutrinav

import com.nutrinav.controllers.*
import com.nutrinav.models.*
import org.springframework.context.ApplicationContext
import org.springframework.context.annotation.AnnotationConfigApplicationContext
import spock.lang.Specification
import org.springframework.http.ResponseEntity
import java.util.Scanner


class NutrinavApplicationTests extends Specification {
    ApplicationContext context = new AnnotationConfigApplicationContext("com.nutrinav")
    AccountController accountController = context.getBean(AccountController.class)
    AccountEntity accountEntity
    ResponseEntity<AccountEntity> accountEntityResponse
    IngredientController ingredientController = context.getBean(IngredientController.class)
    IngredientEntity ingredientEntity
    ResponseEntity<IngredientEntity> ingredientEntityResponse
    def sampleResponse = new SampleResponse()
    def "A new AccountEntity is created"() {
        when:
        accountEntity = new AccountEntity("email", "username", "password", "firstName", "lastName")
        then:
        accountEntity.email == "email"
        accountEntity.firstName == "firstName"
        accountEntity.lastName == "lastName"
        accountEntity.password == "password"
        accountEntity.username == "username"
    }
    def "AccountEntity is changed"() {
        when:
        accountEntity = new AccountEntity("email", "username", "password", "firstName", "lastName")
        accountEntity.setEmail("changed email")
        accountEntity.setFirstName("changed firstName")
        accountEntity.setLastName("changed lastName")
        accountEntity.setPassword("changed password")
        accountEntity.setUsername("changed username")
        then:
        accountEntity.email == "changed email"
        accountEntity.firstName == "changed firstName"
        accountEntity.lastName == "changed lastName"
        accountEntity.password == "changed password"
        accountEntity.username == "changed username"
    }
    def "AccountEntity's values are read'"() {
        when:
        accountEntity = new AccountEntity("email", "username", "password", "firstName", "lastName")
        then:
        accountEntity.getEmail() == "email"
        accountEntity.getFirstName() == "firstName"
        accountEntity.getLastName() == "lastName"
        accountEntity.getPassword() == "password"
        accountEntity.getUsername() == "username"
    }
    def "AccountEntity is added to database"() {
        when:
        accountEntity = new AccountEntity("email", "username", "password", "firstName", "lastName")
        accountEntityResponse = accountController.registerAccount(accountEntity)
        then:
        Scanner sc = new Scanner(accountEntityResponse.toString())
        sc.next() == "<201"
    }
    def "A new IngredientEntity is created"() {
        when:
        def ingredientEntity = new IngredientEntity("name", 100)
        then:
        ingredientEntity.name == "name"
        ingredientEntity.calories == 100
    }
    def "IngredientEntity is changed"() {
        when:
        def ingredientEntity = new IngredientEntity("name", 100)
        ingredientEntity.setName("new name")
        ingredientEntity.setCalories(200)
        then:
        ingredientEntity.name == "new name"
        ingredientEntity.calories == 200
    }
    def "IngredientEntity's values are read'"() {
        when:
        def ingredientEntity = new IngredientEntity("name", 100)
        then:
        ingredientEntity.getName() == "name"
        ingredientEntity.getCalories() == 100
    }
    def "IngredientEntity is added to database"() {
        when:
        ingredientEntity = new IngredientEntity("name", 100)
        ingredientEntityResponse = ingredientController.createIngredient(ingredientEntity)
        then:
        Scanner sc = new Scanner(ingredientEntityResponse.toString())
        sc.next() == "<201"
    }
}
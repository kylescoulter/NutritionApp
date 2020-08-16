package com.nutrinav
import com.nutrinav.models.*;
import spock.lang.Specification

class ExampleSpecification extends Specification {

    def ingredientEntity = new IngredientEntity("name", 100);
    def sampleResponse = new SampleResponse();
    def "A new AccountEntity is added"() {
        when:
        def accountEntity = new AccountEntity("email", "username", "password", "firstName", "lastName");
        then:
        accountEntity.email == "email"
        accountEntity.firstName == "firstName"
        accountEntity.lastName == "lastName"
        accountEntity.password == "password"
        accountEntity.username == "username"
    }
    def "A new IngredientEntity is added"() {
        when:
        def ingredientEntity = new IngredientEntity("name", 100)
        then:
        ingredientEntity.name == "name"
        ingredientEntity.calories == 100
    }
}
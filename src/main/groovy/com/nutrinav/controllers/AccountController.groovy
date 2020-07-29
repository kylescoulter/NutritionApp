package com.nutrinav.controllers

import com.nutrinav.models.AccountEntity
import com.nutrinav.repositories.AccountRepository
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.http.HttpStatus
import org.springframework.http.ResponseEntity
import org.springframework.web.bind.annotation.CrossOrigin
import org.springframework.web.bind.annotation.GetMapping
import org.springframework.web.bind.annotation.PathVariable
import org.springframework.web.bind.annotation.PostMapping
import org.springframework.web.bind.annotation.RestController

@CrossOrigin
@RestController
class AccountController {

    @Autowired
    private AccountRepository accountRepository

    @PostMapping("/account/register")
    private void registerAccount() {

    }

    @GetMapping("/account/{username}")
    ResponseEntity<AccountEntity> getAccountByUsername(@PathVariable String username) {
        AccountEntity accountEntity = accountRepository.findByUsername(username)
        return new ResponseEntity<AccountEntity>(accountEntity, HttpStatus.OK)
    }

    @GetMapping("/accounts")
    Collection<AccountEntity> getAccounts() {
        return accountRepository.findAll()
    }
}

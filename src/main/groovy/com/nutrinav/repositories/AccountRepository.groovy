package com.nutrinav.repositories

import com.nutrinav.models.AccountEntity
import org.springframework.data.jpa.repository.JpaRepository

interface AccountRepository extends JpaRepository<AccountEntity, Integer> {
    AccountEntity findByUsername(String username);
    AccountEntity findByEmail(String email);
}

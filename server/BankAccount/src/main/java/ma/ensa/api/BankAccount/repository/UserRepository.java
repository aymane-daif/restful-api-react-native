package ma.ensa.api.BankAccount.repository;

import ma.ensa.api.BankAccount.model.User;

public interface UserRepository {
    int save(User user);
    User findByEmail(String email);
}

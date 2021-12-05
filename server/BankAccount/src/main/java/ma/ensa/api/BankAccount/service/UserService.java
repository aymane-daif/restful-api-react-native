package ma.ensa.api.BankAccount.service;

import ma.ensa.api.BankAccount.model.User;
import ma.ensa.api.BankAccount.repository.UserRepositoryImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class UserService {

    @Autowired
    private UserRepositoryImpl userRepositoryImpl;

    public int save(User user){
        return userRepositoryImpl.save(user);
    }

    public User findByEmail(String email) {return userRepositoryImpl.findByEmail(email);}
}

package ma.ensa.api.BankAccount.controller;

import ma.ensa.api.BankAccount.model.User;
import ma.ensa.api.BankAccount.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class UserController {

    @Autowired
    private UserService userService;

    @PostMapping("/users")
    public int createUser(@RequestBody User user) {
        return userService.save(user);
    }

}

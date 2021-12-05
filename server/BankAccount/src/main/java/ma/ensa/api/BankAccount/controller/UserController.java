package ma.ensa.api.BankAccount.controller;

import ma.ensa.api.BankAccount.model.User;
import ma.ensa.api.BankAccount.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
public class UserController {

    @Autowired
    UserService userService;

    @PostMapping("/users")
    public int createUser(@RequestBody User user) {
        return userService.save(user);
    }

    @GetMapping("/users/{email}")
    public User getUser(@PathVariable("email") String email){
        return userService.findByEmail(email);
    }

}

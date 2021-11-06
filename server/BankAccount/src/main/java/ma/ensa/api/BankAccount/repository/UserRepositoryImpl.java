package ma.ensa.api.BankAccount.repository;

import ma.ensa.api.BankAccount.model.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Repository;

@Repository
public class UserRepositoryImpl implements UserRepository{

    private static final String INSERT_USER_QUERY ="INSERT INTO USER(id, firstName, lastName, email, address, phone, cin) VALUES(?,?,?,?,?,?,?)";

    @Autowired
    private JdbcTemplate jdbcTemplate;

    @Override
    public int save(User user) {
        jdbcTemplate.update(
                INSERT_USER_QUERY,
                user.getId(),
                user.getFirstName(),
                user.getLastName(),
                user.getEmail(),
                user.getAddress(),
                user.getPhone(),
                user.getCin()
        );
        return user.getId();
    }
}

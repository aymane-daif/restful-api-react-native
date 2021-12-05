package ma.ensa.api.BankAccount.repository;

import ma.ensa.api.BankAccount.model.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.BeanPropertyRowMapper;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Repository;

@Repository
public class UserRepositoryImpl implements UserRepository{

    private static final String INSERT_USER_QUERY ="INSERT INTO USER(id, name, email, address, phone, cin) VALUES(?,?,?,?,?,?)";
    private static final String GET_USER_QUERY ="SELECT *  FROM USER WHERE email=?";

    @Autowired
    private JdbcTemplate jdbcTemplate;

    @Override
    public int save(User user) {
        return jdbcTemplate.update(
                INSERT_USER_QUERY,
                user.getId(),
                user.getName(),
                user.getEmail(),
                user.getAddress(),
                user.getPhone(),
                user.getCin()
        );

    }

    @Override
    public User findByEmail(String email){
        return jdbcTemplate.queryForObject(GET_USER_QUERY, BeanPropertyRowMapper.newInstance(User.class),email);
    }
}

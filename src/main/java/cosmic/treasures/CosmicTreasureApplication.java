package cosmic.treasures;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.transaction.annotation.EnableTransactionManagement;

@SpringBootApplication
@EnableTransactionManagement
public class CosmicTreasureApplication {
    public static void main(String[] args) {
        SpringApplication.run(CosmicTreasureApplication.class, args);
    }
}

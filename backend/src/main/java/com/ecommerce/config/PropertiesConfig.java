package com.ecommerce.config;

import java.util.Properties;

import jakarta.persistence.EntityManagerFactory;
import javax.sql.DataSource;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.dao.annotation.PersistenceExceptionTranslationPostProcessor;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;
import org.springframework.jdbc.datasource.DriverManagerDataSource;
import org.springframework.orm.jpa.JpaTransactionManager;
import org.springframework.orm.jpa.LocalContainerEntityManagerFactoryBean;
import org.springframework.orm.jpa.vendor.Database;
import org.springframework.orm.jpa.vendor.HibernateJpaVendorAdapter;
import org.springframework.transaction.PlatformTransactionManager;
import org.springframework.transaction.annotation.EnableTransactionManagement;
import io.github.cdimascio.dotenv.Dotenv;

@Configuration
@EnableTransactionManagement
@EnableJpaRepositories(basePackages = "com.ecommerce.repository")
public class PropertiesConfig {

    private Dotenv dotenv = Dotenv.configure().load();

    @Bean
    public LocalContainerEntityManagerFactoryBean entityManagerFactory() {
        HibernateJpaVendorAdapter vendorAdapter = new HibernateJpaVendorAdapter();
        vendorAdapter.setDatabase(Database.POSTGRESQL);
        vendorAdapter.setGenerateDdl(true);

        LocalContainerEntityManagerFactoryBean em = new LocalContainerEntityManagerFactoryBean();
        em.setJpaVendorAdapter(vendorAdapter);
        em.setDataSource(dataSource());
        em.setPackagesToScan("com.ecommerce.model");
        em.setJpaProperties(additionalProperties());
        return em;
    }

    @Bean
    public DataSource dataSource() {
        DriverManagerDataSource dataSource = new DriverManagerDataSource();
        String url = dotenv.get("SPRING_DATASOURCE_URL");
        String username = dotenv.get("SPRING_DATASOURCE_USERNAME");
        String password = dotenv.get("SPRING_DATASOURCE_PASSWORD");

        dataSource.setDriverClassName("org.postgresql.Driver");
        dataSource.setUrl(url);
        dataSource.setUsername(username);
        dataSource.setPassword(password);
        return dataSource;
    }

    @Bean
    public PlatformTransactionManager transactionManager(EntityManagerFactory emf) {
        JpaTransactionManager transactionManager = new JpaTransactionManager();
        transactionManager.setEntityManagerFactory(emf);

        return transactionManager;
    }

    @Bean
    public PersistenceExceptionTranslationPostProcessor exceptionTranslation() {
        return new PersistenceExceptionTranslationPostProcessor();
    }

    private Properties additionalProperties() {
        Properties properties = new Properties();

        String springJpaHibernateDdlAuto = dotenv.get("SPRING_JPA_HIBERNATE_DDL_AUTO");
        String springJpaPropertiesHibernateDialect = dotenv.get("SPRING_JPA_PROPERTIES_HIBERNATE_DIALECT");
        String springJpaShowSql = dotenv.get("SPRING_JPA_SHOW_SQL");

        properties.setProperty("hibernate.hbm2ddl.auto", springJpaHibernateDdlAuto);
        properties.setProperty("hibernate.dialect", springJpaPropertiesHibernateDialect);
        properties.setProperty("hibernate.show_sql", springJpaShowSql);
        properties.setProperty("hibernate.format_sql", "true");
        return properties;
    }
}

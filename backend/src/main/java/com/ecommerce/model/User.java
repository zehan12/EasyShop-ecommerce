package com.ecommerce.model;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;

import org.hibernate.annotations.Cascade;

import com.fasterxml.jackson.annotation.JsonIgnore;

import jakarta.persistence.CascadeType;
import jakarta.persistence.CollectionTable;
import jakarta.persistence.ElementCollection;
import jakarta.persistence.Embedded;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.OneToMany;

public class User {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

    private String firstName;

    private String lastName;

    private String email;

    private String password;

    private String role;

    private String mobile;

    @OneToMany(mappedBy = "user", cascade = CascadeType.ALL)
    private List<Address> address = new ArrayList<>();

    @Embedded
    @ElementCollection
    @CollectionTable(name = "payment_information", joinColumns = @JoinColumn(name = "user_id"))
    private List<Paymentinfromation> paymentInformation = new ArrayList<>();

    @OneToMany(mappedBy = "user", cascade = CascadeType.ALL)
    @JsonIgnore
    private List<Rating> ratings = new ArrayList<>();

    @OneToMany(mappedBy = "user", cascade = CascadeType.ALL)
    @JsonIgnore
    private List<Review> reviews = new ArrayList<>();

    private LocalDateTime createdAt;

    public User() {

    }

}

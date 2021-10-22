package com.gmail.MaryamASMA.ecommerce.repository;

import com.gmail.MaryamASMA.ecommerce.domain.Review;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ReviewRepository extends JpaRepository<Review, Long> {
}

package de.kumpelblase2.jhipsterwebsocket.repository;

import de.kumpelblase2.jhipsterwebsocket.domain.Authority;
import org.springframework.data.jpa.repository.JpaRepository;

/**
 * Spring Data JPA repository for the Authority entity.
 */
public interface AuthorityRepository extends JpaRepository<Authority, String> {
}

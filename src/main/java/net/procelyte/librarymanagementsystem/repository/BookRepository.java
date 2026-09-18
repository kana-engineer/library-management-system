package net.procelyte.librarymanagementsystem.repository;

import net.procelyte.librarymanagementsystem.entity.Book;
import org.springframework.data.jpa.repository.JpaRepository;

public interface BookRepository extends JpaRepository<Book, Long> {

}

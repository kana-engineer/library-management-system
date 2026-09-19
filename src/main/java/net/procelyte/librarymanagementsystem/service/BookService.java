package net.procelyte.librarymanagementsystem.service;

import net.procelyte.librarymanagementsystem.entity.Book;
import net.procelyte.librarymanagementsystem.repository.BookRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class BookService {
    private final BookRepository bookRepository;

    @Autowired
    public BookService(BookRepository bookRepository) {
        this.bookRepository = bookRepository;
    }

    public List<Book> allBooks() {
        return bookRepository.findAll();
    }

    public Book createBook(Book book) {
        return bookRepository.save(book);
    }

    public Book getById(Long id) {
        return bookRepository.findById(id).orElseThrow();
    }

    public Book updateBook(Long id, Book book) {
        Book existing = bookRepository.findById(id).orElseThrow();

        existing.setTitle(book.getTitle());
        existing.setPublicationYear(book.getPublicationYear());

        return bookRepository.save(existing);
    }

    public void deleteById(Long id) {
        bookRepository.deleteById(id);
    }
}

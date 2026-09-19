package net.procelyte.librarymanagementsystem.controller;


import net.procelyte.librarymanagementsystem.entity.Book;
import net.procelyte.librarymanagementsystem.repository.BookRepository;
import net.procelyte.librarymanagementsystem.service.BookService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.util.TypeCollector;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("api/books")
@CrossOrigin(origins = "http://localhost:5173")
public class BookController {
    private final BookService bookService;

    @Autowired
    public BookController(BookService bookService) {
        this.bookService = bookService;
    }

    @GetMapping
    public List<Book> getAllBooks() {
        return bookService.allBooks();
    }

    @PostMapping
    public Book createBook(@RequestBody Book book) {
        return bookService.createBook(book);
    }

    @GetMapping("/{id}")
    public Book getById(@PathVariable Long id) {
        return bookService.getById(id);
    }

    @PutMapping("/{id}")
    public Book updateBook(@PathVariable Long id, @RequestBody Book book) {
        return bookService.updateBook(id, book);
    }

    @DeleteMapping("{id}")
    public void deleteById(@PathVariable Long id) {
        bookService.deleteById(id);
    }

}

package net.procelyte.librarymanagementsystem.entity;


import jakarta.persistence.*;

@Entity
@Table(name = "books")
public class Book {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String title;
    private int publicationYear;

    public Book() {

    }

    public Book(String title, int publicationYear, Long id) {
        this.title = title;
        this.publicationYear = publicationYear;
        this.id = id;
    }

    public String getTitle() {
        return title;
    }

    public int getPublicationYear() {
        return publicationYear;
    }

    public Long getId() { return id; }
    
    public void setTitle(String title) {
        this.title = title;
    }
    
    public void setPublicationYear(int publicationYear) {
        this.publicationYear = publicationYear;
    }
}

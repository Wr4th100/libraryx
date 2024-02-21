import type { PrismaClient } from "@prisma/client";

export default async function seedBooks (prisma: PrismaClient) {
    const books = [
        {
            title: "The Great Gatsby",
            author: "F. Scott Fitzgerald",
            published: new Date("1925-04-10"),
            subject: "Novel",
        },
        {
            title: "To Kill a Mockingbird",
            author: "Harper Lee",
            published: new Date("1960-07-11"),
            subject: "Novel",
        },
        {
            title: "1984",
            author: "George Orwell",
            published: new Date("1949-06-08"),
            subject: "Dystopian fiction",
        },
        {
            title: "Pride and Prejudice",
            author: "Jane Austen",
            published: new Date("1813-01-28"),
            subject: "Novel",
        },
        {
            title: "The Catcher in the Rye",
            author: "J.D. Salinger",
            published: new Date("1951-07-16"),
            subject: "Novel",
        },
        {
            title: "The Lord of the Rings",
            author: "J.R.R. Tolkien",
            published: new Date("1954-07-29"),
            subject: "High fantasy",
        },
        {
            title: "Harry Potter and the Philosopher's Stone",
            author: "J.K. Rowling",
            published: new Date("1997-06-26"),
            subject: "Fantasy",
        },
        {
            title: "The Hobbit",
            author: "J.R.R. Tolkien",
            published: new Date("1937-09-21"),
            subject: "Fantasy",
        },
        {
            title: "Moby-Dick",
            author: "Herman Melville",
            published: new Date("1851-10-18"),
            subject: "Adventure fiction",
        },
        {
            title: "The Adventures of Huckleberry Finn",
            author: "Mark Twain",
            published: new Date("1884-12-10"),
            subject: "Novel",
        },
        {
            title: "Jane Eyre",
            author: "Charlotte Brontë",
            published: new Date("1847-10-16"),
            subject: "Novel",
        },
        {
            title: "The Picture of Dorian Gray",
            author: "Oscar Wilde",
            published: new Date("1890-07-01"),
            subject: "Gothic fiction",
        },
        {
            title: "Wuthering Heights",
            author: "Emily Brontë",
            published: new Date("1847-12-29"),
            subject: "Gothic fiction",
        },
        {
            title: "Brave New World",
            author: "Aldous Huxley",
            published: new Date("1932-07-01"),
            subject: "Dystopian fiction",
        },
        {
            title: "The Grapes of Wrath",
            author: "John Steinbeck",
            published: new Date("1939-04-14"),
            subject: "Novel",
        },
    ];

    for (const book of books) {
        await prisma.book.create({
            data: book,
        });
    }
}
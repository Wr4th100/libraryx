"use client";

import { api } from "@/trpc/react";
import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { Button } from "./ui/button";
import { ArrowLeft, ArrowRight, Loader2 } from "lucide-react";
import Link from "next/link";
import BookFilter from "./BookFilter";
import { useSearchParams } from "next/navigation";

const BookList = () => {
  const [page, setPage] = React.useState(1);
  const searchParams = useSearchParams();
  const bookQuery = api.book.getAllBooksPaginated.useQuery({
    page,
  });
  const books =
    bookQuery.data?.filter((book) => {
      const title = book.title
        .toLowerCase()
        .includes(searchParams.get("title")?.toLowerCase() ?? "");
      const author = book.author
        .toLowerCase()
        .includes(searchParams.get("author")?.toLowerCase() ?? "");
      const subject = book.subject
        .toLowerCase()
        .includes(searchParams.get("subject")?.toLowerCase() ?? "");
      const published = book.published
        .toLocaleDateString()
        .includes(searchParams.get("published")?.toLocaleLowerCase() ?? "");
      return title && author && subject && published;
    }) ?? [];

  return (
    <div>
      <div className="flex items-center justify-between">
        <div className="mb-4">
          <p className=" text-4xl font-bold">Books</p>
          <p className="text-sm font-semibold">
            Page {page + 1} ({books.length} books)
          </p>
        </div>
        <div className="space-x-2">
          <BookFilter />
          <Link href="/add-book">
            <Button>Add Book</Button>
          </Link>
        </div>
      </div>

      {/* {books && books.length === 0 && <div>No books found</div>} */}

      {bookQuery.isLoading && (
        <div className="flex h-32 w-full flex-col items-center justify-center rounded-md bg-gray-100 shadow-md">
          <div></div>
          <Loader2 className="h-8 w-8 animate-spin text-primary" />
          <p className=" mt-2 text-sm font-semibold">Loading...</p>
        </div>
      )}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4  gap-4">
        {books.map((book) => (
          <Card key={book.id} className="">
            {/* <h2>{book.title}</h2>
          <p>{book.author}</p> */}
            <CardHeader>
              <CardTitle>{book.title}</CardTitle>
              <CardDescription>{book.author}</CardDescription>
            </CardHeader>
            <CardContent>
              <p>{book.subject}</p>
            </CardContent>
            <CardFooter>
              <p>Published on {book.published.toLocaleDateString()}</p>
            </CardFooter>
          </Card>
        ))}
      </div>
      <div className="m-4 flex w-full justify-center space-x-4">
        <Button
          onClick={() => {
            setPage(page - 1);
          }}
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Previous Page
        </Button>
        <Button
          onClick={() => {
            setPage(page + 1);
          }}
        >
          Next Page
          <ArrowRight className="ml-2 h-4 w-4" />
        </Button>
      </div>
    </div>
  );
};

export default BookList;

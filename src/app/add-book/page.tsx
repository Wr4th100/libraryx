import BookForm from "@/components/BookForm";
import React from "react";

const AddBookPage = () => {
  return (
    <div className="m-8">
      <p className="text-4xl font-bold">Add Book</p>
      <div className="rounded border p-4">
        <BookForm />
      </div>
    </div>
  );
};

export default AddBookPage;

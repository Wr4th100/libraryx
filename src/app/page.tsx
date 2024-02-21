import BookList from "@/components/BookList";
import Nav from "@/components/Nav";

export default async function Home() {
  return (
    <div className="flex min-h-screen flex-col ">
      <Nav />
      <div className="p-8">
        <BookList />
      </div>
    </div>
  );
}

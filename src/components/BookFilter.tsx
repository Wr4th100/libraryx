import { usePathname, useRouter, useSearchParams } from "next/navigation";
import React, { useCallback } from "react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "./ui/sheet";
import { Button } from "./ui/button";
import { Label } from "./ui/label";
import { Input } from "./ui/input";

const BookFilter = () => {
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();

  const createQueryString = useCallback(
    (name: string, value: string) => {
      const params = new URLSearchParams(searchParams.toString());
      params.set(name, value);

      return params.toString();
    },
    [searchParams],
  );

  return (
    <Sheet key="filter">
      <SheetTrigger>
        <Button>Filter</Button>
      </SheetTrigger>
      <SheetContent side="left" className="space-y-4 text-primary">
        <SheetHeader className="mb-4">
          <SheetTitle>Filter</SheetTitle>
          <SheetDescription>
            Filter the books based on your preferences
          </SheetDescription>
        </SheetHeader>
        <div>
          <Label> Title </Label>
          <Input
            type="text"
            value={searchParams.get("title") ?? ""}
            onChange={(e) => {
              router.push(
                pathname + "?" + createQueryString("title", e.target.value),
              );
            }}
          />
        </div>
        <div>
          <Label> Author </Label>
          <Input
            type="text"
            value={searchParams.get("author") ?? ""}
            onChange={(e) => {
              router.push(
                pathname + "?" + createQueryString("author", e.target.value),
              );
            }}
          />
        </div>
        <div>
          <Label> Subject </Label>
          <Input
            type="text"
            value={searchParams.get("subject") ?? ""}
            onChange={(e) => {
              router.push(
                pathname + "?" + createQueryString("subject", e.target.value),
              );
            }}
          />
        </div>
        <div>
          <Label> Published At </Label>
          <Input
            type="date"
            value={searchParams.get("published") ?? ""}
            onChange={(e) => {
              router.push(
                pathname + "?" + createQueryString("published", e.target.value),
              );
            }}
          />
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default BookFilter;

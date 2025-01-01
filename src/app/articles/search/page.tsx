import React from "react";
interface Props {
  searchParams: { searchQuery: string };
}
async function page({ searchParams }: Props) {
  const { searchQuery } = searchParams;
  return (
    <section className="container mx-auto px-5 mt-5 fixed_height mb-5">
      <h1 className="text-2xl font-bold mb-5">
        Search results for: {searchQuery}
      </h1>
    </section>
  );
}

export default page;

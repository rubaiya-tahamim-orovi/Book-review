import React from "react";
// import { useLoaderData } from 'react-router';

const ListedBooks = () => {
  // const listBooks = useLoaderData();
  return (
    <div className="mt-10">
      <div className="text-center mb-10 rounded-xl bg-[#13131326] text-2xl font-bold py-4">Books</div>
      {/* sort by section here */}

      {/* read and wishlist start from here */}
      {/* name of each tab group should be unique */}
      <div className="tabs tabs-lift">
        <input
          type="radio"
          name="my_tabs_3"
          className="tab"
          aria-label="Tab 1"
        />
        <div className="tab-content bg-base-100 border-base-300 p-6">
          Tab content 1
        </div>

        <input
          type="radio"
          name="my_tabs_3"
          className="tab"
          aria-label="Tab 2"
          defaultChecked
        />
        <div className="tab-content bg-base-100 border-base-300 p-6">
          Tab content 2
        </div>
      </div>
    </div>
  );
};

export default ListedBooks;

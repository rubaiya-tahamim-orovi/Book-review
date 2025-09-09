import { useEffect, useState } from "react";
import { useLoaderData } from "react-router";
import { getStoredReadBooks, getStoredWishlistBooks } from "../../Utility/localStorage";
import ReadBook from "../ReadBook/ReadBook";
import WishlistBook from "../WishlistBook/WishlistBook";



const ListedBooks = () => {

  
  const listedBooks = useLoaderData();
  const [readBook, setReadBook] = useState([]);
  const [wishlistBook, setWishlistBook] = useState([]);
  // console.log(readBook)
 
  // read useEffect here
  useEffect(() => {
    const storedReadIds = getStoredReadBooks();
    if(listedBooks.length > 0){
      const applyBook = [];
      for(const id of storedReadIds){
        const read = listedBooks.find(read => read.id === id);
        if(read){
          applyBook.push(read);
        }
      }
      setReadBook(applyBook);
    }
  },[listedBooks])

  // wihslist useEffect here
 useEffect(() => {
  const storeWishlistIds = getStoredWishlistBooks();
  if(listedBooks.length > 0){
    const applyWihslist = [];
    for(const id of storeWishlistIds){
      const wishlist = listedBooks.find(wishlist => wishlist.id === id);
      if(wishlist){
        applyWihslist.push(wishlist);
      }
    }
    setWishlistBook(applyWihslist);
  }
 }, [listedBooks])



  // console.log(ListedBooks)

  
 
  return (
    <div className="mt-10 md:px-0 px-5">
      <div className="text-center mb-10 rounded-xl bg-[#13131326] text-2xl font-bold py-4">Books</div>
      {/* sort by section here */}

      {/* read and wishlist start from here */}
      {/* name of each tab group should be unique */}
      <div className="tabs tabs-lift">
        <input
          type="radio"
          name="my_tabs_3"
          className="tab"
          aria-label="Read Books"
        />
        <div className="tab-content  bg-base-100 border-base-300 p-6">
         
         <div className="space-y-5">
         
           {
            readBook.map(read => <ReadBook key={read.id} read ={read}></ReadBook>)
           }
         </div>
        </div>

        <input
          type="radio"
          name="my_tabs_3"
          className="tab"
          aria-label="Wishlist Books"
          defaultChecked
        />
        <div className="tab-content  bg-base-100 border-base-300 p-6">
          <div className="space-y-5">
            {
              wishlistBook.map(wishlist => <WishlistBook key={wishlist.id} wishlist={wishlist}></WishlistBook>)
            }
          </div>
        </div>
      </div>
    </div>
  );
};

export default ListedBooks;

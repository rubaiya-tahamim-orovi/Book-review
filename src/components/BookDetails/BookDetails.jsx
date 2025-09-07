
import { Link, useLoaderData, useParams } from 'react-router';
import { ToastContainer, toast } from 'react-toastify';
import { saveRead, saveWishlist } from '../../Utility/localStorage';

const BookDetails = () => {
    

    // toast function
    const handleRead = () => {
       saveRead(id);
      
        toast('Added to Read');
    }
    const handleWislist = () => {
            saveWishlist(id);
        toast('Added to Wishlist');
    }

    const books = useLoaderData();
const {id} = useParams();
const idInt = parseInt(id);
const book = books.find(book => book.id === idInt)
const {image, title, author, genre, review, 
    tags, totalPages, publisher, yearOfPublishing, rating} = book;
    // console.log(books, id, book);
    return (
        <div>
            <h1 className='text-3xl text-center font-bold  mt-5 mb-10'>Book Details</h1>
            <div className='grid grid-cols-2 gap-10 items-center mb-10'>
                <div className='bg-[#13131326] rounded-2xl p-20'>
                  <div className=' flex justify-center'>
                      <img className='w-[300px]' src={image} alt="" />
                  </div>
                </div>
                <div className='space-y-5'>
                {/* name */}
                <h2 className='text-4xl font-semibold'>{title}</h2>
                {/* author name */}
                <p className='text-[#131313CC] font-semibold'>By : {author}</p>
                {/* genre */}
                <div className='border-y border-[#13131326] py-4'>
                    {genre}
                </div>
                {/* review */}
                <p><span className='text-[#131313] font-bold'>Description :</span> <span className='text-[#131313B3]'> {review} </span></p>
                <p><span className='font-bold mr-3'>Tag</span> <span className='mr-3 text-[#23BE0A] 
                bg-[#23BE0A0D] font-bold p-2 rounded-2xl'>#{tags[0]}</span><span className=' text-[#23BE0A] bg-[#23BE0A0D] font-bold p-2 rounded-2xl'>#{tags[1]}</span></p>

                {/* last part */}
                <div className='border-t border-[#13131326] space-y-5 pt-10 mt-10'>
                    <p className='text-[#131313B3] font-semibold'>Number of Pages : <span className='text-[#131313] font-bold'>{totalPages}</span></p>
                    <p className='text-[#131313B3]  font-semibold'>Publisher : <span className='text-[#131313] font-bold'>{publisher}</span></p>
                    <p className='text-[#131313B3] font-semibold'>Year of Publishing : <span className='text-[#131313] font-bold'>{yearOfPublishing}</span></p>
                    <p className='text-[#131313B3] font-semibold'>Rating : <span className='text-[#131313] font-bold'>{rating}</span></p>
                </div>

                <div className='space-x-3'>
                    <button onClick={handleRead}
                    className='font-bold cursor-cell bg-[#23BE0A] text-white px-5 py-3 rounded-lg'>Read</button>
                    <button onClick={handleWislist}
                     className='font-bold cursor-cell bg-[#50B1C9] text-white px-4 py-3 rounded-lg'>Wishlist</button>
                </div>
                </div>
              
            </div>
             <div className='flex justify-center mb-10'>
                <Link to="/"> <button className='cursor-pointer bg-[#23BE0A] p-3 rounded-lg text-white font-bold'>Back to Home</button></Link>
             </div>
             <ToastContainer />
        </div>
    );
};

export default BookDetails;
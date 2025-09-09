import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router';
import { getStoredReadBooks } from '../../Utility/localStorage';
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, ResponsiveContainer } from 'recharts';

const PagesToRead = () => {
     const listedBooks = useLoaderData();
  const [readBook, setReadBook] = useState([]);

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

         const getPath = (x, y, width, height) => {
  return `M${x},${y + height}C${x + width / 3},${y + height} ${x + width / 2},${y + height / 3}
  ${x + width / 2}, ${y}
  C${x + width / 2},${y + height / 3} ${x + (2 * width) / 3},${y + height} ${x + width}, ${y + height}
  Z`;
};

const TriangleBar = (props) => {
  const { fill, x, y, width, height } = props;

  return <path d={getPath(x, y, width, height)} stroke="none" fill={fill} />;
};

  
    return (
        <div className='bg-[#13131308] py-20 my-18 rounded-2xl'>
          <ResponsiveContainer height={300} width="100%">
      
    <BarChart
      width={500}
      height={300}
      data={readBook}
      margin={{
        top: 20,
        right: 30,
        left: 20,
        bottom: 5,
      }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="title" />
      <YAxis />
      <Bar dataKey="totalPages" fill="#00C29C" shape={<TriangleBar />} label={{ position: 'top' }}>
       
      </Bar>
    </BarChart>
    </ResponsiveContainer>
            {/* <BarChart width={500} height={500} data={readBook}>
                <Bar dataKey="totalPages"></Bar>
            </BarChart> */}
        </div>
    );
};

export default PagesToRead;
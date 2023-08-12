import { Link } from 'react-router-dom';

const Navbar = () => {
   return (
      <>
         <nav className='flex gap-5 items-center justify-center'>
         <Link to='/' > Home </Link>
         <Link to='/show-books' > Show Books </Link>
         <Link to='/add-book' > Add Book </Link>
         </nav>  
      </>
   );
};

export default Navbar;
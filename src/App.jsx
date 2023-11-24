import { useState, useEffect } from 'react'
import Pagination from '@mui/material/Pagination';
import { randomApi } from './services/randomApi';
import Cards from './components/Cards'
import Navbar from './components/Navbar';

function App() {
  const [user, setUser] = useState([]);
  const [filteredUsers, setFilteredUsers] = useState([]);
  const [selectedGender, setSelectedGender] = useState('');
  const [orderByBirth, setOrderByBirth] = useState('');
  

  // Pagination variables
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(8);
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentUsers = Array.isArray(filteredUsers) ? filteredUsers.slice(indexOfFirstItem, indexOfLastItem) : [];

  useEffect(() => {
    const fetchUsersData = async () => {
      try {
        const userData = await randomApi();
        setUser(userData);
        setFilteredUsers(userData.results)
      } catch (error) {
        console.error(error.message);
      }
    };

    fetchUsersData();
  }, []);
  
  useEffect(() => {
    let sortedUsers = [...user];
  
    if (selectedGender !== '') {
      sortedUsers = sortedUsers.filter(userData => userData.gender === selectedGender);
    }
  
    if (orderByBirth === 'ascending') {
      sortedUsers.sort((a, b) => new Date(a.dob.date) - new Date(b.dob.date));
    } else if (orderByBirth === 'descending') {
      sortedUsers.sort((a, b) => new Date(b.dob.date) - new Date(a.dob.date));
    }
  
    setFilteredUsers(sortedUsers);
  }, [selectedGender, orderByBirth, user]);

  const pageChange = (event, value) => {
    setCurrentPage(value);
  };


  return (
    <div className='h-screen lg:w-screen'>
      <Navbar setSelectedGender = {setSelectedGender} setOrderByBirth={setOrderByBirth}/>
      <div className='flex justify-center lg:pt-6'>
        <Pagination 
        count={Math.ceil((filteredUsers?.length ||0)/ itemsPerPage)} 
        page = {currentPage}
        onChange={pageChange}
        />
      </div>
      <div className=" flex flex-wrap justify-center items-center lg:p-4 gap-4">
        {currentUsers.map((user, index) => (
            <Cards key={index} user={user} />
          ))}
      </div>
     
    </div>
  )
}

export default App

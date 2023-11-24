import React from 'react'
import { FiUser} from "react-icons/fi";
import { BsEnvelope, BsCalendar3, BsTelephone, BsLock,BsPinMap  } from "react-icons/bs";


export const generateUserData = (user) => {
    const fullName = `${user.name.first} ${user.name.last}`;
  
    const datas = [
      { icon: <FiUser />, text: `Hi, My name is  ${fullName}` },
      { icon: <BsCalendar3 />, text: `Date of birth : ${new Date(user.dob.date).toLocaleDateString('en-GB')}` },
      { icon: <BsPinMap />, text: `${user.location.street.number} ${user.location.street.name}, ${user.location.city}, ${user.location.country}` },
      { icon: <BsEnvelope />, text: user.email },
      { icon: <BsTelephone />, text: user.phone },
      { icon: <BsLock />, text: ` ${new Date(user.registered.date).toLocaleDateString("en-GB", { year: 'numeric', month: 'long', day: 'numeric' })}` },
    ];
  
    return datas;
  };

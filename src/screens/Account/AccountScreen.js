import React, { useState, useEffect } from "react";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import {UserLoggedScreen} from './UserLoggedScreen'
import {UserGuestScreen} from './UserGuestScreen/'
import { LoadingModal } from "../../components";

export function AccountScreen() {
  const [hastLogged, setHastLogged] = useState(null)
  useEffect(() => {
   const auth = getAuth()
   onAuthStateChanged(auth, (user) => {
    setHastLogged(user ? true : false)
   })
  }, [])
  if (hastLogged === null) {
    return <LoadingModal show text='Cargando'/>
  }
  
  return hastLogged ? <UserLoggedScreen /> : <UserGuestScreen />;
}

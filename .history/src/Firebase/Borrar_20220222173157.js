import { db,app } from './FirebaseConfig'
import {doc,deleteDoc, } from 'firebase/firestore'
const BorrarDocumento =async (id) => {
  try {
  await deleteDoc(doc(db,'gastos',id));
    
   } catch (error) {
    console.log(error)
   }
    
}

export default BorrarDocumento;

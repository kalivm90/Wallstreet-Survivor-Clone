import {db} from "../../util/fireabse"
import { 
    addDoc, 
    collection, 
    getDocs, 
    where, 
    updateDoc, 
    doc,
    query
} from "firebase/firestore"

const WSS_DB = () => {
    const createTable = async(tableName, columns) => {
        try {
            const newCollection = collection(db, tableName);
            const newDoc = await addDoc(newCollection, columns)
            console.log(`New table ${tableName} created with ID: ${newDoc.id}`);
            return newDoc.id
        } catch (e) {
            console.log(e);
        }
    }

    const getCollection = async(docName, params=null) => {
        try {
            const colRef = collection(db, docName);
            let snapshot;
            if (params) {
                const {field, operator, value} = params;
                const q  = query(colRef, where(field, operator, value))
                snapshot = await getDocs(q);
            } else {
                snapshot = await getDocs(colRef);
            }
            const result = snapshot.docs?.length
                ? (snapshot.docs.length > 1 
                    ? snapshot.docs.map(doc => doc.data()) 
                    : snapshot.docs[0]?.data()) : null

            return result
        } catch (e) {
            console.log(e)
        }
    }

    const addDocument = async(docName, params) => {
        try {
            console.log(params)
            const colRef = collection(db, docName)
            console.log("nice")
            await addDoc(colRef, params);
        } catch (e) {
            return e
        }
    }

    return {
        createTable,
        getCollection, 
        addDocument
    };
}

export default WSS_DB
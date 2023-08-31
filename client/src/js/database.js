// Imports the necessary function from the 'idb' library
import { openDB } from "idb";

// Initializes the database
const initdb = async () =>
  openDB("jate", 1, {
    upgrade(db) {
      if (db.objectStoreNames.contains("jate")) {
        console.log("jate database already exists");
        return;
      }
      db.createObjectStore("jate", { keyPath: "id", autoIncrement: true });
      console.log("jate database created");
    },
  });

// Logic for Method that accepts some content and PUTs it to the database
export const putDb = async (content) => {
  console.log("POST data to the database");

  const jateDb = await openDB("jate", 1);

  const tx = jateDb.transaction("jate", "readwrite");

  const store = tx.objectStore("jate");

  const request = store.put({ id: 1, content: content });

  const result = await request;
  console.log("successfully saved data to database", result);
};

// Logic for method that GETs all the content from the database
export const getDb = async () => {
  console.log("GET request from database");

  const jateDb = await openDB("jate", 1);

  const tx = jateDb.transaction("jate", "readonly");

  const store = tx.objectStore("jate");

  const request = store.get(1);

  const result = await request;
  return result.value;
};

// Initializes the database when the module is loaded
initdb();

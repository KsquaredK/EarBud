/* ========= PSEUDOCODE FOR COMPONENT ========= 
 • UserProvider handles state for app users, including getting and setting
    user state, adding, and (stretch) deleting users.*/

// The context is imported and used by individual components that need data.
// Nothing is stored in createContext when it is defined.
export const UserContext = createContext();

// This component establishes what data can be used.
// words is an empty array, setWords is a function that modifies it.
// useState will hold and set the array of words.
export const UserProvider = (props) => {
    const [users, setUser] = useState([])

  const getUsers = () => {
    // words: fetch that dataset. ex: return 6-letter words that start with q
    return fetch("http://localhost:8088/users")
      .then((res) => res.json())
      .then((data) => setUser(data));
    
  };

   const getUserById = (userById) => {
    return fetch(`https://localhost:8088/users/${userId}`).then((res) =>
      res.json()
    );
  };

  const updateUser = (user) => {
    return fetch(`http://localhost:8088/words/${user.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(word),
    }).then(getUsers);
  };

  const addUser = (userObj) => {
    return fetch("http://localhost:8088/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(wordObj),
    }).then(getUsers);
  };
 

    return (
        <UserContext.Provider
        value={{
            users,
            getUsers,
            setUser,
            addUsers,
            getUserById,
        }}>
        {props.children}
        </UserContext.Provider>
  );
      };
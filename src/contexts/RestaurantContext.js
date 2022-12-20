import { createContext, useState, useEffect, useContext } from "react";
import { Auth, DataStore } from "aws-amplify";
import { Restaurant } from "../models";

const RestaurantContext = createContext({});

const RestaurantContextProvider = ({ children }) => {
  //Getting particular rest administrator
  const [user, setUser] = useState();
  const [restaurant, setRestaurant] = useState();
  const sub = user?.attributes?.sub;

  //take auth from server not from browser cache
  useEffect(() => {
    Auth.currentAuthenticatedUser({ bypassCache: true }).then(setUser);
  }, []);

  useEffect(() => {
    if (!sub) {
      return;
    }
    // fetch Restaurant and filter by adminSub eq means =
    //rest admin matching with sub
    DataStore.query(Restaurant, (r) => r.adminSub("eq", sub)).then(
      (restaurants) => setRestaurant(restaurants[0])
    );
  }, [sub]);

  //console.log(sub);

  return (
    <RestaurantContext.Provider value={{ restaurant, setRestaurant, sub }}>
      {children}
    </RestaurantContext.Provider>
  );
};

export default RestaurantContextProvider;

//hook to provide context when needed
export const useRestaurantContext = () => useContext(RestaurantContext);

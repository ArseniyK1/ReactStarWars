import { useEffect, useState } from "react";
import { getApiResource } from "../../utils/network";
import { API_PEOPLE } from "../../constants/api";
import { getPeopleId, getPeopleImage } from "../../services/getPeopleDate";
import { withErrorApi } from "../../hoc-helpers/withErrorApi";

import styles from "./PeoplePage.module.css";
import PeopleList from "../../components/PeoplePage/PeopleList/PeopleList";

const PeoplePage = ({ setErrorApi }) => {
  const [people, setPeople] = useState(null);

  const getResource = async (url) => {
    const res = await getApiResource(url);

    if (res) {
      const peopleList = res.results.map(({ name, url }) => {
        const id = getPeopleId(url);
        const img = getPeopleImage(id);

        return {
          id, // id: id
          name, // name: name
          img, // url: url
        };
      });
      setPeople(peopleList);
      setErrorApi(false);
    } else {
      setErrorApi(true);
    }
  };

  useEffect(() => {
    getResource(API_PEOPLE);
  }, []);

  return (
    <>
      <h1 className={styles.nav}>Navigation</h1>
      {people && <PeopleList people={people} />}
    </>
  );
};

export default withErrorApi(PeoplePage);

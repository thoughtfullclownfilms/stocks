import React, { useState, useEffect } from "react";
import "./Table.css";
import { apiRequest } from "../../../utils/helper";
import MaterialTable from "material-table";
const Table = ({ page, name }) => {
  const [tabl, setTabl] = useState([]);
  const [pageNum, setPageNum] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [dataVisible, setDataVisible] = useState(true);
  useEffect(() => {
  }, [pageNum]);

  const authHandler = async () => {
    try {
      const userData = await apiRequest({
        url: "",
        method: "post",
        bodyParams: {
          Page: pageNum
        }
      });
      const { data, success, total_pages } = userData;
      setTotalPages(total_pages);
      if (success) {
        let jsonArray = data;
        let arr = [];
        for (let i = 0; i < jsonArray.length; i++) {
          let {
            userid,
            username,
            email,
            phoneno,
            adhaarurl,
            location
          } = jsonArray[i];
          let { coordinates } = location;
          let mapLoc =
            "http://maps.google.com/?q=" +
            coordinates[1] +
            "," +
            coordinates[0];

          let imagelink = "http://52.23.176.180:4001/v1/download" + adhaarurl;

          arr.push(
            <tr key={userid}>
              {" "}
              dataVisible = true;
              <td>{username}</td>
              <td>{email}</td>
              <td>{phoneno}</td>
              <td>
                <img src={imagelink} alt="" />
              </td>
              <td>
                <a href={mapLoc} target="_blank" rel="noopener noreferrer">
                  Current Location
                </a>
              </td>
              <td>
                <button
                  value={userid}
                  onClick={e => {
                  }}
                  style={{
                    backgroundColor: "black",
                    width: "44%",
                    marginRight: "1%"
                  }}
                >
                  Emergency Contacts
                </button>
                <button
                  value={userid}
                  onClick={e => {
                  }}
                  style={{
                    backgroundColor: "black",
                    width: "25%",
                    marginRight: "1%"
                  }}
                >
                  Searches
                </button>
              </td>
            </tr>
          );
        }

        setTabl(arr);
        setDataVisible(arr.length > 0);
      }
    } catch (err) {
      window.alert(err);
    }
  };
  const [state, setState] = React.useState({
    columns: [
      { title: "Name", field: "name" },
      { title: "Surname", field: "surname" },
      { title: "Birth Year", field: "birthYear", type: "numeric" },
      {
        title: "Birth Place",
        field: "birthCity",
        lookup: { 34: "İstanbul", 63: "Şanlıurfa" }
      }
    ],
    data: [
      { name: "Mehmet", surname: "Baran", birthYear: 1987, birthCity: 63 },
      {
        name: "Zerya Betül",
        surname: "Baran",
        birthYear: 2017,
        birthCity: 34
      },
      {
        name: "Zerya Betül",
        surname: "Baran",
        birthYear: 2017,
        birthCity: 34
      },
      {
        name: "Zerya Betül",
        surname: "Baran",
        birthYear: 2017,
        birthCity: 34
      },
      {
        name: "Zerya Betül",
        surname: "Baran",
        birthYear: 2017,
        birthCity: 34
      },
      {
        name: "Zerya Betül",
        surname: "Baran",
        birthYear: 2017,
        birthCity: 34
      },
      {
        name: "Zerya Betül",
        surname: "Baran",
        birthYear: 2017,
        birthCity: 34
      },
      {
        name: "Zerya Betül",
        surname: "Baran",
        birthYear: 2017,
        birthCity: 34
      }
    ]
  });
  if (dataVisible) {
    return (
      <MaterialTable title={name} columns={state.columns} data={state.data} />
    );
  } else {
    return <div></div>;
  }
};

export default Table;

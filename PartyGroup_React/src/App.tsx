import React, { useEffect, useState } from "react";
import { Switch, Route, useHistory } from "react-router-dom";
import axios from "axios";
import { useCookies } from "react-cookie";

import Login from "./Pages/Login/Login";
import Loading from "./Pages/Loading/Loading";
import Main from "./Pages/Main/Main";

import "./assets/css/reset.css";
import "./assets/css/lobby.css";
import "./assets/css/main.css";
import Upload from "./Pages/Upload/Upload";

interface formData {
  year: number;
  month: number;
  day: number;
  time: string;
  place: string;
  count: number;
}

function App() {
  // const Setting
  const history = useHistory();

  // State Setting
  const [partyData, setPartyData] = useState<any>([]);
  const [cookies, setCookie, delCookie] = useCookies(["infoName", "infoCode"]);

  // Effect Setting
  useEffect(() => {
    let date: Date = new Date();
    let year: number = date.getFullYear();
    let month: number = date.getMonth() + 1;

    history.replace("/");

    setTimeout(() => {
      if (!cookies.infoName) {
        history.replace("/login");
      } else {
        history.replace("/main");
      }
    }, 1000);

    setPartyDataApi(year, month);
  }, [history, cookies]);

  // function Setting
  const setPartyDataApi = (year: number, month: number) => {
    axios
      .get(`http://localhost:8080/party?year=${year}&month=${month}`)
      .then((res) => setPartyData(res.data));
  };
  const postPartyDataApi = (data:formData) => {
    let date: Date = new Date();
    let year: number = date.getFullYear();
    let month: number = date.getMonth() + 1;

    let form = new FormData();
    form.append('year', data.year.toString());
    form.append('month', data.month.toString());
    form.append('day', data.day.toString());
    form.append('time', data.time);
    form.append('place', data.place);
    form.append('count', data.count.toString());
    form.append('name', cookies.infoName);
    form.append('code', cookies.infoCode.toString());

    axios
      .post(`http://localhost:8080/party`, form)
      .then(() => setPartyDataApi(year, month));
  }

  const setJoinParty = (id: number) => {
    let date: Date = new Date();
    let year: number = date.getFullYear();
    let month: number = date.getMonth() + 1;

    let form = new FormData();
    form.append('id', id.toString());
    form.append('name', cookies.infoName);
    form.append('code', cookies.infoCode);

    axios
      .put("http://localhost:8080/member", form)
      .then(() => setPartyDataApi(year, month));
  }

  const userLogin = (name: string) => {
    const now: Date = new Date();

    setCookie("infoName", name, {});
    setCookie("infoCode", now.getTime(), {});
  };

  const userLogout = () => {
    delCookie("infoName");
    delCookie("infoCode");
  };

  return (
    <div className="App">
      <Switch>
        <Route path="/main">
          <Main
            partyData={partyData}
            setPartyDataApi={setPartyDataApi}
            userLogout={userLogout}
            setJoinParty={setJoinParty}
          />
          <Route path="/main/upload">
            <Upload postPartyDataApi={postPartyDataApi} />
          </Route>
        </Route>
        <Route path="/login">
          <Login userLogin={userLogin} cookies={cookies} />
        </Route>
        <Route path="/" component={Loading} />
      </Switch>
    </div>
  );
}

export default App;

import React, { useState } from "react";
import axios from "axios";
import https from "https";

function App() {

  const kickLottery = () => {
    console.log(process.env.REACT_APP_API_URL);

    const httpsAgent = new https.Agent({
      rejectUnauthorized: false,
    });
    axios.post(process.env.REACT_APP_API_URL, { httpsAgent: httpsAgent })
      .then(res => {
        alert("リクエストが送信されました");
        console.log(res);
      })
      .catch(err => {
        alert("エラーが発生しました");
        console.log(err);
      })

  }


  return (
    <React.Fragment>
      <header id="header">
        <div id="headerWrap">
          <nav id="mainnav">
            <p id="menuWrap">
              <span id="menu"><span id="menuBtn"></span></span>
            </p>
            <div className="panel">
              <ul>
                <li>Lottery Kicker</li>
              </ul>
            </div>
          </nav>
        </div>
      </header>

      <section id="sec01">
        <header>
          <h2><span>Description</span></h2>
        </header>
        <div className="innerS">
          抽選を開始する場合は下のボタンを押してください
        </div>

        <form method="POST" className="form" name='lottery'>
          {/* <p>Flow ID<br />
            <input type="text" name="flowId" style={{ width: "300px" }} value={flowId} onChange={(event) => setFlowId(event.target.value)} />
          </p>
          <p>To Number (E.164)<br />
            <input type="text" name="toNumber" value={toNumber} onChange={(event) => setToNumber(event.target.value)} />
          </p> */}

          <div className="innerS">
            <label className="button" onClick={() => {
              kickLottery()
            }}>
              <span>START</span>
              <span>LOTTERY</span>
            </label>

          </div>
        </form>

      </section>

      <footer id="footer">
        Copyright(c) 2021 GeekFeed Inc. All Rights Reserved.
      </footer>
    </React.Fragment>
  );
}

export default App;

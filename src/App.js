import React, { useState } from "react";

function App() {
  const [flowId, setFlowId] = useState("");
  const [toNumber, setToNumber] = useState("");

  const kickLottery = () => {
    console.log(`Flow ID: ${flowId}  To Number: ${toNumber}`);

    if (!flowId || !toNumber) {
      alert("未入力の項目があります。");
      return;
    }

    const client = require('twilio')(
      "ACaf140c46abb18e81b236fc6075d20a38",
      "9dae5193668d97336963113c155ae93a"
    )

    try {
      client.studio.flows(flowId)
        .executions.create({
          from: "+815032050953",
          to: toNumber
        })
        .then(flow => {
          console.log(flow)
          alert("リクエストが送信されました")
        })
        .catch(err => {
          console.log(err)
          alert("エラーが発生しました")
        })
    } catch (e) {
      console.log(e);
    }
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
                <li>Twilio Lottery Kicker</li>
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
          抽選を開始する場合は下のボタンを押してください<br />
          ※現在テストのため、フォームから任意のフローをキックできるようにしています。<br />
          本番ではキックするフローは固定にし、フォームは削除します。
        </div>

        <form method="POST" className="form" name='lottery'>
          <p>Flow ID<br />
            <input type="text" name="flowId" style={{ width: "400px" }} value={flowId} onChange={(event) => setFlowId(event.target.value)} />
          </p>
          <p>To Number (E.164)<br />
            <input type="text" name="toNumber" value={toNumber} onChange={(event) => setToNumber(event.target.value)} />
          </p>

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
        Copyright(c) 2020 GeekFeed Inc. All Rights Reserved.
      </footer>
    </React.Fragment>
  );
}

export default App;

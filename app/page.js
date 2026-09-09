"use client";

import { useState } from "react";

export default function Home() {
  const [active, setActive] = useState("Overview");

  const menu = [
    "Overview",
    "Bot",
    "Members",
    "Tickets",
    "Moderation",
    "Settings",
  ];

  return (
    <main className="dashboard">
      <aside className="sidebar">
        <div className="logo">NOVA</div>

        <nav>
          {menu.map((item) => (
            <button
              key={item}
              onClick={() => setActive(item)}
              className={active === item ? "active" : ""}
            >
              {item}
            </button>
          ))}
        </nav>

        <div className="user">
          <div className="avatar">N</div>
          <div>
            <strong>NOVA</strong>
            <small>Dashboard</small>
          </div>
        </div>
      </aside>

      <section className="content">
        <header>
          <div>
            <p className="small">WELCOME BACK</p>
            <h1>{active}</h1>
          </div>

          <div className="status">
  <span></span>
  Online
</div>


  

  

  

        {active === "Overview" && (
          <>
            <div className="cards">
              <Card title="Members" value="0" />
              <Card title="Servers" value="1" />
              <Card title="Tickets" value="0" />
              <Card title="Commands" value="0" />
            </div>

            <div className="panel">
              <h2>NOVA Bot</h2>
              <p>Your Discord bot is ready to be configured.</p>

              <div className="bot-status">
                <span></span>
                Bot Online
              </div>
            </div>
          </>
        )}

        {active !== "Overview" && (
          <div className="panel">
            <h2>{active}</h2>
            <p>{active} settings and controls will appear here.</p>
          </div>
        )}
      </section>

      <style jsx>{`
        * {
          box-sizing: border-box;
        }

        .dashboard {
          min-height: 100vh;
          display: flex;
          background: #08090d;
          color: white;
          font-family: Arial, sans-serif;
        }

        .sidebar {
          width: 250px;
          min-height: 100vh;
          background: #0d0f15;
          border-right: 1px solid #20232d;
          padding: 25px 18px;
          display: flex;
          flex-direction: column;
        }

        .logo {
          font-size: 30px;
          font-weight: 800;
          letter-spacing: 4px;
          padding: 10px 14px 35px;
        }

        nav {
          display: flex;
          flex-direction: column;
          gap: 8px;
        }

        nav button {
          border: 0;
          background: transparent;
          color: #8d92a1;
          padding: 13px 15px;
          border-radius: 10px;
          text-align: left;
          font-size: 15px;
          cursor: pointer;
        }

        nav button:hover,
        nav button.active {
          background: #191c25;
          color: white;
        }

        .user {
          margin-top: auto;
          padding: 15px 10px;
          border-top: 1px solid #20232d;
          display: flex;
          gap: 12px;
          align-items: center;
        }

        .avatar {
          width: 38px;
          height: 38px;
          border-radius: 50%;
          background: white;
          color: #08090d;
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: bold;
        }

        .user small {
          display: block;
          color: #777d8c;
          margin-top: 3px;
        }

        .content {
          flex: 1;
          padding: 45px;
          max-width: 1400px;
        }

        header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 35px;
        }

        .small {
          color: #777d8c;
          font-size: 12px;
          letter-spacing: 2px;
          margin: 0 0 8px;
        }

        h1 {
          margin: 0;
          font-size: 36px;
        }

        .status,
        .bot-status {
          display: flex;
          align-items: center;
          gap: 8px;
          color: #9da3b1;
        }

        .status span,
        .bot-status span {
          width: 9px;
          height: 9px;
          background: #35d07f;
          border-radius: 50%;
        }

        .cards {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 18px;
          margin-bottom: 22px;
        }

        .card,
        .panel {
          background: #101219;
          border: 1px solid #20232d;
          border-radius: 16px;
        }

        .card {
          padding: 24px;
        }

        .card p {
          color: #777d8c;
          margin: 0 0 15px;
        }

        .card strong {
          font-size: 30px;
        }

        .panel {
          padding: 28px;
        }

        .panel h2 {
          margin-top: 0;
        }

        .panel p {
          color: #777d8c;
        }

        .bot-status {
          margin-top: 25px;
          color: #35d07f;
        }

        @media (max-width: 800px) {
          .sidebar {
            width: 190px;
          }

          .content {
            padding: 25px;
          }

          .cards {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (max-width: 600px) {
          .sidebar {
            width: 75px;
            padding: 20px 10px;
          }

          .logo {
            font-size: 18px;
            padding: 10px 5px 30px;
          }

          nav button {
            font-size: 0;
            text-align: center;
          }

          .user {
            justify-content: center;
          }

          .user div:not(.avatar) {
            display: none;
          }

          .content {
            padding: 20px 15px;
          }

          .cards {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </main>
  );
}

function Card({ title, value }) {
  return (
    <div className="card">
      <p>{title}</p>
      <strong>{value}</strong>
    </div>
  );
}

import React from "react";
import bell from "../assest/bell.png";
import calendar from "../assest/calendar.png";
import heart from "../assest/heart.png";
import search from "../assest/search.png";
import DashBoard from "./dashBoard";

const headerIcons = [bell, calendar, heart, search];

const Header = () => {
  return (
    <section style={{
      display :"flex",
      flexDirection :"column"
    }}>
      <section
        style={{
          width: "100%",
          display: "flex",
          backgroundColor: "#202A44",
          color: "#FFF",
          alignItems: "center"
        }}
      >
        <section
          style={{
            display: "flex",
            width: "10%",
            justifyContent: "space-evenly",
            marginLeft: "20px",
          }}
        >
          <p
            style={{
              marginLeft: "40px",
            }}
          >
            Icube
          </p>
          <p
            style={{
              marginLeft: "25px",
            }}
          >
            All
          </p>
          <p
            style={{
              marginLeft: "25px",
            }}
          >
            Recent
          </p>
        </section>
        <section style={{
            position: "absolute",
            right: "0",
            height :"auto",
            width: "20%",
            display: "flex",
            justifyContent: "space-evenly",
        }}>
            {
                headerIcons.map((icons)=>{
                    return <img src= {icons} alt="headerIcons"  style={{
                        width:"20px"
                    }}/>
                })
            }
        </section>
      </section>
    </section>
  );
};

export default Header;

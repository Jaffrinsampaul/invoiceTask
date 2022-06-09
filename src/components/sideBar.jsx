import bell from "../assest/bell.png";
import calendar from "../assest/calendar.png";
import heart from "../assest/heart.png";
import search from "../assest/search.png";
import DashBoard from "./dashBoard";

const sideIcon = [bell, calendar, heart, search];

const Sidebar = () => {
  return (
    <section style={{
      display: "flex"
      
    }}>
      <section
        style={{
          height: "100vh",
          width: "5%",
          backgroundColor: "#F4F5FA",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <section
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "space-evenly",
            height: "40%",
          }}
        >
          {sideIcon.map((icons, index) => {
            return (
              <img
                key={index}
                src={icons}
                alt="sideIcons"
                style={{
                  width: "20px",
                }}
              />
            );
          })}
        </section>
        <section
          style={{
            verticalAlign: "middle",
            width: "50px",
            height: "50px",
            borderRadius: "50%",
            backgroundColor: "#F4F",
            position: "absolute",
            bottom: "15px"
          }}
        >
          <p>SA</p>
        </section>
      </section>
      <DashBoard/>
    </section>
  );
};

export default Sidebar;

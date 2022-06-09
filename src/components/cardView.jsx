import React from "react";

const CardView = (props) => {
  const { color, orderNumber, name } = props;

  return (
    <section  style={{
        width: "15%",
        borderStyle: "solid",
        borderColor: color,
        height: "120px",
        marginTop: "20px",
        borderRadius: "10px",
        display: "flex"
      }}>
          <section style={{
              height: "100%",
              width :"20%",
              backgroundColor: color,
              borderBottomRightRadius: "20px"
          }}></section>
      <section style={{
          display:"flex",
          flexDirection: "column",
          width:"80%"
      }}>
        <p>{name}</p>
        <section
          style={{
            width: "100%",
            height: "5px",
            backgroundColor: color,
          }}
        ></section>
        <p>{orderNumber}</p>
      </section>
    </section>
  );
};

export default CardView;

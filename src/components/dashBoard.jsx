import React, { useEffect, useState } from "react";
import CardView from "./cardView";

const DashBoard = () => {
  const [tableHeader, setTableHeader] = useState([
    "InvoiceNO",
    "Date",
    "Order no",
    "Order Date",
    "Bank Balance",
    "Rating",
  ]);
  const [tableBody, setTableBody] = useState([
    {
      invoiceNO: 1,
      data: 9 / 6 / 2022,
      orderNo: 1,
      orderData: 9 / 6 / 2022,
      bankBalance: "RS 1000",
      rating: 10,
    },
  ]);
  const [newData, setNewData] =useState({
    invoiceNO: 0,
    data: 0,
    orderNo: 0,
    orderData: 0,
    bankBalance: "",
    rating: 0,
  })
const handleNewData =(e)=>{
    const id = e.target.id
    const value = e.target.value
    setNewData({...newData, [id]:value})
}
const handleClick =()=>{
    setTableBody([...tableBody, newData])
}

useEffect(()=>{

},[tableBody])
  return (
    <section
      style={{
        width: "100%",
      }}
    >
        <section style={{
            display :"flex",
            justifyContent: "space-evenly"
        }}>
            <CardView name="Purchase order" orderNumber ="9087" color="#8b0000"/>
            <CardView name="Pending order" orderNumber ="50" color ="#00FF00"/>
            <CardView name="Pending order" orderNumber="500" color="#800080"/>
            <CardView name="Purchase order" orderNumber="650" color="#0000FF"/>
            <CardView name="Purchase order" orderNumber="1250" color ="#00FF00"/>
        </section>
      <section style={{
          display: "flex",
          marginTop :"30px",
          justifyContent: "center",
          justifyContent: "space-evenly"
      }}>
        <input type="text" placeholder="invoiceNo" id="invoiceNO" onChange={handleNewData} style={{
            border: 0
        }}/>
        <input type="text" placeholder="data" id="data" onChange={handleNewData} style={{
            border: 0
        }}/>
        <input type="text" placeholder="ordeNo" id="ordeNo" onChange={handleNewData} style={{
            border: 0
        }}/>
        <input type="text" placeholder="orderData" id="orderData" onChange={handleNewData} style={{
            border: 0
        }}/>
        <input type="text" placeholder="bankBalance" id="bankBalance" onChange={handleNewData} style={{
            border: 0
        }}/>
        <input type="text" placeholder="rating" id="rating" onChange={handleNewData} style={{
            border: 0
        }}/>
        <input type="button" value= "save" onClick={handleClick}/>
      </section>
      <table
        style={{
          width: "100%",
          marginTop :"30px"
        }}
      >
        <thead>
          <tr>
            {tableHeader.map((hearder, index) => {
              return (
                <th
                key={index}
                  style={{
                    width: "50px",
                  }}
                >
                  {hearder}
                </th>
              );
            })}
          </tr>
        </thead>
        <tbody>
          {tableBody.map((obj, index) => {
            return (
              <tr key={index}>
                <td>{obj.invoiceNO}</td>
                <td>{obj.data}</td>
                <td>{obj.orderNo}</td>
                <td>{obj.orderData}</td>
                <td>{obj.bankBalance}</td>
                <td>{obj.rating}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </section>
    // <h1>hi from dask</h1>
  );
};

export default DashBoard;

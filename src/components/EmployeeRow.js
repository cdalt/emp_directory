import React from "react";
import Moment from "react-moment";

function EmployeeRow({ emp }) {
  return (
    <tr>
      <td>
        <img src={emp.picture.medium} id="empImg" alt="empImg" />
      </td>
      <td>
        {emp.name.first} {emp.name.last}
      </td>
      <td>
        <b>Home:</b> {emp.phone} <br />
        <b>Cell:</b> {emp.cell} <br />
        <b>Email:</b> {emp.email} <br />
      </td>
      <td>
        <Moment format="MMMM DD, YYYY">{emp.dob.date}</Moment>
      </td>
      <td>
        <Moment format="MMMM DD, YYYY">{emp.registered.date}</Moment>
      </td>
    </tr>
  );
}

export default EmployeeRow;

import React, { Component } from "react";
import API from "../utils/API";
import EmployeeRow from "./EmployeeRow";
// import Search from "./Search";
// import Nav from "./Nav";

class Container extends Component {
  state = {
    employees: [],
    filteredEmployees: [],
  };
  componentDidMount() {
    API.getUsers().then((res) => {
      console.log(res.data.results);
      this.setState({
        employees: res.data.results,
        filteredEmployees: res.data.results,
      });
    });
  }
  // componentDidUpdate() {
  //   this.filterResults();
  // }

  handleInputChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    this.filterResults(value);
  };
  filterResults = (value) => {
    if (value === "Last Name") {
      console.log(this.state.filteredEmployees[0].name.last);
      let sortEmployees = this.state.filteredEmployees.sort(function (a, b) {
        if (a.name.last < b.name.last) {
          return -1;
        }
        if (a.name.last > b.name.last) {
          return 1;
        }
        return 0;
      });
      console.log(sortEmployees);
      this.setState({ filteredEmployees: sortEmployees });
    } else if (value === "First Name") {
      console.log(this.state.filteredEmployees[0].name.last);
      let sortEmployees = this.state.filteredEmployees.sort(function (a, b) {
        if (a.name.first < b.name.first) {
          return -1;
        }
        if (a.name.first > b.name.first) {
          return 1;
        }
        return 0;
      });
      console.log(sortEmployees);
      this.setState({ filteredEmployees: sortEmployees });
    }
  };
  render() {
    return (
      <>
        {" "}
        <h1>Employee Directory</h1>
        <select name="sortBy" onChange={this.handleInputChange}>
          <option>-</option>
          <option>Last Name</option>
          <option>First Name</option>
        </select>
        {this.state["filteredEmployees"].map((employee) => {
          return <EmployeeRow emp={employee} />;
        })}{" "}
      </>
    );
  }
}
export default Container;

import { Component } from "react";

class FormComp extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      description: "",
      language: "react",
    };
  }
  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState(
      (prevState) => {
        return { ...prevState, [name]: value };
      },
      () => {
        // console.log(this.state);
      }
    );
  };
  handleSubmit = (event) => {
    event.preventDefault();
    alert(this.state.name + this.state.description + this.state.language);
  };
  render() {
    const { name, description, language } = this.state;

    return (
      <form onSubmit={this.handleSubmit}>
        <div>
          <label>Name: </label>
          <input name="name" value={name} onChange={this.handleChange} />
        </div>
        <div>
          <label>Description: </label>
          <textarea
            name="description"
            value={description}
            onChange={this.handleChange}
          />
        </div>
        <div>
          <label>Select Language</label>
          <select name="language" value={language} onChange={this.handleChange}>
            <option value="react">React</option>
            <option value="angular">Angular</option>
            <option value="vue">Vue</option>
          </select>
        </div>
        <div></div>
        <button type="submit">Submit</button>
      </form>
    );
  }
}

export default FormComp;

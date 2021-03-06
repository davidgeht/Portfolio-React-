
import React from "react";

export default class MyForm extends React.Component {
  constructor(props) {
    super(props);
    this.submitForm = this.submitForm.bind(this);
    this.state = {
      status: ""
    };
  }

  render() {
    const { status } = this.state;
    return (
      <form
        onSubmit={this.submitForm}
        action="https://formspree.io/xvoqpvar"
        method="POST"

      >
        <div class="form-group">
        <label>Name:</label>
        <br></br>
        <input type="text" name="name" class="form-control form-control-lg"/>
        </div>
        <div class="form-group">
        <label for="exampleFormControlInput1">Email address</label>
        <br></br>
        <input type="email" class="form-control form-control-lg" id="exampleFormControlInput1" placeholder="name@example.com"/>
        </div>
        <div class="form-group">
        <label for="exampleFormControlTextarea1">Message:</label>
        <br></br>
        <textarea class="form-control form-control-lg" id="exampleFormControlTextarea1" rows="3"></textarea>
        </div>
        {status === "SUCCESS" ? <p>Thanks!</p> : <button>Submit</button>}
        {status === "ERROR" && <p>Ooops! There was an error.</p>}
      </form>
    );
  }

  submitForm(ev) {
    ev.preventDefault();
    const form = ev.target;
    const data = new FormData(form);
    const xhr = new XMLHttpRequest();
    xhr.open(form.method, form.action);
    xhr.setRequestHeader("Accept", "application/json");
    xhr.onreadystatechange = () => {
      if (xhr.readyState !== XMLHttpRequest.DONE) return;
      if (xhr.status === 200) {
        form.reset();
        this.setState({ status: "SUCCESS" });
      } else {
        this.setState({ status: "ERROR" });
      }
    };
    xhr.send(data);
  }
}


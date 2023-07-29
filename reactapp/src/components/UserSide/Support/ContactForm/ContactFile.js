import emailjs from "@emailjs/browser";
import './ContactFile.css';

import image from "./logo.jpeg";

function ContactFile() {
  return (
    <div className="bodyz">
      <div className="containerz">
        <div className="container border mt-3 bg-dark">
          <div className="row">
            <div className="col-md-6 p-5  text-white">
              <br></br>
              <br></br>

              <h3 className="text">Hi there! </h3>
              <h5 className="text">
                This is Foodle customer support service Please mention the issue
                you are facing and please provide your feedback !<br></br>{" "}
              </h5>
              <h4 className="etext">
                {" "}
                <br></br>
                For Contact
                <br></br>
                <br></br> <img className="imgz"src={image} alt="logo" /> Foodle@gmail
              </h4>
            </div>
            <div className="col-md-6 border-left py-3">
              <div className="form-group">
                <h5 for="name">Name</h5>
                <input
                  type="text"
                  className="form-control"
                  id="name"
                  required
                  placeholder="Enter name"
                />
              </div>
              <div className="form-group">
                <h5 for="email">Email</h5>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  placeholder="Enter email"
                />
              </div>

              <div className="form-group">
                <h5 for="message">Issue</h5>

                <input
                  type="text"
                  className="form-control"
                  id="order"
                  placeholder="Enter Order ID"
                />

                <br></br>
                <textarea
                  style={{width:'100%',marginLeft:'0px'}}
                  className="form-control"

                  id="message"
                  rows="3"
                  placeholder="Enter your Issue"
                ></textarea>
              </div>
              <div className="form-group">
                <h5 for="feedback">Feedback</h5>
                <input
                  type="text"
                  className="form-control"
                  id="feedback"
                  placeholder="Please enter your Feedback"
                />
              </div>
              <br></br>
              <button className="sbb" type="submit" onClick={Sendmail}>
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Sendmail() {
  var params = {
    name: document.getElementById("name").value,
    email: document.getElementById("email").value,
    message: document.getElementById("message").value,
    OrderID: document.getElementById("order").value,
    feedback: document.getElementById("feedback").value,
  };
  console.log(params);

  const serviceID = "service_82t3hqn";
  const templateID = "template_nv8ypwn";

  emailjs
    .send(serviceID, templateID, params, "U3XHQbJqmZN8xHVAk")
    .then((res) => {
      document.getElementById("name").value = "";
      document.getElementById("email").value = "";
      document.getElementById("message").value = "";
      document.getElementById("order").value = "";
      document.getElementById("feedback").value = "";

      alert("Your message sent successfully!!");
    })
    .catch((err) => console.log(err));
}

export default ContactFile;

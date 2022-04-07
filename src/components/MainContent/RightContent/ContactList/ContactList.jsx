import React from "react";
import Contact from "./Contact/Contact";

const ContactList = () => {
  return (
    <div className="contact-list">
      <Contact
        src="https://i.ibb.co/1JKq6YT/avatar-1.jpg"
        className="user_status status_online"
        username="@goodvin"
      />
      {/* <div uk-drop="pos: left-center ;animation: uk-animation-slide-left-small">
          <div className="contact-list-box">
            <div className="contact-avatar">
              <img
                src={require("../../../assets/images/avatar-2.jpg")}
                alt=""
              />
              <span className="user_status status_online"></span>
            </div>
            <div className="contact-username"> @goodvin</div>
            <p>
              <ion-icon name="people" className="text-lg mr-1"></ion-icon>{" "}
              Become friends with
              <strong> @lapnet </strong> and <strong> 14 Others</strong>
            </p>
            <div className="contact-list-box-btns">
              <button
                type="button"
                className="button primary flex-1 block mr-2"
              >
                <i className="uil-envelope mr-1"></i> Send message
              </button>
              <button
                type="button"
                href="#id"
                className="button secondary button-icon mr-2"
              >
                <i className="uil-list-ul"> </i>{" "}
              </button>
              <button
                type="button"
                a
                href="#id"
                className="button secondary button-icon"
              >
                <i className="uil-ellipsis-h"> </i>
              </button>
            </div>
          </div>
        </div> */}

      <Contact
        src="https://i.ibb.co/FbXfQ2X/avatar-2.jpg"
        className="user_status"
        username=" @Alekseys787"
      />
      {/* <div uk-drop="pos: left-center ;animation: uk-animation-slide-left-small">
          <div className="contact-list-box">
            <div className="contact-avatar">
              <img
                src={require("../../../assets/images/avatar-1.jpg")}
                alt=""
              />
              <span className="user_status"></span>
            </div>
            <div className="contact-username"> @Alekseys787 </div>
            <p>
              <ion-icon name="people" className="text-lg mr-1"></ion-icon>{" "}
              Become friends with
              <strong> @Boblonekst </strong> and <strong> 14 Others</strong>
            </p>
            <div className="contact-list-box-btns">
              <button
                type="button"
                className="button primary flex-1 block mr-2"
              >
                <i className="uil-envelope mr-1"></i> Send message
              </button>
              <button
                type="button"
                href="#id"
                className="button secondary button-icon mr-2"
              >
                <i className="uil-list-ul"> </i>{" "}
              </button>
              <button
                type="button"
                a
                href="#id"
                className="button secondary button-icon"
              >
                <i className="uil-ellipsis-h"> </i>
              </button>
            </div>
          </div>
        </div> */}
      <Contact
        src="https://i.ibb.co/FbXfQ2X/avatar-2.jpg"
        className="user_status status_online"
        username="@Samurai21"
      />
      <Contact
        src="https://i.ibb.co/f1mwB8V/avatar-6.jpg"
        className="user_status"
        username="@Misert"
      />
      <Contact
        src="https://i.ibb.co/1JKq6YT/avatar-1.jpg"
        className="user_status status_online"
        username="@fronovaola1"
      />
      <Contact
        src="https://i.ibb.co/FbXfQ2X/avatar-2.jpg"
        className="user_status"
        username="@bulgakowa2009"
      />
      <Contact
        src="https://i.ibb.co/7Vn1NcB/avatar-8.jpg"
        className="user_status"
        username="@ljubovmikhail"
      />
      <Contact
        src="https://i.ibb.co/8DtZY6f/avatar-4.jpg"
        className="user_status"
        username="@CryptologY_"
      />
    </div>
  );
};

export default ContactList;

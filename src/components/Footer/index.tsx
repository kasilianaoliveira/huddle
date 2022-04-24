import { Container, Content, Contacts, Newsletter } from "./style";
import logoFooter from "../../assets/logo-footer.svg";
import iconPhone from "../../assets/icon-phone.svg";
import iconEmail from "../../assets/icon-email.svg";

export const Footer: React.FC = () => {
  return (
    <Container>
      <Content>
        <Contacts>
          <img src={logoFooter} alt="Huddle" />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum
            distinctio facere qui, minus vitae vero ea totam eligendi alias odit
            suscipit.
          </p>
          <div className="contacts__item">
            <div>
              <img src={iconPhone} alt="" />
              <span className=" img-phone">Phone: +1-543-123-4567</span>
            </div>
            <div>
              <img src={iconEmail} alt="" />
              <span className="img-email">example@huddle.com</span>
            </div>
          </div>
        </Contacts>

        <Newsletter>
          <div className="newsletter__text">
            <h2>NEWSLETTER</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum
              distinctio facere qui, minus vitae vero ea totam eligendi alias
              odit suscipit.
            </p>
          </div>
          <form className="newsletter__form">
            <input type="text" placeholder="Enter your email" />
            <button>Subscribe</button>
          </form>
        </Newsletter>
      </Content>
    </Container>
  );
};

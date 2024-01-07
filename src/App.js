import { useState } from "react";
export default function App() {
  const [toggler, setToggler] = useState(false);
  return (
    <>
      <Section>
        <Header toggler={toggler} setToggler={setToggler} />
        <Background />
        <PricingComponent toggler={toggler} setToggler={setToggler} />
      </Section>
    </>
  );
}

function Section({ children }) {
  return <div>{children}</div>;
}

function Background() {
  return <div className="background"></div>;
}

// function Backgroundbottom() {
//   return <div className=" backgroundbottom"></div>;
// }

function Header({ setToggler, toggler }) {
  return (
    <div>
      <h1 className="title">Our Pricing</h1>

      <div className="header-container">
        <h2>Annually</h2>

        <label className="switch">
          <input
            type="checkbox"
            checked={toggler}
            onChange={() => setToggler(!toggler)}
          />
          <span className="slider round"></span>
        </label>
        <h2>Monthly</h2>
      </div>
    </div>
  );
}

function PricingComponent({ toggler }) {
  const getPrice = (toggler) => {
    if (toggler) {
      return {
        price1: "$19.99",
        price2: "$24.99",
        price3: "$39.99",
      };
    } else {
      return {
        price1: "$199.99",
        price2: "$249.99",
        price3: "$399.99",
      };
    }
  };

  const { price1, price2, price3 } = getPrice(toggler);
  return (
    <div>
      <section className="pricing-container">
        <div className="componenet1">
          <h1>Basic</h1>
          <h2>{price1}</h2>
          <div className="line"></div>
          <p>500 GB Storage </p>
          <div className="line"></div>
          <p>2 Users Allowed </p>
          <div className="line"></div>
          <p>Send up to 3 GB </p>
          <div className="line"></div>
          <button>LEARN MORE</button>
        </div>

        <div className="componenet2">
          <h1>Professional</h1>
          <h2>{price2}</h2>
          <div className="line"></div>
          <p>1 TB Storage </p>
          <div className="line"></div>
          <p>5 Users Allowed </p>
          <div className="line"></div>
          <p>Send up to 10 GB </p>
          <div className="line"></div>
          <button>LEARN MORE</button>
        </div>

        <div className="componenet3">
          <h1>Master</h1>
          <h2>{price3}</h2>
          <div className="line"></div>
          <p>2 TB Storage </p>
          <div className="line"></div>
          <p>10 Users Allowed </p>
          <div className="line"></div>
          <p>Send up to 20 GB </p>
          <div className="line"></div>
          <button>LEARN MORE</button>
        </div>
      </section>
    </div>
  );
}

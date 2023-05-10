import { Component } from "react";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      name: "Angular",
      age: 50,
      tvs: [
        {
          brand:
            "iFFALCON by TCL U62 139 cm (55 inch) Ultra HD (4K) LED Smart...",
          price: "32,999",
          id: "12BDOPA23",
        },
        {
          brand:
            "SAMSUNG Series 8 189 cm (75 inch) Ultra HD (4K) LED Smart Tizen T...",
          price: "59,990",
          id: "12BDOPA24",
        },
        {
          brand:
            "Thomson 164 cm (65 inch) QLED Ultra HD (4K) Smart Google TV With ...",
          price: "30,000",
          id: "12BDOPA25",
        },
        {
          brand:
            "OnePlus U1S 164 cm (65 inch) Ultra HD (4K) LED Smart Android TV w...",
          price: "90,000",
          id: "12BDOPA26",
        },
        {
          brand:
            "acer I Series 139 cm (55 inch) Ultra HD (4K) LED Smart Android TV...",
          price: "20,000",
          id: "12BDOPA27",
        },
        {
          brand:
            "dell I Series 139 cm (55 inch) Ultra HD (4K) LED Smart Android TV...",
          price: "20,000",
          id: "12BDOPA29",
        },
      ],
    };
  }

  render() {
    const { name, age, tvs } = this.state;
    const changeNameHandler = () => {
      this.setState({ name: "React" });
    };
    return (
      <div>
        <h1>{name}</h1>
        <p>{age}</p> &nbsp;
        <button type="button" onClick={changeNameHandler}>
          Change Name
        </button>
        <hr />
        <div className="cards-user">
          <h1>TV Brands</h1>
          {tvs.map((tv, index) => (
              <div key={tv.id}>
                <p>{tv.brand}</p>
                <p>{tv.price}</p>
              </div>
            )
          )}
          <p>Newly Added</p>
        </div>
      </div>
    );
  }
}

export default App;

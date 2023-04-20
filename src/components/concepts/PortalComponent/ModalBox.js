import React from "react";
import ReactDOM from "react-dom";
import "./ModalBox.styles.scss";

const ModalBox = () => {
  return ReactDOM.createPortal(
    <div className="modal-container">
      <h2 className="modal-heading">Hello I am modal Box</h2>
      <p className="modal-paragraph">
        Lorem ipsum dolor sit amet. Sed provident quia rem sapiente optio eum
        voluptas alias qui sint atque. Quo galisum quis id vitae consequatur a
        debitis saepe in ullam dignissimos non dignissimos sapiente aut
        perspiciatis quia. Est voluptatem amet est veritatis suscipit sit
        maiores maiores ex quia distinctio ut accusamus tempora. Non nostrum
        voluptatem est quas nisi est exercitationem sunt hic enim aspernatur nam
        vitae esse qui nisi voluptatibus.
      </p>
      <div className="modal-container-item">
        <p>Choose your action?</p>
        <button>CLOSE</button>
        <button>CANCEL</button>
      </div>
    </div>,
    document.getElementById("modal-portal")
  );
};

// const ModalBox = () => {
//   return (
//     <div>
//       <h2>Hello I am modal Box</h2>
//       <p>
//         Lorem ipsum dolor sit amet. Sed provident quia rem sapiente optio eum
//         voluptas alias qui sint atque. Quo galisum quis id vitae consequatur a
//         debitis saepe in ullam dignissimos non dignissimos sapiente aut
//         perspiciatis quia. Est voluptatem amet est veritatis suscipit sit
//         maiores maiores ex quia distinctio ut accusamus tempora. Non nostrum
//         voluptatem est quas nisi est exercitationem sunt hic enim aspernatur nam
//         vitae esse qui nisi voluptatibus.
//       </p>
//       <div>
//         <p>Choose your action?</p>
//         <button>YES</button>
//         <button>NO</button>
//       </div>
//     </div>
//   );
// };

export default ModalBox;

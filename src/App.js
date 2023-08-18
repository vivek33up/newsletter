// import "./App.css";
// import { useState } from "react";

// function App() {
//   const [mail, setMail] = useState(null);
//   const [show, setShow] = useState(null);
//   function handleMail(e) {
//     e.preventDefault();
//     if (!isValidEmail(mail)) {
//       setShow("invalid");
//     } else {
//       setShow("success");
//     }
//   }

//   function handleDismiss() {
//     setShow(null);
//   }

//   // function handleShow() {
//   //   setShow(null);
//   // }
//   function isValidEmail(email) {
//     // Basic email validation regex
//     const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
//     return emailRegex.test(email);
//   }
//   return (
//     <body>
//       {show === null ? (
//         <header>
//           <div className="one">
//             <h1>Stay updated!</h1>
//             <p>Join 60,000+ product managers receiving monthly updates on:</p>
//             <ul className="list">
//               <li className="tick">
//                 Product discovery and building what matters
//               </li>
//               <li className="tick">
//                 Measuring to ensure that updates are a success
//               </li>
//               <li className="tick">And much more!</li>
//             </ul>
//             <form onSubmit={handleMail}>
//               <label className="email" htmlFor="email">
//                 Email address
//               </label>
//               <input
//                 className="e-mail"
//                 placeholder="email@company.com"
//                 type="email"
//                 id="email"
//                 value={mail}
//                 onChange={(e) => setMail(e.target.value)}
//               />
//               {show === "invalid" && (
//                 <div className="error-message" id="email-error">
//                   Valid email required
//                 </div>
//               )}
//               <button type="submit" className="bt">
//                 Subscribe to monthly newsletter
//               </button>
//             </form>
//           </div>

//           <img className="imgg" src="illustration-sign-up-desktop.svg" alt="" />
//         </header>
//       ) : (
//         <div className="sux">
//           <img className="suxs" src="icon-success.svg" alt="success" />
//           <h1 className="suxex">Thanks for subscribing!</h1>
//           <p className="susex">
//             A confirmation email has been sent to {mail} Please open it and
//             click the button inside to confirm your subscription
//           </p>
//           <button className="dismiss" onClick={handleDismiss}>
//             Dismiss message
//           </button>
//         </div>
//       )}
//     </body>
//   );
// }

// export default App;

import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";

function App() {
  const [mail, setMail] = useState(null);
  const [show, setShow] = useState(null);

  function handleMail(e) {
    e.preventDefault();
    if (mail != null) {
      setShow(true);
    }
  }

  function handleDismiss() {
    setShow(null);
  }

  return (
    <div>
      {show === null ? (
        <header>
          <div className="one">
            <h1>Stay updated!</h1>
            <p>Join 60,000+ product managers receiving monthly updates on:</p>
            <ul className="list">
              <li className="tick">
                Product discovery and building what matters
              </li>
              <li className="tick">
                Measuring to ensure that updates are a success
              </li>
              <li className="tick">And much more!</li>
            </ul>
            <form onSubmit={handleMail}>
              <label className="email" htmlFor="email">
                Email address
              </label>
              <input
                className="e-mail"
                placeholder="email@company.com"
                type="email"
                id="email"
                value={mail}
                onChange={(e) => setMail(e.target.value)}
              />

              <div className="error-message" id="email-error">
                Valid email required
              </div>

              <button type="submit" className="bt">
                Subscribe to monthly newsletter
              </button>
            </form>
          </div>
          <img className="imgg" src="illustration-sign-up-desktop.svg" alt="" />
        </header>
      ) : (
        <div className="sux">
          <img className="suxs" src="icon-success.svg" alt="success" />
          <h1 className="suxex">Thanks for subscribing!</h1>
          <p className="susex">
            A confirmation email has been sent to {mail}. Please open it and
            click the button inside to confirm your subscription.
          </p>
          <button className="dismiss" onClick={handleDismiss}>
            Dismiss message
          </button>
        </div>
      )}
    </div>
  );
}

export default App;

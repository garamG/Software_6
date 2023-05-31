// // import React from "react";

// // function Study() {
// //   return (
// //     <div>
// //       <div className="progress" role="progressbar" aria-label="Success example" aria-valuenow={25} aria-valuemin={0} aria-valuemax={100}>
// //         <div className="progress-bar bg-success" style={{ width: "25%" }}>
// //           25%
// //         </div>
// //       </div>
// //       <div className="wordlist" >
// //         <div className="form-check">
// //           <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
// //           <label className="form-check-label" htmlFor="flexCheckDefault">
// //             외운 단어 표시
// //           </label>
// //         </div>
// //         <div className="card" style={{ width: "15rem", display: "inline-block", marginRight: "10px" }}>
// //           <div className="card-body">
// //             <h5 className="word_name">Complete</h5>
// //             <div class="form-check form-switch">
// //                 <input class="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" />
// //                 <label class="form-check-label" for="flexSwitchCheckDefault">가림막</label>
// //                     </div>
// //             <h6 className="word_meaning mb-2 text-body-secondary">완료하다</h6>
// //           </div>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // }

// // export default Study;


// // import React, { useState } from "react";

// // function Study() {
// //   const [isLabelChecked, setIsLabelChecked] = useState(false);

// //   const handleLabelCheck = () => {
// //     setIsLabelChecked(!isLabelChecked);
// //   };

// //   return (
// //     <div>
// //       <div className="progress" role="progressbar" aria-label="Success example" aria-valuenow={25} aria-valuemin={0} aria-valuemax={100}>
// //         <div className="progress-bar bg-success" style={{ width: "25%" }}>
// //           25%
// //         </div>
// //       </div>
// //       <div className="wordlist">
// //         <div className="form-check">
// //           <input className="form-check-input" type="checkbox" id="flexCheckDefault" />
// //           <label className="form-check-label" htmlFor="flexCheckDefault">
// //             외운 단어 표시
// //           </label>
// //         </div>
// //         <div className="card" style={{ width: "15rem", display: "inline-block", marginRight: "10px" }}>
// //           <div className="card-body">
// //             {isLabelChecked && <div className="label-cover" style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", background: "white" }}></div>}
// //             <div className="word">
// //             <h5 className={`word_name ${isLabelChecked ? "hidden" : ""}`}>Complete</h5>
// //             </div>
// //             <div className="form-check form-switch">
// //               <input className="form-check-input" type="checkbox" value={isLabelChecked} role="switch" id="flexSwitchCheckDefault" onChange={handleLabelCheck} />
// //               <label className="form-check-label" htmlFor="flexSwitchCheckDefault">가림막</label>
// //             </div>
// //             <h6 className="word_meaning mb-2 text-body-secondary">완료하다</h6>
// //           </div>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // }

// // export default Study;


import React, { useState } from "react";

function Study() {
  const [isLabelChecked, setIsLabelChecked] = useState(false);

  const handleLabelCheck = () => {
    setIsLabelChecked(!isLabelChecked);
  };

  return (
    <div>
      <div className="progress" role="progressbar" aria-label="Success example" aria-valuenow={25} aria-valuemin={0} aria-valuemax={100}>
        <div className="progress-bar bg-success" style={{ width: "25%" }}>
          25%
        </div>
      </div>
      <div className="wordlist">
        <div className="form-check">
          <input className="form-check-input" type="checkbox" id="flexCheckDefault" />
          <label className="form-check-label" htmlFor="flexCheckDefault">
            외운 단어 표시
          </label>
        </div>
        <div className="card" style={{ width: "15rem", display: "inline-block", marginRight: "10px" }}>
          <div className="card-body">
            {isLabelChecked && <div className="label-cover" style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", background: "white" }}></div>}
            <h5 className={`word_name ${isLabelChecked ? "hidden" : ""}`}>Complete</h5>
            <div className="form-check form-switch">
              <input className="form-check-input" type="checkbox" value={isLabelChecked} role="switch" id="flexSwitchCheckDefault" onChange={handleLabelCheck} />
              <label className="form-check-label" htmlFor="flexSwitchCheckDefault">가림막</label>
            </div>
            <h6 className="word_meaning mb-2 text-body-secondary">완료하다</h6>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Study;


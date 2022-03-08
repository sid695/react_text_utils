import React, { useState } from "react";

import Alerts from "./component/Alerts";
import Navbar from "./component/Navbar";
import TextForm from "./component/TextForm";
function App() {
  const [mode, setMode] = useState("light"); //state variable which will tell weather dark mode is enable or not
  const [alert, setAlert] = useState(null)
  const showAlert=(message,type)=>{
    // alert shown
setAlert({
  msg:message,
  type:type
})
//  now adding logic to null the  alert after 2 sec
setTimeout(() => {
  setAlert(null)
}, 1500);
  }
  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor='#13274F'
     showAlert("Dark mode is enbled","success")
     document.title="Text-Util:Dark Mode"
    } else {
      setMode("light");
      document.body.style.backgroundColor='white'
   showAlert("Light mode is enbled","success")
   document.title="Text-Util:Light Mode"
    }
  };
  return (
    <div>
      <Navbar
        title="𝐓𝐞𝐱𝐭-𝐔𝐭𝐢𝐥𝐬"
        mode={mode}
        toggleMode={toggleMode}
        aboutus="AboutUs"
        home="Home"
      />
      <Alerts alert={alert}/>
      {/* passing props from parent to child */}
      <div className="container my-3">
       
        <TextForm  showAlert={showAlert} heading="Text-Utils:Word Counter,Character Counter,Remove Extra Spaces" mode={mode}/>
      </div>
    </div>
  );
}

export default App;

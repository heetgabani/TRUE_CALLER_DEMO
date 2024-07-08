import React from 'react';

const App = () => {
  const OTPless = Reflect.get(window, "OTPless");

  const callback = (response) => {
    console.log(response);
  };

  const OTPlessSignin = OTPless ? new OTPless(callback) : null;

  const handleTrueCaller = async () => {
    OTPlessSignin.initiate({
      channel: "OAUTH",
      channelType: "TRUE_CALLER"
    }).then(console.log)
  }
  return (
    <div>
      <button onClick={handleTrueCaller}>Login with Truecaller</button>
    </div>
  );
};

export default App;





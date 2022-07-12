/* Moralis init code */
const serverUrl = "https://znl8aezejcxl.usemoralis.com:2053/server";
const appId = "7DMWCCjG3RlayWi1EGhruO1o03BQgBYCuhs9LUlV";
Moralis.start({ serverUrl, appId });

/* TODO: Add Moralis Authentication code */
/* Moralis init code */
const serverUrl = "https://xxxxx/server";
const appId = "YOUR_APP_ID";
Moralis.start({ serverUrl, appId });

/* Authentication code */
async function login() {
  let user = Moralis.User.current();
  if (!user) {
    user = await Moralis.authenticate({
      signingMessage: "Log in using Moralis",
    })
      .then(function (user) {
        console.log("logged in user:", user);
        console.log(user.get("ethAddress"));
      })
      .catch(function (error) {
        console.log(error);
      });
  }
}

async function logOut() {
  await Moralis.User.logOut();
  console.log("logged out");
}

document.getElementById("btn-login").onclick = login;
document.getElementById("btn-logout").onclick = logOut;
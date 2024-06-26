import GithubQR from "./images/github-qr-code.png";
import clock from "./clock.js";

export default function header() {
  const headerWrapper = document.createElement("div");
  headerWrapper.classList.add("header-wrapper");
  document.body.appendChild(headerWrapper);

  const headerTitle = document.createElement("h1");
  headerTitle.textContent = "DONE";
  headerTitle.classList.add("header-title");
  headerWrapper.appendChild(headerTitle);

  const githubQRCode = document.createElement("img");
  githubQRCode.src = GithubQR;
  githubQRCode.alt = "Github Link";
  githubQRCode.classList.add("github-qr");
  headerWrapper.appendChild(githubQRCode);

  const clockWrapper = document.createElement("div");
  clockWrapper.classList.add("clock");
  clockWrapper.id = "clock";
  headerWrapper.appendChild(clockWrapper);
  clock();

  return headerWrapper;
}

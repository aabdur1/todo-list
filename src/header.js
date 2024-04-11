import GithubQR from "./images/github-qr-code.png";

export default function header() {
  const headerWrapper = document.createElement("div");
  headerWrapper.classList.add("header-wrapper");
  document.body.appendChild(headerWrapper);

  const headerTitle = document.createElement("h1");
  headerTitle.textContent = "DONE";
  headerTitle.classList.add("header-title");
  headerWrapper.appendChild(headerTitle);

  const githubBarcode = document.createElement("p");
  githubBarcode.classList.add("github-barcode");
  githubBarcode.textContent = "https://github.com/aabdur1";
  headerWrapper.appendChild(githubBarcode);

  const githubQRCode = document.createElement("img");
  githubQRCode.src = GithubQR;
  githubQRCode.alt = "Github Link";
  githubQRCode.classList.add("github-qr");
  headerWrapper.appendChild(githubQRCode);
}

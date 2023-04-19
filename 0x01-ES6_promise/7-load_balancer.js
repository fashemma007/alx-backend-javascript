export default function loadBalancer(chinaDownload, USDownload) {
  // Promise.race accepts a list of promises & returns the 1st resolved
  return Promise.race([chinaDownload, USDownload]);
}

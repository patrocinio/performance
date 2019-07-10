let cloudantURL = process.env.CLOUDANT_URL;
if (!cloudantURL) {
  // Default to the QA (System test) environment
  cloudantURL =
    "https://0b93a06e-16ad-460a-908f-9dab92b2775c-bluemix:0fc396f71cf810bca109820704f578ffddbd6838524d03a75e3355df83e25cbd@0b93a06e-16ad-460a-908f-9dab92b2775c-bluemix.cloudant.com";
}
console.log("Cloudant URL: " + cloudantURL);

const Cloudant = require("@cloudant/cloudant");

const colonIdx = cloudantURL.indexOf(":");
const protocolType = cloudantURL.substring(0, colonIdx);
const protocol = require(protocolType);

let customAgent = new protocol.Agent({
  keepAlive: true,
  keepAliveMsecs: 30000,
  maxSockets: 50
});

let cloudantOpts = {
  url: cloudantURL,
  plugin: "promises",
  requestDefaults: {
    agent: customAgent
  }
};

const quoteStuff = require("./postdata"); // Large post body sent as part of quote

const cloudant = Cloudant(cloudantOpts);

const express = require("express");

const bodyParser = require("body-parser");
const app = express();
const jsonParser = bodyParser.json();

// Kube readiness stuff....
app.get("/hre/api/health", function(req, res, next) {
  res.status(200).send("success");
  next();
});

app.get("/hre/api/readiness", function(req, res, next) {
  res.status(200).send("success");
  next();
});

const handleRateRequest = async (req, res, next) => {
  const startTime = Date.now();
  await handleCarAvailability(req, res, next);
  await handleRateRequests(req, res, next);
  await handleIncrementalInformation(req, res, next);
  await handleIncrementalTwo(req, res, next);
  await handlePostQuote(req, res, next);
  const totalTime = Date.now() - startTime;
  console.log("Done with all six calls. Time: " + totalTime + " ms");
  res.status(200).json({ a: "b" });
  return;
};

const generateID = () => {
  const random = Math.round(Math.random() * 1000000000);
  return random.toString();
};

const handlePostQuote = async (req, res, next) => {
  const QuotesDB = cloudant.db.use("quotes");
  let id = generateID();
  try {
    let x = await QuotesDB.insert({ _id: id, rates: quoteStuff.postQuote });
    console.log("Quote done");
  } catch (ee) {
    console.log("Quote error");
  }
};

const handleCarAvailability = async (req, res, next) => {
  let curDb = cloudant.db.use("car_availability");

  try {
    let carAvailRows = await curDb.list({
      keys: ["CA:LAX:ZR:LAX", "CA:LAX:ZR:*"],
      stale: "ok",
      sorted: false,
      include_docs: true
    });
    console.log("Car availability done");
  } catch (err) {
    console.log("Car availability error");
  }
};

const handleIncrementalInformation = async (req, res, next) => {
  let curDb = cloudant.db.use("incremental_information");

  try {
    const dbResultSet = await curDb.view(
      "incrementalInformationDesignDocument",
      "incrementalInformation",
      {
        key: "LAX:ZR",
        stale: "ok",
        include_docs: true,
        sorted: false
      }
    );
    console.log("Incremental Information - view - done");
  } catch (err) {
    console.log("Incremental Information - view - error");
  }
};

const handleIncrementalTwo = async (req, res, next) => {
  let curDb = cloudant.db.use("incremental_information");

  try {
    let iiRows = await curDb.list({
      keys: [
        "TXR:LAX:ZR:VLF",
        "TXR:LAX:ZR:APCONRGFEE",
        "TXR:LAX:ZR:CFC1",
        "TXR:LAX:ZR:TOURSM SRG",
        "TXR:LAX:ZR:STATE TAX"
      ],
      sorted: false,
      include_docs: true
    });
    console.log("Incremental Information - list - done");
  } catch (err) {
    console.log("Incremental Information - list - error");
  }
};

const handleRateRequests = async (req, res, next) => {
  let curDb = cloudant.db.use("rates_x7");
  let allCalls = [];

  let curCall = curDb
    .view("shopRatesDesignDoc", "shopRatesByGdsAndPlanCode", {
      key: "LAX:LAX:ZR:2019-10-05:S:E",
      include_docs: false,
      sorted: false,
      stale: "ok"
    })
    .then(result => {
      return result;
    })
    .catch(err => {
      logger.error("Error retrieving rates - exception thrown");
    });

  allCalls.push(curCall);

  curCall = curDb
    .view("shopRatesDesignDoc", "shopRatesByGdsAndPlanCode", {
      key: "LAX:LAX:ZR:2019-10-05:S:D",
      include_docs: false,
      sorted: false,
      stale: "ok"
    })
    .then(result => {
      return result;
    })
    .catch(err => {
      logger.error("Error retrieving rates - exception thrown");
    });

  allCalls.push(curCall);

  try {
    const resp = await Promise.all(allCalls);
    console.log("Rates done");
  } catch (err) {
    console.log("Rates error");
  }
};

app.post("/hre/api/rates", jsonParser, handleRateRequest);

app.listen(9080, function() {
  console.log("HRE listening on port " + 9080);
});

module.exports = {
  app
};

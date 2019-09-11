let cloudantURL = process.env.CLOUDANT_URL;
if (!cloudantURL) {
  // Default to the QA (System test) environment
  console.log(
    "No Cloudant URL defined: please use: export CLOUDANT_URL=http://myserver/"
  );
  return;
}
console.log("Cloudant URL: " + cloudantURL);

const Cloudant = require("@cloudant/cloudant");

const colonIdx = cloudantURL.indexOf(":");
const protocolType = cloudantURL.substring(0, colonIdx);
const protocol = require(protocolType);

const chunkSize = 100;
const RA_KEYS = [
  "ATL:ZR:2019-11-07:RCUD1:D:CCAR",
  "ATL:ZR:2019-11-07:RCUD1:D:ACAR",
  "ATL:ZR:2019-11-07:RXHD1:D:CCAR",
  "ATL:ZR:2019-11-07:RXHD1:D:ACAR",
  "ATL:ZR:2019-11-07:RCUD1:D:CDAR",
  "ATL:ZR:2019-11-07:RXHD1:D:CDAR",
  "ATL:ZR:2019-11-07:RCUD1:D:ECAR",
  "ATL:ZR:2019-11-07:RXHD1:D:ECAR",
  "ATL:ZR:2019-11-07:RCUD1:D:EDAR",
  "ATL:ZR:2019-11-07:RXHD1:D:EDAR",
  "ATL:ZR:2019-11-07:RCUD1:D:FCAR",
  "ATL:ZR:2019-11-07:RXHD1:D:FCAR",
  "ATL:ZR:2019-11-07:RCUD1:D:FDAR",
  "ATL:ZR:2019-11-07:RXHD1:D:FDAR",
  "ATL:ZR:2019-11-07:RCUD1:D:FFAR",
  "ATL:ZR:2019-11-07:RXHD1:D:FFAR",
  "ATL:ZR:2019-11-07:RCUD1:D:ICAR",
  "ATL:ZR:2019-11-07:RXHD1:D:ICAR",
  "ATL:ZR:2019-11-07:RCUD1:D:IDAR",
  "ATL:ZR:2019-11-07:RXHD1:D:IDAR",
  "ATL:ZR:2019-11-07:RCUD1:D:IFAR",
  "ATL:ZR:2019-11-07:RXHD1:D:IFAR",
  "ATL:ZR:2019-11-07:RCUD1:D:IPAR",
  "ATL:ZR:2019-11-07:RXHD1:D:IPAR",
  "ATL:ZR:2019-11-07:RCUD1:D:IVAR",
  "ATL:ZR:2019-11-07:RXHD1:D:IVAR",
  "ATL:ZR:2019-11-07:ROWD1:D:JFAR",
  "ATL:ZR:2019-11-07:ROWD1:D:ACAR",
  "ATL:ZR:2019-11-07:RCUD1:D:LCAR",
  "ATL:ZR:2019-11-07:RXHD1:D:LCAR",
  "ATL:ZR:2019-11-07:RCUD1:D:LDAR",
  "ATL:ZR:2019-11-07:RXHD1:D:LDAR",
  "ATL:ZR:2019-11-07:ROWD1:D:LSAR",
  "ATL:ZR:2019-11-07:RCUD1:D:MVAR",
  "ATL:ZR:2019-11-07:RXHD1:D:MVAR",
  "ATL:ZR:2019-11-07:RCUD1:D:PCAR",
  "ATL:ZR:2019-11-07:RXHD1:D:PCAR",
  "ATL:ZR:2019-11-07:RCUD1:D:PDAR",
  "ATL:ZR:2019-11-07:RXHD1:D:PDAR",
  "ATL:ZR:2019-11-07:RCUD1:D:PFAR",
  "ATL:ZR:2019-11-07:RXHD1:D:PFAR",
  "ATL:ZR:2019-11-07:RCUD1:D:SCAR",
  "ATL:ZR:2019-11-07:RXHD1:D:SCAR",
  "ATL:ZR:2019-11-07:RCUD1:D:SDAR",
  "ATL:ZR:2019-11-07:RXHD1:D:SDAR",
  "ATL:ZR:2019-11-07:RCUD1:D:SFAR",
  "ATL:ZR:2019-11-07:RXHD1:D:SFAR",
  "ATL:ZR:2019-11-07:RCUD1:D:SPAR",
  "ATL:ZR:2019-11-07:RXHD1:D:SPAR",
  "ATL:ZR:2019-11-07:RCUD1:D:STAR",
  "ATL:ZR:2019-11-07:RXHD1:D:STAR",
  "ATL:ZR:2019-11-07:RCUD1:D:XXAR",
  "ATL:ZR:2019-11-07:RXHD1:D:XXAR"
];

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

// Take up some memory
let myItems = {};

const takeUpCpuAndMemory = () => {
  const startTime = Date.now();
  myItems = {};
  for (let x = 0; x < 180000; x++) {
    myItems["" + x] = generateID();
  }
  const totalTime = Date.now() - startTime;
  console.log("Took up " + totalTime + " ms of CPU");
};

const handleRateRequest = async (req, res, next) => {
  const startTime = Date.now();
  await handleRatesAvailability(RA_KEYS);

  // await handleCarAvailability(req, res, next);
  // takeUpCpuAndMemory();
  // await handleRateRequests(req, res, next);
  // takeUpCpuAndMemory();
  // await handleIncrementalInformation(req, res, next);
  // takeUpCpuAndMemory();
  // await handleIncrementalTwo(req, res, next);
  // takeUpCpuAndMemory();
  // await handlePostQuote(req, res, next);
  const totalTime = Date.now() - startTime;
  console.log(
    "Done with all rate availability calls. Time: " + totalTime + " ms"
  );
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

const handleRatesAvailability = async rateAvailKeys => {
  let ratesAvailDB = cloudant.db.use("rates_availability");
  let promises = [];
  for (let i = 0; i < rateAvailKeys.length; i += chunkSize) {
    //    console.log(rateAvailKeys.slice(i, Math.min(i + chunkSize, rateAvailKeys.length)));
    const promise = ratesAvailDB
      .list({
        keys: rateAvailKeys.slice(
          i,
          Math.min(i + chunkSize, rateAvailKeys.length)
        ),
        include_docs: true,
        sorted: false
      })
      .then(result => {
        return result.rows.reduce((map, row) => {
          return row.doc
            ? Object.assign(map, {
                [row.id]: row.doc
              })
            : map;
        }, {});
      })
      .catch(error => {
        logger.error(
          "rate availability view call by car type failure\n",
          error
        );
      });

    promises.push(promise);
  }
  let availabilityData = await Promise.all(promises);
  let validRateAvailabilities = {};
  for (let i = 0; i < availabilityData.length; i++) {
    let availabilities = availabilityData[i];
    validRateAvailabilities = Object.assign(
      validRateAvailabilities,
      availabilities
    );
  }
  return validRateAvailabilities;
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

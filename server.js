let cloudantURL = process.env.CLOUDANT_URL;
if (!cloudantURL) {
  cloudantURL = "<put cloudant url here>";
  // Default to the QA (System test) environment
  console.log(
    "No Cloudant URL defined: please use: export CLOUDANT_URL=http://myserver/ or edit server.js"
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
  let responseDoc = {};
  const webRequest = req.body;
  const itemsToRun = webRequest.itemsToRun;
  if (!itemsToRun) {
    res
      .status(500)
      .json({ err: "Please specify an itemsToRun array in the body" });
  }
  const startTime = Date.now();
  let midTime = startTime;

  if (itemsToRun.includes("RATE_REQUEST")) {
    await handleRateRequests(req, res, next);
    const interimTotal = Date.now() - midTime;
    midTime = Date.now();
    if (itemsToRun.includes("LOG_EVERYTHING")) {
      responseDoc["RATE_REQUEST"] = interimTotal + "ms";
    }
    if (itemsToRun.includes("USE_CPU_AND_MEMORY")) {
      takeUpCpuAndMemory();
    }
  }

  if (itemsToRun.includes("RATES_AVAILABILITY")) {
    await handleRatesAvailability(RA_KEYS);
    const interimTotal = Date.now() - midTime;
    midTime = Date.now();
    if (itemsToRun.includes("LOG_EVERYTHING")) {
      responseDoc["RATES_AVAILABILITY"] = interimTotal + "ms";
    }
    if (itemsToRun.includes("USE_CPU_AND_MEMORY")) {
      takeUpCpuAndMemory();
    }
  }

  if (itemsToRun.includes("CAR_AVAILABILITY")) {
    await handleCarAvailability();
    const interimTotal = Date.now() - midTime;
    midTime = Date.now();
    if (itemsToRun.includes("LOG_EVERYTHING")) {
      responseDoc["CAR_AVAILABILITY"] = interimTotal + "ms";
    }
    if (itemsToRun.includes("USE_CPU_AND_MEMORY")) {
      takeUpCpuAndMemory();
    }
  }

  // takeUpCpuAndMemory();
  if (itemsToRun.includes("INCREMENTAL_INFORMATION")) {
    await handleIncrementalInformation(req, res, next);
    const interimTotal = Date.now() - midTime;
    midTime = Date.now();
    if (itemsToRun.includes("LOG_EVERYTHING")) {
      responseDoc["INCREMENTAL_INFORMATION"] = interimTotal + "ms";
    }
    if (itemsToRun.includes("USE_CPU_AND_MEMORY")) {
      takeUpCpuAndMemory();
    }
  }

  if (itemsToRun.includes("POST_QUOTE")) {
    await handleIncrementalInformation(req, res, next);
    const interimTotal = Date.now() - midTime;
    midTime = Date.now();
    if (itemsToRun.includes("LOG_EVERYTHING")) {
      responseDoc["POST_QUOTE"] = interimTotal + "ms";
    }
    if (itemsToRun.includes("USE_CPU_AND_MEMORY")) {
      takeUpCpuAndMemory();
    }
  }

  responseDoc["USE_CPU_AND_MEMORY"] = itemsToRun.includes("USE_CPU_AND_MEMORY");

  const totalTime = Date.now() - startTime;
  console.log(totalTime);
  responseDoc["TOTAL"] = totalTime + "ms";
  res.status(200).json(responseDoc);
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
        console.log("rate availability view call by car type failure\n", error);
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

const handleCarAvailability = async () => {
  let curDb = cloudant.db.use("car_availability");

  try {
    let carAvailRows = await curDb.list({
      keys: ["CA:ATL:ZE:ATL", "CA:ATL:ZE:*"],
      stale: "ok",
      sorted: false,
      include_docs: true
    });
  } catch (err) {
    console.log("Car availability error: " + JSON.stringify(err));
  }
};

const handleIncrementalInformation = async (req, res, next) => {
  let incrementalInformationDb = cloudant.db.use("incremental_information");

  try {
    const incrementalKey = "ATL:ZE";
    const dbResultSet = await incrementalInformationDb.view(
      "incrementalInformationDesignDocument",
      "incrementalInformationAndTaxableRates",
      {
        key: incrementalKey,
        stale: "ok",
        include_docs: true,
        sorted: false
      }
    );

    const txrDocuments = [];
    const filteredForICI = dbResultSet.rows.filter(ele => {
      if (ele.doc.Type === "TXR") {
        txrDocuments.push(ele.doc);
        return false;
      } else if (ele.doc.Type === "ICI") {
        return true;
      }
    });
    //cfm.setField('txrDocuments', txrDocuments);

    return filteredForICI.map(doc => doc.doc);
  } catch (error) {
    if (error.error == "not_found") {
      let msg = "no incremental rates found";
      console.log(msg);
    } else {
      let msg = "error retrieving incremental rates";
      console.log(msg);
    }
  }
  return null;
};

const handleRateRequests = async (req, res, next) => {
  let keyMap = { "ATL~ATL~ZE~2019-11-07": ["S~D", "S~H", "S~B", "S~A", "S~E"] };

  let curRatesDb = cloudant.db.use("rates_2020_12");

  let allCalls = [];

  for (let [partitionKey, documentKeys] of Object.entries(keyMap)) {
    for (let i = 0; i < documentKeys.length; i += chunkSize) {
      const chunkKeys = documentKeys.slice(
        i,
        Math.min(i + chunkSize, documentKeys.length)
      );
      let curCall = curRatesDb
        .partitionedView(
          encodeURIComponent(partitionKey),
          "shopRatesDesignDoc",
          "shopRatesByGdsAndPlanCode",
          {
            keys: chunkKeys,
            include_docs: false
          }
        )
        .then(result => {
          return result;
        })
        .catch(err => {
          console.log(
            "Error retrieving rates - exception thrown: " + JSON.stringify(err)
          );
        });
      allCalls.push(curCall);
    }
  }
  const resp = await Promise.all(allCalls);

  return resp;
};

app.post("/hre/api/rates", jsonParser, handleRateRequest);

app.listen(9080, function() {
  console.log("HRE listening on port " + 9080);
});

module.exports = {
  app
};

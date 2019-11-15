let cloudantURL = process.env.CLOUDANT_URL;
let portNumber = process.env.PORT_NUMBER;

if (!cloudantURL) {
  cloudantURL = "";
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

let customAgent = new protocol.Agent({
  keepAlive: true,
  keepAliveMsecs: 30000,
  maxSockets: 50
});

const timerPlugin = require('./node_modules/@cloudant/cloudant/plugins/timer.js')

let cloudantOpts = {
  url: cloudantURL,
  plugin: "promises",
  plugins: [timerPlugin],
  requestDefaults: {
    agent: customAgent,
    time: true
  }
};

const quoteStuff = require("./postdata"); // Large post body sent as part of quote

const cloudant = Cloudant(cloudantOpts);

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

const constructBaseRAList = () => {
  const rateCodes = ['AP1L', 'ADPL', 'VRCNW', 'APNL9', 'AUAWU', 'AJPFW9', 'AUAWNL', 'AKLIW9', 'APFID', 'AKND', 'AUADAU', 'AKLIWS', 'AKLDD', 'ADFD', 'ALCD', 'AUAWN9', 'AUAWBE', 'VRCNAW', 'AUA9AU', 'AUADSW', 'ADPMXW', 'AJPFW', 'VW7AUS', 'AUAWE', 'AKLED', 'AUAWG', 'AMMD', 'ALNES', 'AKLDWS', 'AUADU', 'VRCNAD', 'APDLS', 'APWLSS', 'AUADBE', 'AUADSZ', 'ADFW9', 'AAPCD', 'ALCEW', 'APFIW', 'ADFW', 'ALNE', 'AUAWG9', 'AUADF', 'AUASAU', 'AKLDW', 'AKLEWS', 'APWLS', 'AUAWF', 'AWPL9', 'ADPMXD', 'AUAWGS', 'AUASW9', 'APFIW9', 'AUASZS', 'AJI7S', 'AUAWF9', 'AJI7', 'AKNW9', 'ADFMXW', 'ADFBXW', 'ALNE9', 'VRCND', 'ALAD', 'ADFWS', 'APFIWS', 'AUASWS', 'AUAWES', 'ALDE', 'AUADE', 'ALCW', 'AUAWAU', 'AUASZ9', 'AJPFWS', 'AUAWE9', 'AKLID', 'AKLIW', 'ADPBXD', 'AUAWSW', 'APWLS9', 'AAPCW', 'AKLEW9', 'ACMED', 'AUAWFS', 'ACMP', 'APNL', 'AUAWU9', 'AWPL', 'AKLEW', 'ALAW', 'AUAWSZ', 'APNLS', 'AUAWNS', 'AJI79', 'VRCNCD', 'VRCNCW', 'ADFMXD', 'AJID', 'AKLDW9', 'ADFBXD', 'AJCLW', 'AJCLD', 'AUAWUS', 'AUADG', 'AUADNL', 'ADPBXW', 'AWPLS', 'AJPFD', 'AKNW', 'AKNWS', 'ALCED'];
  const planCodes = ['D', 'W', 'M', 'E'];

  // "LAX:ZE:2019-11-07:<rate_code>:D:CCAR"
  let rateAvailKeys = []
  for (let i = 0; i < rateCodes.length; i += 1) {
    for (let j = 0; j < planCodes.length; j += 1) {
      rateAvailKeys.push(rateCodes[i] + ":" + planCodes[j] + ":" + "ACAR")
    }
  }
  return rateAvailKeys
}

const DYNAMIC_RA_KEYS = constructBaseRAList();

const express = require("express");

const bodyParser = require("body-parser");
const app = express();
const jsonParser = bodyParser.json();

let ramEater = {};

function rando(len) {
  const vals = "abcdefghijklmnopqrstuvwxyz1234567890ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  let resp = "";
  for (let x = 0; x < len; x++) {
    resp = resp + vals.charAt(Math.floor(Math.random() * vals.length));
  }
  return resp;
}

// Kube readiness stuff....
app.get("/hre/api/eatRAM", function(req, res, next) {
  const ramAmount = req.query.amount;
  if (!ramAmount) {
    res.status(500).send("Please specify an amount (in MB) of RAM to use");
  } else if (ramAmount == -1) {
    // Clear the ram eater
    ramEater = {};
    res.status(200).send("success clearing the RAM eater");
  } else {
    for (let x = 0; x < ramAmount; x++) {
      for (let y = 0; y < 1024; y++) {
        randoKey = rando(24);
        randoVal = rando(1000);
        ramEater[randoKey] = randoVal;
      }
    }
    res
      .status(200)
      .send(
        "success populating the RAM eater. Total keys: " +
          Object.keys(ramEater).length
      );
  }
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

  console.log ("Items to run: " + JSON.stringify(itemsToRun));
  if (!itemsToRun) {
    res
      .status(500)
      .json({ err: "Please specify an itemsToRun array in the body" });
  }
  const startTime = Date.now();
  let midTime = startTime;

  if (itemsToRun.includes("RATE_REQUEST_ORLN")) {
    await handleOrlnRateRequest();
    const interimTotal = Date.now() - midTime;
    if (itemsToRun.includes("LOG_EVERYTHING")) {
      responseDoc["RATE_REQUEST_ORLN"] = interimTotal + "ms";
    }
    if (itemsToRun.includes("USE_CPU_AND_MEMORY")) {
      midTime = Date.now();
      takeUpCpuAndMemory();
      const cmTotal = Date.now() - midTime;
      responseDoc["RATE_REQUEST_ORLN_GAP"] = cmTotal + "ms";
    }
    midTime = Date.now();
  }

  if (itemsToRun.includes("RATE_REQUEST_ATL")) {
    await handleAtlRateRequest();
    const interimTotal = Date.now() - midTime;
    if (itemsToRun.includes("LOG_EVERYTHING")) {
      responseDoc["RATE_REQUEST_ATL"] = interimTotal + "ms";
    }
    if (itemsToRun.includes("USE_CPU_AND_MEMORY")) {
      midTime = Date.now();
      takeUpCpuAndMemory();
      const cmTotal = Date.now() - midTime;
      responseDoc["RATE_REQUEST_ATL_GAP"] = cmTotal + "ms";
    }
    midTime = Date.now();
  }

  if (itemsToRun.includes("RATES_AVAILABILITY")) {
    await handleRatesAvailability(RA_KEYS);
    const interimTotal = Date.now() - midTime;
    if (itemsToRun.includes("LOG_EVERYTHING")) {
      responseDoc["RATES_AVAILABILITY"] = interimTotal + "ms";
    }
    if (itemsToRun.includes("USE_CPU_AND_MEMORY")) {
      midTime = Date.now();
      takeUpCpuAndMemory();
      const cmTotal = Date.now() - midTime;
      responseDoc["RATES_AVAILABILITY_GAP"] = cmTotal + "ms";
    }
    midTime = Date.now();
  }

  if (itemsToRun.includes("CAR_AVAILABILITY")) {
    await handleCarAvailability();
    const interimTotal = Date.now() - midTime;
    if (itemsToRun.includes("LOG_EVERYTHING")) {
      responseDoc["CAR_AVAILABILITY"] = interimTotal + "ms";
    }
    if (itemsToRun.includes("USE_CPU_AND_MEMORY")) {
      midTime = Date.now();
      takeUpCpuAndMemory();
      const cmTotal = Date.now() - midTime;
      responseDoc["CAR_AVAILABILITY_GAP"] = cmTotal + "ms";
    }
    midTime = Date.now();
  }

  // takeUpCpuAndMemory();
  if (itemsToRun.includes("INCREMENTAL_INFORMATION")) {
    await handleIncrementalInformation(req, res, next);
    const interimTotal = Date.now() - midTime;
    if (itemsToRun.includes("LOG_EVERYTHING")) {
      responseDoc["INCREMENTAL_INFORMATION"] = interimTotal + "ms";
    }
    if (itemsToRun.includes("USE_CPU_AND_MEMORY")) {
      midTime = Date.now();
      takeUpCpuAndMemory();
      const cmTotal = Date.now() - midTime;
      responseDoc["INCREMENTAL_INFORMATION_GAP"] = cmTotal + "ms";
    }
    midTime = Date.now();
  }

  if (itemsToRun.includes("POST_QUOTE")) {
    await handleIncrementalInformation(req, res, next);
    const interimTotal = Date.now() - midTime;
    if (itemsToRun.includes("LOG_EVERYTHING")) {
      responseDoc["POST_QUOTE"] = interimTotal + "ms";
    }
    if (itemsToRun.includes("USE_CPU_AND_MEMORY")) {
      midTime = Date.now();
      takeUpCpuAndMemory();
      const cmTotal = Date.now() - midTime;
      responseDoc["POST_QUOTE_GAP"] = cmTotal + "ms";
    }
    midTime = Date.now();
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

const handleDynamicRateAvailability = async(keyMap) => {
  // ["LAS","LAS","ZE","2019_11_06"]
  keyMapList = Object.keys(keyMap)[0].split('~')

  // "LAX:ZE:2019-11-07:<rate_code>:D:CCAR"
  //let rateAvailKeys = []
  //for (let i = 0; i < rateCodes.length; i += 1) {
  //  for (let j = 0; j < planCodes.length; j += 1) {
  //    rateAvailKeys.push(keyMapList[0] + ":" + keyMapList[2] + ":" + keyMapList[3] + ":" + rateCodes[i] + ":" + planCodes[j] + ":" + "ACAR")
  //  }
  //}

  let ratesAvailDB = cloudant.db.use("rates_availability");
  let promises = [];

  // DYNAMIC_RA_KEYS
  for (let i = 0; i < DYNAMIC_RA_KEYS.length; i += chunkSize) {
    //let current_list = DYNAMIC_RA_KEYS.slice(i, Math.min(i + chunkSize, DYNAMIC_RA_KEYS.length))
    const promise = ratesAvailDB
      .list({
        //let emails = people.map(({ email }) => email);
        //keys: [for (x of current_list) keyMapList[0] + ":" + keyMapList[2] + ":" + keyMapList[3] + ":" + x],
        keys: DYNAMIC_RA_KEYS.slice(i, Math.min(i + chunkSize, DYNAMIC_RA_KEYS.length)).map(({ base }) => keyMapList[0] + ":" + keyMapList[2] + ":" + keyMapList[3] + ":" + base),
        incude_docs: true,
        sorted: false,
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

  //for (let i = 0; i < rateAvailKeys.length; i += chunkSize) {
  //    console.log(rateAvailKeys.slice(i, Math.min(i + chunkSize, rateAvailKeys.length)));
  //  const promise = ratesAvailDB
  //    .list({
  //      keys: rateAvailKeys.slice(
  //        i,
  //        Math.min(i + chunkSize, rateAvailKeys.length)
  //      ),
  //      include_docs: true,
  //      sorted: false
  //    })
  //    .then(result => {
  //      return result.rows.reduce((map, row) => {
  //        return row.doc
  //          ? Object.assign(map, {
  //              [row.id]: row.doc
  //            })
  //          : map;
  //      }, {});
  //    })
  //    .catch(error => {
  //      console.log("rate availability view call by car type failure\n", error);
  //    });

  //  promises.push(promise);
  //}
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
}

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

const handleAtlRateRequest = async () => {
  let keyMap = {
    "ATL~ATL~ZE~2019-11-02": [
      "S~D",
      "S~H",
      "S~B",
      "S~S",
      "S~W",
      "S~A",
      "S~E",
      "S~Q"
    ]
  };
  return handleRateRequests(keyMap);
};

const handleOrlnRateRequest = async () => {
  let keyMap = {
    "ORLN18~ORLN18~ZE~2019-11-07": ["S~D", "S~H", "S~B", "S~A", "S~E"]
  };
  return handleRateRequests(keyMap);
};

const handleRateRequests = async (db, keyMap) => {
  //  let keyMap = { "ATL~ATL~ZE~2019-11-07": ["S~D", "S~H", "S~B", "S~A", "S~E"] };
  let curRatesDb = cloudant.db.use(db);

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

const http = require("request");

const handleWelcomeRequest = async (req, res, next) => {
  console.log ("Sending welcome request...");
  http.get({
    hostname: 'https://rates-perf-006.cloudant.com',
    agent: false  // Create a new agent just for this one request
  }, function(res) {
    console.log ("Result: " + res)
  });
  res.status(200).send("success");
  return;
}

const handleSingleRateRequest = async (req, res, next) => {
  let responseDoc = {};
  const webRequest = req.body;

//  console.log ("Web Request: " + webRequest);

  const keyMap = webRequest.keyMap;
  if (!keyMap) {
    res
      .status(500)
      .json({ err: "Please specify a keyMap in the body" });
  }

  const db = webRequest.db;

  const startTime = Date.now();

  //console.log ("keyMap: " + JSON.stringify(keyMap))
  //console.log ("db: " + db)

  await handleRateRequests(db, keyMap);
  //  handleDynamicRateAvailability(keyMap);

  const totalTime = Date.now() - startTime;
  console.log("RateRequest time: " + totalTime +  " ms");

  responseDoc["TOTAL"] = totalTime + " ms";
  res.status(200).json(responseDoc);
  return;
};

const handleRateAvailabilityRequest = async (req, res, next) => {
  let responseDoc = {};
  const webRequest = req.body;

//  console.log ("Web Request: " + webRequest);

  const keyMap = webRequest.keyMap;
  if (!keyMap) {
    res
      .status(500)
      .json({ err: "Please specify a keyMap in the body" });
  }

  const startTime = Date.now();

  await handleDynamicRateAvailability(keyMap);

  const totalTime = Date.now() - startTime;
  console.log("RateAvailability time: " + totalTime +  " ms");

  responseDoc["TOTAL"] = totalTime + " ms";
  res.status(200).json(responseDoc);
  return;
};




app.post("/hre/api/rates", jsonParser, handleRateRequest);
app.post("/hre/api/single-rate", jsonParser, handleSingleRateRequest);
app.post("/hre/api/rate-availability", jsonParser, handleRateAvailabilityRequest);

app.get("/mini/api/welcome", handleWelcomeRequest);

console.log ("Port: " + portNumber)

app.listen(portNumber, function() {
  console.log("HRE listening on port " + portNumber);
});

module.exports = {
  app
};

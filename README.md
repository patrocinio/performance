# performance

A performance test repo

Endpoint: /hre/api/rates

Method: POST

Sample payload:

```
{
	"itemsToRun": [
		"RATE_REQUEST",
		"RATES_AVAILABILITY",
		"CAR_AVAILABILITY",
		"INCREMENTAL_INFORMATION",
		"POST_QUOTE",
		"LOG_EVERYTHING",
		"USE_CPU_AND_MEMORY"
	]
}
```

The first five parametered specify whether or not to run the associated Cloudant call. (If they're present, they run. If not, they don't.)

`LOG_EVERYTHING` determines what comes back in the response. (If present, then each individual time is returned in the response)
`USE_CPU_AND_MEMORY` uses up time and memory capacity between calls. This is meant to simulate CPU processing within the application.

To chew up the CPU, use the following:

Endpoint: /hre/api/eatRAM

Query parameter: `amount` - this is the amount of RAM to eat. Setting it to -1 will clear all ram eaten. Otherwise, it will add about 20MB per number. (Give or take - it's not very accurate).

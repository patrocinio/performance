const postQuote = {
  _id: "481456543",
  _rev: "1-9178abcd1186399d7c07c72838726180",
  rates: {
    OTA_VehAvailRateRS: {
      Success: {},
      correlationID: "a98sdf974sa56fdfa98",
      primaryLangID: "",
      warnings: {
        warning: []
      },
      vehAvailRSCore: {
        vehRentalCore: {
          pickUpLocation: [
            {
              locationCode: "LAX",
              extendedLocationCode: "LAX"
            }
          ],
          returnLocation: {
            locationCode: "LAX",
            extendedLocationCode: "LAX"
          },
          pickUpDateTime: "2019-10-05T13:30:00",
          returnDateTime: "2019-10-08T15:00:00",
          oneWayIndicator: false
        },
        vehVendorAvails: {
          vehVendorAvail: [
            {
              vendor: {
                companyShortName: "ZR",
                code: "ZR"
              },
              vehAvails: {
                vehAvail: [
                  {
                    vehAvailCore: {
                      pricedEquips: {
                        pricedEquip: []
                      },
                      vehicle: {
                        vehType: {
                          doorCount: "2"
                        },
                        code: "CCAR",
                        codeContext: "SIPP",
                        passengerQuantity: "5",
                        vehMakeModel: {
                          name: "NISSAN VERSA"
                        }
                      },
                      rentalRate: [
                        {
                          rateDistance: [
                            {
                              unlimited: true,
                              quantity: 0,
                              distUnitName: "MILE",
                              vehiclePeriodUnitName: "Day"
                            },
                            {
                              unlimited: true,
                              quantity: 0,
                              distUnitName: "MILE",
                              vehiclePeriodUnitName: "ExtraDay"
                            },
                            {
                              unlimited: true,
                              quantity: 0,
                              distUnitName: "MILE",
                              vehiclePeriodUnitName: "ExtraHour"
                            }
                          ],
                          rateQualifier: {
                            rateCategory: "S",
                            corpDiscountNmbr: "",
                            arriveByFlight: false,
                            guaranteedInd: true,
                            promotionCode: "",
                            rateQualifier: "BEDD3",
                            ratePeriod: "Daily",
                            rateAuthorizationCode: "N",
                            travelPurpose: "",
                            rateComments: {
                              rateComment: [
                                {
                                  name: "CommissionPercentage",
                                  value: "0"
                                },
                                {
                                  name: "CommissionAmount",
                                  value: "0"
                                },
                                {
                                  name: "GuaranteeNumberOfDays",
                                  value: "364"
                                },
                                {
                                  name: "GracePeriodNumberOfMinutes",
                                  value: "0"
                                },
                                {
                                  name: "ChargeForGracePeriodFlag",
                                  value: "N"
                                },
                                {
                                  name: "TotalDaysCharged",
                                  value: "3"
                                },
                                {
                                  name: "TotalExtraHours",
                                  value: "2"
                                },
                                {
                                  name: "MinimumAdvanceDays",
                                  value: "0"
                                },
                                {
                                  name: "MinimumAdvanceHours",
                                  value: "0"
                                }
                              ]
                            }
                          },
                          vehicleCharges: {
                            vehicleCharge: [
                              {
                                description: "TIME",
                                purpose: "D",
                                requiredInd: true,
                                includedInRate: true,
                                calculation: [
                                  {
                                    unitCharge: 2100,
                                    percentage: 0,
                                    quantity: 3,
                                    unitName: "Day"
                                  }
                                ],
                                amount: 6300,
                                taxInclusive: false,
                                prepayFlag: "N",
                                otaValue: 83,
                                rateType: "R",
                                internalCalculationMethod: "D",
                                outOfVoucherRate: 0
                              },
                              {
                                description: "TIME",
                                purpose: "X",
                                requiredInd: true,
                                includedInRate: true,
                                calculation: [
                                  {
                                    unitCharge: 1500,
                                    percentage: 0,
                                    quantity: 0,
                                    unitName: "ExtraDay"
                                  }
                                ],
                                amount: 0,
                                taxInclusive: false,
                                prepayFlag: "N",
                                otaValue: 10,
                                rateType: "R",
                                internalCalculationMethod: "X",
                                outOfVoucherRate: 0
                              },
                              {
                                description: "TIME",
                                purpose: "R",
                                requiredInd: true,
                                includedInRate: true,
                                calculation: [
                                  {
                                    unitCharge: 357,
                                    percentage: 0,
                                    quantity: 2,
                                    unitName: "ExtraHour"
                                  }
                                ],
                                amount: 714,
                                taxInclusive: false,
                                prepayFlag: "N",
                                otaValue: 11,
                                rateType: "R",
                                internalCalculationMethod: "R",
                                outOfVoucherRate: 0
                              }
                            ]
                          },
                          rateRestrictions: {
                            minimumAge: 18,
                            guaranteeReqInd: true,
                            cancellationPenaltyInd: false
                          },
                          totalCharge: [
                            {
                              rateTotalAmount: 7014,
                              estimatedTotalAmount: 12752,
                              currencyCode: "USD",
                              decimalPlaces: 2,
                              rateConvertInd: false
                            }
                          ]
                        }
                      ],
                      fees: {
                        fee: [
                          {
                            purpose: "VLF",
                            description: "VEHICLE LICENSE FEE",
                            calculation: [
                              {
                                unitName: "Day",
                                unitCharge: 92,
                                percentage: 0,
                                quantity: 4
                              }
                            ],
                            requiredInd: true,
                            includedInRate: false,
                            amount: 368,
                            taxInclusive: false,
                            prepayFlag: "N",
                            otaValue: 0,
                            rateType: "F",
                            overrideCode: "C",
                            urlAddress: "",
                            taxExemptFlag: "N",
                            taxExemptNumber: 0,
                            tierNumber: 1
                          },
                          {
                            purpose: "APCONRGFEE",
                            description: "APT CONC RECOV FEE",
                            calculation: [
                              {
                                unitName: "RentalPeriod",
                                unitCharge: 0,
                                percentage: 11.11,
                                quantity: 1
                              }
                            ],
                            requiredInd: true,
                            includedInRate: false,
                            amount: 820,
                            taxInclusive: false,
                            prepayFlag: "N",
                            otaValue: 0,
                            rateType: "F",
                            overrideCode: "C",
                            urlAddress: "",
                            taxExemptFlag: "N",
                            taxExemptNumber: 0,
                            tierNumber: 1
                          },
                          {
                            purpose: "CFC1",
                            description: "CUST FACILITY CHRG",
                            calculation: [
                              {
                                unitName: "Day",
                                unitCharge: 750,
                                percentage: 0,
                                quantity: 4
                              }
                            ],
                            requiredInd: true,
                            includedInRate: false,
                            amount: 3000,
                            taxInclusive: false,
                            prepayFlag: "N",
                            otaValue: 0,
                            rateType: "F",
                            overrideCode: "C",
                            urlAddress: "",
                            taxExemptFlag: "N",
                            taxExemptNumber: 0,
                            tierNumber: 1
                          },
                          {
                            purpose: "TOURSM SRG",
                            description: "TOURISM SURCHARGE",
                            calculation: [
                              {
                                unitName: "RentalPeriod",
                                unitCharge: 0,
                                percentage: 3.5,
                                quantity: 1
                              }
                            ],
                            requiredInd: true,
                            includedInRate: false,
                            amount: 730,
                            taxInclusive: false,
                            prepayFlag: "N",
                            otaValue: 0,
                            rateType: "T",
                            overrideCode: "C",
                            urlAddress: "",
                            taxExemptFlag: "N",
                            taxExemptNumber: 0,
                            tierNumber: 1
                          },
                          {
                            purpose: "STATE TAX",
                            description: "State Tax",
                            calculation: [
                              {
                                unitName: "RentalPeriod",
                                unitCharge: 0,
                                percentage: 10,
                                quantity: 1
                              }
                            ],
                            requiredInd: true,
                            includedInRate: false,
                            amount: 820,
                            taxInclusive: false,
                            prepayFlag: "N",
                            otaValue: 0,
                            rateType: "T",
                            overrideCode: "C",
                            urlAddress: "",
                            taxExemptFlag: "N",
                            taxExemptNumber: 0,
                            tierNumber: 1
                          }
                        ]
                      },
                      tpaextensions: {
                        sourceCode: "DOLLAR.COM",
                        prepayFlag: "N",
                        minimumLengthOfRent: 51,
                        maximumLengthOfRent: 98,
                        daysBeforeExtraDayCharge: 0,
                        promotionApplied: "N",
                        benefitApplied: "N",
                        opaqueFlag: "N",
                        iata: "",
                        programID: "",
                        customerZipCode: "",
                        numberOfAdvanceDays: 95,
                        defaultCurrency: "USD",
                        recalculationCurrency: "USD",
                        conversionRate: 0,
                        retainConversionRateFlag: "N",
                        customerAge: 0,
                        upgradeAllowedCode: "A",
                        voucherRequiredAtReservationFlag: "N",
                        outOfVoucherStartDate: "2019-10-08T15:00:00",
                        bundleFlag: "N",
                        msrp: 0,
                        milesDriven: 0,
                        cityCode: "",
                        stateCode: "",
                        countryCode: "",
                        pseudoCityCode: "",
                        deliveryDistance: 0,
                        collectionDistance: 0,
                        formOfPayment: "",
                        pointsPurchaseFlag: "N",
                        ancillariesPurchase: [],
                        ancillariesRestrict: [],
                        accountSpecificRateFlag: "N",
                        displayRateOnShopFlag: "Y",
                        upgradeRank: 0,
                        freeUpgradeFlag: "N",
                        guaranteeNumberOfDays: 364
                      },
                      vendor: {
                        ID: "ZR"
                      },
                      status: "AVAILABLE"
                    },
                    vehAvailInfo: {
                      pricedCoverages: {
                        pricedCoverage: []
                      },
                      paymentRules: {
                        paymentRule: []
                      }
                    }
                  },
                  {
                    vehAvailCore: {
                      pricedEquips: {
                        pricedEquip: []
                      },
                      vehicle: {
                        vehType: {
                          doorCount: "4"
                        },
                        code: "CDAR",
                        codeContext: "SIPP",
                        passengerQuantity: "5",
                        vehMakeModel: {
                          name: "NISSAN VERSA"
                        }
                      },
                      rentalRate: [
                        {
                          rateDistance: [
                            {
                              unlimited: true,
                              quantity: 0,
                              distUnitName: "MILE",
                              vehiclePeriodUnitName: "Day"
                            },
                            {
                              unlimited: true,
                              quantity: 0,
                              distUnitName: "MILE",
                              vehiclePeriodUnitName: "ExtraDay"
                            },
                            {
                              unlimited: true,
                              quantity: 0,
                              distUnitName: "MILE",
                              vehiclePeriodUnitName: "ExtraHour"
                            }
                          ],
                          rateQualifier: {
                            rateCategory: "S",
                            corpDiscountNmbr: "",
                            arriveByFlight: false,
                            guaranteedInd: true,
                            promotionCode: "",
                            rateQualifier: "BEDD3",
                            ratePeriod: "Daily",
                            rateAuthorizationCode: "N",
                            travelPurpose: "",
                            rateComments: {
                              rateComment: [
                                {
                                  name: "CommissionPercentage",
                                  value: "0"
                                },
                                {
                                  name: "CommissionAmount",
                                  value: "0"
                                },
                                {
                                  name: "GuaranteeNumberOfDays",
                                  value: "364"
                                },
                                {
                                  name: "GracePeriodNumberOfMinutes",
                                  value: "0"
                                },
                                {
                                  name: "ChargeForGracePeriodFlag",
                                  value: "N"
                                },
                                {
                                  name: "TotalDaysCharged",
                                  value: "3"
                                },
                                {
                                  name: "TotalExtraHours",
                                  value: "2"
                                },
                                {
                                  name: "MinimumAdvanceDays",
                                  value: "0"
                                },
                                {
                                  name: "MinimumAdvanceHours",
                                  value: "0"
                                }
                              ]
                            }
                          },
                          vehicleCharges: {
                            vehicleCharge: [
                              {
                                description: "TIME",
                                purpose: "D",
                                requiredInd: true,
                                includedInRate: true,
                                calculation: [
                                  {
                                    unitCharge: 2100,
                                    percentage: 0,
                                    quantity: 3,
                                    unitName: "Day"
                                  }
                                ],
                                amount: 6300,
                                taxInclusive: false,
                                prepayFlag: "N",
                                otaValue: 83,
                                rateType: "R",
                                internalCalculationMethod: "D",
                                outOfVoucherRate: 0
                              },
                              {
                                description: "TIME",
                                purpose: "X",
                                requiredInd: true,
                                includedInRate: true,
                                calculation: [
                                  {
                                    unitCharge: 1500,
                                    percentage: 0,
                                    quantity: 0,
                                    unitName: "ExtraDay"
                                  }
                                ],
                                amount: 0,
                                taxInclusive: false,
                                prepayFlag: "N",
                                otaValue: 10,
                                rateType: "R",
                                internalCalculationMethod: "X",
                                outOfVoucherRate: 0
                              },
                              {
                                description: "TIME",
                                purpose: "R",
                                requiredInd: true,
                                includedInRate: true,
                                calculation: [
                                  {
                                    unitCharge: 357,
                                    percentage: 0,
                                    quantity: 2,
                                    unitName: "ExtraHour"
                                  }
                                ],
                                amount: 714,
                                taxInclusive: false,
                                prepayFlag: "N",
                                otaValue: 11,
                                rateType: "R",
                                internalCalculationMethod: "R",
                                outOfVoucherRate: 0
                              }
                            ]
                          },
                          rateRestrictions: {
                            minimumAge: 18,
                            guaranteeReqInd: false,
                            cancellationPenaltyInd: false
                          },
                          totalCharge: [
                            {
                              rateTotalAmount: 7014,
                              estimatedTotalAmount: 12752,
                              currencyCode: "USD",
                              decimalPlaces: 2,
                              rateConvertInd: false
                            }
                          ]
                        }
                      ],
                      fees: {
                        fee: [
                          {
                            purpose: "VLF",
                            description: "VEHICLE LICENSE FEE",
                            calculation: [
                              {
                                unitName: "Day",
                                unitCharge: 92,
                                percentage: 0,
                                quantity: 4
                              }
                            ],
                            requiredInd: true,
                            includedInRate: false,
                            amount: 368,
                            taxInclusive: false,
                            prepayFlag: "N",
                            otaValue: 0,
                            rateType: "F",
                            overrideCode: "C",
                            urlAddress: "",
                            taxExemptFlag: "N",
                            taxExemptNumber: 0,
                            tierNumber: 1
                          },
                          {
                            purpose: "APCONRGFEE",
                            description: "APT CONC RECOV FEE",
                            calculation: [
                              {
                                unitName: "RentalPeriod",
                                unitCharge: 0,
                                percentage: 11.11,
                                quantity: 1
                              }
                            ],
                            requiredInd: true,
                            includedInRate: false,
                            amount: 820,
                            taxInclusive: false,
                            prepayFlag: "N",
                            otaValue: 0,
                            rateType: "F",
                            overrideCode: "C",
                            urlAddress: "",
                            taxExemptFlag: "N",
                            taxExemptNumber: 0,
                            tierNumber: 1
                          },
                          {
                            purpose: "CFC1",
                            description: "CUST FACILITY CHRG",
                            calculation: [
                              {
                                unitName: "Day",
                                unitCharge: 750,
                                percentage: 0,
                                quantity: 4
                              }
                            ],
                            requiredInd: true,
                            includedInRate: false,
                            amount: 3000,
                            taxInclusive: false,
                            prepayFlag: "N",
                            otaValue: 0,
                            rateType: "F",
                            overrideCode: "C",
                            urlAddress: "",
                            taxExemptFlag: "N",
                            taxExemptNumber: 0,
                            tierNumber: 1
                          },
                          {
                            purpose: "TOURSM SRG",
                            description: "TOURISM SURCHARGE",
                            calculation: [
                              {
                                unitName: "RentalPeriod",
                                unitCharge: 0,
                                percentage: 3.5,
                                quantity: 1
                              }
                            ],
                            requiredInd: true,
                            includedInRate: false,
                            amount: 730,
                            taxInclusive: false,
                            prepayFlag: "N",
                            otaValue: 0,
                            rateType: "T",
                            overrideCode: "C",
                            urlAddress: "",
                            taxExemptFlag: "N",
                            taxExemptNumber: 0,
                            tierNumber: 1
                          },
                          {
                            purpose: "STATE TAX",
                            description: "State Tax",
                            calculation: [
                              {
                                unitName: "RentalPeriod",
                                unitCharge: 0,
                                percentage: 10,
                                quantity: 1
                              }
                            ],
                            requiredInd: true,
                            includedInRate: false,
                            amount: 820,
                            taxInclusive: false,
                            prepayFlag: "N",
                            otaValue: 0,
                            rateType: "T",
                            overrideCode: "C",
                            urlAddress: "",
                            taxExemptFlag: "N",
                            taxExemptNumber: 0,
                            tierNumber: 1
                          }
                        ]
                      },
                      tpaextensions: {
                        sourceCode: "DOLLAR.COM",
                        prepayFlag: "N",
                        minimumLengthOfRent: 51,
                        maximumLengthOfRent: 98,
                        daysBeforeExtraDayCharge: 0,
                        promotionApplied: "N",
                        benefitApplied: "N",
                        opaqueFlag: "N",
                        iata: "",
                        programID: "",
                        customerZipCode: "",
                        numberOfAdvanceDays: 95,
                        defaultCurrency: "USD",
                        recalculationCurrency: "USD",
                        conversionRate: 0,
                        retainConversionRateFlag: "N",
                        customerAge: 0,
                        upgradeAllowedCode: "A",
                        voucherRequiredAtReservationFlag: "N",
                        outOfVoucherStartDate: "2019-10-08T15:00:00",
                        bundleFlag: "N",
                        msrp: 0,
                        milesDriven: 0,
                        cityCode: "",
                        stateCode: "",
                        countryCode: "",
                        pseudoCityCode: "",
                        deliveryDistance: 0,
                        collectionDistance: 0,
                        formOfPayment: "",
                        pointsPurchaseFlag: "N",
                        ancillariesPurchase: [],
                        ancillariesRestrict: [],
                        accountSpecificRateFlag: "N",
                        displayRateOnShopFlag: "Y",
                        upgradeRank: 0,
                        freeUpgradeFlag: "N",
                        guaranteeNumberOfDays: 364
                      },
                      vendor: {
                        ID: "ZR"
                      },
                      status: "AVAILABLE"
                    },
                    vehAvailInfo: {
                      pricedCoverages: {
                        pricedCoverage: []
                      },
                      paymentRules: {
                        paymentRule: []
                      }
                    }
                  },
                  {
                    vehAvailCore: {
                      pricedEquips: {
                        pricedEquip: []
                      },
                      vehicle: {
                        vehType: {
                          doorCount: "4"
                        },
                        code: "EDAR",
                        codeContext: "SIPP",
                        passengerQuantity: "5",
                        vehMakeModel: {
                          name: "CHEVROLET AVEO"
                        }
                      },
                      rentalRate: [
                        {
                          rateDistance: [
                            {
                              unlimited: true,
                              quantity: 0,
                              distUnitName: "MILE",
                              vehiclePeriodUnitName: "Day"
                            },
                            {
                              unlimited: true,
                              quantity: 0,
                              distUnitName: "MILE",
                              vehiclePeriodUnitName: "ExtraHour"
                            }
                          ],
                          rateQualifier: {
                            rateCategory: "S",
                            corpDiscountNmbr: "",
                            arriveByFlight: false,
                            guaranteedInd: true,
                            promotionCode: "",
                            rateQualifier: "RCUD3",
                            ratePeriod: "Daily",
                            rateAuthorizationCode: "N",
                            travelPurpose: "",
                            rateComments: {
                              rateComment: [
                                {
                                  name: "CommissionPercentage",
                                  value: "0"
                                },
                                {
                                  name: "CommissionAmount",
                                  value: "0"
                                },
                                {
                                  name: "GuaranteeNumberOfDays",
                                  value: "364"
                                },
                                {
                                  name: "GracePeriodNumberOfMinutes",
                                  value: "0"
                                },
                                {
                                  name: "ChargeForGracePeriodFlag",
                                  value: "N"
                                },
                                {
                                  name: "TotalDaysCharged",
                                  value: "3"
                                },
                                {
                                  name: "TotalExtraHours",
                                  value: "2"
                                },
                                {
                                  name: "MinimumAdvanceDays",
                                  value: "0"
                                },
                                {
                                  name: "MinimumAdvanceHours",
                                  value: "0"
                                }
                              ]
                            }
                          },
                          vehicleCharges: {
                            vehicleCharge: [
                              {
                                description: "TIME",
                                purpose: "D",
                                requiredInd: true,
                                includedInRate: true,
                                calculation: [
                                  {
                                    unitCharge: 2400,
                                    percentage: 0,
                                    quantity: 3,
                                    unitName: "Day"
                                  }
                                ],
                                amount: 7200,
                                taxInclusive: false,
                                prepayFlag: "N",
                                otaValue: 83,
                                rateType: "R",
                                internalCalculationMethod: "D",
                                outOfVoucherRate: 0
                              },
                              {
                                description: "TIME",
                                purpose: "R",
                                requiredInd: true,
                                includedInRate: true,
                                calculation: [
                                  {
                                    unitCharge: 408,
                                    percentage: 0,
                                    quantity: 2,
                                    unitName: "ExtraHour"
                                  }
                                ],
                                amount: 816,
                                taxInclusive: false,
                                prepayFlag: "N",
                                otaValue: 11,
                                rateType: "R",
                                internalCalculationMethod: "R",
                                outOfVoucherRate: 0
                              }
                            ]
                          },
                          rateRestrictions: {
                            minimumAge: 18,
                            guaranteeReqInd: false,
                            cancellationPenaltyInd: false
                          },
                          totalCharge: [
                            {
                              rateTotalAmount: 8016,
                              estimatedTotalAmount: 14066,
                              currencyCode: "USD",
                              decimalPlaces: 2,
                              rateConvertInd: false
                            }
                          ]
                        }
                      ],
                      fees: {
                        fee: [
                          {
                            purpose: "VLF",
                            description: "VEHICLE LICENSE FEE",
                            calculation: [
                              {
                                unitName: "Day",
                                unitCharge: 89,
                                percentage: 0,
                                quantity: 4
                              }
                            ],
                            requiredInd: true,
                            includedInRate: false,
                            amount: 356,
                            taxInclusive: false,
                            prepayFlag: "N",
                            otaValue: 0,
                            rateType: "F",
                            overrideCode: "C",
                            urlAddress: "",
                            taxExemptFlag: "N",
                            taxExemptNumber: 0,
                            tierNumber: 1
                          },
                          {
                            purpose: "APCONRGFEE",
                            description: "APT CONC RECOV FEE",
                            calculation: [
                              {
                                unitName: "RentalPeriod",
                                unitCharge: 0,
                                percentage: 11.11,
                                quantity: 1
                              }
                            ],
                            requiredInd: true,
                            includedInRate: false,
                            amount: 930,
                            taxInclusive: false,
                            prepayFlag: "N",
                            otaValue: 0,
                            rateType: "F",
                            overrideCode: "C",
                            urlAddress: "",
                            taxExemptFlag: "N",
                            taxExemptNumber: 0,
                            tierNumber: 1
                          },
                          {
                            purpose: "CFC1",
                            description: "CUST FACILITY CHRG",
                            calculation: [
                              {
                                unitName: "Day",
                                unitCharge: 750,
                                percentage: 0,
                                quantity: 4
                              }
                            ],
                            requiredInd: true,
                            includedInRate: false,
                            amount: 3000,
                            taxInclusive: false,
                            prepayFlag: "N",
                            otaValue: 0,
                            rateType: "F",
                            overrideCode: "C",
                            urlAddress: "",
                            taxExemptFlag: "N",
                            taxExemptNumber: 0,
                            tierNumber: 1
                          },
                          {
                            purpose: "TOURSM SRG",
                            description: "TOURISM SURCHARGE",
                            calculation: [
                              {
                                unitName: "RentalPeriod",
                                unitCharge: 0,
                                percentage: 3.5,
                                quantity: 1
                              }
                            ],
                            requiredInd: true,
                            includedInRate: false,
                            amount: 834,
                            taxInclusive: false,
                            prepayFlag: "N",
                            otaValue: 0,
                            rateType: "T",
                            overrideCode: "C",
                            urlAddress: "",
                            taxExemptFlag: "N",
                            taxExemptNumber: 0,
                            tierNumber: 1
                          },
                          {
                            purpose: "STATE TAX",
                            description: "State Tax",
                            calculation: [
                              {
                                unitName: "RentalPeriod",
                                unitCharge: 0,
                                percentage: 10,
                                quantity: 1
                              }
                            ],
                            requiredInd: true,
                            includedInRate: false,
                            amount: 930,
                            taxInclusive: false,
                            prepayFlag: "N",
                            otaValue: 0,
                            rateType: "T",
                            overrideCode: "C",
                            urlAddress: "",
                            taxExemptFlag: "N",
                            taxExemptNumber: 0,
                            tierNumber: 1
                          }
                        ]
                      },
                      tpaextensions: {
                        sourceCode: "DOLLAR.COM",
                        prepayFlag: "N",
                        minimumLengthOfRent: 51,
                        maximumLengthOfRent: 98,
                        daysBeforeExtraDayCharge: 0,
                        promotionApplied: "N",
                        benefitApplied: "N",
                        opaqueFlag: "N",
                        iata: "",
                        programID: "",
                        customerZipCode: "",
                        numberOfAdvanceDays: 95,
                        defaultCurrency: "USD",
                        recalculationCurrency: "USD",
                        conversionRate: 0,
                        retainConversionRateFlag: "N",
                        customerAge: 0,
                        upgradeAllowedCode: "A",
                        voucherRequiredAtReservationFlag: "N",
                        outOfVoucherStartDate: "2019-10-08T15:00:00",
                        bundleFlag: "N",
                        msrp: 0,
                        milesDriven: 0,
                        cityCode: "",
                        stateCode: "",
                        countryCode: "",
                        pseudoCityCode: "",
                        deliveryDistance: 0,
                        collectionDistance: 0,
                        formOfPayment: "",
                        pointsPurchaseFlag: "N",
                        ancillariesPurchase: [],
                        ancillariesRestrict: [],
                        accountSpecificRateFlag: "N",
                        displayRateOnShopFlag: "Y",
                        upgradeRank: 0,
                        freeUpgradeFlag: "N",
                        guaranteeNumberOfDays: 364
                      },
                      vendor: {
                        ID: "ZR"
                      },
                      status: "AVAILABLE"
                    },
                    vehAvailInfo: {
                      pricedCoverages: {
                        pricedCoverage: []
                      },
                      paymentRules: {
                        paymentRule: []
                      }
                    }
                  },
                  {
                    vehAvailCore: {
                      pricedEquips: {
                        pricedEquip: []
                      },
                      vehicle: {
                        vehType: {
                          doorCount: "2"
                        },
                        code: "ECAR",
                        codeContext: "SIPP",
                        passengerQuantity: "5",
                        vehMakeModel: {
                          name: "CHEVROLET AVEO"
                        }
                      },
                      rentalRate: [
                        {
                          rateDistance: [
                            {
                              unlimited: true,
                              quantity: 0,
                              distUnitName: "MILE",
                              vehiclePeriodUnitName: "Day"
                            },
                            {
                              unlimited: true,
                              quantity: 0,
                              distUnitName: "MILE",
                              vehiclePeriodUnitName: "ExtraHour"
                            }
                          ],
                          rateQualifier: {
                            rateCategory: "S",
                            corpDiscountNmbr: "",
                            arriveByFlight: false,
                            guaranteedInd: true,
                            promotionCode: "",
                            rateQualifier: "RCUD3",
                            ratePeriod: "Daily",
                            rateAuthorizationCode: "N",
                            travelPurpose: "",
                            rateComments: {
                              rateComment: [
                                {
                                  name: "CommissionPercentage",
                                  value: "0"
                                },
                                {
                                  name: "CommissionAmount",
                                  value: "0"
                                },
                                {
                                  name: "GuaranteeNumberOfDays",
                                  value: "364"
                                },
                                {
                                  name: "GracePeriodNumberOfMinutes",
                                  value: "0"
                                },
                                {
                                  name: "ChargeForGracePeriodFlag",
                                  value: "N"
                                },
                                {
                                  name: "TotalDaysCharged",
                                  value: "3"
                                },
                                {
                                  name: "TotalExtraHours",
                                  value: "2"
                                },
                                {
                                  name: "MinimumAdvanceDays",
                                  value: "0"
                                },
                                {
                                  name: "MinimumAdvanceHours",
                                  value: "0"
                                }
                              ]
                            }
                          },
                          vehicleCharges: {
                            vehicleCharge: [
                              {
                                description: "TIME",
                                purpose: "D",
                                requiredInd: true,
                                includedInRate: true,
                                calculation: [
                                  {
                                    unitCharge: 2400,
                                    percentage: 0,
                                    quantity: 3,
                                    unitName: "Day"
                                  }
                                ],
                                amount: 7200,
                                taxInclusive: false,
                                prepayFlag: "N",
                                otaValue: 83,
                                rateType: "R",
                                internalCalculationMethod: "D",
                                outOfVoucherRate: 0
                              },
                              {
                                description: "TIME",
                                purpose: "R",
                                requiredInd: true,
                                includedInRate: true,
                                calculation: [
                                  {
                                    unitCharge: 408,
                                    percentage: 0,
                                    quantity: 2,
                                    unitName: "ExtraHour"
                                  }
                                ],
                                amount: 816,
                                taxInclusive: false,
                                prepayFlag: "N",
                                otaValue: 11,
                                rateType: "R",
                                internalCalculationMethod: "R",
                                outOfVoucherRate: 0
                              }
                            ]
                          },
                          rateRestrictions: {
                            minimumAge: 18,
                            guaranteeReqInd: false,
                            cancellationPenaltyInd: false
                          },
                          totalCharge: [
                            {
                              rateTotalAmount: 8016,
                              estimatedTotalAmount: 14066,
                              currencyCode: "USD",
                              decimalPlaces: 2,
                              rateConvertInd: false
                            }
                          ]
                        }
                      ],
                      fees: {
                        fee: [
                          {
                            purpose: "VLF",
                            description: "VEHICLE LICENSE FEE",
                            calculation: [
                              {
                                unitName: "Day",
                                unitCharge: 89,
                                percentage: 0,
                                quantity: 4
                              }
                            ],
                            requiredInd: true,
                            includedInRate: false,
                            amount: 356,
                            taxInclusive: false,
                            prepayFlag: "N",
                            otaValue: 0,
                            rateType: "F",
                            overrideCode: "C",
                            urlAddress: "",
                            taxExemptFlag: "N",
                            taxExemptNumber: 0,
                            tierNumber: 1
                          },
                          {
                            purpose: "APCONRGFEE",
                            description: "APT CONC RECOV FEE",
                            calculation: [
                              {
                                unitName: "RentalPeriod",
                                unitCharge: 0,
                                percentage: 11.11,
                                quantity: 1
                              }
                            ],
                            requiredInd: true,
                            includedInRate: false,
                            amount: 930,
                            taxInclusive: false,
                            prepayFlag: "N",
                            otaValue: 0,
                            rateType: "F",
                            overrideCode: "C",
                            urlAddress: "",
                            taxExemptFlag: "N",
                            taxExemptNumber: 0,
                            tierNumber: 1
                          },
                          {
                            purpose: "CFC1",
                            description: "CUST FACILITY CHRG",
                            calculation: [
                              {
                                unitName: "Day",
                                unitCharge: 750,
                                percentage: 0,
                                quantity: 4
                              }
                            ],
                            requiredInd: true,
                            includedInRate: false,
                            amount: 3000,
                            taxInclusive: false,
                            prepayFlag: "N",
                            otaValue: 0,
                            rateType: "F",
                            overrideCode: "C",
                            urlAddress: "",
                            taxExemptFlag: "N",
                            taxExemptNumber: 0,
                            tierNumber: 1
                          },
                          {
                            purpose: "TOURSM SRG",
                            description: "TOURISM SURCHARGE",
                            calculation: [
                              {
                                unitName: "RentalPeriod",
                                unitCharge: 0,
                                percentage: 3.5,
                                quantity: 1
                              }
                            ],
                            requiredInd: true,
                            includedInRate: false,
                            amount: 834,
                            taxInclusive: false,
                            prepayFlag: "N",
                            otaValue: 0,
                            rateType: "T",
                            overrideCode: "C",
                            urlAddress: "",
                            taxExemptFlag: "N",
                            taxExemptNumber: 0,
                            tierNumber: 1
                          },
                          {
                            purpose: "STATE TAX",
                            description: "State Tax",
                            calculation: [
                              {
                                unitName: "RentalPeriod",
                                unitCharge: 0,
                                percentage: 10,
                                quantity: 1
                              }
                            ],
                            requiredInd: true,
                            includedInRate: false,
                            amount: 930,
                            taxInclusive: false,
                            prepayFlag: "N",
                            otaValue: 0,
                            rateType: "T",
                            overrideCode: "C",
                            urlAddress: "",
                            taxExemptFlag: "N",
                            taxExemptNumber: 0,
                            tierNumber: 1
                          }
                        ]
                      },
                      tpaextensions: {
                        sourceCode: "DOLLAR.COM",
                        prepayFlag: "N",
                        minimumLengthOfRent: 51,
                        maximumLengthOfRent: 98,
                        daysBeforeExtraDayCharge: 0,
                        promotionApplied: "N",
                        benefitApplied: "N",
                        opaqueFlag: "N",
                        iata: "",
                        programID: "",
                        customerZipCode: "",
                        numberOfAdvanceDays: 95,
                        defaultCurrency: "USD",
                        recalculationCurrency: "USD",
                        conversionRate: 0,
                        retainConversionRateFlag: "N",
                        customerAge: 0,
                        upgradeAllowedCode: "A",
                        voucherRequiredAtReservationFlag: "N",
                        outOfVoucherStartDate: "2019-10-08T15:00:00",
                        bundleFlag: "N",
                        msrp: 0,
                        milesDriven: 0,
                        cityCode: "",
                        stateCode: "",
                        countryCode: "",
                        pseudoCityCode: "",
                        deliveryDistance: 0,
                        collectionDistance: 0,
                        formOfPayment: "",
                        pointsPurchaseFlag: "N",
                        ancillariesPurchase: [],
                        ancillariesRestrict: [],
                        accountSpecificRateFlag: "N",
                        displayRateOnShopFlag: "Y",
                        upgradeRank: 0,
                        freeUpgradeFlag: "N",
                        guaranteeNumberOfDays: 364
                      },
                      vendor: {
                        ID: "ZR"
                      },
                      status: "AVAILABLE"
                    },
                    vehAvailInfo: {
                      pricedCoverages: {
                        pricedCoverage: []
                      },
                      paymentRules: {
                        paymentRule: []
                      }
                    }
                  },
                  {
                    vehAvailCore: {
                      pricedEquips: {
                        pricedEquip: []
                      },
                      vehicle: {
                        vehType: {
                          doorCount: "2"
                        },
                        code: "ICAR",
                        codeContext: "SIPP",
                        passengerQuantity: "5",
                        vehMakeModel: {
                          name: "TOYOTA COROLLA"
                        }
                      },
                      rentalRate: [
                        {
                          rateDistance: [
                            {
                              unlimited: true,
                              quantity: 0,
                              distUnitName: "MILE",
                              vehiclePeriodUnitName: "Day"
                            },
                            {
                              unlimited: true,
                              quantity: 0,
                              distUnitName: "MILE",
                              vehiclePeriodUnitName: "ExtraHour"
                            }
                          ],
                          rateQualifier: {
                            rateCategory: "S",
                            corpDiscountNmbr: "",
                            arriveByFlight: false,
                            guaranteedInd: true,
                            promotionCode: "",
                            rateQualifier: "RCUD3",
                            ratePeriod: "Daily",
                            rateAuthorizationCode: "N",
                            travelPurpose: "",
                            rateComments: {
                              rateComment: [
                                {
                                  name: "CommissionPercentage",
                                  value: "0"
                                },
                                {
                                  name: "CommissionAmount",
                                  value: "0"
                                },
                                {
                                  name: "GuaranteeNumberOfDays",
                                  value: "364"
                                },
                                {
                                  name: "GracePeriodNumberOfMinutes",
                                  value: "0"
                                },
                                {
                                  name: "ChargeForGracePeriodFlag",
                                  value: "N"
                                },
                                {
                                  name: "TotalDaysCharged",
                                  value: "3"
                                },
                                {
                                  name: "TotalExtraHours",
                                  value: "2"
                                },
                                {
                                  name: "MinimumAdvanceDays",
                                  value: "0"
                                },
                                {
                                  name: "MinimumAdvanceHours",
                                  value: "0"
                                }
                              ]
                            }
                          },
                          vehicleCharges: {
                            vehicleCharge: [
                              {
                                description: "TIME",
                                purpose: "D",
                                requiredInd: true,
                                includedInRate: true,
                                calculation: [
                                  {
                                    unitCharge: 3571,
                                    percentage: 0,
                                    quantity: 3,
                                    unitName: "Day"
                                  }
                                ],
                                amount: 10713,
                                taxInclusive: false,
                                prepayFlag: "N",
                                otaValue: 83,
                                rateType: "R",
                                internalCalculationMethod: "D",
                                outOfVoucherRate: 0
                              },
                              {
                                description: "TIME",
                                purpose: "R",
                                requiredInd: true,
                                includedInRate: true,
                                calculation: [
                                  {
                                    unitCharge: 607,
                                    percentage: 0,
                                    quantity: 2,
                                    unitName: "ExtraHour"
                                  }
                                ],
                                amount: 1214,
                                taxInclusive: false,
                                prepayFlag: "N",
                                otaValue: 11,
                                rateType: "R",
                                internalCalculationMethod: "R",
                                outOfVoucherRate: 0
                              }
                            ]
                          },
                          rateRestrictions: {
                            minimumAge: 18,
                            guaranteeReqInd: false,
                            cancellationPenaltyInd: false
                          },
                          totalCharge: [
                            {
                              rateTotalAmount: 11927,
                              estimatedTotalAmount: 19298,
                              currencyCode: "USD",
                              decimalPlaces: 2,
                              rateConvertInd: false
                            }
                          ]
                        }
                      ],
                      fees: {
                        fee: [
                          {
                            purpose: "VLF",
                            description: "VEHICLE LICENSE FEE",
                            calculation: [
                              {
                                unitName: "Day",
                                unitCharge: 98,
                                percentage: 0,
                                quantity: 4
                              }
                            ],
                            requiredInd: true,
                            includedInRate: false,
                            amount: 392,
                            taxInclusive: false,
                            prepayFlag: "N",
                            otaValue: 0,
                            rateType: "F",
                            overrideCode: "C",
                            urlAddress: "",
                            taxExemptFlag: "N",
                            taxExemptNumber: 0,
                            tierNumber: 1
                          },
                          {
                            purpose: "APCONRGFEE",
                            description: "APT CONC RECOV FEE",
                            calculation: [
                              {
                                unitName: "RentalPeriod",
                                unitCharge: 0,
                                percentage: 11.11,
                                quantity: 1
                              }
                            ],
                            requiredInd: true,
                            includedInRate: false,
                            amount: 1369,
                            taxInclusive: false,
                            prepayFlag: "N",
                            otaValue: 0,
                            rateType: "F",
                            overrideCode: "C",
                            urlAddress: "",
                            taxExemptFlag: "N",
                            taxExemptNumber: 0,
                            tierNumber: 1
                          },
                          {
                            purpose: "CFC1",
                            description: "CUST FACILITY CHRG",
                            calculation: [
                              {
                                unitName: "Day",
                                unitCharge: 750,
                                percentage: 0,
                                quantity: 4
                              }
                            ],
                            requiredInd: true,
                            includedInRate: false,
                            amount: 3000,
                            taxInclusive: false,
                            prepayFlag: "N",
                            otaValue: 0,
                            rateType: "F",
                            overrideCode: "C",
                            urlAddress: "",
                            taxExemptFlag: "N",
                            taxExemptNumber: 0,
                            tierNumber: 1
                          },
                          {
                            purpose: "TOURSM SRG",
                            description: "TOURISM SURCHARGE",
                            calculation: [
                              {
                                unitName: "RentalPeriod",
                                unitCharge: 0,
                                percentage: 3.5,
                                quantity: 1
                              }
                            ],
                            requiredInd: true,
                            includedInRate: false,
                            amount: 1241,
                            taxInclusive: false,
                            prepayFlag: "N",
                            otaValue: 0,
                            rateType: "T",
                            overrideCode: "C",
                            urlAddress: "",
                            taxExemptFlag: "N",
                            taxExemptNumber: 0,
                            tierNumber: 1
                          },
                          {
                            purpose: "STATE TAX",
                            description: "State Tax",
                            calculation: [
                              {
                                unitName: "RentalPeriod",
                                unitCharge: 0,
                                percentage: 10,
                                quantity: 1
                              }
                            ],
                            requiredInd: true,
                            includedInRate: false,
                            amount: 1369,
                            taxInclusive: false,
                            prepayFlag: "N",
                            otaValue: 0,
                            rateType: "T",
                            overrideCode: "C",
                            urlAddress: "",
                            taxExemptFlag: "N",
                            taxExemptNumber: 0,
                            tierNumber: 1
                          }
                        ]
                      },
                      tpaextensions: {
                        sourceCode: "DOLLAR.COM",
                        prepayFlag: "N",
                        minimumLengthOfRent: 51,
                        maximumLengthOfRent: 98,
                        daysBeforeExtraDayCharge: 0,
                        promotionApplied: "N",
                        benefitApplied: "N",
                        opaqueFlag: "N",
                        iata: "",
                        programID: "",
                        customerZipCode: "",
                        numberOfAdvanceDays: 95,
                        defaultCurrency: "USD",
                        recalculationCurrency: "USD",
                        conversionRate: 0,
                        retainConversionRateFlag: "N",
                        customerAge: 0,
                        upgradeAllowedCode: "A",
                        voucherRequiredAtReservationFlag: "N",
                        outOfVoucherStartDate: "2019-10-08T15:00:00",
                        bundleFlag: "N",
                        msrp: 0,
                        milesDriven: 0,
                        cityCode: "",
                        stateCode: "",
                        countryCode: "",
                        pseudoCityCode: "",
                        deliveryDistance: 0,
                        collectionDistance: 0,
                        formOfPayment: "",
                        pointsPurchaseFlag: "N",
                        ancillariesPurchase: [],
                        ancillariesRestrict: [],
                        accountSpecificRateFlag: "N",
                        displayRateOnShopFlag: "Y",
                        upgradeRank: 0,
                        freeUpgradeFlag: "N",
                        guaranteeNumberOfDays: 364
                      },
                      vendor: {
                        ID: "ZR"
                      },
                      status: "AVAILABLE"
                    },
                    vehAvailInfo: {
                      pricedCoverages: {
                        pricedCoverage: []
                      },
                      paymentRules: {
                        paymentRule: []
                      }
                    }
                  },
                  {
                    vehAvailCore: {
                      pricedEquips: {
                        pricedEquip: []
                      },
                      vehicle: {
                        vehType: {
                          doorCount: "4"
                        },
                        code: "IDAR",
                        codeContext: "SIPP",
                        passengerQuantity: "5",
                        vehMakeModel: {
                          name: "TOYOTA COROLLA"
                        }
                      },
                      rentalRate: [
                        {
                          rateDistance: [
                            {
                              unlimited: true,
                              quantity: 0,
                              distUnitName: "MILE",
                              vehiclePeriodUnitName: "Day"
                            },
                            {
                              unlimited: true,
                              quantity: 0,
                              distUnitName: "MILE",
                              vehiclePeriodUnitName: "ExtraHour"
                            }
                          ],
                          rateQualifier: {
                            rateCategory: "S",
                            corpDiscountNmbr: "",
                            arriveByFlight: false,
                            guaranteedInd: true,
                            promotionCode: "",
                            rateQualifier: "RCUD3",
                            ratePeriod: "Daily",
                            rateAuthorizationCode: "N",
                            travelPurpose: "",
                            rateComments: {
                              rateComment: [
                                {
                                  name: "CommissionPercentage",
                                  value: "0"
                                },
                                {
                                  name: "CommissionAmount",
                                  value: "0"
                                },
                                {
                                  name: "GuaranteeNumberOfDays",
                                  value: "364"
                                },
                                {
                                  name: "GracePeriodNumberOfMinutes",
                                  value: "0"
                                },
                                {
                                  name: "ChargeForGracePeriodFlag",
                                  value: "N"
                                },
                                {
                                  name: "TotalDaysCharged",
                                  value: "3"
                                },
                                {
                                  name: "TotalExtraHours",
                                  value: "2"
                                },
                                {
                                  name: "MinimumAdvanceDays",
                                  value: "0"
                                },
                                {
                                  name: "MinimumAdvanceHours",
                                  value: "0"
                                }
                              ]
                            }
                          },
                          vehicleCharges: {
                            vehicleCharge: [
                              {
                                description: "TIME",
                                purpose: "D",
                                requiredInd: true,
                                includedInRate: true,
                                calculation: [
                                  {
                                    unitCharge: 3571,
                                    percentage: 0,
                                    quantity: 3,
                                    unitName: "Day"
                                  }
                                ],
                                amount: 10713,
                                taxInclusive: false,
                                prepayFlag: "N",
                                otaValue: 83,
                                rateType: "R",
                                internalCalculationMethod: "D",
                                outOfVoucherRate: 0
                              },
                              {
                                description: "TIME",
                                purpose: "R",
                                requiredInd: true,
                                includedInRate: true,
                                calculation: [
                                  {
                                    unitCharge: 607,
                                    percentage: 0,
                                    quantity: 2,
                                    unitName: "ExtraHour"
                                  }
                                ],
                                amount: 1214,
                                taxInclusive: false,
                                prepayFlag: "N",
                                otaValue: 11,
                                rateType: "R",
                                internalCalculationMethod: "R",
                                outOfVoucherRate: 0
                              }
                            ]
                          },
                          rateRestrictions: {
                            minimumAge: 18,
                            guaranteeReqInd: false,
                            cancellationPenaltyInd: false
                          },
                          totalCharge: [
                            {
                              rateTotalAmount: 11927,
                              estimatedTotalAmount: 19298,
                              currencyCode: "USD",
                              decimalPlaces: 2,
                              rateConvertInd: false
                            }
                          ]
                        }
                      ],
                      fees: {
                        fee: [
                          {
                            purpose: "VLF",
                            description: "VEHICLE LICENSE FEE",
                            calculation: [
                              {
                                unitName: "Day",
                                unitCharge: 98,
                                percentage: 0,
                                quantity: 4
                              }
                            ],
                            requiredInd: true,
                            includedInRate: false,
                            amount: 392,
                            taxInclusive: false,
                            prepayFlag: "N",
                            otaValue: 0,
                            rateType: "F",
                            overrideCode: "C",
                            urlAddress: "",
                            taxExemptFlag: "N",
                            taxExemptNumber: 0,
                            tierNumber: 1
                          },
                          {
                            purpose: "APCONRGFEE",
                            description: "APT CONC RECOV FEE",
                            calculation: [
                              {
                                unitName: "RentalPeriod",
                                unitCharge: 0,
                                percentage: 11.11,
                                quantity: 1
                              }
                            ],
                            requiredInd: true,
                            includedInRate: false,
                            amount: 1369,
                            taxInclusive: false,
                            prepayFlag: "N",
                            otaValue: 0,
                            rateType: "F",
                            overrideCode: "C",
                            urlAddress: "",
                            taxExemptFlag: "N",
                            taxExemptNumber: 0,
                            tierNumber: 1
                          },
                          {
                            purpose: "CFC1",
                            description: "CUST FACILITY CHRG",
                            calculation: [
                              {
                                unitName: "Day",
                                unitCharge: 750,
                                percentage: 0,
                                quantity: 4
                              }
                            ],
                            requiredInd: true,
                            includedInRate: false,
                            amount: 3000,
                            taxInclusive: false,
                            prepayFlag: "N",
                            otaValue: 0,
                            rateType: "F",
                            overrideCode: "C",
                            urlAddress: "",
                            taxExemptFlag: "N",
                            taxExemptNumber: 0,
                            tierNumber: 1
                          },
                          {
                            purpose: "TOURSM SRG",
                            description: "TOURISM SURCHARGE",
                            calculation: [
                              {
                                unitName: "RentalPeriod",
                                unitCharge: 0,
                                percentage: 3.5,
                                quantity: 1
                              }
                            ],
                            requiredInd: true,
                            includedInRate: false,
                            amount: 1241,
                            taxInclusive: false,
                            prepayFlag: "N",
                            otaValue: 0,
                            rateType: "T",
                            overrideCode: "C",
                            urlAddress: "",
                            taxExemptFlag: "N",
                            taxExemptNumber: 0,
                            tierNumber: 1
                          },
                          {
                            purpose: "STATE TAX",
                            description: "State Tax",
                            calculation: [
                              {
                                unitName: "RentalPeriod",
                                unitCharge: 0,
                                percentage: 10,
                                quantity: 1
                              }
                            ],
                            requiredInd: true,
                            includedInRate: false,
                            amount: 1369,
                            taxInclusive: false,
                            prepayFlag: "N",
                            otaValue: 0,
                            rateType: "T",
                            overrideCode: "C",
                            urlAddress: "",
                            taxExemptFlag: "N",
                            taxExemptNumber: 0,
                            tierNumber: 1
                          }
                        ]
                      },
                      tpaextensions: {
                        sourceCode: "DOLLAR.COM",
                        prepayFlag: "N",
                        minimumLengthOfRent: 51,
                        maximumLengthOfRent: 98,
                        daysBeforeExtraDayCharge: 0,
                        promotionApplied: "N",
                        benefitApplied: "N",
                        opaqueFlag: "N",
                        iata: "",
                        programID: "",
                        customerZipCode: "",
                        numberOfAdvanceDays: 95,
                        defaultCurrency: "USD",
                        recalculationCurrency: "USD",
                        conversionRate: 0,
                        retainConversionRateFlag: "N",
                        customerAge: 0,
                        upgradeAllowedCode: "A",
                        voucherRequiredAtReservationFlag: "N",
                        outOfVoucherStartDate: "2019-10-08T15:00:00",
                        bundleFlag: "N",
                        msrp: 0,
                        milesDriven: 0,
                        cityCode: "",
                        stateCode: "",
                        countryCode: "",
                        pseudoCityCode: "",
                        deliveryDistance: 0,
                        collectionDistance: 0,
                        formOfPayment: "",
                        pointsPurchaseFlag: "N",
                        ancillariesPurchase: [],
                        ancillariesRestrict: [],
                        accountSpecificRateFlag: "N",
                        displayRateOnShopFlag: "Y",
                        upgradeRank: 0,
                        freeUpgradeFlag: "N",
                        guaranteeNumberOfDays: 364
                      },
                      vendor: {
                        ID: "ZR"
                      },
                      status: "AVAILABLE"
                    },
                    vehAvailInfo: {
                      pricedCoverages: {
                        pricedCoverage: []
                      },
                      paymentRules: {
                        paymentRule: []
                      }
                    }
                  },
                  {
                    vehAvailCore: {
                      pricedEquips: {
                        pricedEquip: []
                      },
                      vehicle: {
                        vehType: {
                          doorCount: "2"
                        },
                        code: "SCAR",
                        codeContext: "SIPP",
                        passengerQuantity: "5",
                        vehMakeModel: {
                          name: "MITSUBISHI GALANT"
                        }
                      },
                      rentalRate: [
                        {
                          rateDistance: [
                            {
                              unlimited: true,
                              quantity: 0,
                              distUnitName: "MILE",
                              vehiclePeriodUnitName: "WeekendDay"
                            },
                            {
                              unlimited: true,
                              quantity: 0,
                              distUnitName: "MILE",
                              vehiclePeriodUnitName: "ExtraDay"
                            },
                            {
                              unlimited: true,
                              quantity: 0,
                              distUnitName: "MILE",
                              vehiclePeriodUnitName: "ExtraHour"
                            }
                          ],
                          rateQualifier: {
                            rateCategory: "S",
                            corpDiscountNmbr: "",
                            arriveByFlight: false,
                            guaranteedInd: true,
                            promotionCode: "",
                            rateQualifier: "RCUE3",
                            ratePeriod: "WeekendDay",
                            rateAuthorizationCode: "N",
                            travelPurpose: "",
                            rateComments: {
                              rateComment: [
                                {
                                  name: "CommissionPercentage",
                                  value: "0"
                                },
                                {
                                  name: "CommissionAmount",
                                  value: "0"
                                },
                                {
                                  name: "GuaranteeNumberOfDays",
                                  value: "364"
                                },
                                {
                                  name: "GracePeriodNumberOfMinutes",
                                  value: "0"
                                },
                                {
                                  name: "ChargeForGracePeriodFlag",
                                  value: "N"
                                },
                                {
                                  name: "TotalDaysCharged",
                                  value: "3"
                                },
                                {
                                  name: "TotalExtraHours",
                                  value: "2"
                                },
                                {
                                  name: "MinimumAdvanceDays",
                                  value: "0"
                                },
                                {
                                  name: "MinimumAdvanceHours",
                                  value: "0"
                                }
                              ]
                            }
                          },
                          vehicleCharges: {
                            vehicleCharge: [
                              {
                                description: "TIME",
                                purpose: "E",
                                requiredInd: true,
                                includedInRate: true,
                                calculation: [
                                  {
                                    unitCharge: 3748,
                                    percentage: 0,
                                    quantity: 2,
                                    unitName: "WeekendDay"
                                  }
                                ],
                                amount: 7496,
                                taxInclusive: false,
                                prepayFlag: "N",
                                otaValue: 82,
                                rateType: "R",
                                internalCalculationMethod: "E",
                                outOfVoucherRate: 0
                              },
                              {
                                description: "TIME",
                                purpose: "X",
                                requiredInd: true,
                                includedInRate: true,
                                calculation: [
                                  {
                                    unitCharge: 5599,
                                    percentage: 0,
                                    quantity: 1,
                                    unitName: "ExtraDay"
                                  }
                                ],
                                amount: 5599,
                                taxInclusive: false,
                                prepayFlag: "N",
                                otaValue: 10,
                                rateType: "R",
                                internalCalculationMethod: "X",
                                outOfVoucherRate: 0
                              },
                              {
                                description: "TIME",
                                purpose: "R",
                                requiredInd: true,
                                includedInRate: true,
                                calculation: [
                                  {
                                    unitCharge: 637,
                                    percentage: 0,
                                    quantity: 2,
                                    unitName: "ExtraHour"
                                  }
                                ],
                                amount: 1274,
                                taxInclusive: false,
                                prepayFlag: "N",
                                otaValue: 11,
                                rateType: "R",
                                internalCalculationMethod: "R",
                                outOfVoucherRate: 0
                              }
                            ]
                          },
                          rateRestrictions: {
                            minimumAge: 18,
                            guaranteeReqInd: false,
                            cancellationPenaltyInd: false
                          },
                          totalCharge: [
                            {
                              rateTotalAmount: 14369,
                              estimatedTotalAmount: 22702,
                              currencyCode: "USD",
                              decimalPlaces: 2,
                              rateConvertInd: false
                            }
                          ]
                        }
                      ],
                      fees: {
                        fee: [
                          {
                            purpose: "VLF",
                            description: "VEHICLE LICENSE FEE",
                            calculation: [
                              {
                                unitName: "Day",
                                unitCharge: 132,
                                percentage: 0,
                                quantity: 4
                              }
                            ],
                            requiredInd: true,
                            includedInRate: false,
                            amount: 528,
                            taxInclusive: false,
                            prepayFlag: "N",
                            otaValue: 0,
                            rateType: "F",
                            overrideCode: "C",
                            urlAddress: "",
                            taxExemptFlag: "N",
                            taxExemptNumber: 0,
                            tierNumber: 1
                          },
                          {
                            purpose: "APCONRGFEE",
                            description: "APT CONC RECOV FEE",
                            calculation: [
                              {
                                unitName: "RentalPeriod",
                                unitCharge: 0,
                                percentage: 11.11,
                                quantity: 1
                              }
                            ],
                            requiredInd: true,
                            includedInRate: false,
                            amount: 1655,
                            taxInclusive: false,
                            prepayFlag: "N",
                            otaValue: 0,
                            rateType: "F",
                            overrideCode: "C",
                            urlAddress: "",
                            taxExemptFlag: "N",
                            taxExemptNumber: 0,
                            tierNumber: 1
                          },
                          {
                            purpose: "CFC1",
                            description: "CUST FACILITY CHRG",
                            calculation: [
                              {
                                unitName: "Day",
                                unitCharge: 750,
                                percentage: 0,
                                quantity: 4
                              }
                            ],
                            requiredInd: true,
                            includedInRate: false,
                            amount: 3000,
                            taxInclusive: false,
                            prepayFlag: "N",
                            otaValue: 0,
                            rateType: "F",
                            overrideCode: "C",
                            urlAddress: "",
                            taxExemptFlag: "N",
                            taxExemptNumber: 0,
                            tierNumber: 1
                          },
                          {
                            purpose: "TOURSM SRG",
                            description: "TOURISM SURCHARGE",
                            calculation: [
                              {
                                unitName: "RentalPeriod",
                                unitCharge: 0,
                                percentage: 3.5,
                                quantity: 1
                              }
                            ],
                            requiredInd: true,
                            includedInRate: false,
                            amount: 1495,
                            taxInclusive: false,
                            prepayFlag: "N",
                            otaValue: 0,
                            rateType: "T",
                            overrideCode: "C",
                            urlAddress: "",
                            taxExemptFlag: "N",
                            taxExemptNumber: 0,
                            tierNumber: 1
                          },
                          {
                            purpose: "STATE TAX",
                            description: "State Tax",
                            calculation: [
                              {
                                unitName: "RentalPeriod",
                                unitCharge: 0,
                                percentage: 10,
                                quantity: 1
                              }
                            ],
                            requiredInd: true,
                            includedInRate: false,
                            amount: 1655,
                            taxInclusive: false,
                            prepayFlag: "N",
                            otaValue: 0,
                            rateType: "T",
                            overrideCode: "C",
                            urlAddress: "",
                            taxExemptFlag: "N",
                            taxExemptNumber: 0,
                            tierNumber: 1
                          }
                        ]
                      },
                      tpaextensions: {
                        sourceCode: "DOLLAR.COM",
                        prepayFlag: "N",
                        minimumLengthOfRent: 51,
                        maximumLengthOfRent: 98,
                        daysBeforeExtraDayCharge: 2,
                        promotionApplied: "N",
                        benefitApplied: "N",
                        opaqueFlag: "N",
                        iata: "",
                        programID: "",
                        customerZipCode: "",
                        numberOfAdvanceDays: 95,
                        defaultCurrency: "USD",
                        recalculationCurrency: "USD",
                        conversionRate: 0,
                        retainConversionRateFlag: "N",
                        customerAge: 0,
                        upgradeAllowedCode: "A",
                        voucherRequiredAtReservationFlag: "N",
                        outOfVoucherStartDate: "2019-10-08T15:00:00",
                        bundleFlag: "N",
                        msrp: 0,
                        milesDriven: 0,
                        cityCode: "",
                        stateCode: "",
                        countryCode: "",
                        pseudoCityCode: "",
                        deliveryDistance: 0,
                        collectionDistance: 0,
                        formOfPayment: "",
                        pointsPurchaseFlag: "N",
                        ancillariesPurchase: [],
                        ancillariesRestrict: [],
                        accountSpecificRateFlag: "N",
                        displayRateOnShopFlag: "Y",
                        upgradeRank: 0,
                        freeUpgradeFlag: "N",
                        guaranteeNumberOfDays: 364
                      },
                      vendor: {
                        ID: "ZR"
                      },
                      status: "AVAILABLE"
                    },
                    vehAvailInfo: {
                      pricedCoverages: {
                        pricedCoverage: []
                      },
                      paymentRules: {
                        paymentRule: []
                      }
                    }
                  },
                  {
                    vehAvailCore: {
                      pricedEquips: {
                        pricedEquip: []
                      },
                      vehicle: {
                        vehType: {
                          doorCount: "4"
                        },
                        code: "SDAR",
                        codeContext: "SIPP",
                        passengerQuantity: "5",
                        vehMakeModel: {
                          name: "MITSUBISHI GALANT"
                        }
                      },
                      rentalRate: [
                        {
                          rateDistance: [
                            {
                              unlimited: true,
                              quantity: 0,
                              distUnitName: "MILE",
                              vehiclePeriodUnitName: "WeekendDay"
                            },
                            {
                              unlimited: true,
                              quantity: 0,
                              distUnitName: "MILE",
                              vehiclePeriodUnitName: "ExtraDay"
                            },
                            {
                              unlimited: true,
                              quantity: 0,
                              distUnitName: "MILE",
                              vehiclePeriodUnitName: "ExtraHour"
                            }
                          ],
                          rateQualifier: {
                            rateCategory: "S",
                            corpDiscountNmbr: "",
                            arriveByFlight: false,
                            guaranteedInd: true,
                            promotionCode: "",
                            rateQualifier: "RCUE3",
                            ratePeriod: "WeekendDay",
                            rateAuthorizationCode: "N",
                            travelPurpose: "",
                            rateComments: {
                              rateComment: [
                                {
                                  name: "CommissionPercentage",
                                  value: "0"
                                },
                                {
                                  name: "CommissionAmount",
                                  value: "0"
                                },
                                {
                                  name: "GuaranteeNumberOfDays",
                                  value: "364"
                                },
                                {
                                  name: "GracePeriodNumberOfMinutes",
                                  value: "0"
                                },
                                {
                                  name: "ChargeForGracePeriodFlag",
                                  value: "N"
                                },
                                {
                                  name: "TotalDaysCharged",
                                  value: "3"
                                },
                                {
                                  name: "TotalExtraHours",
                                  value: "2"
                                },
                                {
                                  name: "MinimumAdvanceDays",
                                  value: "0"
                                },
                                {
                                  name: "MinimumAdvanceHours",
                                  value: "0"
                                }
                              ]
                            }
                          },
                          vehicleCharges: {
                            vehicleCharge: [
                              {
                                description: "TIME",
                                purpose: "E",
                                requiredInd: true,
                                includedInRate: true,
                                calculation: [
                                  {
                                    unitCharge: 3748,
                                    percentage: 0,
                                    quantity: 2,
                                    unitName: "WeekendDay"
                                  }
                                ],
                                amount: 7496,
                                taxInclusive: false,
                                prepayFlag: "N",
                                otaValue: 82,
                                rateType: "R",
                                internalCalculationMethod: "E",
                                outOfVoucherRate: 0
                              },
                              {
                                description: "TIME",
                                purpose: "X",
                                requiredInd: true,
                                includedInRate: true,
                                calculation: [
                                  {
                                    unitCharge: 5599,
                                    percentage: 0,
                                    quantity: 1,
                                    unitName: "ExtraDay"
                                  }
                                ],
                                amount: 5599,
                                taxInclusive: false,
                                prepayFlag: "N",
                                otaValue: 10,
                                rateType: "R",
                                internalCalculationMethod: "X",
                                outOfVoucherRate: 0
                              },
                              {
                                description: "TIME",
                                purpose: "R",
                                requiredInd: true,
                                includedInRate: true,
                                calculation: [
                                  {
                                    unitCharge: 637,
                                    percentage: 0,
                                    quantity: 2,
                                    unitName: "ExtraHour"
                                  }
                                ],
                                amount: 1274,
                                taxInclusive: false,
                                prepayFlag: "N",
                                otaValue: 11,
                                rateType: "R",
                                internalCalculationMethod: "R",
                                outOfVoucherRate: 0
                              }
                            ]
                          },
                          rateRestrictions: {
                            minimumAge: 18,
                            guaranteeReqInd: false,
                            cancellationPenaltyInd: false
                          },
                          totalCharge: [
                            {
                              rateTotalAmount: 14369,
                              estimatedTotalAmount: 22702,
                              currencyCode: "USD",
                              decimalPlaces: 2,
                              rateConvertInd: false
                            }
                          ]
                        }
                      ],
                      fees: {
                        fee: [
                          {
                            purpose: "VLF",
                            description: "VEHICLE LICENSE FEE",
                            calculation: [
                              {
                                unitName: "Day",
                                unitCharge: 132,
                                percentage: 0,
                                quantity: 4
                              }
                            ],
                            requiredInd: true,
                            includedInRate: false,
                            amount: 528,
                            taxInclusive: false,
                            prepayFlag: "N",
                            otaValue: 0,
                            rateType: "F",
                            overrideCode: "C",
                            urlAddress: "",
                            taxExemptFlag: "N",
                            taxExemptNumber: 0,
                            tierNumber: 1
                          },
                          {
                            purpose: "APCONRGFEE",
                            description: "APT CONC RECOV FEE",
                            calculation: [
                              {
                                unitName: "RentalPeriod",
                                unitCharge: 0,
                                percentage: 11.11,
                                quantity: 1
                              }
                            ],
                            requiredInd: true,
                            includedInRate: false,
                            amount: 1655,
                            taxInclusive: false,
                            prepayFlag: "N",
                            otaValue: 0,
                            rateType: "F",
                            overrideCode: "C",
                            urlAddress: "",
                            taxExemptFlag: "N",
                            taxExemptNumber: 0,
                            tierNumber: 1
                          },
                          {
                            purpose: "CFC1",
                            description: "CUST FACILITY CHRG",
                            calculation: [
                              {
                                unitName: "Day",
                                unitCharge: 750,
                                percentage: 0,
                                quantity: 4
                              }
                            ],
                            requiredInd: true,
                            includedInRate: false,
                            amount: 3000,
                            taxInclusive: false,
                            prepayFlag: "N",
                            otaValue: 0,
                            rateType: "F",
                            overrideCode: "C",
                            urlAddress: "",
                            taxExemptFlag: "N",
                            taxExemptNumber: 0,
                            tierNumber: 1
                          },
                          {
                            purpose: "TOURSM SRG",
                            description: "TOURISM SURCHARGE",
                            calculation: [
                              {
                                unitName: "RentalPeriod",
                                unitCharge: 0,
                                percentage: 3.5,
                                quantity: 1
                              }
                            ],
                            requiredInd: true,
                            includedInRate: false,
                            amount: 1495,
                            taxInclusive: false,
                            prepayFlag: "N",
                            otaValue: 0,
                            rateType: "T",
                            overrideCode: "C",
                            urlAddress: "",
                            taxExemptFlag: "N",
                            taxExemptNumber: 0,
                            tierNumber: 1
                          },
                          {
                            purpose: "STATE TAX",
                            description: "State Tax",
                            calculation: [
                              {
                                unitName: "RentalPeriod",
                                unitCharge: 0,
                                percentage: 10,
                                quantity: 1
                              }
                            ],
                            requiredInd: true,
                            includedInRate: false,
                            amount: 1655,
                            taxInclusive: false,
                            prepayFlag: "N",
                            otaValue: 0,
                            rateType: "T",
                            overrideCode: "C",
                            urlAddress: "",
                            taxExemptFlag: "N",
                            taxExemptNumber: 0,
                            tierNumber: 1
                          }
                        ]
                      },
                      tpaextensions: {
                        sourceCode: "DOLLAR.COM",
                        prepayFlag: "N",
                        minimumLengthOfRent: 51,
                        maximumLengthOfRent: 98,
                        daysBeforeExtraDayCharge: 2,
                        promotionApplied: "N",
                        benefitApplied: "N",
                        opaqueFlag: "N",
                        iata: "",
                        programID: "",
                        customerZipCode: "",
                        numberOfAdvanceDays: 95,
                        defaultCurrency: "USD",
                        recalculationCurrency: "USD",
                        conversionRate: 0,
                        retainConversionRateFlag: "N",
                        customerAge: 0,
                        upgradeAllowedCode: "A",
                        voucherRequiredAtReservationFlag: "N",
                        outOfVoucherStartDate: "2019-10-08T15:00:00",
                        bundleFlag: "N",
                        msrp: 0,
                        milesDriven: 0,
                        cityCode: "",
                        stateCode: "",
                        countryCode: "",
                        pseudoCityCode: "",
                        deliveryDistance: 0,
                        collectionDistance: 0,
                        formOfPayment: "",
                        pointsPurchaseFlag: "N",
                        ancillariesPurchase: [],
                        ancillariesRestrict: [],
                        accountSpecificRateFlag: "N",
                        displayRateOnShopFlag: "Y",
                        upgradeRank: 0,
                        freeUpgradeFlag: "N",
                        guaranteeNumberOfDays: 364
                      },
                      vendor: {
                        ID: "ZR"
                      },
                      status: "AVAILABLE"
                    },
                    vehAvailInfo: {
                      pricedCoverages: {
                        pricedCoverage: []
                      },
                      paymentRules: {
                        paymentRule: []
                      }
                    }
                  },
                  {
                    vehAvailCore: {
                      pricedEquips: {
                        pricedEquip: []
                      },
                      vehicle: {
                        vehType: {
                          doorCount: "2"
                        },
                        code: "FCAR",
                        codeContext: "SIPP",
                        passengerQuantity: "5",
                        vehMakeModel: {
                          name: "DODGE CHARGER"
                        }
                      },
                      rentalRate: [
                        {
                          rateDistance: [
                            {
                              unlimited: true,
                              quantity: 0,
                              distUnitName: "MILE",
                              vehiclePeriodUnitName: "WeekendDay"
                            },
                            {
                              unlimited: true,
                              quantity: 0,
                              distUnitName: "MILE",
                              vehiclePeriodUnitName: "ExtraDay"
                            },
                            {
                              unlimited: true,
                              quantity: 0,
                              distUnitName: "MILE",
                              vehiclePeriodUnitName: "ExtraHour"
                            }
                          ],
                          rateQualifier: {
                            rateCategory: "S",
                            corpDiscountNmbr: "",
                            arriveByFlight: false,
                            guaranteedInd: true,
                            promotionCode: "",
                            rateQualifier: "RCUE3",
                            ratePeriod: "WeekendDay",
                            rateAuthorizationCode: "N",
                            travelPurpose: "",
                            rateComments: {
                              rateComment: [
                                {
                                  name: "CommissionPercentage",
                                  value: "0"
                                },
                                {
                                  name: "CommissionAmount",
                                  value: "0"
                                },
                                {
                                  name: "GuaranteeNumberOfDays",
                                  value: "364"
                                },
                                {
                                  name: "GracePeriodNumberOfMinutes",
                                  value: "0"
                                },
                                {
                                  name: "ChargeForGracePeriodFlag",
                                  value: "N"
                                },
                                {
                                  name: "TotalDaysCharged",
                                  value: "3"
                                },
                                {
                                  name: "TotalExtraHours",
                                  value: "2"
                                },
                                {
                                  name: "MinimumAdvanceDays",
                                  value: "0"
                                },
                                {
                                  name: "MinimumAdvanceHours",
                                  value: "0"
                                }
                              ]
                            }
                          },
                          vehicleCharges: {
                            vehicleCharge: [
                              {
                                description: "TIME",
                                purpose: "E",
                                requiredInd: true,
                                includedInRate: true,
                                calculation: [
                                  {
                                    unitCharge: 3773,
                                    percentage: 0,
                                    quantity: 2,
                                    unitName: "WeekendDay"
                                  }
                                ],
                                amount: 7546,
                                taxInclusive: false,
                                prepayFlag: "N",
                                otaValue: 82,
                                rateType: "R",
                                internalCalculationMethod: "E",
                                outOfVoucherRate: 0
                              },
                              {
                                description: "TIME",
                                purpose: "X",
                                requiredInd: true,
                                includedInRate: true,
                                calculation: [
                                  {
                                    unitCharge: 5699,
                                    percentage: 0,
                                    quantity: 1,
                                    unitName: "ExtraDay"
                                  }
                                ],
                                amount: 5699,
                                taxInclusive: false,
                                prepayFlag: "N",
                                otaValue: 10,
                                rateType: "R",
                                internalCalculationMethod: "X",
                                outOfVoucherRate: 0
                              },
                              {
                                description: "TIME",
                                purpose: "R",
                                requiredInd: true,
                                includedInRate: true,
                                calculation: [
                                  {
                                    unitCharge: 641,
                                    percentage: 0,
                                    quantity: 2,
                                    unitName: "ExtraHour"
                                  }
                                ],
                                amount: 1282,
                                taxInclusive: false,
                                prepayFlag: "N",
                                otaValue: 11,
                                rateType: "R",
                                internalCalculationMethod: "R",
                                outOfVoucherRate: 0
                              }
                            ]
                          },
                          rateRestrictions: {
                            minimumAge: 18,
                            guaranteeReqInd: false,
                            cancellationPenaltyInd: false
                          },
                          totalCharge: [
                            {
                              rateTotalAmount: 14527,
                              estimatedTotalAmount: 22780,
                              currencyCode: "USD",
                              decimalPlaces: 2,
                              rateConvertInd: false
                            }
                          ]
                        }
                      ],
                      fees: {
                        fee: [
                          {
                            purpose: "VLF",
                            description: "VEHICLE LICENSE FEE",
                            calculation: [
                              {
                                unitName: "Day",
                                unitCharge: 105,
                                percentage: 0,
                                quantity: 4
                              }
                            ],
                            requiredInd: true,
                            includedInRate: false,
                            amount: 420,
                            taxInclusive: false,
                            prepayFlag: "N",
                            otaValue: 0,
                            rateType: "F",
                            overrideCode: "C",
                            urlAddress: "",
                            taxExemptFlag: "N",
                            taxExemptNumber: 0,
                            tierNumber: 1
                          },
                          {
                            purpose: "APCONRGFEE",
                            description: "APT CONC RECOV FEE",
                            calculation: [
                              {
                                unitName: "RentalPeriod",
                                unitCharge: 0,
                                percentage: 11.11,
                                quantity: 1
                              }
                            ],
                            requiredInd: true,
                            includedInRate: false,
                            amount: 1661,
                            taxInclusive: false,
                            prepayFlag: "N",
                            otaValue: 0,
                            rateType: "F",
                            overrideCode: "C",
                            urlAddress: "",
                            taxExemptFlag: "N",
                            taxExemptNumber: 0,
                            tierNumber: 1
                          },
                          {
                            purpose: "CFC1",
                            description: "CUST FACILITY CHRG",
                            calculation: [
                              {
                                unitName: "Day",
                                unitCharge: 750,
                                percentage: 0,
                                quantity: 4
                              }
                            ],
                            requiredInd: true,
                            includedInRate: false,
                            amount: 3000,
                            taxInclusive: false,
                            prepayFlag: "N",
                            otaValue: 0,
                            rateType: "F",
                            overrideCode: "C",
                            urlAddress: "",
                            taxExemptFlag: "N",
                            taxExemptNumber: 0,
                            tierNumber: 1
                          },
                          {
                            purpose: "TOURSM SRG",
                            description: "TOURISM SURCHARGE",
                            calculation: [
                              {
                                unitName: "RentalPeriod",
                                unitCharge: 0,
                                percentage: 3.5,
                                quantity: 1
                              }
                            ],
                            requiredInd: true,
                            includedInRate: false,
                            amount: 1511,
                            taxInclusive: false,
                            prepayFlag: "N",
                            otaValue: 0,
                            rateType: "T",
                            overrideCode: "C",
                            urlAddress: "",
                            taxExemptFlag: "N",
                            taxExemptNumber: 0,
                            tierNumber: 1
                          },
                          {
                            purpose: "STATE TAX",
                            description: "State Tax",
                            calculation: [
                              {
                                unitName: "RentalPeriod",
                                unitCharge: 0,
                                percentage: 10,
                                quantity: 1
                              }
                            ],
                            requiredInd: true,
                            includedInRate: false,
                            amount: 1661,
                            taxInclusive: false,
                            prepayFlag: "N",
                            otaValue: 0,
                            rateType: "T",
                            overrideCode: "C",
                            urlAddress: "",
                            taxExemptFlag: "N",
                            taxExemptNumber: 0,
                            tierNumber: 1
                          }
                        ]
                      },
                      tpaextensions: {
                        sourceCode: "DOLLAR.COM",
                        prepayFlag: "N",
                        minimumLengthOfRent: 51,
                        maximumLengthOfRent: 98,
                        daysBeforeExtraDayCharge: 2,
                        promotionApplied: "N",
                        benefitApplied: "N",
                        opaqueFlag: "N",
                        iata: "",
                        programID: "",
                        customerZipCode: "",
                        numberOfAdvanceDays: 95,
                        defaultCurrency: "USD",
                        recalculationCurrency: "USD",
                        conversionRate: 0,
                        retainConversionRateFlag: "N",
                        customerAge: 0,
                        upgradeAllowedCode: "A",
                        voucherRequiredAtReservationFlag: "N",
                        outOfVoucherStartDate: "2019-10-08T15:00:00",
                        bundleFlag: "N",
                        msrp: 0,
                        milesDriven: 0,
                        cityCode: "",
                        stateCode: "",
                        countryCode: "",
                        pseudoCityCode: "",
                        deliveryDistance: 0,
                        collectionDistance: 0,
                        formOfPayment: "",
                        pointsPurchaseFlag: "N",
                        ancillariesPurchase: [],
                        ancillariesRestrict: [],
                        accountSpecificRateFlag: "N",
                        displayRateOnShopFlag: "Y",
                        upgradeRank: 0,
                        freeUpgradeFlag: "N",
                        guaranteeNumberOfDays: 364
                      },
                      vendor: {
                        ID: "ZR"
                      },
                      status: "AVAILABLE"
                    },
                    vehAvailInfo: {
                      pricedCoverages: {
                        pricedCoverage: []
                      },
                      paymentRules: {
                        paymentRule: []
                      }
                    }
                  },
                  {
                    vehAvailCore: {
                      pricedEquips: {
                        pricedEquip: []
                      },
                      vehicle: {
                        vehType: {
                          doorCount: "4"
                        },
                        code: "FDAR",
                        codeContext: "SIPP",
                        passengerQuantity: "5",
                        vehMakeModel: {
                          name: "DODGE CHARGER"
                        }
                      },
                      rentalRate: [
                        {
                          rateDistance: [
                            {
                              unlimited: true,
                              quantity: 0,
                              distUnitName: "MILE",
                              vehiclePeriodUnitName: "WeekendDay"
                            },
                            {
                              unlimited: true,
                              quantity: 0,
                              distUnitName: "MILE",
                              vehiclePeriodUnitName: "ExtraDay"
                            },
                            {
                              unlimited: true,
                              quantity: 0,
                              distUnitName: "MILE",
                              vehiclePeriodUnitName: "ExtraHour"
                            }
                          ],
                          rateQualifier: {
                            rateCategory: "S",
                            corpDiscountNmbr: "",
                            arriveByFlight: false,
                            guaranteedInd: true,
                            promotionCode: "",
                            rateQualifier: "RCUE3",
                            ratePeriod: "WeekendDay",
                            rateAuthorizationCode: "N",
                            travelPurpose: "",
                            rateComments: {
                              rateComment: [
                                {
                                  name: "CommissionPercentage",
                                  value: "0"
                                },
                                {
                                  name: "CommissionAmount",
                                  value: "0"
                                },
                                {
                                  name: "GuaranteeNumberOfDays",
                                  value: "364"
                                },
                                {
                                  name: "GracePeriodNumberOfMinutes",
                                  value: "0"
                                },
                                {
                                  name: "ChargeForGracePeriodFlag",
                                  value: "N"
                                },
                                {
                                  name: "TotalDaysCharged",
                                  value: "3"
                                },
                                {
                                  name: "TotalExtraHours",
                                  value: "2"
                                },
                                {
                                  name: "MinimumAdvanceDays",
                                  value: "0"
                                },
                                {
                                  name: "MinimumAdvanceHours",
                                  value: "0"
                                }
                              ]
                            }
                          },
                          vehicleCharges: {
                            vehicleCharge: [
                              {
                                description: "TIME",
                                purpose: "E",
                                requiredInd: true,
                                includedInRate: true,
                                calculation: [
                                  {
                                    unitCharge: 3773,
                                    percentage: 0,
                                    quantity: 2,
                                    unitName: "WeekendDay"
                                  }
                                ],
                                amount: 7546,
                                taxInclusive: false,
                                prepayFlag: "N",
                                otaValue: 82,
                                rateType: "R",
                                internalCalculationMethod: "E",
                                outOfVoucherRate: 0
                              },
                              {
                                description: "TIME",
                                purpose: "X",
                                requiredInd: true,
                                includedInRate: true,
                                calculation: [
                                  {
                                    unitCharge: 5699,
                                    percentage: 0,
                                    quantity: 1,
                                    unitName: "ExtraDay"
                                  }
                                ],
                                amount: 5699,
                                taxInclusive: false,
                                prepayFlag: "N",
                                otaValue: 10,
                                rateType: "R",
                                internalCalculationMethod: "X",
                                outOfVoucherRate: 0
                              },
                              {
                                description: "TIME",
                                purpose: "R",
                                requiredInd: true,
                                includedInRate: true,
                                calculation: [
                                  {
                                    unitCharge: 641,
                                    percentage: 0,
                                    quantity: 2,
                                    unitName: "ExtraHour"
                                  }
                                ],
                                amount: 1282,
                                taxInclusive: false,
                                prepayFlag: "N",
                                otaValue: 11,
                                rateType: "R",
                                internalCalculationMethod: "R",
                                outOfVoucherRate: 0
                              }
                            ]
                          },
                          rateRestrictions: {
                            minimumAge: 18,
                            guaranteeReqInd: false,
                            cancellationPenaltyInd: false
                          },
                          totalCharge: [
                            {
                              rateTotalAmount: 14527,
                              estimatedTotalAmount: 22780,
                              currencyCode: "USD",
                              decimalPlaces: 2,
                              rateConvertInd: false
                            }
                          ]
                        }
                      ],
                      fees: {
                        fee: [
                          {
                            purpose: "VLF",
                            description: "VEHICLE LICENSE FEE",
                            calculation: [
                              {
                                unitName: "Day",
                                unitCharge: 105,
                                percentage: 0,
                                quantity: 4
                              }
                            ],
                            requiredInd: true,
                            includedInRate: false,
                            amount: 420,
                            taxInclusive: false,
                            prepayFlag: "N",
                            otaValue: 0,
                            rateType: "F",
                            overrideCode: "C",
                            urlAddress: "",
                            taxExemptFlag: "N",
                            taxExemptNumber: 0,
                            tierNumber: 1
                          },
                          {
                            purpose: "APCONRGFEE",
                            description: "APT CONC RECOV FEE",
                            calculation: [
                              {
                                unitName: "RentalPeriod",
                                unitCharge: 0,
                                percentage: 11.11,
                                quantity: 1
                              }
                            ],
                            requiredInd: true,
                            includedInRate: false,
                            amount: 1661,
                            taxInclusive: false,
                            prepayFlag: "N",
                            otaValue: 0,
                            rateType: "F",
                            overrideCode: "C",
                            urlAddress: "",
                            taxExemptFlag: "N",
                            taxExemptNumber: 0,
                            tierNumber: 1
                          },
                          {
                            purpose: "CFC1",
                            description: "CUST FACILITY CHRG",
                            calculation: [
                              {
                                unitName: "Day",
                                unitCharge: 750,
                                percentage: 0,
                                quantity: 4
                              }
                            ],
                            requiredInd: true,
                            includedInRate: false,
                            amount: 3000,
                            taxInclusive: false,
                            prepayFlag: "N",
                            otaValue: 0,
                            rateType: "F",
                            overrideCode: "C",
                            urlAddress: "",
                            taxExemptFlag: "N",
                            taxExemptNumber: 0,
                            tierNumber: 1
                          },
                          {
                            purpose: "TOURSM SRG",
                            description: "TOURISM SURCHARGE",
                            calculation: [
                              {
                                unitName: "RentalPeriod",
                                unitCharge: 0,
                                percentage: 3.5,
                                quantity: 1
                              }
                            ],
                            requiredInd: true,
                            includedInRate: false,
                            amount: 1511,
                            taxInclusive: false,
                            prepayFlag: "N",
                            otaValue: 0,
                            rateType: "T",
                            overrideCode: "C",
                            urlAddress: "",
                            taxExemptFlag: "N",
                            taxExemptNumber: 0,
                            tierNumber: 1
                          },
                          {
                            purpose: "STATE TAX",
                            description: "State Tax",
                            calculation: [
                              {
                                unitName: "RentalPeriod",
                                unitCharge: 0,
                                percentage: 10,
                                quantity: 1
                              }
                            ],
                            requiredInd: true,
                            includedInRate: false,
                            amount: 1661,
                            taxInclusive: false,
                            prepayFlag: "N",
                            otaValue: 0,
                            rateType: "T",
                            overrideCode: "C",
                            urlAddress: "",
                            taxExemptFlag: "N",
                            taxExemptNumber: 0,
                            tierNumber: 1
                          }
                        ]
                      },
                      tpaextensions: {
                        sourceCode: "DOLLAR.COM",
                        prepayFlag: "N",
                        minimumLengthOfRent: 51,
                        maximumLengthOfRent: 98,
                        daysBeforeExtraDayCharge: 2,
                        promotionApplied: "N",
                        benefitApplied: "N",
                        opaqueFlag: "N",
                        iata: "",
                        programID: "",
                        customerZipCode: "",
                        numberOfAdvanceDays: 95,
                        defaultCurrency: "USD",
                        recalculationCurrency: "USD",
                        conversionRate: 0,
                        retainConversionRateFlag: "N",
                        customerAge: 0,
                        upgradeAllowedCode: "A",
                        voucherRequiredAtReservationFlag: "N",
                        outOfVoucherStartDate: "2019-10-08T15:00:00",
                        bundleFlag: "N",
                        msrp: 0,
                        milesDriven: 0,
                        cityCode: "",
                        stateCode: "",
                        countryCode: "",
                        pseudoCityCode: "",
                        deliveryDistance: 0,
                        collectionDistance: 0,
                        formOfPayment: "",
                        pointsPurchaseFlag: "N",
                        ancillariesPurchase: [],
                        ancillariesRestrict: [],
                        accountSpecificRateFlag: "N",
                        displayRateOnShopFlag: "Y",
                        upgradeRank: 0,
                        freeUpgradeFlag: "N",
                        guaranteeNumberOfDays: 364
                      },
                      vendor: {
                        ID: "ZR"
                      },
                      status: "AVAILABLE"
                    },
                    vehAvailInfo: {
                      pricedCoverages: {
                        pricedCoverage: []
                      },
                      paymentRules: {
                        paymentRule: []
                      }
                    }
                  },
                  {
                    vehAvailCore: {
                      pricedEquips: {
                        pricedEquip: []
                      },
                      vehicle: {
                        vehType: {
                          doorCount: "4"
                        },
                        code: "SFAR",
                        codeContext: "SIPP",
                        passengerQuantity: "5",
                        vehMakeModel: {
                          name: "JEEP GRAND CHEROKEE"
                        }
                      },
                      rentalRate: [
                        {
                          rateDistance: [
                            {
                              unlimited: true,
                              quantity: 0,
                              distUnitName: "MILE",
                              vehiclePeriodUnitName: "WeekendDay"
                            },
                            {
                              unlimited: true,
                              quantity: 0,
                              distUnitName: "MILE",
                              vehiclePeriodUnitName: "ExtraDay"
                            },
                            {
                              unlimited: true,
                              quantity: 0,
                              distUnitName: "MILE",
                              vehiclePeriodUnitName: "ExtraHour"
                            }
                          ],
                          rateQualifier: {
                            rateCategory: "S",
                            corpDiscountNmbr: "",
                            arriveByFlight: false,
                            guaranteedInd: true,
                            promotionCode: "",
                            rateQualifier: "RCUE3",
                            ratePeriod: "WeekendDay",
                            rateAuthorizationCode: "N",
                            travelPurpose: "",
                            rateComments: {
                              rateComment: [
                                {
                                  name: "CommissionPercentage",
                                  value: "0"
                                },
                                {
                                  name: "CommissionAmount",
                                  value: "0"
                                },
                                {
                                  name: "GuaranteeNumberOfDays",
                                  value: "364"
                                },
                                {
                                  name: "GracePeriodNumberOfMinutes",
                                  value: "0"
                                },
                                {
                                  name: "ChargeForGracePeriodFlag",
                                  value: "N"
                                },
                                {
                                  name: "TotalDaysCharged",
                                  value: "3"
                                },
                                {
                                  name: "TotalExtraHours",
                                  value: "2"
                                },
                                {
                                  name: "MinimumAdvanceDays",
                                  value: "0"
                                },
                                {
                                  name: "MinimumAdvanceHours",
                                  value: "0"
                                }
                              ]
                            }
                          },
                          vehicleCharges: {
                            vehicleCharge: [
                              {
                                description: "TIME",
                                purpose: "E",
                                requiredInd: true,
                                includedInRate: true,
                                calculation: [
                                  {
                                    unitCharge: 3900,
                                    percentage: 0,
                                    quantity: 2,
                                    unitName: "WeekendDay"
                                  }
                                ],
                                amount: 7800,
                                taxInclusive: false,
                                prepayFlag: "N",
                                otaValue: 82,
                                rateType: "R",
                                internalCalculationMethod: "E",
                                outOfVoucherRate: 0
                              },
                              {
                                description: "TIME",
                                purpose: "X",
                                requiredInd: true,
                                includedInRate: true,
                                calculation: [
                                  {
                                    unitCharge: 5899,
                                    percentage: 0,
                                    quantity: 1,
                                    unitName: "ExtraDay"
                                  }
                                ],
                                amount: 5899,
                                taxInclusive: false,
                                prepayFlag: "N",
                                otaValue: 10,
                                rateType: "R",
                                internalCalculationMethod: "X",
                                outOfVoucherRate: 0
                              },
                              {
                                description: "TIME",
                                purpose: "R",
                                requiredInd: true,
                                includedInRate: true,
                                calculation: [
                                  {
                                    unitCharge: 663,
                                    percentage: 0,
                                    quantity: 2,
                                    unitName: "ExtraHour"
                                  }
                                ],
                                amount: 1326,
                                taxInclusive: false,
                                prepayFlag: "N",
                                otaValue: 11,
                                rateType: "R",
                                internalCalculationMethod: "R",
                                outOfVoucherRate: 0
                              }
                            ]
                          },
                          rateRestrictions: {
                            minimumAge: 18,
                            guaranteeReqInd: true,
                            cancellationPenaltyInd: false
                          },
                          totalCharge: [
                            {
                              rateTotalAmount: 15025,
                              estimatedTotalAmount: 23724,
                              currencyCode: "USD",
                              decimalPlaces: 2,
                              rateConvertInd: false
                            }
                          ]
                        }
                      ],
                      fees: {
                        fee: [
                          {
                            purpose: "VLF",
                            description: "VEHICLE LICENSE FEE",
                            calculation: [
                              {
                                unitName: "Day",
                                unitCharge: 163,
                                percentage: 0,
                                quantity: 4
                              }
                            ],
                            requiredInd: true,
                            includedInRate: false,
                            amount: 652,
                            taxInclusive: false,
                            prepayFlag: "N",
                            otaValue: 0,
                            rateType: "F",
                            overrideCode: "C",
                            urlAddress: "",
                            taxExemptFlag: "N",
                            taxExemptNumber: 0,
                            tierNumber: 1
                          },
                          {
                            purpose: "APCONRGFEE",
                            description: "APT CONC RECOV FEE",
                            calculation: [
                              {
                                unitName: "RentalPeriod",
                                unitCharge: 0,
                                percentage: 11.11,
                                quantity: 1
                              }
                            ],
                            requiredInd: true,
                            includedInRate: false,
                            amount: 1742,
                            taxInclusive: false,
                            prepayFlag: "N",
                            otaValue: 0,
                            rateType: "F",
                            overrideCode: "C",
                            urlAddress: "",
                            taxExemptFlag: "N",
                            taxExemptNumber: 0,
                            tierNumber: 1
                          },
                          {
                            purpose: "CFC1",
                            description: "CUST FACILITY CHRG",
                            calculation: [
                              {
                                unitName: "Day",
                                unitCharge: 750,
                                percentage: 0,
                                quantity: 4
                              }
                            ],
                            requiredInd: true,
                            includedInRate: false,
                            amount: 3000,
                            taxInclusive: false,
                            prepayFlag: "N",
                            otaValue: 0,
                            rateType: "F",
                            overrideCode: "C",
                            urlAddress: "",
                            taxExemptFlag: "N",
                            taxExemptNumber: 0,
                            tierNumber: 1
                          },
                          {
                            purpose: "TOURSM SRG",
                            description: "TOURISM SURCHARGE",
                            calculation: [
                              {
                                unitName: "RentalPeriod",
                                unitCharge: 0,
                                percentage: 3.5,
                                quantity: 1
                              }
                            ],
                            requiredInd: true,
                            includedInRate: false,
                            amount: 1563,
                            taxInclusive: false,
                            prepayFlag: "N",
                            otaValue: 0,
                            rateType: "T",
                            overrideCode: "C",
                            urlAddress: "",
                            taxExemptFlag: "N",
                            taxExemptNumber: 0,
                            tierNumber: 1
                          },
                          {
                            purpose: "STATE TAX",
                            description: "State Tax",
                            calculation: [
                              {
                                unitName: "RentalPeriod",
                                unitCharge: 0,
                                percentage: 10,
                                quantity: 1
                              }
                            ],
                            requiredInd: true,
                            includedInRate: false,
                            amount: 1742,
                            taxInclusive: false,
                            prepayFlag: "N",
                            otaValue: 0,
                            rateType: "T",
                            overrideCode: "C",
                            urlAddress: "",
                            taxExemptFlag: "N",
                            taxExemptNumber: 0,
                            tierNumber: 1
                          }
                        ]
                      },
                      tpaextensions: {
                        sourceCode: "DOLLAR.COM",
                        prepayFlag: "N",
                        minimumLengthOfRent: 51,
                        maximumLengthOfRent: 98,
                        daysBeforeExtraDayCharge: 2,
                        promotionApplied: "N",
                        benefitApplied: "N",
                        opaqueFlag: "N",
                        iata: "",
                        programID: "",
                        customerZipCode: "",
                        numberOfAdvanceDays: 95,
                        defaultCurrency: "USD",
                        recalculationCurrency: "USD",
                        conversionRate: 0,
                        retainConversionRateFlag: "N",
                        customerAge: 0,
                        upgradeAllowedCode: "A",
                        voucherRequiredAtReservationFlag: "N",
                        outOfVoucherStartDate: "2019-10-08T15:00:00",
                        bundleFlag: "N",
                        msrp: 0,
                        milesDriven: 0,
                        cityCode: "",
                        stateCode: "",
                        countryCode: "",
                        pseudoCityCode: "",
                        deliveryDistance: 0,
                        collectionDistance: 0,
                        formOfPayment: "",
                        pointsPurchaseFlag: "N",
                        ancillariesPurchase: [],
                        ancillariesRestrict: [],
                        accountSpecificRateFlag: "N",
                        displayRateOnShopFlag: "Y",
                        upgradeRank: 0,
                        freeUpgradeFlag: "N",
                        guaranteeNumberOfDays: 364
                      },
                      vendor: {
                        ID: "ZR"
                      },
                      status: "AVAILABLE"
                    },
                    vehAvailInfo: {
                      pricedCoverages: {
                        pricedCoverage: []
                      },
                      paymentRules: {
                        paymentRule: []
                      }
                    }
                  },
                  {
                    vehAvailCore: {
                      pricedEquips: {
                        pricedEquip: []
                      },
                      vehicle: {
                        vehType: {
                          doorCount: "2"
                        },
                        code: "PCAR",
                        codeContext: "SIPP",
                        passengerQuantity: "5",
                        vehMakeModel: {
                          name: "FORD CROWN VICTORIA"
                        }
                      },
                      rentalRate: [
                        {
                          rateDistance: [
                            {
                              unlimited: true,
                              quantity: 0,
                              distUnitName: "MILE",
                              vehiclePeriodUnitName: "Day"
                            },
                            {
                              unlimited: true,
                              quantity: 0,
                              distUnitName: "MILE",
                              vehiclePeriodUnitName: "ExtraHour"
                            }
                          ],
                          rateQualifier: {
                            rateCategory: "S",
                            corpDiscountNmbr: "",
                            arriveByFlight: false,
                            guaranteedInd: true,
                            promotionCode: "",
                            rateQualifier: "RCUD3",
                            ratePeriod: "Daily",
                            rateAuthorizationCode: "N",
                            travelPurpose: "",
                            rateComments: {
                              rateComment: [
                                {
                                  name: "CommissionPercentage",
                                  value: "0"
                                },
                                {
                                  name: "CommissionAmount",
                                  value: "0"
                                },
                                {
                                  name: "GuaranteeNumberOfDays",
                                  value: "364"
                                },
                                {
                                  name: "GracePeriodNumberOfMinutes",
                                  value: "0"
                                },
                                {
                                  name: "ChargeForGracePeriodFlag",
                                  value: "N"
                                },
                                {
                                  name: "TotalDaysCharged",
                                  value: "3"
                                },
                                {
                                  name: "TotalExtraHours",
                                  value: "2"
                                },
                                {
                                  name: "MinimumAdvanceDays",
                                  value: "0"
                                },
                                {
                                  name: "MinimumAdvanceHours",
                                  value: "0"
                                }
                              ]
                            }
                          },
                          vehicleCharges: {
                            vehicleCharge: [
                              {
                                description: "TIME",
                                purpose: "D",
                                requiredInd: true,
                                includedInRate: true,
                                calculation: [
                                  {
                                    unitCharge: 5000,
                                    percentage: 0,
                                    quantity: 3,
                                    unitName: "Day"
                                  }
                                ],
                                amount: 15000,
                                taxInclusive: false,
                                prepayFlag: "N",
                                otaValue: 83,
                                rateType: "R",
                                internalCalculationMethod: "D",
                                outOfVoucherRate: 0
                              },
                              {
                                description: "TIME",
                                purpose: "R",
                                requiredInd: true,
                                includedInRate: true,
                                calculation: [
                                  {
                                    unitCharge: 850,
                                    percentage: 0,
                                    quantity: 2,
                                    unitName: "ExtraHour"
                                  }
                                ],
                                amount: 1700,
                                taxInclusive: false,
                                prepayFlag: "N",
                                otaValue: 11,
                                rateType: "R",
                                internalCalculationMethod: "R",
                                outOfVoucherRate: 0
                              }
                            ]
                          },
                          rateRestrictions: {
                            minimumAge: 18,
                            guaranteeReqInd: false,
                            cancellationPenaltyInd: false
                          },
                          totalCharge: [
                            {
                              rateTotalAmount: 16700,
                              estimatedTotalAmount: 25956,
                              currencyCode: "USD",
                              decimalPlaces: 2,
                              rateConvertInd: false
                            }
                          ]
                        }
                      ],
                      fees: {
                        fee: [
                          {
                            purpose: "VLF",
                            description: "VEHICLE LICENSE FEE",
                            calculation: [
                              {
                                unitName: "Day",
                                unitCharge: 165,
                                percentage: 0,
                                quantity: 4
                              }
                            ],
                            requiredInd: true,
                            includedInRate: false,
                            amount: 660,
                            taxInclusive: false,
                            prepayFlag: "N",
                            otaValue: 0,
                            rateType: "F",
                            overrideCode: "C",
                            urlAddress: "",
                            taxExemptFlag: "N",
                            taxExemptNumber: 0,
                            tierNumber: 1
                          },
                          {
                            purpose: "APCONRGFEE",
                            description: "APT CONC RECOV FEE",
                            calculation: [
                              {
                                unitName: "RentalPeriod",
                                unitCharge: 0,
                                percentage: 11.11,
                                quantity: 1
                              }
                            ],
                            requiredInd: true,
                            includedInRate: false,
                            amount: 1929,
                            taxInclusive: false,
                            prepayFlag: "N",
                            otaValue: 0,
                            rateType: "F",
                            overrideCode: "C",
                            urlAddress: "",
                            taxExemptFlag: "N",
                            taxExemptNumber: 0,
                            tierNumber: 1
                          },
                          {
                            purpose: "CFC1",
                            description: "CUST FACILITY CHRG",
                            calculation: [
                              {
                                unitName: "Day",
                                unitCharge: 750,
                                percentage: 0,
                                quantity: 4
                              }
                            ],
                            requiredInd: true,
                            includedInRate: false,
                            amount: 3000,
                            taxInclusive: false,
                            prepayFlag: "N",
                            otaValue: 0,
                            rateType: "F",
                            overrideCode: "C",
                            urlAddress: "",
                            taxExemptFlag: "N",
                            taxExemptNumber: 0,
                            tierNumber: 1
                          },
                          {
                            purpose: "TOURSM SRG",
                            description: "TOURISM SURCHARGE",
                            calculation: [
                              {
                                unitName: "RentalPeriod",
                                unitCharge: 0,
                                percentage: 3.5,
                                quantity: 1
                              }
                            ],
                            requiredInd: true,
                            includedInRate: false,
                            amount: 1738,
                            taxInclusive: false,
                            prepayFlag: "N",
                            otaValue: 0,
                            rateType: "T",
                            overrideCode: "C",
                            urlAddress: "",
                            taxExemptFlag: "N",
                            taxExemptNumber: 0,
                            tierNumber: 1
                          },
                          {
                            purpose: "STATE TAX",
                            description: "State Tax",
                            calculation: [
                              {
                                unitName: "RentalPeriod",
                                unitCharge: 0,
                                percentage: 10,
                                quantity: 1
                              }
                            ],
                            requiredInd: true,
                            includedInRate: false,
                            amount: 1929,
                            taxInclusive: false,
                            prepayFlag: "N",
                            otaValue: 0,
                            rateType: "T",
                            overrideCode: "C",
                            urlAddress: "",
                            taxExemptFlag: "N",
                            taxExemptNumber: 0,
                            tierNumber: 1
                          }
                        ]
                      },
                      tpaextensions: {
                        sourceCode: "DOLLAR.COM",
                        prepayFlag: "N",
                        minimumLengthOfRent: 51,
                        maximumLengthOfRent: 98,
                        daysBeforeExtraDayCharge: 0,
                        promotionApplied: "N",
                        benefitApplied: "N",
                        opaqueFlag: "N",
                        iata: "",
                        programID: "",
                        customerZipCode: "",
                        numberOfAdvanceDays: 95,
                        defaultCurrency: "USD",
                        recalculationCurrency: "USD",
                        conversionRate: 0,
                        retainConversionRateFlag: "N",
                        customerAge: 0,
                        upgradeAllowedCode: "A",
                        voucherRequiredAtReservationFlag: "N",
                        outOfVoucherStartDate: "2019-10-08T15:00:00",
                        bundleFlag: "N",
                        msrp: 0,
                        milesDriven: 0,
                        cityCode: "",
                        stateCode: "",
                        countryCode: "",
                        pseudoCityCode: "",
                        deliveryDistance: 0,
                        collectionDistance: 0,
                        formOfPayment: "",
                        pointsPurchaseFlag: "N",
                        ancillariesPurchase: [],
                        ancillariesRestrict: [],
                        accountSpecificRateFlag: "N",
                        displayRateOnShopFlag: "Y",
                        upgradeRank: 0,
                        freeUpgradeFlag: "N",
                        guaranteeNumberOfDays: 364
                      },
                      vendor: {
                        ID: "ZR"
                      },
                      status: "AVAILABLE"
                    },
                    vehAvailInfo: {
                      pricedCoverages: {
                        pricedCoverage: []
                      },
                      paymentRules: {
                        paymentRule: []
                      }
                    }
                  },
                  {
                    vehAvailCore: {
                      pricedEquips: {
                        pricedEquip: []
                      },
                      vehicle: {
                        vehType: {
                          doorCount: "4"
                        },
                        code: "PDAR",
                        codeContext: "SIPP",
                        passengerQuantity: "5",
                        vehMakeModel: {
                          name: "FORD CROWN VICTORIA"
                        }
                      },
                      rentalRate: [
                        {
                          rateDistance: [
                            {
                              unlimited: true,
                              quantity: 0,
                              distUnitName: "MILE",
                              vehiclePeriodUnitName: "Day"
                            },
                            {
                              unlimited: true,
                              quantity: 0,
                              distUnitName: "MILE",
                              vehiclePeriodUnitName: "ExtraHour"
                            }
                          ],
                          rateQualifier: {
                            rateCategory: "S",
                            corpDiscountNmbr: "",
                            arriveByFlight: false,
                            guaranteedInd: true,
                            promotionCode: "",
                            rateQualifier: "RCUD3",
                            ratePeriod: "Daily",
                            rateAuthorizationCode: "N",
                            travelPurpose: "",
                            rateComments: {
                              rateComment: [
                                {
                                  name: "CommissionPercentage",
                                  value: "0"
                                },
                                {
                                  name: "CommissionAmount",
                                  value: "0"
                                },
                                {
                                  name: "GuaranteeNumberOfDays",
                                  value: "364"
                                },
                                {
                                  name: "GracePeriodNumberOfMinutes",
                                  value: "0"
                                },
                                {
                                  name: "ChargeForGracePeriodFlag",
                                  value: "N"
                                },
                                {
                                  name: "TotalDaysCharged",
                                  value: "3"
                                },
                                {
                                  name: "TotalExtraHours",
                                  value: "2"
                                },
                                {
                                  name: "MinimumAdvanceDays",
                                  value: "0"
                                },
                                {
                                  name: "MinimumAdvanceHours",
                                  value: "0"
                                }
                              ]
                            }
                          },
                          vehicleCharges: {
                            vehicleCharge: [
                              {
                                description: "TIME",
                                purpose: "D",
                                requiredInd: true,
                                includedInRate: true,
                                calculation: [
                                  {
                                    unitCharge: 5000,
                                    percentage: 0,
                                    quantity: 3,
                                    unitName: "Day"
                                  }
                                ],
                                amount: 15000,
                                taxInclusive: false,
                                prepayFlag: "N",
                                otaValue: 83,
                                rateType: "R",
                                internalCalculationMethod: "D",
                                outOfVoucherRate: 0
                              },
                              {
                                description: "TIME",
                                purpose: "R",
                                requiredInd: true,
                                includedInRate: true,
                                calculation: [
                                  {
                                    unitCharge: 850,
                                    percentage: 0,
                                    quantity: 2,
                                    unitName: "ExtraHour"
                                  }
                                ],
                                amount: 1700,
                                taxInclusive: false,
                                prepayFlag: "N",
                                otaValue: 11,
                                rateType: "R",
                                internalCalculationMethod: "R",
                                outOfVoucherRate: 0
                              }
                            ]
                          },
                          rateRestrictions: {
                            minimumAge: 18,
                            guaranteeReqInd: false,
                            cancellationPenaltyInd: false
                          },
                          totalCharge: [
                            {
                              rateTotalAmount: 16700,
                              estimatedTotalAmount: 25956,
                              currencyCode: "USD",
                              decimalPlaces: 2,
                              rateConvertInd: false
                            }
                          ]
                        }
                      ],
                      fees: {
                        fee: [
                          {
                            purpose: "VLF",
                            description: "VEHICLE LICENSE FEE",
                            calculation: [
                              {
                                unitName: "Day",
                                unitCharge: 165,
                                percentage: 0,
                                quantity: 4
                              }
                            ],
                            requiredInd: true,
                            includedInRate: false,
                            amount: 660,
                            taxInclusive: false,
                            prepayFlag: "N",
                            otaValue: 0,
                            rateType: "F",
                            overrideCode: "C",
                            urlAddress: "",
                            taxExemptFlag: "N",
                            taxExemptNumber: 0,
                            tierNumber: 1
                          },
                          {
                            purpose: "APCONRGFEE",
                            description: "APT CONC RECOV FEE",
                            calculation: [
                              {
                                unitName: "RentalPeriod",
                                unitCharge: 0,
                                percentage: 11.11,
                                quantity: 1
                              }
                            ],
                            requiredInd: true,
                            includedInRate: false,
                            amount: 1929,
                            taxInclusive: false,
                            prepayFlag: "N",
                            otaValue: 0,
                            rateType: "F",
                            overrideCode: "C",
                            urlAddress: "",
                            taxExemptFlag: "N",
                            taxExemptNumber: 0,
                            tierNumber: 1
                          },
                          {
                            purpose: "CFC1",
                            description: "CUST FACILITY CHRG",
                            calculation: [
                              {
                                unitName: "Day",
                                unitCharge: 750,
                                percentage: 0,
                                quantity: 4
                              }
                            ],
                            requiredInd: true,
                            includedInRate: false,
                            amount: 3000,
                            taxInclusive: false,
                            prepayFlag: "N",
                            otaValue: 0,
                            rateType: "F",
                            overrideCode: "C",
                            urlAddress: "",
                            taxExemptFlag: "N",
                            taxExemptNumber: 0,
                            tierNumber: 1
                          },
                          {
                            purpose: "TOURSM SRG",
                            description: "TOURISM SURCHARGE",
                            calculation: [
                              {
                                unitName: "RentalPeriod",
                                unitCharge: 0,
                                percentage: 3.5,
                                quantity: 1
                              }
                            ],
                            requiredInd: true,
                            includedInRate: false,
                            amount: 1738,
                            taxInclusive: false,
                            prepayFlag: "N",
                            otaValue: 0,
                            rateType: "T",
                            overrideCode: "C",
                            urlAddress: "",
                            taxExemptFlag: "N",
                            taxExemptNumber: 0,
                            tierNumber: 1
                          },
                          {
                            purpose: "STATE TAX",
                            description: "State Tax",
                            calculation: [
                              {
                                unitName: "RentalPeriod",
                                unitCharge: 0,
                                percentage: 10,
                                quantity: 1
                              }
                            ],
                            requiredInd: true,
                            includedInRate: false,
                            amount: 1929,
                            taxInclusive: false,
                            prepayFlag: "N",
                            otaValue: 0,
                            rateType: "T",
                            overrideCode: "C",
                            urlAddress: "",
                            taxExemptFlag: "N",
                            taxExemptNumber: 0,
                            tierNumber: 1
                          }
                        ]
                      },
                      tpaextensions: {
                        sourceCode: "DOLLAR.COM",
                        prepayFlag: "N",
                        minimumLengthOfRent: 51,
                        maximumLengthOfRent: 98,
                        daysBeforeExtraDayCharge: 0,
                        promotionApplied: "N",
                        benefitApplied: "N",
                        opaqueFlag: "N",
                        iata: "",
                        programID: "",
                        customerZipCode: "",
                        numberOfAdvanceDays: 95,
                        defaultCurrency: "USD",
                        recalculationCurrency: "USD",
                        conversionRate: 0,
                        retainConversionRateFlag: "N",
                        customerAge: 0,
                        upgradeAllowedCode: "A",
                        voucherRequiredAtReservationFlag: "N",
                        outOfVoucherStartDate: "2019-10-08T15:00:00",
                        bundleFlag: "N",
                        msrp: 0,
                        milesDriven: 0,
                        cityCode: "",
                        stateCode: "",
                        countryCode: "",
                        pseudoCityCode: "",
                        deliveryDistance: 0,
                        collectionDistance: 0,
                        formOfPayment: "",
                        pointsPurchaseFlag: "N",
                        ancillariesPurchase: [],
                        ancillariesRestrict: [],
                        accountSpecificRateFlag: "N",
                        displayRateOnShopFlag: "Y",
                        upgradeRank: 0,
                        freeUpgradeFlag: "N",
                        guaranteeNumberOfDays: 364
                      },
                      vendor: {
                        ID: "ZR"
                      },
                      status: "AVAILABLE"
                    },
                    vehAvailInfo: {
                      pricedCoverages: {
                        pricedCoverage: []
                      },
                      paymentRules: {
                        paymentRule: []
                      }
                    }
                  },
                  {
                    vehAvailCore: {
                      pricedEquips: {
                        pricedEquip: []
                      },
                      vehicle: {
                        vehType: {
                          doorCount: "4"
                        },
                        code: "MVAR",
                        codeContext: "SIPP",
                        passengerQuantity: "7",
                        vehMakeModel: {
                          name: "DODGE CARAVAN"
                        }
                      },
                      rentalRate: [
                        {
                          rateDistance: [
                            {
                              unlimited: true,
                              quantity: 0,
                              distUnitName: "MILE",
                              vehiclePeriodUnitName: "Day"
                            },
                            {
                              unlimited: true,
                              quantity: 0,
                              distUnitName: "MILE",
                              vehiclePeriodUnitName: "ExtraHour"
                            }
                          ],
                          rateQualifier: {
                            rateCategory: "S",
                            corpDiscountNmbr: "",
                            arriveByFlight: false,
                            guaranteedInd: true,
                            promotionCode: "",
                            rateQualifier: "RCUD3",
                            ratePeriod: "Daily",
                            rateAuthorizationCode: "N",
                            travelPurpose: "",
                            rateComments: {
                              rateComment: [
                                {
                                  name: "CommissionPercentage",
                                  value: "0"
                                },
                                {
                                  name: "CommissionAmount",
                                  value: "0"
                                },
                                {
                                  name: "GuaranteeNumberOfDays",
                                  value: "364"
                                },
                                {
                                  name: "GracePeriodNumberOfMinutes",
                                  value: "0"
                                },
                                {
                                  name: "ChargeForGracePeriodFlag",
                                  value: "N"
                                },
                                {
                                  name: "TotalDaysCharged",
                                  value: "3"
                                },
                                {
                                  name: "TotalExtraHours",
                                  value: "2"
                                },
                                {
                                  name: "MinimumAdvanceDays",
                                  value: "0"
                                },
                                {
                                  name: "MinimumAdvanceHours",
                                  value: "0"
                                }
                              ]
                            }
                          },
                          vehicleCharges: {
                            vehicleCharge: [
                              {
                                description: "TIME",
                                purpose: "D",
                                requiredInd: true,
                                includedInRate: true,
                                calculation: [
                                  {
                                    unitCharge: 6257,
                                    percentage: 0,
                                    quantity: 3,
                                    unitName: "Day"
                                  }
                                ],
                                amount: 18771,
                                taxInclusive: false,
                                prepayFlag: "N",
                                otaValue: 83,
                                rateType: "R",
                                internalCalculationMethod: "D",
                                outOfVoucherRate: 0
                              },
                              {
                                description: "TIME",
                                purpose: "R",
                                requiredInd: true,
                                includedInRate: true,
                                calculation: [
                                  {
                                    unitCharge: 1064,
                                    percentage: 0,
                                    quantity: 2,
                                    unitName: "ExtraHour"
                                  }
                                ],
                                amount: 2128,
                                taxInclusive: false,
                                prepayFlag: "N",
                                otaValue: 11,
                                rateType: "R",
                                internalCalculationMethod: "R",
                                outOfVoucherRate: 0
                              }
                            ]
                          },
                          rateRestrictions: {
                            minimumAge: 18,
                            guaranteeReqInd: false,
                            cancellationPenaltyInd: false
                          },
                          totalCharge: [
                            {
                              rateTotalAmount: 20899,
                              estimatedTotalAmount: 31509,
                              currencyCode: "USD",
                              decimalPlaces: 2,
                              rateConvertInd: false
                            }
                          ]
                        }
                      ],
                      fees: {
                        fee: [
                          {
                            purpose: "VLF",
                            description: "VEHICLE LICENSE FEE",
                            calculation: [
                              {
                                unitName: "Day",
                                unitCharge: 162,
                                percentage: 0,
                                quantity: 4
                              }
                            ],
                            requiredInd: true,
                            includedInRate: false,
                            amount: 648,
                            taxInclusive: false,
                            prepayFlag: "N",
                            otaValue: 0,
                            rateType: "F",
                            overrideCode: "C",
                            urlAddress: "",
                            taxExemptFlag: "N",
                            taxExemptNumber: 0,
                            tierNumber: 1
                          },
                          {
                            purpose: "APCONRGFEE",
                            description: "APT CONC RECOV FEE",
                            calculation: [
                              {
                                unitName: "RentalPeriod",
                                unitCharge: 0,
                                percentage: 11.11,
                                quantity: 1
                              }
                            ],
                            requiredInd: true,
                            includedInRate: false,
                            amount: 2394,
                            taxInclusive: false,
                            prepayFlag: "N",
                            otaValue: 0,
                            rateType: "F",
                            overrideCode: "C",
                            urlAddress: "",
                            taxExemptFlag: "N",
                            taxExemptNumber: 0,
                            tierNumber: 1
                          },
                          {
                            purpose: "CFC1",
                            description: "CUST FACILITY CHRG",
                            calculation: [
                              {
                                unitName: "Day",
                                unitCharge: 750,
                                percentage: 0,
                                quantity: 4
                              }
                            ],
                            requiredInd: true,
                            includedInRate: false,
                            amount: 3000,
                            taxInclusive: false,
                            prepayFlag: "N",
                            otaValue: 0,
                            rateType: "F",
                            overrideCode: "C",
                            urlAddress: "",
                            taxExemptFlag: "N",
                            taxExemptNumber: 0,
                            tierNumber: 1
                          },
                          {
                            purpose: "TOURSM SRG",
                            description: "TOURISM SURCHARGE",
                            calculation: [
                              {
                                unitName: "RentalPeriod",
                                unitCharge: 0,
                                percentage: 3.5,
                                quantity: 1
                              }
                            ],
                            requiredInd: true,
                            includedInRate: false,
                            amount: 2174,
                            taxInclusive: false,
                            prepayFlag: "N",
                            otaValue: 0,
                            rateType: "T",
                            overrideCode: "C",
                            urlAddress: "",
                            taxExemptFlag: "N",
                            taxExemptNumber: 0,
                            tierNumber: 1
                          },
                          {
                            purpose: "STATE TAX",
                            description: "State Tax",
                            calculation: [
                              {
                                unitName: "RentalPeriod",
                                unitCharge: 0,
                                percentage: 10,
                                quantity: 1
                              }
                            ],
                            requiredInd: true,
                            includedInRate: false,
                            amount: 2394,
                            taxInclusive: false,
                            prepayFlag: "N",
                            otaValue: 0,
                            rateType: "T",
                            overrideCode: "C",
                            urlAddress: "",
                            taxExemptFlag: "N",
                            taxExemptNumber: 0,
                            tierNumber: 1
                          }
                        ]
                      },
                      tpaextensions: {
                        sourceCode: "DOLLAR.COM",
                        prepayFlag: "N",
                        minimumLengthOfRent: 51,
                        maximumLengthOfRent: 98,
                        daysBeforeExtraDayCharge: 0,
                        promotionApplied: "N",
                        benefitApplied: "N",
                        opaqueFlag: "N",
                        iata: "",
                        programID: "",
                        customerZipCode: "",
                        numberOfAdvanceDays: 95,
                        defaultCurrency: "USD",
                        recalculationCurrency: "USD",
                        conversionRate: 0,
                        retainConversionRateFlag: "N",
                        customerAge: 0,
                        upgradeAllowedCode: "A",
                        voucherRequiredAtReservationFlag: "N",
                        outOfVoucherStartDate: "2019-10-08T15:00:00",
                        bundleFlag: "N",
                        msrp: 0,
                        milesDriven: 0,
                        cityCode: "",
                        stateCode: "",
                        countryCode: "",
                        pseudoCityCode: "",
                        deliveryDistance: 0,
                        collectionDistance: 0,
                        formOfPayment: "",
                        pointsPurchaseFlag: "N",
                        ancillariesPurchase: [],
                        ancillariesRestrict: [],
                        accountSpecificRateFlag: "N",
                        displayRateOnShopFlag: "Y",
                        upgradeRank: 0,
                        freeUpgradeFlag: "N",
                        guaranteeNumberOfDays: 364
                      },
                      vendor: {
                        ID: "ZR"
                      },
                      status: "AVAILABLE"
                    },
                    vehAvailInfo: {
                      pricedCoverages: {
                        pricedCoverage: []
                      },
                      paymentRules: {
                        paymentRule: []
                      }
                    }
                  },
                  {
                    vehAvailCore: {
                      pricedEquips: {
                        pricedEquip: []
                      },
                      vehicle: {
                        vehType: {
                          doorCount: "4"
                        },
                        code: "IVAR",
                        codeContext: "SIPP",
                        passengerQuantity: "7",
                        vehMakeModel: {
                          name: "DODGE CARAVAN"
                        }
                      },
                      rentalRate: [
                        {
                          rateDistance: [
                            {
                              unlimited: true,
                              quantity: 0,
                              distUnitName: "MILE",
                              vehiclePeriodUnitName: "Day"
                            },
                            {
                              unlimited: true,
                              quantity: 0,
                              distUnitName: "MILE",
                              vehiclePeriodUnitName: "ExtraHour"
                            }
                          ],
                          rateQualifier: {
                            rateCategory: "S",
                            corpDiscountNmbr: "",
                            arriveByFlight: false,
                            guaranteedInd: true,
                            promotionCode: "",
                            rateQualifier: "RCUD3",
                            ratePeriod: "Daily",
                            rateAuthorizationCode: "N",
                            travelPurpose: "",
                            rateComments: {
                              rateComment: [
                                {
                                  name: "CommissionPercentage",
                                  value: "0"
                                },
                                {
                                  name: "CommissionAmount",
                                  value: "0"
                                },
                                {
                                  name: "GuaranteeNumberOfDays",
                                  value: "364"
                                },
                                {
                                  name: "GracePeriodNumberOfMinutes",
                                  value: "0"
                                },
                                {
                                  name: "ChargeForGracePeriodFlag",
                                  value: "N"
                                },
                                {
                                  name: "TotalDaysCharged",
                                  value: "3"
                                },
                                {
                                  name: "TotalExtraHours",
                                  value: "2"
                                },
                                {
                                  name: "MinimumAdvanceDays",
                                  value: "0"
                                },
                                {
                                  name: "MinimumAdvanceHours",
                                  value: "0"
                                }
                              ]
                            }
                          },
                          vehicleCharges: {
                            vehicleCharge: [
                              {
                                description: "TIME",
                                purpose: "D",
                                requiredInd: true,
                                includedInRate: true,
                                calculation: [
                                  {
                                    unitCharge: 6257,
                                    percentage: 0,
                                    quantity: 3,
                                    unitName: "Day"
                                  }
                                ],
                                amount: 18771,
                                taxInclusive: false,
                                prepayFlag: "N",
                                otaValue: 83,
                                rateType: "R",
                                internalCalculationMethod: "D",
                                outOfVoucherRate: 0
                              },
                              {
                                description: "TIME",
                                purpose: "R",
                                requiredInd: true,
                                includedInRate: true,
                                calculation: [
                                  {
                                    unitCharge: 1064,
                                    percentage: 0,
                                    quantity: 2,
                                    unitName: "ExtraHour"
                                  }
                                ],
                                amount: 2128,
                                taxInclusive: false,
                                prepayFlag: "N",
                                otaValue: 11,
                                rateType: "R",
                                internalCalculationMethod: "R",
                                outOfVoucherRate: 0
                              }
                            ]
                          },
                          rateRestrictions: {
                            minimumAge: 18,
                            guaranteeReqInd: false,
                            cancellationPenaltyInd: false
                          },
                          totalCharge: [
                            {
                              rateTotalAmount: 20899,
                              estimatedTotalAmount: 31509,
                              currencyCode: "USD",
                              decimalPlaces: 2,
                              rateConvertInd: false
                            }
                          ]
                        }
                      ],
                      fees: {
                        fee: [
                          {
                            purpose: "VLF",
                            description: "VEHICLE LICENSE FEE",
                            calculation: [
                              {
                                unitName: "Day",
                                unitCharge: 162,
                                percentage: 0,
                                quantity: 4
                              }
                            ],
                            requiredInd: true,
                            includedInRate: false,
                            amount: 648,
                            taxInclusive: false,
                            prepayFlag: "N",
                            otaValue: 0,
                            rateType: "F",
                            overrideCode: "C",
                            urlAddress: "",
                            taxExemptFlag: "N",
                            taxExemptNumber: 0,
                            tierNumber: 1
                          },
                          {
                            purpose: "APCONRGFEE",
                            description: "APT CONC RECOV FEE",
                            calculation: [
                              {
                                unitName: "RentalPeriod",
                                unitCharge: 0,
                                percentage: 11.11,
                                quantity: 1
                              }
                            ],
                            requiredInd: true,
                            includedInRate: false,
                            amount: 2394,
                            taxInclusive: false,
                            prepayFlag: "N",
                            otaValue: 0,
                            rateType: "F",
                            overrideCode: "C",
                            urlAddress: "",
                            taxExemptFlag: "N",
                            taxExemptNumber: 0,
                            tierNumber: 1
                          },
                          {
                            purpose: "CFC1",
                            description: "CUST FACILITY CHRG",
                            calculation: [
                              {
                                unitName: "Day",
                                unitCharge: 750,
                                percentage: 0,
                                quantity: 4
                              }
                            ],
                            requiredInd: true,
                            includedInRate: false,
                            amount: 3000,
                            taxInclusive: false,
                            prepayFlag: "N",
                            otaValue: 0,
                            rateType: "F",
                            overrideCode: "C",
                            urlAddress: "",
                            taxExemptFlag: "N",
                            taxExemptNumber: 0,
                            tierNumber: 1
                          },
                          {
                            purpose: "TOURSM SRG",
                            description: "TOURISM SURCHARGE",
                            calculation: [
                              {
                                unitName: "RentalPeriod",
                                unitCharge: 0,
                                percentage: 3.5,
                                quantity: 1
                              }
                            ],
                            requiredInd: true,
                            includedInRate: false,
                            amount: 2174,
                            taxInclusive: false,
                            prepayFlag: "N",
                            otaValue: 0,
                            rateType: "T",
                            overrideCode: "C",
                            urlAddress: "",
                            taxExemptFlag: "N",
                            taxExemptNumber: 0,
                            tierNumber: 1
                          },
                          {
                            purpose: "STATE TAX",
                            description: "State Tax",
                            calculation: [
                              {
                                unitName: "RentalPeriod",
                                unitCharge: 0,
                                percentage: 10,
                                quantity: 1
                              }
                            ],
                            requiredInd: true,
                            includedInRate: false,
                            amount: 2394,
                            taxInclusive: false,
                            prepayFlag: "N",
                            otaValue: 0,
                            rateType: "T",
                            overrideCode: "C",
                            urlAddress: "",
                            taxExemptFlag: "N",
                            taxExemptNumber: 0,
                            tierNumber: 1
                          }
                        ]
                      },
                      tpaextensions: {
                        sourceCode: "DOLLAR.COM",
                        prepayFlag: "N",
                        minimumLengthOfRent: 51,
                        maximumLengthOfRent: 98,
                        daysBeforeExtraDayCharge: 0,
                        promotionApplied: "N",
                        benefitApplied: "N",
                        opaqueFlag: "N",
                        iata: "",
                        programID: "",
                        customerZipCode: "",
                        numberOfAdvanceDays: 95,
                        defaultCurrency: "USD",
                        recalculationCurrency: "USD",
                        conversionRate: 0,
                        retainConversionRateFlag: "N",
                        customerAge: 0,
                        upgradeAllowedCode: "A",
                        voucherRequiredAtReservationFlag: "N",
                        outOfVoucherStartDate: "2019-10-08T15:00:00",
                        bundleFlag: "N",
                        msrp: 0,
                        milesDriven: 0,
                        cityCode: "",
                        stateCode: "",
                        countryCode: "",
                        pseudoCityCode: "",
                        deliveryDistance: 0,
                        collectionDistance: 0,
                        formOfPayment: "",
                        pointsPurchaseFlag: "N",
                        ancillariesPurchase: [],
                        ancillariesRestrict: [],
                        accountSpecificRateFlag: "N",
                        displayRateOnShopFlag: "Y",
                        upgradeRank: 0,
                        freeUpgradeFlag: "N",
                        guaranteeNumberOfDays: 364
                      },
                      vendor: {
                        ID: "ZR"
                      },
                      status: "AVAILABLE"
                    },
                    vehAvailInfo: {
                      pricedCoverages: {
                        pricedCoverage: []
                      },
                      paymentRules: {
                        paymentRule: []
                      }
                    }
                  }
                ]
              },
              info: {
                locationDetails: [
                  {
                    codeContext: "PICKUP",
                    address: [
                      {
                        cityName: "INGLEWOOD",
                        stateProv: {
                          stateCode: "CA"
                        },
                        postalCode: "90301",
                        countryName: {
                          code: "US"
                        },
                        remark: "LOS ANGELES AIRPORT",
                        addressLine: ["9150 AVIATION BLVD", ""]
                      }
                    ],
                    telephone: [
                      {
                        phoneNumber: "866 434 2227",
                        extension: ""
                      }
                    ],
                    additionalInfo: {
                      vehRentLocInfos: {
                        vehRentLocInfo: [
                          {
                            title: "LAX",
                            type: "PickupSourceLocation"
                          }
                        ]
                      },
                      operationSchedules: [
                        {
                          start: 0,
                          end: 0,
                          operationSchedule: [
                            {
                              start: 2359,
                              end: 2359,
                              operationTimes: {
                                operationTime: [
                                  {
                                    duration: "2359",
                                    start: 0,
                                    end: 2359,
                                    SAT: true
                                  },
                                  {
                                    duration: "2359",
                                    start: 0,
                                    end: 2359,
                                    TUE: true
                                  }
                                ]
                              }
                            }
                          ]
                        }
                      ]
                    }
                  }
                ],
                vendorMessages: {
                  vendorMessage: [
                    {
                      title: "NO ADVANCE BOOKING REQUIRED",
                      infoType: "TEXT"
                    },
                    {
                      title: "3 DY MIN 4 DAY MAX RENTAL REQUIRED",
                      infoType: "TEXT"
                    },
                    {
                      title:
                        "DROP CHARGES  IF APPLICABLE  WILL DISPLAY AT CONFIRMATION.",
                      infoType: "TEXT"
                    },
                    {
                      title: "CREDIT CARD REQUIRED AT TIME OF BOOKING",
                      infoType: "VAPOR"
                    }
                  ]
                }
              }
            }
          ]
        }
      },
      vehAvailRSInfo: {},
      timeStamp: "2019-07-02T13:46:30.192Z"
    }
  },
  purgeTimeStamp: "2019-07-02T14:06:30.192Z"
};

module.exports = {
  postQuote
};

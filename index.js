// import express from 'express';

const express = require('express');
const vfuk = express();
const port = process.env.PORT || 7000;
const path = "/api";

vfuk.get(path + '/test', (req, res) => {
    // use req and res here
        // Set the type of response, sets the content type.
    res.type('application/json');
        // Set the status code of the response.
    // res.sendStatus(200);

    res.json({
        "id":"123"
    });
 })
 
 vfuk.get(path + '/v1/appconfig', (req, res) => {
    // Set the type of response, sets the content type.
    res.type('application/json');
    // Set the status code of the response.
    res.status(200);
    
    // Send the response body.
    res.json({
        "status": {
            "code": 0,
            "analytics": {
                "statuds": "SucIdentityTestcess",
                "guid": "2f921a1f-919e-42f2-84f6-21ec29c6a653"
            }
        },
        "lastAPICall": "2019-08-07T12:14:30",
        "versions": {
            "CURRENT_CHARGES_CONTENT_STRINGS": "2022-02-19T15:29:06Z",
            "JOURNEYS": "2022-07-12T21:02:59Z",
            "APP_RATING": "2022-02-14T11:55:50Z",
            "RED_SHARER_CONTENT_STRINGS": "2022-08-30T21:04:48Z",
            "SALUTATION_VOVS": "2022-10-16T20:07:13Z",
            "NETWORK_SATISFACTION": "2022-02-07T14:58:22Z",
            "ILNG_SCREENS_CONTENT": "2022-02-14T11:55:50Z",
            "ILNG_FORM_DATA": "2022-02-07T14:58:25Z",
            "TOPUP_CONTENT_STRINGS": "2022-02-14T11:55:48Z",
            "ERROR_CATALOG": "2022-06-14T21:02:57Z",
            "GENERAL": "2022-07-12T21:02:59Z",
            "PRODUCTS_AND_SERVICES_CONTENT_STRINGS": "2022-02-14T11:55:50Z",
            "PRIVACY_SUPPLEMENTS_CONTENT_STRINGS": "2022-06-20T10:10:11Z",
            "NETPERFORM": "2022-03-06T14:10:43Z",
            "IDENTITY": "2022-07-12T21:02:59Z",
            "WELCOME_SUPPLEMENTS_CONTENT_STRINGS": "2022-07-12T21:02:58Z",
            "HOW_TO_UPGRADE_CONTENT_STRINGS": "2022-02-07T14:58:13Z",
            "CTA_MAPPING_CONTENT": "2022-07-12T21:02:59Z",
            "DASHBOARD_CONTENT_STRINGS": "2022-08-30T22:15:33Z",
            "SETTING": "2022-08-30T21:04:48Z",
            "LATEST_BILLS_CONTENT_STRINGS": "2022-08-30T21:04:46Z",
            "NON_VF_CUSTOMERS_DASHBOARD": "2021-07-12T21:02:59Z",
            "ID_JOURNEYS": "2024-10-23T18:09:09Z",
            "BLOCK_SCREENS": "2022-07-25T19:22:29Z"
            
        },
        "startupSettings": {
            "currentChargesHistoryMaxAge": "2592000",
            "encIV": "xrx1BJE679KLDKyqzG1o8Q==",
            "DashboardPollInterval": "50",
            "passwordEncryptionCertificate": "MIICgzCCAeygAwIBAgIEXErvUTANBgkqhkiG9w0BAQsFADCBhTELMAkGA1UEBhMCVUsxFzAVBgNVBAgMDldlc3QgQmVya3NoaXJlMRAwDgYDVQQHDAdOZXdidXJ5MRcwFQYDVQQKDA52b2RhZm9uZS5jby51azEXMBUGA1UECwwOdm9kYWZvbmUuY28udWsxGTAXBgNVBAMMECoudm9kYWZvbmUuY28udWswHhcNMTkwMTI1MTExMzIxWhcNMjAwMTI1MTExMzIxWjCBhTELMAkGA1UEBhMCVUsxFzAVBgNVBAgMDldlc3QgQmVya3NoaXJlMRAwDgYDVQQHDAdOZXdidXJ5MRcwFQYDVQQKDA52b2RhZm9uZS5jby51azEXMBUGA1UECwwOdm9kYWZvbmUuY28udWsxGTAXBgNVBAMMECoudm9kYWZvbmUuY28udWswgZ8wDQYJKoZIhvcNAQEBBQADgY0AMIGJAoGBAOWGCPZw6baduU4AS82crR1CFt2c9pAYc+fT9M3v8l8e+mChjcKD3UZuE0rVX8m4BjJo+ELWC6Hj7iZnaWHT920eKWXMcwRnbpQgc97/efcBB3/0wmNZd4dHHnpr15fkTu+Am2yqgonJPBs4PX5w8qQCX41/1DJJaBgiM/TuJtbXAgMBAAEwDQYJKoZIhvcNAQELBQADgYEAtZgRNALF6g719LWOum6xcMd9yDb3kEAcvqZThMtciwV4kgeCi0y3b+WnUkh7QLSlDu/obApjSlUPKhojDt5R0rMiwWihKytr0sLRHME1ExPBU3YSdCCmhws4g71Lzr6zuTrVMCc+a6TziOgFQsZnN3WaCqvquFfVrRlUazoWI6Q=", //"MIIB7TCCAVagAwIBAgICA4QwDQYJKoZIhvcNAQELBQAwOzELMAkGA1UEBhMCVUsxETAPBgNVBAoMCFZPREFGT05FMRkwFwYDVQQDDBAqLnZvZGFmb25lLmNvLnVrMCAXDTE0MDcwNzExNTk1OVoYDzIwNzQwNzA3MTE1OTU5WjA7MQswCQYDVQQGEwJVSzERMA8GA1UECgwIVk9EQUZPTkUxGTAXBgNVBAMMECoudm9kYWZvbmUuY28udWswgZ8wDQYJKoZIhvcNAQEBBQADgY0AMIGJAoGBAL+HPL1w0QMBYF4C1Qnb5dcWiVWptj298OXY7QfLuOiAkYAqigh2yNQrMrsHBRsb/wb1lZdbIo6ykiUsNxshHjkw07unB1zV1eesiusSqmreXSb/U655qb7uP1nny1uilxKWBwJlJ0hERyX/Ozg7ldE90lyoCmtwebGcDoHFIYKZAgMBAAEwDQYJKoZIhvcNAQELBQADgYEAmiIsi8WX4dLonbO/S6CRyZcQAY2JzGKXv+4PtFRg8CICmgHTlCB22uIXV7d9DfLpb51qhflDSZqLJcSiChN9gdowEIxD1oUtsTlit/Aa+rIocU/unpddWgvDoVGKQfm8f5daGuNwB+BgIcmaylpn0A5qbVimFdg4VzTZkx4cB6c=",
            "locationManagerTimeout": "30",
            "fetchSubSwitchSubs": "true",
            "TOBiTextDismiss": "5",
            "vestawhitelist": "?ACTION=PD&SessionKey=,?ACTION=TC&SessionKey=,TheApp.refreshState(",
            "pinValidationRegexList": "[\"%5E%28%3F%21%28.%29%5C1%7B3%7D%29%5Cd%7B4%7D%24\",\"%5E%28%3F%211234%29.%2A\"]",
            "SegmentMaxAge": "2592000",
            "BillsHistoryPollInterval": "10",
            "SubsConfigMaxAge": "2592000",
            "pullToRefreshTutorialCount": "3",
            "vestaurl": "https://vestapay.vodafone.co.uk/VodafoneUKMobileWebUI/UI", //"https://pal1-vodafone-uk-mobileapp.ecustomersupport.com/VodafoneUKMobileWebUI/UI",
            "BillsHistoryMaxAge": "2592000",
            "SegmentPollPeriod": "3600",
            "TOBiTextLaunchNumber": "1,4,8",
            "DashboardMaxAge": "2592000",
            "VOVMaxAge": "2592000",
            "webviewRequestTimeout": "15",
            "morningBGImageStartTime": "00:00",
            "appRateDaysUntilPrompt": "14",
            "VOVAPIPollPeriod": "300",
            "SoftClosePeriod": "600",
            "maxSharerDataLockMins": "1440",
            "appRateUsesUntilPrompt": "10",
            "touchIdEnabled": "true",
            "encKey": "yq/6EFItSDembxA6Mebc9UmkVxqEJ3dbncIC0v0itec=",
            "AppConfigMaxFallback": "2592000",
            "currentChargesHistoryPollInterval": "300",
            "eveningBGImageStartTime": "19:00",
            "ProductsAndServicesMaxAge": "2592000",
            "pinEncryptionCertificate": "MIICgzCCAeygAwIBAgIEXErvUTANBgkqhkiG9w0BAQsFADCBhTELMAkGA1UEBhMCVUsxFzAVBgNVBAgMDldlc3QgQmVya3NoaXJlMRAwDgYDVQQHDAdOZXdidXJ5MRcwFQYDVQQKDA52b2RhZm9uZS5jby51azEXMBUGA1UECwwOdm9kYWZvbmUuY28udWsxGTAXBgNVBAMMECoudm9kYWZvbmUuY28udWswHhcNMTkwMTI1MTExMzIxWhcNMjAwMTI1MTExMzIxWjCBhTELMAkGA1UEBhMCVUsxFzAVBgNVBAgMDldlc3QgQmVya3NoaXJlMRAwDgYDVQQHDAdOZXdidXJ5MRcwFQYDVQQKDA52b2RhZm9uZS5jby51azEXMBUGA1UECwwOdm9kYWZvbmUuY28udWsxGTAXBgNVBAMMECoudm9kYWZvbmUuY28udWswgZ8wDQYJKoZIhvcNAQEBBQADgY0AMIGJAoGBAOWGCPZw6baduU4AS82crR1CFt2c9pAYc+fT9M3v8l8e+mChjcKD3UZuE0rVX8m4BjJo+ELWC6Hj7iZnaWHT920eKWXMcwRnbpQgc97/efcBB3/0wmNZd4dHHnpr15fkTu+Am2yqgonJPBs4PX5w8qQCX41/1DJJaBgiM/TuJtbXAgMBAAEwDQYJKoZIhvcNAQELBQADgYEAtZgRNALF6g719LWOum6xcMd9yDb3kEAcvqZThMtciwV4kgeCi0y3b+WnUkh7QLSlDu/obApjSlUPKhojDt5R0rMiwWihKytr0sLRHME1ExPBU3YSdCCmhws4g71Lzr6zuTrVMCc+a6TziOgFQsZnN3WaCqvquFfVrRlUazoWI6A=", //"MIIB7TCCAVagAwIBAgICA4QwDQYJKoZIhvcNAQELBQAwOzELMAkGA1UEBhMCVUsxETAPBgNVBAoMCFZPREFGT05FMRkwFwYDVQQDDBAqLnZvZGFmb25lLmNvLnVrMCAXDTE0MDcwNzExNTk1OVoYDzIwNzQwNzA3MTE1OTU5WjA7MQswCQYDVQQGEwJVSzERMA8GA1UECgwIVk9EQUZPTkUxGTAXBgNVBAMMECoudm9kYWZvbmUuY28udWswgZ8wDQYJKoZIhvcNAQEBBQADgY0AMIGJAoGBAL+HPL1w0QMBYF4C1Qnb5dcWiVWptj298OXY7QfLuOiAkYAqigh2yNQrMrsHBRsb/wb1lZdbIo6ykiUsNxshHjkw07unB1zV1eesiusSqmreXSb/U655qb7uP1nny1uilxKWBwJlJ0hERyX/Ozg7ldE90lyoCmtwebGcDoHFIYKZAgMBAAEwDQYJKoZIhvcNAQELBQADgYEAmiIsi8WX4dLonbO/S6CRyZcQAY2JzGKXv+4PtFRg8CICmgHTlCB22uIXV7d9DfLpb51qhflDSZqLJcSiChN9gdowEIxD1oUtsTlit/Aa+rIocU/unpddWgvDoVGKQfm8f5daGuNwB+BgIcmaylpn0A5qbVimFdg4VzTZkx4cB6c=",
            "MinNoOfBillsToShowGraph": "3",
            "ProductsAndServicesPollInterval": "300",
            "imiCampaignsUrl": "https://vodafoneuk.imicampaign.io/imicampaignapi/resources/v3/shortlinkclicks",
            "imiCampaignsToken": "OGI4MjBmMTYtMjFjZi00YWZkLWI0OWYtZGI4YzdkNDAwOGMyOjk1ZTMwNmQ5LWUzZTEtNGVkNC1hNTFhLTQ4YzNkODg3MzU0Yg==",
            "ssoCookiesNames": "[\"vfSessionKey\":\"VFSESSION\",\"mspHansoloToken\":\"X-Vodafone-Solo-App\",\"obSSOCookie\":\"OBSSOCookie\"]",
            "eCareStaticCookie": "\"mvaCookie\": \"true\"",
            "tealiumExclusionList": "[\"cm.vodafone.co.uk\"]",
            "OTCookies": "[\"CONSENTMGR\":\"c1:0%7Cc2:1%7Cc3:0%7Cc4:1%7Cc5:1%7Cc6:1%7Cc7:0%7Cc8:1%7Cc9:0%7Cc10:1%7Cc11:1%7Cc12:1%7Cc13:1%7Cc14:0%7Cc15:1%7Cts:1666000968131%7Cconsent:true\",\"OptanonAlertBoxClosed\":\"2022-10-17T10:03:48.060Z\",\"OptanonConsent\":\"isIABGlobal=false&datestamp=Mon+Oct+17+2022+12%3A03%3A48+GMT%2B0200+(Eastern+European+Standard+Time)&version=6.12.0&hosts=&consentId=8337bde1-374c-4a13-b75b-d690ec859149&interactionCount=1&landingPath=NotLandingPage&groups=1%3A1%2C2%3A0%2C3%3A0%2C4%3A0\"]"
        },
        "suspendedJourneys": [], //[{"journey":"SUBS_OVERLAY_USAGE","suspendedJourney":"HOME"}, {"journey":"USAGE","suspendedJourney":"HOME"}],
        "timeouts": {
            "resetPassword": "10",
            "authToken": "10",
            "appconfig": "10",
            "sharerDetail": "10",
            "upgrades": "10",
            "content": "10",
            "softToken": "10",
            "billHistory": "10",
            "passwordLogin": "10",
            "productsandservices": "15",
            "networkFeedbackCenter": "10",
            "topUpCards": "10",
            "segment": "10",
            "vov": "10",
            "subsConfig": "10",
            "dashboard": "15",
            "pinLogin": "10",
            "updatePassword": "10",
            "subscriptionList": "10",
            "hansolo": "10",
            "sendILNG": "10",
            "currentcharges": "10",
            "hint": "10",
            "changePin": "10",
            "updateOffer": "10",
            "networkSatisfaction": "10",
            "ssoToken": "10",
            "username": "10"
        }
    });
})

vfuk.get(path + '/v1/testHansolo', (req, res) => {
    // Set the status code of the response.
    res.status(200);
    
    // Send the response body.
    res.json({
        "status": {
            "code": 0,
            "analytics": {
                "status": "SUCCESS",
                "guid": "7d101c86-7a17-44e4-86f0-8b3ae5c8953a"
            }
        },
        "mspHansoloToken": "d20e0be14f6b49edde2f49a05f285907430a177eb756c2106a38aadd1db37d99"
    });
})

vfuk.get(path + '/v1/segment', (req, res) => {
    // Set the type of response, sets the content type.
    res.type('application/json');
    if (req.get("Subscription") == "447123456788") {
        // Set the status code of the response.
        res.status(200);
        // Send the response body.
        res.json({
            "status": {
                "code": 4124,
                "analytics": {
                    "status": "SUCCESS",
                    "guid": "a85d9602-34c1-4392-ab93-102f62a4467f"
                }
            },
            "lastAPICall": "2018-12-24T14:35:16.323+0000",
            "segment": "CONSUMER",
            "subscriptionType": {
                "name": "MPS",
                "iconId": "33",
                "riderText": "Pay monthly phone"
            },
            "backgroundType": "FLOWER_BACKGROUND",
            "loginBenefitsEnabled": true
        });
    } else {
        // Set the status code of the response.
        res.status(200);
        // Send the response body.
        res.json({
            "status": {
                "code": 0,
                "analytics": {
                    "status": "SUCCESS",
                    "guid": "a85d9602-34c1-4392-ab93-102f62a4467f"
                }
            },
            "lastAPICall": "2018-12-24T14:35:16.323+0000",
            "segment": "CONSUMER",
            "subscriptionType": {
                "name": "MPS",
                "iconId": "33",
                "riderText": "Pay monthly phone"
            },
            "backgroundType": "FLOWER_BACKGROUND",
            "loginBenefitsEnabled": true
        });
    }
})

vfuk.get(path + '/v1/productsAndServices', (req, res) => {
    res.status(200);
    // Send the response body.
    if (req.get("Subscription") == "447386011184") {
        res.json({
            "status": {
                "code": 4112,
                "analytics": {
                    "status": "Success",
                    "guid": "2f99e12e-8632-40ce-adab-94623510d6a5"
                }
            },
            "lastAPICall": "2019-02-13T04:20:53.000+0000",
            "sections": [{
                "title": "Plan details",
                "id": 2,
                "cards": [{
                    "title": "<b>Inclusive extras</b>",
                    "description": "Fixed Tariff Plan, Phone - Standard Support, Land Line, Inclusive evening and weekend calls"
                }]
            }, {
                "title": "Extras, bars and caps",
                "id": 4,
                "cards": [{
                    "title": "Free Caller Display",
                    "description": "Caller display lets you see who's ringing your home phone before you answer it."
                }, {
                    "title": "Fixed Line Line Rental"
                }]
            }],
            "bundle": {
                "cards": [{
                    "title": "Plan allowances",
                    "allowances": [{
                        "title": "Home phone",
                        "unlimited": true
                    }]
                }]
            }
        });
    } else if (req.get("Subscription") == "447340421071") {
        res.json({
            "status": {
                "code": 0,
                "analytics": {
                    "status": "Success",
                    "guid": "273c1bbf-00a9-431b-a0b6-708a2c836c26"
                }
            },
            "lastAPICall": "2019-02-10T08:50:32.000+0000",
            "sections": [{
                "title": "Plan details",
                "id": 2,
                "cards": [{
                    "title": "<b>Inclusive extras</b>",
                    "description": "Mobile Phone Service Line Rental, Roaming Pricing Notifications, Unlimited UK minutes, Postpay Service Profile, Domestic Pricing Notifications, 4GB data, 4G, Vodafone Global Roaming, Pay Monthly CTR13 Tariff, Unlimited texts"
                }]
            }, {
                "title": "Extra allowance",
                "id": 3,
                "cards": [{
                    "title": "Chat Pass",
                    "description": "If you are an existing customer with a Pass, please note if you remove your Pass, you will not subsequently be able to re-add it, or any other Pass. See our terms and conditions for more details. (Do not have updated terms URL)",
                    "allowances": [{
                        "header": "Chat Pass",
                        "title": "Data",
                        "subTitle": "0.0MB saved",
                        "unlimited": true,
                        "iconId": 23,
                        "allowanceType": "CHATDATA",
                        "selected": true
                    }],
                    "clickableLink": {
                        "text": "<u>Manage passes</u>",
                        "journeyKey": "MANAGE_PASSES",
                        "tapTag": "Products and Services|Chat Pass|Manage passes"
                    },
                    "footer": "Allowance renews in <b>26 days</b>"
                }]
            }, {
                "title": "Extras, bars and caps",
                "id": 4,
                "cards": [{
                    "title": "Data Cap",
                    "description": "Turn on your data cap so you can search, share and stream \ufffd secure in the knowledge that you won't face unexpected data charges.",
                    "clickableLink": {
                        "text": "<u><b>Manage Data Cap</b></u>",
                        "journeyKey": "MANAGE_DATA_CAP",
                        "tapTag": "Manage Data Cap|Data Cap"
                    },
                    "footer": "Your current status is: <b>OFF</b>"
                }, {
                    "title": "Spend Manager",
                    "description": "Stay in control of unexpected costs by setting a limit on how much you spend on out-of-plan charges each month.",
                    "clickableLink": {
                        "text": "<u><b>Access your Spend Manager</b></u>",
                        "journeyKey": "SPEND_MANAGER",
                        "tapTag": "Access your Spend Manager|Spend Manager"
                    }
                }, {
                    "title": "Voicemail",
                    "description": "Manage your voicemail here"
                }, {
                    "title": "Age-restricted online content bar",
                    "description": "This bar is blocking content that isn't suitable for under-18s."
                }, {
                    "title": "50 Euro EU RoW data spend cap",
                    "description": "You've chosen to limit the amount of data you use when travelling outside the UK to: &pound;39.33 a month"
                }, {
                    "title": "WiFi and 4G calling",
                    "description": "With <a href=\"https://www.vodafone.co.uk/explore/network/network-improvements/wi-fi-calling\"  target=\"_blank\">Wi-Fi Calling</a>, you can make and receive calls without a phone signal, without additional charges."
                }, {
                    "title": "Vodafone Secure Net",
                    "description": "Vodafone Secure Net protects what matters most to you and your family in the mobile world."
                }]
            }],
            "bundle": {
                "cards": [{
                    "title": "Plan allowances",
                    "allowances": [{
                        "header": "Data",
                        "title": "4.0",
                        "subTitle": "GB of 4.0GB left",
                        "unlimited": false,
                        "iconId": 16,
                        "allowanceType": "DATA",
                        "percentageRemaining": 100.0,
                        "selected": true
                    }, {
                        "header": "Texts",
                        "title": "Unlimited",
                        "subTitle": "0 texts used",
                        "unlimited": true,
                        "iconId": 17,
                        "allowanceType": "SMS",
                        "selected": true
                    }, {
                        "header": "Minutes",
                        "title": "Unlimited",
                        "subTitle": "0 mins used",
                        "unlimited": true,
                        "iconId": 18,
                        "allowanceType": "VOICE",
                        "selected": true
                    }, {
                        "header": "Chat Pass",
                        "title": "Data",
                        "subTitle": "0.0MB saved",
                        "unlimited": true,
                        "iconId": 23,
                        "allowanceType": "CHATDATA",
                        "selected": true
                    }, {
                        "header": "Roaming Data",
                        "title": "500",
                        "subTitle": "MB of 500MB left",
                        "unlimited": false,
                        "iconId": 16,
                        "allowanceType": "ETDATA",
                        "percentageRemaining": 100.0,
                        "selected": true
                    }, {
                        "header": "Roaming Texts",
                        "title": "Unlimited",
                        "subTitle": "0 texts used",
                        "unlimited": true,
                        "iconId": 17,
                        "allowanceType": "ETSMS",
                        "selected": true
                    }, {
                        "header": "Roaming Minutes",
                        "title": "Unlimited",
                        "subTitle": "0 mins used",
                        "unlimited": true,
                        "iconId": 18,
                        "allowanceType": "ETVOICE",
                        "selected": true
                    }],
                    "footer": "Allowance renews in <b>27 days</b>"
                }]
            },
            "contact": "%Phonebook_lookup%"
        });
    } else if (req.get("Subscription") == "447340421071") {
        res.json({
            "status": {
                "code": 0,
                "analytics": {
                    "status": "Success",
                    "guid": "a0a6561f-7f85-40ea-a002-79014d63e5fd"
                }
            },
            "lastAPICall": "2019-02-10T12:33:34.000+0000",
            "sections": [{
                "title": "Plan details",
                "id": 2,
                "cards": [{
                    "title": "<b>Inclusive extras</b>",
                    "description": "4G, Roaming Pricing Notifications, Domestic Pricing Notifications, Postpay Service Profile, Unlimited texts, Mobile Phone Service Line Rental, 500MB data, 5GB Wi-fi, Pay Monthly CTR12 Tariff, 500 UK minutes, Global Roaming"
                }]
            }, {
                "title": "Extra allowance",
                "id": 3,
                "cards": [{
                    "title": "Extra - 100 picture messages",
                    "allowances": [{
                        "header": "Texts",
                        "title": "100",
                        "subTitle": "of 100 picture messages left",
                        "unlimited": false,
                        "iconId": 23,
                        "allowanceType": "MMS",
                        "percentageRemaining": 100,
                        "selected": true
                    }],
                    "footer": "Allowance renews in <b>28 days</b>"
                }, {
                    "title": "Extra 2GB data (monthly)",
                    "description": "You now have an extra 2GB data added to your monthly plan.\\nIf you remove the extra data and have already used the regular monthly allowance, you will be charged for additional data.",
                    "allowances": [{
                        "header": "Data",
                        "title": "2.0",
                        "subTitle": "GB of 2.0GB left",
                        "unlimited": false,
                        "iconId": 16,
                        "allowanceType": "DATA",
                        "percentageRemaining": 100,
                        "selected": true
                    }],
                    "footer": "Allowance renews in <b>27 days</b>"
                }, {
                    "title": "Extra - 300 mins to 084 and 087",
                    "description": "You've got inclusive calls to any number starting with 084 and 087 in the UK. We'll add the cost to your bill every month, and you can opt out at any time.",
                    "allowances": [{
                        "title": "300",
                        "unlimited": false,
                        "iconId": 23,
                        "allowanceType": "08VOICE",
                        "percentageRemaining": 100,
                        "selected": true
                    }],
                    "footer": "Allowance renews in <b>28 days</b>"
                }, {
                    "title": "Extra - 300 minutes",
                    "description": "You've got 300 extra minutes on top of your bundle to call UK mobiles and landlines. We're adding the charge to your bill each month. If you want to opt out, you can do so at any time and we'll take it off your next bill.",
                    "allowances": [{
                        "header": "Minutes",
                        "title": "300",
                        "subTitle": "of 300 mins left",
                        "unlimited": false,
                        "iconId": 18,
                        "allowanceType": "VOICE",
                        "percentageRemaining": 100,
                        "selected": true
                    }],
                    "footer": "Allowance renews in <b>28 days</b>"
                }]
            }, {
                "title": "Extras, bars and caps",
                "id": 4,
                "cards": [{
                    "title": "50 Euro EU RoW data spend cap",
                    "description": "You've chosen to limit the amount of data you use when travelling outside the UK to: &pound;39.33 a month"
                }, {
                    "title": "Voicemail",
                    "description": "Manage your voicemail here"
                }, {
                    "title": "Age-restricted online content bar",
                    "description": "This bar is blocking content that isn't suitable for under-18s."
                }, {
                    "title": "Data Cap",
                    "description": "You now have a data cap. You can now search, share and stream - secure in the knowledge that you won't face unexpected data charges.",
                    "clickableLink": {
                        "text": "<u><b>Manage Data Cap</b></u>",
                        "journeyKey": "MANAGE_DATA_CAP",
                        "tapTag": "Manage Data Cap|Data Cap"
                    },
                    "footer": "Your current status is: <b>ON</b>"
                }, {
                    "title": "Extra - Vodafone International",
                    "description": "You've got Vodafone International, which helps you save money on making overseas calls.  If you want to opt out you can do so at any time, and  we'll take it off your next bill."
                }]
            }],
            "bundle": {
                "cards": [{
                    "title": "Plan allowances",
                    "allowances": [{
                        "header": "Data",
                        "title": "2.4",
                        "subTitle": "GB of 2.5GB left",
                        "unlimited": false,
                        "iconId": 16,
                        "allowanceType": "DATA",
                        "percentageRemaining": 94.70920053718604,
                        "selected": true
                    }, {
                        "header": "Texts",
                        "title": "Unlimited",
                        "subTitle": "0 texts used",
                        "unlimited": true,
                        "iconId": 17,
                        "allowanceType": "SMS",
                        "selected": true
                    }, {
                        "header": "Minutes",
                        "title": "800",
                        "subTitle": "of 800 mins left",
                        "unlimited": false,
                        "iconId": 18,
                        "allowanceType": "VOICE",
                        "percentageRemaining": 100,
                        "selected": true
                    }, {
                        "header": "Texts",
                        "title": "100",
                        "subTitle": "of 100 picture messages left",
                        "unlimited": false,
                        "iconId": 23,
                        "allowanceType": "MMS",
                        "percentageRemaining": 100,
                        "selected": true
                    }, {
                        "title": "300",
                        "unlimited": false,
                        "iconId": 23,
                        "allowanceType": "08VOICE",
                        "percentageRemaining": 100,
                        "selected": true
                    }],
                    "footer": "Allowance renews in <b>28 days</b>"
                }]
            },
            "contact": "%Phonebook_lookup%"
        });
    } else {
        res.json({
            "status": {
                "code": 4112,
                "analytics": {
                    "status": "Success",
                    "guid": "f342e9fd-e201-4af6-a33a-15c3d057f9bf"
                }
            },
            "lastAPICall": "2019-02-11T10:41:49.000+0000",
            "sections": [{
                "title": "Plan details",
                "id": 2,
                "cards": [{
                    "title": "<b>Inclusive extras</b>",
                    "description": "Mobile Phone Service Line Rental, Roaming Pricing Notifications, Unlimited UK minutes, Postpay Service Profile, Domestic Pricing Notifications, 4GB data, 4G, Vodafone Global Roaming, Pay Monthly CTR13 Tariff, Unlimited texts"
                }]
            }, {
                "title": "Extra allowance",
                "id": 3,
                "cards": [{
                    "title": "Chat Pass",
                    "description": "If you are an existing customer with a Pass, please note if you remove your Pass, you will not subsequently be able to re-add it, or any other Pass. See our terms and conditions for more details. (Do not have updated terms URL)",
                    "allowances": [{
                        "header": "Chat Pass",
                        "title": "Data",
                        "subTitle": "4MB saved",
                        "unlimited": true,
                        "iconId": 23,
                        "allowanceType": "CHATDATA",
                        "selected": true
                    }],
                    "clickableLink": {
                        "text": "<u>Manage passes</u>",
                        "journeyKey": "MANAGE_PASSES",
                        "tapTag": "Products and Services|Chat Pass|Manage passes"
                    },
                    "footer": "Allowance renews in <b>25 days</b>"
                }]
            }, {
                "title": "Extras, bars and caps",
                "id": 4,
                "cards": [{
                    "title": "Data Cap",
                    "description": "Turn on your data cap so you can search, share and stream \ufffd secure in the knowledge that you won't face unexpected data charges.",
                    "clickableLink": {
                        "text": "<u><b>Manage Data Cap</b></u>",
                        "journeyKey": "MANAGE_DATA_CAP",
                        "tapTag": "Manage Data Cap|Data Cap"
                    },
                    "footer": "Your current status is: <b>OFF</b>"
                }, {
                    "title": "Spend Manager",
                    "description": "Stay in control of unexpected costs by setting a limit on how much you spend on out-of-plan charges each month.",
                    "clickableLink": {
                        "text": "<u><b>Access your Spend Manager</b></u>",
                        "journeyKey": "SPEND_MANAGER",
                        "tapTag": "Access your Spend Manager|Spend Manager"
                    }
                }, {
                    "title": "Voicemail",
                    "description": "Manage your voicemail here"
                }, {
                    "title": "Age-restricted online content bar",
                    "description": "This bar is blocking content that isn't suitable for under-18s."
                }, {
                    "title": "50 Euro EU RoW data spend cap",
                    "description": "You've chosen to limit the amount of data you use when travelling outside the UK to: &pound;39.33 a month"
                }, {
                    "title": "WiFi and 4G calling",
                    "description": "With <a href=\"https://www.vodafone.co.uk/explore/network/network-improvements/wi-fi-calling\"  target=\"_blank\">Wi-Fi Calling</a>, you can make and receive calls without a phone signal, without additional charges."
                }, {
                    "title": "Vodafone Secure Net",
                    "description": "Vodafone Secure Net protects what matters most to you and your family in the mobile world."
                }]
            }],
            "bundle": {
                "cards": [{
                    "title": "Plan allowances",
                    "allowances": [{
                        "header": "Data",
                        "title": "3.9",
                        "subTitle": "GB of 4.0GB left",
                        "unlimited": false,
                        "iconId": 16,
                        "allowanceType": "DATA",
                        "percentageRemaining": 97.9698657989502,
                        "selected": true
                    }, {
                        "header": "Texts",
                        "title": "Unlimited",
                        "subTitle": "0 texts used",
                        "unlimited": true,
                        "iconId": 17,
                        "allowanceType": "SMS",
                        "selected": true
                    }, {
                        "header": "Minutes",
                        "title": "Unlimited",
                        "subTitle": "0 mins used",
                        "unlimited": true,
                        "iconId": 18,
                        "allowanceType": "VOICE",
                        "selected": true
                    }, {
                        "header": "Chat Pass",
                        "title": "Data",
                        "subTitle": "4MB saved",
                        "unlimited": true,
                        "iconId": 23,
                        "allowanceType": "CHATDATA",
                        "selected": true
                    }, {
                        "header": "Roaming Data",
                        "title": "500",
                        "subTitle": "MB of 500MB left",
                        "unlimited": false,
                        "iconId": 16,
                        "allowanceType": "ETDATA",
                        "percentageRemaining": 100.0,
                        "selected": true
                    }, {
                        "header": "Roaming Texts",
                        "title": "Unlimited",
                        "subTitle": "0 texts used",
                        "unlimited": true,
                        "iconId": 17,
                        "allowanceType": "ETSMS",
                        "selected": true
                    }, {
                        "header": "Roaming Minutes",
                        "title": "Unlimited",
                        "subTitle": "0 mins used",
                        "unlimited": true,
                        "iconId": 18,
                        "allowanceType": "ETVOICE",
                        "selected": true
                    }],
                    "footer": "Allowance renews in <b>26 days</b>"
                }]
            }
        });
    }
})

vfuk.get(path + '/v1/upgrades', (req, res) => {
    // Set the status code of the response.
    res.status(200);
    // Send the response body.
    res.json({
            "status": {
                "code": 0,
                "analytics": {
                    "status": "Success",
                    "guid": "87ab4021-2597-4bda-94fc-ade85adb483b"
                }
            },
            "lastAPICall": "2020-02-03T17:28:19",
            "upgradeInfo": {
                "eligibleForUpgrade": true,
                "earliestUpgradeDate": "13 Feb 2019",
                "normalUpgradeDate": "13 Feb 2019",
                "contractEndDate": "29 Apr 2019",
                "earlyUpgradeFeeIncludingVAT": null
            },
            "screensContent": {
                "howToUpgrade": [{
                    "title": "Great news - you can upgrade now🥳",
                    "displayType": "CARD",
                    "actions": [{
                        "color": "#E60000",
                        "text": "Upgrade now",
                        "journeyKey": "UPGRADE_NOW",
                        "viewTag": "upgrade now",
                        "tapTag": "how to upgrade|upgrade now"
                    }],
                    "recurrence": false
                }, {
                    "title": "Want to sell your old phone?",
                    "description": "Find out more about buy back",
                    "displayType": "CELL",
                    "actions": [{
                        "journeyKey": "BUY_BACK",
                        "viewTag": "consider buyback",
                        "tapTag": "how to upgrade|consider buyback"
                    }],
                    "recurrence": false
                }]
            },
            "subsOverlayButton": {
                "color": "#E60000",
                "text": "Upgrade",
                "journeyKey": "SUBS_OVERLAY_UPGRADE",
                "viewTag": "dashboard|SUBS_OVERLAY_UPGRADE",
                "tapTag": "dashboard|Upgrades|upgrade"
            }
        }
        //     {
        //     "status": {
        //         "code": 0,
        //         "analytics": {
        //             "status": "Success",
        //             "guid": "aa1cf16b-95e2-4aa6-9b11-da1b9a4cdbdd"
        //         }
        //     },
        //     "lastAPICall": "2019-11-20T17:25:44",
        //     "upgradeInfo": {
        //         "eligibleForUpgrade": true,
        //         "earliestUpgradeDate": "Order Pending",
        //         "normalUpgradeDate": "Order Pending",
        //         "contractEndDate": "Order Pending",
        //         "earlyUpgradeFeeIncludingVAT": null
        //     },
        //     "screensContent": {
        //         "howToUpgrade": [{
        //             "title": "You have already upgraded",
        //             "description": "You have already chosen to upgrade with us. We are processing your order.",
        //             "displayType": "CARD",
        //             "recurrence": false
        //         }],
        //         "productsAndServices": [{
        //             "title": "Order Pending",
        //             "displayType": "CELL",
        //             "recurrence": false
        //         }]
        //     }
        // }
    );
})

vfuk.get(path + '/v1/productsAndServicesTest', (req, res) => {
    // Set the status code of the response.
    res.status(200);
    
    // Send the response body.
    res.json({
        "status": {
            "code": 0,
            "analytics": {
                "status": "Success"
            }
        },
        "sections": [{
            "title": "My Plan Details",
            "id": 1,
            "cards": [{
                "title": "Inclusive extras",
                "description": "<b>80% Employee Discount and WIFI and 4G Calling</b>"
            }]
        }, {
            "title": "My Extra Allowance",
            "id": 2,
            "cards": [{
                "title": "Chat Pass",
                "description": "Enjoy more of the things you love with extra Vodafone Passes",
                "allowances": [{
                    "title": "Unlimited",
                    "unlimited": true,
                    "allowanceType": "Vodafone Pass"
                }],
                "footer": "Allowance auto renews in <b>5 days</b>"
            }]
        }, {
            "title": "My Products and Services",
            "id": 3,
            "cards": [{
                "title": "EuroTraveller",
                "description": "Only £3 a day to use your UK minutes, texts and data anywhere in our Europe Zone."
            }, {
                "title": "Vodafone Global Roaming",
                "description": "Use your UK minutes, texts and data in our WorldTraveller Zone for £5 extra a day."
            }]
        }],
        "bundle": {
            "cards": [{
                "title": "My Bundle",
                "allowances": [{
                    "header": "Data",
                    "title": "18.1",
                    "subTitle": "GB of 18.2 GB left",
                    "percentageRemaining": 99.44189,
                    "unlimited": false,
                    "allowanceType": "Data"
                }, {
                    "header": "Texts",
                    "title": "Unlimited",
                    "subTitle": "1 text used",
                    "unlimited": true,
                    "allowanceType": "SMS"
                }, {
                    "header": "Minutes",
                    "title": "550",
                    "subTitle": "of 550 mins left",
                    "percentageRemaining": 100,
                    "unlimited": false,
                    "allowanceType": "Voice"
                }, {
                    "header": "MMS",
                    "title": "100",
                    "subTitle": "of 100 mms left",
                    "percentageRemaining": 100,
                    "unlimited": false,
                    "allowanceType": "MMS"
                }],
                "footer": "Allowance renews in <b>28 days</b>"
            }, {
                "title": "Pay as you go 1",
                "description": "You have choosen Pay as you go 1",
                "footer": "Find out more"
            }]
        },
        "bvb": {
            "title": "Get more from your TopUps",
            "description": "Love great value?Our Big Value Bundle give you more UK minutes, texts and 4G data for less.",
            "displayType": "BVB_CARD",
            "actions": [{
                "color": "#ff0000",
                "text": "See all Big Value Bundles",
                "journeyKey": "BIG_VALUE_BUNDLES"
            },
            {
                "color": "#ff0000",
                "text": "See all Big Value Bundles",
                "journeyKey": "BIG_VALUE_BUNDLES"
            },
            {
                "color": "#ff0000",
                "text": "See all Big Value Bundles",
                "journeyKey": "BIG_VALUE_BUNDLES"
            }]
        }
    });
})

vfuk.get(path + '/v1/vov', (req, res) => {
    res.status(200);
    // Send the response body.
    res.json({
        "status": {
            "code": 0,
            "analytics": {
                "status": "Success",
                "guid": "b249ed8a-df41-4083-87fb-036f0d482c99"
            }
        },
        "lastAPICall": "2019-02-17T12:25:30.684+0000",
        "notifications": [{
            "id": 2,
            "title": "You're in our Roam Further Zone1",
            "message": "This means it's just �6 a day to use your allowance while you roam",
            "priority": 90,
            "dismissDuration": 0,
            "dismissDurationUnit": "MINUTES",
            "expiryDate": "30/12/2050",
            "buttons": [{
                "title": "Find out more",
                "target": "PAYG_ONE", //PAYG_ONE
                "seq": 1
            }],
            "dismissCross": true,
            "renderType": "Notifications",
            "triggerType": "LOCATION",
            "triggerText": "213,218,220,250,255,259,276,282,283,294,297,302,310:3,310:4,310:6,310:10,310:11,310:12,310:13,310:14,310:15,310:16,310:20,310:23,310:24,310:25,310:26,310:30,310:31,310:34,310:38,310:40,310:46,310:50,310:60,310:70,310:80,310:90,310:100,310:120,310:130,310:150,310:160,310:170,310:180,310:190,310:200,310:210,310:220,310:230,310:240,310:250,310:260,310:270,310:280,310:290,310:300,310:310,310:320,310:330,310:340,310:350,310:360,310:380,310:390,310:400,310:410,310:420,310:430,310:440,310:450,310:460,310:480,310:490,310:500,310:510,310:520,310:530,310:540,310:560,310:570,310:580,310:590,310:600,310:610,310:620,310:630,310:640,310:650,310:660,310:670,310:680,310:690,310:700,310:710,310:730,310:740,310:750,310:760,310:770,310:780,310:790,310:800,310:830,310:850,310:860,310:870,310:880,310:890,310:900,310:910,310:920,310:930,310:940,310:950,310:960,310:970,310:980,310:990,311:0,311:10,311:20,311:30,311:40,311:50,311:70,311:80,311:90,311:100,311:110,311:120,311:130,311:140,311:150,311:170,311:190,311:210,311:220,311:240,311:260,311:270,311:271,311:272,311:273,311:274,311:275,311:276,311:277,311:278,311:279,311:280,311:281,311:282,311:283,311:284,311:285,311:286,311:287,311:288,311:289,311:300,311:310,311:311,311:330,311:340,311:350,311:370,311:380,311:390,311:410,311:420,311:430,311:440,311:460,311:480,311:481,311:482,311:483,311:484,311:485,311:486,311:487,311:488,311:489,311:490,311:500,311:520,311:540,311:590,311:610,311:650,311:660,311:670,311:710,311:730,311:740,311:800,311:810,311:830,311:860,311:870,311:880,311:910,311:920,312,316,330,334,338,342,344,346,348,350,352,354,356,358,360,362,363,365,366,370,372,374,376,401,404,405,410,412,413,414,416,419,420,422,424,425:1,425:2,425:3,425:7,425:8,425:14,425:15,425:16,425:19,425:77,426,427,428,434,440,441,450,452,454,455,456,457,460,466,470,502,505,510,515,520,525,530,537,539,541,542,549,602,604,620,630,639,640,643,651,653,655,659,704,706,708,710,712,714,716,722,724,730,732,738,740,744,746,748"
        }, {
            "id": 3,
            "title": "You're in our Rest of World Zone2",
            "message": "This means you will pay our standard roaming rates.",
            "priority": 90,
            "dismissDuration": 0,
            "dismissDurationUnit": "WEEKS",
            "expiryDate": "30/12/2050",
            "buttons": [{
                "title": "Find out more",
                "target": "TRAVELLING_ABROAD_EXT",
                "seq": 1
            }],
            "dismissCross": true,
            "renderType": "Notifications",
            "triggerType": "LOCATION",
            "triggerText": "257,290,310:32,310:33,310:140,310:370,310:470,311:250,364,368,402,415,417,418,425:5,425:6,429,430,431,432,436,437,438,472,514,528,540,545,546,547,548,603,605,606,607,608,609,610,611,612,613,614,615,616,617,618,619,621,622,623,624,625,626,627,628,629,631,632,633,634,635,638,641,642,645,646,648,649,650,652,654,657,702,736,750"
        }, {
            "id": 16,
            "title": "You're in our Roam Free Zone3",
            "message": "This means you can use your allowance while you roam at no extra cost. This means you can use your allowance while you roam at no extra cost.",
            "priority": 90,
            "dismissDuration": 0,
            "dismissDurationUnit": "MINUTES",
            "expiryDate": "30/12/2050",
            "buttons": [{
                "title": "Find out more",
                "target": "FIND_OUT_MORE_ECARE",
                "seq": 1
            }, {
                "title": "Dismiss",
                "target": "DISMISS",
                "seq": 2
            }],
            "dismissCross": true,
            "renderType": "Offers",
            "backendOfferID": "offer_id",
            "triggerText": "202,204,206,208,212,214,216,219,222,226,228,230,231,232,234:36,234:50,234:51,234:55,238,240,242,244,246,247,248,260,262,266,268,270,272,274,278,280,284,286,288,292,293,295,340,647"
        }, {
            "id": 19,
            "title": "You're in our Roam Free Zone4",
            "message": "This means you can use your allowance while you roam at no extra cost",
            "priority": 90,
            "dismissDuration": 0,
            "dismissDurationUnit": "MINUTES",
            "expiryDate": "30/12/2050",
            "buttons": [{
                "title": "Find out more",
                "target": "FIND_OUT_MORE_ECARE",
                "seq": 1
            }],
            "dismissCross": true,
            "renderType": "Notifications",
            "triggerText": "202,204,206,208,212,214,216,219,222,226,228,230,231,232,234:36,234:50,234:51,234:55,238,240,242,244,246,247,248,260,262,266,268,270,272,274,278,280,284,286,288,292,293,295,340,647"
        }, {
            "id": 17,
            "title": "You're in our Roam Free Zone5",
            "message": "This means you can use your allowance while you roam at no extra cost",
            "priority": 90,
            "dismissDuration": 0,
            "dismissDurationUnit": "MINUTES",
            "expiryDate": "30/12/2050",
            "buttons": [{
                "title": "Find out more",
                "target": "FIND_OUT_MORE_ECARE",
                "seq": 1
            }],
            "dismissCross": true,
            "renderType": "Notifications",
            "triggerText": "202,204,206,208,212,214,216,219,222,226,228,230,231,232,234:36,234:50,234:51,234:55,238,240,242,244,246,247,248,260,262,266,268,270,272,274,278,280,284,286,288,292,293,295,340,647"
        }, {
            "id": 18,
            "title": "You're in our Roam Free Zone6",
            "message": "This means you can use your allowance while you roam at no extra cost",
            "priority": 90,
            "dismissDuration": 0,
            "dismissDurationUnit": "MINUTES",
            "expiryDate": "30/12/2050",
            "buttons": [{
                "title": "Find out more",
                "target": "FIND_OUT_MORE_ECARE",
                "seq": 1
            }],
            "dismissCross": true,
            "renderType": "Notifications",
            "triggerText": "202,204,206,208,212,214,216,219,222,226,228,230,231,232,234:36,234:50,234:51,234:55,238,240,242,244,246,247,248,260,262,266,268,270,272,274,278,280,284,286,288,292,293,295,340,647"
        },{
            "id": 30,
            "title": "You're in our Roam Free Zone90",
            "message": "This means you can use your allowance while you roam at no extra cost",
            "priority": 90,
            "dismissDuration": 0,
            "dismissDurationUnit": "MINUTES",
            "expiryDate": "30/12/2050",
            "buttons": [{
                "title": "Find out more",
                "target": "FIND_OUT_MORE_ECARE",
                "seq": 1
            }],
            "dismissCross": true,
            "renderType": "Notifications",
            "triggerText": "202,204,206,208,212,214,216,219,222,226,228,230,231,232,234:36,234:50,234:51,234:55,238,240,242,244,246,247,248,260,262,266,268,270,272,274,278,280,284,286,288,292,293,295,340,647"
        }]
    });
})

vfuk.get(path + '/v1/billHistory', (req, res) => {
    // Set the status code of the response.
    res.status(400);
    
    // Send the response body.
    res.json({
        "status": {
            "code": 67890, //4131,
            "analytics": {
                "status": "Success",
                "guid": "4c5988c7-96f0-4942-a93d-305de0ee98b4"
            }
        },
        "lastAPICall": "2018-12-24T14:35:42.764+0000",
        "recentBills": [{
            "title": "<b>December<b>",
            "subTitle": "Account: <b>MMVAAGULE BILL</b>",
            "billAmount": "<b>£44.00</b>",
            "balanceDoubleValue": 44.00,
            "billPeriod": "<b>18 Nov 2018</b> - <b>17 Dec 2018</b>",
            "billPaid": false,
            "billText": "Payment due by <b>28 Dec 2018</b>",
            "shortTitle": "Dec",
            "journeyId": "PREVIOUS_EBILL",
            "iconID": 0,
            "primary": true
        }, {
            "title": "<b>November<b>",
            "subTitle": "Account: <b>MMVAAGULE BILL</b>",
            "billAmount": "<b>£107.16</b>",
            "balanceDoubleValue": 107.16,
            "billPeriod": "<b>18 Oct 2018</b> - <b>17 Nov 2018</b>",
            "billPaid": true,
            "billText": "Payment due by <b>28 Nov 2018</b>",
            "shortTitle": "Nov",
            "journeyId": "VIEW_LAST_BILLS",
            "iconID": 0,
            "primary": false
        }, {
            "title": "<b>October<b>",
            "subTitle": "Account: <b>MMVAAGULE BILL</b>",
            "billAmount": "<b>£9.45</b>",
            "balanceDoubleValue": 9.45,
            "billPeriod": "<b>18 Sep 2018</b> - <b>17 Oct 2018</b>",
            "billPaid": false,
            "billText": "Payment due by <b>28 Oct 2018</b>",
            "shortTitle": "Oct",
            "journeyId": "VIEW_LAST_BILLS",
            "iconID": 0,
            "primary": false
        }, {
            "title": "<b>September<b>",
            "subTitle": "Account: <b>MMVAAGULE BILL</b>",
            "billAmount": "<b>£00.00</b>",
            "balanceDoubleValue": 0,
            "billPeriod": "<b>18 Aug 2018</b> - <b>17 Sep 2018</b>",
            "billPaid": false,
            "billText": "Payment due by <b>28 Sep 2018</b>",
            "shortTitle": "Sep",
            "journeyId": "VIEW_LAST_BILLS",
            "iconID": 0,
            "primary": false
        }, {
            "title": "<b>August<b>",
            "subTitle": "Account: <b>MMVAAGULE BILL</b>",
            "billAmount": "<b>£20.37</b>",
            "balanceDoubleValue": 20.37,
            "billPeriod": "<b>18 Jul 2018</b> - <b>17 Aug 2018</b>",
            "billPaid": false,
            "billText": "Payment due by <b>28 Aug 2018</b>",
            "shortTitle": "Aug",
            "journeyId": "VIEW_LAST_BILLS",
            "iconID": 0,
            "primary": false
        }, {
            "title": "<b>July<b>",
            "subTitle": "Account: <b>MMVAAGULE BILL</b>",
            "billAmount": "<b>£28.00</b>",
            "balanceDoubleValue": 28.00,
            "billPeriod": "<b>18 Jun 2018</b> - <b>17 Jul 2018</b>",
            "billPaid": false,
            "billText": "Payment due by <b>28 Jul 2018</b>",
            "shortTitle": "Jul",
            "journeyId": "VIEW_LAST_BILLS",
            "iconID": 0,
            "primary": false
        }],
        "billsHeaderText": "All costs include VAT",
        "cards": [{
            "description": "Set up or manage the payment of your monthly bill via direct debit",
            "actions": [{
                "color": "#000000",
                "text": "Direct Debit",
                "journeyKey": "BILLS_DIRECT_DEBIT"
            }]
        }],
        "accountName": "<b>Account: DONOT ALTER</b>",
        "action": {
            "color": "#E60000",
            "text": "View all bills",
            "journeyKey": "VIEW_LAST_BILLS",
            "viewTag": "VIEW_LAST_BILLS",
            "tapTag": "LatestBills|VIEW_LAST_BILLS"
        }
    });
})

vfuk.get(path + '/v1/subsConfig', (req, res) => {
    // Set the type of response, sets the content type.
    res.type('application/json');
    
    // Set the status code of the response.
    res.status(200);
    
    // Send the response body.
    res.json({
        "status": {
            "code": 0,
            "analytics": {
                "status": "Success",
                "guid": "4ca6715f-8efc-4946-ae6c-746642bbf0af"
            }
        },
        "lastAPICall": "2019-01-02T11:28:13.997+0000",
        "tutorials": {
            "tutorialReset": 1589411721000,
            "items": [
                {
                	"uid": "1",
                    "resourceName": "vfuk_tutorial_tobi",
                    "resourceType": "video",
                    "title": "tobi",
                    "description": "TOBIII a breakdown of your plan in details , TOBIII a breakdown of your plan in details",
                    "timestamp": 1589411601000
                },
                {
    				"uid": "2",
                    "resourceName": "vfuk_tutorial_veryMe",
                    "resourceType": "video",
                    "title": "veryMe",
                    "description": "See a breakdown of your plan in details stubs",
                    "timestamp": 1589411601000
                },
                {
    				"uid": "3",
                    "resourceName": "vfuk_tutorial_yourAccount",
                    "resourceType": "video",
                    "title": "yourAccount",
                    "description": "See a breakdown of your plan in details stubs3",
                    "timestamp": 1589411661000
                },
                {
                	"uid": "4",
                    "resourceName": "vfuk_tutorial_planDetails",
                    "resourceType": "image",
                    "title": "planDetails",
                    "description": "See a VeryMe of your plan in details stubs",
                    "timestamp": 1589411721000
                },
                {
                	"uid": "5",
                    "resourceName": "vfuk_tutorial_topUp",
                    "resourceType": "image",
                    "title": "topUp",
                    "description": "See a VeryMe of your plan in details stubs",
                    "timestamp": 1589411661000
                }
            ]
        },
        "universalLinksMap": {
            "accountsummary": "HOME",
            "coveragechecker": "COVERAGE_CHECKER",
            "accountcontrols": "AOC",
            "usage": "HOME",
            "speedchecker": "NET_PERFORM",
            "eligibility": "HOW_TO_UPGRADE",
            "extras": "BROWSE_EXTRAS",
            "privacy": "VODAFONE_PRIVACY",
            "verymerewards": "LOYALTY_LASSIE",
            "login": "LOGIN",
            "blog": "VODAFONE_BLOG",
            "productsandservices": "MY_PRODUCTS_AND_SERVICES",
            "previousbill": "PREVIOUS_EBILL",
            "passes": "MANAGE_PASSES",
            "appstore": "HOME",
            "storelocator": "STORE_LOCATOR",
            "playstore": "HOME",
            "offers": "MY_OFFERS",
            "app": "HOME",
            "viewbill": "PREVIOUS_BILLS",
            "changeplan": "TARIFF_MIGRATION",
            "upgrade": "UPGRADE_NOW",
            "datacap": "MANAGE_DATA_CAP",
            "ilng": "NETWORK_SATISFACTION",
            "contentcontrol": "BROWSE_EXTRAS",
            "faqs": "HELP",
            "checkupgrade": "HOW_TO_UPGRADE",
            "chat": "ECARE_WEBCHAT",
            "currentcharges": "CURRENT_CHARGES",
            "addextras": "MANAGE_DATA_ADD_ONS_ADD_DATA_EXTRA",
            "inbox": "Notifications",
            "yourplan": "EXTRAS",
            "directdebit": "DIRECT_DEBIT",
            "tradein": "TRADE_IN"
        },
        "advancedSettings": {
            "subscriptionSwitchingEnabled": true,
            "contactSyncEnabled": true,
            "loginEnabled": true,
            "subscriptionSwitcherHidden": false,
            "loyaltyEnabled": true,
            "touchIdEnabled": true,
            "hasNewScreen": true,
            "fetchVoVs": true,
            "maximumNumberOfDiscoverOffers": "3",
            "maximumNumberOfDiscoverAllOffers": "10"
        },
        "cta": {
            "ForgotUsernameAction": "ECARE_FORGOT_USERNAME",
            "EcareRegistrationAction": "ECARE_REGISTRATION",
            "ForgotPasswordAction": "FORGOT_PASSWORD"
        },
        "anonymousCustomerReference": "a6c4637f3abb8326777392a58c9ecd782efa56fc3fc5e87139560a37d44d6b32"
    });
})

vfuk.get(path + '/v1/authToken', (req, res) => {
    // Set the status code of the response.
    res.status(200);
    
    // Send the response body.
    res.json({
        "status": {
            "code": 0,
            "analytics": {
                "status": "SUCCESS",
                "guid": "6213830e-d303-484b-8b17-29abb06bb246"
            }
        },
        "lastAPICall": "2020-10-13T17:11:02",
        "authToken": "MZHReVoJe8g%2FEuOqeVT83zGP4CsrCYLno4Q8RnahSW%2FXhXqrpbyMBJtm2BX9evdWjBicqwIWmmc9LotkZ16WT%2BYqHpeCz14YDpxlhZ8zvYIOXWfkK2oomFD9rdQFRe7AekyPb1SoN0c17n16lPK1KAwRiuIwNOAlHF5Ej0J0UPu2hsFMtSolPGUwW9jEkSHZSuniXfURZKzf0YGRzi9lusVQblyg1HB7wmKoWkSXlZcgotrM9iawHK9%2BRJb3UNjDQ7qlKKUETrbjVN0HzM67nLTN2sceeoULyZQJGPfAN16a%2FcllsXD%2ByZxdAKQ%2F4o78ce%2BII0RCAITnAcg8BMtmjwMrh3bAB3sl%2BHjUMR5slEBQ%2BobkBgm6fb6Zzesz6kk%2BD4yXsfOcLb4J7Q%2FQFzUsonk7BNxeqLBS95xqV261snehtt3UaZLefAJ4GqgewEtRMUdFoVhKncK3mzVHggMYR9U38WJt3hyroQi6qBJFfqr88VzVmH1TIe%2F4OJ571J7CWCUqCg%2BZBvfvwGD%2BBegQcgu%2FGsFhGgdgADYni8SGEh5oHU%2F4jfBjagZlIfUDwskLd8Y0uGA%2BRkV9vUrox3pI18ooaYeXTU1%2B2mb8%2BqRTybcVPJW1Az9Kn1Q0YkPii8Hz9kQbiPU%2BVGGvybSQgRlzYPdk3xVHhV%2F2lUJnpv9TByw%3D"
    });
})

vfuk.post(path + '/v1/passwordLogin', (req, res) => {
    // Set the status code of the response.
    res.status(500);
    
    // Send the response body.
    res.json({
        "status": {
            "code": 4113,
            "analytics": {
                "status": "SUCCESS",
                "guid": "9937dca7-e650-4491-94c6-a07165809415"
            }
        },
        "username": "Elpop",
        "fullAccessToken": "test",
        "accountId": "1234"
    });
})

vfuk.post(path + '/v1/changePin', (req, res) => {
    // Set the status code of the response.
    res.status(200);
    
    // Send the response body.
    res.json({
        "status": {
            "code": 4300,
            "analytics": {
                "status": "SUCCESS",
                "guid": "05e821f4-af1c-4a3a-bb0c-d78945387267"
            }
        }
    });
})

vfuk.post(path + '/v1/pinLogin', (req, res) => {
    // Set the status code of the response.
    res.status(200);
    
    // Send the response body.
    res.json({
        "status": {
            "code": 0,
            "analytics": {
                "status": "SUCCESS",
                "guid": "9937dca7-e650-4491-94c6-a07165809415"
            }
        },
        "username": "Elpop",
        "fullAccessToken": "test",
        "accountId": "7000297816"
    });
})

vfuk.get(path + '/v1/accounts/{accountId}/subscriptions', (req, res) => {
    // Set the type of response, sets the content type.
    res.type('application/json');
    
    
    
    // Send the response body.
    
    if (req.params.accountId == "7000297815") {
        res.status(200);
        res.json({
            "status": {
                "code": 3601,
                "analytics": {
                    "status": "Success",
                    "guid": "5359eca7-6dd0-4595-8f78-9e718b3eae3c"
                }
            },
            "lastAPICall": "2019-03-10T13:14:06.063+0200",
            "subscriptions": [{
                "msisdn": "447123456789",
                "msisdnHash": "d05aad861998d71b72304b5d6004300e6f3bf66672de08c4932ed7822033bd0c",
                "segment": "CONSUMER",
                "backgroundType": "FLOWER_BACKGROUND",
                "subscriptionType": {
                    "name": "MPS",
                    "iconId": "1085",
                    "riderText": "Pay monthly phone"
                },
                "contact": "%Phonebook_lookup%",
                "secondarySubscriptions": [{
                    "iconId": "46",
                    "name": "Vodafone OneNumber"
                }, {
                    "iconId": "46",
                    "name": "Vodafone OneNumber"
                }],
                "callSubsSwitchAPI": true,
                "loginBenefitsEnabled": true,
                "target": "HOME",
                "subTitle": " & OneNumber"
            }, {
                "msisdn": "447386013037",
                "msisdnHash": "d05aad861998d71b72304b5d6004300e6f3bf66672de08c4932ed7822033bd0c",
                "segment": "CONSUMER",
                "backgroundType": "FLOWER_BACKGROUND",
                "subscriptionType": {
                    "name": "MPS",
                    "iconId": "1085",
                    "riderText": "Pay monthly phone"
                },
                "contact": "%Phonebook_lookup%",
                "secondarySubscriptions": [{
                    "iconId": "46",
                    "name": "Vodafone OneNumber"
                }],
                "callSubsSwitchAPI": true,
                "target": "HOME",
                "subTitle": " & OneNumber",
                "isBlackSubscription": true
            }, {
                "msisdn": "447386013038",
                "msisdnHash": "d05aad861998d71b72304b5d6004300e6f3bf66672de08c4932ed7822033bd0c",
                "segment": "CONSUMER",
                "backgroundType": "FLOWER_BACKGROUND",
                "subscriptionType": {
                    "name": "MPS",
                    "iconId": "1086",
                    "riderText": "Mobile broadband phone"
                },
                "contact": "%Phonebook_lookup%",
                "secondarySubscriptions": [{
                    "iconId": "46",
                    "name": "Vodafone OneNumber"
                }],
                "callSubsSwitchAPI": true,
                "target": "HOME",
                "subTitle": " & OneNumber"
            }, {
                "msisdn": "447386013039",
                "msisdnHash": "d05aad861998d71b72304b5d6004300e6f3bf66672de08c4932ed7822033bd0c",
                "segment": "CONSUMER",
                "backgroundType": "FLOWER_BACKGROUND",
                "subscriptionType": {
                    "name": "MPS",
                    "iconId": "1085",
                    "riderText": "Pay monthly phone"
                },
                "contact": "%Phonebook_lookup%",
                "secondarySubscriptions": [{
                    "iconId": "46",
                    "name": "Vodafone OneNumber"
                }],
                "callSubsSwitchAPI": true,
                "target": "HOME",
                "subTitle": " & OneNumber"
            }, {
                "msisdn": "447386013040",
                "msisdnHash": "d05aad861998d71b72304b5d6004300e6f3bf66672de08c4932ed7822033bd0c",
                "segment": "CONSUMER",
                "backgroundType": "FLOWER_BACKGROUND",
                "subscriptionType": {
                    "name": "MPS",
                    "iconId": "1085",
                    "riderText": "Pay monthly phone"
                },
                "contact": "%Phonebook_lookup%",
                "secondarySubscriptions": [{
                    "iconId": "46",
                    "name": "Vodafone OneNumber"
                }],
                "callSubsSwitchAPI": true,
                "target": "HOME"
            }, {
                "msisdn": "447386013041",
                "msisdnHash": "d05aad861998d71b72304b5d6004300e6f3bf66672de08c4932ed7822033bd0c",
                "segment": "CONSUMER",
                "backgroundType": "FLOWER_BACKGROUND",
                "subscriptionType": {
                    "name": "MPS",
                    "iconId": "1086",
                    "riderText": "Mobile broadband phone"
                },
                "contact": "%Phonebook_lookup%",
                "secondarySubscriptions": [{
                    "iconId": "46",
                    "name": "Vodafone OneNumber"
                }],
                "callSubsSwitchAPI": true,
                "target": "HOME"
            }, {
                "msisdn": "447386013042",
                "msisdnHash": "d05aad861998d71b72304b5d6004300e6f3bf66672de08c4932ed7822033bd0c",
                "segment": "CONSUMER",
                "backgroundType": "FLOWER_BACKGROUND",
                "subscriptionType": {
                    "name": "MPS",
                    "iconId": "1085",
                    "riderText": "Pay as you go phone"
                },
                "contact": "%Phonebook_lookup%",
                "secondarySubscriptions": [],
                "callSubsSwitchAPI": true,
                "target": "HOME"
            }, {
                "msisdn": "447386013043",
                "msisdnHash": "d05aad861998d71b72304b5d6004300e6f3bf66672de08c4932ed7822033bd0c",
                "segment": "CONSUMER",
                "backgroundType": "FLOWER_BACKGROUND",
                "subscriptionType": {
                    "name": "MPS",
                    "iconId": "1088",
                    "riderText": "Fixed line number"
                },
                "contact": "%Phonebook_lookup%",
                "secondarySubscriptions": [],
                "callSubsSwitchAPI": true,
                "target": "HOME",
                "isBlackSubscription": true
            }, {
                "msisdn": "447386013044",
                "msisdnHash": "d05aad861998d71b72304b5d6004300e6f3bf66672de08c4932ed7822033bd0c",
                "segment": "CONSUMER",
                "backgroundType": "FLOWER_BACKGROUND",
                "subscriptionType": {
                    "name": "MPS",
                    "iconId": "1085",
                    "riderText": "Pay as you go phone"
                },
                "contact": "%Phonebook_lookup%",
                "secondarySubscriptions": [],
                "callSubsSwitchAPI": true,
                "target": "HOME",
                "isBlackSubscription": true
            }, {
                "msisdn": "447386013045",
                "msisdnHash": "d05aad861998d71b72304b5d6004300e6f3bf66672de08c4932ed7822033bd0c",
                "segment": "CONSUMER",
                "backgroundType": "FLOWER_BACKGROUND",
                "subscriptionType": {
                    "name": "MPS",
                    "iconId": "1087",
                    "riderText": "Home broadband phone"
                },
                "contact": "%Phonebook_lookup%",
                "secondarySubscriptions": [],
                "callSubsSwitchAPI": true,
                "isBlackSubscription": true
            }]
        });
    
    } else if (req.params.accountId == "7000297817") {
        // Set the status code of the response.
        res.status(500);
        res.json({
            "status": {
                "code": 3400,
                "analytics": {
                    "status": "Success",
                    "guid": "5359eca7-6dd0-4595-8f78-9e718b3eae3c"
                }
            },
            "lastAPICall": "2019-03-10T13:14:06.063+0200",
            "subscriptions": [{
                    "msisdn": "44788888888",
                    "msisdnHash": "d05aad861998d71b72304b5d6004300e6f3bf66672de08c4932ed7822033bd0c",
                    "segment": "CONSUMER",
                    "backgroundType": "FLOWER_BACKGROUND",
                    "subscriptionType": {
                        "name": "MPS",
                        "iconId": "1088",
                        "riderText": "Pay monthly phone"
                    },
                    "contact": "%Phonebook_lookup%",
                    "secondarySubscriptions": [{
                        "iconId": "46",
                        "name": "Vodafone OneNumber"
                    }, {
                        "iconId": "46",
                        "name": "Vodafone OneNumber"
                    }],
                    "callSubsSwitchAPI": false,
                    "target": "ONE_NUMBER",
                    "isBlackSubscription": true,
                    "loginBenefitsEnabled": true,
                }, {
                    "msisdn": "44788888881",
                    "msisdnHash": "d05aad861998d71b72304b5d6004300e6f3bf66672de08c4932ed7822033bd0c",
                    "segment": "CONSUMER",
                    "backgroundType": "FLOWER_BACKGROUND",
                    "subscriptionType": {
                        "name": "MPS",
                        "iconId": "1088",
                        "riderText": "Pay monthly phone"
                    },
                    "contact": "%Phonebook_lookup%",
                    "secondarySubscriptions": [{
                        "iconId": "46",
                        "name": "Vodafone OneNumber"
                    }, {
                        "iconId": "46",
                        "name": "Vodafone OneNumber"
                    }],
                    "callSubsSwitchAPI": false,
                    "target": "ONE_NUMBER",
                    "isBlackSubscription": true,
                    "loginBenefitsEnabled": true,
                }
            ]
        });
    } else {
        // Set the status code of the response.
        res.status(200);
        res.json({
            "status": {
                "code": 3601,
                "analytics": {
                    "status": "Success",
                    "guid": "5359eca7-6dd0-4595-8f78-9e718b3eae3c"
                }
            },
            "lastAPICall": "2019-03-10T13:14:06.063+0200",
            "subscriptions": [{
                "msisdn": "44788888788",
                "msisdnHash": "d05aad861998d71b72304b5d6004300e6f3bf66672de08c4932ed7822033bd0c",
                "segment": "CONSUMER",
                "backgroundType": "FLOWER_BACKGROUND",
                "subscriptionType": {
                    "name": "MPS",
                    "iconId": "1085",
                    "riderText": "Pay monthly phone"
                },
                "contact": "%Phonebook_lookup%",
                "secondarySubscriptions": [],
                "callSubsSwitchAPI": true,
                "target": "HOME"
            }, {
                "msisdn": "44788888879",
                "msisdnHash": "d05aad861998d71b72304b5d6004300e6f3bf66672de08c4932ed7822033bd0c",
                "segment": "CONSUMER",
                "backgroundType": "FLOWER_BACKGROUND",
                "subscriptionType": {
                    "name": "MBB",
                    "iconId": "1088",
                    "riderText": "Mobile Broadband"
                },
                "callSubsSwitchAPI": true,
                "target": "HOME"
            }]
        });
    }
})

vfuk.get(path + '/v1/networkSatisfaction', (req, res) => {
    // Set the type of response, sets the content type.
    res.type('application/json');
    
    // Set the status code of the response.
    res.status(200);
    
    // Send the response body.
    res.json({
        "status": {
            "code": 0,
            "analytics": {
                "status": "SUCCESS"
            }
        },
        "networkSatisfactionCard": {
            "title": "Call cut out? Slow connection?",
            "iconId": 34,
            "description": "We'd love to get your feedback in the unlikely event you're not satisfied, so we can continue to build an even bigger and better network for you.<br/><br/><b>In return, we'll even give you a data bonus.</b>",
            "actions": [{
                "text": "Start",
                "color": "#E60000",
                "journeyKey": "NETWORK_FEEDBACK_CENTER",
                "viewTag": "networkSatisfaction",
                "tapTag": "start"
            }],
            "clickableLink": {
                "text": "Eligibility criteria",
                "journeyKey": "HOME",
                "tapTag": "eligiblityCriteria"
            }
        }
    });
})

vfuk.get(path + '/v1/currentCharges', (req, res) => {
    res.type('application/json');
    
    res.status(200);
    
    // Send the response body.
    res.json({
        "status": {
            "code": 0,
            "analytics": {
                "status": "Success",
                "guid": "b8f1b61e-2c6b-4074-b370-83f0014c38d0"
            }
        },
        "lastAPICall": "2018-12-24T14:36:35.193+0000",
        "currentCharges": {
            "title": "Current charges for 07123456789",
            "subTitle": "<b>Your monthly charges are currently:</b>",
            "balance": "<b>£0.00</b>",
            "billPeriod": "For period <b>18 Dec 2018</b> - <b>17 Jan 2019</b>",
            "billText": "Your bill will be available: <b>18 Jan 2019</b>",
            "contact": "%Phonebook_lookup%'s phone",
            "plan": {
                "title": "Monthly bundle:",
                "amount": "<b>£0.00</b>",
                "description": "Incl. 4GB Red Extra plan,Vodafone Secure Net,WiFi and 4G calling,Unlimited texts,4GB data,Unlimited UK minutes,Postpay Service Profile,Pay Monthly CTR13 Tariff,3GB Wi-fi,Vodafone Global Roaming,4G,Mobile Phone Service Line Rental"
            },
            "charges": {
                "title": "Additional charges:",
                "amount": "<b>£0.00</b>"
            }
        },
        "action": {
            "color": "#E60000",
            "text": "Find out more",
            "journeyKey": "VIEW_ITEMISED_BILL",
            "viewTag": "VIEW_ITEMISED_BILL",
            "tapTag": "CurrentCharges|VIEW_ITEMISED_BILL"
        }
    });
})

vfuk.post(path + '/v1/sendILNG', (req, res) => {
    // Set the status code of the response.
    res.status(200);
    
    // Send the response body.
    res.json({
        "status": {
            "code": 3400,
            "analytics": {
                "status": "SUCCESS",
                "guid": "05e821f4-af1c-4a3a-bb0c-d78945387267"
            }
        },
        "receivedDate": "2018-11-25T23:59:59.000+0000",
        "submitIlngScreenContent": [{
            "title": "<b>Thanks for your feedback</b>",
            "iconId": 45,
            "description": "We really appreciate your views and are working hard to make the UK’s #1 network for voice even bigger and better.",
            "footer": "Thanks",
            "clickableLink": {
                "text": "<u>See data bonus eligibility</u>",
                "journeyKey": "ILNG_REWARD_ELIGIBILITY",
                "tapTag": "ILNG|ILNG_REWARD_ELIGIBILITY"
            },
            "displayType": "CARD",
            "actions": [{
                "color": "#E60000",
                "text": "Finish",
                "journeyKey": "ILNG_SUBMIT",
                "viewTag": "ILNG_SUBMIT",
                "tapTag": "ILNG|ILNG_SUBMIT"
            }]
        }]
    });
})

vfuk.get(path + '/v1/sharerDetail', (req, res) => {
    // Set the type of response, sets the content type.
    res.type('application/json');
    
    // Set the status code of the response.
    res.status(200);
    
    // Send the response body.
    res.json({
        "status": {
            "code": 0,
            "analytics": {
                "status": "Success",
                "guid": "483174c6-983c-4791-91be-ba823f63f5e9"
            }
        },
        "lastAPICall": "2019-10-13T11:43:00",
        "sharers": [{
            "ctn": "447386011967",
            "unlimited": false,
            "usageSummary": "<b>0MB</b> used<br>No limit set",
            "limitSet": false,
            "iconId": 0,
            "contact": "%Phonebook_lookup%"
        }, {
            "ctn": "447386011968",
            "unlimited": false,
            "usageSummary": "<b>0MB</b> used<br>No limit set",
            "limitSet": false,
            "iconId": 0,
            "contact": "%Phonebook_lookup%"
        }],
        "groupData": {
            "header": "Group data",
            "title": "61.0",
            "subTitle": "GB of 61.0GB left",
            "unlimited": false,
            "iconId": 22,
            "allowanceType": "GROUP_DATA",
            "percentageRemaining": 100.0,
            "selected": false,
            "includedMb": 62464.0,
            "remainingUnit": "GB",
            "total": "61.0",
            "totalUnit": "GB"
        },
        "cta": {
            "RedSharerSMSAction": "REDSHARER_SMS"
        },
        "dataLimits": [{
            "limit": "0.5",
            "message": "CHANGE DATA LIMIT #ctn# 500MB",
            "limitMb": 512.0
        }, {
            "limit": "1",
            "message": "CHANGE DATA LIMIT #ctn# 1GB",
            "limitMb": 1024.0
        }, {
            "limit": "2",
            "message": "CHANGE DATA LIMIT #ctn# 2GB",
            "limitMb": 2048.0
        }, {
            "limit": "4",
            "message": "CHANGE DATA LIMIT #ctn# 4GB",
            "limitMb": 4096.0
        }, {
            "limit": "8",
            "message": "CHANGE DATA LIMIT #ctn# 8GB",
            "limitMb": 8192.0
        }, {
            "limit": "12",
            "message": "CHANGE DATA LIMIT #ctn# 12GB",
            "limitMb": 12288.0
        }]
    });
})

vfuk.get(path + '/v1/hint', (req, res) => {
    // Set the status code of the response.
    res.status(200);
    
    // Send the response body.
    res.json({
        "status": {
            "code": 4125, //Complex: 4125,
            "analytics": {
                "status": "Success"
            }
        },
        "hint": "#hint",
        "accountId": "#accountId",
        "contactId": "#contactId"
    });
})

vfuk.get(path + '/v1/username', (req, res) => {
    // Set the status code of the response.
    res.status(200);
    
    // Send the response body.
    res.json({
        "status": {
            "code": 4127,
            "analytics": {
                "status": "Success"
            }
        },
        "username": "#username"
    });
})

vfuk.post(path + '/v1/resetPassword', (req, res) => {
    // Set the type of response, sets the content type.
    res.type('application/json');
    
    // Set the status code of the response.
    res.status(200);
    
    // Send the response body.
    res.json({
        "status": {
            "code": 0,
            "analytics": {
                "status": "SUCCESS",
                "guid": "9937dca7-e650-4491-94c6-a07165809415"
            }
        },
        "username": "Elpop",
        "accountId": "Fady"
    });
})

vfuk.post(path + '/v2/updatePassword', (req, res) => {
    // Set the status code of the response.
    res.status(200);
    
    // Send the response body.
    res.json({
        "status": {
            "code": 0,
            "analytics": {
                "status": "SUCCESS",
                "guid": "9937dca7-e650-4491-94c6-a07165809415"
            }
        },
        "username": "Elpop",
        "fullAccessToken": "test",
        "accountId": "Fady"
    });
})

vfuk.post(path + '/v1/ssoToken', (req, res) => {
    // Set the type of response, sets the content type.
    res.type('application/json');
    
    // Set the status code of the response.
    res.status(200);
    
    // Send the response body.
    res.json({
        "status": {
            "code": 5501,
            "analytics": {
                "status": "Success"
            }
        },
        "obSSOCookie": "a3sgblykYqPNZ43NiPYhs56pXWqeFRtDANzL9jdRdE2C/h9xAsyqtf1MaA0XwcNPmZOaqqb85zqSiMqIrR9KbECjr9rBIM69tw1F61/g3dui4CA3NtLS/0x1K5dD9KONkQyafkXH9ODYVuf0V8oT/nz7aCnxQ1VkEwXJINwVHpeV+NoS5deVmYizoCOvo+gql/Dj8Rt/l3lfOMVE5zcKfHwImnN2yAi2yjAo6VAAsOqHioeH7A/Ub6szJgJdR321O09Rl/Jg6MtnkdXhCVVPcST1G0MljuABZA5cwvcLI0mCdO/qZlIBjM8BAV1sV0HfIV2/mrk4+yaH3rkPCpJq01N5GJbOdm+m4oL4QP9yRQikxlUZRsPk4YUqHdhFZacQEmgdL8hg5aIyS6DZEUODDW9fOWkeeJ9nXJQ+x9/Ntq/V6JYdjMjW2jTLeB0f5JXW3D0UzwVFbVwKnMPd6k8mSxZLnQUzdOubCle6RU4MtW7aCyLGFWWzJ0akpVBQ35cw2nfWPNs6zkP1UXf6RNt2A6BjWXt+TwKjeol97BCLeTsyGSz/dfMMyEKz+NbMuqGZ",
        "mspHansoloToken": "ceb6155e1a1e183401ece03647f56dba69d15007693f8dd9df5be5c21ea1e75c",
        "vfSessionKey": "ceb6155e1a1e183401ece03647f56dba69d15007693f8dd9df5be5c21ea1e75c"
    });
})

vfuk.get(path + '/v2/softToken', (req, res) => {
    // Send the response body.
    if (req.get("Subscription") == "447123456788") {
        // Set the status code of the response.
        res.status(500);
        res.json({
            "status": {
                "code": 2111,
                "analytics": {
                    "status": "SUCCESS"
                }
            },
            "backendJwtSoftToken": "eyJhbGciOiJIUzI1NiJ9.eyJpYXQiOjE1MTczMzQzNzYsImF1dGhDb250ZXh0Ijp7InVzZXJOYW1lIjoiV0FUU0FQUDEiLCJjb250YWN0SWQiOiIxLTM5WjRKN1giLCJzY29wZSI6IiIsImNoYW5uZWxJZCI6IlYwWCIsImFjY291bnRzIjpudWxsfSwiZXhwIjoxNTE3MzM3OTc2fQ.NGOFoOVRDBGKGNXE-UNUw6niu8We2yu2SwjoP3lgKHM",
            "subscriptionRef": "447123456788"
        });
    } else if (req.get("Subscription") == null) {
        res.status(200);
        res.json({
            "status": {
                "code": 4146,
                "analytics": {
                    "status": "SUCCESS"
                }
            },
            "backendJwtSoftToken": "eyJhbGciOiJIUzI1NiJ9.eyJpYXQiOjE1MTczMzQzNzYsImF1dGhDb250ZXh0Ijp7InVzZXJOYW1lIjoiV0FUU0FQUDEiLCJjb250YWN0SWQiOiIxLTM5WjRKN1giLCJzY29wZSI6IiIsImNoYW5uZWxJZCI6IlYwWCIsImFjY291bnRzIjpudWxsfSwiZXhwIjoxNTE3MzM3OTc2fQ.NGOFoOVRDBGKGNXE-UNUw6niu8We2yu2SwjoP3lgKHM",
            "subscriptionRef": "447386011182"
        });
    } else {
        res.status(200);
        res.json({
            "status": {
                "code": 0,
                "analytics": {
                    "status": "SUCCESS"
                }
            },
            "backendJwtSoftToken": "eyJhbGciOiJIUzI1NiJ9.eyJpYXQiOjE1MTczMzQzNzYsImF1dGhDb250ZXh0Ijp7InVzZXJOYW1lIjoiV0FUU0FQUDEiLCJjb250YWN0SWQiOiIxLTM5WjRKN1giLCJzY29wZSI6IiIsImNoYW5uZWxJZCI6IlYwWCIsImFjY291bnRzIjpudWxsfSwiZXhwIjoxNTE3MzM3OTc2fQ.NGOFoOVRDBGKGNXE-UNUw6niu8We2yu2SwjoP3lgKHM",
            "subscriptionRef": req.get("Subscription")
        });
    }
})

vfuk.post(path + '/v2/passwordLogin', (req, res) => {
    // Set the status code of the response.
    res.status(200);
    
    // Send the response body.
    res.json({
        "status": {
            "code": 0, //temp 4118, Invalid 4114
            "analytics": {
                "status": "SUCCESS",
                "guid": "9937dca7-e650-4491-94c6-a07165809415"
            }
        },
        "username": "sayeh",
        "fullAccessToken": "testSuccess",
        "accountId": "7000297815"
    });
})

vfuk.post(path + '/v2/pinLogin', (req, res) => {
    // Set the status code of the response.
    res.status(200);
    
    // Send the response body.
    res.json({
        "status": {
            "code": 4115,
            "analytics": {
                "status": "SUCCESS",
                "guid": "9937dca7-e650-4491-94c6-a07165809415"
            }
        },
        "username": "Sayeh",
        "fullAccessToken": "test",
        "accountId": "7000297815"
    });
})

vfuk.get(path + '/v1/accounts', (req, res) => {
    res.status(200);
    
    // Send the response body.
    res.json({
        "status": {
            "code": 0, //4300, //4123 Invalid JWT, //4112 Invalid full access token //4134 Invalid OTAC
            "analytics": {
                "status": "SUCCESS",
                "guid": "cc56b63e-30b6-4adc-8c25-ea9d36e54a4a"
            }
        },
        "authTokenL3": "AuthTokenL3",
        "accounts": [{
            "accountId": "7000297817",
            "accountName": "DONOT ALTER OWNER",
            "accountType": "Consumer",
            "accountIdHash": "d05aad861998d71b72304b5d6004300e6f3bf66672de08c4932ed7822033bd0c"
        }, {
            "accountId": "7000297815",
            "accountName": "DONOT ALTER OWNER",
            "accountType": "Consumer",
            "accountIdHash": "d05aad861998d71b72304b5d6004300e6f3bf66672de08c4932ed7822033bd0c"
        }, {
            "accountId": "7000297814",
            "accountName": "DONOT ALTER OWNER",
            "accountType": "Consumer",
            "accountIdHash": "d05aad861998d71b72304b5d6004300e6f3bf66672de08c4932ed7822033bd0c"
        }]
    });
})

vfuk.get(path + '/v2/subscriptionList', (req, res) => {
    // Set the type of response, sets the content type.
    res.type('application/json');
    
    // Set the status code of the response.
    res.status(200);
    
    // Send the response body.
    res.json({  
   "status":{  
   },
   "accounts":[  
      {  
         "accountID":"34905843",
         "name":"Account 1",
         "activeAccount":false,
         "subscriptions":[  
            {  
               "msisdn":"447123456779",
               "segment":"CONSUMER",
               "subscriptionType":{  
                  "name":"MPS",
                  "iconId":"28",
                  "riderText":"Pay monthly phone"
               },
               "secondarySubscriptions":[  
                  {  
                     "name":"MPS",
                     "iconId":"28"
                  },
                  {  
                     "name":"MPS",
                     "iconId":"28"
                  }
               ]
            },
            {  
               "msisdn":"447123456729",
               "segment":"CONSUMER",
               "subscriptionType":{  
                  "name":"MPS",
                  "iconId":"28",
                  "riderText":"Pay monthly phone"
               },
               "secondarySubscriptions":[  
                  {  
                     "name":"MPS",
                     "iconId":"28"
                  },
                  {  
                     "name":"MPS",
                     "iconId":"28"
                  }
               ]
            }
         ]
      },
      {  
         "accountID":"34905844",
         "name":"Account 2",
         "activeAccount":true,
         "subscriptions":[  
            {  
               "msisdn":"447386008239",
               "segment":"CONSUMER",
               "subscriptionType":{  
                  "name":"MPS",
                  "iconId":"32",
                  "riderText":"Broadband"
               }
            },
            {  
               "msisdn":"447123456789",
               "segment":"CONSUMER",
               "subscriptionType":{  
                  "name":"MPS",
                  "iconId":"28",
                  "riderText":"Pay as you go phone"
               },
               "secondarySubscriptions":[  
                  {  
                     "name":"MPS",
                     "iconId":"28"
                  },
                  {  
                     "name":"MPS",
                     "iconId":"28"
                  }
               ]
            }
         ]
      },
      {  
         "accountID":"34905845",
         "name":"Account 3",
         "activeAccount":false,
         "subscriptions":[  
            {  
               "msisdn":"447123456787",
               "segment":"CONSUMER",
               "subscriptionType":{  
                  "name":"MPS",
                  "iconId":"33",
                  "riderText":"Mobile Broadband"
               },
               "secondarySubscriptions":[  
                  {  
                     "name":"MPS",
                     "iconId":"28"
                  },
                  {  
                     "name":"MPS",
                     "iconId":"28"
                  }
               ]
            },
            {  
               "msisdn":"447386008237",
               "segment":"CONSUMER",
               "subscriptionType":{  
                  "name":"MPS",
                  "iconId":"28",
                  "riderText":"Pay monthly phone"
               },
               "secondarySubscriptions":[  
                  {  
                     "name":"MPS",
                     "iconId":"28"
                  },
                  {  
                     "name":"MPS",
                     "iconId":"28"
                  }
               ]
            },
            {  
               "msisdn":"447386008234",
               "segment":"CONSUMER",
               "subscriptionType":{  
                  "name":"MPS",
                  "iconId":"28",
                  "riderText":"Pay monthly phone"
               },
               "secondarySubscriptions":[  
                  {  
                     "name":"MPS",
                     "iconId":"28"
                  },
                  {  
                     "name":"MPS",
                     "iconId":"28"
                  }
               ]
            },
            {  
               "msisdn":"447386008235",
               "segment":"CONSUMER",
               "subscriptionType":{  
                  "name":"MPS",
                  "iconId":"28",
                  "riderText":"Pay monthly phone"
               },
               "secondarySubscriptions":[  
                  {  
                     "name":"MPS",
                     "iconId":"28"
                  },
                  {  
                     "name":"MPS",
                     "iconId":"28"
                  }
               ]
            },
            {  
               "msisdn":"447386008236",
               "segment":"CONSUMER",
               "subscriptionType":{  
                  "name":"MPS",
                  "iconId":"28",
                  "riderText":"Pay monthly phone"
               },
               "secondarySubscriptions":[  
                  {  
                     "name":"MPS",
                     "iconId":"28"
                  },
                  {  
                     "name":"MPS",
                     "iconId":"28"
                  }
               ]
            },
            {  
               "msisdn":"447386008214",
               "segment":"CONSUMER",
               "subscriptionType":{  
                  "name":"MPS",
                  "iconId":"28",
                  "riderText":"Pay monthly phone"
               },
               "secondarySubscriptions":[  
                  {  
                     "name":"MPS",
                     "iconId":"28"
                  },
                  {  
                     "name":"MPS",
                     "iconId":"28"
                  }
               ]
            },
            {  
               "msisdn":"447386008213",
               "segment":"CONSUMER",
               "subscriptionType":{  
                  "name":"MPS",
                  "iconId":"28",
                  "riderText":"Pay monthly phone"
               },
               "secondarySubscriptions":[  
                  {  
                     "name":"MPS",
                     "iconId":"28"
                  },
                  {  
                     "name":"MPS",
                     "iconId":"28"
                  }
               ]
            },
            {  
               "msisdn":"447386008212",
               "segment":"CONSUMER",
               "subscriptionType":{  
                  "name":"MPS",
                  "iconId":"28",
                  "riderText":"Pay monthly phone"
               },
               "secondarySubscriptions":[  
                  {  
                     "name":"MPS",
                     "iconId":"28"
                  },
                  {  
                     "name":"MPS",
                     "iconId":"28"
                  }
               ]
            }
         ]
      }
   ]
});
})

vfuk.get(path + '/v1/subscriptionSwitch', (req, res) => {
    // Set the type of response, sets the content type.
    res.type('application/json');
    
    // Set the status code of the response.
    res.status(200);
    
    // Send the response body.
    res.json({
        "status": {
            "code": 3501,
            "analytics": {
                "status": "Success",
                "guid": "5359eca7-6dd0-4595-8f78-9e718b3eae3c"
            }
        },
        "lastAPICall": "2019-03-10T13:14:06.063+0200",
        "fullAccessToken": "eyJhbGciOiJIUzI1NiJ9.eyJwbGF0Zm9ybV9zZXNzaW9uX2lkIjoiMTg5M2JmNWQtYmVmNS00MDYzLTg4NmMtOTA5MTg2ODZmNTI2IiwiYXNzdXJhbmNlX2xldmVsIjoiMiIsImNvbnRhY3RfaWQiOiIxLTJYWERWWUoiLCJ1c2VybmFtZSI6InBheWFsNzAwMDIyMTgwOSIsImdpdmVuX25hbWUiOiJQQVlBTCBJTk5BTkkiLCJudW1iZXJfb2ZfYWNjb3VudHMiOiIxIiwiYWNjb3VudCI6eyJpZCI6IjcwMDAyMjE4MDkiLCJ0eXBlIjoiQ29uc3VtZXIiLCJjYXRlZ29yeSI6IkluZGl2aWR1YWwiLCJzdWJfY2F0ZWdvcnkiOiJDb25zdW1lciIsInJvbGVzIjoib3duZXIiLCJzdGF0dXMiOiJBY3RpdmUiLCJwYXJlbnRfYWNjb3VudF9pZCI6bnVsbCwibnVtYmVyX29mX3N1YnNjcmlwdGlvbnMiOiIyIn0sInN1YnNjcmlwdGlvbiI6eyJpZCI6IjQ0NzM4NzkxMDAyMiIsInR5cGUiOiJTSU1PIiwicm9sZXMiOiJvd25lciIsInBheW1lbnRfdHlwZSI6IlBvc3RwYWlkIiwic3RhdHVzIjoiQWN0aXZlIiwiYmlsbGluZ19hY2NvdW50X2lkIjoiNzAwMDIyMTgxMyIsImJpbGxpbmdfcHJvZmlsZV9pZCI6IjEtMlhYRk01RyJ9LCJqdGkiOiJtaWciLCJpYXQiOjE1NTQ3MjgxNTQsInN1YiI6ImF1dGhvcml6YXRpb24iLCJpc3MiOiJEQUwiLCJleHAiOjE1NTQ3MDAwMjR9.Z5xgOe_5ELstOr5ZLSxjvUDJuJW5yCFwOV8t6dv4BaM"
    });
})

vfuk.get(path + '/v1/subscriptionList', (req, res) => {
    // Set the type of response, sets the content type.
    res.type('application/json');
    
    // Set the status code of the response.
    res.status(500);
    
    // Send the response body.
    res.json({
        "status": {
            "code": 4300,
            "analytics": {
                "status": "Success",
                "guid": "f7fa631b-41e5-4c65-b25b-38a3e2e6ff4f"
            }
        },
        "subscriptions": [{
            "msisdn": req.get("Subscription"),
            "accountId": "1234",
            "segment": "CONSUMER",
            "subscriptionType": {
                "name": "MPS",
                "iconId": "28",
                "riderText": "Pay monthly phone"
            },
            "contact": "%Phonebook_lookup%"
        }, {
            "msisdn": "447386008238",
            "accountId": "1235",
            "segment": "CONSUMER",
            "subscriptionType": {
                "name": "MPS",
                "iconId": "31",
                "riderText": "Pay monthly phone"
            }
        }, {
            "msisdn": "447386008239",
            "accountId": "1236",
            "segment": "PREPAY",
            "subscriptionType": {
                "name": "MPS",
                "iconId": "28",
                "riderText": "Pay as you go phone"
            },
            "contact": "%Phonebook_lookup%"
        }, {
            "msisdn": "447386008240",
            "accountId": "1237",
            "segment": "PREPAY",
            "subscriptionType": {
                "name": "MPS",
                "iconId": "32",
                "riderText": "Pay as you go phone"
            },
            "contact": "%Phonebook_lookup%"
        }, {
            "msisdn": "447386008237",
            "accountId": "1238",
            "segment": "CONSUMER",
            "subscriptionType": {
                "name": "MPS",
                "iconId": "33",
                "riderText": "Pay monthly phone"
            },
            "contact": "%Phonebook_lookup%"
        }, {
            "msisdn": "447386008236",
            "accountId": "1239",
            "segment": "CONSUMER",
            "subscriptionType": {
                "name": "MPS",
                "iconId": "28",
                "riderText": "Pay monthly phone"
            }
        }]
    });
})

vfuk.get(path + '/v3/plan', (req, res) => {
    // Set the type of response, sets the content type.
    res.type('application/json');
    
    // Set the status code of the response.
    res.status(200);
    
    // Send the response body.
    res.json({
        "status": {
            "code": 0,
            "analytics": {
                "status": "Success",
                "guid": "e0fe1988-3796-4143-93a6-4f30bed55ee5"
            }
        },
        "cards": [
            {
                "title": "<b>Fancy a new phone?</b>",
                "text": "You can upgrade your device today. Or you can upgrade to a SIM only plan on 02 Apr 2023",
                "actions": [
                    {
                        "color": "#E60000",
                        "text": "Upgrade now",
                        "journeyKey": "UPGRADE_NOW",
                        "viewTag": "upgrade now",
                        "tapTag": "how to upgrade|upgrade now"
                    }
                ],
                "displayType": "CARD"
            },
            {
                "title": "Red 20GB",
                "sections": [
                    {
                        "title": "<b>Your Plan</b>",
                        "renderType": "TABLE",
                        "list": [
                            {
                                "leftAlignedText": "Data",
                                "rightAlignedText": "20.0 GB data"
                            }
                        ]
                    },
                    {
                        "title": "<b>Contract</b>",
                        "renderType": "TABLE",
                        "list": [
                            {
                                "leftAlignedText": "Agreement ends",
                                "rightAlignedText": "16 Jun 2023"
                            },
                            {
                                "leftAlignedText": "Upgrade from",
                                "rightAlignedText": "02 Apr 2023"
                            }
                        ]
                    },
                    {
                        "title": "<b>Includes</b>",
                        "visibleSubItemsCount": 5,
                        "renderType": "CHEVRONLIST",
                        "list": [
                            {
                                "title": "Inclusive roaming in 51 European destinations",
                                "subContent": {
                                    "subContentHeader": "Inclusive roaming in 51 European destinations",
                                    "subContentText": "<p>You can take your home plan abroad to 51 European destinations. Use your usual allowance of data, minutes and texts at no extra cost. Inclusive roaming data on all unlimited plans has a 25GB roaming fair use policy.</p>\n<strong>Inclusive destinations:</strong>\n<br />\n<ul style=\"list-style: none;\">\n<li>Aland Islands</li>\n<li>Austria</li>\n<li>Azores</li>\n<li>Balearic Islands</li>\n<li>Belgium</li>\n<li>Bulgaria</li>\n<li>Canary Islands</li>\n<li>Croatia</li>\n<li>Cyprus except Northern Cyprus</li>\n<li>Czech Republic</li>\n<li>Denmark</li>\n<li>Estonia</li>\n<li>Faroe Islands</li>\n<li>Finland</li>\n<li>France (incl. Corsica)</li>\n<li>French Guiana</li>\n<li>Germany</li>\n<li>Gibraltar</li>\n<li>Greece</li>\n<li>Guadeloupe</li>\n<li>Guernsey</li>\n<li>Hungary</li>\n<li>Iceland</li>\n<li>Ireland</li>\n<li>Isle of Man</li>\n<li>Italy</li>\n<li>Jersey</li>\n<li>Latvia</li>\n<li>Liechtenstein</li>\n<li>Lithuania</li>\n<li>Luxembourg</li>\n<li>Madeira</li>\n<li>Malta</li>\n<li>Martinique</li>\n<li>Mayotte</li>\n<li>Monaco</li>\n<li>Netherlands</li>\n<li>Norway</li>\n<li>Poland</li>\n<li>Portugal</li>\n<li>Reunion</li>\n<li>Romania</li>\n<li>San Marino</li>\n<li>Slovakia</li>\n<li>Slovenia</li>\n<li>Spain</li>\n<li>St. Barthelemy</li>\n<li>St. Martin</li>\n<li>Sweden</li>\n<li>Switzerland</li>\n<li>Vatican City</li>\n</ul>",
                                    "subContentImageId": "10117"
                                }
                            },
                            {
                                "title": "5G"
                            },
                            {
                                "title": "Unlimited mins and texts"
                            }
                        ]
                    }
                ]
            },
            {
                "title": "<b>Keep reaching your data limit?</b>",
                "actions": [
                    {
                        "color": "#E60000",
                        "text": "Change your plan",
                        "journeyKey": "CHANGE_YOUR_PACKAGE",
                        "viewTag": "change package only",
                        "tapTag": "how to upgrade|change package only"
                    }
                ],
                "displayType": "CARD"
            },
            {
                "title": "<b>Vodafone OneNumber</b>",
                "text": "Our Service that lets you share your mobile number and allowance across a range of different devices.",
                "imageId": 1099,
                "actions": [
                    {
                        "text": "Get connected",
                        "journeyKey": "REGISTER_OR_MANAGE_ONENUMBER"
                    },
                    {
                        "text": "Find out more",
                        "journeyKey": "ONENUMBER_FIND_OUT_MORE"
                    }
                ]
            }
        ]
    });
})



vfuk.get(path + '/v3/dashboard', (req, res) => {
    // Default Dashboard
    // Send the response body.
    res.status(500);
    res.json({
        "status": {
            "code": 4400,
            "analytics": {
                "status": "Success",
                "guid": "c9fbbc05-7d11-4ebe-92f1-c73dbfd06353"
            }
        },
        "lastAPICall": "2019-08-07T11:44:56",
        "header": {
            "background": "1090", //1090
            "fontColor": "#FFFFFF",
            "logoStyle": "STANDARD_LOGO"
        },
        "sections": ["blockedScreen", "subscriptionHeader", "tiles", "discover", "veryMeLink", "veryMe", "linksMenu", "apps"],
        "subscriptionHeader": {
            "icon": "1068",
            "subscriptionType": "Pay monthly",
            "subscriptionId": "07386013467"
        },
        "vov": {},
        "connectedApps": {
            "title": "Other Vodafone Apps",
            "items": [{
                "title": "DreamLab",
                "target": "https://itunes.apple.com/us/app/dreamlab-help-to-fight-cancer/id1273619275?mt=8",
                "bundleID": "dreamlab://",
                "icon": 53
            }, {
                "title": "Vodafone Broadband",
                "target": "https://itunes.apple.com/gb/app/vodafone-broadband/id985918725?mt=8",
                "bundleID": "phoenixapp://",
                "icon": 52
            }]
        },
        "discover": {
            "heading": "Discover",
            "timeOutErrorRendering": "HIDE_SECTION",
            "defaultOffer": {
                "title": "Deals and offers",
                "body": "<b>Get more of the good stuff with our deals</b>",
                "buttons": [{
                    "text": "Find out more",
                    "targetURL": "https://www.vodafone.co.uk/mobile/deals-and-offers"
                }]
            }
        },
        "tiles": [{
            "tileType": "ALLOWANCES",
            "content": [{
                "header": "<b>%Phonebook_lookup%'s Data</b>",
                "headerFallback": "<b>Data</b>",
                "title": "30.0",
                "subtitle": "left of 30.0GB bundle",
                "iconId": 16,
                "target": "SUBS_OVERLAY_USAGE",
                "unlimited": false,
                "percentageRemaining": 100.0,
                "remainingUnit": "GB",
                "allowanceType": "DATA"
            }, {
                "action": {
                    "text": "View all usage",
                    "journeyKey": "SUBS_OVERLAY_USAGE"
                }
            }]
        }, {
            "tileType": "CHARGES_CREDIT",
            "content": [{
                "header": "<b>Current charges</b>",
                "title": "07386013467",
                "footer": "Includes extra charges",
                "target": "SUBS_OVERLAY_CHARGES",
                "billPeriod": "From: 20 Sep to 07 Aug",
                "balance": "£2.00"
            }]
        }, {
            "tileType": "GENERIC_SMALL",
            "content": [{
                "title": "<b>Data Cap OFF</b>",
                "backgroundImage": 1060,
                "iconId": 1058,
                "target": "MANAGE_DATA_CAP",
                "textColor": "#FFFFFF"
            }]
        }, {
            "tileType": "GENERIC_SMALL",
            "content": [{
                "title": "<b>Manage Bars & Extras</b>",
                "iconId": 1057,
                "target": "SUBS_OVERLAY_EXTRAS",
                "textColor": "#333333"
            }]
        }],
        "veryMeLink": {
            "heading": "VeryMe Rewards",
            "ctaLabel": "View all",
            "ctaTarget": "LOYALTY_LASSIE"
        },
        "veryMe": {
            "defaultOffer": {
                "title": "<b>A world of rewards built around what your love</b>",
                "targetURL": "myvodafone://LOYALTY_LASSIE"
            }
        },
        "tray": {
            "centralItem": {
                "title": "TOBI",
                "target": "TOBi",
                "icon": 1052
            },
            "items": [{
                "title": "My Account",
                "target": "DRAWER_ACCOUNT",
                "icon": 1047
            }, {
                "title": "Rewards",
                "target": "DRAWER_REWARDS",
                "icon": 1095
            }, {
                "title": "Billing",
                "target": "PREVIOUS_BILLS",
                "icon": 1051
            }, {
                "title": "Settings",
                "target": "DRAWER_SETTINGS",
                "icon": 1049
            }]
        },
        "linksMenu": {
            "menuItems": [{
                "title": "Assistance",
                "target": "NONE",
                "subItems": [{
                    "title": "Notifications",
                    "target": "NOTIFICATIONS_NEW",
                    "badge": {
                        "type": "NOTIFICATIONS",
                        "icon": "19"
                    },
                    "icon": "1062"
                }, {
                    "title": "Find a Store",
                    "target": "STORE_LOCATOR_NEW",
                    "icon": "1061"
                }, {
                    "title": "Track an Order",
                    "target": "NONE",
                    "icon": "1067"
                }, {
                    "title": "Frequently Asked Questions",
                    "target": "NANOREP_FAQS",
                    "icon": "1065"
                }, {
                    "title": "More from Vodafone",
                    "target": "EXPLORE_VODAFONE",
                    "icon": "1066"
                }]
            }, {
                "title": "Your Network",
                "target": "NONE",
                "subItems": [{
                    "title": "Network Status Checker",
                    "target": "COVERAGE_CHECKER_NEW",
                    "icon": "1063"
                }, {
                    "title": "Check Data and Wi-Fi Speed",
                    "target": "NET_PERFORM",
                    "icon": "1064"
                }],
                "precedingMenuItemId": 44
            }]
        },
        "rewardsDrawer": {
            "subTitle": "Select one",
            "cards": [{
                "name": "VeryMe",
                "icon": 1075,
                "target": "LOYALTY_LASSIE"
            }, {
                "name": "Offers for you",
                "icon": 1076,
                "target": "MY_OFFERS"
            }]
        },
        "settingsDrawer": {
            "subTitle": "Select one",
            "cards": [{
                "name": "App Settings",
                "icon": 1078,
                "target": "APP_SETTINGS"
            }, {
                "name": "Privacy Settings",
                "icon": 1078,
                "target": "PRIVACY_SETTINGS"
            }]
        },
        "contact": "%Phonebook_lookup%",
        "subsOverlay": {
            "header": {
                "description": "%Phonebook_lookup%'s phone",
                "subscriptionHeader": {
                    "icon": "1068",
                    "subscriptionType": "Pay monthly",
                    "subscriptionId": "07386013467"
                },
                "background": 1089,//1089
                "tabsBackground": "#FFFFFF",
                "fontColor": "#FFFFFF",
                "tabsFontColor": "#333333",
                "currentChargesTitle": "<b>£2.00</b> current spend",
                "currentChargesSubTitle": "<b>Includes additional charges</b>",
                "currentChargesPeriod": "From: 20 Sep to 07 Aug",
                "buttonColor": "#FFFFFF"
            },
            "tabs": [{
                "name": "Plan",
                "target": "PLAN",
                "prefetch": false
            }, {
                "name": "Usage",
                "target": "USAGE",
                "prefetch": false
            }, {
                "name": "Charges",
                "target": "CHARGES",
                "prefetch": false
            }, {
                "name": "Extras",
                "target": "EXTRAS",
                "prefetch": false
            }, {
                "name": "Upgrade",
                "target": "UPGRADE",
                "prefetch": true
            }]
        }
    });
})

vfuk.get(path + '/chordiantOffers', (req, res) => {
    // Check the request, make sure it is a compatible type
    if (!req.is('application/json')) {
        return res.send(400, 'Invalid content type, expected application/json');
    }
    
    // Set the type of response, sets the content type.
    res.type('application/json');
    
    // Set the status code of the response.
    res.status(200);
    
    // Send the response body.
    res.json({
        "items": [
            {
                "offerId": "W_VoV_SurpriseDelight_01",
                "title": "Cinema tickets for 2 for \ufffd6",
                "body": "Watch your favourite movie this week on Vodafone!",
                "image": "url",
                "buttons": [
                    {
                        "text": "See more",
                        "targetURL": "https://www.vodafone.co.uk/my-vodafone-account/vodafone-apps/Vodafone_VeryMe_Rewards",
                        "callAcceptOffer": true
                    }, {
                        "text": "No thanks",
                        "targetURL": "DISMISS",
                        "callDismissOffer": true
                    }
                ]
            }
        ]
    });
})

vfuk.get(path + '/v1/discover', (req, res) => {
    // Set the type of response, sets the content type.
    res.type('application/json');
    
    // Set the status code of the response.
    res.status(200);
    
    // Send the response body.
    res.json({
        "status": {
            "code": 0,
            "analytics": {
                "status": "Success",
                "guid": "b249ed8a-df41-4083-87fb-036f0d482c99"
            }
        },
        "lastAPICall": "2019-02-17T12:25:30.684+0000",
        "items": [{
            "offerId": "W_VoV_Upsell_Entertainment_WC",
            "title": "Enjoy endless entertainment",
            "body": "<b>Move to an Entertainment plan today. Terms apply</b>",
            "image": "https://cdn.vodafone.co.uk/en/assets/images/desktop/Wimbledon_Lockups_Roundels_RGB-01.jpg",
            "buttons": [{
                "text": "Find Out More",
                "targetURL": "https://www.cm.vodafone.co.uk/myvf/changeplan", //cm.vodafone.co.uk ,https://www.vodafone.co.uk/myvf/changeplan
                "callAcceptOffer": true,
                "callDismissOffer": false
            }, {
                "text": "No thanks",
                "targetURL": "Dismiss",
                "callAcceptOffer": false,
                "callDismissOffer": true
            }]
        }, {
            "offerId": "W_VoV_SurpriseDelight_01",
            // "title": "Cinema tickets for 6",
            "body": "<b>Watch your favourite movie</b>",
            "image": "url",
            "buttons": [{
                "text": "See more",
                "targetURL": "https://www.vodafone.co.uk/my-vodafone-account/vodafone-apps/Vodafone_VeryMe_Rewards",
                "callAcceptOffer": true,
                "dismissOffer": true
            }, {
                "text": "No thanks",
                "targetURL": "DISMISS",
                "callDismissOffer": true,
                "dismissOffer": true
            }]
        }, {
            "offerId": "W_VoV_SurpriseDelight_02",
            "title": "Cinema tickets for 2 for 6",
            "body": "<b>Watch your favourite movie this week on Vodafone!</b>",
            "image": "url",
            "buttons": [{
                "text": "See more",
                "targetURL": "https://www.vodafone.co.uk/my-vodafone-account/vodafone-apps/Vodafone_VeryMe_Rewards",
                "callAcceptOffer": true,
                "dismissOffer": true
            }, {
                "text": "No thanks",
                "targetURL": "DISMISS",
                "callDismissOffer": true,
                "dismissOffer": true
            }]
        }, {
            "offerId": "W_VoV_SurpriseDelight_03",
            "title": "Cinema tickets for 2 for 6",
            "body": "<b>Watch your favourite movie this week on Vodafone!</b>",
            "image": "url",
            "buttons": [{
                "text": "See more",
                "targetURL": "https://www.vodafone.co.uk/my-vodafone-account/vodafone-apps/Vodafone_VeryMe_Rewards",
                "callAcceptOffer": true,
                "dismissOffer": true
            }, {
                "text": "No thanks",
                "targetURL": "DISMISS",
                "callDismissOffer": true,
                "dismissOffer": true
            }]
        }, {
            "offerId": "W_VoV_SurpriseDelight_04",
            "title": "Cinema tickets for 2 for 8",
            "body": "<b>Watch your favourite movie this month on Vodafone!</b>",
            "image": "url",
            "buttons": [{
                "text": "See more",
                "targetURL": "https://www.vodafone.co.uk/my-vodafone-account/vodafone-apps/Vodafone_VeryMe_Rewards",
                "callAcceptOffer": true,
                "dismissOffer": true
            }, {
                "text": "No thanks",
                "targetURL": "DISMISS",
                "callDismissOffer": true,
                "dismissOffer": true
            }]
        }]
    });
})

vfuk.get(path + '/v2/discover', (req, res) => {
    // Set the type of response, sets the content type.
    res.type('application/json');
    
    // Set the status code of the response.
    res.status(200);
    
    // Send the response body.
    res.json({
        "status": {
            "code": 0,
            "analytics": {
                "status": "Success",
                "guid": "be457ad1-1035-42f6-a064-7fe7935e9df5"
            }
        },
        "fullScreenPromo": {
            "offerSource": "AoM",
            "offerId": "HBB008:FSP",
            "name": "AddGigacube",
            "variant": "OfferVariantDefault",
            "treatmentId": "HBB008-01",
            "treatmentName": "AddGigacube_App",
            "treatmentVariant": "TreatmentVariantDefault",
            "title": "Vodafone Pro Broadband with 15% Off",
            "body": "Vodafone Pro is designed for reliability. Super WiFi ensures coverage in every room, or you can leave your contract for free - guaranteed.",
            "image": "https://i.pinimg.com/originals/8c/b5/ee/8cb5ee0a8fc8dd21497f0c2d0ebe1238.jpg",
            "onView": {
                "updateOfferAction": "Shown"
            },
            "dismissButton": {
                "journey": "DISMISS"
            },
            "buttons": [{
                "text": "Find out More",
                "targetURL": "https://www.vodafone.co.uk/gigacube/",
                "updateOfferAction": "Clicked",
                "clearDiscoverCache": true,
                "deleteOffer": false
            }, {
                "text": "No Thanks",
                "updateOfferAction": "Dismissed",
                "clearDiscoverCache": false,
                "deleteOffer": true
            }]
        },
        "items": [{
            "offerSource": "AoM",
            "offerId": "VFCR0002",
            "name": "SwitchToDirectDebit",
            "variant": "OfferVariantDefault",
            "treatmentId": "VFCR0002-01",
            "treatmentName": "SwitchToDirectDebit_App",
            "treatmentVariant": "TreatmentVariantDefault",
            "title": "Set up a Direct Debit",
            "body": "Want to set up a direct debit for easy payments?",
            "image": "https://cdn.vodafone.co.uk/en/assets/images/desktop/MVAPP_DirectDebit_creative.png",
            "onView": {
                "updateOfferAction": "shown"
            },
            "buttons": [{
                "text": "Tell Me More",
                "targetURL": "https://www.vodafone.co.uk/myvf/directdebit",
                "updateOfferAction": "ReDirect",
                "clearDiscoverCache": true,
                "deleteOffer": false
            }, {
                "text": "No Thanks",
                "updateOfferAction": "Dismiss",
                "clearDiscoverCache": false,
                "deleteOffer": true
            }]
        }, {
            "offerSource": "Chordiant",
            "offerId": "VFCR0001",
            "name": "ManageContentBar",
            "variant": "OfferVariantDefault",
            "treatmentId": "VFCR0001-01",
            "treatmentName": "ManageContentBar_App",
            "treatmentVariant": "TreatmentVariantDefault",
            "title": "To access all websites, manage or remove anytime",
            "body": "Your age restricted content bar is active",
            "image": "https://cdn.vodafone.co.uk/en/assets/images/desktop/xsell_NBA_recent order_younger.png",
            "onView": {
                "updateOfferAction": "shown"
            },
            "buttons": [{
                "text": "Manage my bars",
                "targetURL": "https://www.vodafone.co.uk/webcenter/portal/myvodafone/pages_manageservices/managebars",
                "updateOfferAction": "ReDirect",
                "clearDiscoverCache": true,
                "deleteOffer": false
            }, {
                "text": "Not Now",
                "updateOfferAction": "Dismiss",
                "clearDiscoverCache": false,
                "deleteOffer": true
            }]
        }, {
            "offerSource": "AoM",
            "offerId": "VFO0046",
            "name": "TradeInDevice",
            "variant": "FromHandsetPlan",
            "treatmentId": "VFO0046-01",
            "treatmentName": "TradeInDevice_App",
            "treatmentVariant": "StandardUpgradePeriod",
            "title": "Trade in your S9 or S10 to save",
            "body": "Find out how much you can save with our Trade-in Tool",
            "image": "https://www.vodafone.co.uk/cs/groups/public/documents/images/vfcon109130.jpg",
            "onView": {
                "updateOfferAction": "shown"
            },
            "buttons": [{
                "text": "Find out more,,",
                "targetURL": "myvodafone://TRADE_IN",
                "updateOfferAction": "ReDirect",
                "clearDiscoverCache": true,
                "deleteOffer": false
            }, {
                "text": "No thanks",
                "updateOfferAction": "Dismiss",
                "clearDiscoverCache": false,
                "deleteOffer": true
            }]
        }, {
            "offerSource": "Chordiant",
            "offerId": "VFO0047",
            "name": "AddBroadbandProExtra",
            "variant": "AverageSpeed900",
            "treatmentId": "VFO0047-01",
            "treatmentName": "AddBroadbandProExtra_App",
            "treatmentVariant": "GigafastWithContent",
            "title": "Vodafone Gigafast Broadband",
            "body": "Full Fibre broadband directly to your home",
            "image": "https://assets.vodafone.co.uk/cs/groups/public/documents/images/mva_offers_august_15.png",
            "onView": {
                "updateOfferAction": "shown"
            },
            "buttons": [{
                "text": "Find out more",
                "targetURL": "https://www.vodafone.co.uk/gigafast",
                "updateOfferAction": "ReDirect",
                "clearDiscoverCache": true,
                "deleteOffer": false
            }, {
                "text": "No thanks",
                "updateOfferAction": "Dismiss",
                "clearDiscoverCache": false,
                "deleteOffer": true
            }]
        }, {
            "offerSource": "AoM",
            "offerId": "VFO0048",
            "name": "AddBroadbandProExtra",
            "variant": "AverageSpeed900",
            "treatmentId": "VFO0047-01",
            "treatmentName": "AddBroadbandProExtra_App",
            "treatmentVariant": "GigafastWithContent",
            "title": "Vodafone Gigafast Broadband",
            "body": "Full Fibre broadband directly to your home",
            "image": "https://assets.vodafone.co.uk/cs/groups/public/documents/images/mva_offers_august_15.png",
            "onView": {
                "updateOfferAction": "shown"
            },
            "buttons": [{
                "text": "Find out more",
                "targetURL": "https://www.vodafone.co.uk/gigafast",
                "updateOfferAction": "ReDirect",
                "clearDiscoverCache": true,
                "deleteOffer": false
            }, {
                "text": "No thanks",
                "updateOfferAction": "Dismiss",
                "clearDiscoverCache": false,
                "deleteOffer": true
            }]
        }, {
            "offerSource": "AoM",
            "offerId": "VFO0049",
            "name": "AddBroadbandProExtra",
            "variant": "AverageSpeed900",
            "treatmentId": "VFO0047-01",
            "treatmentName": "AddBroadbandProExtra_App",
            "treatmentVariant": "GigafastWithContent",
            "title": "Vodafone Gigafast Broadband",
            "body": "Full Fibre broadband directly to your home",
            "image": "https://assets.vodafone.co.uk/cs/groups/public/documents/images/mva_offers_august_15.png",
            "onView": {
                "updateOfferAction": "shown"
            },
            "buttons": [{
                "text": "Find out more",
                "targetURL": "https://www.vodafone.co.uk/gigafast",
                "updateOfferAction": "ReDirect",
                "clearDiscoverCache": true,
                "deleteOffer": false
            }, {
                "text": "No thanks",
                "updateOfferAction": "Dismiss",
                "clearDiscoverCache": false,
                "deleteOffer": true
            }]
        }, {
            "offerSource": "AoM",
            "offerId": "VFO0050",
            "name": "AddBroadbandProExtra",
            "variant": "AverageSpeed900",
            "treatmentId": "VFO0047-01",
            "treatmentName": "AddBroadbandProExtra_App",
            "treatmentVariant": "GigafastWithContent",
            "title": "Vodafone Gigafast Broadband",
            "body": "Full Fibre broadband directly to your home",
            "image": "https://assets.vodafone.co.uk/cs/groups/public/documents/images/mva_offers_august_15.png",
            "onView": {
                "updateOfferAction": "shown"
            },
            "buttons": [{
                "text": "Find out more",
                "targetURL": "https://www.vodafone.co.uk/gigafast",
                "updateOfferAction": "ReDirect",
                "clearDiscoverCache": true,
                "deleteOffer": false
            }, {
                "text": "No thanks",
                "updateOfferAction": "Dismiss",
                "clearDiscoverCache": false,
                "deleteOffer": true
            }]
        }, {
            "offerSource": "AoM",
            "offerId": "VFO0051",
            "name": "AddBroadbandProExtra",
            "variant": "AverageSpeed900",
            "treatmentId": "VFO0047-01",
            "treatmentName": "AddBroadbandProExtra_App",
            "treatmentVariant": "GigafastWithContent",
            "title": "Vodafone Gigafast Broadband",
            "body": "Full Fibre broadband directly to your home",
            "image": "https://assets.vodafone.co.uk/cs/groups/public/documents/images/mva_offers_august_15.png",
            "onView": {
                "updateOfferAction": "shown"
            },
            "buttons": [{
                "text": "Find out more",
                "targetURL": "https://www.vodafone.co.uk/gigafast",
                "updateOfferAction": "ReDirect",
                "clearDiscoverCache": true,
                "deleteOffer": false
            }, {
                "text": "No thanks",
                "updateOfferAction": "Dismiss",
                "clearDiscoverCache": false,
                "deleteOffer": true
            }]
        }, {
            "offerSource": "AoM",
            "offerId": "VFO0052",
            "name": "AddBroadbandProExtra",
            "variant": "AverageSpeed900",
            "treatmentId": "VFO0047-01",
            "treatmentName": "AddBroadbandProExtra_App",
            "treatmentVariant": "GigafastWithContent",
            "title": "Vodafone Gigafast Broadband",
            "body": "Full Fibre broadband directly to your home",
            "image": "https://assets.vodafone.co.uk/cs/groups/public/documents/images/mva_offers_august_15.png",
            "onView": {
                "updateOfferAction": "shown"
            },
            "buttons": [{
                "text": "Find out more",
                "targetURL": "https://www.vodafone.co.uk/gigafast",
                "updateOfferAction": "ReDirect",
                "clearDiscoverCache": true,
                "deleteOffer": false
            }, {
                "text": "No thanks",
                "updateOfferAction": "Dismiss",
                "clearDiscoverCache": false,
                "deleteOffer": true
            }]
        }, {
            "offerSource": "AoM",
            "offerId": "VFO0053",
            "name": "AddBroadbandProExtra",
            "variant": "AverageSpeed900",
            "treatmentId": "VFO0047-01",
            "treatmentName": "AddBroadbandProExtra_App",
            "treatmentVariant": "GigafastWithContent",
            "title": "Vodafone Gigafast Broadband 10",
            "body": "Full Fibre broadband directly to your home",
            "image": "https://assets.vodafone.co.uk/cs/groups/public/documents/images/mva_offers_august_15.png",
            "onView": {
                "updateOfferAction": "shown"
            },
            "buttons": [{
                "text": "Find out more",
                "targetURL": "https://www.vodafone.co.uk/gigafast",
                "updateOfferAction": "ReDirect",
                "clearDiscoverCache": true,
                "deleteOffer": false
            }, {
                "text": "No thanks",
                "updateOfferAction": "Dismiss",
                "clearDiscoverCache": false,
                "deleteOffer": true
            }]
        }, {
            "offerSource": "AoM",
            "offerId": "VFO0054",
            "name": "AddBroadbandProExtra",
            "variant": "AverageSpeed900",
            "treatmentId": "VFO0047-01",
            "treatmentName": "AddBroadbandProExtra_App",
            "treatmentVariant": "GigafastWithContent",
            "title": "Vodafone Gigafast Broadband 11",
            "body": "Full Fibre broadband directly to your home",
            "image": "https://assets.vodafone.co.uk/cs/groups/public/documents/images/mva_offers_august_15.png",
            "onView": {
                "updateOfferAction": "shown"
            },
            "buttons": [{
                "text": "Find out more",
                "targetURL": "https://www.vodafone.co.uk/gigafast",
                "updateOfferAction": "ReDirect",
                "clearDiscoverCache": true,
                "deleteOffer": false
            }, {
                "text": "No thanks",
                "updateOfferAction": "Dismiss",
                "clearDiscoverCache": false,
                "deleteOffer": true
            }]
        }]
    });
})

vfuk.get(path + '/v1/veryMeOffers', (req, res) => {
    // Set the type of response, sets the content type.
    res.type('application/json');
    
    // Set the status code of the response.
    res.status(200);
    
    // Send the response body.
    res.json(
        {
    "status": {
        "code": 0,
        "analytics": {
            "status": "Success",
            "guid": "b0eb3da3-0eb9-408e-8d11-010d8ceef11d"
        }
    },
    "veryMeOffers": {
        "items": [
            {
                "imageUrl": "https://images.staging.cms.dev.vodafone.kermit.cloud/3453f5fb-6446-4c51-b4d1-771cd482b51e.jpg",
                "title": " Free case of craft beer with Beer523",
                "description": "Grab yourself a free case of eight craft beers, on us. <br /> We’ve teamed up with Beer52 to help you discover more about craft beers from around the world. <br /> As well as the beer, you’ll get a tasty snack, plus their 100-page award-winning magazine. <br /> Claim now to enjoy your free drinks.",
                "brandIconUrl": "https://images.staging.cms.dev.vodafone.kermit.cloud/dc8e1403-8e4d-4595-b4ab-8ffddde6f36e.png",
                "targetURL": "myvodafone://LOYALTY_LASSIE/#/offer/1433"
            },
            {
                "imageUrl": "https://images.staging.cms.dev.vodafone.kermit.cloud/01d398e3-5ca3-4759-8141-06defe13d239.jpg",
                "title": "Majestic Wine",
                "description": "Majestic Wine",
                "brandIconUrl": "https://images.staging.cms.dev.vodafone.kermit.cloud/3aa5edc8-6ffc-4198-9fe0-bb0d80f22996.png",
                "targetURL": "myvodafone://LOYALTY_LASSIE/#/offer/1810"
            },
            {
                "imageUrl": "https://images.staging.cms.dev.vodafone.kermit.cloud/2d5dd457-73a5-4bae-ae6b-3e805a729391.jpg",
                "title": "Win a Sony Tech Bundle with ‘Men in Black: International’",
                "description": "To celebrate the 7th October Digital release of ‘Men in Black: International’, we’re giving you the chance to win an amazing Sony Tech Entertainment Bundle. <br /> One lucky winner will be taking home a 49” Smart HDR 4K HD TV, a Blu-ray™ Home Theatre System, and a Blu-ray™ of ‘Men in Black: International’. <br /> To be in with a chance of winning, just tap Enter and you’ll be added to the prize draw.",
                "brandIconUrl": "https://images.staging.cms.dev.vodafone.kermit.cloud/48ad00a5-080c-4015-8fb3-ca222ab0fbce.jpg",
                "targetURL": "myvodafone://LOYALTY_LASSIE/#/offer/1436"
            }
        ]
    }
}
    //     {
    //     "status": {
    //         "code": 0,
    //         "analytics": {
    //             "status": "Success",
    //             "guid": "8011711b-6bd6-4c36-a2f3-7cc377b7104e"
    //         }
    //     },
    //     "veryMeOffers": {
    //         "items": [{
    //             "imageUrl": "https://s3-eu-west-1.amazonaws.com/server.staging.server.dev-images/8864dc19-6339-4df6-82f1-036121260041.png",
    //             "title": "<b>Offer title</b>",
    //             "description": "Para 1 <br /> Para 2 <br /> Para 3",
    //             "brandIconUrl": "https://s3-eu-west-1.amazonaws.com/server.staging.server.dev-images/15d2b716-ef09-4ef0-b44b-b7f395d8476b.png",
    //             "targetUrl": "myvodafone://LOYALTY_LASSIE/#/offer/1199"
    //         }, {
    //             "imageUrl": "https://s3-eu-west-1.amazonaws.com/server.staging.server.dev-images/de6983c5-ed54-431f-8fec-c02589df771e.png",
    //             "title": "<b>Test_Offer_0053</b>",
    //             "description": "Para 1 <br /> Para 2 <br /> Para 3",
    //             "brandIconUrl": "https://s3-eu-west-1.amazonaws.com/server.staging.server.dev-images/15d2b716-ef09-4ef0-b44b-b7f395d8476b.png",
    //             "targetUrl": "myvodafone://LOYALTY_LASSIE/#/offer/1224",
    //             "labelText": "Last Chance"
    //         }, {
    //             "title": "<b>Test_Offer_0047, ID1252</b>",
    //             "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. <br /> Para 2It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. <br /> Para 3",
    //             "brandIconUrl": "https://s3-eu-west-1.amazonaws.com/server.staging.server.dev-images/15d2b716-ef09-4ef0-b44b-b7f395d8476b.png",
    //             "targetUrl": "myvodafone://LOYALTY_LASSIE/#/offer/1252"
    //         }, {
    //             "imageUrl": "https://s3-eu-west-1.amazonaws.com/server.staging.server.dev-images/79e5c057-9c29-4c96-8901-184f394e26ba.png",
    //             "title": "<b>Test_Offer_0034 ID1230</b>",
    //             "description": "Para 1Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. <br /> Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of \"de Finibus Bonorum et Malorum\" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, \"Lorem ipsum dolor sit amet..\", comes from a line in section 1.10.32. <br /> The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from \"de Finibus Bonorum et Malorum\" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.",
    //             "brandIconUrl": "https://s3-eu-west-1.amazonaws.com/server.staging.server.dev-images/15d2b716-ef09-4ef0-b44b-b7f395d8476b.png",
    //             "targetUrl": "myvodafone://LOYALTY_LASSIE/#/offer/1240"
    //         }, {
    //             "imageUrl": "https://s3-eu-west-1.amazonaws.com/server.staging.server.dev-images/7ceb0c16-0ec7-474d-bc7c-d327b787b8ff.png",
    //             "title": "<b>Test_Offer_0047</b>",
    //             "description": "Para 1 <br /> Para 2 <br /> Para 3",
    //             "brandIconUrl": "https://s3-eu-west-1.amazonaws.com/server.staging.server.dev-images/89e98810-9f3b-4f97-966d-ccd482010ec9.png",
    //             "targetUrl": "myvodafone://LOYALTY_LASSIE/#/offer/1271"
    //         }, {
    //             "imageUrl": "https://s3-eu-west-com/server.staging.server.dev-images/809ec630-ad50-4630-a2f6-27629cb146e5.png",
    //             "title": "<b>Test_Offer_0040</b>",
    //             "description": "Para 1 <br /> Para 2 <br /> Para 3",
    //             "brandIconUrl": "https://s3-eu-west-1.amazonaws.com/server.staging.server.dev-images/89e98810-9f3b-4f97-966d-ccd482010ec9.png",
    //             "targetUrl": "myvodafone://LOYALTY_LASSIE/#/offer/1288"
    //         }, {
    //             "imageUrl": "https://s3-eu-west-1.amazonaws.com/server.staging.server.dev-images/1cee7e20-6121-4a3d-a8a9-b0d01a5b1c49.png",
    //             "title": "<b>Test_Offer_0040</b>",
    //             "description": "Para 1 <br /> Para 2 <br /> Para 3",
    //             "brandIconUrl": "https://s3-eu-west-1.amazonawserver.staging.server.dev-images/15d2b716-ef09-4ef0-b44b-b7f395d8476b.png",
    //             "targetUrl": "myvodafone://LOYALTY_LASSIE/#/offer/125"
    //         }, {
    //             "imageUrl": "https://s3-eu-west-1.amazonaws.com/server.staging.server.dev-images/9f7b2844-b346-44e3-8a9c-65e0bf57c1a7.png",
    //             "title": "<b>Test_Offer_0034</b>",
    //             "description": "Para 1 <br /> Para 2 <br /> Para 3",
    //             "brandIconUrl": "https://s3-eu-west-1.amazonaws.com/server.staging.server.dev-images/89e98810-9f3b-4f97-966d-ccd482010ec9.png",
    //             "targetUrl": "myvodafone://LOYALTY_LASSE/#/offer/1331"
    //         }, {
    //             "imageUrl": "https://s3-eu-west-1.amazonaws.com/server.staging.server.dev-images/abdfd561-4276-4669-80bf-10f6c6f2c3d3.png",
    //             "title": "<b>Test_Offer_0054</b>",
    //             "brandIconUrl": "https://s3-eu-west-1.amazonaws.com/server.staging.server.dev-images/15d2b716-ef09-4ef0-b44b-b7f395d8476b.png",
    //             "targetUrl": "myvodafone://LOYALTY_LASSIE/#/offer/1196"
    //         }]
    //     }
    // }
    );
})

vfuk.get(path + '/v1/extras', (req, res) => {
    // Set the type of response, sets the content type.
    res.type('application/json');
    
    // Set the status code of the response.
    res.status(200);
    
    // Send the response body.
    res.json({
        "status": {
            "code": 0,
            "analytics": {
                "status": "Success",
                "guid": "2406aba7-5006-408e-93b7-eaab2ab96108"
            }
        },
        "lastAPICall": "2019-08-07T12:41:16",
        "cards": [
            {
            "title": "Add Extra Data To your allowance",
            "iconId": "1093",
            "displayType": "EXTRAS_ICON_CARD",
            "actions": [{
                "color": "#E60000",
                "text": "Add",
                "journeyKey": "MANAGE_DATA_ADD_ONS"
            }]
        },
        {
            "title": "<b>My extra allowances</b>",
            "displayType": "EXTRAS_CARD",
            "list": [{
                "title": "Extra 1GB data (one-off)",
                "text": "Renewal date 18th Aug",
                "subContent": {
                    "subContentHeader": "My extra allowances",
                    "subContentTitleAlignedLeft": "<b>Extra 1GB data (one-off)</b>",
                    "subContentText": "1GB of extra data added to your plan's allowance until your next billing date.",
                    "subContentButton": {
                        "text": "Manage extras",
                        "journeyKey": "BROWSE_EXTRAS"
                    }
                }
            }]
        }, {
            "title": "<b>Extras, bars and caps</b>",
            "displayType": "EXTRAS_CARD",
            "list": [{
                "title": "Vodafone Secure Net",
                "subContent": {
                    "subContentHeader": "Extras, bars and caps",
                    "subContentTitleAlignedLeft": "<b>Vodafone Secure Net</b>",
                    "subContentText": "Vodafone Secure Net protects what matters most to you and your family in the mobile world."
                }
            }, {
                "title": "50 Euro EU RoW data spend cap",
                "subContent": {
                    "subContentHeader": "Extras, bars and caps",
                    "subContentTitleAlignedLeft": "<b>50 Euro EU RoW data spend cap</b>",
                    "subContentText": "You've chosen to limit the amount of data you use when travelling outside the UK to: £39.33 a month"
                }
            }, {
                "title": "Age-restricted online content bar",
                "subContent": {
                    "subContentHeader": "Extras, bars and caps",
                    "subContentTitleAlignedLeft": "<b>Age-restricted online content bar</b>",
                    "subContentText": "This bar is blocking content that isn't suitable for under-18s."
                }
            }, {
                "title": "Data Cap",
                "subContent": {
                    "subContentHeader": "Extras, bars and caps",
                    "subContentTitleAlignedLeft": "<b>Data cap</b>",
                    "subContentTitleAlignedRight": "<b>ON</b>",
                    "subContentText": "You now have a data cap. You can now search, share and stream - secure in the knowledge that you won't face unexpected data charges.",
                    "subContentButton": {
                        "text": "<u><b>Manage Data Cap</b></u>",
                        "journeyKey": "MANAGE_DATA_CAP"
                    }
                }
            }]
        }, {
            "displayType": "EXTRAS_ACTION_CARD",
            "actions": [{
                "text": "Buy and manage extras",
                "journeyKey": "BROWSE_EXTRAS"
            }]
        }]
    });
})

vfuk.get(path + '/v4/dashboard', (req, res) => {
    // Set the type of response, sets the content type.
    res.type('application/json');
    
    // Set the status code of the response.
    res.status(200); //500
    
    // Send the response body.
    res.json({
        "status": {
            "code": 0, //4501 throttling,2111
            "analytics": {
                "status": "Success",
                "guid": "18568642-5216-45c7-8466-8f6f5b1e1af1"
            }
        },
        "lastAPICall": "2019-11-26T10:36:46",
        "header": {
            "background": "10129", //Normal: 1090 Black: 10101, 1074, // 10163
            "fontColor": "#FFFFFF",
            "logoStyle": "STANDARD_LOGO"
        },
        "sections": [
            "blockedScreen",
            "subscriptionHeader",
            "tiles",
            "discover",
            "veryMeLink",
            "veryMe",
            "linksMenu",
            "basket",
            "apps"
        ],
        "subscriptionHeader": {
            "icon": "1068",
            "subscriptionType": "Pay monthly",
            "subscriptionId": "07387924225",
            "message": {
                "icon": "10153",
                "target": "NOTIFICATIONS_NEW",
                "asideNoNewMessagesCopy": "No new messages",
                "asideMessagesCopy": "${UnreadedNumber} new messages"
            }
        },
        "vov": {},
        "basket": {
            "icon": "10166",
            "journey": "ECARE_PRODUCTS"
        },
        "tiles": [{
            "status": {
                "code": 0,
                "analytics": {
                    "status": "Success",
                    "guid": "18568642-5216-45c7-8466-8f6f5b1e1af1",
                    "code": "0"
                }
            },
            "tileType": "ALLOWANCES",
            "content": [{
                "header": "<b>%Phonebook_lookup%'s Data</b>",
                "headerFallback": "<b>Data</b>",
                "title": "5.0",
                "subtitle": "of 10.0GB left",
                "iconId": 16,
                "target": "SUBS_OVERLAY_USAGE",
                "unlimited": false,
                "percentageRemaining": 100,
                "remainingUnit": "GB",
                "allowanceType": "DATA",
                "errorText": "We're sorry, we can't find this information right now."
            }, {
                "action": {
                    "text": "View all usage",
                    "journeyKey": "SUBS_OVERLAY_USAGE"
                }
            }]
        }, {
            "status": {
                "code": 0,
                "analytics": {
                    "status": "Success",
                    "guid": "18568642-5216-45c7-8466-8f6f5b1e1af1",
                    "code": "0"
                }
            },
            // v4
            "tileType": "CHARGES_CREDIT",
            "content": [{
                // PAYG
                // "header": "<b>Top up Credit</b>",
                // "title": "<b>Your credit is low</b>",
                // "footer": "<u>Top up now</u>",
                // "iconId": 10151,
                // "target": "SUBS_OVERLAY_TOP_UP",
                // "lowMonetaryCreditLozenge": true,
                // "balance": "£8.00"
                // PAYM
                "header": "<b>Current charges</b>",
                "title": "07387924225",
                "footer": "Includes extra charges",
                "target": "SUBS_OVERLAY_CHARGES",
                "billPeriod": "From: 20 Sep to 07 Aug",
                "balance": "£2.00"
            }]
        }, {
            "status": {
                "code": 0,
                "analytics": {
                    "status": "Success",
                    "guid": "18568642-5216-45c7-8466-8f6f5b1e1af1",
                    "code": "0"
                }
            },
            "tileType": "GENERIC_SMALL",
            "content": [{
                "title": "<b>Plan Details</b>",
                // "backgroundImage": 1060,
                "iconId": 1085,
                "target": "SUBS_OVERLAY_PLAN",
                "textColor": "#333333"
            }]
        }, {
            "status": {
                "code": 0,
                "analytics": {
                    "status": "Success",
                    "guid": "18568642-5216-45c7-8466-8f6f5b1e1af1",
                    "code": "0"
                }
            },
            "tileType": "GENERIC_SMALL",
            "content": [{
                "title": "<b>Device plan</b>", //"<b>Manage Bars & Extras</b>",
                "iconId": 10112, //1057, //10112(device plan),
                "target": "SUBS_OVERLAY_DEVICE_PLAN", //"SUBS_OVERLAY_EXTRAS",
                "textColor": "#333333"
            }]
        }],
        "discover": {
            "status": {
                "code": 0,
                "analytics": {
                    "status": "Success",
                    "guid": "18568642-5216-45c7-8466-8f6f5b1e1af1",
                    "code": "0"
                }
            },
            "heading": "Discover",
            "timeOutErrorRendering": "HIDE_SECTION",
            "defaultOffer": {
                "title": "Deals and offers",
                "body": "<b>Get more of the good stuff with our deals</b>",
                "buttons": [{
                    "text": "Find out more",
                    "targetURL": "https://www.vodafone.co.uk/mobile/deals-and-offers"
                }]
            },
            "ctaLabel": "View all",
            "ctaTarget": "ALL_Offers"
        },
        "veryMeLink": {
            "status": {
                "code": 0,
                "analytics": {
                    "status": "Success",
                    "guid": "18568642-5216-45c7-8466-8f6f5b1e1af1",
                    "code": "0"
                }
            },
            "heading": "VeryMe Rewards",
            "ctaLabel": "View all",
            "ctaTarget": "LOYALTY_LASSIE"
        },
        "veryMe": {
            "status": {
                "code": 0,
                "analytics": {
                    "status": "Success",
                    "guid": "18568642-5216-45c7-8466-8f6f5b1e1af1",
                    "code": "0"
                }
            },
            "defaultOffer": {
                "title": "<b>A world of rewards built around what you love</b>",
                "targetURL": "myvodafone://LOYALTY_LASSIE"
            }
        },
        "linksMenu": {
            "status": {
                "code": 0,
                "analytics": {
                    "status": "Success",
                    "guid": "c0eba92f-4dd1-4409-8855-550dc44719d7",
                    "code": "0"
                }
            },
            "menuItems": [{
                "title": "Assistance",
                "target": "NONE",
                "subItems": [{
                    "title": "Frequently Asked Questions",
                    "target": "NANOREP_FAQS",
                    "icon": "1065"
                }, {
                    "title": "Store Locator",
                    "target": "STORE_LOCATOR_NEW",
                    "icon": "1061"
                }, {
                    "title": "Notifications",
                    "target": "NOTIFICATIONS_NEW",
                    "badge": {
                        "type": "NOTIFICATIONS",
                        "icon": "19"
                    },
                    "icon": "1062"
                }, {
                    "title": "Connect another device",
                    "target": "NANOREP_FAQS",
                    "icon": "1098"
                }, {
                    "title": "More from Vodafone",
                    "target": "EXPLORE_VODAFONE",
                    "icon": "10102"
                }, {
                    "title": "Top Up A Friend",
                    "target": "VESTA_ANONY_TOPUP",
                    "icon": "1050"
                }, {
                    "title": "Trade In",
                    "target": "TRADE_IN",
                    "icon": "10114"
                }]
            }, {
                "title": "Your Network",
                "target": "NONE",
                "subItems": [{
                    "title": "Network Status Checker",
                    "target": "COVERAGE_CHECKER_NEW",
                    "icon": "1063"
                }, {
                    "title": "Check Data and Wi-Fi Speed",
                    "target": "NET_PERFORM",
                    "icon": "1064"
                }],
                "precedingMenuItemId": 44
            }]
        },
        "connectedApps": {
            "status": {
                "code": 0,
                "analytics": {
                    "status": "Success",
                    "guid": "18568642-5216-45c7-8466-8f6f5b1e1af1",
                    "code": "0"
                }
            },
            "title": "Other Vodafone Apps",
            "items": [{
                "title": "DreamLab",
                "target": "https://itunes.apple.com/us/app/dreamlab-help-to-fight-cancer/id1273619275?mt=8",
                "bundleID": "dreamlab://",
                "icon": 53
            }, {
                "title": "Vodafone Broadband",
                "target": "https://itunes.apple.com/gb/app/vodafone-broadband/id985918725?mt=8",
                "bundleID": "phoenixapp://",
                "icon": 52
            }]
        },
        "rewardsDrawer": {
            "status": {
                "code": 0,
                "analytics": {
                    "status": "Success",
                    "guid": "18568642-5216-45c7-8466-8f6f5b1e1af1",
                    "code": "0"
                }
            },
            "subTitle": "Select one",
            "cards": [{
                "name": "VeryMe",
                "icon": 1075,
                "target": "LOYALTY_LASSIE"
            }, {
                "name": "Offers for you",
                "icon": 1076,
                "target": "MY_OFFERS"
            }]
        },
        "settingsDrawer": {
            "status": {
                "code": 0,
                "analytics": {
                    "status": "Success",
                    "guid": "18568642-5216-45c7-8466-8f6f5b1e1af1",
                    "code": "0"
                }
            },
            "subTitle": "Settings",
            "cards": [{
                "name": "App Settings",
                "icon": 10120,
                "target": "APP_SETTINGS"
            }, {
                "name": "Account Settings",
                "icon": 10119,
                "target": "ACCOUNT_SETTINGS"
    
            }, {
                "name": "Privacy Settings",
                "icon": 10121,
                "target": "PRIVACY_SETTINGS"
            }]
        },
        "tray": {
            "status": {
                "code": 0,
                "analytics": {
                    "status": "Success",
                    "guid": "18568642-5216-45c7-8466-8f6f5b1e1af1",
                    "code": "0"
                }
            },
            "centralItem": {
                "title": "TOBI",
                "target": "TOBi",
                "icon": 1052
            },
            "items": [{
                "title": "My Account",
                "target": "DRAWER_ACCOUNT",
                "icon": 1047
            }, {
                "title": "VeryMe",
                "target": "LOYALTY_LASSIE",
                "icon": 1075
            }, {
                "title": "Billing",
                "target": "PREVIOUS_BILLS?fromDate=2021&toDate=2022",
                "icon": 1051
            }, {
                "title": "Settings",
                "target": "DRAWER_SETTINGS",
                "icon": 1049
            }]
        },
        "subsOverlay": {
            "status": {
                "code": 0,
                "analytics": {
                    "status": "Success",
                    "guid": "18568642-5216-45c7-8466-8f6f5b1e1af1",
                    "code": "0"
                }
            },
            "header": {
                "description": "%Phonebook_lookup%'s phone",
                "subscriptionHeader": {
                    "icon": "1068",
                    "subscriptionType": "Pay monthly",
                    "subscriptionId": "07387924225"
                },
                "background": 1089, //1089
                "tabsBackground": "#FFFFFF",
                "fontColor": "#FFFFFF",
                "tabsFontColor": "#333333",
                "currentChargesTitle": "<b>£44.00</b> current spend",
                "currentChargesPeriod": "From: 02 Feb to 01 Mar",
                "buttonColor": "#FFFFFF"
            },
            "tabs": [{
                    "name": "Airtime Plan",
                    "target": "PLAN",
                    "prefetch": false
                }, {
                    "name": "Device plan",
                    "target": "DEVICE_PLAN",
                    "prefetch": false
                }, {
                    "name": "Usage",
                    "target": "USAGE",
                    "prefetch": false
                }, {
                    "name": "Charges",
                    "target": "CHARGES",
                    "prefetch": false
                }, {
                    "name": "Extras",
                    "target": "EXTRAS",
                    "prefetch": false
                },
                // ,{
                //     "name": "Group Data",
                //     "target": "MANAGE_GROUP_DATA",
                //     "prefetch": false
                // },
                {
                    "name": "Top up",
                    "target": "TOP_UP",
                    "prefetch": false
                }
            ]
        },
        "settingItems": [{
            "name": "APP_SETTINGS",
            "title": "App Settings",
            "journeyKey": "NONE",
            "isParent": true,
            "subItems": [{
                "name": "APP_SETTINGS_ResetApp",
                "title": "Reset the app",
                "journeyKey": "SETTINGS_RESET_APP",
                "isParent": false
            }, {
                "name": "APP_SETTINGS_LoginOptions",
                "title": "Login options",
                "journeyKey": "LOGIN_OPTIONS",
                "isParent": false
            }, {
                "name": "APP_SETTINGS_DevicePermissions",
                "title": "Device permissions",
                "journeyKey": "DEVICE_PERMISSIONS",
                "isParent": false
            }, {
                "name": "APP_SETTINGS_TermsAndConditions",
                "title": "Terms and Conditions",
                "journeyKey": "TERMS_AND_CONDITIONS_SETTINGS",
                "isParent": false
            }]
        }, {
            "name": "ACCOUNT_SETTINGS",
            "title": "Account Settings",
            "journeyKey": "NONE",
            "isParent": true,
            "subItems": [{
                "title": "My account controls",
                "journeyKey": "ACCOUNT_CONTROL",
                "isParent": false
            }, {
                "title": "Spend manager",
                "journeyKey": "SPEND_MANAGER",
                "isParent": false
            }, {
                "title": "Mobile switching",
                "journeyKey": "MOBILE_SWITCHING",
                "isParent": false
            }, {
                "title": "Log out",
                "journeyKey": "LOGOUT",
                "isParent": false
            }]
        }, {
            "name": "PRIVACY_SETTINGS",
            "title": "Privacy Settings",
            "journeyKey": "NONE",
            "isParent": true,
            "subItems": [{
                "name": "PRIVACY_SETTINGS_AppPrivacy",
                "title": "App privacy",
                "journeyKey": "SPEED_CHECKER_SETTINGS",
                "isParent": false
            }, {
                "name": "PRIVACY_SETTINGS_MarketingPermissions",
                "title": "Marketing preferences",
                "journeyKey": "PRIVACY_PERMISSIONS",
                "isParent": false
            }, {
                "name": "PRIVACY_SETTINGS_AppPrivacySupplement",
                "title": "App Privacy Supplement",
                "journeyKey": "PRIVACY_SUPPLEMENT",
                "isParent": false
            }, {
                "name": "PRIVACY_SETTINGS_VodafonePrivacyPortal",
                "title": "Vodafone Privacy Portal",
                "journeyKey": "VODAFONE_PRIVACY",
                "isParent": false
            }]
        }]
    });
})

vfuk.get(path + '/v1/plan', (req, res) => {
    // Set the type of response, sets the content type.
    res.type('application/json');
    
    // Set the status code of the response.
    res.status(200);
    
    // Send the response body.
    res.json(
        // {"status":{"code":0,"analytics":{"status":"Success","guid":"3931297f-56cc-41f6-8523-7be84c98118c"}},"cards":[{"list":[{"title":"Plan","text":[null]}],"actions":[{"text":"Change plan","journeyKey":"SUBS_OVERLAY_UPGRADE"}]}]}
        {
            "status": {
                "code": 0,
                "analytics": {
                    "status": "Success",
                    "guid": "948f37bc-c4c7-476e-b21f-318e5f268d30"
                }
            },
            "cards": [{
                "title": "You're eligible to upgrade! 🎉",
                // "iconId": 10102,
                "actions": [{
                    "color": "#E60000",
                    "text": "Choose a phone plan",
                    "journeyKey": "UPGRADE_NOW",
                    "viewTag": "upgrade now",
                    "tapTag": "how to upgrade|upgrade now"
                }],
                "displayType": "CARD",
                "footer": "You can upgrade to a SIM only plan on 15 Sep 2020"
            }, {
                // "title": "Fancy a new phone? Upgrade today Fancy a new phone? Upgrade today Fancy a new phone? Upgrade today Fancy a new phone? Upgrade today 🎉",
                // "iconId": 10102,
                "list": [{
                    "title": "<b>Plan</b>",
                    "text": ["Unlimited"]
                }, {
                    "title": "<b>Data</b>",
                    "text": ["Unlimited data"]
                }, {
                    "title": "<b>Inclusive Extras</b>",
                    "text": [
                        "48 roam-free destinations",
                        "Roaming Pricing Notifications",
                        "Speed: Maximum download of 10 Mbps",
                        "Unlimited mins and texts",
                        "5G",
                        "Roaming fair usage cap"
                    ]
                }, {
                    "title": "<b>Upgrade</b>",
                    "text": ["Eligible for upgrade from 15 Sep 2020"]
                }, {
                    "title": "<b>Agreement ends</b>",
                    "text": ["29 Nov 2020"]
                }]
            }, {
                "title": "Keep reaching your data limit?",
                "actions": [{
                    "color": "#E60000",
                    "text": "Change your plan",
                    "journeyKey": "CHANGE_YOUR_PACKAGE",
                    "viewTag": "change package only",
                    "tapTag": "how to upgrade|change package only"
                }],
                "displayType": "CARD"
            }, {
                "title": "Vodafone OneNumber",
                // "iconId": 10102,
                // "displayType": "CELL",
                "text": "Our Service that lets you share you mobile number and allowance across a range of different devices.",
                "imageId": 1099,
                "actions": [{
                    "text": "Get connected",
                    "journeyKey": "REGISTER_OR_MANAGE_ONENUMBER"
                }, {
                    "text": "Find out more",
                    "journeyKey": "ONENUMBER_FIND_OUT_MORE"
                }]
            }]
        }
    );
})

vfuk.get(path + '/v2/plan', (req, res) => {
    // Set the type of response, sets the content type.
    res.type('application/json');
    
    // Set the status code of the response.
    res.status(200);
    
    // Send the response body.
    res.json({
        "status": {
            "code": 0,
            "analytics": {
                "status": "Success",
                "guid": "a4caa3a8-e611-4859-9b15-e591e2c8a99b"
            }
        },
        "cards": [
            {
                "title": "You're eligible to upgrade! :tada:",
                "text": "Ask an adviser to guide you through our available plans.",
                "actions": [
                    {
                        "color": "#E60000",
                        "text": "Call us",
                        "journeyKey": "CALL_US",
                        "viewTag": "call us",
                        "tapTag": "how to upgrade|call us"
                    },
                    {
                        "color": "#FFFFFF",
                        "text": "Find your nearest store",
                        "journeyKey": "FIND_NEAREST_STORE",
                        "viewTag": "find nearest store",
                        "tapTag": "how to upgrade|find nearest store"
                    }
                ],
                "displayType": "CARD"
            },
            {
                "title": "50GB Red entertainment Plan that might ....",
                "sections": [
                    {
                        "title": "<b>Your Plan</b>",
                        "renderType": "TABLE",
                        "list": [
                            {
                                "leftAlignedText": "Data",
                                "rightAlignedText": "50GB"
                            },
                            {
                                "leftAlignedText": "Minutes",
                                "rightAlignedText": "Unlimited minutes"
                            },
                            {
                                "leftAlignedText": "Texts",
                                "rightAlignedText": "UnlimitedTexts"
                            }
                        ]
                    },
                    {
                        "title": "<b>Contract</b>",
                        "renderType": "TABLE",
                        "list": [
                            {
                                "leftAlignedText": "Agreement ends",
                                "rightAlignedText": "17 Sept 2020"
                            }
                        ]
                    },
                    {
                        "title": "<b>Current Discounts</b>",
                        "renderType": "TABLE",
                        "list": [
                            {
                                "leftAlignedText": "80% employee..<br>Expires01 ..."
                            }
                        ]
                    },
                    {
                        "title": "<b>Includes</b>",
                        "visibleSubItemsCount": 3,
                        "renderType": "CHEVRONLIST",
                        "list": [
                            {
                                "title": "Unlimited UK minutes",
                                "subContent": {
                                    "subContentHeader": "Unlimited UK minutes",
                                    "subContentText": "Manage your unlimited UK minutes here",
                                    "subContentImageId": "10117"
                                }
                            },
                            {
                                "title": "Roaming Pricing Notifications",
                                "subContent": {
                                    "subContentHeader": "Roaming Pricing Notifications",
                                    "subContentText": "We want to help you stay in control over how much you spend when you're using mobile data abroad. So we're sending you text alerts to let you know how much you've spent. If you don't want to receive these anymore, simply slide the switch to 'Off'.",
                                    "subContentImageId": "10117"
                                }
                            },
                            {
                                "title": "Unlimited texts",
                                "subContent": {
                                    "subContentHeader": "Unlimited texts",
                                    "imageText": "Expires on ....",
                                    "subContentText": "Manage your unlimited texts here",
                                    "subContentImageId": "10117",
                                    "actions": [
                                        {
                                            "color": "#FFFFFF",
                                            "text": "See usage",
                                            "journeyKey": "<JOURNEY>",
                                            "viewTag": "",
                                            "tapTag": ""
                                        },
                                        {
                                            "color": "#FFFFFF",
                                            "text": "button2",
                                            "journeyKey": "<JOURNEY>",
                                            "viewTag": "",
                                            "tapTag": ""
                                        }
                                    ]
                                }
                            },
                            {
                                "title": "Unlimited Data Booster case 3",
                                "boosterPack": {
                                    "header": "Unlimited Data Booster",
                                    "title": "You’ve used all your data boosters. Still need more data?",
                                    "text": "Change your plan for one or our unlimited deals",
                                    "imageId": "10117",
                                    "available": "0",
                                    "used": "3",
                                    "active": "0",
                                    "availableLabel": "Available Available Available Available",
                                    "usedLabel": "Used",
                                    "activeLabel": "Active",
                                    "boosts": {
                                        "header": "Used Used Used Used Used Used Used Used Used Used Used Used Used Used Used Used Used Used Used ",
                                        "items": [
                                            {
                                                "title": "Unlimited Data Booster Unlimited Data Booster Unlimited Data Booster Unlimited Data Booster Unlimited Data Booster Unlimited Data Booster Unlimited Data Booster ",
                                                "text": "Active from 12 July - 12 August 2020 Active from 12 July - 12 August 2020 Active from 12 July - 12 August 2020 Active from 12 July - 12 August 2020"
                                            },
                                            {
                                                "title": "Unlimited Data Booster",
                                                "text": "Active from xxx - yyy"
                                            },
                                            {
                                                "title": "Unlimited Data Booster",
                                                "text": "Active from xxx - yyy"
                                            }
                                        ]
                                    }
                                }
                            },
                            {
                                "title": "Unlimited Data Booster case 2 Active",
                                "boosterPack": {
                                    "header": "Unlimited Data Booster",
                                    "title": "Unlimited Data Booster",
                                    "text": "Never worry about running out of data – boost yourself up to unlimited for a month​",
                                    "expiryDate": "Expires in 14 days Expires in 14 days Expires in 14 days Expires in 14 days Expires in 14 days ",
                                    "imageId": "10117",
                                    "available": "1",
                                    "used": "2",
                                    "active": "1",
                                    "availableLabel": "Available",
                                    "usedLabel": "Used",
                                    "activeLabel": "Active",
                                    "boosts": {
                                        "header": "Used",
                                        "items": [
                                            {
                                                "title": "Unlimited Data Booster",
                                                "text": "Active from 12 July - 12 August 2020"
                                            },
                                            {
                                                "title": "Unlimited Data Booster",
                                                "text": "Active from xxx - yyy"
                                            },
                                            {
                                                "title": "Unlimited Data Booster",
                                                "text": "Active from 12 July - 12 August 2020"
                                            },
                                            {
                                                "title": "Unlimited Data Booster",
                                                "text": "Active from 12 July - 12 August 2020"
                                            },
                                            {
                                                "title": "Unlimited Data Booster",
                                                "text": "Active from 12 July - 12 August 2020"
                                            }
                                        ]
                                    }
                                }
                            },
                            {
                                "title": "Unlimited Data Booster case 1",
                                "boosterPack": {
                                    "header": "Unlimited Data Booster",
                                    "text": "Think you need more data this month? Our  Unlimited Data Booster benefits give you unlimited high-speed data usage for 30 days,<Br><Br>To activate your a Data Booster you will need to send an SMS saying “BOOST” to 120. Tap the button below to open your Messages app",
                                    "imageId": "10117",
                                    "available": "2",
                                    "used": "1",
                                    "active": "0",
                                    "availableLabel": "Available",
                                    "usedLabel": "Used",
                                    "activeLabel": "Active",
                                    "boosts": {
                                        "header": "Used",
                                        "items": [
                                            {
                                                "title": "Unlimited Data Booster",
                                                "text": "Active from 12 July - 12 August 2020"
                                            },
                                            {
                                                "title": "Unlimited Data Booster",
                                                "text": "Active from 12 July - 12 August 2020"
                                            },
                                            {
                                                "title": "Unlimited Data Booster",
                                                "text": "Active from 12 July - 12 August 2020"
                                            },
                                            {
                                                "title": "Unlimited Data Booster",
                                                "text": "Active from 12 July - 12 August 2020"
                                            }
                                        ]
                                    },
                                    "actions": [
                                        {
                                            "color": "#E60000",
                                            "text": "Open Messages",
                                            "journeyKey": "DATA_BOOST",
                                            "viewTag": "",
                                            "tapTag": ""
                                        }
                                    ]
                                }
                            },
                            {
                                "title": "3GB Wi-fi",
                                "subContent": {
                                    "subContentHeader": "3GB Wi-fi",
                                    "imageText": "Expires on ....",
                                    "subContentText": "Manage your 3GB Wi-fi here",
                                    "subContentImageId": "10117"
                                }
                            },
                            {
                                "title": "Pay Monthly CTR Tariff"
                            },
                            {
                                "title": "51 roam-free destinations"
                            }
                        ]
                        ,
                        "lozenge": {
                                "label": "NEW",
                                "color": "#E60000"
                         }
                    }
                ],
                "actions": [
                    {
                        "text": "Get connected",
                        "journeyKey": "REGISTER_OR_MANAGE_ONENUMBER"
                    },
                    {
                        "text": "Find out more",
                        "journeyKey": "ONENUMBER_FIND_OUT_MORE"
                    }
                ]
            },
            {
                "title": "Vodafone OneNumber",
                "text": "Our Service that lets you share your mobile number and allowance across a range of different devices.",
                "imageId": 1099,
                "actions": [
                    {
                        "text": "Get connected",
                        "journeyKey": "REGISTER_OR_MANAGE_ONENUMBER"
                    },
                    {
                        "text": "Find out more",
                        "journeyKey": "ONENUMBER_FIND_OUT_MORE"
                    }
                ]
            }
        ]
    });
})

vfuk.get(path + '/v1/usages', (req, res) => {
    // Set the type of response, sets the content type.
    res.type('application/json');
    
    // Set the status code of the response.
    res.status(200);
    
    // Send the response body.
    res.json({
        "status": {
            "code": 0,
            "analytics": {
                "status": "Success",
                "guid": "417cc197-7b9c-4561-8c9d-04ba531e810e"
            }
        },
        "cards": [{
            "title": "Plan",
            "sections": [{
                "header": "Renewal date 11th Aug",
                "allowances": [{
                    "header": "International Minutes",
                    "iconId": 16,
                    "allowanceType": "DATA",
                    "quantity": "100",
                    "quantitySuffix": "of 100 International minutes left",
                    "percentageRemaining": 100.0,
                    "remainingUnit": "MB",
                    "unlimited": false
                }, {
                    "header": "Minutes",
                    "iconId": 18,
                    "allowanceType": "VOICE",
                    "quantity": "500",
                    "quantitySuffix": "of 500 mins left",
                    "percentageRemaining": 100.0,
                    "unlimited": false
                }]
            }],
            "buttons": [{
                "color": "#FFFFFF",
                "text": "View plan",
                "journeyKey": "SUBS_OVERLAY_PLAN",
                "viewTag": "usage|view plan",
                "tapTag": "usage|view plan|View plan"
            }]
        }, {
            "title": "Recurring extras",
            "sections": [{
                "header": "Extra 1GB data (monthly)",
                "allowances": [{
                    "header": "Data",
                    "iconId": 16,
                    "allowanceType": "DATA",
                    "quantity": "1.0",
                    "quantitySuffix": "of 1.0GB left",
                    "percentageRemaining": 100.0,
                    "remainingUnit": "GB",
                    "riderText": "Renewal date 11th Aug",
                    "unlimited": false
                }]
            }, {
                "header": "Extra 15GB data (monthly)",
                "allowances": [{
                    "header": "Data",
                    "iconId": 16,
                    "allowanceType": "DATA",
                    "quantity": "15.0",
                    "quantitySuffix": "of 15.0GB left",
                    "percentageRemaining": 100.0,
                    "remainingUnit": "GB",
                    "riderText": "Renewal date 11th Aug",
                    "unlimited": false
                }]
            }, {
                "header": "Extra 2GB data (monthly)",
                "allowances": [{
                    "header": "Data",
                    "iconId": 16,
                    "allowanceType": "DATA",
                    "quantity": "2.0",
                    "quantitySuffix": "of 2.0GB left",
                    "percentageRemaining": 100.0,
                    "remainingUnit": "GB",
                    "riderText": "Renewal date 11th Aug",
                    "unlimited": false
                }]
            }],
            "buttons": [{
                "color": "#FFFFFF",
                "text": "Manage extras ,caps and bars",
                "journeyKey": "SUBS_OVERLAY_EXTRAS",
                "viewTag": "usage|Manage extras",
                "tapTag": "usage|Manage extras|Manage extras ,caps and bars"
            }]
        }, {
            "title": "One-time extras",
            "sections": [{
                "header": "Extra 1GB data (one-off)",
                "allowances": [{
                    "header": "Data",
                    "iconId": 16,
                    "allowanceType": "DATA",
                    "quantity": "0",
                    "quantitySuffix": "of 1.0GB left",
                    "percentageRemaining": 0.0,
                    "remainingUnit": "MB",
                    "riderText": "Renewal date 11th May",
                    "unlimited": false
                }]
            }]
        }],
        "buttons": [{
            "color": "#FFFFFF",
            "text": "Add extras",
            "journeyKey": "SUBS_OVERLAY_EXTRAS",
            "viewTag": "usage|Add extras",
            "tapTag": "usage|Add extras|Add extras"
        }]
    });
})

vfuk.get(path + '/v1/topUp', (req, res) => {
    // Set the type of response, sets the content type.
    res.type('application/json');
    
    // Set the status code of the response.
    res.status(200);
    
    // Send the response body.
    res.json({
        "status": {
            "code": 0,
            "analytics": {
                "code": "0",
                "status": "Success",
                "guid": "851f392f-14bc-4820-8bc3-d207538080de"
            }
        },
        "topUp": {
            "status": {
                "code": 0,
                "analytics": {
                    "code": "0",
                    "status": "Success"
                }
            },
            "cards": [{
                "title": "Top up this number by card",
                "displayType": "CELL",
                "actions": [{
                    "journeyKey": "VESTA_LOGGEDIN_TOPUP",
                    "viewTag": "Top up this number by card",
                    "tapTag": "Top up|Top up this number by card"
                }]
            }, {
                "title": "Auto Top up",
                "displayType": "CELL",
                "actions": [{
                    "journeyKey": "VESTA_AUTO_TOPUP",
                    "viewTag": "Auto Top up",
                    "tapTag": "Top up|Auto Top up"
                }]
            }, {
                "title": "Manage payment cards",
                "displayType": "CELL",
                "actions": [{
                    "journeyKey": "MANAGE_MY_CARDS",
                    "viewTag": "Manage payment cards",
                    "tapTag": "Top up|Manage payment cards"
                }]
            }, {
                "title": "Activate voucher",
                "displayType": "CELL",
                "actions": [{
                    "journeyKey": "ACTIVATE_VOUCHER",
                    "viewTag": "Activate voucher",
                    "tapTag": "Top up|Activate voucher"
                }]
            }, {
                "title": "Top up with PayPal",
                "displayType": "CELL",
                "actions": [{
                    "journeyKey": "VESTA_PAY_PAL_TOPUP",
                    "viewTag": "Top up with PayPal",
                    "tapTag": "Top up|Top up with PayPal"
                }]
            }, {
                "title": "Top up any number",
                "displayType": "CELL",
                "actions": [{
                    "journeyKey": "VESTA_ANONY_TOPUP",
                    "viewTag": "Top up another number or use PayPal",
                    "tapTag": "Top up|Top up another number or use PayPal"
                }]
            }]
        }
    });
})

vfuk.get(path + '/v1/additionalCharges', (req, res) => {
    // Set the type of response, sets the content type.
    res.type('application/json');
    // res.set({
    //     'Content-Type': 'application/json;charset=utf-8',
    // })
    
    // Set the status code of the response.
    res.status(200);
    
    // Send the response body.
    res.json({
        "status": {
            "code": 0,
            "analytics": {
                "status": "Success",
                "guid": "2406aba7-5006-408e-93b7-eaab2ab96108"
            }
        },
        "list": [{
            "text": "Calls",
            "quantity": "£5.90",
            "hasChargesDetail": true,
            "detailAPITypeParam": "calls",
            "detailAPISortingParam": "date",
            "detailAPIPageTitle": "Additional Charges: Calls"
        }, {
            "text": "Data",
            "quantity": "£7.10",
            "hasChargesDetail": true
        }, {
            "text": "Texts",
            "quantity": "£120.90",
            "hasChargesDetail": true
        }, {
            "text": "Others",
            "quantity": "£4.70",
            "hasChargesDetail": true,
            "detailAPITypeParam": "others",
            "detailAPISortingParam": "date",
            "detailAPIPageTitle": "Additional Charges: Others"
        }]
    });
})

vfuk.get(path + '/v1/charges', (req, res) => {
    // Set the type of response, sets the content type.
    res.type('application/json');
    
    // Set the status code of the response.
    res.status(200);
    
    // Send the response body.
    res.json({
        "status": {
            "code": 0,
            "analytics": {
                "status": "SUCCESS",
                "guid": "05e821f4-af1c-4a3a-bb0c-d78945387267"
            }
        },
        "bundleCard": {
            "header": {
                "title": "<b>Monthly charges</b>",
                "subTitle": "From 09 Feb to 09 Mar",
                "quantity": "<b>£26.80</b>",
                "hasChargesBreakdown": true
            },
            "body": [{
                "title": "<b>My plan</b>",
                "list": [{
                    "text": "Red entertainment",
                    "quantity": "£30.00"
                }, {
                    "text": "Discount",
                    "quantity": "-£13.70"
                }]
            }, {
                "title": "<b>Added extras</b>",
                "list": [{
                    "text": "Vodafone international saver 100 - Dummy text to make this charge go on multiple lines. It's an added extra",
                    "quantity": "£10.60"
                }, {
                    "text": "Vodafone international saver 100",
                    "quantity": "£10.60"
                }, {
                    "text": "Vodafone international saver 100",
                    "quantity": "£10.60"
                }]
            }]
        },
        "additionalChargesCard": {
            "header": {
                "title": "<b>Additional charges</b>",
                "subTitle": "From 09 Feb to 09 Mar",
                "quantity": "<b>£21.10</b>",
                "hasChargesBreakdown": true
            }
        },
        "totalTitle": "Total",
        "totalChargesCard": {
            "header": {
                "title": "<b>Total charges</b>",
                "quantity": "<b>£47.90</b>"
            }
        },
        "footer": "Your monthly charges may change if you incur additional charges or buy any extras",
        "actions": [{
            "text": "View Previous Charges",
            "journeyKey": "SUBS_OVERLAY_TOP_UP",
            // "viewTag": "charges|View Previous Charges",
            // "tapTag": "charges"
        }]
    });
})

vfuk.get(path + '/v2/content', (req, res) => {
    // Set the type of response, sets the content type.
    res.type('application/json');
    
    // Set the status code of the response.
    res.status(200);
    
    // Send the response body.
    res.json({
        "status": {
            "code": 0,
            "analytics": {
                "status": "SUCCESS",
                "guid": "2f0cadbb-8126-473e-b26c-6408bcc4abb7"
            }
        },
        "lastAPICall": "2021-06-02T13:29:17",
        "items": {
            "NETPERFORM": {
                "content": {
                    "netperform_usage_access_disclaimer": "In order to show you trends on how much data you use and where you use it we need usage access.\n\nYou can turn this on via Android settings.",
                    "netperform_config_ping_fail_text": "Sorry, we couldn't get a result",
                    "netperform_more_about_text": "<b>What is download speed?<\/b><br\/>This is your ability to receive information from the Internet. The higher the speed, the more information you can receive per second, which means webpages load faster and content loading on apps are smoother. Network speed is measured by Megabits per second, written as MB\/s.<br\/><br\/><b>What is upload speed?<\/b><br\/>This is the ability to send information from your device to the Internet. Normally the default setting of upload speed is lower than download, as people tend to download and consume information more.<br\/><br\/><b>What is ping?<\/b><br\/>Ping is a measure of network latency, a key factor in how fast your online experience feels. The lower the latency, the more responsive the network is when streaming video, playing games, sending messages, or browsing the internet.",
                    "netperform_config_average_speed_description_text": "Your speed is good for",
                    "netperform_wifi_usage_title": "Wi-Fi usage",
                    "netperform_ping_result_sec": "%1$s sec ping",
                    "netperform_config_upload_high_text": "With this speed you can quickly and easily upload content to social media and send emails",
                    "netperform_start_test": "Start Test",
                    "netperform_internet_connectivity_title": "Internet connectivity",
                    "netperform_privacy_optimisation_description_improve_coverage_item": "Improve the network in locations where customers are most likely to use their phones by using Speed Checker data.",
                    "netperform_seconds": "sec",
                    "netperform_delete_all_lightbox_title": "Delete all speed tests",
                    "netperform_privacy_personalization_description_recommend_item": "Recommend packages to suit your preferences and where you use your phone the most",
                    "netperform_preprod_warning": "WARNING! The pre-production config file is in use.",
                    "netperform_privacy_policy": "Privacy Policy",
                    "netperform_network_opt_error_label": "In order to check your network speed, turn Network optimization ON in %1$s settings and help us to improve your experience",
                    "netperform_delete_all_lightbox_message": "You will delete all your previous tests done over Network and Wi-Fi. \n \n Do you want to proceed?",
                    "netperform_top_ten_empty_message": "No data has been collected yet, start using your device and we can show you which apps you use the most!",
                    "netperform_download_speed_mega": "%1$s MBit\/s download speed",
                    "netperform_usage_access_dialog_title": "Take control of your data",
                    "netperform_config_average_speed_usage_text": "Music streaming and browsing",
                    "netperform_time_format": "hh:mm a",
                    "netPerform_ok": "OK",
                    "netPerform_less_than_one": "< 1",
                    "netperform_config_download_low_text": "With this speed you can browse social media or your favourite websites",
                    "netperform_loading": "Loading…",
                    "netperform_location_permission_lightbox_redbutton_title": "Turn on location",
                    "vfg_netperform_privacy_options_bullet": "•",
                    "failedSimSwap": "Same number detected, no data will be removed",
                    "netperform_clear_usage": "Clear usage",
                    "netperform_reset_all_data_usage": "You will reset your Network usage both for Network and Wi-Fi",
                    "netperform_off_capital": "Off",
                    "netperform_outgoing_calls_duration": "Duration of outgoing calls in hours, mins, secs.",
                    "netperform_unit_hours": "hr",
                    "netperform_config_low_speed_description_text": "Your speed is good for",
                    "netperform_network_coverage_sub_title": "Percentage of time spent in full",
                    "netperform_check_network_message": "Check your network or Wi-Fi speed now",
                    "netperform_do_you_want_to_proceed": "Do you want to proceed?",
                    "successfulSimSwap": "Sim has been swapped successfully!",
                    "netperform_network_usage_network_optimization_disclaimer": "In order to display your network usage, turn Tailored service and recommendations ON in %1$s app settings and help us to provide you with a personalised service",
                    "netperform_privacy_no_thanks": "No thanks",
                    "netperform_network_usage_disclaimer": "Here is a detailed view of all your data usage. This includes \n the small stuff like when you're connected to Wi-fi and when you're using this app which is free",
                    "netperform_ping_ms": "%1$s ms ping",
                    "netperform_personalization_location_permission_title": "Location",
                    "netperform_config_ping_low_text": "This speed is not great for online gaming",
                    "netPerform_tailored_Service_switch": "Tailored Service",
                    "netperform_network_coverage_title": "Network coverage",
                    "netperform_privacy_anonymized_with_tailored_info_message": "In order to provide Tailored service and recommendations, Network optimisation is switched ON as well.",
                    "netperform_shared_text": "Check out my speed test result %1$s %2$s for download, %3$s %4$s for upload and %5$s %6$s ping! #Vodafone4G",
                    "netperform_personalization_call_permission_title": "Quality and connectivity",
                    "netperform_connection_status_change_description": "We are having a trouble with your connection, so we could not continue with this test.",
                    "netperform_cancel_test": "Cancel test",
                    "netperform_privacy_permissions_turnoff_overlay_message": "If you turn this option OFF, we won't be able to use your data to improve our service.",
                    "netPerform_usage_mega_stmt": "%1$s MB",
                    "netperform_config_low_speed_usage_text": "Browsing and emails",
                    "netperform_privacy_policy_label": "See more about",
                    "netperform_app_location_error_label": "In order to check your network speed allow %1$s to access your location in your device settings",
                    "netperform_grant_permission_lightbox_graybutton_title": "No thanks",
                    "netperform_more_about_title": "More on data & Wi-Fi speed",
                    "netperform_speed_test_disclaimer": "*Speed tests are free on your %1$s network",
                    "netperform_config_download_average_text": "With this speed you can stream Spotify Premium",
                    "netperform_mobile_data_used_in_giga_bytes": "Mobile data used in gigabytes (GB)",
                    "netperform_speed_test_canceled_alert_message": "Your speed test has been cancelled. Do you want to run a new test?",
                    "netperform_roaming_alert_message": "Speed tests are free when you're on your %1$s network.\nAdditional charges may be applicable when you're roaming.\n\nDo you want to proceed?",
                    "netperform_anonymized_call_permission_description": "We will enhance our products and services by monitoring data such as quality and use of your connectivity services.",
                    "netperform_share_app_chooser_title": "Share",
                    "netperform_alert_cancel_button": "Cancel",
                    "netperform_total_call_time": "Total call time %1$s",
                    "netperform_calls_made_past_x_days": "Calls made for the past %1$s days",
                    "netPerform_float_percentage_mark": "%1$s%%",
                    "netperform_ms": "ms",
                    "netperform_config_ping_average_text": "This speed is suitable for playing your favourite online games",
                    "netperform_megabits": "MBit\/s",
                    "netperform_enabling": "Enabling…",
                    "netperform_network_usage_title": "Network usage",
                    "netperform_application_permission_lightbox_redbutton_title": "Turn on location",
                    "netperform_optimisation_service_turnoff_overlay_body": "You will no longer be able to test your network speed, check the data consumption of the apps installed on your device or get any personalised assistance or recommendations.",
                    "netperform_privacy_optimisation_description_manufacture_improve_item": "Work with device manufacturers to improve how their devices work on our network.",
                    "netperform_change_location_phone_permission": "Change permissions in your device's app settings. Give %1$s app access to Location and Phone calls.",
                    "netperform_turnoff": "Turn off",
                    "netperform_wifi_data_used_in_giga_bytes": "Wifi data used in gigabytes (GB)",
                    "netperform_network": "Network",
                    "netperform_on": "on",
                    "netperform_chart_empty_string": "No data available",
                    "netperform_error_screen_network_usage_title": "Network usage",
                    "netperform_location_light_box_message": "The network usage service needs the location services to be turned ON.",
                    "netperform_privacy_personalization_service_turnoff_overlay_title": "Are you sure?",
                    "netperform_delete_all_ok_button": "Yes I do",
                    "netperform_config_upload_low_text": "With this speed it may take a while to send photos and videos",
                    "netperform_config_app_name": "My Vodafone",
                    "netperform_privacy_network_optimisation_expandable_header": "What happens when you keep this on?",
                    "netperform_config_upload_average_text": "With this speed you can upload content to social media and send emails",
                    "netperform_network_data_request_text": "In order to check your network usage we need some data on your location, the quality and use of your connectivity services and installed apps' data consumption.",
                    "netperform_network_optimisation_lightbox_redbutton_title": "OK, please proceed",
                    "netperform_config_download_high_text": "With this speed you can use your NOW TV Entertainment Pass or watch Sky Sports Mobile TV on your device without any buffering.",
                    "netperform_privacy_network_personalized_description": "We can make personal recommendations and tailor our service based on your location, the quality and use of your connectivity services.",
                    "netperform_usage_access_dialog_message": "%1$s can give you a breakdown of what apps you spend most of your data on so you get a full understanding of how you use your phone.",
                    "netperform_privacy_optimisation_service_turnoff_overlay_title": "Are you sure?",
                    "netperform_share_button": "Share",
                    "netperform_pm": "pm",
                    "netperform_download": "Download",
                    "netperform_connection_error_alert_title": "Check your connection",
                    "netperform_privacy_permissions_turnoff_overlay_body": "You will no longer be able to test your network speed, check the data consumption of the apps installed on your device or get any personalised assistance or recommendations.",
                    "netperform_total_data_used": "Total data used %1$s(%2$s)",
                    "netPerform_unit_min": "min",
                    "netperform_config_upload_fail_text": "Sorry, we couldn't get a result",
                    "netperform_ping": "Ping",
                    "netperform_never_mind": "Never mind",
                    "netperform_tested_on_formatted": "Tested on: %1$s on %2$s",
                    "netperform_config_ping_high_text": "This speed is ideal for playing your favourite online games",
                    "netPerform_mock_phone": "Phone",
                    "netperform_application_permission_lightbox_message": "Change permissions in your device's app settings. Give %1$s access to Location.",
                    "netperform_shared_text_ios": "Check out my speed test result",
                    "netperform_preparing_test_title": "Preparing your \nspeed test on",
                    "netperform_upload_speed": "Upload Speed",
                    "netperform_start_test_button_title_location_off": "Device Settings",
                    "netPerform_please_Enter_msisdn": "please enter the msisdn number",
                    "netperform_data_used_past_x_days": "Data used for the past %1$s days",
                    "netperform_at": "at",
                    "netperform_config_home_network_name": "Vodafone UK",
                    "netPerform_noValue": "--",
                    "netperform_network_optimisation": "Network optimisation",
                    "netperform_usage_access_cell_title": "App data usage: %1$s",
                    "netperform_am": "am",
                    "netperform_privacy_anonymized_service_off_warning": "You need this option switched ON to be able to check your network speed",
                    "netperform_allow_permissions_from_settings": "In order to check your network speed allow %1$s to access your location and phone permissions in your device settings.",
                    "netperform_privacy_personalization_description_improve_item": "Improve your experience by monitoring signal strength and voice call quality",
                    "netperform_upload_speed_mega": "%1$s MBit\/s upload speed",
                    "netPerform_network_optimization_switch": "Network Optimization",
                    "netperform_network_usage_no_permission_disclaimer": "In order to display your network usage Allow %1$s to access your location and phone permissions in your device settings.",
                    "netperform_usage_access": "Usage access",
                    "netperform_finalizing_ping_test": "Testing ping and\n finalizing your\n results",
                    "netperform_speed_checker_network_optimization_request_text": "In order to check your network speed we need data on your location, the quality and use of your connectivity services and installed apps' data consumption.",
                    "netPerform_unit_GB": "GB",
                    "netperform_data": "Data",
                    "swap_msisdn": "Change MSISDN",
                    "netperform_privacy_go_to_setting": "Go to Settings",
                    "netperform_privacy_personalization_description_tail_text": "Be reassured that we will never collect or use information relating to your calls, your browsing history, or any information that may be contained within any apps other than My Vodafone.",
                    "netPerform_percentage_mark": "%1$d%%",
                    "netperform_error_back_to_dashboard": "Back to dashboard",
                    "netperform_grant_permission_lightbox_title": "Grant permission",
                    "netperform_privacy_network_optimisation_description": "By collecting data including location and the performance of your phone we can improve the service we offer to everyone. This data is not linked back to you in any way.",
                    "netPerform_alertMessage": "Please enter your MSISDN to turn on the Tailored Service",
                    "netperform_restart_test": "Restart test",
                    "netperform_wi_fi": "Wi-Fi",
                    "netperform_reset_all_title": "Reset your network",
                    "netperform_tailored_and_recommendations": "Tailored service and recommendations",
                    "netperform_anonymized_call_permission_title": "Quality and connectivity",
                    "netperform_more_about_speed_checker": "More on data & Wi-Fi speed",
                    "netperform_error_text": "We're experiencing a few technical difficulties at the moment, which means %1$s is unavailable.\n\nWe are working to get it up and running as soon as possible",
                    "netperform_please_try_again": "Please try again",
                    "netperform_top_ten_subtitle": "Top 10 apps that used most data*",
                    "netperform_start_test_button_title_networkopt_off": "App Settings",
                    "netperform_date_format": "dd\/MM\/yyyy",
                    "netperform_personalization_location_permission_description": "We will make personal recommendations by using data such as your location.",
                    "netperform_privacy_personalization_description_anticipate_item": "Anticipate your needs by gathering data on the way you interact with your app.",
                    "netperform_share_description": "with #Vodafone4G  and enter a draw to win a full year’s subscription to either Sky Sports, Now TV, Netflix or Spotify Premium.",
                    "netperform_tested_on": "Tested on",
                    "netperform_roaming_alert_title": "Not on your home network?",
                    "netperform_device_location_error_label": "In order to check your network speed, turn ON location services in your device settings",
                    "netperform_privacy_personalized_service_off_warning": "You need this option switched ON to receive personalised recommendations",
                    "netperform_start_new_test": "Start new test",
                    "netperform_config_high_speed_description_text": "Your speed is great for",
                    "netperform_network_optimisation_lightbox_sub_message": "Turn Network optimization ON so that we can collect this data.",
                    "netperform_privacy_title": "App Privacy",
                    "netperform_share_label": "Share your results",
                    "netPerform_unit_MB": "MB",
                    "netperform_previous_tests": "Previous speed tests",
                    "netperform_personalization_service_turnoff_overlay_message": "If you turn this option OFF, you will not only miss out on personalised assistance and recommendations but also be unable to check the data consumption of the apps installed on your device.",
                    "netperform_usage_access_cell_description": "By collecting data on your app usage %1$s can help you track where you use your data allowance and tailor recommendations for you.",
                    "netperform_learn_more": "Learn more",
                    "netperform_try_again": "Try again",
                    "netperform_empty_speed_tests": "You haven't run this type of speed test yet",
                    "netPerform_dash": "-",
                    "netperform_speed_checker": "Speed Checker",
                    "netperform_privacy_permissions_turnoff_overlay_title": "Are you sure?",
                    "netperform_top_ten_disclaimer": "*Data used for network results are free and will not be charged to your bill",
                    "netPerform_mock_username": "Username",
                    "netperform_download_speed": "Download Speed",
                    "netperform_speed_checker_title": "Here's what you can do with this speed",
                    "netperform_usage_access_cell_sub_description": "This setting can be changed at any time by visiting your phone settings.",
                    "netperform_data_usage_per_app": "Data usage per app",
                    "netperform_config_high_speed_usage_text": "HD Video and music streaming",
                    "netperform_privacy_personalization_description_discover_item": "Discover what may hamper the performance of your app and phone and work to resolve it.",
                    "netperform_couldnt_continue_test": "Couldn't continue test",
                    "netPerform_check_networkOptimization_switch": "please check Network optimization switch first",
                    "netperform_on_capital": "On",
                    "netperform_permissions_request_text": "Change permissions in your device's app settings.Give %1$s app access to Phone and Location.",
                    "netperform_personalization_call_permission_description": "We will give you tailored assistance and recommendations based on data such as quality and use of your connectivity services and app data consumption.",
                    "netperform_anonymized_location_permission_description": "We will improve your experience by using data such as your location.",
                    "netperform_speed_test_cancelled_alert_title": "Speed test cancelled",
                    "netperform_wifi_data_used_in_mega_bytes": "Wifi data used in megabytes (MB)",
                    "netperform_internet_connectivity_sub_title": "Percentage of successful connectivity tests for internet or data service",
                    "netPerform_tailoredServiceStarted": "the Tailored Service started",
                    "netperform_optimisation_service_turnoff_overlay_message": "If you turn this option OFF, we won't be able to use your data to improve our service.",
                    "netperform_delete": "Delete",
                    "netperform_change_in_android_settings": "Change in Android settings",
                    "netperform_usage_access_dialog_sub_message": "To take advantage of this, please enable the %1$s setting in your Android settings.",
                    "netperform_change_via_android_settings": "Change via Android settings",
                    "netperform_connection_error_alert_message": "Please check your signal and try again when you've got a connection.",
                    "netPerform_three_dots": "…",
                    "netperform_enable": "Enable",
                    "netperform_mobile_data_used_in_mega_bytes": "Mobile data used in megabytes (MB)",
                    "netperform_config_download_fail_text": "Sorry, we couldn't get a result",
                    "netperform_delete_previous_tests": "Delete previous speed tests",
                    "netperform_privacy_expanded_description": "By having this option switched ON, you can help us to:",
                    "netperform_keep_on": "Keep on",
                    "netperform_network_usage_no_location_disclaimer": "In order to display your network usage turn ON location services in your device settings",
                    "netperform_location_permission_lightbox_message": "Location services are disabled on this device.",
                    "netperform_upload": "Upload",
                    "netperform_privacy_optimisation_description_improve_network_item": "Improve our network by pinpointing areas where devices have not worked as well as they should.",
                    "netPerform_tailoredServiceStoped": "the Tailored Service stopped",
                    "netperform_anonymized_location_permission_title": "Location",
                    "netperform_privacy_policy_value": "Privacy Policy",
                    "netperform_speed_test_result": "Speed test results",
                    "netperform_service_permission_request_overlay_introduction_message": "To be able to provide you with relevant recommendations, we need you to allow %s app to access the information below.",
                    "netperform_network_optimisation_lightbox_message": "In Order to check your network speed we need data on your location and the quality and use of your connectivity services",
                    "netperform_privacy_optimisation_description_offers_item": "Offer data packages that reflect the way our customers use mobile data vs Wi-Fi."
                }
            },
            "PLAN_CONTENT_STRINGS": {
                "content": {
                    "PLAN_CARD_INCLUSIVE_EXTRAS_SHOW_MORE": "Show more",
                    "PLAN_CARD_INCLUSIVE_EXTRAS_SHOW_LESS": "Show less"
                }
            },
            "APP_RATING": {
                "content": {
                    "remind_title": "NOT NOW",
                    "review_message": "Tell us what you think and help us improve our service",
                    "rate_title": "SUBMIT",
                    "cancel_title": "No, Thanks",
                    "review_title": "Enjoying my vodafone?"
                }
            },
            "DASHBOARD_CONTENT_STRINGS": {
                "content": {
                    "<VOICE>DASHBOARD_HEADER": "My Minutes",
                    "new_alert_messages": "new alert messages",
                    "pull_to_refresh_tutorial_text": "Pull down to refresh",
                    "faqs_title": "Need some help?",
                    "<DATA>DASHBOARD_HEADER": "My Data",
                    "dashboard_credit_title_text": "Remaining credit",
                    "support_button_async_chat": "Live Chat",
                    "<ETVOICE>DASHBOARD_HEADER": "My Roaming Minutes",
                    "dashboard_rewards_error_text": "Sorry, we can’t display your balance right now",
                    "pull_to_refresh_API_date_error": "Error - please retry",
                    "<SMS_VOICE>DASHBOARD_HEADER": "My Texts and mins",
                    "<GROUP_DATA>DASHBOARD_HEADER": "My Group data",
                    "subswitcher_error_text": "We are sorry but there has been a problem loading the services in this account.",
                    "my_account_drawer_title": "My account",
                    "dashboard_rewards_detail_text": "Points balance",
                    "support_button_forum": "Community",
                    "checking_for_updates": "Checking for alerts",
                    "no_new_alerts": "no new alerts",
                    "connected_apps_action_get": "Get",
                    "<ETDATA>DASHBOARD_HEADER": "My Roaming data",
                    "subscription_switcher_title": "My services",
                    "needhelp_bubble_text": "24\/7\nsupport",
                    "close_action": "Hide",
                    "<SMS>DASHBOARD_HEADER": "My Texts",
                    "burger_menu_full_failure_warring": "Sorry, we’re experiencing a few technical issues, so not all of our services are available.",
                    "dashboard_rewards_content_text": "Spend your Rewards points",
                    "you_have_no_alerts": "You don't have any alerts",
                    "page_title_faqs": "FAQs",
                    "connected_apps_action_open": "Open",
                    "dashboard_rewards_title_text": "Top Up Rewards",
                    "faqs_subtitle": "Choose from the support options below",
                    "pull_to_refresh_date_prefix": "Last Updated: ",
                    "links_menu_cut_off_show_less": "Show less",
                    "<ROAMDATA>DASHBOARD_HEADER": "My Roaming data",
                    "links_menu_cut_off_show_more": "Show more",
                    "dashboard_loyalty_credit_text": "Very<b>Me<\/b> Rewards",
                    "my_account_drawer_subscriptions_title": "Select one",
                    "<ETSMS>DASHBOARD_HEADER": "My Roaming Texts",
                    "my_account_drawer_subtitle_multible_accounts": "Select an account",
                    "my_account_drawer_subtitle_single_account": "Account number:",
                    "support_button_faqs": "FAQs"
                }
            },
            "TOPUP_CONTENT_STRINGS": {
                "content": {
                    "title_top_up": "Top up"
                }
            },
            "JOURNEYS": {
                "journeys": [{
                    "id": 1,
                    "name": "HOME",
                    "target": "myvodafone://dashboard",
                    "ssoEnabled": false,
                    "loginRequired": false,
                    "verificationRequired": false,
                    "connectionRequired": false,
                    "modifiedDatetime": 1665664324000,
                    "type": "APP_SCREEN",
                    "parameters": {},
                    "requiredAuth": false,
                    "skipStartup": false
                }, {
                    "id": 2,
                    "name": "NONE",
                    "target": "",
                    "ssoEnabled": false,
                    "loginRequired": false,
                    "verificationRequired": false,
                    "connectionRequired": false,
                    "modifiedDatetime": 1665664324000,
                    "type": "APP_SCREEN",
                    "parameters": {},
                    "requiredAuth": false,
                    "skipStartup": false
                }, {
                    "id": 3,
                    "name": "MY_PRODUCTS_AND_SERVICES",
                    "target": "myvodafone://productsandservices",
                    "ssoEnabled": false,
                    "loginRequired": false,
                    "verificationRequired": false,
                    "connectionRequired": false,
                    "modifiedDatetime": 1665664324000,
                    "type": "APP_SCREEN",
                    "parameters": {},
                    "requiredAuth": false,
                    "skipStartup": true
                }, {
                    "id": 7,
                    "name": "PREVIOUS_BILLS",
                    "target": "myvodafone://previousBill",
                    "ssoEnabled": false,
                    "loginRequired": false,
                    "verificationRequired": false,
                    "connectionRequired": false,
                    "modifiedDatetime": 1665664324000,
                    "type": "APP_SCREEN",
                    "parameters": {},
                    "requiredAuth": false,
                    "skipStartup": true
                }, {
                    "id": 9,
                    "name": "HELP",
                    "target": "myvodafone://support",
                    "ssoEnabled": false,
                    "loginRequired": false,
                    "verificationRequired": false,
                    "connectionRequired": false,
                    "modifiedDatetime": 1665664324000,
                    "title": "Help",
                    "type": "APP_SCREEN",
                    "parameters": {},
                    "requiredAuth": false,
                    "skipStartup": false
                }, {
                    "id": 12,
                    "name": "SETTING_SCREEN",
                    "target": "myvodafone://settings",
                    "ssoEnabled": false,
                    "loginRequired": false,
                    "verificationRequired": false,
                    "connectionRequired": false,
                    "modifiedDatetime": 1665664324000,
                    "type": "APP_SCREEN",
                    "parameters": {},
                    "requiredAuth": false,
                    "skipStartup": false
                }, {
                    "id": 20,
                    "name": "Notifications",
                    "target": "myvodafone://notificationInbox",
                    "ssoEnabled": false,
                    "loginRequired": false,
                    "verificationRequired": false,
                    "connectionRequired": false,
                    "modifiedDatetime": 1665664324000,
                    "type": "APP_SCREEN",
                    "parameters": {},
                    "requiredAuth": false,
                    "skipStartup": true
                }, {
                    "id": 21,
                    "name": "CURRENT_CHARGES",
                    "target": "myvodafone://currentCharges",
                    "ssoEnabled": false,
                    "loginRequired": false,
                    "verificationRequired": false,
                    "connectionRequired": false,
                    "modifiedDatetime": 1665664324000,
                    "type": "APP_SCREEN",
                    "parameters": {},
                    "requiredAuth": false,
                    "skipStartup": false
                }, {
                    "id": 27,
                    "name": "HOW_TO_UPGRADE",
                    "target": "myvodafone://how_to_upgrade",
                    "ssoEnabled": false,
                    "loginRequired": false,
                    "verificationRequired": false,
                    "connectionRequired": false,
                    "modifiedDatetime": 1665664336000,
                    "type": "APP_SCREEN",
                    "parameters": {},
                    "requiredAuth": false,
                    "skipStartup": true
                }, {
                    "id": 29,
                    "name": "ADDONS_DATA",
                    "target": "myvodafone://addons/data",
                    "ssoEnabled": false,
                    "loginRequired": false,
                    "verificationRequired": false,
                    "connectionRequired": false,
                    "modifiedDatetime": 1665664325000,
                    "type": "APP_SCREEN",
                    "parameters": {},
                    "requiredAuth": false,
                    "skipStartup": false
                }, {
                    "id": 30,
                    "name": "ADDONS_VOICE",
                    "target": "myvodafone://addons/voice",
                    "ssoEnabled": false,
                    "loginRequired": false,
                    "verificationRequired": false,
                    "connectionRequired": false,
                    "modifiedDatetime": 1665664325000,
                    "type": "APP_SCREEN",
                    "parameters": {},
                    "requiredAuth": false,
                    "skipStartup": false
                }, {
                    "id": 31,
                    "name": "ADDONS_SMS",
                    "target": "myvodafone://addons/sms",
                    "ssoEnabled": false,
                    "loginRequired": false,
                    "verificationRequired": false,
                    "connectionRequired": false,
                    "modifiedDatetime": 1665664325000,
                    "type": "APP_SCREEN",
                    "parameters": {},
                    "requiredAuth": false,
                    "skipStartup": false
                }, {
                    "id": 32,
                    "name": "ADDONS_ETDATA",
                    "target": "myvodafone://addons/data",
                    "ssoEnabled": false,
                    "loginRequired": false,
                    "verificationRequired": false,
                    "connectionRequired": false,
                    "modifiedDatetime": 1665664325000,
                    "type": "APP_SCREEN",
                    "parameters": {},
                    "requiredAuth": false,
                    "skipStartup": false
                }, {
                    "id": 33,
                    "name": "ADDONS_ETVOICE",
                    "target": "myvodafone://addons/voice",
                    "ssoEnabled": false,
                    "loginRequired": false,
                    "verificationRequired": false,
                    "connectionRequired": false,
                    "modifiedDatetime": 1665664325000,
                    "type": "APP_SCREEN",
                    "parameters": {},
                    "requiredAuth": false,
                    "skipStartup": false
                }, {
                    "id": 34,
                    "name": "ADDONS_ETSMS",
                    "target": "myvodafone://addons/sms",
                    "ssoEnabled": false,
                    "loginRequired": false,
                    "verificationRequired": false,
                    "connectionRequired": false,
                    "modifiedDatetime": 1665664325000,
                    "type": "APP_SCREEN",
                    "parameters": {},
                    "requiredAuth": false,
                    "skipStartup": false
                }, {
                    "id": 35,
                    "name": "TOP_UP",
                    "target": "myvodafone://topup",
                    "ssoEnabled": false,
                    "loginRequired": false,
                    "verificationRequired": false,
                    "connectionRequired": false,
                    "modifiedDatetime": 1665664336000,
                    "title": "Top up",
                    "type": "APP_SCREEN",
                    "parameters": {},
                    "requiredAuth": false,
                    "skipStartup": false
                }, {
                    "id": 56,
                    "name": "DISMISS",
                    "target": "",
                    "ssoEnabled": false,
                    "loginRequired": false,
                    "verificationRequired": false,
                    "connectionRequired": false,
                    "modifiedDatetime": 1665664339000,
                    "type": "APP_SCREEN",
                    "parameters": {},
                    "requiredAuth": false,
                    "skipStartup": false
                }, {
                    "id": 61,
                    "name": "FORGOT_PASSWORD",
                    "target": "myvodafone://resetPassword",
                    "ssoEnabled": false,
                    "loginRequired": false,
                    "verificationRequired": false,
                    "connectionRequired": false,
                    "modifiedDatetime": 1665664437000,
                    "type": "APP_SCREEN",
                    "parameters": {},
                    "requiredAuth": false,
                    "skipStartup": false,
                    "alternateJourneyName": "ECARE_FORGOTPASSWORD"
                }, {
                    "id": 62,
                    "name": "FORGOT_USERNAME",
                    "target": "myvodafone://resetUsername",
                    "ssoEnabled": false,
                    "loginRequired": false,
                    "verificationRequired": false,
                    "connectionRequired": false,
                    "modifiedDatetime": 1665664437000,
                    "type": "APP_SCREEN",
                    "parameters": {},
                    "requiredAuth": false,
                    "skipStartup": false,
                    "alternateJourneyName": "ECARE_FORGOTUSERNAME"
                }, {
                    "id": 64,
                    "name": "LOGIN",
                    "target": "myvodafone://login",
                    "ssoEnabled": false,
                    "loginRequired": false,
                    "verificationRequired": false,
                    "connectionRequired": true,
                    "modifiedDatetime": 1665664338000,
                    "type": "APP_SCREEN",
                    "parameters": {},
                    "requiredAuth": false,
                    "skipStartup": false,
                    "minIdTokenRequired": "LOA3"
                }, {
                    "id": 65,
                    "name": "LOGIN_PRESENTED",
                    "target": "myvodafone://loginPresented",
                    "ssoEnabled": false,
                    "loginRequired": false,
                    "verificationRequired": false,
                    "connectionRequired": false,
                    "modifiedDatetime": 1665664356000,
                    "type": "APP_SCREEN",
                    "parameters": {},
                    "requiredAuth": false,
                    "skipStartup": false
                }, {
                    "id": 66,
                    "name": "RESET_APP",
                    "target": "myvodafone://reset",
                    "ssoEnabled": false,
                    "loginRequired": false,
                    "verificationRequired": false,
                    "connectionRequired": false,
                    "modifiedDatetime": 1665664339000,
                    "type": "APP_SCREEN",
                    "parameters": {},
                    "requiredAuth": false,
                    "skipStartup": false
                }, {
                    "id": 67,
                    "name": "RETRY",
                    "target": "",
                    "ssoEnabled": false,
                    "loginRequired": false,
                    "verificationRequired": false,
                    "connectionRequired": false,
                    "modifiedDatetime": 1665664339000,
                    "type": "APP_SCREEN",
                    "parameters": {},
                    "requiredAuth": false,
                    "skipStartup": false
                }, {
                    "id": 68,
                    "name": "BACK",
                    "target": "",
                    "ssoEnabled": false,
                    "loginRequired": false,
                    "verificationRequired": false,
                    "connectionRequired": false,
                    "modifiedDatetime": 1665664339000,
                    "type": "APP_SCREEN",
                    "parameters": {},
                    "requiredAuth": false,
                    "skipStartup": false
                }, {
                    "id": 71,
                    "name": "RELOAD",
                    "target": "",
                    "ssoEnabled": false,
                    "loginRequired": false,
                    "verificationRequired": false,
                    "connectionRequired": false,
                    "modifiedDatetime": 1665664339000,
                    "type": "APP_SCREEN",
                    "parameters": {},
                    "requiredAuth": false,
                    "skipStartup": false
                }, {
                    "id": 73,
                    "name": "RESTART_JWT",
                    "target": "",
                    "ssoEnabled": false,
                    "loginRequired": false,
                    "verificationRequired": false,
                    "connectionRequired": false,
                    "modifiedDatetime": 1665664339000,
                    "type": "APP_SCREEN",
                    "parameters": {},
                    "requiredAuth": false,
                    "skipStartup": false
                }, {
                    "id": 74,
                    "name": "RESTART_MSP",
                    "target": "",
                    "ssoEnabled": false,
                    "loginRequired": false,
                    "verificationRequired": false,
                    "connectionRequired": false,
                    "modifiedDatetime": 1665664339000,
                    "type": "APP_SCREEN",
                    "parameters": {},
                    "requiredAuth": false,
                    "skipStartup": false
                }, {
                    "id": 75,
                    "name": "SETTINGS_RESET_APP",
                    "target": "myvodafone://settingReset",
                    "ssoEnabled": false,
                    "loginRequired": false,
                    "verificationRequired": false,
                    "connectionRequired": false,
                    "modifiedDatetime": 1665664342000,
                    "type": "APP_SCREEN",
                    "parameters": {},
                    "requiredAuth": false,
                    "skipStartup": false
                }, {
                    "id": 76,
                    "name": "LOGIN_OPTIONS",
                    "target": "myvodafone://loginoptions",
                    "ssoEnabled": false,
                    "loginRequired": false,
                    "verificationRequired": false,
                    "connectionRequired": false,
                    "modifiedDatetime": 1665664342000,
                    "type": "APP_SCREEN",
                    "parameters": {},
                    "requiredAuth": false,
                    "skipStartup": false
                }, {
                    "id": 77,
                    "name": "DEVICE_PERMISSIONS",
                    "target": "myvodafone://DEVICE_PERMISSIONS",
                    "ssoEnabled": false,
                    "loginRequired": false,
                    "verificationRequired": false,
                    "connectionRequired": false,
                    "modifiedDatetime": 1665664342000,
                    "type": "APP_SCREEN",
                    "parameters": {},
                    "requiredAuth": false,
                    "skipStartup": false
                }, {
                    "id": 78,
                    "name": "SPEED_CHECKER_SETTINGS",
                    "target": "myvodafone://SPEED_CHECKER_SETTINGS",
                    "ssoEnabled": false,
                    "loginRequired": false,
                    "verificationRequired": false,
                    "connectionRequired": false,
                    "modifiedDatetime": 1665664342000,
                    "type": "APP_SCREEN",
                    "parameters": {},
                    "requiredAuth": false,
                    "skipStartup": false
                }, {
                    "id": 79,
                    "name": "TERMS_AND_CONDITIONS_SETTINGS",
                    "target": "myvodafone://TERMS_AND_CONDITIONS_SETTINGS",
                    "ssoEnabled": false,
                    "loginRequired": false,
                    "verificationRequired": false,
                    "connectionRequired": false,
                    "modifiedDatetime": 1665664342000,
                    "type": "APP_SCREEN",
                    "parameters": {},
                    "requiredAuth": false,
                    "skipStartup": false
                }, {
                    "id": 80,
                    "name": "PRIVACY_SUPPLEMENT",
                    "target": "myvodafone://PRIVACY_SUPPLEMENT",
                    "ssoEnabled": false,
                    "loginRequired": false,
                    "verificationRequired": false,
                    "connectionRequired": false,
                    "modifiedDatetime": 1665664342000,
                    "type": "APP_SCREEN",
                    "parameters": {},
                    "requiredAuth": false,
                    "skipStartup": false
                }, {
                    "id": 100,
                    "name": "SUB_SWITCHER",
                    "target": "myvodafone://switchSubsciption",
                    "ssoEnabled": false,
                    "loginRequired": true,
                    "verificationRequired": false,
                    "connectionRequired": false,
                    "modifiedDatetime": 1665664346000,
                    "type": "APP_SCREEN",
                    "parameters": {},
                    "requiredAuth": false,
                    "skipStartup": false,
                    "minIdTokenRequired": "LOA3"
                }, {
                    "id": 102,
                    "name": "WIFI_SETTINGS",
                    "target": "myvodafone://wifi_settings",
                    "ssoEnabled": false,
                    "loginRequired": false,
                    "verificationRequired": false,
                    "connectionRequired": false,
                    "modifiedDatetime": 1665664347000,
                    "type": "APP_SCREEN",
                    "parameters": {},
                    "requiredAuth": false,
                    "skipStartup": false
                }, {
                    "id": 120,
                    "name": "PIN_SETUP",
                    "target": "myvodafone://passwordlogin",
                    "ssoEnabled": false,
                    "loginRequired": false,
                    "verificationRequired": false,
                    "connectionRequired": false,
                    "modifiedDatetime": 1665664347000,
                    "type": "APP_SCREEN",
                    "parameters": {},
                    "requiredAuth": false,
                    "skipStartup": false
                }, {
                    "id": 123,
                    "name": "NETWORK_SATISFACTION",
                    "target": "myvodafone://networkSatisfaction",
                    "ssoEnabled": false,
                    "loginRequired": false,
                    "verificationRequired": false,
                    "connectionRequired": false,
                    "modifiedDatetime": 1665664348000,
                    "type": "APP_SCREEN",
                    "parameters": {},
                    "requiredAuth": false,
                    "skipStartup": false
                }, {
                    "id": 124,
                    "name": "NET_PERFORM",
                    "target": "myvodafone://speedChecker",
                    "ssoEnabled": false,
                    "loginRequired": false,
                    "verificationRequired": false,
                    "connectionRequired": false,
                    "modifiedDatetime": 1665664350000,
                    "type": "APP_SCREEN",
                    "parameters": {},
                    "requiredAuth": false,
                    "skipStartup": true
                }, {
                    "id": 125,
                    "name": "MORE_ABOUT_SPEED_CHECKER",
                    "target": "myvodafone://moreAboutSpeedChecker",
                    "ssoEnabled": false,
                    "loginRequired": false,
                    "verificationRequired": false,
                    "connectionRequired": false,
                    "modifiedDatetime": 1665664351000,
                    "type": "APP_SCREEN",
                    "parameters": {},
                    "requiredAuth": false,
                    "skipStartup": false
                }, {
                    "id": 126,
                    "name": "MORE_ABOUT_NETWORK_USAGE",
                    "target": "myvodafone://moreAboutNetworkUsage",
                    "ssoEnabled": false,
                    "loginRequired": false,
                    "verificationRequired": false,
                    "connectionRequired": false,
                    "modifiedDatetime": 1665664351000,
                    "type": "APP_SCREEN",
                    "parameters": {},
                    "requiredAuth": false,
                    "skipStartup": false
                }, {
                    "id": 128,
                    "name": "ILNG_START",
                    "target": "myvodafone://networkFeedbackCenter",
                    "ssoEnabled": false,
                    "loginRequired": false,
                    "verificationRequired": false,
                    "connectionRequired": false,
                    "modifiedDatetime": 1665664352000,
                    "type": "APP_SCREEN",
                    "parameters": {},
                    "requiredAuth": false,
                    "skipStartup": false
                }, {
                    "id": 130,
                    "name": "ILNG_SUBMIT",
                    "target": "myvodafone://dashboard",
                    "ssoEnabled": false,
                    "loginRequired": false,
                    "verificationRequired": false,
                    "connectionRequired": false,
                    "modifiedDatetime": 1665664352000,
                    "title": "Finish",
                    "type": "APP_SCREEN",
                    "parameters": {},
                    "requiredAuth": false,
                    "skipStartup": false
                }, {
                    "id": 134,
                    "name": "EXIT",
                    "target": "exit",
                    "ssoEnabled": false,
                    "loginRequired": false,
                    "verificationRequired": false,
                    "connectionRequired": false,
                    "modifiedDatetime": 1665664355000,
                    "type": "APP_SCREEN",
                    "parameters": {},
                    "requiredAuth": false,
                    "skipStartup": false
                }, {
                    "id": 135,
                    "name": "MANAGE_GROUP_DATA",
                    "target": "myvodafone://manageGroupData",
                    "ssoEnabled": false,
                    "loginRequired": false,
                    "verificationRequired": false,
                    "connectionRequired": false,
                    "modifiedDatetime": 1665664356000,
                    "type": "APP_SCREEN",
                    "parameters": {},
                    "requiredAuth": false,
                    "skipStartup": false
                }, {
                    "id": 140,
                    "name": "ADDONS_GROUP_DATA",
                    "target": "myvodafone://addons/GROUP_DATA",
                    "ssoEnabled": false,
                    "loginRequired": false,
                    "verificationRequired": false,
                    "connectionRequired": false,
                    "modifiedDatetime": 1665664361000,
                    "type": "APP_SCREEN",
                    "parameters": {},
                    "requiredAuth": false,
                    "skipStartup": false
                }, {
                    "id": 156,
                    "name": "RESTART",
                    "target": "myvodafone://restart",
                    "ssoEnabled": false,
                    "loginRequired": false,
                    "verificationRequired": false,
                    "connectionRequired": false,
                    "modifiedDatetime": 1665664366000,
                    "type": "APP_SCREEN",
                    "parameters": {},
                    "requiredAuth": false,
                    "skipStartup": false
                }, {
                    "id": 158,
                    "name": "LOYALTY_HOME_SUSPENSION_JOURNEY",
                    "target": "https://veryme-mobile-app.stage-affinionservices.com/code",
                    "ssoEnabled": false,
                    "loginRequired": false,
                    "verificationRequired": false,
                    "connectionRequired": false,
                    "modifiedDatetime": 1665664366000,
                    "type": "APP_SCREEN",
                    "parameters": {},
                    "requiredAuth": false,
                    "skipStartup": false
                }, {
                    "id": 159,
                    "name": "GENERAL_SUSPENSION_JOURNEY",
                    "target": "",
                    "ssoEnabled": false,
                    "loginRequired": false,
                    "verificationRequired": false,
                    "connectionRequired": false,
                    "modifiedDatetime": 1665664366000,
                    "type": "APP_SCREEN",
                    "parameters": {},
                    "requiredAuth": false,
                    "skipStartup": false
                }, {
                    "id": 162,
                    "name": "DRAWER_REWARDS",
                    "target": "myvodafone://rewardsDrawer",
                    "ssoEnabled": false,
                    "loginRequired": false,
                    "verificationRequired": false,
                    "connectionRequired": false,
                    "modifiedDatetime": 1665664372000,
                    "type": "APP_SCREEN",
                    "parameters": {},
                    "requiredAuth": false,
                    "skipStartup": false
                }, {
                    "id": 163,
                    "name": "DRAWER_SETTINGS",
                    "target": "myvodafone://settings",
                    "ssoEnabled": false,
                    "loginRequired": false,
                    "verificationRequired": false,
                    "connectionRequired": false,
                    "modifiedDatetime": 1665664372000,
                    "type": "APP_SCREEN",
                    "parameters": {},
                    "requiredAuth": false,
                    "skipStartup": false
                }, {
                    "id": 167,
                    "name": "NOTIFICATIONS_NEW",
                    "target": "myvodafone://notificationInbox",
                    "ssoEnabled": false,
                    "loginRequired": false,
                    "verificationRequired": false,
                    "connectionRequired": false,
                    "modifiedDatetime": 1665664394000,
                    "type": "APP_SCREEN",
                    "parameters": {},
                    "requiredAuth": false,
                    "skipStartup": true
                }, {
                    "id": 169,
                    "name": "SUBS_OVERLAY",
                    "target": "myvodafone://subsOverlay",
                    "ssoEnabled": false,
                    "loginRequired": false,
                    "verificationRequired": false,
                    "connectionRequired": true,
                    "modifiedDatetime": 1665664394000,
                    "type": "APP_SCREEN",
                    "parameters": {},
                    "requiredAuth": false,
                    "skipStartup": true
                }, {
                    "id": 170,
                    "name": "SUBS_OVERLAY_PLAN",
                    "target": "myvodafone://subsOverlay/plan",
                    "ssoEnabled": false,
                    "loginRequired": false,
                    "verificationRequired": false,
                    "connectionRequired": true,
                    "modifiedDatetime": 1665664379000,
                    "type": "APP_SCREEN",
                    "parameters": {},
                    "requiredAuth": false,
                    "skipStartup": false
                }, {
                    "id": 171,
                    "name": "PLAN",
                    "target": "myvodafone://plan",
                    "ssoEnabled": false,
                    "loginRequired": false,
                    "verificationRequired": false,
                    "connectionRequired": true,
                    "modifiedDatetime": 1665664379000,
                    "type": "APP_SCREEN",
                    "parameters": {},
                    "requiredAuth": false,
                    "skipStartup": false
                }, {
                    "id": 172,
                    "name": "SUBS_OVERLAY_AIRTIME_PLAN",
                    "target": "myvodafone://subsOverlay/airtime_plan",
                    "ssoEnabled": false,
                    "loginRequired": false,
                    "verificationRequired": false,
                    "connectionRequired": true,
                    "modifiedDatetime": 1665664379000,
                    "type": "APP_SCREEN",
                    "parameters": {},
                    "requiredAuth": false,
                    "skipStartup": false
                }, {
                    "id": 173,
                    "name": "AIRTIME_PLAN",
                    "target": "myvodafone://airtimePlan",
                    "ssoEnabled": false,
                    "loginRequired": false,
                    "verificationRequired": false,
                    "connectionRequired": true,
                    "modifiedDatetime": 1665664379000,
                    "type": "APP_SCREEN",
                    "parameters": {},
                    "requiredAuth": false,
                    "skipStartup": false
                }, {
                    "id": 174,
                    "name": "SUBS_OVERLAY_DEVICE_PLAN",
                    "target": "myvodafone://subsOverlay/device_plan",
                    "ssoEnabled": false,
                    "loginRequired": false,
                    "verificationRequired": false,
                    "connectionRequired": true,
                    "modifiedDatetime": 1665664379000,
                    "type": "APP_SCREEN",
                    "parameters": {},
                    "requiredAuth": false,
                    "skipStartup": false
                }, {
                    "id": 175,
                    "name": "DEVICE_PLAN",
                    "target": "myvodafone://devicePlan",
                    "ssoEnabled": false,
                    "loginRequired": false,
                    "verificationRequired": false,
                    "connectionRequired": true,
                    "modifiedDatetime": 1665664379000,
                    "type": "APP_SCREEN",
                    "parameters": {},
                    "requiredAuth": false,
                    "skipStartup": false
                }, {
                    "id": 176,
                    "name": "SUBS_OVERLAY_USAGE",
                    "target": "myvodafone://subsOverlay/usage",
                    "ssoEnabled": false,
                    "loginRequired": false,
                    "verificationRequired": false,
                    "connectionRequired": true,
                    "modifiedDatetime": 1665664379000,
                    "type": "APP_SCREEN",
                    "parameters": {},
                    "requiredAuth": false,
                    "skipStartup": false
                }, {
                    "id": 177,
                    "name": "USAGE",
                    "target": "myvodafone://usage",
                    "ssoEnabled": false,
                    "loginRequired": false,
                    "verificationRequired": false,
                    "connectionRequired": true,
                    "modifiedDatetime": 1665664379000,
                    "type": "APP_SCREEN",
                    "parameters": {},
                    "requiredAuth": false,
                    "skipStartup": false
                }, {
                    "id": 178,
                    "name": "SUBS_OVERLAY_GROUP_DATA",
                    "target": "myvodafone://subsOverlay/manage_group_data",
                    "ssoEnabled": false,
                    "loginRequired": false,
                    "verificationRequired": false,
                    "connectionRequired": true,
                    "modifiedDatetime": 1665664379000,
                    "type": "APP_SCREEN",
                    "parameters": {},
                    "requiredAuth": false,
                    "skipStartup": false
                }, {
                    "id": 179,
                    "name": "GROUP_DATA",
                    "target": "myvodafone://subsOverlay/manageGroupData",
                    "ssoEnabled": false,
                    "loginRequired": false,
                    "verificationRequired": false,
                    "connectionRequired": true,
                    "modifiedDatetime": 1665664379000,
                    "type": "APP_SCREEN",
                    "parameters": {},
                    "requiredAuth": false,
                    "skipStartup": false
                }, {
                    "id": 180,
                    "name": "SUBS_OVERLAY_CHARGES",
                    "target": "myvodafone://subsOverlay/charges",
                    "ssoEnabled": false,
                    "loginRequired": false,
                    "verificationRequired": false,
                    "connectionRequired": true,
                    "modifiedDatetime": 1665664379000,
                    "type": "APP_SCREEN",
                    "parameters": {},
                    "requiredAuth": false,
                    "skipStartup": false
                }, {
                    "id": 181,
                    "name": "CHARGES",
                    "target": "myvodafone://charges",
                    "ssoEnabled": false,
                    "loginRequired": false,
                    "verificationRequired": false,
                    "connectionRequired": true,
                    "modifiedDatetime": 1665664379000,
                    "type": "APP_SCREEN",
                    "parameters": {},
                    "requiredAuth": false,
                    "skipStartup": false
                }, {
                    "id": 182,
                    "name": "SUBS_OVERLAY_EXTRAS",
                    "target": "myvodafone://subsOverlay/extras",
                    "ssoEnabled": false,
                    "loginRequired": false,
                    "verificationRequired": false,
                    "connectionRequired": true,
                    "modifiedDatetime": 1665664379000,
                    "type": "APP_SCREEN",
                    "parameters": {},
                    "requiredAuth": false,
                    "skipStartup": false
                }, {
                    "id": 183,
                    "name": "EXTRAS",
                    "target": "myvodafone://extras",
                    "ssoEnabled": false,
                    "loginRequired": false,
                    "verificationRequired": false,
                    "connectionRequired": true,
                    "modifiedDatetime": 1665664379000,
                    "type": "APP_SCREEN",
                    "parameters": {},
                    "requiredAuth": false,
                    "skipStartup": false
                }, {
                    "id": 184,
                    "name": "SUBS_OVERLAY_UPGRADE",
                    "target": "myvodafone://subsOverlay/upgrade",
                    "ssoEnabled": false,
                    "loginRequired": false,
                    "verificationRequired": false,
                    "connectionRequired": true,
                    "modifiedDatetime": 1665664394000,
                    "type": "APP_SCREEN",
                    "parameters": {},
                    "requiredAuth": false,
                    "skipStartup": true
                }, {
                    "id": 185,
                    "name": "UPGRADE",
                    "target": "myvodafone://upgrade",
                    "ssoEnabled": false,
                    "loginRequired": false,
                    "verificationRequired": false,
                    "connectionRequired": true,
                    "modifiedDatetime": 1665664379000,
                    "type": "APP_SCREEN",
                    "parameters": {},
                    "requiredAuth": false,
                    "skipStartup": false
                }, {
                    "id": 186,
                    "name": "SUBS_OVERLAY_TOP_UP",
                    "target": "myvodafone://subsOverlay/top_up",
                    "ssoEnabled": false,
                    "loginRequired": false,
                    "verificationRequired": false,
                    "connectionRequired": true,
                    "modifiedDatetime": 1665664379000,
                    "type": "APP_SCREEN",
                    "parameters": {},
                    "requiredAuth": false,
                    "skipStartup": false
                }, {
                    "id": 188,
                    "name": "DRAWER_ACCOUNT",
                    "target": "myvodafone://accountDrawer",
                    "ssoEnabled": false,
                    "loginRequired": true,
                    "verificationRequired": false,
                    "connectionRequired": true,
                    "modifiedDatetime": 1665664382000,
                    "type": "APP_SCREEN",
                    "parameters": {},
                    "requiredAuth": false,
                    "skipStartup": false,
                    "minIdTokenRequired": "LOA3"
                }, {
                    "id": 191,
                    "name": "APP_SETTINGS",
                    "target": "myvodafone://appSettings",
                    "ssoEnabled": false,
                    "loginRequired": false,
                    "verificationRequired": false,
                    "connectionRequired": false,
                    "modifiedDatetime": 1665664383000,
                    "type": "APP_SCREEN",
                    "parameters": {},
                    "requiredAuth": false,
                    "skipStartup": false
                }, {
                    "id": 192,
                    "name": "PRIVACY_SETTINGS",
                    "target": "myvodafone://privacySettings",
                    "ssoEnabled": false,
                    "loginRequired": false,
                    "verificationRequired": false,
                    "connectionRequired": false,
                    "modifiedDatetime": 1665664383000,
                    "type": "APP_SCREEN",
                    "parameters": {},
                    "requiredAuth": false,
                    "skipStartup": false
                }, {
                    "id": 206,
                    "name": "LOGOUT",
                    "target": "",
                    "ssoEnabled": false,
                    "loginRequired": false,
                    "verificationRequired": false,
                    "connectionRequired": true,
                    "modifiedDatetime": 1665664401000,
                    "type": "APP_SCREEN",
                    "parameters": {},
                    "requiredAuth": false,
                    "skipStartup": false
                }, {
                    "id": 208,
                    "name": "BACK_STEP",
                    "target": "",
                    "ssoEnabled": false,
                    "loginRequired": false,
                    "verificationRequired": false,
                    "connectionRequired": false,
                    "modifiedDatetime": 1665664403000,
                    "type": "APP_SCREEN",
                    "parameters": {},
                    "requiredAuth": false,
                    "skipStartup": false
                }, {
                    "id": 210,
                    "name": "ACCOUNT_SETTINGS",
                    "target": "myvodafone://accountSettings",
                    "ssoEnabled": false,
                    "loginRequired": false,
                    "verificationRequired": false,
                    "connectionRequired": false,
                    "modifiedDatetime": 1665664404000,
                    "type": "APP_SCREEN",
                    "parameters": {},
                    "requiredAuth": false,
                    "skipStartup": false
                }, {
                    "id": 216,
                    "name": "LOGIN_UFL",
                    "target": "myvodafone://loginUFL",
                    "ssoEnabled": false,
                    "loginRequired": false,
                    "verificationRequired": false,
                    "connectionRequired": false,
                    "modifiedDatetime": 1665664411000,
                    "type": "APP_SCREEN",
                    "parameters": {},
                    "requiredAuth": false,
                    "skipStartup": false,
                    "minIdTokenRequired": "LOA3"
                }, {
                    "id": 217,
                    "name": "NON_VF_CUSTOMER_DASHBOARD",
                    "target": "myvodafone://nonVodafoneCustomerDashboard",
                    "ssoEnabled": false,
                    "loginRequired": false,
                    "verificationRequired": false,
                    "connectionRequired": false,
                    "modifiedDatetime": 1665664413000,
                    "type": "APP_SCREEN",
                    "parameters": {},
                    "requiredAuth": false,
                    "skipStartup": false
                }, {
                    "id": 230,
                    "name": "TRADE_IN",
                    "target": "myvodafone://tradeIn",
                    "ssoEnabled": false,
                    "loginRequired": false,
                    "verificationRequired": false,
                    "connectionRequired": true,
                    "modifiedDatetime": 1665664418000,
                    "type": "APP_SCREEN",
                    "parameters": {},
                    "requiredAuth": false,
                    "skipStartup": false
                }, {
                    "id": 248,
                    "name": "CHANGE_MY_PIN",
                    "target": "myvodafone://changePin",
                    "ssoEnabled": false,
                    "loginRequired": true,
                    "verificationRequired": false,
                    "connectionRequired": true,
                    "modifiedDatetime": 1665664426000,
                    "type": "APP_SCREEN",
                    "parameters": {},
                    "requiredAuth": false,
                    "skipStartup": false,
                    "minIdTokenRequired": "LOA3"
                }, {
                    "id": 249,
                    "name": "LOGIN_OPTIONS_DXIDM",
                    "target": "myvodafone://loginoptions",
                    "ssoEnabled": false,
                    "loginRequired": true,
                    "verificationRequired": false,
                    "connectionRequired": false,
                    "modifiedDatetime": 1665664427000,
                    "type": "APP_SCREEN",
                    "parameters": {},
                    "requiredAuth": false,
                    "skipStartup": false,
                    "minIdTokenRequired": "LOA3"
                }, {
                    "id": 250,
                    "name": "DISCONNECT_WIFI",
                    "target": "myvodafone://disconnectWifi",
                    "ssoEnabled": false,
                    "loginRequired": false,
                    "verificationRequired": false,
                    "connectionRequired": false,
                    "modifiedDatetime": 1665664429000,
                    "type": "APP_SCREEN",
                    "parameters": {},
                    "requiredAuth": false,
                    "skipStartup": false
                }, {
                    "id": 255,
                    "name": "STRATEGIC_TRADE_IN",
                    "target": "myvodafone://strategicTradeIn",
                    "ssoEnabled": false,
                    "loginRequired": false,
                    "verificationRequired": false,
                    "connectionRequired": false,
                    "modifiedDatetime": 1665664433000,
                    "type": "APP_SCREEN",
                    "parameters": {},
                    "requiredAuth": false,
                    "skipStartup": false
                }, {
                    "id": 263,
                    "name": "BATTERY_REFRESH_BINGO",
                    "target": "myvodafone://batteryRefreshBingo",
                    "ssoEnabled": false,
                    "loginRequired": false,
                    "verificationRequired": false,
                    "connectionRequired": true,
                    "modifiedDatetime": 1665664435000,
                    "type": "APP_SCREEN",
                    "parameters": {},
                    "requiredAuth": false,
                    "skipStartup": false
                }, {
                    "id": 264,
                    "name": "BATTERY_REFRESH",
                    "target": "myvodafone://batteryRefresh",
                    "ssoEnabled": false,
                    "loginRequired": false,
                    "verificationRequired": false,
                    "connectionRequired": true,
                    "modifiedDatetime": 1665664435000,
                    "type": "APP_SCREEN",
                    "parameters": {},
                    "requiredAuth": false,
                    "skipStartup": false
                }, {
                    "id": 265,
                    "name": "TEMPORARY_PASSWORD",
                    "target": "myvodafone://warningTemplate",
                    "ssoEnabled": false,
                    "loginRequired": false,
                    "verificationRequired": false,
                    "connectionRequired": false,
                    "modifiedDatetime": 1665664435000,
                    "type": "APP_SCREEN",
                    "parameters": {},
                    "requiredAuth": false,
                    "skipStartup": false
                }, {
                    "id": 266,
                    "name": "APP_MIGRATION",
                    "target": "myvodafone://clientMigrate",
                    "ssoEnabled": false,
                    "loginRequired": false,
                    "verificationRequired": false,
                    "connectionRequired": false,
                    "modifiedDatetime": 1665664435000,
                    "type": "APP_SCREEN",
                    "parameters": {},
                    "requiredAuth": false,
                    "skipStartup": false
                }, {
                    "id": 272,
                    "name": "NON_VF_CUSTOMER_DASHBOARD_BLOCKED",
                    "target": "myvodafone://nonVodafoneCustomerDashboard",
                    "ssoEnabled": false,
                    "loginRequired": false,
                    "verificationRequired": false,
                    "connectionRequired": false,
                    "modifiedDatetime": 1665664437000,
                    "method": "GET",
                    "type": "APP_SCREEN",
                    "parameters": {
                        "HEADER": {
                            "Segment": "SME"
                        }
                    },
                    "requiredAuth": false,
                    "skipStartup": false
                }, {
                    "id": 273,
                    "name": "NON_VF_CUSTOMER_DASHBOARD_VOXI",
                    "target": "myvodafone://nonVodafoneCustomerDashboard",
                    "ssoEnabled": false,
                    "loginRequired": false,
                    "verificationRequired": false,
                    "connectionRequired": false,
                    "modifiedDatetime": 1665664437000,
                    "method": "GET",
                    "type": "APP_SCREEN",
                    "parameters": {
                        "HEADER": {
                            "Subscription-Type": "Voxi",
                            "Segment": "PREPAY"
                        }
                    },
                    "requiredAuth": false,
                    "skipStartup": false
                }, {
                    "id": 274,
                    "name": "NON_VF_CUSTOMER_DASHBOARD_HERITAGE",
                    "target": "myvodafone://nonVodafoneCustomerDashboard",
                    "ssoEnabled": false,
                    "loginRequired": false,
                    "verificationRequired": false,
                    "connectionRequired": false,
                    "modifiedDatetime": 1665664438000,
                    "method": "GET",
                    "type": "APP_SCREEN",
                    "parameters": {
                        "HEADER": {
                            "Segment": "HERITAGE"
                        }
                    },
                    "requiredAuth": false,
                    "skipStartup": false
                }, {
                    "id": 275,
                    "name": "WARNING_CHANGE_PIN",
                    "target": "myvodafone://warningChangePinOnOtherChannel",
                    "ssoEnabled": false,
                    "loginRequired": false,
                    "verificationRequired": false,
                    "connectionRequired": false,
                    "modifiedDatetime": 1665664439000,
                    "type": "APP_SCREEN",
                    "parameters": {},
                    "requiredAuth": false,
                    "skipStartup": false
                }, {
                    "id": 278,
                    "name": "ALL_Offers",
                    "target": "myvodafone://viewAllOffers",
                    "ssoEnabled": false,
                    "loginRequired": false,
                    "verificationRequired": false,
                    "connectionRequired": false,
                    "modifiedDatetime": 1665664441000,
                    "type": "APP_SCREEN",
                    "parameters": {},
                    "requiredAuth": false,
                    "skipStartup": false
                }, {
                    "id": 282,
                    "name": "ADDITIONAL_CHARGES_DETAILS",
                    "target": "myvodafone://additionChargesDetails",
                    "ssoEnabled": false,
                    "loginRequired": true,
                    "verificationRequired": false,
                    "connectionRequired": true,
                    "modifiedDatetime": 1665664445000,
                    "type": "APP_SCREEN",
                    "parameters": {},
                    "requiredAuth": false,
                    "skipStartup": false,
                    "minIdTokenRequired": "LOA3"
                }, {
                    "id": 283,
                    "name": "RELOGIN",
                    "target": "",
                    "ssoEnabled": false,
                    "loginRequired": false,
                    "verificationRequired": false,
                    "connectionRequired": true,
                    "modifiedDatetime": 1665664446000,
                    "type": "APP_SCREEN",
                    "parameters": {},
                    "requiredAuth": false,
                    "skipStartup": false,
                    "minIdTokenRequired": "LOA3"
                }, {
                    "id": 284,
                    "name": "RECANCEL",
                    "target": "",
                    "ssoEnabled": false,
                    "loginRequired": false,
                    "verificationRequired": false,
                    "connectionRequired": true,
                    "modifiedDatetime": 1665664446000,
                    "type": "APP_SCREEN",
                    "parameters": {},
                    "requiredAuth": false,
                    "skipStartup": false,
                    "minIdTokenRequired": "LOA3"
                }, {
                    "id": 286,
                    "name": "C2U_API_FAIL",
                    "target": "myvodafone://c2uAPIFail",
                    "ssoEnabled": false,
                    "loginRequired": false,
                    "verificationRequired": false,
                    "connectionRequired": false,
                    "modifiedDatetime": 1665664447000,
                    "type": "APP_SCREEN",
                    "parameters": {},
                    "requiredAuth": false,
                    "skipStartup": false
                }, {
                    "id": 287,
                    "name": "CLICK_TO_UPGRADE_CONFIRMATION_ORDER",
                    "target": "myvodafone://clickToUpgradeConfirmationOrder",
                    "ssoEnabled": false,
                    "loginRequired": true,
                    "verificationRequired": false,
                    "connectionRequired": true,
                    "modifiedDatetime": 1665664447000,
                    "type": "APP_SCREEN",
                    "parameters": {},
                    "requiredAuth": false,
                    "skipStartup": false,
                    "minIdTokenRequired": "LOA3"
                }, {
                    "id": 288,
                    "name": "CLICK_TO_UPGRADE_CHANGE_YOUR_PLAN_CONTINUE",
                    "target": "myvodafone://clickToUpgradeCheckoutModal",
                    "ssoEnabled": false,
                    "loginRequired": true,
                    "verificationRequired": false,
                    "connectionRequired": true,
                    "modifiedDatetime": 1665664447000,
                    "type": "APP_SCREEN",
                    "parameters": {},
                    "requiredAuth": false,
                    "skipStartup": false,
                    "minIdTokenRequired": "LOA3"
                }, {
                    "id": 289,
                    "name": "C2U_NON_ROOT_SUBSCRIPTION_ERROR",
                    "target": "myvodafone://c2uChildAccountError",
                    "ssoEnabled": false,
                    "loginRequired": false,
                    "verificationRequired": false,
                    "connectionRequired": false,
                    "modifiedDatetime": 1665664447000,
                    "type": "APP_SCREEN",
                    "parameters": {},
                    "requiredAuth": false,
                    "skipStartup": false
                }, {
                    "id": 290,
                    "name": "C2U_CHANGE_YOUR_PLAN_ERROR",
                    "target": "myvodafone://c2uChangeYourPlanError",
                    "ssoEnabled": false,
                    "loginRequired": false,
                    "verificationRequired": false,
                    "connectionRequired": false,
                    "modifiedDatetime": 1665664447000,
                    "type": "APP_SCREEN",
                    "parameters": {},
                    "requiredAuth": false,
                    "skipStartup": false
                }, {
                    "id": 311,
                    "name": "PLAN_OVERLAY_FOR_TRADE_IN_OR_UPDATE_PLAN",
                    "target": "myvodafone://upgradeBottomSheet",
                    "ssoEnabled": false,
                    "loginRequired": false,
                    "verificationRequired": false,
                    "connectionRequired": false,
                    "modifiedDatetime": 1665664455000,
                    "type": "APP_SCREEN",
                    "parameters": {},
                    "requiredAuth": false,
                    "skipStartup": false
                }, {
                    "id": 314,
                    "name": "BILLING_DASHBOARD",
                    "target": "myvodafone://billingDashboard",
                    "ssoEnabled": false,
                    "loginRequired": false,
                    "verificationRequired": false,
                    "connectionRequired": true,
                    "modifiedDatetime": 1665665986000,
                    "type": "APP_SCREEN",
                    "parameters": {},
                    "requiredAuth": false,
                    "skipStartup": false,
                    "minIdTokenRequired": "LOA1"
                }, {
                    "id": 323,
                    "name": "CLICK2UPGRADE_RECOMMENDED_PLANS",
                    "target": "myvodafone://click2UpgradeRecommendedPlans",
                    "ssoEnabled": false,
                    "loginRequired": false,
                    "verificationRequired": false,
                    "connectionRequired": true,
                    "modifiedDatetime": 1665665992000,
                    "type": "APP_SCREEN",
                    "parameters": {},
                    "requiredAuth": false,
                    "skipStartup": false,
                    "minIdTokenRequired": "LOA1",
                    "maskKey": "C2UBuyUpgradePlanMask"
                }, {
                    "id": 324,
                    "name": "CLICK2UPGRADE_SELECTED_PLAN",
                    "target": "myvodafone://click2UpgradeSelectedPlan",
                    "ssoEnabled": false,
                    "loginRequired": false,
                    "verificationRequired": false,
                    "connectionRequired": true,
                    "modifiedDatetime": 1665665989000,
                    "type": "APP_SCREEN",
                    "parameters": {},
                    "requiredAuth": false,
                    "skipStartup": false,
                    "minIdTokenRequired": "LOA1"
                }, {
                    "id": 327,
                    "name": "CLICK2UPGRADE_API_FAIL",
                    "target": "myvodafone://click2UpgradeApiFail",
                    "ssoEnabled": false,
                    "loginRequired": false,
                    "verificationRequired": false,
                    "connectionRequired": false,
                    "modifiedDatetime": 1665665990000,
                    "type": "APP_SCREEN",
                    "parameters": {},
                    "requiredAuth": false,
                    "skipStartup": false
                }, {
                    "id": 328,
                    "name": "CLICK2UPGRADE_CONFIRM_PLAN",
                    "target": "myvodafone://click2UpgradeConfirmPlan",
                    "ssoEnabled": false,
                    "loginRequired": false,
                    "verificationRequired": false,
                    "connectionRequired": true,
                    "modifiedDatetime": 1665665990000,
                    "type": "APP_SCREEN",
                    "parameters": {},
                    "requiredAuth": false,
                    "skipStartup": false,
                    "minIdTokenRequired": "LOA1"
                }, {
                    "id": 329,
                    "name": "CLICK2UPGRADE_CHECKOUT",
                    "target": "myvodafone://click2UpgradeCheckout",
                    "ssoEnabled": false,
                    "loginRequired": false,
                    "verificationRequired": false,
                    "connectionRequired": true,
                    "modifiedDatetime": 1665665991000,
                    "type": "APP_SCREEN",
                    "parameters": {},
                    "requiredAuth": false,
                    "skipStartup": false,
                    "minIdTokenRequired": "LOA1"
                }, {
                    "id": 330,
                    "name": "CLICK2UPGRADE_NON_ROOT_SUBSCRIPTION_ERROR",
                    "target": "myvodafone://click2UpgradeNonRootSubscriptionError",
                    "ssoEnabled": false,
                    "loginRequired": false,
                    "verificationRequired": false,
                    "connectionRequired": false,
                    "modifiedDatetime": 1665665991000,
                    "type": "APP_SCREEN",
                    "parameters": {},
                    "requiredAuth": false,
                    "skipStartup": false
                }, {
                    "id": 331,
                    "name": "CLICK2UPGRADE_CHANGE_YOUR_PLAN_ERROR",
                    "target": "myvodafone://click2UpgradeChangeYourPlanError",
                    "ssoEnabled": false,
                    "loginRequired": false,
                    "verificationRequired": false,
                    "connectionRequired": false,
                    "modifiedDatetime": 1665665991000,
                    "type": "APP_SCREEN",
                    "parameters": {},
                    "requiredAuth": false,
                    "skipStartup": false
                }, {
                    "id": 332,
                    "name": "TEMPLATE_MASK_JOURNEY",
                    "target": "myvodafone://templateMaskJourney",
                    "ssoEnabled": false,
                    "loginRequired": false,
                    "verificationRequired": false,
                    "connectionRequired": false,
                    "modifiedDatetime": 1665665992000,
                    "type": "APP_SCREEN",
                    "parameters": {},
                    "requiredAuth": false,
                    "skipStartup": false
                }, {
                    "id": 6,
                    "name": "PREVIOUS_EBILL",
                    "target": "https://www.vodafone.co.uk/webcenter/portal/myvodafone/app/latestbill",
                    "ssoEnabled": true,
                    "loginRequired": true,
                    "verificationRequired": false,
                    "connectionRequired": true,
                    "modifiedDatetime": 1665664415000,
                    "type": "INTERNAL",
                    "parameters": {
                        "QUERY": {
                            "cid": "mvangt-mva/mva/myvfwb/latestbill/an/ntst"
                        }
                    },
                    "requiredAuth": false,
                    "skipStartup": false,
                    "minIdTokenRequired": "LOA3"
                }, {
                    "id": 8,
                    "name": "VIEW_LAST_BILLS",
                    "target": "https://www.vodafone.co.uk/webcenter/portal/myvodafone/app/apppreviousbills",
                    "ssoEnabled": true,
                    "loginRequired": true,
                    "verificationRequired": false,
                    "connectionRequired": true,
                    "modifiedDatetime": 1665664415000,
                    "title": "Latest Bill",
                    "type": "INTERNAL",
                    "parameters": {
                        "QUERY": {
                            "cid": "mvangt-mva/mva/myvfwb/previousbill/an/ntst"
                        }
                    },
                    "requiredAuth": false,
                    "skipStartup": true,
                    "minIdTokenRequired": "LOA3"
                }, {
                    "id": 10,
                    "name": "MY_OFFERS",
                    "target": "https://www.vodafone.co.uk/webcenter/portal/myvodafone/app/appoffers",
                    "ssoEnabled": true,
                    "loginRequired": true,
                    "verificationRequired": false,
                    "connectionRequired": true,
                    "modifiedDatetime": 1665664397000,
                    "title": "Offers for you",
                    "type": "INTERNAL",
                    "parameters": {},
                    "requiredAuth": false,
                    "skipStartup": true,
                    "minIdTokenRequired": "LOA3"
                }, {
                    "id": 11,
                    "name": "BROWSE_EXTRAS",
                    "target": "https://www.vodafone.co.uk/webcenter/portal/myvodafone/app/appmanageservices",
                    "ssoEnabled": true,
                    "loginRequired": true,
                    "verificationRequired": false,
                    "connectionRequired": true,
                    "modifiedDatetime": 1665664444000,
                    "title": "Manage Controls and Extras",
                    "type": "INTERNAL",
                    "parameters": {
                        "QUERY": {
                            "cid": "mvangt-mva/mva/myvfwb/manageservices/an/ntst"
                        }
                    },
                    "requiredAuth": false,
                    "skipStartup": false,
                    "minIdTokenRequired": "LOA3"
                }, {
                    "id": 15,
                    "name": "FIND_NEAREST_STORE",
                    "target": "http://m.vodafone.co.uk/mobile/store_finder/index.html",
                    "ssoEnabled": false,
                    "loginRequired": false,
                    "verificationRequired": false,
                    "connectionRequired": true,
                    "modifiedDatetime": 1665664324000,
                    "type": "INTERNAL",
                    "parameters": {},
                    "requiredAuth": false,
                    "skipStartup": false
                }, {
                    "id": 16,
                    "name": "UPGRADE_NOW_WCP",
                    "target": "https://www.vodafone.co.uk/webcenter/portal/myvodafone/app/appupgrade",
                    "ssoEnabled": true,
                    "loginRequired": true,
                    "verificationRequired": false,
                    "connectionRequired": true,
                    "modifiedDatetime": 1665664423000,
                    "type": "INTERNAL",
                    "parameters": {},
                    "requiredAuth": false,
                    "skipStartup": false,
                    "redirectExtraParams": "cid=mvangt-mva/mva/myvfwb/upgrade/an/ntst",
                    "extraParamsSupportedUrls": [
                        "upgrade-and-offers",
                        "datagram"
                    ],
                    "minIdTokenRequired": "LOA3"
                }, {
                    "id": 17,
                    "name": "ADD_DATA_PACK",
                    "target": "https://www.vodafone.co.uk/webcenter/portal/myvodafone/app/appatopup",
                    "ssoEnabled": false,
                    "loginRequired": false,
                    "verificationRequired": false,
                    "connectionRequired": true,
                    "modifiedDatetime": 1665664415000,
                    "title": "Add a data pack",
                    "type": "INTERNAL",
                    "parameters": {
                        "QUERY": {
                            "cid": "mvangt-mva/mva/myvfwb/atopup/an/ntst"
                        }
                    },
                    "requiredAuth": false,
                    "skipStartup": false
                }, {
                    "id": 18,
                    "name": "VELTI",
                    "target": "https://rewards.vodafone.co.uk/catalogue",
                    "ssoEnabled": false,
                    "loginRequired": false,
                    "verificationRequired": false,
                    "connectionRequired": true,
                    "modifiedDatetime": 1665664416000,
                    "method": "POST",
                    "partner": "VELTI",
                    "title": "Spend top up rewards",
                    "type": "INTERNAL",
                    "parameters": {
                        "QUERY": {
                            "cid": "mvangt-mva/mva/myvfwb/toprewards/an/ntst"
                        },
                        "BODY": {
                            "msisdn": "#authtoken"
                        }
                    },
                    "requiredAuth": true,
                    "authParams": {
                        "third_partner_name": "Velti"
                    },
                    "skipStartup": false
                }, {
                    "id": 19,
                    "name": "PONTIS_OFFERS",
                    "target": "https://paygoffers.vodafone.co.uk",
                    "ssoEnabled": false,
                    "loginRequired": false,
                    "verificationRequired": false,
                    "connectionRequired": true,
                    "modifiedDatetime": 1665664324000,
                    "method": "POST",
                    "title": "Offers for you",
                    "type": "INTERNAL",
                    "parameters": {
                        "BODY": {
                            "source": "myvfapp",
                            "msisdn": "#authtoken"
                        }
                    },
                    "requiredAuth": true,
                    "authParams": {
                        "third_partner_name": "PONTIS"
                    },
                    "skipStartup": false
                }, {
                    "id": 22,
                    "name": "VIEW_ITEMISED_BILL",
                    "target": "https://www.vodafone.co.uk/webcenter/portal/myvodafone/app/appnextbill",
                    "ssoEnabled": true,
                    "loginRequired": true,
                    "verificationRequired": false,
                    "connectionRequired": true,
                    "modifiedDatetime": 1665664415000,
                    "title": "Estimated charges",
                    "type": "INTERNAL",
                    "parameters": {
                        "QUERY": {
                            "cid": "mvangt-mva/mva/myvfwb/nextbill/an/ntst"
                        }
                    },
                    "requiredAuth": false,
                    "skipStartup": false,
                    "minIdTokenRequired": "LOA3"
                }, {
                    "id": 23,
                    "name": "MANAGE_SMS_ADD_ONS",
                    "target": "https://www.vodafone.co.uk/webcenter/portal/myvodafone/app/appmanagetextpictures",
                    "ssoEnabled": true,
                    "loginRequired": true,
                    "verificationRequired": false,
                    "connectionRequired": true,
                    "modifiedDatetime": 1665664397000,
                    "type": "INTERNAL",
                    "parameters": {},
                    "requiredAuth": false,
                    "skipStartup": false,
                    "minIdTokenRequired": "LOA3"
                }, {
                    "id": 24,
                    "name": "MANAGE_VOICE_ADD_ONS",
                    "target": "https://www.vodafone.co.uk/webcenter/portal/myvodafone/app/appmanagecallsmins",
                    "ssoEnabled": true,
                    "loginRequired": true,
                    "verificationRequired": false,
                    "connectionRequired": true,
                    "modifiedDatetime": 1665664397000,
                    "type": "INTERNAL",
                    "parameters": {},
                    "requiredAuth": false,
                    "skipStartup": false,
                    "minIdTokenRequired": "LOA3"
                }, {
                    "id": 25,
                    "name": "MANAGE_DATA_ADD_ONS",
                    "target": "https://www.vodafone.co.uk/webcenter/portal/myvodafone/app/appmanagedataaddons",
                    "ssoEnabled": true,
                    "loginRequired": true,
                    "verificationRequired": false,
                    "connectionRequired": true,
                    "modifiedDatetime": 1665664415000,
                    "title": "Add data extra",
                    "type": "INTERNAL",
                    "parameters": {
                        "QUERY": {
                            "cid": "mvangt-mva/mva/myvfwb/managedataaddons/an/ntst"
                        }
                    },
                    "requiredAuth": false,
                    "skipStartup": false,
                    "minIdTokenRequired": "LOA3"
                }, {
                    "id": 26,
                    "name": "MANAGE_DATA_CAP",
                    "target": "https://www.vodafone.co.uk/webcenter/portal/myvodafone/app/appdomesticdataaddons",
                    "ssoEnabled": true,
                    "loginRequired": true,
                    "verificationRequired": false,
                    "connectionRequired": true,
                    "modifiedDatetime": 1665664416000,
                    "title": "Manage Data Cap",
                    "type": "INTERNAL",
                    "parameters": {
                        "QUERY": {
                            "cid": "mvangt-mva/mva/myvfwb/domesticdataaddons/an/ntst"
                        }
                    },
                    "requiredAuth": false,
                    "skipStartup": false,
                    "minIdTokenRequired": "LOA3"
                }, {
                    "id": 28,
                    "name": "MANAGE_PASSES",
                    "target": "https://www.vodafone.co.uk/webcenter/portal/myvodafone/app/appvodafonepasses",
                    "ssoEnabled": true,
                    "loginRequired": true,
                    "verificationRequired": false,
                    "connectionRequired": true,
                    "modifiedDatetime": 1665664325000,
                    "type": "INTERNAL",
                    "parameters": {},
                    "requiredAuth": false,
                    "skipStartup": false,
                    "minIdTokenRequired": "LOA3"
                }, {
                    "id": 36,
                    "name": "TOP_UP_MIPAY",
                    "target": "https://topup.vodafone.co.uk/topup/UnregisteredTopup/MobileApp",
                    "ssoEnabled": false,
                    "loginRequired": false,
                    "verificationRequired": false,
                    "connectionRequired": true,
                    "modifiedDatetime": 1665664397000,
                    "title": "Top up",
                    "type": "INTERNAL",
                    "parameters": {
                        "QUERY": {
                            "cid": "mvangt-mva/mva/myvfwb/unrtopup"
                        }
                    },
                    "requiredAuth": false,
                    "skipStartup": false
                }, {
                    "id": 37,
                    "name": "ACTIVATE_VOUCHER",
                    "target": "https://www.vodafone.co.uk/webcenter/portal/myvodafone/app/appavoucher",
                    "ssoEnabled": false,
                    "loginRequired": false,
                    "verificationRequired": false,
                    "connectionRequired": true,
                    "modifiedDatetime": 1665664416000,
                    "title": "Activate Voucher",
                    "type": "INTERNAL",
                    "parameters": {
                        "QUERY": {
                            "cid": "mvangt-mva/mva/myvfwb/appavoucher/an/ntst"
                        }
                    },
                    "requiredAuth": false,
                    "skipStartup": false
                }, {
                    "id": 39,
                    "name": "VESTA_AUTO_TOPUP",
                    "target": "https://vestapay-uat1.vodafone.co.uk/VodafoneUKMobileWebUI/UI",
                    "ssoEnabled": false,
                    "loginRequired": false,
                    "verificationRequired": false,
                    "connectionRequired": true,
                    "modifiedDatetime": 1665664325000,
                    "method": "POST",
                    "partner": "VESTA_T",
                    "title": "Auto Top Up",
                    "type": "INTERNAL",
                    "parameters": {
                        "BODY": {
                            "ACTION": "AR",
                            "authToken": "#authtoken"
                        }
                    },
                    "requiredAuth": true,
                    "authParams": {
                        "third_partner_name": "VESTA_T"
                    },
                    "skipStartup": false
                }, {
                    "id": 40,
                    "name": "MANAGE_MY_CARDS",
                    "target": "https://vestapay-uat1.vodafone.co.uk/VodafoneUKMobileWebUI/UI",
                    "ssoEnabled": false,
                    "loginRequired": false,
                    "verificationRequired": false,
                    "connectionRequired": true,
                    "modifiedDatetime": 1665664325000,
                    "method": "POST",
                    "partner": "VESTA_T",
                    "title": "Manage cards",
                    "type": "INTERNAL",
                    "parameters": {
                        "BODY": {
                            "ACTION": "W",
                            "authToken": "#authtoken"
                        }
                    },
                    "requiredAuth": true,
                    "authParams": {
                        "third_partner_name": "VESTA_T"
                    },
                    "skipStartup": false
                }, {
                    "id": 41,
                    "name": "VESTA_PAY_PAL_TOPUP",
                    "target": "https://vestapay-uat1.vodafone.co.uk/VodafoneUKMobileWebUI/UI",
                    "ssoEnabled": false,
                    "loginRequired": false,
                    "verificationRequired": false,
                    "connectionRequired": true,
                    "modifiedDatetime": 1665664325000,
                    "method": "POST",
                    "partner": "VESTA_AT",
                    "title": "Top up with PayPal",
                    "type": "INTERNAL",
                    "parameters": {
                        "BODY": {
                            "ACTION": "PP",
                            "authToken": "#authtoken"
                        }
                    },
                    "requiredAuth": true,
                    "authParams": {
                        "third_partner_name": "VESTA_AT"
                    },
                    "skipStartup": false
                }, {
                    "id": 42,
                    "name": "VESTA_LOGGEDIN_TOPUP",
                    "target": "https://vestapay-uat1.vodafone.co.uk/VodafoneUKMobileWebUI/UI",
                    "ssoEnabled": false,
                    "loginRequired": false,
                    "verificationRequired": false,
                    "connectionRequired": true,
                    "modifiedDatetime": 1665664325000,
                    "method": "POST",
                    "partner": "VESTA_T",
                    "title": "Top up my number",
                    "type": "INTERNAL",
                    "parameters": {
                        "BODY": {
                            "ACTION": "T",
                            "authToken": "#authtoken"
                        }
                    },
                    "requiredAuth": true,
                    "authParams": {
                        "third_partner_name": "VESTA_T"
                    },
                    "skipStartup": false
                }, {
                    "id": 43,
                    "name": "COVERAGE_CHECKER",
                    "target": "https://maps.vodafone.co.uk/coveragecheckers/web/default.aspx?configuration=vod",
                    "ssoEnabled": false,
                    "loginRequired": false,
                    "verificationRequired": false,
                    "connectionRequired": true,
                    "modifiedDatetime": 1665664397000,
                    "title": "Network Status Checker",
                    "type": "INTERNAL",
                    "parameters": {
                        "QUERY": {
                            "cid": "mvangt-mva/mva/myvfwb/coveragechecker/an/ntst"
                        }
                    },
                    "requiredAuth": false,
                    "skipStartup": true
                }, {
                    "id": 44,
                    "name": "STORE_LOCATOR",
                    "target": "https://www.vodafone.co.uk/find-a-store/",
                    "ssoEnabled": false,
                    "loginRequired": false,
                    "verificationRequired": false,
                    "connectionRequired": true,
                    "modifiedDatetime": 1665664325000,
                    "title": "Store locator",
                    "type": "INTERNAL",
                    "parameters": {},
                    "requiredAuth": false,
                    "skipStartup": false
                }, {
                    "id": 45,
                    "name": "VODAFONE_BLOG",
                    "target": "https://blog.vodafone.co.uk/?webview=true",
                    "ssoEnabled": false,
                    "loginRequired": false,
                    "verificationRequired": false,
                    "connectionRequired": true,
                    "modifiedDatetime": 1665664358000,
                    "title": "Vodafone Blog",
                    "type": "INTERNAL",
                    "parameters": {},
                    "requiredAuth": false,
                    "skipStartup": false
                }, {
                    "id": 46,
                    "name": "BUY_BACK",
                    "target": "http://www.vodafone.co.uk/explore/benefits/app/vodafone-trade-in/index.htm",
                    "ssoEnabled": false,
                    "loginRequired": false,
                    "verificationRequired": false,
                    "connectionRequired": true,
                    "modifiedDatetime": 1665664328000,
                    "title": "Trade in",
                    "type": "INTERNAL",
                    "parameters": {},
                    "requiredAuth": false,
                    "skipStartup": false
                }, {
                    "id": 47,
                    "name": "CHANGE_YOUR_PACKAGE",
                    "target": "https://www.vodafone.co.uk/webcenter/portal/myvodafone/app/appchangeyourplan",
                    "ssoEnabled": true,
                    "loginRequired": true,
                    "verificationRequired": false,
                    "connectionRequired": true,
                    "modifiedDatetime": 1665664415000,
                    "title": "Change your bundle",
                    "type": "INTERNAL",
                    "parameters": {
                        "QUERY": {
                            "cid": "mvangt-mva/mva/myvfwb/changeyourplan/an/ntst"
                        }
                    },
                    "requiredAuth": false,
                    "skipStartup": false,
                    "minIdTokenRequired": "LOA3"
                }, {
                    "id": 53,
                    "name": "FIND_OUT_MORE_ECARE",
                    "target": "http://www.vodafone.co.uk/explore/costs/travelling-abroad/",
                    "ssoEnabled": false,
                    "loginRequired": false,
                    "verificationRequired": false,
                    "connectionRequired": true,
                    "modifiedDatetime": 1665664336000,
                    "title": "Vodafone Global Roaming",
                    "type": "INTERNAL",
                    "parameters": {},
                    "requiredAuth": false,
                    "skipStartup": false
                }, {
                    "id": 55,
                    "name": "EUROPE_ZONE_FIND_OUT_MORE",
                    "target": "https://www.vodafone.co.uk/shop/bundles-and-sims/pay-as-you-go-plans/",
                    "ssoEnabled": false,
                    "loginRequired": false,
                    "verificationRequired": false,
                    "connectionRequired": true,
                    "modifiedDatetime": 1665664336000,
                    "title": "Find out more",
                    "type": "INTERNAL",
                    "parameters": {},
                    "requiredAuth": false,
                    "skipStartup": false
                }, {
                    "id": 57,
                    "name": "MANAGE_DATA_ADD_ONS_ADD_DATA_EXTRA",
                    "target": "https://www.vodafone.co.uk/webcenter/portal/myvodafone/app/appmanagedataaddons",
                    "ssoEnabled": true,
                    "loginRequired": true,
                    "verificationRequired": false,
                    "connectionRequired": true,
                    "modifiedDatetime": 1665664416000,
                    "title": "Add data extra",
                    "type": "INTERNAL",
                    "parameters": {
                        "QUERY": {
                            "cid": "mvangt-mva/mva/myvfwb/managedataaddonsextra/an/ntst"
                        }
                    },
                    "requiredAuth": false,
                    "skipStartup": false,
                    "minIdTokenRequired": "LOA3"
                }, {
                    "id": 72,
                    "name": "ECARE_LOGIN",
                    "target": "https://www.vodafone.co.uk/webcenter/portal/myvodafone/accountsummary",
                    "ssoEnabled": true,
                    "loginRequired": true,
                    "verificationRequired": false,
                    "connectionRequired": true,
                    "modifiedDatetime": 1665664339000,
                    "type": "INTERNAL",
                    "parameters": {},
                    "requiredAuth": false,
                    "skipStartup": false,
                    "minIdTokenRequired": "LOA3"
                }, {
                    "id": 89,
                    "name": "TRAVELLING_ABROAD",
                    "target": "http://www.vodafone.co.uk/explore/costs/travelling-abroad/app/index.htm",
                    "ssoEnabled": false,
                    "loginRequired": false,
                    "verificationRequired": false,
                    "connectionRequired": false,
                    "modifiedDatetime": 1665664344000,
                    "title": "Travelling Abroad",
                    "type": "INTERNAL",
                    "parameters": {},
                    "requiredAuth": false,
                    "skipStartup": false
                }, {
                    "id": 101,
                    "name": "SPEND_MANAGER",
                    "target": "https://www.vodafone.co.uk/webcenter/portal/myvodafone/app/appspendmanager",
                    "ssoEnabled": true,
                    "loginRequired": true,
                    "verificationRequired": false,
                    "connectionRequired": true,
                    "modifiedDatetime": 1665664415000,
                    "title": "Spend Manager",
                    "type": "INTERNAL",
                    "parameters": {
                        "QUERY": {
                            "cid": "mvangt-mva/mva/myvfwb/spendmanager/an/ntst"
                        }
                    },
                    "requiredAuth": false,
                    "skipStartup": false,
                    "minIdTokenRequired": "LOA3"
                }, {
                    "id": 108,
                    "name": "TELL_US_WHAT_YOU_THINK",
                    "target": "https://vodafone.eu.qualtrics.com/SE/?SID=SV_bJzofXKLDwnru8R",
                    "ssoEnabled": false,
                    "loginRequired": false,
                    "verificationRequired": false,
                    "connectionRequired": false,
                    "modifiedDatetime": 1665664347000,
                    "title": "Tell us what you think",
                    "type": "INTERNAL",
                    "parameters": {},
                    "requiredAuth": false,
                    "skipStartup": false
                }, {
                    "id": 110,
                    "name": "PREPAY_TOPUP",
                    "target": "https://topup.vodafone.co.uk/topup/UnregisteredTopup/MobileApp",
                    "ssoEnabled": false,
                    "loginRequired": false,
                    "verificationRequired": false,
                    "connectionRequired": false,
                    "modifiedDatetime": 1665664397000,
                    "type": "INTERNAL",
                    "parameters": {
                        "QUERY": {
                            "cid": "mvangt-mva/mva/myvfwb/unrtopup"
                        }
                    },
                    "requiredAuth": false,
                    "skipStartup": false
                }, {
                    "id": 111,
                    "name": "TLC_THANKS",
                    "target": "https://thanks.vodafone.co.uk/users/register",
                    "ssoEnabled": false,
                    "loginRequired": false,
                    "verificationRequired": false,
                    "connectionRequired": false,
                    "modifiedDatetime": 1665664347000,
                    "title": "Something for you",
                    "type": "INTERNAL",
                    "parameters": {},
                    "requiredAuth": false,
                    "skipStartup": false
                }, {
                    "id": 118,
                    "name": "AOC",
                    "target": "https://www.vodafone.co.uk/webcenter/portal/myvodafone/app/appaccountcontrol",
                    "ssoEnabled": true,
                    "loginRequired": true,
                    "verificationRequired": false,
                    "connectionRequired": false,
                    "modifiedDatetime": 1665664347000,
                    "title": "My Account Controls",
                    "type": "INTERNAL",
                    "parameters": {},
                    "requiredAuth": false,
                    "skipStartup": false,
                    "minIdTokenRequired": "LOA3"
                }, {
                    "id": 119,
                    "name": "ROLL_OVER_FIND_OUT_MORE",
                    "target": "http://www.vodafone.co.uk/shop/bundles-and-sims/pay-as-you-go-plans/",
                    "ssoEnabled": false,
                    "loginRequired": false,
                    "verificationRequired": false,
                    "connectionRequired": false,
                    "modifiedDatetime": 1665664347000,
                    "title": "Total Rollover",
                    "type": "INTERNAL",
                    "parameters": {},
                    "requiredAuth": false,
                    "skipStartup": false
                }, {
                    "id": 122,
                    "name": "ILNG_ELIGIBILITY",
                    "target": "http://www.vodafone.co.uk/vodafone-uk/app/network-satisfaction/index.htm",
                    "ssoEnabled": false,
                    "loginRequired": false,
                    "verificationRequired": false,
                    "connectionRequired": true,
                    "modifiedDatetime": 1665664352000,
                    "title": "Eligibility Criteria",
                    "type": "INTERNAL",
                    "parameters": {},
                    "requiredAuth": false,
                    "skipStartup": false
                }, {
                    "id": 129,
                    "name": "ILNG_NON_ELIGABLE",
                    "target": "http://www.vodafone.co.uk/vodafone-uk/app/network-satisfaction/index.htm",
                    "ssoEnabled": false,
                    "loginRequired": false,
                    "verificationRequired": false,
                    "connectionRequired": true,
                    "modifiedDatetime": 1665664352000,
                    "title": "Eligibility Criteria",
                    "type": "INTERNAL",
                    "parameters": {},
                    "requiredAuth": false,
                    "skipStartup": false
                }, {
                    "id": 131,
                    "name": "TARIFF_MIGRATION",
                    "target": "https://www.vodafone.co.uk/webcenter/portal/myvodafone/app/appchangeyourplan",
                    "ssoEnabled": true,
                    "loginRequired": true,
                    "verificationRequired": false,
                    "connectionRequired": true,
                    "modifiedDatetime": 1665664397000,
                    "title": "Change your plan",
                    "type": "INTERNAL",
                    "parameters": {},
                    "requiredAuth": false,
                    "skipStartup": true,
                    "minIdTokenRequired": "LOA3"
                }, {
                    "id": 133,
                    "name": "PRIVACY_PERMISSIONS",
                    "target": "https://www.vodafone.co.uk/webcenter/portal/myvodafone/app/appprivacysettings",
                    "ssoEnabled": true,
                    "loginRequired": true,
                    "verificationRequired": false,
                    "connectionRequired": true,
                    "modifiedDatetime": 1665664416000,
                    "title": "Marketing preferences",
                    "type": "INTERNAL",
                    "parameters": {
                        "QUERY": {
                            "cid": "mvangt-mva/mva/myvfwb/privacysettings/an/ntst"
                        }
                    },
                    "requiredAuth": false,
                    "skipStartup": false,
                    "minIdTokenRequired": "LOA3"
                }, {
                    "id": 137,
                    "name": "ACCOUNT_CONTROL",
                    "target": "https://www.vodafone.co.uk/webcenter/portal/myvodafone/app/appaccountcontrol",
                    "ssoEnabled": true,
                    "loginRequired": true,
                    "verificationRequired": false,
                    "connectionRequired": true,
                    "modifiedDatetime": 1665664415000,
                    "title": "My Account Controls",
                    "type": "INTERNAL",
                    "parameters": {
                        "QUERY": {
                            "cid": "mvangt-mva/mva/myvfwb/accountcontrol/an/ntst"
                        }
                    },
                    "requiredAuth": false,
                    "skipStartup": false,
                    "minIdTokenRequired": "LOA3"
                }, {
                    "id": 154,
                    "name": "BIG_VALUE_BUNDLE",
                    "target": "https://www.vodafone.co.uk/webcenter/portal/myvodafone/app/appaddbvb",
                    "ssoEnabled": false,
                    "loginRequired": false,
                    "verificationRequired": false,
                    "connectionRequired": true,
                    "modifiedDatetime": 1665664415000,
                    "title": "Big Value Bundle",
                    "type": "INTERNAL",
                    "parameters": {
                        "QUERY": {
                            "cid": "mvangt-mva/mva/myvfwb/addbvb/an/ntst"
                        }
                    },
                    "requiredAuth": false,
                    "skipStartup": false
                }, {
                    "id": 166,
                    "name": "COVERAGE_CHECKER_NEW",
                    "target": "https://maps.vodafone.co.uk/coveragecheckers/web/default.aspx?configuration=vod",
                    "ssoEnabled": false,
                    "loginRequired": false,
                    "verificationRequired": false,
                    "connectionRequired": true,
                    "modifiedDatetime": 1665664397000,
                    "title": "Network Status Checker",
                    "type": "INTERNAL",
                    "parameters": {
                        "QUERY": {
                            "cid": "mvangt-mva/mva/myvfwb/coveragechecker/an/ntst"
                        }
                    },
                    "requiredAuth": false,
                    "skipStartup": true
                }, {
                    "id": 190,
                    "name": "SIMPLY_PLAN_CALL_CHARGES",
                    "target": "https://www.vodafone.co.uk/explore/costs/call-charges",
                    "ssoEnabled": false,
                    "loginRequired": false,
                    "verificationRequired": false,
                    "connectionRequired": true,
                    "modifiedDatetime": 1665664383000,
                    "type": "INTERNAL",
                    "parameters": {},
                    "requiredAuth": false,
                    "skipStartup": false
                }, {
                    "id": 195,
                    "name": "DISCOVER_NBA_SIMO",
                    "target": "https://www.vodafone.co.uk/webcenter/portal/myvodafone/app/appofferintegration?selected=SIMO",
                    "ssoEnabled": true,
                    "loginRequired": true,
                    "verificationRequired": false,
                    "connectionRequired": true,
                    "modifiedDatetime": 1665664416000,
                    "type": "INTERNAL",
                    "parameters": {
                        "QUERY": {
                            "cid": "mvangt-mva/mva/myvfwb/nbasimo/an/ntst"
                        }
                    },
                    "requiredAuth": false,
                    "skipStartup": false,
                    "minIdTokenRequired": "LOA3"
                }, {
                    "id": 196,
                    "name": "DISCOVER_NBA_HANDSET",
                    "target": "https://www.vodafone.co.uk/webcenter/portal/myvodafone/app/appofferintegration?selected=HANDSET",
                    "ssoEnabled": true,
                    "loginRequired": true,
                    "verificationRequired": false,
                    "connectionRequired": true,
                    "modifiedDatetime": 1665664416000,
                    "type": "INTERNAL",
                    "parameters": {
                        "QUERY": {
                            "cid": "mvangt-mva/mva/myvfwb/nbahandset/an/ntst"
                        }
                    },
                    "requiredAuth": false,
                    "skipStartup": false,
                    "minIdTokenRequired": "LOA3"
                }, {
                    "id": 197,
                    "name": "DISCOVER_NBA_DATADEVICE",
                    "target": "https://www.vodafone.co.uk/webcenter/portal/myvodafone/app/appofferintegration?selected=DATADEVICE",
                    "ssoEnabled": true,
                    "loginRequired": true,
                    "verificationRequired": false,
                    "connectionRequired": true,
                    "modifiedDatetime": 1665664416000,
                    "type": "INTERNAL",
                    "parameters": {
                        "QUERY": {
                            "cid": "mvangt-mva/mva/myvfwb/nbadatadevice/an/ntst"
                        }
                    },
                    "requiredAuth": false,
                    "skipStartup": false,
                    "minIdTokenRequired": "LOA3"
                }, {
                    "id": 198,
                    "name": "DISCOVER_NBA_FLBB",
                    "target": "https://www.vodafone.co.uk/webcenter/portal/myvodafone/app/appofferintegration?selected=FLBB",
                    "ssoEnabled": true,
                    "loginRequired": true,
                    "verificationRequired": false,
                    "connectionRequired": true,
                    "modifiedDatetime": 1665664416000,
                    "type": "INTERNAL",
                    "parameters": {
                        "QUERY": {
                            "cid": "mvangt-mva/mva/myvfwb/nbaflbb/an/ntst"
                        }
                    },
                    "requiredAuth": false,
                    "skipStartup": false,
                    "minIdTokenRequired": "LOA3"
                }, {
                    "id": 199,
                    "name": "MANAGE_CALLS_MINS",
                    "target": "https://m.vodafone.co.uk/vmobile/faces/app/managecallsmins.jspx",
                    "ssoEnabled": true,
                    "loginRequired": true,
                    "verificationRequired": false,
                    "connectionRequired": true,
                    "modifiedDatetime": 1665664401000,
                    "title": "Add Extras",
                    "type": "INTERNAL",
                    "parameters": {},
                    "requiredAuth": false,
                    "skipStartup": false,
                    "minIdTokenRequired": "LOA3"
                }, {
                    "id": 211,
                    "name": "DIRECT_DEBIT",
                    "target": "https://www.vodafone.co.uk/webcenter/portal/myvodafone/app/apppaymentmethods",
                    "ssoEnabled": true,
                    "loginRequired": true,
                    "verificationRequired": false,
                    "connectionRequired": true,
                    "modifiedDatetime": 1665664415000,
                    "title": "Direct debit",
                    "type": "INTERNAL",
                    "parameters": {
                        "QUERY": {
                            "cid": "mvangt-mva/mva/myvfwb/paymentmethods/an/ntst"
                        }
                    },
                    "requiredAuth": false,
                    "skipStartup": false,
                    "minIdTokenRequired": "LOA3"
                }, {
                    "id": 228,
                    "name": "ORDER_TRACKER",
                    "target": "https://www.vodafone.co.uk/webcenter/portal/myvodafone/app/appordertracker",
                    "ssoEnabled": false,
                    "loginRequired": false,
                    "verificationRequired": false,
                    "connectionRequired": true,
                    "modifiedDatetime": 1665664416000,
                    "type": "INTERNAL",
                    "parameters": {},
                    "requiredAuth": false,
                    "skipStartup": false
                }, {
                    "id": 231,
                    "name": "TRADE_IN_VISIT_SHOP_IOS",
                    "target": "https://www.vodafone.co.uk/mobile/phones/pay-monthly-contracts/apple",
                    "ssoEnabled": false,
                    "loginRequired": false,
                    "verificationRequired": false,
                    "connectionRequired": true,
                    "modifiedDatetime": 1665664445000,
                    "type": "INTERNAL",
                    "parameters": {
                        "QUERY": {
                            "QuoteID": "#code"
                        }
                    },
                    "requiredAuth": false,
                    "skipStartup": false
                }, {
                    "id": 232,
                    "name": "MANAGE_ACCOUNT",
                    "target": "https://www.vodafone.co.uk/webcenter/portal/myvodafone/app/appmanageaccount",
                    "ssoEnabled": true,
                    "loginRequired": true,
                    "verificationRequired": false,
                    "connectionRequired": true,
                    "modifiedDatetime": 1665664417000,
                    "title": "Manage account",
                    "type": "INTERNAL",
                    "parameters": {},
                    "requiredAuth": false,
                    "skipStartup": false,
                    "minIdTokenRequired": "LOA3"
                }, {
                    "id": 233,
                    "name": "ADDRESS_DETAILS",
                    "target": "https://www.vodafone.co.uk/webcenter/portal/myvodafone/app/appaddressdetails",
                    "ssoEnabled": true,
                    "loginRequired": true,
                    "verificationRequired": false,
                    "connectionRequired": true,
                    "modifiedDatetime": 1665664417000,
                    "title": "Address details",
                    "type": "INTERNAL",
                    "parameters": {},
                    "requiredAuth": false,
                    "skipStartup": false,
                    "minIdTokenRequired": "LOA3"
                }, {
                    "id": 234,
                    "name": "SIM_SWAP",
                    "target": "https://www.vodafone.co.uk/webcenter/portal/myvodafone/app/appsimswap",
                    "ssoEnabled": true,
                    "loginRequired": true,
                    "verificationRequired": false,
                    "connectionRequired": true,
                    "modifiedDatetime": 1665664417000,
                    "title": "SIM swap",
                    "type": "INTERNAL",
                    "parameters": {},
                    "requiredAuth": false,
                    "skipStartup": false,
                    "minIdTokenRequired": "LOA3"
                }, {
                    "id": 236,
                    "name": "ECARE_LOAN_PAYMENT",
                    "target": "https://www.vodafone.co.uk/webcenter/portal/myvodafone/app/appfinalsettlement",
                    "ssoEnabled": true,
                    "loginRequired": true,
                    "verificationRequired": false,
                    "connectionRequired": true,
                    "modifiedDatetime": 1665664423000,
                    "type": "INTERNAL",
                    "parameters": {},
                    "requiredAuth": false,
                    "skipStartup": false,
                    "minIdTokenRequired": "LOA3"
                }, {
                    "id": 237,
                    "name": "ECARE_LOAN_PAYMENT_HISTORY",
                    "target": "https://www.vodafone.co.uk/webcenter/portal/myvodafone/app/apppaymenthistory",
                    "ssoEnabled": true,
                    "loginRequired": true,
                    "verificationRequired": false,
                    "connectionRequired": true,
                    "modifiedDatetime": 1665664418000,
                    "type": "INTERNAL",
                    "parameters": {},
                    "requiredAuth": false,
                    "skipStartup": false,
                    "minIdTokenRequired": "LOA3"
                }, {
                    "id": 238,
                    "name": "ECARE_LOAN_DETAILS",
                    "target": "https://www.vodafone.co.uk/webcenter/portal/myvodafone/app/appdigitaldocs",
                    "ssoEnabled": true,
                    "loginRequired": true,
                    "verificationRequired": false,
                    "connectionRequired": true,
                    "modifiedDatetime": 1665664418000,
                    "type": "INTERNAL",
                    "parameters": {},
                    "requiredAuth": false,
                    "skipStartup": false,
                    "minIdTokenRequired": "LOA3"
                }, {
                    "id": 239,
                    "name": "ECARE_LOAN_LIST",
                    "target": "https://www.vodafone.co.uk/webcenter/portal/myvodafone/app/appdeviceplan",
                    "ssoEnabled": true,
                    "loginRequired": true,
                    "verificationRequired": false,
                    "connectionRequired": true,
                    "modifiedDatetime": 1665664418000,
                    "type": "INTERNAL",
                    "parameters": {},
                    "requiredAuth": false,
                    "skipStartup": false,
                    "minIdTokenRequired": "LOA3"
                }, {
                    "id": 245,
                    "name": "MANAGE_BARS",
                    "target": "https://www.vodafone.co.uk/webcenter/portal/myvodafone/app/appmanagebars",
                    "ssoEnabled": true,
                    "loginRequired": true,
                    "verificationRequired": false,
                    "connectionRequired": true,
                    "modifiedDatetime": 1665664423000,
                    "title": "Manage Bars and Caps",
                    "type": "INTERNAL",
                    "parameters": {},
                    "requiredAuth": false,
                    "skipStartup": false,
                    "minIdTokenRequired": "LOA3"
                }, {
                    "id": 246,
                    "name": "TRADE_IN_VISIT_SHOP_ANDROID",
                    "target": "https://www.vodafone.co.uk/mobile/phones/pay-monthly-contracts/samsung",
                    "ssoEnabled": false,
                    "loginRequired": false,
                    "verificationRequired": false,
                    "connectionRequired": true,
                    "modifiedDatetime": 1665664445000,
                    "type": "INTERNAL",
                    "parameters": {
                        "QUERY": {
                            "QuoteID": "#code"
                        }
                    },
                    "requiredAuth": false,
                    "skipStartup": false
                }, {
                    "id": 267,
                    "name": "BROADBAND_SERVICE_TEST",
                    "target": "https://myaccount.vodafone.co.uk/bbcheck/summary?cid=mvapn-hbb/hbb/hbbsupport/sup/7.21/ntst",
                    "ssoEnabled": false,
                    "loginRequired": false,
                    "verificationRequired": false,
                    "connectionRequired": true,
                    "modifiedDatetime": 1665664435000,
                    "title": "Broadband Service Test",
                    "type": "INTERNAL",
                    "parameters": {},
                    "requiredAuth": false,
                    "skipStartup": false
                }, {
                    "id": 279,
                    "name": "TRADE_IN_VISIT_SHOP_SSO",
                    "target": "https://www.vodafone.co.uk/web-shop/login?successReturnUrl=/mobile/phones/pay-monthly-contracts&errorReturnUrl=/mobile/phones/pay-monthly-contracts",
                    "ssoEnabled": true,
                    "loginRequired": true,
                    "verificationRequired": false,
                    "connectionRequired": true,
                    "modifiedDatetime": 1665664452000,
                    "type": "INTERNAL",
                    "parameters": {
                        "QUERY": {
                            "QuoteID": "#code"
                        }
                    },
                    "requiredAuth": false,
                    "skipStartup": false,
                    "minIdTokenRequired": "LOA3"
                }, {
                    "id": 291,
                    "name": "PREVIOUS_EBILL_REINVENT",
                    "target": "https://[REINVENT]myaccount.vodafone.co.uk/billing/summary/latest/overview?cid=mvangt-mva/mva/myvfwb/latestbill/an/ntst",
                    "ssoEnabled": true,
                    "loginRequired": true,
                    "verificationRequired": false,
                    "connectionRequired": true,
                    "modifiedDatetime": 1665664448000,
                    "type": "INTERNAL",
                    "parameters": {},
                    "requiredAuth": false,
                    "skipStartup": false,
                    "minIdTokenRequired": "LOA3"
                }, {
                    "id": 292,
                    "name": "VIEW_ITEMISED_BILL_REINVENT",
                    "target": "https://[REINVENT]myaccount.vodafone.co.uk/billing/summary/future/overview?cid=mvangt-mva/mva/myvfwb/nextbill/an/ntst",
                    "ssoEnabled": true,
                    "loginRequired": true,
                    "verificationRequired": false,
                    "connectionRequired": true,
                    "modifiedDatetime": 1665664448000,
                    "title": "Estimated charges",
                    "type": "INTERNAL",
                    "parameters": {},
                    "requiredAuth": false,
                    "skipStartup": false,
                    "minIdTokenRequired": "LOA3"
                }, {
                    "id": 293,
                    "name": "DIRECT_DEBIT_REINVENT",
                    "target": "https://[REINVENT]myaccount.vodafone.co.uk/billing/manage-payments/payment-update/direct-debit",
                    "ssoEnabled": true,
                    "loginRequired": true,
                    "verificationRequired": false,
                    "connectionRequired": true,
                    "modifiedDatetime": 1665664448000,
                    "title": "Direct debit",
                    "type": "INTERNAL",
                    "parameters": {},
                    "requiredAuth": false,
                    "skipStartup": false,
                    "minIdTokenRequired": "LOA3"
                }, {
                    "id": 294,
                    "name": "VIEW_JAN_BILL",
                    "target": "https://[REINVENT]myaccount.vodafone.co.uk/billing/summary/jan/overview",
                    "ssoEnabled": true,
                    "loginRequired": true,
                    "verificationRequired": false,
                    "connectionRequired": true,
                    "modifiedDatetime": 1665664448000,
                    "type": "INTERNAL",
                    "parameters": {},
                    "requiredAuth": false,
                    "skipStartup": false,
                    "minIdTokenRequired": "LOA3"
                }, {
                    "id": 295,
                    "name": "VIEW_FEB_BILL",
                    "target": "https://[REINVENT]myaccount.vodafone.co.uk/billing/summary/feb/overview",
                    "ssoEnabled": true,
                    "loginRequired": true,
                    "verificationRequired": false,
                    "connectionRequired": true,
                    "modifiedDatetime": 1665664448000,
                    "type": "INTERNAL",
                    "parameters": {},
                    "requiredAuth": false,
                    "skipStartup": false,
                    "minIdTokenRequired": "LOA3"
                }, {
                    "id": 296,
                    "name": "VIEW_MAR_BILL",
                    "target": "https://[REINVENT]myaccount.vodafone.co.uk/billing/summary/mar/overview",
                    "ssoEnabled": true,
                    "loginRequired": true,
                    "verificationRequired": false,
                    "connectionRequired": true,
                    "modifiedDatetime": 1665664448000,
                    "type": "INTERNAL",
                    "parameters": {},
                    "requiredAuth": false,
                    "skipStartup": false,
                    "minIdTokenRequired": "LOA3"
                }, {
                    "id": 297,
                    "name": "VIEW_APR_BILL",
                    "target": "https://[REINVENT]myaccount.vodafone.co.uk/billing/summary/apr/overview",
                    "ssoEnabled": true,
                    "loginRequired": true,
                    "verificationRequired": false,
                    "connectionRequired": true,
                    "modifiedDatetime": 1665664448000,
                    "type": "INTERNAL",
                    "parameters": {},
                    "requiredAuth": false,
                    "skipStartup": false,
                    "minIdTokenRequired": "LOA3"
                }, {
                    "id": 298,
                    "name": "VIEW_MAY_BILL",
                    "target": "https://[REINVENT]myaccount.vodafone.co.uk/billing/summary/may/overview",
                    "ssoEnabled": true,
                    "loginRequired": true,
                    "verificationRequired": false,
                    "connectionRequired": true,
                    "modifiedDatetime": 1665664448000,
                    "type": "INTERNAL",
                    "parameters": {},
                    "requiredAuth": false,
                    "skipStartup": false,
                    "minIdTokenRequired": "LOA3"
                }, {
                    "id": 299,
                    "name": "VIEW_JUN_BILL",
                    "target": "https://[REINVENT]myaccount.vodafone.co.uk/billing/summary/jun/overview",
                    "ssoEnabled": true,
                    "loginRequired": true,
                    "verificationRequired": false,
                    "connectionRequired": true,
                    "modifiedDatetime": 1665664448000,
                    "type": "INTERNAL",
                    "parameters": {},
                    "requiredAuth": false,
                    "skipStartup": false,
                    "minIdTokenRequired": "LOA3"
                }, {
                    "id": 300,
                    "name": "VIEW_JUL_BILL",
                    "target": "https://[REINVENT]myaccount.vodafone.co.uk/billing/summary/jul/overview",
                    "ssoEnabled": true,
                    "loginRequired": true,
                    "verificationRequired": false,
                    "connectionRequired": true,
                    "modifiedDatetime": 1665664449000,
                    "type": "INTERNAL",
                    "parameters": {},
                    "requiredAuth": false,
                    "skipStartup": false,
                    "minIdTokenRequired": "LOA3"
                }, {
                    "id": 301,
                    "name": "VIEW_AUG_BILL",
                    "target": "https://[REINVENT]myaccount.vodafone.co.uk/billing/summary/aug/overview",
                    "ssoEnabled": true,
                    "loginRequired": true,
                    "verificationRequired": false,
                    "connectionRequired": true,
                    "modifiedDatetime": 1665664449000,
                    "type": "INTERNAL",
                    "parameters": {},
                    "requiredAuth": false,
                    "skipStartup": false,
                    "minIdTokenRequired": "LOA3"
                }, {
                    "id": 302,
                    "name": "VIEW_SEP_BILL",
                    "target": "https://[REINVENT]myaccount.vodafone.co.uk/billing/summary/sep/overview",
                    "ssoEnabled": true,
                    "loginRequired": true,
                    "verificationRequired": false,
                    "connectionRequired": true,
                    "modifiedDatetime": 1665664449000,
                    "type": "INTERNAL",
                    "parameters": {},
                    "requiredAuth": false,
                    "skipStartup": false,
                    "minIdTokenRequired": "LOA3"
                }, {
                    "id": 303,
                    "name": "VIEW_OCT_BILL",
                    "target": "https://[REINVENT]myaccount.vodafone.co.uk/billing/summary/oct/overview",
                    "ssoEnabled": true,
                    "loginRequired": true,
                    "verificationRequired": false,
                    "connectionRequired": true,
                    "modifiedDatetime": 1665664449000,
                    "type": "INTERNAL",
                    "parameters": {},
                    "requiredAuth": false,
                    "skipStartup": false,
                    "minIdTokenRequired": "LOA3"
                }, {
                    "id": 304,
                    "name": "VIEW_NOV_BILL",
                    "target": "https://[REINVENT]myaccount.vodafone.co.uk/billing/summary/nov/overview",
                    "ssoEnabled": true,
                    "loginRequired": true,
                    "verificationRequired": false,
                    "connectionRequired": true,
                    "modifiedDatetime": 1665664449000,
                    "type": "INTERNAL",
                    "parameters": {},
                    "requiredAuth": false,
                    "skipStartup": false,
                    "minIdTokenRequired": "LOA3"
                }, {
                    "id": 305,
                    "name": "VIEW_DEC_BILL",
                    "target": "https://[REINVENT]myaccount.vodafone.co.uk/billing/summary/dec/overview",
                    "ssoEnabled": true,
                    "loginRequired": true,
                    "verificationRequired": false,
                    "connectionRequired": true,
                    "modifiedDatetime": 1665664449000,
                    "type": "INTERNAL",
                    "parameters": {},
                    "requiredAuth": false,
                    "skipStartup": false,
                    "minIdTokenRequired": "LOA3"
                }, {
                    "id": 307,
                    "name": "WEBVIEW_AND_SSO",
                    "target": "#fromURL",
                    "ssoEnabled": true,
                    "loginRequired": true,
                    "verificationRequired": false,
                    "connectionRequired": true,
                    "modifiedDatetime": 1665664452000,
                    "type": "INTERNAL",
                    "parameters": {},
                    "requiredAuth": false,
                    "skipStartup": false,
                    "minIdTokenRequired": "LOA3"
                }, {
                    "id": 308,
                    "name": "TRADE_IN_VISIT_SHOP_NON_SSO",
                    "target": "https://www.vodafone.co.uk/mobile/phones/pay-monthly-contracts/",
                    "ssoEnabled": false,
                    "loginRequired": false,
                    "verificationRequired": false,
                    "connectionRequired": true,
                    "modifiedDatetime": 1665664452000,
                    "type": "INTERNAL",
                    "parameters": {
                        "QUERY": {
                            "QuoteID": "#code"
                        }
                    },
                    "requiredAuth": false,
                    "skipStartup": false
                }, {
                    "id": 309,
                    "name": "UPGRADE_NOW",
                    "target": "https://www.vodafone.co.uk/upgrade-and-offers",
                    "ssoEnabled": true,
                    "loginRequired": true,
                    "verificationRequired": false,
                    "connectionRequired": true,
                    "modifiedDatetime": 1665664452000,
                    "type": "INTERNAL",
                    "parameters": {},
                    "requiredAuth": false,
                    "skipStartup": false,
                    "minIdTokenRequired": "LOA3"
                }, {
                    "id": 312,
                    "name": "TRADE_IN_VISIT_SHOP_CTA",
                    "target": "https://www.vodafone.co.uk/mobile/trade-in-support",
                    "ssoEnabled": false,
                    "loginRequired": false,
                    "verificationRequired": false,
                    "connectionRequired": true,
                    "modifiedDatetime": 1665664456000,
                    "type": "INTERNAL",
                    "parameters": {},
                    "requiredAuth": false,
                    "skipStartup": false
                }, {
                    "id": 313,
                    "name": "MANAGE_PAYMENTS",
                    "target": "https://[REINVENT]myaccount.vodafone.co.uk/billing/manage-payments",
                    "ssoEnabled": true,
                    "loginRequired": true,
                    "verificationRequired": false,
                    "connectionRequired": true,
                    "modifiedDatetime": 1665665986000,
                    "type": "INTERNAL",
                    "parameters": {},
                    "requiredAuth": false,
                    "skipStartup": false,
                    "minIdTokenRequired": "LOA3"
                }, {
                    "id": 315,
                    "name": "LOAD_MORE",
                    "target": "dummy url",
                    "ssoEnabled": true,
                    "loginRequired": true,
                    "verificationRequired": false,
                    "connectionRequired": true,
                    "modifiedDatetime": 1665665986000,
                    "type": "INTERNAL",
                    "parameters": {},
                    "requiredAuth": false,
                    "skipStartup": false,
                    "minIdTokenRequired": "LOA3"
                }, {
                    "id": 316,
                    "name": "BILL_SUMMARY",
                    "target": "dummy url",
                    "ssoEnabled": true,
                    "loginRequired": true,
                    "verificationRequired": false,
                    "connectionRequired": true,
                    "modifiedDatetime": 1665665986000,
                    "type": "INTERNAL",
                    "parameters": {},
                    "requiredAuth": false,
                    "skipStartup": false,
                    "minIdTokenRequired": "LOA3"
                }, {
                    "id": 317,
                    "name": "VIEW_FUTURE_BILL",
                    "target": "https://[REINVENT]myaccount.vodafone.co.uk/billing/summary/future/overview",
                    "ssoEnabled": true,
                    "loginRequired": true,
                    "verificationRequired": false,
                    "connectionRequired": true,
                    "modifiedDatetime": 1665665986000,
                    "type": "INTERNAL",
                    "parameters": {},
                    "requiredAuth": false,
                    "skipStartup": false,
                    "minIdTokenRequired": "LOA3"
                }, {
                    "id": 318,
                    "name": "VIEW_FIRST_BILL",
                    "target": "https://[REINVENT]myaccount.vodafone.co.uk/billing/summary/first/overview",
                    "ssoEnabled": true,
                    "loginRequired": true,
                    "verificationRequired": false,
                    "connectionRequired": true,
                    "modifiedDatetime": 1665665987000,
                    "type": "INTERNAL",
                    "parameters": {},
                    "requiredAuth": false,
                    "skipStartup": false,
                    "minIdTokenRequired": "LOA3"
                }, {
                    "id": 319,
                    "name": "VIEW_LATEST_BILL",
                    "target": "https://[REINVENT]myaccount.vodafone.co.uk/billing/summary/latest/overview",
                    "ssoEnabled": true,
                    "loginRequired": true,
                    "verificationRequired": false,
                    "connectionRequired": true,
                    "modifiedDatetime": 1665665987000,
                    "type": "INTERNAL",
                    "parameters": {},
                    "requiredAuth": false,
                    "skipStartup": false,
                    "minIdTokenRequired": "LOA3"
                }, {
                    "id": 320,
                    "name": "BILLING_PAYMENT",
                    "target": "https://[REINVENT]myaccount.vodafone.co.uk/billing/payment",
                    "ssoEnabled": true,
                    "loginRequired": true,
                    "verificationRequired": false,
                    "connectionRequired": true,
                    "modifiedDatetime": 1665665987000,
                    "type": "INTERNAL",
                    "parameters": {},
                    "requiredAuth": false,
                    "skipStartup": false,
                    "minIdTokenRequired": "LOA3"
                }, {
                    "id": 321,
                    "name": "HBB_CHECK_ELIGIBILITY",
                    "target": "https://broadband-upgrade.vodafone.co.uk/?cid=mva",
                    "ssoEnabled": false,
                    "loginRequired": false,
                    "verificationRequired": false,
                    "connectionRequired": true,
                    "modifiedDatetime": 1665665988000,
                    "title": "Check Upgrade Eligibility",
                    "type": "INTERNAL",
                    "parameters": {},
                    "requiredAuth": false,
                    "skipStartup": false
                }, {
                    "id": 322,
                    "name": "ACCESSIBILITY",
                    "target": "https://[REINVENT]myaccount.vodafone.co.uk/settings/accessibility",
                    "ssoEnabled": true,
                    "loginRequired": true,
                    "verificationRequired": false,
                    "connectionRequired": true,
                    "modifiedDatetime": 1665665988000,
                    "type": "INTERNAL",
                    "parameters": {},
                    "requiredAuth": false,
                    "skipStartup": false,
                    "minIdTokenRequired": "LOA3"
                }, {
                    "id": 325,
                    "name": "CLICK2UPGRADE_SEE_PLAN_DETAILS",
                    "target": "https://www.vodafone.co.uk/mobile/best-sim-only-deals/${plan-id}/plan-details",
                    "ssoEnabled": false,
                    "loginRequired": false,
                    "verificationRequired": false,
                    "connectionRequired": true,
                    "modifiedDatetime": 1665665989000,
                    "type": "INTERNAL",
                    "parameters": {
                        "QUERY": {
                            "journeyType": "upgrade"
                        }
                    },
                    "requiredAuth": false,
                    "skipStartup": false,
                    "minIdTokenRequired": "LOA1"
                }, {
                    "id": 326,
                    "name": "CLICK2UPGRADE_SEE_ALL_PLANS",
                    "target": "https://www.vodafone.co.uk/mobile/best-sim-only-deals",
                    "ssoEnabled": false,
                    "loginRequired": true,
                    "verificationRequired": false,
                    "connectionRequired": true,
                    "modifiedDatetime": 1665665989000,
                    "type": "INTERNAL",
                    "parameters": {},
                    "requiredAuth": false,
                    "skipStartup": false,
                    "minIdTokenRequired": "LOA3"
                }, {
                    "id": 5,
                    "name": "PAYG1_FIND_OUT_MORE",
                    "target": "https://start.vodafone.com/ssp/myvflink/UK",
                    "ssoEnabled": false,
                    "loginRequired": false,
                    "verificationRequired": false,
                    "connectionRequired": true,
                    "modifiedDatetime": 1665664324000,
                    "type": "EXTERNAL",
                    "parameters": {},
                    "requiredAuth": false,
                    "skipStartup": false
                }, {
                    "id": 54,
                    "name": "TRAVELLING_ABROAD_EXT",
                    "target": "http://www.vodafone.co.uk/explore/costs/travelling-abroad/index.htm",
                    "ssoEnabled": false,
                    "loginRequired": false,
                    "verificationRequired": false,
                    "connectionRequired": true,
                    "modifiedDatetime": 1665664336000,
                    "title": "Travelling Abroad",
                    "type": "EXTERNAL",
                    "parameters": {},
                    "requiredAuth": false,
                    "skipStartup": false
                }, {
                    "id": 69,
                    "name": "UPDATE_ANDROID_APP",
                    "target": "https://play.google.com/store/apps/details?id=com.myvodafoneapp&hl=en",
                    "ssoEnabled": false,
                    "loginRequired": false,
                    "verificationRequired": true,
                    "connectionRequired": true,
                    "modifiedDatetime": 1665664339000,
                    "type": "EXTERNAL",
                    "parameters": {},
                    "requiredAuth": false,
                    "skipStartup": false
                }, {
                    "id": 70,
                    "name": "UPDATE_IOS_APP",
                    "target": "https://itunes.apple.com/gb/app/my-vodafone/id370901726?mt=8",
                    "ssoEnabled": false,
                    "loginRequired": false,
                    "verificationRequired": true,
                    "connectionRequired": true,
                    "modifiedDatetime": 1665664339000,
                    "type": "EXTERNAL",
                    "parameters": {},
                    "requiredAuth": false,
                    "skipStartup": false
                }, {
                    "id": 87,
                    "name": "VOXI_ECARE",
                    "target": "https://www.voxi.co.uk/sign-in?cid=mvangt-mva/mva/myvfwb/voxi/an/inst",
                    "ssoEnabled": false,
                    "loginRequired": false,
                    "verificationRequired": false,
                    "connectionRequired": true,
                    "modifiedDatetime": 1665664441000,
                    "title": "null",
                    "type": "EXTERNAL",
                    "parameters": {},
                    "requiredAuth": false,
                    "skipStartup": false
                }, {
                    "id": 88,
                    "name": "ECARE_HOME_PAGE",
                    "target": "https://www.vodafone.co.uk/myvodafone/faces/home",
                    "ssoEnabled": false,
                    "loginRequired": false,
                    "verificationRequired": false,
                    "connectionRequired": true,
                    "modifiedDatetime": 1665664344000,
                    "title": "null",
                    "type": "EXTERNAL",
                    "parameters": {},
                    "requiredAuth": false,
                    "skipStartup": false
                }, {
                    "id": 103,
                    "name": "TERMS_AND_CONDITIONS",
                    "target": "https://www.vodafone.co.uk/terms-and-conditions/",
                    "ssoEnabled": false,
                    "loginRequired": false,
                    "verificationRequired": false,
                    "connectionRequired": false,
                    "modifiedDatetime": 1665664347000,
                    "type": "EXTERNAL",
                    "parameters": {},
                    "requiredAuth": false,
                    "skipStartup": false
                }, {
                    "id": 104,
                    "name": "SERVICE_GUARANTEE",
                    "target": "https://www.vodafone.co.uk/serviceguarantee",
                    "ssoEnabled": false,
                    "loginRequired": false,
                    "verificationRequired": false,
                    "connectionRequired": false,
                    "modifiedDatetime": 1665664347000,
                    "type": "EXTERNAL",
                    "parameters": {},
                    "requiredAuth": false,
                    "skipStartup": false
                }, {
                    "id": 105,
                    "name": "VISIT_VODAFONE_WEBSITE",
                    "target": "https://www.vodafone.co.uk/myvodafone",
                    "ssoEnabled": false,
                    "loginRequired": false,
                    "verificationRequired": false,
                    "connectionRequired": false,
                    "modifiedDatetime": 1665664347000,
                    "type": "EXTERNAL",
                    "parameters": {},
                    "requiredAuth": false,
                    "skipStartup": false
                }, {
                    "id": 106,
                    "name": "ECARE_NON_VODAFONE_SIM",
                    "target": "https://www.vodafone.co.uk/myaccount",
                    "ssoEnabled": false,
                    "loginRequired": false,
                    "verificationRequired": false,
                    "connectionRequired": false,
                    "modifiedDatetime": 1665664347000,
                    "type": "EXTERNAL",
                    "parameters": {},
                    "requiredAuth": false,
                    "skipStartup": false
                }, {
                    "id": 107,
                    "name": "DREAMLAB",
                    "target": "https://www.vodafone.co.uk/dreamlab/",
                    "ssoEnabled": false,
                    "loginRequired": false,
                    "verificationRequired": false,
                    "connectionRequired": false,
                    "modifiedDatetime": 1665664347000,
                    "type": "EXTERNAL",
                    "parameters": {},
                    "requiredAuth": false,
                    "skipStartup": false
                }, {
                    "id": 109,
                    "name": "EXTERNAL_PRIVACY_POLICY",
                    "target": "https://vodafone.co.uk/vodafone-uk/app/privacy-policy/index.htm",
                    "ssoEnabled": false,
                    "loginRequired": false,
                    "verificationRequired": false,
                    "connectionRequired": false,
                    "modifiedDatetime": 1665664347000,
                    "type": "EXTERNAL",
                    "parameters": {},
                    "requiredAuth": false,
                    "skipStartup": false
                }, {
                    "id": 112,
                    "name": "SECURE_NET",
                    "target": "https://securenet.vodafone.co.uk",
                    "ssoEnabled": false,
                    "loginRequired": false,
                    "verificationRequired": false,
                    "connectionRequired": false,
                    "modifiedDatetime": 1665664347000,
                    "type": "EXTERNAL",
                    "parameters": {
                        "QUERY": {
                            "cid": "mvangt-mva/mva/myvfwb/sup/an/ntst"
                        }
                    },
                    "requiredAuth": false,
                    "skipStartup": false
                }, {
                    "id": 113,
                    "name": "ECARE_PROXY_FIND_OUT_MORE",
                    "target": "https://m.vodafone.co.uk/mobile/we-cant-find-you/index.htm",
                    "ssoEnabled": false,
                    "loginRequired": false,
                    "verificationRequired": false,
                    "connectionRequired": false,
                    "modifiedDatetime": 1665664347000,
                    "type": "EXTERNAL",
                    "parameters": {},
                    "requiredAuth": false,
                    "skipStartup": false
                }, {
                    "id": 114,
                    "name": "VODAFONE_FORUM",
                    "target": "https://forum.vodafone.co.uk/",
                    "ssoEnabled": false,
                    "loginRequired": false,
                    "verificationRequired": false,
                    "connectionRequired": true,
                    "modifiedDatetime": 1665664347000,
                    "type": "EXTERNAL",
                    "parameters": {},
                    "requiredAuth": false,
                    "skipStartup": false
                }, {
                    "id": 115,
                    "name": "REFER_FRIEND",
                    "target": "http://www.vodafone.co.uk/refer-a-friend?utm_source=app&utm_medium=BM&utm_campaign=RAF",
                    "ssoEnabled": false,
                    "loginRequired": false,
                    "verificationRequired": false,
                    "connectionRequired": false,
                    "modifiedDatetime": 1665664347000,
                    "type": "EXTERNAL",
                    "parameters": {},
                    "requiredAuth": false,
                    "skipStartup": false
                }, {
                    "id": 116,
                    "name": "PAYG_DATA_ROLLOVER_BVB_TERMS",
                    "target": "https://www.vodafone.co.uk/bigvaluebundles",
                    "ssoEnabled": false,
                    "loginRequired": false,
                    "verificationRequired": false,
                    "connectionRequired": false,
                    "modifiedDatetime": 1665664347000,
                    "type": "EXTERNAL",
                    "parameters": {},
                    "requiredAuth": false,
                    "skipStartup": false
                }, {
                    "id": 117,
                    "name": "TECH_STARTER_SEPT_2018",
                    "target": "http://www.vodafone.co.uk/techstarter",
                    "ssoEnabled": false,
                    "loginRequired": false,
                    "verificationRequired": false,
                    "connectionRequired": false,
                    "modifiedDatetime": 1665664347000,
                    "type": "EXTERNAL",
                    "parameters": {},
                    "requiredAuth": false,
                    "skipStartup": false
                }, {
                    "id": 139,
                    "name": "UPDATE_APP",
                    "target": "https://play.google.com/store/apps/details?id=com.myvodafoneapp&hl=en",
                    "ssoEnabled": false,
                    "loginRequired": false,
                    "verificationRequired": true,
                    "connectionRequired": true,
                    "modifiedDatetime": 1665664362000,
                    "type": "EXTERNAL",
                    "parameters": {},
                    "requiredAuth": false,
                    "skipStartup": false
                }, {
                    "id": 141,
                    "name": "ECARE_TEMP_LOGIN",
                    "target": "https://www.vodafone.co.uk/myvodafone",
                    "ssoEnabled": false,
                    "loginRequired": false,
                    "verificationRequired": false,
                    "connectionRequired": true,
                    "modifiedDatetime": 1665664362000,
                    "type": "EXTERNAL",
                    "parameters": {},
                    "requiredAuth": false,
                    "skipStartup": false
                }, {
                    "id": 155,
                    "name": "ONE_NUMBER",
                    "target": "http://onenumber.vodafone.com/mobile/gb",
                    "ssoEnabled": false,
                    "loginRequired": false,
                    "verificationRequired": false,
                    "connectionRequired": true,
                    "modifiedDatetime": 1665664365000,
                    "type": "EXTERNAL",
                    "parameters": {},
                    "requiredAuth": false,
                    "skipStartup": false
                }, {
                    "id": 203,
                    "name": "ECARE_FORGOTUSERNAME",
                    "target": "https://www.vodafone.co.uk/webcenter/portal/myvodafone/forgottenusername",
                    "ssoEnabled": false,
                    "loginRequired": false,
                    "verificationRequired": false,
                    "connectionRequired": true,
                    "modifiedDatetime": 1665664401000,
                    "type": "EXTERNAL",
                    "parameters": {},
                    "requiredAuth": false,
                    "skipStartup": false
                }, {
                    "id": 204,
                    "name": "ECARE_FORGOTPASSWORD",
                    "target": "https://www.vodafone.co.uk/webcenter/portal/myvodafone/forgottenpassword",
                    "ssoEnabled": false,
                    "loginRequired": false,
                    "verificationRequired": false,
                    "connectionRequired": true,
                    "modifiedDatetime": 1665664401000,
                    "type": "EXTERNAL",
                    "parameters": {},
                    "requiredAuth": false,
                    "skipStartup": false
                }, {
                    "id": 218,
                    "name": "SIM_ONLY_DEALS",
                    "target": "https://www.vodafone.co.uk/mobile/best-sim-only-deals",
                    "ssoEnabled": false,
                    "loginRequired": false,
                    "verificationRequired": false,
                    "connectionRequired": true,
                    "modifiedDatetime": 1665664413000,
                    "type": "EXTERNAL",
                    "parameters": {
                        "QUERY": {
                            "cid": "mvangt-mva/mva/nvfcd/simohandset/an/ntst"
                        }
                    },
                    "requiredAuth": false,
                    "skipStartup": false
                }, {
                    "id": 219,
                    "name": "PAYM_DEALS",
                    "target": "https://www.vodafone.co.uk/mobile/phones/pay-monthly-contracts",
                    "ssoEnabled": false,
                    "loginRequired": false,
                    "verificationRequired": false,
                    "connectionRequired": true,
                    "modifiedDatetime": 1665664413000,
                    "type": "EXTERNAL",
                    "parameters": {
                        "QUERY": {
                            "cid": "mvangt-mva/mva/nvfcd/paymhandset/an/ntst"
                        }
                    },
                    "requiredAuth": false,
                    "skipStartup": false
                }, {
                    "id": 220,
                    "name": "BROADBAND_DEALS",
                    "target": "https://www.vodafone.co.uk/broadband/deals/superfast",
                    "ssoEnabled": false,
                    "loginRequired": false,
                    "verificationRequired": false,
                    "connectionRequired": true,
                    "modifiedDatetime": 1665664413000,
                    "type": "EXTERNAL",
                    "parameters": {
                        "QUERY": {
                            "cid": "mvangt-mva/mva/nvfcd/superfastbb/an/ntst"
                        }
                    },
                    "requiredAuth": false,
                    "skipStartup": false
                }, {
                    "id": 221,
                    "name": "UK_MOBILE_NETWORK",
                    "target": "https://www.vodafone.co.uk/network",
                    "ssoEnabled": false,
                    "loginRequired": false,
                    "verificationRequired": false,
                    "connectionRequired": true,
                    "modifiedDatetime": 1665664413000,
                    "type": "EXTERNAL",
                    "parameters": {
                        "QUERY": {
                            "cid": "mvangt-mva/mva/nvfcd/network/an/ntst"
                        }
                    },
                    "requiredAuth": false,
                    "skipStartup": false
                }, {
                    "id": 222,
                    "name": "UK_MOBILE_NETWORK_5G",
                    "target": "https://www.vodafone.co.uk/network/5g",
                    "ssoEnabled": false,
                    "loginRequired": false,
                    "verificationRequired": false,
                    "connectionRequired": true,
                    "modifiedDatetime": 1665664413000,
                    "type": "EXTERNAL",
                    "parameters": {
                        "QUERY": {
                            "cid": "mvangt-mva/mva/nvfcd/5g/an/ntst"
                        }
                    },
                    "requiredAuth": false,
                    "skipStartup": false
                }, {
                    "id": 223,
                    "name": "NON_VF_VERYME_REWARDS",
                    "target": "https://www.vodafone.co.uk/my-vodafone-account/vodafone-apps/Vodafone_VeryMe_Rewards",
                    "ssoEnabled": false,
                    "loginRequired": false,
                    "verificationRequired": false,
                    "connectionRequired": true,
                    "modifiedDatetime": 1665664413000,
                    "type": "EXTERNAL",
                    "parameters": {
                        "QUERY": {
                            "cid": "mvangt-mva/mva/nvfcd/veryme/an/ntst"
                        }
                    },
                    "requiredAuth": false,
                    "skipStartup": false
                }, {
                    "id": 224,
                    "name": "ONLINE_ASSISTANCE",
                    "target": "https://www.vodafone.co.uk/contact-us-b2",
                    "ssoEnabled": false,
                    "loginRequired": false,
                    "verificationRequired": false,
                    "connectionRequired": true,
                    "modifiedDatetime": 1665664413000,
                    "type": "EXTERNAL",
                    "parameters": {
                        "QUERY": {
                            "cid": "mvangt-mva/mva/nvfcd/contactus/an/ntst"
                        }
                    },
                    "requiredAuth": false,
                    "skipStartup": false
                }, {
                    "id": 225,
                    "name": "HOME_DELIVERY",
                    "target": "https://www.vodafone.co.uk/my-vodafone-account/orders/delivery",
                    "ssoEnabled": false,
                    "loginRequired": false,
                    "verificationRequired": false,
                    "connectionRequired": true,
                    "modifiedDatetime": 1665664413000,
                    "type": "EXTERNAL",
                    "parameters": {
                        "QUERY": {
                            "cid": "mvangt-mva/mva/nvfcd/delivery/an/ntst"
                        }
                    },
                    "requiredAuth": false,
                    "skipStartup": false
                }, {
                    "id": 226,
                    "name": "ORDERS_RETURNS",
                    "target": "https://www.vodafone.co.uk/my-vodafone-account/orders/returns",
                    "ssoEnabled": false,
                    "loginRequired": false,
                    "verificationRequired": false,
                    "connectionRequired": true,
                    "modifiedDatetime": 1665664414000,
                    "type": "EXTERNAL",
                    "parameters": {
                        "QUERY": {
                            "cid": "mvangt-mva/mva/nvfcd/returns/an/ntst"
                        }
                    },
                    "requiredAuth": false,
                    "skipStartup": false
                }, {
                    "id": 227,
                    "name": "NON_VF_VODAFONE_TOGETHER",
                    "target": "https://www.vodafone.co.uk/broadband-sim-only-deals",
                    "ssoEnabled": false,
                    "loginRequired": false,
                    "verificationRequired": false,
                    "connectionRequired": true,
                    "modifiedDatetime": 1665664414000,
                    "type": "EXTERNAL",
                    "parameters": {
                        "QUERY": {
                            "cid": "mvangt-mva/mva/nvfcd/simombb/an/ntst"
                        }
                    },
                    "requiredAuth": false,
                    "skipStartup": false
                }, {
                    "id": 244,
                    "name": "TRADE_IN_WEB_IOS",
                    "target": "https://www.vodafone.co.uk/mobile/vodafone-trade-in",
                    "ssoEnabled": false,
                    "loginRequired": false,
                    "verificationRequired": false,
                    "connectionRequired": false,
                    "modifiedDatetime": 1665664423000,
                    "type": "EXTERNAL",
                    "parameters": {},
                    "requiredAuth": false,
                    "skipStartup": true
                }, {
                    "id": 4,
                    "name": "VODAFONE_START",
                    "target": "https://start.vodafone.com/ssp/myvflink/UK",
                    "ssoEnabled": false,
                    "loginRequired": false,
                    "verificationRequired": false,
                    "connectionRequired": true,
                    "modifiedDatetime": 1665664324000,
                    "type": "CUSTOM_TAB",
                    "parameters": {},
                    "requiredAuth": false,
                    "skipStartup": false
                }, {
                    "id": 38,
                    "name": "VESTA_ANONY_TOPUP",
                    "target": "https://vestapay-uat1.vodafone.co.uk/VodafoneUKMobileWebUI/UI",
                    "ssoEnabled": false,
                    "loginRequired": false,
                    "verificationRequired": false,
                    "connectionRequired": true,
                    "modifiedDatetime": 1665664325000,
                    "method": "GET",
                    "partner": "VESTA_AT",
                    "title": "Top up any number",
                    "type": "CUSTOM_TAB",
                    "parameters": {
                        "QUERY": {
                            "ACTION": "AT",
                            "authToken": "#authtoken"
                        }
                    },
                    "requiredAuth": true,
                    "authParams": {
                        "third_partner_name": "VESTA_AT"
                    },
                    "skipStartup": false
                }, {
                    "id": 48,
                    "name": "ECARE_WEBCHAT",
                    "target": "https://www.vodafone.co.uk/vodafone-uk/app/webchat/index.htm?VODapp",
                    "ssoEnabled": false,
                    "loginRequired": false,
                    "verificationRequired": false,
                    "connectionRequired": true,
                    "modifiedDatetime": 1665664347000,
                    "type": "CUSTOM_TAB",
                    "parameters": {},
                    "requiredAuth": false,
                    "skipStartup": false
                }, {
                    "id": 49,
                    "name": "VODAFONE_FORUM",
                    "target": "http://forum.vodafone.co.uk/",
                    "ssoEnabled": false,
                    "loginRequired": false,
                    "verificationRequired": false,
                    "connectionRequired": true,
                    "modifiedDatetime": 1665664332000,
                    "type": "CUSTOM_TAB",
                    "parameters": {},
                    "requiredAuth": false,
                    "skipStartup": false
                }, {
                    "id": 50,
                    "name": "NANOREP_FAQS",
                    "target": "https://support.vodafone.co.uk",
                    "ssoEnabled": false,
                    "loginRequired": false,
                    "verificationRequired": false,
                    "connectionRequired": true,
                    "modifiedDatetime": 1665664416000,
                    "title": "null",
                    "type": "CUSTOM_TAB",
                    "parameters": {
                        "QUERY": {
                            "cid": "mvangt-mva/mva/myvfwb/faqs/an/ntst"
                        }
                    },
                    "requiredAuth": false,
                    "skipStartup": false
                }, {
                    "id": 51,
                    "name": "VESTA_ANONY_TOPUP_PAYM",
                    "target": "https://vestapay-uat1.vodafone.co.uk/VodafoneUKMobileWebUI/UI",
                    "ssoEnabled": false,
                    "loginRequired": false,
                    "verificationRequired": false,
                    "connectionRequired": true,
                    "modifiedDatetime": 1665664365000,
                    "method": "GET",
                    "title": "Top up any number ",
                    "type": "CUSTOM_TAB",
                    "parameters": {
                        "QUERY": {
                            "ACTION": "AT"
                        }
                    },
                    "requiredAuth": false,
                    "authParams": {
                        "third_partner_name": "VESTA_AT"
                    },
                    "skipStartup": false
                }, {
                    "id": 52,
                    "name": "BIG_VALUE_BUNDLES",
                    "target": "https://www.vodafone.co.uk/shop/bundles-and-sims/pay-as-you-go-plans/big-value-bundles",
                    "ssoEnabled": false,
                    "loginRequired": false,
                    "verificationRequired": false,
                    "connectionRequired": false,
                    "modifiedDatetime": 1665664415000,
                    "title": "null",
                    "type": "CUSTOM_TAB",
                    "parameters": {
                        "QUERY": {
                            "cid": "mvangt-mva/mva/myvfwb/bigvaluebundles/an/ntst"
                        }
                    },
                    "requiredAuth": false,
                    "skipStartup": false
                }, {
                    "id": 58,
                    "name": "PAYG_ONE",
                    "target": "https://www.vodafone.co.uk/shop/bundles-and-sims/pay-as-you-go-plans/pay-as-you-go-one",
                    "ssoEnabled": false,
                    "loginRequired": false,
                    "verificationRequired": false,
                    "connectionRequired": false,
                    "modifiedDatetime": 1665664336000,
                    "title": "null",
                    "type": "CUSTOM_TAB",
                    "parameters": {},
                    "requiredAuth": false,
                    "skipStartup": false
                }, {
                    "id": 59,
                    "name": "BUSINESS_PASS",
                    "target": "https://www.vodafone.co.uk/businesspass",
                    "ssoEnabled": false,
                    "loginRequired": false,
                    "verificationRequired": false,
                    "connectionRequired": false,
                    "modifiedDatetime": 1665664336000,
                    "title": "null",
                    "type": "CUSTOM_TAB",
                    "parameters": {},
                    "requiredAuth": false,
                    "skipStartup": false
                }, {
                    "id": 60,
                    "name": "ECARE_REGISTRATION",
                    "target": "https://www.vodafone.co.uk/webcenter/portal/myvodafone/register",
                    "ssoEnabled": false,
                    "loginRequired": false,
                    "verificationRequired": false,
                    "connectionRequired": false,
                    "modifiedDatetime": 1665664338000,
                    "type": "CUSTOM_TAB",
                    "parameters": {},
                    "requiredAuth": false,
                    "skipStartup": false
                }, {
                    "id": 63,
                    "name": "ECARE_FORGOT_USERNAME",
                    "target": "https://www.vodafone.co.uk/webcenter/portal/myvodafone/forgottenusername",
                    "ssoEnabled": false,
                    "loginRequired": false,
                    "verificationRequired": false,
                    "connectionRequired": true,
                    "modifiedDatetime": 1665664338000,
                    "type": "CUSTOM_TAB",
                    "parameters": {},
                    "requiredAuth": false,
                    "skipStartup": false
                }, {
                    "id": 81,
                    "name": "VODAFONE_PRIVACY",
                    "target": "https://www.vodafone.co.uk/privacy",
                    "ssoEnabled": false,
                    "loginRequired": false,
                    "verificationRequired": false,
                    "connectionRequired": true,
                    "modifiedDatetime": 1665664416000,
                    "type": "CUSTOM_TAB",
                    "parameters": {
                        "QUERY": {
                            "cid": "mvangt-mva/mva/myvfwb/privacy/an/ntst"
                        }
                    },
                    "requiredAuth": false,
                    "skipStartup": false
                }, {
                    "id": 82,
                    "name": "ANDROID_AD_PERSONALISATION",
                    "target": "https://support.google.com/android/answer/3118621?hl=en-GB",
                    "ssoEnabled": false,
                    "loginRequired": false,
                    "verificationRequired": false,
                    "connectionRequired": true,
                    "modifiedDatetime": 1665664342000,
                    "type": "CUSTOM_TAB",
                    "parameters": {},
                    "requiredAuth": false,
                    "skipStartup": false
                }, {
                    "id": 85,
                    "name": "IOS_AD_PERSONALISATION",
                    "target": "https://support.apple.com/en-gb/HT202074",
                    "ssoEnabled": false,
                    "loginRequired": false,
                    "verificationRequired": false,
                    "connectionRequired": true,
                    "modifiedDatetime": 1665664342000,
                    "type": "CUSTOM_TAB",
                    "parameters": {},
                    "requiredAuth": false,
                    "skipStartup": false
                }, {
                    "id": 86,
                    "name": "VODAFONE_CONTACT_US",
                    "target": "https://www.vodafone.co.uk/contact-us",
                    "ssoEnabled": false,
                    "loginRequired": false,
                    "verificationRequired": false,
                    "connectionRequired": true,
                    "modifiedDatetime": 1665664342000,
                    "type": "CUSTOM_TAB",
                    "parameters": {},
                    "requiredAuth": false,
                    "skipStartup": false
                }, {
                    "id": 132,
                    "name": "TRAVELLING_ABROAD_PLUS",
                    "target": "https://www.vodafone.co.uk/explore/costs/travelling-abroad/app/index.htm",
                    "ssoEnabled": false,
                    "loginRequired": false,
                    "verificationRequired": false,
                    "connectionRequired": true,
                    "modifiedDatetime": 1665664354000,
                    "type": "CUSTOM_TAB",
                    "parameters": {},
                    "requiredAuth": false,
                    "skipStartup": false
                }, {
                    "id": 142,
                    "name": "PAYG_MAY_PROMO",
                    "target": "https://www.vodafone.co.uk/topupwinback",
                    "ssoEnabled": false,
                    "loginRequired": false,
                    "verificationRequired": false,
                    "connectionRequired": true,
                    "modifiedDatetime": 1665664362000,
                    "type": "CUSTOM_TAB",
                    "parameters": {},
                    "requiredAuth": false,
                    "skipStartup": false
                }, {
                    "id": 144,
                    "name": "CHORDIANT_W_VoV_NW_TRAFFIC_PERMISSION",
                    "target": "https://m.vodafone.co.uk/vodafone-uk/app/permissions/confirmation/",
                    "ssoEnabled": false,
                    "loginRequired": false,
                    "verificationRequired": true,
                    "connectionRequired": true,
                    "modifiedDatetime": 1665664363000,
                    "type": "CUSTOM_TAB",
                    "parameters": {
                        "QUERY": {
                            "cid": "mvavov-danlt/nprod/myvfwb/perm/11.18/ntst"
                        }
                    },
                    "requiredAuth": false,
                    "skipStartup": false
                }, {
                    "id": 145,
                    "name": "CHORDIANT_W_VoV_HBB_1",
                    "target": "http://www.vodafone.co.uk/broadband",
                    "ssoEnabled": false,
                    "loginRequired": false,
                    "verificationRequired": true,
                    "connectionRequired": true,
                    "modifiedDatetime": 1665664363000,
                    "type": "CUSTOM_TAB",
                    "parameters": {},
                    "requiredAuth": false,
                    "skipStartup": false
                }, {
                    "id": 146,
                    "name": "CHORDIANT_W_VoV_SIMO_1",
                    "target": "http://www.vodafone.co.uk/2019-deals/existing-customers",
                    "ssoEnabled": false,
                    "loginRequired": false,
                    "verificationRequired": true,
                    "connectionRequired": true,
                    "modifiedDatetime": 1665664363000,
                    "type": "CUSTOM_TAB",
                    "parameters": {
                        "QUERY": {
                            "cid": "mvavov-cvm/psmo/simf19/xs/2.19/ntst"
                        }
                    },
                    "requiredAuth": false,
                    "skipStartup": false
                }, {
                    "id": 147,
                    "name": "CHORDIANT_W_VoV_MBB_1",
                    "target": "http://www.vodafone.co.uk/2019-deals/existing-customers",
                    "ssoEnabled": false,
                    "loginRequired": false,
                    "verificationRequired": true,
                    "connectionRequired": true,
                    "modifiedDatetime": 1665664363000,
                    "type": "CUSTOM_TAB",
                    "parameters": {
                        "QUERY": {
                            "cid": "mvavov-cvm/nprod/43515/xs/2.19/ntst"
                        }
                    },
                    "requiredAuth": false,
                    "skipStartup": false
                }, {
                    "id": 148,
                    "name": "CHORDIANT_W_VoV_HANDSET_1",
                    "target": "https://www.vodafone.co.uk/myvodafone/faces/offers",
                    "ssoEnabled": false,
                    "loginRequired": false,
                    "verificationRequired": true,
                    "connectionRequired": true,
                    "modifiedDatetime": 1665664363000,
                    "type": "CUSTOM_TAB",
                    "parameters": {
                        "QUERY": {
                            "cid": "mvavov-cvm/sams/byd/xs/3.19/ntst"
                        }
                    },
                    "requiredAuth": false,
                    "skipStartup": false
                }, {
                    "id": 149,
                    "name": "CHORDIANT_W_VoV_HBB_1_A",
                    "target": "https://www.vodafone.co.uk/broadband/index.htm",
                    "ssoEnabled": false,
                    "loginRequired": false,
                    "verificationRequired": true,
                    "connectionRequired": true,
                    "modifiedDatetime": 1665664364000,
                    "type": "CUSTOM_TAB",
                    "parameters": {
                        "QUERY": {
                            "cid": "mvavov-cvm/hbb/F19BB/xs/2.19/ntst"
                        }
                    },
                    "requiredAuth": false,
                    "skipStartup": false
                }, {
                    "id": 150,
                    "name": "CHORDIANT_W_VoV_HANDSET_1_A",
                    "target": "http://www.vodafone.co.uk/2019-deals/existing-customers",
                    "ssoEnabled": false,
                    "loginRequired": false,
                    "verificationRequired": true,
                    "connectionRequired": true,
                    "modifiedDatetime": 1665664364000,
                    "type": "CUSTOM_TAB",
                    "parameters": {
                        "QUERY": {
                            "cid": "mvavov-cvm/huwe/hm20f/xs/2.19/ntst"
                        }
                    },
                    "requiredAuth": false,
                    "skipStartup": false
                }, {
                    "id": 151,
                    "name": "CHORDIANT_W_VoV_SIMO_1_A",
                    "target": "http://www.vodafone.co.uk/2019-deals/existing-customers",
                    "ssoEnabled": false,
                    "loginRequired": false,
                    "verificationRequired": true,
                    "connectionRequired": true,
                    "modifiedDatetime": 1665664364000,
                    "type": "CUSTOM_TAB",
                    "parameters": {
                        "QUERY": {
                            "cid": "mvavov-cvm/psmo/simf19/xs/2.19/ntst"
                        }
                    },
                    "requiredAuth": false,
                    "skipStartup": false
                }, {
                    "id": 152,
                    "name": "CHORDIANT_W_PP_VoV_NW_TRAFFIC_PERMISSION",
                    "target": "https://m.vodafone.co.uk/vodafone-uk/app/permissions/confirmation/",
                    "ssoEnabled": false,
                    "loginRequired": false,
                    "verificationRequired": true,
                    "connectionRequired": true,
                    "modifiedDatetime": 1665664364000,
                    "type": "CUSTOM_TAB",
                    "parameters": {
                        "QUERY": {
                            "cid": "mvavov-danlt/nprod/myvfwb/perm/11.18/ntst"
                        }
                    },
                    "requiredAuth": false,
                    "skipStartup": false
                }, {
                    "id": 153,
                    "name": "CHORDIANT_W_VoV_ADHOC_COMMS_01",
                    "target": "https://www.vodafone.co.uk/bf2018",
                    "ssoEnabled": false,
                    "loginRequired": false,
                    "verificationRequired": true,
                    "connectionRequired": true,
                    "modifiedDatetime": 1665664364000,
                    "type": "CUSTOM_TAB",
                    "parameters": {
                        "QUERY": {
                            "cid": "mvavov-mva/iph/cyb256/xs//ntst"
                        }
                    },
                    "requiredAuth": false,
                    "skipStartup": false
                }, {
                    "id": 157,
                    "name": "HELP_CUSTOM",
                    "target": "myvodafone://support",
                    "ssoEnabled": false,
                    "loginRequired": false,
                    "verificationRequired": false,
                    "connectionRequired": false,
                    "modifiedDatetime": 1665664366000,
                    "title": "Help",
                    "type": "CUSTOM_TAB",
                    "parameters": {},
                    "requiredAuth": false,
                    "skipStartup": false
                }, {
                    "id": 160,
                    "name": "CHORDIANT_W_PP_VoV_PRE_TO_POSTPAY_1",
                    "target": "https://www.vodafone.co.uk/pre-postpay",
                    "ssoEnabled": false,
                    "loginRequired": false,
                    "verificationRequired": true,
                    "connectionRequired": true,
                    "modifiedDatetime": 1665664367000,
                    "type": "CUSTOM_TAB",
                    "parameters": {},
                    "requiredAuth": false,
                    "skipStartup": false
                }, {
                    "id": 161,
                    "name": "CHORDIANT_W_PP_VoV_PRE_TO_POSTPAY_2",
                    "target": "https://www.vodafone.co.uk/pre-post-extra",
                    "ssoEnabled": false,
                    "loginRequired": false,
                    "verificationRequired": true,
                    "connectionRequired": true,
                    "modifiedDatetime": 1665664367000,
                    "type": "CUSTOM_TAB",
                    "parameters": {},
                    "requiredAuth": false,
                    "skipStartup": false
                }, {
                    "id": 164,
                    "name": "STORE_LOCATOR_NEW",
                    "target": "https://www.vodafone.co.uk/help-and-information/store-locator",
                    "ssoEnabled": false,
                    "loginRequired": false,
                    "verificationRequired": false,
                    "connectionRequired": true,
                    "modifiedDatetime": 1665664416000,
                    "type": "CUSTOM_TAB",
                    "parameters": {
                        "QUERY": {
                            "cid": "mvangt-mva/mva/myvfwb/storelocator/an/ntst"
                        }
                    },
                    "requiredAuth": false,
                    "skipStartup": false
                }, {
                    "id": 165,
                    "name": "EXPLORE_VODAFONE",
                    "target": "https://start.vodafone.com/ssp/myvflink/UK",
                    "ssoEnabled": false,
                    "loginRequired": false,
                    "verificationRequired": false,
                    "connectionRequired": true,
                    "modifiedDatetime": 1665664374000,
                    "type": "CUSTOM_TAB",
                    "parameters": {},
                    "requiredAuth": false,
                    "skipStartup": false
                }, {
                    "id": 187,
                    "name": "CHANGE_PLAN",
                    "target": "https://www.vodafone.co.uk/webcenter/portal/myvodafone/app/appaddbvb",
                    "ssoEnabled": false,
                    "loginRequired": false,
                    "verificationRequired": false,
                    "connectionRequired": true,
                    "modifiedDatetime": 1665664397000,
                    "type": "CUSTOM_TAB",
                    "parameters": {},
                    "requiredAuth": false,
                    "skipStartup": false
                }, {
                    "id": 193,
                    "name": "PAYG_EXTRAS",
                    "target": "https://www.vodafone.co.uk/mobile/extras#pay-as-you-go-extras",
                    "ssoEnabled": false,
                    "loginRequired": false,
                    "verificationRequired": false,
                    "connectionRequired": true,
                    "modifiedDatetime": 1665664397000,
                    "type": "CUSTOM_TAB",
                    "parameters": {
                        "QUERY": {
                            "cid": "mvangt-mva/mva/myvfwb/paygextras/an/ntst"
                        }
                    },
                    "requiredAuth": false,
                    "skipStartup": false
                }, {
                    "id": 194,
                    "name": "CONCIERGE",
                    "target": "https://vodafoneblack.tenconcierge.com",
                    "ssoEnabled": false,
                    "loginRequired": false,
                    "verificationRequired": false,
                    "connectionRequired": true,
                    "modifiedDatetime": 1665664387000,
                    "type": "CUSTOM_TAB",
                    "parameters": {},
                    "requiredAuth": false,
                    "skipStartup": false
                }, {
                    "id": 200,
                    "name": "ECARE_PRODUCTS",
                    "target": "https://www.vodafone.co.uk",
                    "ssoEnabled": false,
                    "loginRequired": false,
                    "verificationRequired": false,
                    "connectionRequired": true,
                    "modifiedDatetime": 1665664401000,
                    "type": "CUSTOM_TAB",
                    "parameters": {},
                    "requiredAuth": false,
                    "skipStartup": false
                }, {
                    "id": 207,
                    "name": "LOGIN_ECARE",
                    "target": "https://www.vodafone.co.uk/webcenter/portal/myvodafone/pages_login",
                    "ssoEnabled": false,
                    "loginRequired": false,
                    "verificationRequired": false,
                    "connectionRequired": true,
                    "modifiedDatetime": 1665664401000,
                    "type": "CUSTOM_TAB",
                    "parameters": {},
                    "requiredAuth": false,
                    "skipStartup": false
                }, {
                    "id": 209,
                    "name": "LOGIN_ECARE_TEMP",
                    "target": "https://www.vodafone.co.uk/webcenter/portal/myvodafone/pages_login",
                    "ssoEnabled": false,
                    "loginRequired": false,
                    "verificationRequired": false,
                    "connectionRequired": true,
                    "modifiedDatetime": 1665664403000,
                    "type": "CUSTOM_TAB",
                    "parameters": {},
                    "requiredAuth": false,
                    "skipStartup": false
                }, {
                    "id": 212,
                    "name": "COVID_19",
                    "target": "https://www.vodafone.co.uk/mobile/coronavirus-advice",
                    "ssoEnabled": false,
                    "loginRequired": false,
                    "verificationRequired": false,
                    "connectionRequired": false,
                    "modifiedDatetime": 1665664405000,
                    "title": "My Vodafone",
                    "type": "CUSTOM_TAB",
                    "parameters": {},
                    "requiredAuth": false,
                    "skipStartup": false
                }, {
                    "id": 213,
                    "name": "oneNumberDeviceSelection",
                    "target": "https://onenumber.vodafone.com/gb/?page=deviceSelection",
                    "ssoEnabled": false,
                    "loginRequired": false,
                    "verificationRequired": false,
                    "connectionRequired": true,
                    "modifiedDatetime": 1665664406000,
                    "type": "CUSTOM_TAB",
                    "parameters": {},
                    "requiredAuth": false,
                    "skipStartup": false
                }, {
                    "id": 214,
                    "name": "REGISTER_OR_MANAGE_ONENUMBER",
                    "target": "https://onenumber.vodafone.com/gb/?page=deviceSelection",
                    "ssoEnabled": false,
                    "loginRequired": false,
                    "verificationRequired": false,
                    "connectionRequired": true,
                    "modifiedDatetime": 1665664407000,
                    "type": "CUSTOM_TAB",
                    "parameters": {},
                    "requiredAuth": false,
                    "skipStartup": false
                }, {
                    "id": 215,
                    "name": "ONENUMBER_FIND_OUT_MORE",
                    "target": "https://www.vodafone.co.uk/mobile/OneNumber",
                    "ssoEnabled": false,
                    "loginRequired": false,
                    "verificationRequired": false,
                    "connectionRequired": true,
                    "modifiedDatetime": 1665664407000,
                    "type": "CUSTOM_TAB",
                    "parameters": {},
                    "requiredAuth": false,
                    "skipStartup": false
                }, {
                    "id": 229,
                    "name": "REWARDS_HOME",
                    "target": "https://rewards.vodafone.co.uk/",
                    "ssoEnabled": false,
                    "loginRequired": false,
                    "verificationRequired": false,
                    "connectionRequired": true,
                    "modifiedDatetime": 1665664416000,
                    "type": "CUSTOM_TAB",
                    "parameters": {},
                    "requiredAuth": false,
                    "skipStartup": false
                }, {
                    "id": 235,
                    "name": "VODAFONE_TRADE_IN",
                    "target": "https://tradein.vodafone.co.uk/",
                    "ssoEnabled": false,
                    "loginRequired": false,
                    "verificationRequired": false,
                    "connectionRequired": true,
                    "modifiedDatetime": 1665664417000,
                    "type": "CUSTOM_TAB",
                    "parameters": {},
                    "requiredAuth": false,
                    "skipStartup": false
                }, {
                    "id": 247,
                    "name": "PAYG1_EXTRAS",
                    "target": "https://www.vodafone.co.uk/mobile/pay-as-you-go-plans/payg-1#extras",
                    "ssoEnabled": false,
                    "loginRequired": false,
                    "verificationRequired": false,
                    "connectionRequired": true,
                    "modifiedDatetime": 1665664425000,
                    "type": "CUSTOM_TAB",
                    "parameters": {},
                    "requiredAuth": false,
                    "skipStartup": false
                }, {
                    "id": 252,
                    "name": "SMARTWATCH_CONNECTIVITY",
                    "target": "https://www.vodafone.co.uk/flexible-plans/connectivity",
                    "ssoEnabled": false,
                    "loginRequired": false,
                    "verificationRequired": false,
                    "connectionRequired": true,
                    "modifiedDatetime": 1665664430000,
                    "type": "CUSTOM_TAB",
                    "parameters": {},
                    "requiredAuth": false,
                    "skipStartup": false
                }, {
                    "id": 271,
                    "name": "FREE_BUSINESS_ADVICE",
                    "target": "https://www.vodafone.co.uk/business/sme-business/app-personal-advice?icmp=EBU_Awareness_PersonlAdvice_CTA_Other_06/08/2021",
                    "ssoEnabled": false,
                    "loginRequired": false,
                    "verificationRequired": false,
                    "connectionRequired": true,
                    "modifiedDatetime": 1665664437000,
                    "title": "Free Business Advice",
                    "type": "CUSTOM_TAB",
                    "parameters": {},
                    "requiredAuth": false,
                    "skipStartup": false
                }, {
                    "id": 13,
                    "name": "CALL_US",
                    "target": "03333040191",
                    "ssoEnabled": false,
                    "loginRequired": false,
                    "verificationRequired": false,
                    "connectionRequired": false,
                    "modifiedDatetime": 1665664449000,
                    "type": "PHONE",
                    "parameters": {},
                    "requiredAuth": false,
                    "skipStartup": false
                }, {
                    "id": 14,
                    "name": "CALL_US_SMB",
                    "target": "03333040191",
                    "ssoEnabled": false,
                    "loginRequired": false,
                    "verificationRequired": false,
                    "connectionRequired": false,
                    "modifiedDatetime": 1665664449000,
                    "type": "PHONE",
                    "parameters": {},
                    "requiredAuth": false,
                    "skipStartup": false
                }, {
                    "id": 121,
                    "name": "GET_YOUR_BUNDLE_BVB_ROAMING_WITH_OUT_BVB",
                    "target": "tel:2345",
                    "ssoEnabled": false,
                    "loginRequired": false,
                    "verificationRequired": false,
                    "connectionRequired": false,
                    "modifiedDatetime": 1665664347000,
                    "type": "PHONE",
                    "parameters": {},
                    "requiredAuth": false,
                    "skipStartup": false
                }, {
                    "id": 285,
                    "name": "CONTACT_US",
                    "target": "03333040191",
                    "ssoEnabled": false,
                    "loginRequired": false,
                    "verificationRequired": false,
                    "connectionRequired": false,
                    "modifiedDatetime": 1665664446000,
                    "type": "PHONE",
                    "parameters": {},
                    "requiredAuth": false,
                    "skipStartup": false
                }, {
                    "id": 136,
                    "name": "REDSHARER_SMS",
                    "target": "40506",
                    "ssoEnabled": false,
                    "loginRequired": false,
                    "verificationRequired": false,
                    "connectionRequired": false,
                    "modifiedDatetime": 1665664356000,
                    "type": "SMS",
                    "parameters": {},
                    "requiredAuth": false,
                    "skipStartup": false
                }, {
                    "id": 240,
                    "name": "DATA_BOOST",
                    "target": "40506",
                    "ssoEnabled": false,
                    "loginRequired": false,
                    "verificationRequired": false,
                    "connectionRequired": false,
                    "modifiedDatetime": 1665664421000,
                    "type": "SMS",
                    "parameters": {
                        "BODY": {
                            "message": "BOOST"
                        }
                    },
                    "requiredAuth": false,
                    "skipStartup": false
                }, {
                    "id": 83,
                    "name": "CUSTOMER_DATA_QUERY_EMAIL",
                    "target": "customerdataquery@vodafone.com",
                    "ssoEnabled": false,
                    "loginRequired": false,
                    "verificationRequired": false,
                    "connectionRequired": true,
                    "modifiedDatetime": 1665664342000,
                    "type": "EMAIL",
                    "parameters": {},
                    "requiredAuth": false,
                    "skipStartup": false
                }, {
                    "id": 84,
                    "name": "DATA_PROTECTION_EMAIL",
                    "target": "data.protection@vodafone.co.uk",
                    "ssoEnabled": false,
                    "loginRequired": false,
                    "verificationRequired": false,
                    "connectionRequired": true,
                    "modifiedDatetime": 1665664342000,
                    "type": "EMAIL",
                    "parameters": {},
                    "requiredAuth": false,
                    "skipStartup": false
                }, {
                    "id": 90,
                    "name": "LOYALTY_LASSIE",
                    "target": "https://veryme-mobile-app.stage-affinionservices.com/code",
                    "ssoEnabled": false,
                    "loginRequired": false,
                    "verificationRequired": false,
                    "connectionRequired": true,
                    "modifiedDatetime": 1665664397000,
                    "method": "GET",
                    "type": "INTERNAL_NO_HEADERS",
                    "parameters": {
                        "QUERY": {
                            "token": "#authtoken"
                        }
                    },
                    "requiredAuth": true,
                    "authParams": {
                        "locationStatus": "#LOC_PERM_STATUS",
                        "third_partner_name": "affinion",
                        "location": "#LAT_LON"
                    },
                    "skipStartup": true
                }, {
                    "id": 91,
                    "name": "LOYALTY_HOME",
                    "target": "https://veryme-mobile-app.stage-affinionservices.com/code",
                    "ssoEnabled": false,
                    "loginRequired": false,
                    "verificationRequired": false,
                    "connectionRequired": true,
                    "modifiedDatetime": 1665664397000,
                    "method": "GET",
                    "type": "INTERNAL_NO_HEADERS",
                    "parameters": {
                        "QUERY": {
                            "token": "#authtoken"
                        }
                    },
                    "requiredAuth": true,
                    "authParams": {
                        "locationStatus": "#LOC_PERM_STATUS",
                        "third_partner_name": "affinion",
                        "location": "#LAT_LON"
                    },
                    "skipStartup": true
                }, {
                    "id": 92,
                    "name": "LOYALTY_WALLET_SAVED",
                    "target": "https://veryme-mobile-app.stage-affinionservices.com/code",
                    "ssoEnabled": false,
                    "loginRequired": false,
                    "verificationRequired": false,
                    "connectionRequired": true,
                    "modifiedDatetime": 1665664397000,
                    "method": "GET",
                    "type": "INTERNAL_NO_HEADERS",
                    "parameters": {
                        "QUERY": {
                            "token": "#authtoken"
                        }
                    },
                    "requiredAuth": true,
                    "authParams": {
                        "locationStatus": "#LOC_PERM_STATUS",
                        "third_partner_name": "affinion",
                        "location": "#LAT_LON"
                    },
                    "skipStartup": true
                }, {
                    "id": 93,
                    "name": "LOYALTY_WALLET_CLAIMED",
                    "target": "https://veryme-mobile-app.stage-affinionservices.com/code",
                    "ssoEnabled": false,
                    "loginRequired": false,
                    "verificationRequired": false,
                    "connectionRequired": true,
                    "modifiedDatetime": 1665664397000,
                    "method": "GET",
                    "type": "INTERNAL_NO_HEADERS",
                    "parameters": {
                        "QUERY": {
                            "token": "#authtoken"
                        }
                    },
                    "requiredAuth": true,
                    "authParams": {
                        "locationStatus": "#LOC_PERM_STATUS",
                        "third_partner_name": "affinion",
                        "location": "#LAT_LON"
                    },
                    "skipStartup": true
                }, {
                    "id": 94,
                    "name": "LOYALTY_HELP",
                    "target": "https://veryme-mobile-app.stage-affinionservices.com/code",
                    "ssoEnabled": false,
                    "loginRequired": false,
                    "verificationRequired": false,
                    "connectionRequired": true,
                    "modifiedDatetime": 1665664397000,
                    "method": "GET",
                    "type": "INTERNAL_NO_HEADERS",
                    "parameters": {
                        "QUERY": {
                            "token": "#authtoken"
                        }
                    },
                    "requiredAuth": true,
                    "authParams": {
                        "locationStatus": "#LOC_PERM_STATUS",
                        "third_partner_name": "affinion",
                        "location": "#LAT_LON"
                    },
                    "skipStartup": true
                }, {
                    "id": 95,
                    "name": "LOYALTY_WALLET",
                    "target": "https://veryme-mobile-app.stage-affinionservices.com/code",
                    "ssoEnabled": false,
                    "loginRequired": false,
                    "verificationRequired": false,
                    "connectionRequired": true,
                    "modifiedDatetime": 1665664397000,
                    "method": "GET",
                    "type": "INTERNAL_NO_HEADERS",
                    "parameters": {
                        "QUERY": {
                            "token": "#authtoken"
                        }
                    },
                    "requiredAuth": true,
                    "authParams": {
                        "locationStatus": "#LOC_PERM_STATUS",
                        "third_partner_name": "affinion",
                        "location": "#LAT_LON"
                    },
                    "skipStartup": true
                }, {
                    "id": 96,
                    "name": "LOYALTY_SETTINGS",
                    "target": "https://veryme-mobile-app.stage-affinionservices.com/code",
                    "ssoEnabled": false,
                    "loginRequired": false,
                    "verificationRequired": false,
                    "connectionRequired": true,
                    "modifiedDatetime": 1665664397000,
                    "method": "GET",
                    "type": "INTERNAL_NO_HEADERS",
                    "parameters": {
                        "QUERY": {
                            "token": "#authtoken"
                        }
                    },
                    "requiredAuth": true,
                    "authParams": {
                        "locationStatus": "#LOC_PERM_STATUS",
                        "third_partner_name": "affinion",
                        "location": "#LAT_LON"
                    },
                    "skipStartup": true
                }, {
                    "id": 97,
                    "name": "LOYALTY_OFFER",
                    "target": "https://veryme-mobile-app.stage-affinionservices.com/code",
                    "ssoEnabled": false,
                    "loginRequired": false,
                    "verificationRequired": false,
                    "connectionRequired": true,
                    "modifiedDatetime": 1665664397000,
                    "method": "GET",
                    "type": "INTERNAL_NO_HEADERS",
                    "parameters": {
                        "QUERY": {
                            "token": "#authtoken"
                        }
                    },
                    "requiredAuth": true,
                    "authParams": {
                        "locationStatus": "#LOC_PERM_STATUS",
                        "third_partner_name": "affinion",
                        "location": "#LAT_LON"
                    },
                    "skipStartup": true
                }, {
                    "id": 98,
                    "name": "LOYALTY_CATEGORY",
                    "target": "https://veryme-mobile-app.stage-affinionservices.com/code",
                    "ssoEnabled": false,
                    "loginRequired": false,
                    "verificationRequired": false,
                    "connectionRequired": true,
                    "modifiedDatetime": 1665664397000,
                    "method": "GET",
                    "type": "INTERNAL_NO_HEADERS",
                    "parameters": {
                        "QUERY": {
                            "token": "#authtoken"
                        }
                    },
                    "requiredAuth": true,
                    "authParams": {
                        "locationStatus": "#LOC_PERM_STATUS",
                        "third_partner_name": "affinion",
                        "location": "#LAT_LON"
                    },
                    "skipStartup": true
                }, {
                    "id": 99,
                    "name": "LOYALTY_CODE",
                    "target": "https://veryme-mobile-app.stage-affinionservices.com/code",
                    "ssoEnabled": false,
                    "loginRequired": false,
                    "verificationRequired": false,
                    "connectionRequired": true,
                    "modifiedDatetime": 1665664397000,
                    "method": "GET",
                    "type": "INTERNAL_NO_HEADERS",
                    "parameters": {
                        "QUERY": {
                            "token": "#authtoken"
                        }
                    },
                    "requiredAuth": true,
                    "authParams": {
                        "locationStatus": "affinion",
                        "third_partner_name": "affinion",
                        "location": "#LAT_LON"
                    },
                    "skipStartup": true
                }, {
                    "id": 143,
                    "name": "TOBi",
                    "target": "https://www.vodafone.co.uk/vodafone-uk/app/webchat-ui/index.htm?VODapp-ui&isWebView=true",
                    "ssoEnabled": false,
                    "loginRequired": false,
                    "verificationRequired": false,
                    "connectionRequired": true,
                    "modifiedDatetime": 1665664437000,
                    "method": "GET",
                    "partner": "NUANCE",
                    "type": "INTERNAL_NO_HEADERS",
                    "parameters": {
                        "QUERY": {
                            "customerId": "#authtoken"
                        }
                    },
                    "requiredAuth": true,
                    "authParams": {
                        "third_partner_name": "NUANCE"
                    },
                    "skipStartup": false,
                    "alternateJourneyName": "TOBi_ANONYMOUS"
                }, {
                    "id": 189,
                    "name": "TOBI_BLACK",
                    "target": "https://www.vodafone.co.uk/vodafone-uk/app/Webchat-bt/index.htm?VODappbt",
                    "ssoEnabled": false,
                    "loginRequired": false,
                    "verificationRequired": false,
                    "connectionRequired": true,
                    "modifiedDatetime": 1665664425000,
                    "type": "INTERNAL_NO_HEADERS",
                    "parameters": {},
                    "requiredAuth": false,
                    "skipStartup": false
                }, {
                    "id": 205,
                    "name": "TOBi_ANONYMOUS",
                    "target": "https://www.vodafone.co.uk/vodafone-uk/app/webchat-ui/index.htm?VODapp-ui&isWebView=true",
                    "ssoEnabled": false,
                    "loginRequired": false,
                    "verificationRequired": false,
                    "connectionRequired": true,
                    "modifiedDatetime": 1665664425000,
                    "method": "GET",
                    "partner": "NUANCE",
                    "type": "INTERNAL_NO_HEADERS",
                    "parameters": {},
                    "requiredAuth": false,
                    "skipStartup": false
                }, {
                    "id": 270,
                    "name": "TOBI_TRADEIN",
                    "target": "https://www.vodafone.co.uk/contact-us-b2/index.htm",
                    "ssoEnabled": false,
                    "loginRequired": false,
                    "verificationRequired": false,
                    "connectionRequired": true,
                    "modifiedDatetime": 1665664436000,
                    "type": "INTERNAL_NO_HEADERS",
                    "parameters": {},
                    "requiredAuth": false,
                    "skipStartup": false
                }, {
                    "id": 306,
                    "name": "TOBI_LOA3",
                    "target": "https://www.vodafone.co.uk/vodafone-uk/app/webchat-ui/index.htm?VODapp-ui",
                    "ssoEnabled": true,
                    "loginRequired": false,
                    "verificationRequired": false,
                    "connectionRequired": true,
                    "modifiedDatetime": 1665664451000,
                    "method": "GET",
                    "partner": "NUANCE",
                    "type": "INTERNAL_NO_HEADERS",
                    "parameters": {
                        "QUERY": {
                            "loa": "3"
                        }
                    },
                    "requiredAuth": false,
                    "skipStartup": false,
                    "minIdTokenRequired": "LOA3",
                    "alternateMultiJourneyName": [{
                        "loaLevel": "0",
                        "journeyTarget": "TOBi_ANONYMOUS"
                    }, {
                        "loaLevel": "1",
                        "journeyTarget": "TOBi_ANONYMOUS"
                    }]
                }, {
                    "id": 201,
                    "name": "AND_WIFI_SETTING",
                    "target": "android.settings.WIFI_SETTINGS",
                    "ssoEnabled": false,
                    "loginRequired": false,
                    "verificationRequired": false,
                    "connectionRequired": false,
                    "modifiedDatetime": 1665664436000,
                    "type": "DEVICE_SETTINGS",
                    "parameters": {},
                    "requiredAuth": false,
                    "skipStartup": false
                }, {
                    "id": 202,
                    "name": "IOS_WIFI_SETTINGS",
                    "target": "App-Prefs:root=WIFI",
                    "ssoEnabled": false,
                    "loginRequired": false,
                    "verificationRequired": false,
                    "connectionRequired": false,
                    "modifiedDatetime": 1665664436000,
                    "type": "DEVICE_SETTINGS",
                    "parameters": {},
                    "requiredAuth": false,
                    "skipStartup": false
                }, {
                    "id": 268,
                    "name": "AND_SETTINGS",
                    "target": "android.settings.SETTINGS",
                    "ssoEnabled": false,
                    "loginRequired": false,
                    "verificationRequired": false,
                    "connectionRequired": false,
                    "modifiedDatetime": 1665664436000,
                    "type": "DEVICE_SETTINGS",
                    "parameters": {},
                    "requiredAuth": false,
                    "skipStartup": false
                }, {
                    "id": 269,
                    "name": "IOS_SETTINGS",
                    "target": "App-prefs:General",
                    "ssoEnabled": false,
                    "loginRequired": false,
                    "verificationRequired": false,
                    "connectionRequired": false,
                    "modifiedDatetime": 1665664436000,
                    "type": "DEVICE_SETTINGS",
                    "parameters": {},
                    "requiredAuth": false,
                    "skipStartup": false
                }]
            },
            "ERROR_CATALOG": {
                "screens": [{
                    "uid": "APP_RESET",
                    "title": "Hold on...",
                    "message": "We've noticed that there has been a change to your account. In order to keep using the app you'll need to reset it before continuing.",
                    "shortMessage": "Error - Please Retry",
                    "codes": [
                        4133,
                        2111,
                        2110
                    ],
                    "actions": [{
                        "name": "Reset my App",
                        "journey": "RESET_APP",
                        "dimmable": false
                    }],
                    "renderType": "native_fullscreen",
                    "forcedRenderType": true,
                    "showErrorCode": true,
                    "showErrorDetails": true
                }, {
                    "uid": "VOXI_CUSTOMER",
                    "title": "Welcome to Vodafone",
                    "message": "This app doesn't support customers who have one of our VOXI products. To manage your VOXI plan, sign in using the button below.",
                    "codes": [
                        4145
                    ],
                    "actions": [{
                        "name": "Go to VOXI",
                        "journey": "VOXI_ECARE",
                        "dimmable": false
                    }],
                    "renderType": "native_fullscreen",
                    "forcedRenderType": false,
                    "showErrorCode": true,
                    "showErrorDetails": true
                }, {
                    "uid": "NO_INTERNET_CONNECTION",
                    "title": "No internet connection",
                    "message": "We're sorry, we can't find an internet connection right now. Please check your settings and try again.",
                    "codes": [
                        2409,
                        2408,
                        2407,
                        2410
                    ],
                    "actions": [{
                        "name": "Retry",
                        "journey": "RETRY",
                        "dimmable": true
                    }, {
                        "name": "Never mind",
                        "journey": "BACK",
                        "dimmable": false
                    }],
                    "renderType": "native_fullscreen",
                    "forcedRenderType": false,
                    "showErrorCode": true,
                    "showErrorDetails": true
                }, {
                    "uid": "WIFI_ON",
                    "title": "Please disconnect your Wi-Fi",
                    "message": "So we can identify you, please log on to My Vodafone using the Vodafone mobile data network. You'll only need to do this once. My Vodafone will then remember your details so you can use Wi-Fi or mobile data network to connect",
                    "shortMessage": "Error - Please Retry",
                    "codes": [
                        2402
                    ],
                    "actions": [{
                        "name": "Retry",
                        "journey": "RETRY",
                        "dimmable": true
                    }],
                    "renderType": "native_fullscreen",
                    "forcedRenderType": false,
                    "showErrorCode": true,
                    "showErrorDetails": true
                }, {
                    "uid": "PIN_MISMATCH",
                    "title": "",
                    "message": "Your PINs don't match. Please check and try again.",
                    "shortMessage": "Error - Please Retry",
                    "codes": [
                        2103
                    ],
                    "actions": [{
                        "name": "OK",
                        "journey": "DISMISS",
                        "dimmable": false
                    }],
                    "renderType": "native_info",
                    "forcedRenderType": true,
                    "showErrorCode": true,
                    "showErrorDetails": true
                }, {
                    "uid": "ACCOUNT_LOCKED_UFL",
                    "title": "My Vodafone",
                    "message": "The incorrect login details were entered several times, so to protect your security we've temporarily locked your account.\n Please reset your password and we'll get you logged in again.",
                    "shortMessage": "Error - Please Retry",
                    "codes": [
                        4138
                    ],
                    "actions": [{
                        "name": "Reset password",
                        "journey": "ECARE_FORGOTPASSWORD",
                        "dimmable": false
                    }, {
                        "name": "Close",
                        "journey": "DISMISS",
                        "dimmable": false
                    }],
                    "renderType": "native_fullscreen",
                    "forcedRenderType": false,
                    "showErrorCode": true,
                    "showErrorDetails": true
                }, {
                    "uid": "SKIP_TO_JOURNEY_BASIC_DASHBOARD_HERITAGE",
                    "codes": [
                        8106
                    ],
                    "actions": [],
                    "renderType": "skip_to_journey",
                    "forcedRenderType": false,
                    "showErrorDetails": true,
                    "skipToJourney": "NON_VF_CUSTOMER_DASHBOARD_HERITAGE"
                }, {
                    "uid": "WEBVIEW_ERROR",
                    "title": "Sorry",
                    "message": "There's been a problem while loading this page. Please try again.",
                    "shortMessage": "Error - Please Retry",
                    "codes": [
                        6401,
                        6201
                    ],
                    "actions": [{
                        "name": "Retry",
                        "journey": "RETRY",
                        "dimmable": true
                    }, {
                        "name": "Never mind",
                        "journey": "BACK",
                        "dimmable": false
                    }],
                    "renderType": "native_fullscreen",
                    "forcedRenderType": false,
                    "showErrorCode": true,
                    "showErrorDetails": true
                }, {
                    "uid": "PASSWORD_CONFIRMATION_ERROR",
                    "title": "",
                    "message": "The passwords you’ve entered do not match. Please try again.",
                    "shortMessage": "Error - Please Retry",
                    "codes": [
                        2106
                    ],
                    "actions": [{
                        "name": "OK",
                        "journey": "DISMISS",
                        "dimmable": false
                    }],
                    "renderType": "native_info",
                    "forcedRenderType": true,
                    "showErrorCode": true,
                    "showErrorDetails": true
                }, {
                    "uid": "PIN_REGEX_ERROR",
                    "title": "",
                    "message": "Your PIN can’t use all repeated numbers, and they shouldn’t all be consecutive.",
                    "shortMessage": "Error - Please Retry",
                    "codes": [
                        2105
                    ],
                    "actions": [{
                        "name": "OK",
                        "journey": "DISMISS",
                        "dimmable": false
                    }],
                    "renderType": "native_info",
                    "forcedRenderType": true,
                    "showErrorCode": true,
                    "showErrorDetails": true
                }, {
                    "uid": "ACCOUNT_LOCKED",
                    "title": "My Vodafone",
                    "message": "The incorrect login details were entered several times, so to protect your security we’ve temporarily locked your account.\n Please reset your password and we’ll get you logged in again.",
                    "shortMessage": "Error - Please Retry",
                    "codes": [
                        4113,
                        8112
                    ],
                    "actions": [{
                        "name": "Reset password",
                        "journey": "FORGOT_PASSWORD",
                        "dimmable": false
                    }, {
                        "name": "Close",
                        "journey": "DISMISS",
                        "dimmable": false
                    }],
                    "renderType": "native_fullscreen",
                    "forcedRenderType": false,
                    "showErrorCode": true,
                    "showErrorDetails": true
                }, {
                    "uid": "INVALID_PIN",
                    "title": "",
                    "message": "There has been an issue validating your PIN. Please enter the details again.",
                    "shortMessage": "Error - Please Retry",
                    "codes": [
                        4115,
                        8110,
                        8111
                    ],
                    "actions": [{
                        "name": "OK",
                        "journey": "DISMISS",
                        "dimmable": false
                    }],
                    "renderType": "native_info",
                    "forcedRenderType": true,
                    "showErrorCode": true,
                    "showErrorDetails": true
                }, {
                    "uid": "TECHNICAL_DIFFICULTIES_WITH_RESET_OPTION",
                    "title": "Sorry",
                    "message": "We're having a few difficulties accessing your details at the moment. If the problem persists you may need to reset the My Vodafone App.",
                    "codes": [
                        5603
                    ],
                    "actions": [{
                        "name": "Retry",
                        "journey": "RETRY",
                        "dimmable": true
                    }, {
                        "name": "Reset my App",
                        "journey": "RESET_APP",
                        "dimmable": false
                    }],
                    "renderType": "native_fullscreen",
                    "forcedRenderType": false,
                    "showErrorCode": true,
                    "showErrorDetails": true
                }, {
                    "uid": "INVALID_USERNAME_PASSWORD",
                    "title": "",
                    "message": "Invalid username or password. Please try again.",
                    "shortMessage": "Error - Please Retry",
                    "codes": [
                        4601,
                        4114
                    ],
                    "actions": [{
                        "name": "OK",
                        "journey": "DISMISS",
                        "dimmable": false
                    }],
                    "renderType": "native_info",
                    "forcedRenderType": true,
                    "showErrorCode": true,
                    "showErrorDetails": true
                }, {
                    "uid": "NETWORK_OFFLINE",
                    "title": "Check your data connection",
                    "message": "It doesn't look like your mobile data connection is turned on. Please check and try again.",
                    "shortMessage": "You're Offline!",
                    "codes": [
                        2403
                    ],
                    "actions": [{
                        "name": "Retry",
                        "journey": "RETRY",
                        "dimmable": true
                    }, {
                        "name": "Never mind",
                        "journey": "BACK",
                        "dimmable": false
                    }],
                    "renderType": "native_fullscreen",
                    "forcedRenderType": false,
                    "showErrorCode": true,
                    "showErrorDetails": true
                }, {
                    "uid": "INVALID_EMAIL",
                    "title": "",
                    "message": "Invalid E-Mail format. Please try again.",
                    "shortMessage": "Error - Please Retry",
                    "codes": [
                        2104
                    ],
                    "actions": [{
                        "name": "OK",
                        "journey": "DISMISS",
                        "dimmable": false
                    }],
                    "renderType": "native_info",
                    "forcedRenderType": true,
                    "showErrorCode": true,
                    "showErrorDetails": true
                }, {
                    "uid": "DAL_EMPTY_MOBILE_NUMBERS_CUSTOMER",
                    "title": "We don't have your number",
                    "message": "We don't have a mobile phone number registered for you, so we can't send you your authorization code. Please get in touch to register one.",
                    "shortMessage": "Error - Please Retry",
                    "codes": [
                        4604,
                        4605
                    ],
                    "actions": [{
                        "name": "Chat with us",
                        "journey": "TOBi_ANONYMOUS",
                        "dimmable": false
                    }, {
                        "name": "Back to Log in",
                        "journey": "BACK",
                        "dimmable": false
                    }],
                    "renderType": "native_fullscreen",
                    "forcedRenderType": false,
                    "showErrorCode": true,
                    "showErrorDetails": true
                }, {
                    "uid": "APP_RESTART_JWT",
                    "title": "Restart Required",
                    "message": "Your login access has expired. Please restart the app to continue.",
                    "shortMessage": "Error - Please Retry",
                    "codes": [
                        4140,
                        2113,
                        4137,
                        3107
                    ],
                    "actions": [{
                        "name": "Restart to update",
                        "journey": "RESTART_JWT",
                        "dimmable": false
                    }],
                    "renderType": "native_fullscreen",
                    "forcedRenderType": true,
                    "showErrorCode": true,
                    "showErrorDetails": true
                }, {
                    "uid": "LARGE_ACCOUNT",
                    "title": "",
                    "message": "Larger accounts cannot switch between services in the app. To manage the other services in your account please visit our website.",
                    "shortMessage": "Error - Please Retry",
                    "codes": [
                        3601
                    ],
                    "actions": [{
                        "name": "Take me there",
                        "journey": "ECARE_LOGIN",
                        "dimmable": false
                    }],
                    "renderType": "native_fullscreen",
                    "forcedRenderType": false,
                    "showErrorCode": true,
                    "showErrorDetails": true
                }, {
                    "uid": "NO_SUBSCRIPTIONS_DATA",
                    "title": "",
                    "message": "Sorry, something went wrong with the loading of your account information.",
                    "shortMessage": "Error - Please Retry",
                    "codes": [
                        4602,
                        4603
                    ],
                    "actions": [{
                        "name": "Retry",
                        "journey": "RETRY",
                        "dimmable": true
                    }],
                    "renderType": "native_fullscreen",
                    "forcedRenderType": false,
                    "showErrorCode": true,
                    "showErrorDetails": true
                }, {
                    "uid": "FORCE_UPGRADE",
                    "title": "Update My Vodafone",
                    "message": "The version of My Vodafone you're using has now expired. \n \nYou'll need to download the new, improved version to continue using the app.",
                    "shortMessage": "Error - Please Retry",
                    "codes": [
                        2601,
                        3605
                    ],
                    "actions": [{
                        "name": "Update now",
                        "journey": "UPDATE_APP",
                        "dimmable": false
                    }],
                    "renderType": "native_fullscreen",
                    "forcedRenderType": false,
                    "showErrorCode": true,
                    "showErrorDetails": true
                }, {
                    "uid": "SOFT_UPGRADE",
                    "title": "Update My Vodafone",
                    "message": "Do more with the new, improved version of My Vodafone. Please update your app within {n} day(s).",
                    "shortMessage": "Error - Please Retry",
                    "codes": [
                        2602
                    ],
                    "actions": [{
                        "name": "Update Later",
                        "journey": "DISMISS",
                        "dimmable": false
                    }, {
                        "name": "Update now",
                        "journey": "UPDATE_APP",
                        "dimmable": false
                    }],
                    "renderType": "native_info",
                    "forcedRenderType": true,
                    "showErrorCode": true,
                    "showErrorDetails": true
                }, {
                    "uid": "SERVICE_BUSY",
                    "title": "Service Busy",
                    "message": "The My Vodafone service is really busy right now. Please try again when the button below becomes available.",
                    "shortMessage": "Error: Try Again",
                    "codes": [
                        4501,
                        4502,
                        5501,
                        5502
                    ],
                    "actions": [{
                        "name": "Retry",
                        "journey": "RETRY",
                        "dimmable": true
                    }, {
                        "name": "Never mind",
                        "journey": "BACK",
                        "dimmable": false
                    }],
                    "renderType": "native_fullscreen_timer",
                    "timerHeader": "Please retry in",
                    "timerValue": "10",
                    "timerFooter": "Seconds",
                    "forcedRenderType": false,
                    "showErrorCode": true,
                    "showErrorDetails": true
                }, {
                    "uid": "CONTACT_PERMISSION",
                    "title": "Contact Permission Problem",
                    "message": "You do not have sufficient contact permissions to continue - please get in touch with the account owner to update your contact permissions.",
                    "shortMessage": "Error - Please Retry",
                    "codes": [
                        4142,
                        4143
                    ],
                    "actions": [{
                        "name": "Never mind",
                        "journey": "BACK",
                        "dimmable": false
                    }],
                    "renderType": "native_fullscreen",
                    "forcedRenderType": true,
                    "showErrorCode": true,
                    "showErrorDetails": true
                }, {
                    "uid": "INVALID_TEMP_PASSWORD",
                    "title": "",
                    "message": "We didn't recognise the temporary password you entered. Please try again.",
                    "shortMessage": "Error - Please Retry",
                    "codes": [
                        4121,
                        4122
                    ],
                    "actions": [{
                        "name": "OK",
                        "journey": "DISMISS",
                        "dimmable": false
                    }],
                    "renderType": "native_info",
                    "forcedRenderType": true,
                    "showErrorCode": true,
                    "showErrorDetails": true
                }, {
                    "uid": "TOO_MANY_FAILING_MODULES",
                    "title": "App currently unavailable",
                    "message": "We hope to have the app working again soon.\nNeed some help? Ask us a question or talk to an adviser on our website.",
                    "shortMessage": "Error - Please Retry",
                    "codes": [
                        3203
                    ],
                    "actions": [{
                        "name": "Retry",
                        "journey": "RETRY",
                        "dimmable": true
                    }, {
                        "name": "Go to FAQs",
                        "journey": "NANOREP_FAQS",
                        "dimmable": false
                    }],
                    "renderType": "native_fullscreen_timer",
                    "timerHeader": "You can try again in",
                    "timerValue": "10",
                    "timerFooter": "Seconds",
                    "forcedRenderType": false,
                    "showErrorCode": true,
                    "showErrorDetails": true
                }, {
                    "uid": "APP_NOT_AVAILABLE_FOR_ACCOUNT",
                    "title": "Why can't I use the app?",
                    "message": "Unfortunately the My Vodafone app isn't currently available for your account.\n If you have a My Vodafone account you can access it via our website or visit our FAQs for further assistance",
                    "codes": [
                        4144
                    ],
                    "actions": [{
                        "name": "Go to My Vodafone website",
                        "journey": "ECARE_HOME_PAGE",
                        "dimmable": false
                    }, {
                        "name": "Go to FAQs",
                        "journey": "NANOREP_FAQS",
                        "dimmable": false
                    }],
                    "renderType": "native_fullscreen",
                    "forcedRenderType": true,
                    "showErrorCode": true,
                    "showErrorDetails": true
                }, {
                    "uid": "SKIP_TO_JORNEY_BASIC_DASHBOARD_VOXI",
                    "codes": [
                        8108
                    ],
                    "actions": [],
                    "renderType": "skip_to_journey",
                    "forcedRenderType": false,
                    "showErrorDetails": true,
                    "skipToJourney": "NON_VF_CUSTOMER_DASHBOARD_VOXI"
                }, {
                    "uid": "PIN_LOCKED",
                    "title": "My Vodafone",
                    "message": "The PIN you have entered does not match the one in our records. Please reset your PIN.",
                    "shortMessage": "Error - Please Retry",
                    "codes": [
                        4120
                    ],
                    "actions": [{
                        "name": "OK",
                        "journey": "RELOAD",
                        "dimmable": false
                    }],
                    "renderType": "native_fullscreen",
                    "forcedRenderType": false,
                    "showErrorCode": true,
                    "showErrorDetails": true
                }, {
                    "uid": "INVALID_CREDENTIALS",
                    "title": "My Vodafone",
                    "message": "Sorry, we couldn’t find the credentials you’ve provided. Please try again.",
                    "shortMessage": "Error - Please Retry",
                    "codes": [
                        4124,
                        4127
                    ],
                    "actions": [{
                        "name": "OK",
                        "journey": "DISMISS",
                        "dimmable": false
                    }],
                    "renderType": "native_info",
                    "forcedRenderType": false,
                    "showErrorCode": true,
                    "showErrorDetails": true
                }, {
                    "uid": "NON_VF_CUSTOMER",
                    "title": "Welcome to Vodafone",
                    "message": "As you don't have a mobile phone account with us, you won't be able to check your account details on this app. But you will be able to see them by going to My Vodafone.",
                    "shortMessage": "Error - Please Retry",
                    "codes": [
                        4132,
                        2101
                    ],
                    "actions": [{
                        "name": "Go to My Vodafone",
                        "journey": "ECARE_NON_VODAFONE_SIM",
                        "dimmable": false
                    }],
                    "renderType": "native_fullscreen",
                    "forcedRenderType": false,
                    "showErrorCode": true,
                    "showErrorDetails": true
                }, {
                    "uid": "DAL_OTP_EXPIRED",
                    "title": "Expired Security code",
                    "message": "The code you have entered has expired.\nPlease try again and we will send you a new one.",
                    "shortMessage": "Error - Please Retry",
                    "codes": [
                        4141
                    ],
                    "actions": [{
                        "name": "Resend",
                        "journey": "BACK_STEP",
                        "dimmable": false
                    }, {
                        "name": "Close",
                        "journey": "DISMISS",
                        "dimmable": false
                    }],
                    "renderType": "native_info",
                    "forcedRenderType": false,
                    "showErrorCode": true,
                    "showErrorDetails": true
                }, {
                    "uid": "NO_PROMOTION_DATA",
                    "title": "",
                    "message": "Sorry, something went wrong with the loading of your plan information.",
                    "shortMessage": "Error - Please Retry",
                    "codes": [
                        5604
                    ],
                    "actions": [{
                        "name": "Retry",
                        "journey": "RETRY",
                        "dimmable": true
                    }],
                    "renderType": "native_fullscreen",
                    "forcedRenderType": false,
                    "showErrorCode": true,
                    "showErrorDetails": true
                }, {
                    "uid": "DATA_CONN_LOST",
                    "title": "Data Connection Lost",
                    "message": "Please check your signal and try again when you've got a connection.",
                    "shortMessage": "You're Offline!",
                    "codes": [
                        2401
                    ],
                    "actions": [{
                        "name": "Retry",
                        "journey": "RETRY",
                        "dimmable": true
                    }, {
                        "name": "Never mind",
                        "journey": "BACK",
                        "dimmable": false
                    }],
                    "renderType": "native_fullscreen",
                    "forcedRenderType": false,
                    "showErrorCode": true,
                    "showErrorDetails": true
                }, {
                    "uid": "PROXY_DETECTED_AND_PRIVATE_RELAY",
                    "title": "Sorry we were unable to identify you.",
                    "message": "Please briefly connect to our network to access the My Vodafone App. This might mean turning off your current connection type such as Wi-Fi, VPN, or switching to your Vodafone data if you are on a dual sim phone. For iOS 15 users, please ensure you have iCloud Private Relay turned off in your device settings to enable this login.",
                    "codes": [
                        3102
                    ],
                    "actions": [{
                        "name": "Retry",
                        "journey": "RETRY",
                        "dimmable": true
                    }],
                    "renderType": "native_fullscreen",
                    "forcedRenderType": false,
                    "showErrorDetails": true
                }, {
                    "uid": "SKIP_TO_JORNEY_WARNING_CHANGE_PIN",
                    "codes": [
                        8115
                    ],
                    "actions": [],
                    "renderType": "skip_to_journey",
                    "forcedRenderType": false,
                    "showErrorDetails": true,
                    "skipToJourney": "WARNING_CHANGE_PIN"
                }, {
                    "uid": "SKIP_TO_JOURNEY_CLIENT_MIGRATE",
                    "codes": [
                        2117
                    ],
                    "actions": [],
                    "renderType": "skip_to_journey",
                    "forcedRenderType": false,
                    "showErrorDetails": true,
                    "skipToJourney": "APP_MIGRATION"
                }, {
                    "uid": "TECHNICAL_DIFFICULTIES_TIMED_RETRY",
                    "title": "Sorry",
                    "message": "We're having a few technical difficulties at the moment. We're working hard to get things sorted.",
                    "shortMessage": "Error - Please Retry",
                    "codes": [
                        8300,
                        5602,
                        4300,
                        3208
                    ],
                    "actions": [{
                        "name": "Retry",
                        "journey": "RETRY",
                        "dimmable": true
                    }, {
                        "name": "Never mind",
                        "journey": "BACK",
                        "dimmable": false
                    }],
                    "renderType": "native_fullscreen_timer",
                    "timerHeader": "You can try again in",
                    "timerValue": "10",
                    "timerFooter": "Seconds",
                    "forcedRenderType": false,
                    "showErrorCode": true,
                    "showErrorDetails": true
                }, {
                    "uid": "INVALID_USERNAME",
                    "title": "",
                    "message": "Invalid username. Please try again.",
                    "shortMessage": "Error - Please Retry",
                    "codes": [
                        4119,
                        4130
                    ],
                    "actions": [{
                        "name": "OK",
                        "journey": "DISMISS",
                        "dimmable": false
                    }],
                    "renderType": "native_info",
                    "forcedRenderType": true,
                    "showErrorCode": true,
                    "showErrorDetails": true
                }, {
                    "uid": "SMS_FAILURE",
                    "title": "",
                    "message": "Message failed to send",
                    "shortMessage": "Error - Please Retry",
                    "codes": [
                        2406
                    ],
                    "actions": [{
                        "name": "OK",
                        "journey": "DISMISS",
                        "dimmable": false
                    }],
                    "renderType": "native_info",
                    "forcedRenderType": true,
                    "showErrorCode": true,
                    "showErrorDetails": true
                }, {
                    "uid": "MISSING_IDSRV",
                    "title": "Please log in",
                    "message": "An error has occured and we need you to log in.",
                    "shortMessage": "Error - Please Retry",
                    "codes": [
                        2118
                    ],
                    "actions": [{
                        "name": "Log In",
                        "journey": "LOGIN",
                        "dimmable": false
                    }, {
                        "name": "Cancel",
                        "journey": "DISMISS",
                        "dimmable": false
                    }],
                    "renderType": "native_fullscreen",
                    "forcedRenderType": true,
                    "showErrorCode": true,
                    "showErrorDetails": true
                }, {
                    "uid": "INVALID_OTAC",
                    "title": "Incorrect Security code",
                    "message": "We did not recognise that security code.\nPlease retry or resend your code.",
                    "shortMessage": "Error - Please Retry",
                    "codes": [
                        4134
                    ],
                    "actions": [{
                        "name": "Try again",
                        "journey": "DISMISS",
                        "dimmable": false
                    }, {
                        "name": "Resend security code",
                        "journey": "RETRY",
                        "dimmable": false
                    }],
                    "renderType": "native_info",
                    "forcedRenderType": false,
                    "showErrorCode": true,
                    "showErrorDetails": true
                }, {
                    "uid": "JAILBROKEN_DEVICE",
                    "title": "WARNING",
                    "message": "Please be aware that the My Vodafone app will run on jailbroken devices but we do not recommend it. Vodafone will not be liable for any issues that may arise as a result of using the app on a jailbroken device.",
                    "shortMessage": "",
                    "codes": [
                        2108
                    ],
                    "actions": [{
                        "name": "OK",
                        "journey": "DISMISS",
                        "dimmable": false
                    }],
                    "renderType": "native_info",
                    "forcedRenderType": true,
                    "showErrorCode": true,
                    "showErrorDetails": true
                }, {
                    "uid": "APP_RESTART_JWT_CUSTOMER_FRIENDLY",
                    "title": "Sorry your login has timed out",
                    "message": "Please restart the app and try again.",
                    "shortMessage": "Error - Please Retry",
                    "codes": [
                        4123
                    ],
                    "actions": [{
                        "name": "Restart",
                        "journey": "RESTART_JWT",
                        "dimmable": false
                    }],
                    "renderType": "native_fullscreen",
                    "forcedRenderType": true,
                    "showErrorCode": true,
                    "showErrorDetails": true
                }, {
                    "uid": "IDENTIFICATION",
                    "title": "Sorry",
                    "message": "We're having some problems identifying you. Please try again",
                    "shortMessage": "Error - Please Retry",
                    "codes": [
                        5101,
                        5102
                    ],
                    "actions": [{
                        "name": "Retry",
                        "journey": "RETRY",
                        "dimmable": true
                    }],
                    "renderType": "native_fullscreen",
                    "forcedRenderType": false,
                    "showErrorCode": true,
                    "showErrorDetails": true
                }, {
                    "uid": "APP_RESTART_MSP",
                    "title": "Restart Required",
                    "message": "Your login access has expired. Please restart the app to continue.",
                    "codes": [
                        4101
                    ],
                    "actions": [{
                        "name": "Restart to update",
                        "journey": "RESTART_MSP",
                        "dimmable": false
                    }],
                    "renderType": "native_fullscreen",
                    "forcedRenderType": false,
                    "showErrorCode": true,
                    "showErrorDetails": true
                }, {
                    "uid": "SKIP_TO_JOURNEY_BASIC_DASHBOARD_BLOCKED",
                    "codes": [
                        8109
                    ],
                    "actions": [],
                    "renderType": "skip_to_journey",
                    "forcedRenderType": false,
                    "showErrorDetails": true,
                    "skipToJourney": "NON_VF_CUSTOMER_DASHBOARD_BLOCKED"
                }, {
                    "uid": "TECHNICAL_DIFFICULTIES",
                    "title": "Technical Difficulties",
                    "message": "We're having a few technical difficulties at the moment. We're working hard to get things sorted.",
                    "shortMessage": "Error - Please Retry",
                    "codes": [
                        5301,
                        4608,
                        4609,
                        2302,
                        2301,
                        4600,
                        4100,
                        6400,
                        3400,
                        4610,
                        4611,
                        4612,
                        4613,
                        7101,
                        4111,
                        5200,
                        2600,
                        2201,
                        2200,
                        4103,
                        4500,
                        4104,
                        4105,
                        4106,
                        4503,
                        2605,
                        8201,
                        6300,
                        2100,
                        3301,
                        3300,
                        5600,
                        4116,
                        5601,
                        4117,
                        5100,
                        3200,
                        4400,
                        8101,
                        8102,
                        8105,
                        6200,
                        8103,
                        8104,
                        3604,
                        3603,
                        3602,
                        2116,
                        3600,
                        2115,
                        2114,
                        5500,
                        5503,
                        3606,
                        5400,
                        3101,
                        3100,
                        2405,
                        2404,
                        2400,
                        4301,
                        6600,
                        8107,
                        6100,
                        4200,
                        6500,
                        3106,
                        3105,
                        3501,
                        3104,
                        3500,
                        3103
                    ],
                    "actions": [{
                        "name": "Retry",
                        "journey": "RETRY",
                        "dimmable": true
                    }, {
                        "name": "Never mind",
                        "journey": "BACK",
                        "dimmable": false
                    }],
                    "renderType": "native_fullscreen",
                    "forcedRenderType": false,
                    "showErrorCode": true,
                    "showErrorDetails": true
                }, {
                    "uid": "SUSPENSION",
                    "title": "Feature unavailable",
                    "message": "We hope to have it working again soon. Please try again later.",
                    "shortMessage": "",
                    "codes": [
                        3201
                    ],
                    "actions": [{
                        "name": "Go back",
                        "journey": "DISMISS",
                        "dimmable": false
                    }],
                    "renderType": "native_fullscreen",
                    "forcedRenderType": true,
                    "showErrorCode": true,
                    "showErrorDetails": true
                }, {
                    "uid": "PASSWORD_INSECURE_ERROR",
                    "title": "",
                    "message": "Please make sure your password is between 6 and 30 characters",
                    "shortMessage": "Error - Please Retry",
                    "codes": [
                        2107
                    ],
                    "actions": [{
                        "name": "OK",
                        "journey": "DISMISS",
                        "dimmable": false
                    }],
                    "renderType": "native_info",
                    "forcedRenderType": true,
                    "showErrorCode": true,
                    "showErrorDetails": true
                }, {
                    "uid": "ROOTED_DEVICE",
                    "title": "WARNING",
                    "message": "Please be aware that the My Vodafone app will run on rooted devices but we do not recommend it. Vodafone will not be liable for any issues that may arise as a result of using the app on a rooted device.",
                    "shortMessage": "",
                    "codes": [
                        2109
                    ],
                    "actions": [{
                        "name": "OK",
                        "journey": "DISMISS",
                        "dimmable": false
                    }],
                    "renderType": "native_info",
                    "forcedRenderType": true,
                    "showErrorCode": true,
                    "showErrorDetails": true
                }, {
                    "uid": "APP_SUSPENDED",
                    "title": "Sorry, the app's offline",
                    "message": "We're carrying out essential maintenance on our systems, but the app will be back online as soon as we're finished.",
                    "shortMessage": "Error: Try Again",
                    "codes": [
                        3204
                    ],
                    "actions": [{
                        "name": "Retry",
                        "journey": "RETRY",
                        "dimmable": true
                    }],
                    "renderType": "native_fullscreen",
                    "forcedRenderType": true,
                    "showErrorCode": true,
                    "showErrorDetails": true
                }, {
                    "uid": "NON_ACTIVE_REGISTERED_SUBSCRIPTION",
                    "title": "Inactive number",
                    "message": "Sorry, we can't send you your code because it looks like this number is inactive. Choose another phone number to get a new code. If this is your only registered number, chat to us.",
                    "shortMessage": "Error - Please Retry",
                    "codes": [
                        4135
                    ],
                    "actions": [{
                        "name": "Chat with us",
                        "journey": "TOBi_ANONYMOUS",
                        "dimmable": false
                    }, {
                        "name": "Choose another registered number",
                        "journey": "BACK_STEP",
                        "dimmable": false
                    }],
                    "renderType": "native_info",
                    "forcedRenderType": false,
                    "showErrorCode": true,
                    "showErrorDetails": true
                }, {
                    "uid": "APP_RESET_CUSTOMER_FRIENDLY",
                    "title": "Sorry your app needs a reset",
                    "message": "You may have logged in on a new device, or your login might have expired.",
                    "shortMessage": "Error - Please Retry",
                    "codes": [
                        4136
                    ],
                    "actions": [{
                        "name": "Reset my App",
                        "journey": "RESET_APP",
                        "dimmable": false
                    }],
                    "renderType": "native_fullscreen",
                    "forcedRenderType": true,
                    "showErrorCode": true,
                    "showErrorDetails": true
                }, {
                    "uid": "LOGIN_FAILURE",
                    "title": "Login failed",
                    "message": "We're experiencing a few technical difficulties at the moment and we couldn't log you in. Try again later.",
                    "shortMessage": "Error - Please Retry",
                    "codes": [
                        2102
                    ],
                    "actions": [{
                        "name": "OK",
                        "journey": "DISMISS",
                        "dimmable": false
                    }],
                    "renderType": "native_fullscreen",
                    "forcedRenderType": false,
                    "showErrorCode": true,
                    "showErrorDetails": true
                }, {
                    "uid": "CHANGE_TEMP_PASSWORD",
                    "title": "My Vodafone",
                    "message": "You've used a temporary password. Next, log in with it to set up a new one, and continue using the app.",
                    "shortMessage": "Error - Please Retry",
                    "codes": [
                        4139
                    ],
                    "actions": [{
                        "name": "Continue",
                        "journey": "LOGIN_ECARE_TEMP",
                        "dimmable": false
                    }, {
                        "name": "Cancel",
                        "journey": "DISMISS",
                        "dimmable": false
                    }],
                    "renderType": "native_fullscreen",
                    "forcedRenderType": false,
                    "showErrorCode": true,
                    "showErrorDetails": true
                }, {
                    "uid": "APP_NOT_AVAILABLE_FOR_NUMBER",
                    "title": "Sorry, this number is currently not supported by the app",
                    "message": "If you have another vodafone account,\ne.g. a personal mobile account,\nyou can still access it from this app.\n\nIf you've recently changed your account or SIM card please try an app reset.",
                    "shortMessage": "Error - Please Retry",
                    "codes": [
                        4131
                    ],
                    "actions": [{
                        "name": "Chat with us",
                        "journey": "TOBi_ANONYMOUS",
                        "dimmable": false
                    }, {
                        "name": "Reset my App",
                        "journey": "RESET_APP",
                        "dimmable": false
                    }, {
                        "name": "Log In",
                        "journey": "LOGIN_UFL",
                        "dimmable": false
                    }],
                    "renderType": "native_appscreen",
                    "forcedRenderType": true,
                    "showErrorCode": true,
                    "showErrorDetails": true
                }, {
                    "uid": "SKIP_TO_JOURNEY_LOGIN_TO_YOUR_ACCOUNT",
                    "codes": [
                        8113
                    ],
                    "actions": [],
                    "renderType": "skip_to_journey",
                    "forcedRenderType": false,
                    "showErrorDetails": true,
                    "skipToJourney": "TEMPORARY_PASSWORD"
                }]
            },
            "ILNG_FORM_DATA": {
                "content": {
                    "formData": {
                        "title": "%Phonebook_lookup%'s phone",
                        "formFields": [{
                            "id": "issueType",
                            "type": "string",
                            "title": "What are you having issues with?",
                            "required": true,
                            "options": [{
                                "title": "Calls",
                                "iconId": 35,
                                "nextQuestions": [
                                    "callsAffecting1"
                                ]
                            }, {
                                "title": "Data",
                                "iconId": 36,
                                "nextQuestions": [
                                    "dataAffecting1"
                                ]
                            }]
                        }, {
                            "id": "callsAffecting1",
                            "type": "string",
                            "title": "What happened?",
                            "required": true,
                            "options": [{
                                "title": "No signal",
                                "iconId": 37,
                                "nextQuestions": [
                                    "callsAffecting2"
                                ]
                            }, {
                                "title": "Call didn't connect",
                                "iconId": 38,
                                "nextQuestions": [
                                    "callsAffecting2"
                                ]
                            }, {
                                "title": "Call dropped\/Poor quality",
                                "iconId": 39,
                                "nextQuestions": [
                                    "callsAffecting2"
                                ]
                            }]
                        }, {
                            "id": "callsAffecting2",
                            "type": "string",
                            "title": "Where were you when it happened?",
                            "required": true,
                            "options": [{
                                "title": "At home",
                                "iconId": 40,
                                "nextQuestions": [
                                    "whendidithappencalendar",
                                    "submitfeedback"
                                ]
                            }, {
                                "title": "Out and about",
                                "iconId": 41,
                                "nextQuestions": [
                                    "whendidithappencalendar",
                                    "submitfeedback"
                                ]
                            }, {
                                "title": "Road\/Rail",
                                "iconId": 42,
                                "nextQuestions": [
                                    "whendidithappencalendar",
                                    "submitfeedback"
                                ]
                            }]
                        }, {
                            "id": "dataAffecting1",
                            "type": "string",
                            "title": "What happened?",
                            "required": true,
                            "options": [{
                                "title": "No data connection",
                                "iconId": 38,
                                "nextQuestions": [
                                    "dataAffecting2"
                                ]
                            }, {
                                "title": "Too slow",
                                "iconId": 44,
                                "nextQuestions": [
                                    "dataAffecting2"
                                ]
                            }]
                        }, {
                            "id": "dataAffecting2",
                            "type": "string",
                            "title": "Where were you when it happened?",
                            "required": true,
                            "options": [{
                                "title": "At home",
                                "iconId": 40,
                                "nextQuestions": [
                                    "whendidithappencalendar",
                                    "submitfeedback"
                                ]
                            }, {
                                "title": "Out and about",
                                "iconId": 41,
                                "nextQuestions": [
                                    "whendidithappencalendar",
                                    "submitfeedback"
                                ]
                            }, {
                                "title": "Road\/Rail",
                                "iconId": 42,
                                "nextQuestions": [
                                    "whendidithappencalendar",
                                    "submitfeedback"
                                ]
                            }]
                        }, {
                            "id": "whendidithappencalendar",
                            "type": "date",
                            "title": "When did it happen?",
                            "nextQuestions": [
                                "submitfeedback"
                            ]
                        }, {
                            "id": "submitfeedback",
                            "type": "button",
                            "title": "Before submitting your feedback, here's a reminder of the <u><a href=\"myvodafone:\/\/PRIVACY_SUPPLEMENT\">My Vodafone App Privacy Supplement<\/a><\/u>",
                            "buttonText": "Submit feedback"
                        }]
                    }
                }
            },
            "IDENTITY": {
                "content": {
                    "update_pin_mismatch_error_message": "Please try again",
                    "login_info_footer": "Once you've logged on, we'll only need your PIN, fingerprint or Face ID in the future to access these features.",
                    "otac_title": "Enter security code",
                    "update_pin_regex_error_title": "Error - Please Retry",
                    "otac_description": "When you receive the code, Please enter it here within 20 minutes.",
                    "log_out_description": "Are you sure you want to log out?",
                    "registered_numbers_send_button": "Send Code",
                    "upfront_welcome_login_button": "I’m an existing customer",
                    "pin_login_forgot_button": "Forgot your PIN?",
                    "biometrics_opt_out": "Not now, use PIN",
                    "update_pin_confirm_desc": "Make sure it’s memorable - we use it to check your identity when you contact us or log in.",
                    "update_pin_mismatch_error_title": "PINs do not match",
                    "changePin_title": "Create a new PIN",
                    "notifications_inbox_show_all_messages": "Show all messages",
                    "pin_setup_entry_new_pin_desc": "Confirm your existing Vodafone PIN or set a new one.<br\/>This PIN is used to confirm your identity when you contact us or log in to your account.",
                    "notifications_inbox_empty_messages": "No Messages",
                    "login_new_header": "We need to check that it's you before you can view secure information or make a purchase",
                    "title_login": "Log in to My Vodafone",
                    "pin_title_change_pin": "Change PIN",
                    "pin_setup_pin_title": "Setup PIN",
                    "login_password_hint": "Password",
                    "notifications_inbox_delete": "Delete",
                    "login_success_footer": "You can manage your Login details<br\/>in the app settings.",
                    "touch_id_popup_message": "Touch the home button to log in",
                    "update_pin_regex_error_message": "Your PIN can't use all repeated numbers, and they shouldn't all be consecutive.",
                    "upfront_select_subscription_confirm_btn": "Confirm",
                    "reset_password_success_message": "Thanks, we've sent a temporary password to your registered email address.\nPlease use this to log in to the app, before you set a new password.",
                    "or_word": "Or",
                    "confirmPin_title": "Re-enter your PIN",
                    "login_info_view_and_pay_bill": "View and pay your bill",
                    "thanks_for_verifying": "Thanks for verifying",
                    "upfront_wifi_error_desc": "For faster access to your account, \nplease turn off your Wi-Fi. \nOr, log in now.",
                    "pin_login_new_pin_desc": "Please enter the PIN you use to log in to My Vodafone, or use to chat with customer support.",
                    "reset_password_successfully_screen_title": "Congratulations",
                    "login_info_manage_extras": "Manage your extras",
                    "otac_continue_button": "Continue",
                    "update_pin_hint": "<u>Learn what makes a good PIN<\/u>",
                    "otac_go_back_button": "Go back",
                    "pin_login_continue_button": "Continue",
                    "update_pin_confirm_label": "Re-enter your new PIN",
                    "registered_numbers_header": "Where do you want to send your security code?",
                    "enter_pin": "Enter your PIN",
                    "update_pin_continue": "Continue",
                    "not_logged_in": "Not \n logged in",
                    "otac_footer": "<u>Can't get your security code?<\/u>",
                    "upfront_select_subscription_title": "Select a default service",
                    "touch_id_prompt_title": "Enable Touch ID",
                    "reset_password_new_password_title": "New password",
                    "login_can_registered_with_vodafone": "You can also <u>register<\/u> if you haven't been set up with an account yet",
                    "sms_permission_message_first_line": "My Vodafone will now request send\/view SMS permission on your device.",
                    "reset_password_cta": "Reset Password",
                    "changePin_alert": "Your PIN can't use all repeated numbers (e.g. 1111) and they shouldn't all be consecutive (e.g. 1234).",
                    "username_popup_login": "This might be your email address or a unique name you created when you registered with Vodafone",
                    "finger_print_popup_message": "Unlock restricted location",
                    "title_inbox_lis": "My Vodafone Messages",
                    "touch_id_toggle_message": "Switch on for fast authentication experience.",
                    "reset_password_confirm_password_title": "Confirm new password",
                    "confirmPin_confirm": "Confirm PIN",
                    "last_name": "Last name",
                    "resestpassword_new_password_popup_title": "New password",
                    "pin_button_continue": "Continue",
                    "update_pin_desc": "Make sure it’s memorable - we use it to check your identity when you contact us or log in.",
                    "login_reset_password": "Forgotten password?",
                    "changePin_enterPin": "Enter your new PIN",
                    "reset_password_invalid_password_message": "Please make sure your password is between 6 and 30 characters.",
                    "email_address": "Email address",
                    "reset_password_unmatching_passwords_message": "The passwords you've entered do not match. Please try again.",
                    "login_can_registered_with_vodafone_android": "You can also <u><a href='myvodafone:\/\/ECARE_REGISTRATION'>register<\/a><\/u> if you haven't\nbeen set up with an account yet.",
                    "resestpassword_temp_password_placeholder": "We've emailed this to you",
                    "login_info_upgrade_your_plan": "Upgrade\/change your plan",
                    "pin_change_entry_new_pin_desc": "This PIN is used to confirm your identity across all Vodafone channels (such as contact centre, desktop sites or Live Chat).<br\/><br\/><b>Please note:<\/b> this will reset your existing Vodafone account PIN",
                    "resestpassword_new_password_placeholder": "Between 6 and 30 characters",
                    "face_id_toggle": "Enable Face ID",
                    "login_info_title": "Improve your Vodafone experience \n by logging into your account.",
                    "show_all_message": "Show all message",
                    "upfront_wifi_error_title": "Please disconnect your Wi-Fi",
                    "login_preferences_setup_button_text": "OK, all done",
                    "upfront_select_subscription_account_number": "Account number: ",
                    "login_now": "Login now",
                    "login_success_desc": "Login successfully<br\/>completed",
                    "update_pin_success_desc": "Remember to keep your PIN safe and don't let anyone else know what it is.",
                    "changePin_alert_title": "Info on PIN",
                    "reset_password_successfully_screen_body": "You have successfully reset your My Vodafone password.",
                    "resestpassword_new_password_popup_reset_password": "Your password should be between 6 and 30 characters. To make it strong it should include at least 1 capital letter, number & special character.",
                    "user_name_reminder_hint_popup_button_txt": "OK",
                    "pin_entry_new_pin_title": "Enter your new PIN",
                    "pin_login_forgot_pin_body": "We need to log you out so you can start the PIN set-up process again.",
                    "face_id_prompt_title": "Face ID",
                    "login_preferences_setup_subtitle": "Speed up your log in process by setting a default method",
                    "finger_print_setting_message": "You can manage your login details in the app settings.",
                    "pin_login_title_label": "Enter your PIN",
                    "pin_setup_entry_new_pin_title": "Enter your PIN",
                    "notifications_inbox_title": "My Vodafone Messages",
                    "login_password_placeholder": "Your Saved Password",
                    "OTAC_code_parsing_regex": "[A-Z0-9]{5}\\W",
                    "pin_title_confirm_pin": "Confirm PIN",
                    "changePin_alert_button": "Okay",
                    "login_info_personalized_offers": "See personalised offers for you",
                    "login_preferences_setup_footer": "You can manage your Login details\nin the app settings.",
                    "logged_in": "Logged in",
                    "sms_permission_title": "<b>SMS Permission<\/b>",
                    "login_username_placeholder": "joebloggs88",
                    "login_reset_username": "Forgotten username?",
                    "confirmPin_continue": "Continue",
                    "reset_password_temporary_title": "Temporary password",
                    "verify_account": "Verify your account",
                    "update_pin_label": "Enter your new PIN",
                    "update_pin_confirm_title": "Re-enter your new PIN",
                    "hint_word": "Hint",
                    "pin_login_button": "Continue",
                    "upfront_welcome_title": "Are you a new customer?",
                    "changePin_continue": "Log in",
                    "sms_permission_message": "My Vodafone will now request send\/view SMS permission on your device. \n This will allow the app to pre-fill your security code from your device's SMS messages.",
                    "changePin_desc": "Confirm your existing Vodafone PIN or set a new one. \nThis PIN is used to confirm your identity when you contact us or log in to your account.",
                    "face_id_prompt_desc": "Access secure information faster by using facial recognition or your fingerprint, instead of PIN, to log in.",
                    "inbox_empty_messages": "No Messages",
                    "next": "Next",
                    "pin_entry_confirm_pin_title": "Enter your new PIN again",
                    "finger_print_auth_title": "Use Fingerprint ID for My Vodafone   ",
                    "pin_login_back_button": "Back",
                    "finger_print_popup_title": "Use Fingerprint ID for My Vodafone",
                    "resestpassword_confirm_new_password_placeholder": "Re-enter your password",
                    "login_success_title": "You are good to go",
                    "reset_password_change_password_cta": "Next",
                    "touch_id_prompt_desc": "Access secure information faster by using facial recognition or your fingerprint, instead of PIN, to log in.",
                    "update_pin_success_title": "Your PIN was <br\/>successfully updated",
                    "registered_numbers_footer": "<u>If you wish to add or change these numbers please contact us.<\/u>",
                    "pin_login_forgot_pin_button": "Forgotten your PIN?",
                    "login_info_view_current_charges": "View your current charges & usage",
                    "face_id_toggle_message": "Switch on for fast authentication experience.",
                    "touch_id_toggle_Enabled": " Enabled",
                    "update_pin_footer_repeated_hint": "Can’t use all repeated numbers e.g. 1111",
                    "first_name": "First name",
                    "notifications_delete_button": "Delete",
                    "finger_print_auth_message": "Touch the fingerprint sensor to log in",
                    "touch_id_popup_fallback": "Enter PIN",
                    "update_pin_footer_consecutive_hint": "Can’t all be consecutive e.g. 1234",
                    "upfront_welcome_desc": "Explore our latest deals and offers on phones, tablets and SIM only plans.",
                    "verify_user_name_forgot_username_cta": "Forgotten username",
                    "sms_permission_message_second_line": "This will allow the app to pre-fill your security code from your device's SMS messages.",
                    "update_pin_confirm_back": "Back",
                    "login_preferences_setup_title": "Login successful",
                    "reset_password_title": "Reset your password",
                    "update_pin_title": "Enter your new PIN",
                    "login_alert_button": "Okay",
                    "login_go": "Log in",
                    "reset_password_sub_details": "We will send you a temporary password to the email associated with this account",
                    "registered_numbers_title": "Further security verification required",
                    "pin_login_screen_title": "Login to My Vodafone",
                    "login_username_hint": "Enter username",
                    "touch_id_toggle": "Enable Touch ID",
                    "login_success_button": "OK, all done",
                    "email_address_placeholder": "jon.snow@gmail.com",
                    "otac_popup_message": "You can choose to send the security code to another registed number or contact us directly",
                    "reset_password_close_cta": "Close",
                    "memorable_word": "Your memorable word",
                    "otac_popup_title": "Can't get your security code?",
                    "update_pin_confirm_continue": "Continue",
                    "username": "Your username is:"
                }
            },
            "ILNG_SCREENS_CONTENT": {
                "content": {
                    "ilngScreens": {
                        "offlineScreen": [{
                            "title": "<b>Thanks for your feedback<\/b>",
                            "description": "We appreciate the irony, but as soon as you're back online, we'll submit your feedback for you. Thanks again for helping us build a bigger and better network for you.",
                            "displayType": "CARD",
                            "iconId": 45,
                            "actions": [{
                                "color": "#E60000",
                                "text": "Finish",
                                "journeyKey": "ILNG_SUBMIT",
                                "viewTag": "ILNG_SUBMIT",
                                "tapTag": "ILNG|ILNG_SUBMIT"
                            }],
                            "clickableLink": {
                                "color": "#E60000",
                                "text": "<u>See data bonus eligibility<\/u>",
                                "journeyKey": "ILNG_ELIGIBILITY"
                            },
                            "footer": "<b>In return, we'll even give you a data bonus.<\/b>",
                            "recurrence": false
                        }],
                        "startScreen": [{
                            "title": "<b>Call cut out? Slow connection?<\/b>",
                            "description": "We'd love to get your feedback in the unlikely event you're not satisfied, so we can continue to build an even bigger and better network for you.",
                            "displayType": "CARD",
                            "iconId": 34,
                            "actions": [{
                                "color": "#E60000",
                                "text": "Start",
                                "journeyKey": "ILNG_START",
                                "viewTag": "ILNG_START",
                                "tapTag": "ILNG|ILNG_START"
                            }],
                            "clickableLink": {
                                "color": "#E60000",
                                "text": "<u>Eligibility criteria<\/u>",
                                "journeyKey": "ILNG_ELIGIBILITY"
                            },
                            "footer": "<b>In return, we'll even give you a data bonus.<\/b>",
                            "recurrence": false
                        }]
                    }
                }
            },
            "CURRENT_CHARGES_CONTENT_STRINGS": {
                "content": {
                    "current_charges_screen_description": "This is the up-to-date, running total of your charges for this service. This total will increase if you have any further out of plan charges this month."
                }
            },
            "PRIVACY_SUPPLEMENTS_CONTENT_STRINGS": {
                "content": {
                    "setting_terms_copyright": "© Copyright 2016 Vodafone",
                    "setting_terms_content": "This app is provided by Vodafone Limited, Vodafone House, The Connection, Newbury, Berkshire, RG14 2FN, a company registered in England (number 1471587) with registered VAT number 569 9532 77.<br \/><br \/> <b>1. License<\/b><br>We grant you a non-exclusive, non-transferable license to use the app on one device that you own or control for personal non-commercial use only. There is no charge to you to either download or use this app.<br \/><br \/><b>2. Your responsibilities<\/b><br>You'll need to check that the app is compatible with your device prior to downloading.<br \/><br \/><b>3. Exclusion of warranties and limitation of liability<\/b><br>To the fullest extent permitted by applicable law, the app is provided to you 'as is', without support or maintenance. Neither we nor our licensors warrant that the app will meet your requirements or that the operation of the app will be uninterrupted or error free. To the extent permitted by law we and our licensors disclaim and exclude all warranties, representations, conditions and other terms of any kind, express or implied and whether arising by statute, common law or otherwise. In any event, our maximum liability and sole remedy to you is a refund of the price of the app (if any) at the time of your purchase. This clause does not affect your legal rights as a consumer.<br \/><br \/><b>4. Your information<\/b><br>In order for you to get the most out of My Vodafone we use information from your device and how you use the app. Data such as your location, the quality and use of your connectivity services as well as installed apps' data consumption help us to improve our service and tailor recommendations to you. Vodafone offers you choices and control over what information you are willing to share from your device. For more information, refer to settings and click on 'Privacy Policy'.<br \/><br \/><b>5. Data usage<\/b><br>Access to the My account part of this app is not chargeable, however, if you use the Wi-Fi Finder section it will access Google Maps which will fall into the same category of data usage as accessing Facebook or Twitter and you will be charged for data usage.",
                    "privacy_policy_content": {
                        "rawJson": [{
                            "title": "What information we collect",
                            "rows": [{
                                "title": "Information we collect",
                                "content": "To provide you with features of My Vodafone, to send you personalised recommendations as well as to help improve our products and services My Vodafone will share certain information from your device with us. This privacy supplement explains the information that is collected by My Vodafone and how it will be used. For further information on our Privacy Policy, please see <a href=\"myvodafone:\/\/VODAFONE_PRIVACY\">our main privacy policy page<\/a><br\/><br\/><b>Information about your interactions with us:<\/b><br\/><br\/>When you use the basic features of My Vodafone, for example check your billing details, view your data plans, view information about how much data a particular app is consuming, or interact with our customer care, information about such interactions is recorded on our servers.<br\/><br\/><b>Information about the quality and use of your connectivity services and apps:<\/b><br\/><br\/>Unless you have disabled the collection through the app settings, My Vodafone will regularly send us information about the coverage, connectivity and data usage relating to your connectivity services, information about the applications on your device, your location as well as information about your device, as explained in more detail below.<br\/><br\/><b>Coverage, connectivity and data usage<\/b><br\/><br\/>Information about network connectivity and quality for phone calls, internet and data services as experienced by you, as well as statistics about how much your device uses internet services and consumes data, such as:<br\/><br\/> • the percentage of time your phone is on the network<br\/> • signal strength<br\/> • areas of limited or no service<br\/> • quality of the mobile overage (2G, 3G, 4G)<br\/> • call duration<br\/> • how the call ends<br\/> • regular tests of whether your device can connect to the internet<br\/> • your upload and download speed<br\/> • how long it takes to set up a connection to the internet<br\/> • Wi-Fi connection quality and MAC addresses of the Wi-Fi hot spots your device can see, and how congested they are<br\/> • hourly data use<br\/> • how much data your phone uses when it's in standby mode<br\/> • how much data goes over Wi-Fi connections vs. the mobile network<br\/><br\/><b>Applications<\/b><br\/><br\/>Statistics about applications on your devices, such as:<br\/><br\/> • which apps are installed on your device<br\/> • which apps are started each day and for how long each app is used<br\/> • how much data is consumed by each app, how fast each app receives and transmits data and the type and quality of network used for the connection (for example cellular or Wi-Fi and related signal strength)<br\/><br\/><b>Device information<\/b><br\/><br\/>Technical information about your device, such as:<br\/><br\/> • phone brand and model<br\/> • operating system<br\/> • firmware version<br\/> • hardware capabilities<br\/> • language and locale<br\/> • battery state<br\/> • memory consumption<br\/> • time since last reboot<br\/> • advertising ID<br\/><br\/><b>Location information<\/b><br\/><br\/>Unless you have disabled the collection through the app settings, we collect your location data when we measure the items above. For example, we know your rough location from the phone mast and Wi-Fi hot spot your phone is using. When your phone or one of your apps is using GPS location data, we use that to assess location more precisely and sometimes your speed and direction of travel if available with GPS information.<br\/><br\/>Unless you have chosen otherwise, this information is collected with a personal identifier."
                            }, {
                                "title": "Usage of My Vodafone app",
                                "content": "Information about the performance and use of the My Vodafone app, for example when and how many times the app has been used, your choices and journeys within the app, app version, last update, application ID and device make and model."
                            }]
                        }, {
                            "title": "Information we don't collect",
                            "rows": [{
                                "title": "What information we don't collect",
                                "content": "We understand that some of the information we collect may be seen as sensitive. Therefore we have designed the app to reduce the sensitivity of the collected information. For example, we don’t collect information about:<br\/><br\/> • numbers you dial or that dial you;<br\/> • sender or receiver information of text messages, emails or Internet chat messaging on your device;<br\/> • any content of your communications, such as SMS, email or chat content or your browsing history;<br\/> • information about which features of the apps you use or what content you send, receive or otherwise consume through an app"
                            }]
                        }, {
                            "title": "How we use the information collected",
                            "rows": [{
                                "title": "How we use this information",
                                "content": "In addition to using the data to the extent necessary to deliver you with the services that you have requested, for example to show you how much data an app consumes, we use the data to help us improve our networks and services as well as to make personalised recommendations to you.<br\/><br\/><b>Helping us improve our networks and services<\/b><br\/><br\/>We analyse the collected information to diagnose connectivity, coverage or connection quality problems, understand connectivity needs from the usage of mobile data, Wi-Fi and apps, and use such insights to make improvements to our network and services.  This may include, for example<br\/><br\/> • Improving the quality of network through e.g. better understanding about the exact areas with low network performance or areas of high consumption of data which helps us prioritise new site implementation and otherwise improve the network performance;<br\/> • Helping us deal with performance issues caused by poorly performing devices;<br\/> • Improving our commercial models and offers based on improved understanding the patterns related to the use of apps and connection quality;<br\/> • Improving the performance and design of My Vodafone by understanding which features of the app are popular and how those features perform on different types of devices<br\/><br\/><b>Providing you with personalised assistance and recommendations<\/b><br\/><br\/>We may use the collected information to help us provide more personalised marketing communications to you. We may, for example<br\/><br\/> • Recommend a new or a different bundle for you based on the way you use your connectivity services;<br\/> • Help you manage your data plans by showing you which apps consume more data;<br\/> • Recommend upgrades to your device or promote accessories.<br\/><br\/>We may combine the collected information with other information we may hold about you.<br\/><br\/>Vodafone may collect a unique mobile device advertising ID, such as Apple's Identifier for Advertising ID (\"IDFA\") or Google Advertising ID (\"GAID\"), for interest based Ads. To opt out of Vodafone and other parties using this advertising ID to serve personalised interest based advertisements, please see the 'What choices do you have' section below.<br\/><br\/>If you have chosen to provide us with information without being personally identified, all personal identifiers are removed in the app before sending such information to Vodafone and we process the collected information anonymously. We do not intend to use the information to identify you or any other person personally and we have in place appropriate technical and organisational measures to prevent such from happening."
                            }]
                        }, {
                            "title": "Data protection and control",
                            "rows": [{
                                "title": "What choices do you have?",
                                "content": "Vodafone offers you choices and control over what information you are willing to share from your device. You may choose to:<br\/><br\/> • Disable the sending of personal information about the quality and use of your connectivity services, location and apps;<br\/> • Disable the sending of any information about the quality and use of your connectivity services, location and apps;<br\/> • Disable the sending of information about your use of My Vodafone;<br\/> • Disable push-notifications. NOTE: if you disable push-notifications, we may still send you marketing SMS or email, or conduct telemarketing if we have your permission to do so. You can get in touch with customer services through the <a href=\"myvodafone:\/\/VODAFONE_CONTACT_US\">contact us<\/a> page on our site to opt out of all marketing communications or to opt out of marketing in one of several ways (such as email, text, phone or post);<br\/> • To disable Vodafone and other parties from using the advertising ID associated to your device, to serve you with personalised adverts online, you can do this via your device settings. Click <a href=\"myvodafone:\/\/ANDROID_AD_PERSONALISATION\">here<\/a> for more information.<br\/><br\/>Remember that turning off these preferences will impact the level of personalisation we will be able to offer you."
                            }, {
                                "title": "How do you protect my data?",
                                "content": "Vodafone takes technical and organisational security measures as required by law and by industry standards to protect your personal data from unauthorised access, use or disclosure.  We take steps to ensure that we only use your personal information as described in this privacy notice and to honour the choices that you have made.  We only partner with service providers who contract to provide the same level of information security that you can expect from Vodafone."
                            }, {
                                "title": "For how long do you keep my data?",
                                "content": "Detailed information about the quality and use of your connectivity services, location and apps is kept no longer than 14 months after it has been collected.<br\/><br\/>Vodafone may retain aggregated and statistical reports that have been generated using the listed information for a longer period, but as these reports do not identify you as a user, they will not be used in a way that impacts your privacy.<br\/><br\/>For information about other data retention with Vodafone, please refer to <a href=\"myvodafone:\/\/VODAFONE_PRIVACY\">general privacy policy<\/a><br\/><br\/>The service is offered by Vodafone Limited, which is also the controller of your personal data.  If you have any queries in any aspect of this privacy supplement, please contact <a href=\"myvodafone:\/\/CUSTOMER_DATA_QUERY_EMAIL\">customerdataquery@vodafone.com<\/a>"
                            }]
                        }, {
                            "title": "More about privacy policy",
                            "rows": [{
                                "title": "Vodafone privacy policy",
                                "journey": "VODAFONE_PRIVACY"
                            }]
                        }]
                    },
                    "setting_terms_title": "Terms and conditions",
                    "privacy_policy_title": "App Privacy Supplement"
                }
            },
            "CTA_MAPPING_CONTENT": {
                "content": {
                    "upfront_wifi_error_retry_cta": {
                        "color": "#666666",
                        "text": "Retry",
                        "journeyKey": "RETRY",
                        "viewTag": "RETRY",
                        "tapTag": "RETRY|RETRY"
                    },
                    "upfront_forgot_password_cta": {
                        "color": "#BD0000",
                        "text": "Forgotten password?",
                        "journeyKey": "ECARE_FORGOTPASSWORD",
                        "viewTag": "settings|log in myvodafone",
                        "tapTag": "log in myvodafone|forgot password"
                    },
                    "forgot_password_cta": {
                        "color": "#BD0000",
                        "text": "Forgotten password?",
                        "journeyKey": "FORGOT_PASSWORD",
                        "viewTag": "FORGOT_PASSWORD",
                        "tapTag": "LOGIN|FORGOT_PASSWORD"
                    },
                    "upfront_forgot_username_cta": {
                        "color": "#BD0000",
                        "text": "Forgotten username?",
                        "journeyKey": "ECARE_FORGOTUSERNAME",
                        "viewTag": "settings|log in myvodafone",
                        "tapTag": "log in myvodafone|forgot username"
                    },
                    "upfront_welcome_non_vf_customer_cta": {
                        "color": "#FFFFFF",
                        "text": "See offers",
                        "journeyKey": "NON_VF_CUSTOMER_DASHBOARD",
                        "viewTag": "",
                        "tapTag": ""
                    },
                    "ecare_contact_us_cta": {
                        "color": "#BD0000",
                        "text": "Contact us",
                        "journeyKey": "TOBi_ANONYMOUS",
                        "viewTag": "CONTACT_US",
                        "tapTag": "CONTACT|CONTACT_US"
                    },
                    "welcome_login_cta": {
                        "color": "#E60000",
                        "text": "Log in",
                        "journeyKey": "LOGIN",
                        "viewTag": "welcome|login options",
                        "tapTag": "welcome|PAYM-login Optinons |Log in"
                    },
                    "forgot_pin_login_cta": {
                        "color": "#BD0000",
                        "text": "Login now",
                        "journeyKey": "LOGIN",
                        "viewTag": "LOGIN",
                        "tapTag": "log in"
                    },
                    "logout_cancel_cta": {
                        "color": "#FFFFF",
                        "text": "Cancel",
                        "journeyKey": "DISMISS",
                        "viewTag": "CONFIRM",
                        "tapTag": "LOGOUT_SCREEN|CONFIRM"
                    },
                    "logout_cta": {
                        "color": "#FFFFFF",
                        "text": "Log out",
                        "journeyKey": "LOGOUT",
                        "viewTag": "LOGOUT",
                        "tapTag": "LOGOUT|LOGOUT"
                    },
                    "onboarding_welcome_skip_login_cta": {
                        "color": "#00000000",
                        "text": "Skip Login",
                        "journeyKey": "DISCONNECT_WIFI",
                        "viewTag": "",
                        "tapTag": ""
                    },
                    "verify_user_name_forgot_password_cta": {
                        "color": "#BD0000",
                        "text": "Forgot password?",
                        "journeyKey": "FORGOT_PASSWORD",
                        "viewTag": "settings|forgot username|retrieval success",
                        "tapTag": "retrieval success|forgot password"
                    },
                    "forgot_username_cta": {
                        "color": "#BD0000",
                        "text": "Forgotten username?",
                        "journeyKey": "FORGOT_USERNAME",
                        "viewTag": "FORGOT_USERNAME",
                        "tapTag": "LOGIN|FORGOT_USERNAME"
                    },
                    "upfront_wifi_error_login_cta": {
                        "color": "#FFFFFF",
                        "text": "Log in",
                        "journeyKey": "LOGIN_DXIDM",
                        "viewTag": "LOGIN",
                        "tapTag": "LOGIN|LOGIN"
                    },
                    "android_upfront_wifi_error_turn_off_wifi_cta": {
                        "color": "#666666",
                        "text": "Turn off Wi-Fi",
                        "journeyKey": "AND_WIFI_SETTING",
                        "viewTag": "ANDROID_WIFI_SETTINGS",
                        "tapTag": "UPFRONT_WELCOME|ANDROID_WIFI_SETTINGS"
                    },
                    "upfront_welcome_login_cta": {
                        "color": "#666666",
                        "text": "Log in",
                        "journeyKey": "LOGIN_DXIDM",
                        "viewTag": "LOGIN",
                        "tapTag": "LOGIN|LOGIN"
                    },
                    "forgot_pin_login_presented_cta": {
                        "color": "#BD0000",
                        "text": "Login now",
                        "journeyKey": "LOGIN_PRESENTED",
                        "viewTag": "LOGIN",
                        "tapTag": "log in"
                    },
                    "verify_user_name_forgot_username_cta": {
                        "color": "#BD0000",
                        "text": "Forgot username?",
                        "journeyKey": "FORGOT_USERNAME",
                        "viewTag": "settings|reset your password",
                        "tapTag": "reset your password|forgot username"
                    },
                    "logout_confirm_cta": {
                        "color": "#666666",
                        "text": "Confirm",
                        "journeyKey": "RESET_APP",
                        "viewTag": "CONFIRM",
                        "tapTag": "LOGOUT_SCREEN|CONFIRM"
                    },
                    "ios_upfront_wifi_error_turn_off_wifi_cta": {
                        "color": "#666666",
                        "text": "Turn off Wi-Fi",
                        "journeyKey": "IOS_WIFI_SETTINGS",
                        "viewTag": "IOS_WIFI_SETTINGS",
                        "tapTag": "UPFRONT_WELCOME|IOS_WIFI_SETTINGS"
                    },
                    "otac_popup_back_button": {
                        "color": "#666666",
                        "text": "Choose another registered number",
                        "journeyKey": "BACK",
                        "viewTag": "BACK",
                        "tapTag": "OTAC_SCREEN|BACK"
                    },
                    "embedded_error_retry_cta": {
                        "text": "Retry",
                        "journeyKey": "RETRY"
                    },
                    "ecare_registration_cta": {
                        "color": "#BD0000",
                        "text": "Register now",
                        "journeyKey": "ECARE_REGISTRATION",
                        "viewTag": "settings|log in myvodafone",
                        "tapTag": "log in myvodafone|register now"
                    },
                    "onboarding_wifi_disconnected_cta": {
                        "color": "#E60000",
                        "text": "Continue",
                        "journeyKey": "RETRY",
                        "viewTag": "RETRY",
                        "tapTag": "RETRY|RETRY"
                    },
                    "login_cta": {
                        "color": "#BD0000",
                        "text": "Login now",
                        "journeyKey": "LOGIN",
                        "viewTag": "settings|forgot username|retrieval success",
                        "tapTag": "retrieval success|log in now"
                    },
                    "onboarding_welcome_login_cta": {
                        "color": "#FFFFFF",
                        "text": "Log In",
                        "journeyKey": "LOGIN_DXIDM",
                        "viewTag": "",
                        "tapTag": ""
                    },
                    "tobi_link": {
                        "journeyKey": "TOBi",
                        "viewTag": "tobi|view",
                        "tapTag": "tobi|cta"
                    },
                    "upfront_welcome_ecare_cta": {
                        "color": "#FFFFFF",
                        "text": "Explore Vodafone products",
                        "journeyKey": "ECARE_PRODUCTS",
                        "viewTag": "ECARE_PRODUCTS",
                        "tapTag": "UPFRONT_WELCOME|ECARE_PRODUCTS"
                    },
                    "otac_popup_chat_with_us_cta": {
                        "color": "#666666",
                        "text": "Chat with us",
                        "journeyKey": "TOBi_ANONYMOUS",
                        "viewTag": "TOBi_ANONYMOUS",
                        "tapTag": "OTAC_SCREEN|TOBi_ANONYMOUS"
                    }
                }
            },
            "ID_JOURNEYS": {
                "idJourneys": [{
                    "requiredAppState": {
                        "minTokenLevel": "LOA3",
                        "loa1Present": false,
                        "usernamePresent": false,
                        "uflEnabled": false
                    },
                    "journey": {
                        "id": 253,
                        "name": "UPFRONT_LOGIN_FIRST_TIME",
                        "target": "https://amrhossam.com/id2.html",
                        "connectionRequired": true,
                        "modifiedDatetime": 1616077203000,
                        "method": "GET",
                        "type": "ID_JOURNEY",
                        "parameters": {
                            "QUERY": {
                                "scope": "openid vf-profile vf-contact vf-account vf-subscription",
                                "response_type": "code",
                                "redirect_uri": "https:\/\/mvax.vodafone.co.uk\/app\/dxidmCallback",
                                "client_id": "mva-int1"
                            }
                        },
                        "webViewType": "visible",
                        "callBackRedirectUrl": "https:\/\/mvax.vodafone.co.uk\/app\/dxidmCallback",
                        "idTokenAPICall": true,
                        "sendSSOCookie": false,
                        "ssoCookieName": "idsrv",
                        "registerDeviceCall": true
                    }
                }, {
                    "requiredAppState": {
                        "minTokenLevel": "LOA3",
                        "loa1Present": true,
                        "usernamePresent": false,
                        "uflEnabled": false
                    },
                    "journey": {
                        "id": 256,
                        "name": "FULL_LOGIN_FIRST_TIME_SETUP",
                        "target": "https:\/\/login-int1.dx-idm.vodafone.co.uk\/connect\/authorize",
                        "connectionRequired": true,
                        "modifiedDatetime": 1621941172000,
                        "method": "GET",
                        "type": "ID_JOURNEY",
                        "parameters": {
                            "QUERY": {
                                "acr_values": "LOA:3 deviceId:<deviceId>",
                                "scope": "openid vf-profile vf-contact vf-account vf-subscription",
                                "response_type": "code",
                                "redirect_uri": "https:\/\/mvax.vodafone.co.uk\/app\/dxidmCallback",
                                "client_id": "mva-int1"
                            }
                        },
                        "webViewType": "visible",
                        "callBackRedirectUrl": "https:\/\/mvax.vodafone.co.uk\/app\/dxidmCallback",
                        "idTokenAPICall": true,
                        "sendSSOCookie": false,
                        "ssoCookieName": "idsrv",
                        "registerDeviceCall": false
                    }
                }, {
                    "requiredAppState": {
                        "minTokenLevel": "LOA3",
                        "loa1Present": true,
                        "usernamePresent": true,
                        "uflEnabled": true,
                        "pinLoginEnabled": true
                    },
                    "journey": {
                        "id": 257,
                        "name": "FULL_LOGIN_WITH_PASSWORD",
                        "target": "https:\/\/login-int1.dx-idm.vodafone.co.uk\/connect\/authorize",
                        "connectionRequired": true,
                        "modifiedDatetime": 1621941172000,
                        "method": "GET",
                        "type": "ID_JOURNEY",
                        "parameters": {
                            "QUERY": {
                                "login_hint": "<username>",
                                "acr_values": "change-username:true LOA:3 deviceId:<deviceId>",
                                "scope": "openid vf-profile vf-contact vf-account vf-subscription",
                                "response_type": "code",
                                "redirect_uri": "https:\/\/mvax.vodafone.co.uk\/app\/dxidmCallback",
                                "client_id": "mva-int1"
                            }
                        },
                        "webViewType": "visible",
                        "callBackRedirectUrl": "https:\/\/mvax.vodafone.co.uk\/app\/dxidmCallback",
                        "idTokenAPICall": true,
                        "sendSSOCookie": false,
                        "ssoCookieName": "idsrv",
                        "registerDeviceCall": false
                    }
                }, {
                    "requiredAppState": {
                        "minTokenLevel": "LOA3",
                        "loa1Present": true,
                        "usernamePresent": true,
                        "pinLoginEnabled": true
                    },
                    "journey": {
                        "id": 258,
                        "name": "FULL_LOGIN_WITH_PIN",
                        "target": "https:\/\/login-int1.dx-idm.vodafone.co.uk\/connect\/authorize",
                        "connectionRequired": true,
                        "modifiedDatetime": 1622125753000,
                        "method": "GET",
                        "type": "ID_JOURNEY",
                        "parameters": {
                            "QUERY": {
                                "login_hint": "<username>",
                                "acr_values": "LOA:3 deviceId:<deviceId> pin:<pin>",
                                "scope": "openid vf-profile vf-contact vf-account vf-subscription",
                                "response_type": "code",
                                "redirect_uri": "https:\/\/mvax.vodafone.co.uk\/app\/dxidmCallback",
                                "prompt": "none",
                                "client_id": "mva-int1"
                            }
                        },
                        "webViewType": "hidden",
                        "callBackRedirectUrl": "https:\/\/mvax.vodafone.co.uk\/app\/dxidmCallback",
                        "idTokenAPICall": true,
                        "sendSSOCookie": false,
                        "ssoCookieName": "idsrv",
                        "registerDeviceCall": false,
                        "errors": [{
                            "errorCode": "access_denied",
                            "errorDescription": "PIN_DECRYPTION_FAILED",
                            "errorCatalogueID": "8110"
                        }]
                    }
                }, {
                    "requiredAppState": {
                        "minTokenLevel": "LOA3",
                        "loa1Present": true,
                        "usernamePresent": true,
                        "pinPresent": true
                    },
                    "journey": {
                        "id": 259,
                        "name": "FULL_LOGIN_WITH_BIOMETRICS",
                        "target": "https:\/\/login-int1.dx-idm.vodafone.co.uk\/connect\/authorize",
                        "connectionRequired": true,
                        "modifiedDatetime": 1622125753000,
                        "method": "GET",
                        "type": "ID_JOURNEY",
                        "parameters": {
                            "QUERY": {
                                "login_hint": "<username>",
                                "acr_values": "LOA:3 deviceId:<deviceId> pin:<pin>",
                                "scope": "openid vf-profile vf-contact vf-account vf-subscription",
                                "response_type": "code",
                                "redirect_uri": "https:\/\/mvax.vodafone.co.uk\/app\/dxidmCallback",
                                "prompt": "none",
                                "client_id": "mva-int1"
                            }
                        },
                        "webViewType": "hidden",
                        "callBackRedirectUrl": "https:\/\/mvax.vodafone.co.uk\/app\/dxidmCallback",
                        "idTokenAPICall": true,
                        "sendSSOCookie": false,
                        "ssoCookieName": "idsrv",
                        "registerDeviceCall": false,
                        "errors": [{
                            "errorCode": "access_denied",
                            "errorDescription": "PIN_DECRYPTION_FAILED",
                            "errorCatalogueID": "8110"
                        }]
                    }
                }, {
                    "requiredAppState": {
                        "minTokenLevel": "LOA1",
                        "loa1Present": false,
                        "uflEnabled": true
                    },
                    "journey": {
                        "id": 255,
                        "name": "UPFRONT_LOGIN_RETURNING_USER",
                        "target": "https:\/\/login-int1.dx-idm.vodafone.co.uk\/connect\/authorize",
                        "connectionRequired": true,
                        "modifiedDatetime": 1622463980000,
                        "method": "GET",
                        "type": "ID_JOURNEY",
                        "parameters": {
                            "QUERY": {
                                "login_hint": "<username>",
                                "acr_values": "LOA:1 deviceId:<deviceId>",
                                "scope": "openid vf-profile vf-contact vf-account vf-subscription",
                                "response_type": "code",
                                "redirect_uri": "https:\/\/mvax.vodafone.co.uk\/app\/dxidmCallback",
                                "prompt": "none",
                                "client_id": "mva-int1"
                            }
                        },
                        "webViewType": "hidden",
                        "callBackRedirectUrl": "https:\/\/mvax.vodafone.co.uk\/app\/dxidmCallback",
                        "idTokenAPICall": true,
                        "sendSSOCookie": false,
                        "ssoCookieName": "idsrv",
                        "registerDeviceCall": false,
                        "errors": [{
                            "errorCode": "access_denied",
                            "errorDescription": "AUTH_NO_PROMPT_USR_PWD_REQUIRED",
                            "errorCatalogueID": "8107"
                        }, {
                            "errorCode": "access_denied",
                            "errorDescription": "AUTH_REQ_DEVICEID_INVALID",
                            "errorCatalogueID": "8106"
                        }]
                    }
                }, {
                    "requiredAppState": {
                        "minTokenLevel": "LOA1",
                        "loa1Present": true
                    },
                    "journey": {
                        "id": 254,
                        "name": "SOFT_LOGIN_RETURNING_USER",
                        "target": "https://www.amrhossam.com/id2.html",
                        "connectionRequired": true,
                        "modifiedDatetime": 1618733406000,
                        "method": "GET",
                        "type": "ID_JOURNEY",
                        "parameters": {
                            "QUERY": {
                                "acr_values": "LOA:1 encryptedMsisdn:<encryptedMSISDN> deviceId:<deviceId>",
                                "scope": "openid vf-profile vf-contact vf-account vf-subscription",
                                "response_type": "code",
                                "redirect_uri": "https:\/\/mvax.vodafone.co.uk\/app\/dxidmCallback",
                                "prompt": "none",
                                "client_id": "mva-int1"
                            }
                        },
                        "minIdTokenRequired": "LOA1",
                        "webViewType": "hidden",
                        "callBackRedirectUrl": "https:\/\/mvax.vodafone.co.uk\/app\/dxidmCallback",
                        "idTokenAPICall": true,
                        "sendSSOCookie": false,
                        "ssoCookieName": "idsrv",
                        "errors": [{
                            "errorCode": "access_denied",
                            "errorDescription": "AUTH_NO_PROMPT_USR_PWD_REQUIRED",
                            "errorCatalogueID": "8107"
                        }, {
                            "errorCode": "access_denied",
                            "errorDescription": "AUTH_REQ_DEVICEID_INVALID",
                            "errorCatalogueID": "8106"
                        }, {
                            "errorCode": "access_denied",
                            "errorDescription": "USR_AUTH_ACNT_TYPE_NOT_SPRTD_BY_RP",
                            "errorCatalogueID": "8109"
                        }, {
                            "errorCode": "access_denied",
                            "errorDescription": "USR_AUTH_ACNT_TYPE_NOT_SPRTD_BY_RP : Sorry, this account's type, category and subcategory combination is Partner-Managed, Business, Limited, which is not supported by My Vodafone App",
                            "errorCatalogueID": "8109"
                        }, {
                            "errorCode": "access_denied",
                            "errorDescription": "USR_SSO_ACNT_TYPE_NOT_SPRTD_BY_RP : Sorry, this account's type, category and subcategory combination is Small-SME, Business, Limited, which is not supported by My Vodafone App",
                            "errorCatalogueID": "8109"
                        }, {
                            "errorCode": "access_denied",
                            "errorDescription": "VOXI_NOT_SPRTD_BY_RP_MULTI_ACCOUNT_MULTI_SUBSCRIPTION",
                            "errorCatalogueID": "8108"
                        }, {
                            "errorCode": "access_denied",
                            "errorDescription": "VOXI_NOT_SPRTD_BY_RP_MULTI_ACCOUNT_MULTI_SUBSCRIPTION : My Vodafone App does not support VOXI customers",
                            "errorCatalogueID": "8108"
                        }, {
                            "errorCode": "access_denied",
                            "errorDescription": "VOXI_NOT_SPRTD_BY_RP_MULTI_ACCOUNT_SINGLE_SUBCSCRIPTION",
                            "errorCatalogueID": "8108"
                        }, {
                            "errorCode": "access_denied",
                            "errorDescription": "VOXI_NOT_SPRTD_BY_RP_MULTI_ACCOUNT_SINGLE_SUBCSCRIPTION : My Vodafone App does not support VOXI customers",
                            "errorCatalogueID": "8108"
                        }, {
                            "errorCode": "access_denied",
                            "errorDescription": "VOXI_NOT_SPRTD_BY_RP_SINGLE_ACCOUNT_MULTI_SUBSCRIPTION",
                            "errorCatalogueID": "8108"
                        }, {
                            "errorCode": "access_denied",
                            "errorDescription": "VOXI_NOT_SPRTD_BY_RP_SINGLE_ACCOUNT_MULTI_SUBSCRIPTION : My Vodafone App does not support VOXI customers",
                            "errorCatalogueID": "8108"
                        }, {
                            "errorCode": "access_denied",
                            "errorDescription": "VOXI_NOT_SPRTD_BY_RP_SINGLE_ACCOUNT_SINGLE_SUBCSCRIPTION",
                            "errorCatalogueID": "8108"
                        }, {
                            "errorCode": "access_denied",
                            "errorDescription": "VOXI_NOT_SPRTD_BY_RP_SINGLE_ACCOUNT_SINGLE_SUBCSCRIPTION : My Vodafone App does not support VOXI customers",
                            "errorCatalogueID": "8108"
                        }]
                    }
                }, {
                    "requiredAppState": {
                        "minTokenLevel": "LOA1"
                    },
                    "journey": {
                        "id": 251,
                        "name": "SOFT_LOGIN_FIRST_TIME",
                        "target": "https://amrhossam.com/id2.html",
                        "connectionRequired": true,
                        "modifiedDatetime": 1618733406000,
                        "method": "GET",
                        "type": "ID_JOURNEY",
                        "parameters": {
                            "QUERY": {
                                "acr_values": "LOA:1 encryptedMsisdn:<encryptedMSISDN> deviceId:<deviceId>",
                                "scope": "openid vf-profile vf-contact vf-account vf-subscription",
                                "response_type": "code",
                                "redirect_uri": "https:\/\/mvax.vodafone.co.uk\/app\/dxidmCallback",
                                "prompt": "none",
                                "client_id": "mva-int1"
                            }
                        },
                        "webViewType": "hidden",
                        "callBackRedirectUrl": "https:\/\/mvax.vodafone.co.uk\/app\/dxidmCallback",
                        "idTokenAPICall": true,
                        "sendSSOCookie": false,
                        "errors": [{
                            "errorCode": "access_denied",
                            "errorDescription": "AUTH_NO_PROMPT_USR_PWD_REQUIRED",
                            "errorCatalogueID": "8107"
                        }, {
                            "errorCode": "access_denied",
                            "errorDescription": "AUTH_REQ_DEVICEID_INVALID",
                            "errorCatalogueID": "8106"
                        }, {
                            "errorCode": "access_denied",
                            "errorDescription": "USR_AUTH_ACNT_TYPE_NOT_SPRTD_BY_RP",
                            "errorCatalogueID": "8109"
                        }, {
                            "errorCode": "access_denied",
                            "errorDescription": "USR_AUTH_ACNT_TYPE_NOT_SPRTD_BY_RP : Sorry, this account's type, category and subcategory combination is Partner-Managed, Business, Limited, which is not supported by My Vodafone App",
                            "errorCatalogueID": "8109"
                        }, {
                            "errorCode": "access_denied",
                            "errorDescription": "USR_SSO_ACNT_TYPE_NOT_SPRTD_BY_RP : Sorry, this account's type, category and subcategory combination is Small-SME, Business, Limited, which is not supported by My Vodafone App",
                            "errorCatalogueID": "8109"
                        }, {
                            "errorCode": "access_denied",
                            "errorDescription": "VOXI_NOT_SPRTD_BY_RP_MULTI_ACCOUNT_MULTI_SUBSCRIPTION",
                            "errorCatalogueID": "8108"
                        }, {
                            "errorCode": "access_denied",
                            "errorDescription": "VOXI_NOT_SPRTD_BY_RP_MULTI_ACCOUNT_MULTI_SUBSCRIPTION : My Vodafone App does not support VOXI customers",
                            "errorCatalogueID": "8108"
                        }, {
                            "errorCode": "access_denied",
                            "errorDescription": "VOXI_NOT_SPRTD_BY_RP_MULTI_ACCOUNT_SINGLE_SUBCSCRIPTION",
                            "errorCatalogueID": "8108"
                        }, {
                            "errorCode": "access_denied",
                            "errorDescription": "VOXI_NOT_SPRTD_BY_RP_MULTI_ACCOUNT_SINGLE_SUBCSCRIPTION : My Vodafone App does not support VOXI customers",
                            "errorCatalogueID": "8108"
                        }, {
                            "errorCode": "access_denied",
                            "errorDescription": "VOXI_NOT_SPRTD_BY_RP_SINGLE_ACCOUNT_MULTI_SUBSCRIPTION",
                            "errorCatalogueID": "8108"
                        }, {
                            "errorCode": "access_denied",
                            "errorDescription": "VOXI_NOT_SPRTD_BY_RP_SINGLE_ACCOUNT_MULTI_SUBSCRIPTION : My Vodafone App does not support VOXI customers",
                            "errorCatalogueID": "8108"
                        }, {
                            "errorCode": "access_denied",
                            "errorDescription": "VOXI_NOT_SPRTD_BY_RP_SINGLE_ACCOUNT_SINGLE_SUBCSCRIPTION",
                            "errorCatalogueID": "8108"
                        }, {
                            "errorCode": "access_denied",
                            "errorDescription": "VOXI_NOT_SPRTD_BY_RP_SINGLE_ACCOUNT_SINGLE_SUBCSCRIPTION : My Vodafone App does not support VOXI customers",
                            "errorCatalogueID": "8108"
                        }]
                    }
                }]
            },
            "GENERAL": {
                "content": {
                    "webview_grant_permissions_title": "Grant permission",
                    "nps_medallia_web_view_title": "Tell us what you think",
                    "embedded_error_timer_header": "You can try again in",
                    "embedded_error_timer_value": "10",
                    "start_cta": "Start",
                    "tobi_rider_text": "Hi, I’m TOBi, Vodafone's\nvirtual agent.\nHow can I help?",
                    "additional_charges_details_no_records_found": "No records found",
                    "error_retry_timer": "Error: Retry in #timer#",
                    "let_get_start": "Let's get started",
                    "login_to_start_cta": "Login to start",
                    "webview_grant_permissions_message": "In order to download a copy of your bill you will need to go into your device settings and enable the Storage permission for My Vodafone",
                    "embedded_error_timer_footer": "Seconds",
                    "webview_share_app_not_installed": "You don’t have the app installed, please gift the reward using a different method",
                    "embedded_error_message": "We're sorry, we can't find this information right now.",
                    "faqs_messaging_desc": "For the best chat experience and to view previous conversations,user our new messaging service.",
                    "faqs_messaging_can_not_login": "Can't log in? Ask us a question"
                }
            },
            "WELCOME_SUPPLEMENTS_CONTENT_STRINGS": {
                "content": {
                    "common_welcome_flow_permission_notifications_title": "Notifications",
                    "onboarding_connect_wifi_desc": "Loading your dashboard…",
                    "common_welcome_flow_subtitle": "Your account in your hands, 24\/7.<br>Swipe or tap to continue.",
                    "onboarding_welcome_title": "Log in to \nMy Vodafone",
                    "new_permission_screen_subtitle": "Before you get started, please grant us the permissions below in order to get the best possible app experience.",
                    "permission_contacts_title_welcome": "Contact Book",
                    "onboarding_wifi_disconnected_title": "Wi-Fi disconnected",
                    "permission_notifications_title_welcome": "Notifications",
                    "new_permission_screen_title": "Enhance your\nVodafone experience",
                    "common_welcome_flow_permission_privacy_description": "You can change what information we collect and how we communicate via app settings",
                    "new_welcome_screen_enhance_sub_title": "Improve your Vodafone experience by\nlogging in to your account.",
                    "setting_terms_agree_cta": "Ok",
                    "permission_location_body_welcome": "To help us understand and improve your Vodafone experience, location data may be collected even when you are not using the app to detect weak network coverage. This also allows us to give you more relevant promotions and offers.",
                    "setting_terms_agree": "I have read and agree to the terms and conditions",
                    "new_welcome_back_screen_go_to_setting_android": "If you want to change any permissions, please go into your <u><a href='myvodafone:\/\/DEVICE_SETTINGS'>device settings<\/a><\/u>.",
                    "common_welcome_flow_permission_privacy_title": "Privacy",
                    "welcome_flow_title": "Welcome to\nMy Vodafone",
                    "onboarding_disconnect_wifi_desc": "To skip login, we need you to disconnect from Wi-Fi. This will only take a second and helps us verify your account with us.",
                    "permission_usage_body_welcome": "To collect data about your usage in order to optimise network performance.",
                    "welcome_flow_body": "Your account in\nyour hands, 24\/7",
                    "permission_contacts_body_welcome": "To personalise your app experience with a photo and name of anyone on your account, straight from your contact book.",
                    "common_welcome_flow_permission_location_title": "Location",
                    "new_welcome_back_continue_cta": "Continue",
                    "welcome_flow_footer": "By tapping \"Get started\" you allow Vodafone to collect and use information as stated in Settings, and agree to the <u><a href='myvodafone:\/\/PRIVACY_SUPPLEMENT'>App Privacy Supplement<\/a><\/u> and <u><a href='myvodafone:\/\/TERMS_AND_CONDITIONS_SETTINGS'>Terms & Conditions.<\/a><\/u>",
                    "common_welcome_flow_permission_title": "One last thing",
                    "common_welcome_flow_privacy_subtitle": "Please agree to our <u><a href='myvodafone:\/\/PRIVACY_SUPPLEMENT'>App Privacy Supplement<\/a><\/u> <br> and <u><a href='myvodafone:\/\/TERMS_AND_CONDITIONS_SETTINGS'>Terms & Conditions<\/a><\/u> before continuing.",
                    "welcome_flow_privacy_update_body": "We've updated our App Privacy Supplement and Terms & Conditions. You can view these using the links below",
                    "common_welcome_flow_privacy_agreement_text": "I agree to the App Privacy<br>Supplement and Terms & Conditions",
                    "user_tutorials_dismiss_cta": "Close",
                    "privacy_body_welcome": "<b>Network optimisation<\/b><br><br>By collecting data including location and the performance of your phone we can improve the service we offer to everyone. This data is not linked back to you in any way.<br><br><b>Tailored service and recommendations<\/b><br><br>We can make personal recommendations and tailor our service based on your location, the quality and use of your connectivity services.",
                    "common_welcome_flow_privacy_radio_button_text": "Please agree to the Terms and<br>Conditions before continuing",
                    "new_welcome_screen_enhance_title": "Enhance your\nVodafone experience",
                    "onboarding_disconnect_wifi_title": "Disconnect from Wi-Fi",
                    "new_welcome_back_screen_sub_title": "We see you have used this app before, so your original permissions choices are still the same",
                    "common_welcome_flow_button_text": "Continue",
                    "common_welcome_flow_title": "Welcome to My Vodafone",
                    "onboarding_welcome_desc": "Log in to access My Vodafone. If your phone is using a Vodafone SIM card, you can turn off Wi-Fi for a faster log in.",
                    "new_welcome_back_screen_go_to_setting": "If you want to change any permissions, please go into your <u>device settings<\/u>.",
                    "privacy_title_welcome": "Privacy",
                    "common_welcome_flow_permission_subtitle": "To get the most from the My Vodafone App,<br>we'd like to ask for some permissions",
                    "permission_phone_title_welcome": "Phone Calls",
                    "new_permission_screen_footer_text": "You can change what information we collect and how we communicate at any time via app settings.",
                    "welcome_flow_privacy_update_footer": "By tapping \"Continue\" you allow Vodafone to collect and use information as stated in Settings, and agree to the <u><a href='myvodafone:\/\/PRIVACY_SUPPLEMENT'>App Privacy Supplement<\/a><\/u> and <u><a href='myvodafone:\/\/TERMS_AND_CONDITIONS_SETTINGS'>Terms & Conditions.<\/a><\/u>",
                    "welcome_flow_continue_button": "Continue",
                    "permission_location_title_welcome": "Location",
                    "onboarding_connect_wifi_title": "You can now connect to Wi-Fi again",
                    "common_welcome_flow_permission_notifications_description": "We send these when you'll run out<br>of data or when you next bill is due",
                    "new_welcome_screen_no_thanks_cta": "No thanks",
                    "permission_phone_body_welcome": "To understand the phone identity and so you can use our in app network speed checker.",
                    "permission_usage_title_welcome": "Usage",
                    "common_welcome_flow_permission_location_description": "This help us improve the Vodafone<br>network, bringing you even better<br>coverage",
                    "onboarding_wifi_disconnected_desc": "Tap below to skip log in. You can connect to Wi-Fi again once your dashboard has loaded.",
                    "new_welcome_back_screen_title": "Welcome back!",
                    "permission_notifications_body_welcome": "To receive push notifications from Vodafone and use some of our help and support messaging.",
                    "common_welcome_flow_privacy_title": "Before we get<br>you started...",
                    "welcome_flow_start_button": "Get started",
                    "new_welcome_screen_can_register_with_vodafone": "You can also <u><a href='myvodafone:\/\/ECARE_REGISTRATION'>register<\/a><\/u> if you haven't\nbeen set up with an account yet.",
                    "new_permission_screen_cta": "Continue"
                }
            },
            "HOW_TO_UPGRADE_CONTENT_STRINGS": {
                "content": {
                    "how_to_upgrade_screen_title": "How to upgrade"
                }
            },
            "NON_VF_CUSTOMERS_DASHBOARD": {
                "content": {
                    "non_vf_customers_dashboard_section5": "{\"items\":[{\"iconId\":10108,\"title\":\"Online assistance\",\"subtitle\":\"Our virtual chat assistant is available to help you 24\/7\",\"journey\":\"ONLINE_ASSISTANCE\"},{\"iconId\":10109,\"title\":\"Free home delivery\",\"subtitle\":\"Paid for same day delivery options\",\"journey\":\"HOME_DELIVERY\"},{\"iconId\":10110,\"title\":\"14 day returns\",\"subtitle\":\"Hassle-free returns with no cancellation fee\",\"journey\":\"ORDERS_RETURNS\"},{\"iconId\":10111,\"title\":\"UK's best mobile network\",\"subtitle\":\"Find out how we're keeping the UK connected\",\"journey\":\"UK_MOBILE_NETWORK\"}]}",
                    "non_vf_customers_dashboard_section4": "{\"title\":\"VeryMeRewards\",\"description\":\"From savings on cinema tickets to your morning coffee on us - there's bound to be something you love with VeryMe Rewards on the My Vodafone app.\",\"journey\":\"NON_VF_VERYME_REWARDS\",\"backgroundImage\":10107}",
                    "non_vf_customers_dashboard_section3": "{\"title\":\"Discover\",\"items\":[{\"bannerTitle\": \" \",\"body\":\"<b>Find out if you’re guaranteed a saving on the new Samsung S30 with our Trade-in Tool<\/b>\",\"image\":10115,\"buttons\":[{\"text\":\"Find out more\",\"journeyKey\":\"TRADE_IN\"}]}, {\"bannerTitle\": \"Keep Connecting\",\"body\":\"<b>Maintaining the reliability and capacity of our network is our number one priority<\/b>\",\"image\":10105,\"buttons\":[{\"text\":\"Find out more\",\"journeyKey\":\"UK_MOBILE_NETWORK\"}]}, {\"bannerTitle\": \"5G\",\"body\":\"<b>The newest, fastest generation of mobile networking.<\/b>\",\"image\":10106,\"buttons\":[{\"text\":\"Find out more\",\"journeyKey\":\"UK_MOBILE_NETWORK_5G\"}]}]}",
                    "non_vf_customers_dashboard_section2": "{\"items\":[{\"iconId\":1056,\"text\":\"Pay monthly phones\",\"journeyKey\":\"PAYM_DEALS\"}, {\"iconId\":1059,\"text\":\"SIM only deals\",\"journeyKey\":\"SIM_ONLY_DEALS\"},{\"iconId\":1053,\"text\":\"Broadband\",\"journeyKey\":\"BROADBAND_DEALS\"}, {\"iconId\":10116,\"text\":\"Trade-in Tool\",\"journeyKey\":\"TRADE_IN\"}]}",
                    "non_vf_customers_dashboard_section1": "{\"backgroundImage\":10103, \"title\":\"Vodafone Together\", \"subtitle\":\"Unlimited home broadband and unlimited mobile data in one great deal.\", \"journey\": \"NON_VF_VODAFONE_TOGETHER\"}"
                }
            },
            "LATEST_BILLS_CONTENT_STRINGS": {
                "content": {
                    "latest_bills_screen_title": "Latest bills",
                    "latest_bills_graph_comparison_currency": "£",
                    "latest_bills_no_bills": "You don't have any bills yet. When it's available, you'll see it here",
                    "latest_bills_previous_bills_separator": "Previous bills",
                    "latest_bills_graph_comparison_title": "Your account spend in the last \n %bills_count% months:"
                }
            },
            "SALUTATION_VOVS": {
                "notifications": [{
                    "id": 11,
                    "title": "Good morning %address_book_name%",
                    "message": "Welcome to <b>My Vodafone<\/b>",
                    "priority": 100,
                    "dismissDuration": 14,
                    "dismissDurationUnit": "MONTHS",
                    "renderType": "Salutations",
                    "triggerType": "TIME",
                    "triggerText": "00:00"
                }, {
                    "id": 12,
                    "title": "Good afternoon %address_book_name%",
                    "message": "Welcome to <b>My Vodafone<\/b>",
                    "priority": 100,
                    "dismissDuration": 14,
                    "dismissDurationUnit": "MONTHS",
                    "renderType": "Salutations",
                    "triggerType": "TIME",
                    "triggerText": "12:00"
                }, {
                    "id": 13,
                    "title": "Good evening %address_book_name%",
                    "message": "Welcome to <b>My Vodafone<\/b>",
                    "priority": 97,
                    "dismissDuration": 14,
                    "dismissDurationUnit": "MONTHS",
                    "renderType": "Salutations",
                    "triggerType": "TIME",
                    "triggerText": "19:00"
                }]
            },
            "PRODUCTS_AND_SERVICES_CONTENT_STRINGS": {
                "content": {
                    "ERROR_FETCH_UPGRADE_INFO": "Error fetching upgrade info. Retry?",
                    "products_and_services_title": "Plan overview"
                }
            },
            "RED_SHARER_CONTENT_STRINGS": {
                "content": {
                    "red_sharer_successfully_sent_text": "The new data limit is being updated. This usually takes 5 minutes, but can take up to 24 hours.",
                    "red_sharer_set_limit_sms": "Send text to set new data limit",
                    "red_sharer_successfully_sent_title": "Text sent to %sms_tel%",
                    "red_sharer_no_limit_set": "No data limit set",
                    "red_sharer_off": "Off",
                    "red_plus_current_allowance": "You currently have",
                    "red_plus_allowance_header": "Group Data",
                    "red_sharer_gb": "GB",
                    "red_plus_title": "Manage group data",
                    "red_sharer_please_note_text": "Please allow up to 24 hours for changes to take effect"
                }
            },
            "NETWORK_SATISFACTION": {
                "content": {
                    "ILNG_FORM_DATA_TITLE": "%Phonebook_lookup%'s phone",
                    "contact_placeholder": "%Phonebook_lookup%'s phone",
                    "ilng_feedback_last_submitted": "Feedback last submitted",
                    "ilng_need_more_help": "<b>Need support?<\/b>",
                    "ILNG_FORM_SECONDARY_TITLE": "#phonenumber#",
                    "network_satisfaction_header_title": "Network Guarantee",
                    "finish_ilng_need_more_help": "<b>Need support?<\/b>",
                    "notification_feedback_message": "Network feedback form is currently in progress",
                    "ilng_need_more_help_text": "If you're struggling with an ongoing network issue, please contact our support team, any time 24\/7",
                    "finish_ilng_need_more_help_text": "If you're struggling with an ongoing network issue, please contact our support team, any time 24\/7",
                    "finish_ilng_feedback_last_submitted": "Feedback last submitted"
                }
            },
            "SETTING": {
                "content": {
                    "permission_phone_body": "The app requests this permission to understand the phone identity and is required to use the network speed checker in the app.",
                    "permission_storage_title": "Photos, media and files",
                    "device_permission_status_enabled": "Enabled",
                    "permission_contacts_body": "The app requests this permission to show images and names from your contact book if their number appears as part of the subscriptions you can manage in the app.",
                    "login_options_touch_id_desc": "Use Touch ID instead of your PIN to access secure information, such as bills, switching between accounts, or upgrading your device. (You'll be prompted to login first, if you aren't already.)",
                    "login_options_face_id_toggle_disabled": "Disable Face ID?",
                    "settings_fingerprint_toggle_enabled": "Turn off Fingerprint authentication",
                    "login_options_enable_fingerprint": "Enable Fingerprint login?",
                    "permission_phone_title": "Make and manage phone calls",
                    "login_options_touch_id_toggle_enabled": "Enable Touch ID?",
                    "permission_contacts_title": "Contacts",
                    "permission_dialog_header": "My Vodafone App Permissions",
                    "title_app_permissions_settings": "Device permissions",
                    "settings_setup_your_pin_button": "Set up your PIN",
                    "settings_pin_reset": "Your PIN has been reset",
                    "login_options_face_id_desc": "Use Face ID instead of your PIN to access secure information, such as bills, switching between accounts, or upgrading your device. (You'll be prompted to login first, if you aren't already.)",
                    "permission_location_title": "Device location",
                    "Reset_app_content": "To help us make things faster and easier your phone number is stored in the My Vodafone app on your device. But sometimes this causes difficulties if you change device or phone number.\n\nIf you're having problems using this app or accessing your account, a reset can help resolve this, but you will be asked to provide your login details again.\n\nIf you would like to remove any cookies the app has stored, you also can do this with a reset.",
                    "login_options_set_pin_button": "Set up your PIN",
                    "login_options_rest_pin_button": "Reset your PIN",
                    "login_options_login_preference_desc": "Select a default method to log in when accessing secure information such as bills, switching between accounts, or upgrading your device.",
                    "permission_click_string": " <u>Click here<\/u> to configure this permission",
                    "settings_your_pin_has_been_setup": "Your PIN has been set up",
                    "permission_notifications_body": "Notifications may include alerts, sounds and icon badges.",
                    "login_options_login_preference_usernameAndPassword_method": "Username and password",
                    "my_vodafone_app_version": "App Version: %app_version%",
                    "Reset_app_popup": "Are you sure you want to reset the app?",
                    "settings_fingerprint_toggle_disabled": "Turn on Fingerprint authentication",
                    "permission_location_body": "The app requests your permission to collect location data, to help us understand and improve your Vodafone experience. Location data may be collected even when you are not using the app to detect weak network coverage. This also allows us to give you more relevant promotions and offers.",
                    "login_options_login_preference_touchID_method": "Touch ID",
                    "Reset_app_cancel": "Cancel",
                    "device_permission_location_status_enabled": "Device Location Services enabled",
                    "settings_screen_title": "Settings",
                    "settings_permission_configure_cta": "Configure permission",
                    "settings_pin_management_title": "PIN management",
                    "device_permission_status_disabled": "Disabled",
                    "permission_storage_body": "The app requests this permission to download your bill to the device.",
                    "permission_click_string_android": "<a href=\"\"> Click here<\/a> to configure this permission",
                    "permission_usage_title": "Usage access",
                    "premission_dialog_continue": "Continue",
                    "login_options_login_preference_title": "Default Login Method",
                    "login_options_login_preference_faceID_method": "Face ID",
                    "login_options_pin_management_title": "PIN management",
                    "settings_reset_app_title": "Reset the app",
                    "Reset_app_cta": "Reset",
                    "login_options_login_preference_PIN_method": "PIN",
                    "settings_reset_pin_button": "Reset your PIN",
                    "settings_goto_account_settings_button": "Go to my account settings",
                    "permission_notifications_title": "Notifications",
                    "login_options_discription_label": "User Fingerprint login instead of your PIN to access secure information, such as bills, switching between accounts, or upgrading your device.(You'll be prompted to login first, if you aren't already.)",
                    "device_permission_location_status_disabled": "Device Location Services disabled",
                    "login_options_pin_management_desc": "To update the PIN we use to confirm your identity across all Vodafone channels (such as contact centre, desktop sites or live chat), visit your account settings page.",
                    "permission_usage_body": "The app requests this permission to collect data about your usage and optimise network performance.",
                    "settings_finger_print_desc": "Quickly authenticate into encrypted services and areas which hold your sensitive data. Switch between all your Mobile, Broadband and Home Phone services, Manage your Broadband and Home Phone bills, See out-of-bundle charges and manage your extras.",
                    "login_options_title_label": "Login Options",
                    "settings_login_options_title": "Login options",
                    "login_options_touch_id_toggle_disabled": "Disable Touch ID?",
                    "login_options_face_id_toggle_enabled": "Enable Face ID?"
                }
            }
        }
    });
})

vfuk.get(path + '/v1/registeredNumbers', (req, res) => {
    // Set the type of response, sets the content type.
    res.type('application/json');
    
    // Set the status code of the response.
    res.status(200);
    
    // Send the response body.
    res.json({
        "status": {
            "code": 4604, //4114, //4604 No Registered numbers
            "analytics": {
                "status": "SUCCESS",
                "guid": "cc56b63e-30b6-4adc-8c25-ea9d36e54a4a"
            }
        },
        "authToken": "AuthTokenL2",
        "numbers": [{
            "id": "ade37f91-5ded-4cd1-9c7e-fcdb47034919",
            "maskedMobileId": "********1604"
        }, {
            "id": "4ae6dac9-bafd-42a7-b527-97c8909eeb46",
            "maskedMobileId": "********4757"
        }]
    });
})

vfuk.get(path + '/v1/sendOTAC', (req, res) => {
    // Set the type of response, sets the content type.
    res.type('application/json');
    
    // Set the status code of the response.
    res.status(200);
    
    // Send the response body.
    res.json({
        "status": {
            "code": 0, // Inactive number: 4135,
            "analytics": {
                "status": "SUCCESS",
                "guid": "cc56b63e-30b6-4adc-8c25-ea9d36e54a4a"
            }
        }
    });
})

vfuk.get(path + '/v1/upfrontLogin', (req, res) => {
    // Set the type of response, sets the content type.
    res.type('application/json');
    
    // Set the status code of the response.
    res.status(200);
    
    // Send the response body.
    res.json({
        "status": {
            "code": 4140, //4140 expired Auth
            "analytics": {
                "status": "SUCCESS",
                "guid": "cc56b63e-30b6-4adc-8c25-ea9d36e54a4a"
            }
        },
        "accessTokenL3": "AccessTokenL3"
    });
})

vfuk.get(path + '/deeplinks', (req, res) => {
    // Set the type of response, sets the content type.
    res.type('text/html');
    
    // Set the status code of the response.
    res.status(200);
    
    // Send the response body.
    res.render('getDeeplinks');
})

vfuk.get(path + '/v1/additionalChargesDetails/{detailAPITypeParam}', (req, res) => {
    // Set the type of response, sets the content type.
    res.type('application/json');
    
    if (req.params.detailAPITypeParam == "others") {
        // Set the status code of the response.
        res.status(200);
        // Send the response body.
        res.json({
            "status": {
                "code": 0,
                "analytics": {
                    "status": "Success",
                    "guid": "2a88ed0f-2b29-42b8-88bd-6fc21cf95c92"
                }
            },
            "sortingDropDown": [],
            "lineItems": [],
            "footerText": "Showing 100 of 119",
            "pagination": {
                "displayText": "Load more",
                "detailAPITypeParam": "other",
                "detailAPISortingParam": "date",
                "detailAPIPageParam": 2
            }
        });
    } else {
        // Set the status code of the response.
        res.status(200);
        // Send the response body.
        res.json({
            "status": {
                "code": 0,
                "analytics": {
                    "status": "Success",
                    "guid": "2a88ed0f-2b29-42b8-88bd-6fc21cf95c92"
                }
            },
            "sortingDropDown": [{
                "displayText": "Sort by newest first",
                "detailAPITypeParam": "other",
                "detailAPISortingParam": "descDateTime"
            }, {
                "displayText": "Sort by oldest first",
                "detailAPITypeParam": "other",
                "detailAPISortingParam": "descCharges"
            }, {
                "displayText": "Sort by highest price first",
                "detailAPITypeParam": "other",
                "detailAPISortingParam": "descCharges"
            }, {
                "displayText": "Sort by lowest price first",
                "detailAPITypeParam": "other",
                "detailAPISortingParam": "descCharges"
            }],
            "lineItems": [{
                "date": "Mon 12 Jun",
                "time": "8.33am",
                "title": "447389715622",
                "description": "Vodafone mobile",
                "charge": "£1.23",
                "usageQuantity": {
                    "value": 1,
                    "uom": "mins"
                }
            }, {
                "date": "Mon 12 Jun",
                "time": "8.34am",
                "title": "447389715622",
                "description": "Vodafone mobile",
                "usage": "Lasted: 1m 20s",
                "charge": "£1.23",
                "usageQuantity": {
                    "value": 1,
                    "uom": "mins"
                }
            }, {
                "date": "Mon 12 Jun",
                "time": "8.35am",
                "title": "447389715622",
                "description": "Roaming MMS Vodafone mobile from Turkey",
                "usage": "Lasted: 1m 20s",
                "charge": "£1.23",
                "usageQuantity": {
                    "value": 1,
                    "uom": "mins"
                }
            }],
            "footerText": "Showing 100 of 119",
            "pagination": {
                "displayText": "Load more",
                "detailAPITypeParam": "other",
                "detailAPISortingParam": "date",
                "detailAPIPageParam": 2
            }
        });
    }
})

vfuk.get(path + '/video', (req, res) => {
    // Set the type of response, sets the content type.
    res.type('text/html');
    
    // Set the status code of the response.
    res.status(200);
    
    // Send the response body.
    res.render('testvideo');
})

vfuk.get(path + '/v1/deviceLoanDetails', (req, res) => {
    // Set the type of response, sets the content type.
    res.type('application/json');
    
    // Set the status code of the response.
    res.status(200);
    
    // Send the response body.
    res.json({
    "status": {
        "code": 0,
        "analytics": {
            "status": "Success",
            "guid": "1693bbdc-09f1-4feb-9eba-ff7684eaa18c",
            "code": "0"
        }
    },
    "lastAPICall": "2020-07-10T10:10:57",
    "cards": [
        {
            "status": {
                "code": 0,
                "analytics": {
                    "status": "Success",
                    "guid": "1693bbdc-09f1-4feb-9eba-ff7684eaa18c",
                    "code": "0"
                }
            },
            "title": "Huawei P20",
            "loanChargesLabel": "Device plan monthly payment",
            "loanChargesValue": "£36",
            "paidValueLabel": "Paid",
            "paidValue": "£432,00",
            "totalPriceLabel": "out of",
            "totalPrice": "£504,00",
            "percentagePaid": 65.5,
            "nextPayment": "Next payment 5 November 2018",
            "sections": [
                {
                    "title": "<b>Includes</b>",
                    "visibleSubItemsCount": 3,
                    "renderType": "CHEVRONLIST",
                    "list": [
                        {
                            "title": "Battery Refresh",
                            "subContent": {
                                "subContentHeader": "Battery Refresh",
                                "imageText": "Expires: 12 Jul 2021",
                                "subContentText": "Don't worry about your battery keeping up, we'll replace a tired battery if needs it. Simply bring your phone into a local store for a health check and we'll send it off to be replaced if our digital diagnostics show that it's struggling to keep up. Our Battery Refresh covers you for 2 years or the length of your Phone Plan, Whichever is longer.",
                                "subContentImageId": "10117",
                                "actions": [
                                    {
                                        "color": "#E60000",
                                        "text": "Book an appointment",
                                        "journeyKey": "BatteryRefresh_Storelocator",
                                        "viewTag": "",
                                        "tapTag": ""
                                    },
                                    {
                                        "color": "#FFFFFF",
                                        "text": "button2",
                                        "journeyKey": "<JOURNEY>",
                                        "viewTag": "",
                                        "tapTag": ""
                                    }
                                ]
                            }
                        },
                        {
                            "title": "24-Month Warranty",
                            "subContent": {
                                "subContentHeader": "24-Month Warranty",
                                "imageText": "Expires on ....",
                                "subContentText": "Our 24-Month Warranty covers ... ",
                                "subContentImageId": "10117"
                            }
                        }
                    ],
                        "lozenge": {
                                "label": "NEW",
                                "color": "#E60000"
                         }
                }
            ],
            "actions": [
             {
            "color": "#E60000",
            "text": "Make a payment",
            "journeyKey": "<JOURNEY>",
            "viewTag": "...",
            "tapTag": "..."
            },
            {
            "color": "#FFFFFF",
            "text": "Payment History",
            "journeyKey": "....",
            "viewTag": "...",
            "tapTag": "..."
            },
            {
            "color": "#FFFFFF",
            "text": "View more details",
            "journeyKey": "....",
            "viewTag": "...",
            "tapTag": "..."
        }
        ]
        },
        {
            "status": {
                "code": 4300,
                "analytics": {
                    "status": "Error",
                    "guid": "1693bbdc-09f1-4feb-9eba-ff7684eaa18c",
                    "code": "4300",
                    "message": "DXL Error"
                }
            },
            "errorText": "We can't retrieve your information. Please try again later."
        },
        {
            "status": {
                "code": 0,
                "analytics": {
                    "status": "Success",
                    "guid": "1693bbdc-09f1-4feb-9eba-ff7684eaa18c",
                    "code": "0"
                }
            },
            "title": "Iphone XX",
            "loanChargesLabel": "Device plan monthly payment",
            "loanChargesValue": "£36",
            "paidValueLabel": "Paid",
            "paidValue": "£432,00",
            "totalPriceLabel": "out of",
            "totalPrice": "£504,00",
            "percentagePaid": 65.5,
            "nextPayment": "Next payment 5 November 2018"
        }
    ],
    "actions": [
        {
            "color": "#E60000",
            "text": "Manage Device Plans",
            "journeyKey": "....",
            "viewTag": "...",
            "tapTag": "..."
        }
    ]
});
})

vfuk.get(path + '/v1/basicDashboard', (req, res) => {
    // Set the type of response, sets the content type.
    res.type('application/json');
    
    // Set the status code of the response.
    res.status(200);
    
    // Send the response body.
    res.json({
        "status": {
            "code": 0,
            "analytics": {
                "status": "Success",
                "guid": "c7ac853a-08e5-43f6-b682-7bc663c6b7ff"
            }
        },
        "sections": [
            "header",
            "tiles",
            "discover",
            "veryMe",
            "linksMenu"
        ],
        "header": {
            "backgroundAsset": {
                "localAsset": 10103,
                "location": "https://www.leftovercurrency.com/app/uploads/2016/11/10-egyptian-pounds-banknote-farao-statue-reverse-1.jpg"
            },
            "title": "Vodafone Together",
            "subtitle": "Unlimited home broadband and unlimited mobile data in one great deal.",
            "journey": "NON_VF_VODAFONE_TOGETHER"
        },
        "tiles": {
            "items": [{
                    "backgroundAsset": {
                        "localAsset": 1056,
                        "location": ""
                    },
                    "text": "Pay monthly phones",
                    "journeyKey": "PAYM_DEALS"
                },
                {
                    "backgroundAsset": {
                        "localAsset": 1059,
                        "location": null
                    },
                    "text": "SIM only deals",
                    "journeyKey": "SIM_ONLY_DEALS"
                }
                , {
                    "backgroundAsset": {
                        "localAsset": 1053,
                        "location": ""
                    },
                    "text": "Broadband",
                    "journeyKey": "BROADBAND_DEALS"
                },
                {
                    "backgroundAsset": {
                        "localAsset": 1053,
                        "location": ""
                    },
                    "text": "Broadband",
                    "journeyKey": "BROADBAND_DEALS"
                }
            ]
        },
        "discover": {
            "title": "Discover",
            "items": [{
                "bannerTitle": "Keep Connecting",
                "body": "<b>Maintaining the reliability and capacity of our network is our number one priority</b>",
                "image": 10105,
                "buttons": [{
                    "text": "Find out more",
                    "journeyKey": "UK_MOBILE_NETWORK"
                }]
            }, {
                "bannerTitle": "5G",
                "body": "<b>The newest, fastest generation of mobile networking.</b>",
                "image": 10106,
                "buttons": [{
                    "text": "Find out more",
                    "journeyKey": "UK_MOBILE_NETWORK_5G"
                }]
            }]
        },
        "veryMe": {
            "title": "VeryMeRewards",
            "description": "From savings on cinema tickets to your morning coffee on us - there's bound to be something you love with VeryMe Rewards on the My Vodafone app.",
            "journey": "NON_VF_VERYME_REWARDS",
            "backgroundImage": 10107
        },
        "linksMenu": {
            "items": [{
                "iconId": 10108,
                "title": "Online assistance",
                "subtitle": "Our virtual chat assistant is available to help you 24/7",
                "journey": "ONLINE_ASSISTANCE"
            }, {
                "iconId": 10109,
                "title": "Free home delivery",
                "subtitle": "Paid for same day delivery options",
                "journey": "HOME_DELIVERY"
            }, {
                "iconId": 10110,
                "title": "14 day returns",
                "subtitle": "Hassle-free returns with no cancellation fee",
                "journey": "ORDERS_RETURNS"
            }, {
                "iconId": 10111,
                "title": "UK's best mobile network",
                "subtitle": "Find out how we're keeping the UK connected",
                "journey": "UK_MOBILE_NETWORK"
            }]
        },
        "tray": {
            "centralItem": {
                "title": "TOBI",
                "target": "TOBi_ANONYMOUS",
                "icon": 1052
            },
            "items": [{
                "title": "My Account",
                "target": "LOGIN",
                "icon": 1047
            }, {
                "title": "Settings",
                "target": "DRAWER_SETTINGS",
                "icon": 1049
            }]
        },
        "settingsDrawer": {
            "subTitle": "Settings",
            "cards": [{
                "name": "App",
                "icon": 10120,
                "target": "APP_SETTINGS"
            }, {
                "name": "Privacy",
                "icon": 10121,
                "target": "PRIVACY_SETTINGS"
            }]
        },
        "settingItems": [{
            "name": "APP_SETTINGS",
            "title": "App Settings",
            "journeyKey": "NONE",
            "isParent": true,
            "subItems": [{
                "name": "APP_SETTINGS_ResetApp",
                "title": "Reset the app",
                "journeyKey": "SETTINGS_RESET_APP",
                "isParent": false
            }, {
                "name": "APP_SETTINGS_DevicePermissions",
                "title": "Device permissions",
                "journeyKey": "DEVICE_PERMISSIONS",
                "isParent": false
            }, {
                "name": "APP_SETTINGS_TermsAndConditions",
                "title": "Terms and Conditions",
                "journeyKey": "TERMS_AND_CONDITIONS_SETTINGS",
                "isParent": false
            }]
        }, {
            "name": "PRIVACY_SETTINGS",
            "title": "Privacy Settings",
            "journeyKey": "NONE",
            "isParent": true,
            "subItems": [{
                "name": "PRIVACY_SETTINGS_AppPrivacy",
                "title": "App privacy",
                "journeyKey": "SPEED_CHECKER_SETTINGS",
                "isParent": false
            }, {
                "name": "PRIVACY_SETTINGS_AppPrivacySupplement",
                "title": "App Privacy Supplement",
                "journeyKey": "PRIVACY_SUPPLEMENT",
                "isParent": false
            }, {
                "name": "PRIVACY_SETTINGS_VodafonePrivacyPortal",
                "title": "Vodafone Privacy Portal",
                "journeyKey": "VODAFONE_PRIVACY",
                "isParent": false
            }]
        }],
        "userMessage": {
            "backgroundId": 10124,
            "iconId": 10125,
            "title": "Hello, friend!",
            "description": "Log in to My Vodafone to view your current charges and usage, view and pay your bill, manage your extras and more.<br><br>If you'd prefer, you can always log in via the My Account page later.",
            "actions": [{
                "color": "#FFFFFF",
                "text": "Log in",
                "journeyKey": "LOGIN"
            }, {
                "color": "#00000000",
                "text": "Return to My Vodafone",
                "journeyKey": "BACK"
            }]
        }
    });
})

vfuk.get(path + '/v1/idToken', (req, res) => {
    
    // Set the type of response, sets the content type.
    res.type('application/json');
    
    // Set the status code of the response.
    res.status(200);
    
    // Send the response body.
    res.json({
            "status": {
                "code": 8101,
                "analytics": {
                    "status": "IDM_EMPTY_TOKEN",
                    "message": "Token is required to access this resource",
                    "origin": "IDM",
                    "guid": "ec43d16e-b191-4171-b8b6-9f8209d1fdc0",
                    "dxlError": "EMPTY_TOKEN",
                    "beApiName": "IdmRegisterDevice"
                }
            },
            "loaToken": "abc123",
            "accountId": "abc123",
            "loaTokenLevel": 1,
            "msisdn": "1234567",
            "userName": "user_7000263942"
        }
    
    );
})

 vfuk.listen(port, ()=> console.log(`server running on port ${port}`));
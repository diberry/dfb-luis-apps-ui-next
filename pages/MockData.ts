
import { ILuisApp } from "dfb-luis-apps-lib"

export const MockDataFull: ILuisApp [] = [
    {
      "id": "ee6b7c58-9b19-477d-ae52-6aeed8fbad07",
      "name": "pattern app",
      "description": "Tutorials use Human resources (HR) domain.",
      "culture": "en-us",
      "usageScenario": "",
      "domain": "",
      "versionsCount": 2,
      "createdDateTime": "2019-12-17T21:55:16Z",
      "endpoints": {
        "PRODUCTION": {
          "versionId": "patterns",
          "directVersionPublish": false,
          "endpointUrl": "https://westus.api.cognitive.microsoft.com/luis/v2.0/apps/ee6b7c58-9b19-477d-ae52-6aeed8fbad07",
          "isStaging": false,
          "assignedEndpointKey": null,
          "region": null,
          "endpointRegion": "westus",
          "publishedDateTime": "2019-12-17T22:51:23Z",
          "failedRegions": null
        }
      },
      "endpointHitsCount": 2,
      "activeVersion": "patterns",
      "ownerEmail": null,
      "tokenizerVersion": "1.0.0",
      "versions": [
        {
          "version": "patterns",
          "createdDateTime": "2019-12-17T21:55:44Z",
          "lastModifiedDateTime": "2019-12-19T17:49:43Z",
          "lastTrainedDateTime": "2019-12-18T23:07:38Z",
          "lastPublishedDateTime": "2019-12-17T22:51:25Z",
          "endpointUrl": null,
          "assignedEndpointKey": null,
          "externalApiKeys": null,
          "intentsCount": 14,
          "entitiesCount": 4,
          "endpointHitsCount": 0,
          "trainingStatus": "NeedsTraining",
          "models": [
            {
              "id": "31b42964-0d17-4a86-ae46-0553bce426f0",
              "name": "ApplyForJob",
              "typeId": 0,
              "readableType": "Intent Classifier"
            },
            {
              "id": "01d2f8ce-5010-4d1a-a2de-3daf1f8d36f2",
              "name": "datetimeV2",
              "typeId": 2,
              "readableType": "Prebuilt Entity Extractor",
              "roles": []
            },
            {
              "id": "f0b3a031-54d3-4408-9106-100367110c68",
              "name": "Employee",
              "typeId": 5,
              "readableType": "Closed List Entity Extractor",
              "subLists": [
                {
                  "id": 109697822,
                  "canonicalForm": "Employee-24612",
                  "list": [
                    "John W. Smith",
                    "john.w.smith@mycompany.com",
                    "x12345",
                    "425-555-1212",
                    "123-45-6789"
                  ]
                },
                {
                  "id": 109697823,
                  "canonicalForm": "Employee-45612",
                  "list": [
                    "Jill Jones",
                    "jill-jones@mycompany.com",
                    "x23456",
                    "425-555-0000",
                    "234-56-7891"
                  ]
                }
              ],
              "roles": []
            },
            {
              "id": "e3f5f534-6a8b-4e82-bd99-4cbb0bd78993",
              "name": "EmployeeFeedback",
              "typeId": 0,
              "readableType": "Intent Classifier"
            },
            {
              "id": "47e89422-c9aa-42b1-abda-2e76a2054cc3",
              "name": "FindForm",
              "typeId": 0,
              "readableType": "Intent Classifier"
            },
            {
              "id": "0f428dd2-3dd6-4885-bc5a-aa83a137686a",
              "name": "FormName",
              "typeId": 7,
              "readableType": "Pattern.Any Entity Extractor",
              "explicitList": [],
              "roles": []
            },
            {
              "id": "0f813c07-381e-42dc-9608-abec3fe8e7d6",
              "name": "geographyV2",
              "typeId": 2,
              "readableType": "Prebuilt Entity Extractor",
              "roles": []
            },
            {
              "id": "2e6c45db-5591-4606-bc3b-e8c5614f0d82",
              "name": "GetJobInformation",
              "typeId": 0,
              "readableType": "Intent Classifier"
            },
            {
              "id": "3c55a0ec-0040-454a-922f-5b3771c6012a",
              "name": "HRF-number",
              "typeId": 8,
              "readableType": "Regex Entity Extractor",
              "regexPattern": "hrf-[0-9]{6}",
              "roles": []
            },
            {
              "id": "ddaf5727-422c-4c13-825b-28e4d6015836",
              "name": "Job",
              "typeId": 1,
              "readableType": "Entity Extractor",
              "children": [],
              "roles": []
            },
            {
              "id": "d20a87e4-5715-4071-af0e-69bf23deec20",
              "name": "keyPhrase",
              "typeId": 2,
              "readableType": "Prebuilt Entity Extractor",
              "roles": []
            },
            {
              "id": "10d6011b-d367-4ff0-ad15-1db90a466824",
              "name": "Locations",
              "typeId": 3,
              "readableType": "Hierarchical Entity Extractor",
              "children": [
                {
                  "id": "cc04de8c-d569-458a-9904-4e763c42965a",
                  "name": "Destination",
                  "typeId": 6,
                  "readableType": "Hierarchical Child Entity Extractor"
                },
                {
                  "id": "57acd642-a926-4a59-a20c-96b495caf9b2",
                  "name": "Origin",
                  "typeId": 6,
                  "readableType": "Hierarchical Child Entity Extractor"
                }
              ],
              "roles": []
            },
            {
              "id": "34c7f02c-3550-41bd-abd4-861545ec32f6",
              "name": "MoveEmployee",
              "typeId": 0,
              "readableType": "Intent Classifier"
            },
            {
              "id": "9ea24b3f-bfe6-4a16-ba75-6ea09d28f94d",
              "name": "NewEmployeeRelocationInfo",
              "typeId": 1,
              "readableType": "Entity Extractor",
              "children": [
                {
                  "id": "52f6461c-950e-47f0-b5a1-b6e65a4579b7",
                  "name": "NewEmployeeName",
                  "children": [],
                  "typeId": 1,
                  "readableType": "Child Entity Extractor"
                },
                {
                  "id": "77cd1884-8774-4269-927e-55b888d2489a",
                  "name": "NewEmployeeLocations",
                  "children": [],
                  "typeId": 1,
                  "readableType": "Child Entity Extractor"
                }
              ],
              "roles": []
            },
            {
              "id": "8c2d5d6e-4d55-40b6-9e2f-df56951c5cc6",
              "name": "NewEmployeeRelocationProcess",
              "typeId": 0,
              "readableType": "Intent Classifier"
            },
            {
              "id": "37bb37dc-93e3-454a-931d-e72a71d41519",
              "name": "None",
              "typeId": 0,
              "readableType": "Intent Classifier"
            },
            {
              "id": "ef6a2824-7b6f-4dee-a5b0-292d4039fec7",
              "name": "number",
              "typeId": 2,
              "readableType": "Prebuilt Entity Extractor",
              "roles": []
            },
            {
              "id": "93dc5821-9b9e-4cc2-977b-b4005302fbe7",
              "name": "OrgChart-Manager",
              "typeId": 0,
              "readableType": "Intent Classifier"
            },
            {
              "id": "c30af524-ddd6-4df1-b528-3a42a7a71b16",
              "name": "OrgChart-Reports",
              "typeId": 0,
              "readableType": "Intent Classifier"
            },
            {
              "id": "a5e9c6aa-b555-4faa-aa8b-641db8b2f1fa",
              "name": "personName",
              "typeId": 2,
              "readableType": "Prebuilt Entity Extractor",
              "roles": []
            },
            {
              "id": "536d1d7f-6102-4425-8dce-34a0779b0de2",
              "name": "requestemployeemove",
              "typeId": 4,
              "readableType": "Composite Entity Extractor",
              "children": [
                {
                  "id": "01d2f8ce-5010-4d1a-a2de-3daf1f8d36f2",
                  "name": "datetimeV2",
                  "typeId": 0
                },
                {
                  "id": "cc04de8c-d569-458a-9904-4e763c42965a",
                  "name": "Locations::Destination",
                  "typeId": 0
                },
                {
                  "id": "f0b3a031-54d3-4408-9106-100367110c68",
                  "name": "Employee",
                  "typeId": 0
                },
                {
                  "id": "57acd642-a926-4a59-a20c-96b495caf9b2",
                  "name": "Locations::Origin",
                  "typeId": 0
                }
              ],
              "roles": []
            },
            {
              "id": "c26b4d24-2904-4e5f-9d25-19a4478356e9",
              "name": "Utilities.Cancel",
              "typeId": 0,
              "readableType": "Intent Classifier",
              "customPrebuiltDomainName": "Utilities",
              "customPrebuiltModelName": "Cancel"
            },
            {
              "id": "bd281201-f4e2-4861-b95f-a67c7316d470",
              "name": "Utilities.Confirm",
              "typeId": 0,
              "readableType": "Intent Classifier",
              "customPrebuiltDomainName": "Utilities",
              "customPrebuiltModelName": "Confirm"
            },
            {
              "id": "b43b45a6-b148-4c8b-b2e1-da786e025178",
              "name": "Utilities.Help",
              "typeId": 0,
              "readableType": "Intent Classifier",
              "customPrebuiltDomainName": "Utilities",
              "customPrebuiltModelName": "Help"
            },
            {
              "id": "a153ba62-8c69-4b21-805a-abd4159a841e",
              "name": "Utilities.StartOver",
              "typeId": 0,
              "readableType": "Intent Classifier",
              "customPrebuiltDomainName": "Utilities",
              "customPrebuiltModelName": "StartOver"
            },
            {
              "id": "b23b0c8e-3a85-49ce-a817-a34df4d5472e",
              "name": "Utilities.Stop",
              "typeId": 0,
              "readableType": "Intent Classifier",
              "customPrebuiltDomainName": "Utilities",
              "customPrebuiltModelName": "Stop"
            }
          ]
        },
        {
          "version": "batchtest",
          "createdDateTime": "2019-12-17T21:55:16Z",
          "lastModifiedDateTime": "2019-12-17T21:55:18Z",
          "lastTrainedDateTime": null,
          "lastPublishedDateTime": null,
          "endpointUrl": null,
          "assignedEndpointKey": null,
          "externalApiKeys": null,
          "intentsCount": 11,
          "entitiesCount": 3,
          "endpointHitsCount": 0,
          "trainingStatus": "NeedsTraining",
          "models": [
            {
              "id": "2a0d38d5-3c8c-4051-b50c-66351320b1ab",
              "name": "ApplyForJob",
              "typeId": 0,
              "readableType": "Intent Classifier"
            },
            {
              "id": "225972cc-84e2-4e8d-af1f-5a74a912e8ef",
              "name": "datetimeV2",
              "typeId": 2,
              "readableType": "Prebuilt Entity Extractor",
              "roles": []
            },
            {
              "id": "efe98076-f696-4734-803c-9abfdb50e3fb",
              "name": "Employee",
              "typeId": 5,
              "readableType": "Closed List Entity Extractor",
              "subLists": [
                {
                  "id": 109697820,
                  "canonicalForm": "Employee-24612",
                  "list": [
                    "John W. Smith",
                    "john.w.smith@mycompany.com",
                    "x12345",
                    "425-555-1212",
                    "123-45-6789"
                  ]
                },
                {
                  "id": 109697821,
                  "canonicalForm": "Employee-45612",
                  "list": [
                    "Jill Jones",
                    "jill-jones@mycompany.com",
                    "x23456",
                    "425-555-0000",
                    "234-56-7891"
                  ]
                }
              ],
              "roles": []
            },
            {
              "id": "a40004fc-32bc-46a2-9e54-89b54c8fbe2c",
              "name": "EmployeeFeedback",
              "typeId": 0,
              "readableType": "Intent Classifier"
            },
            {
              "id": "39f7a7bc-b211-453d-b00f-f52d5a19ba01",
              "name": "FindForm",
              "typeId": 0,
              "readableType": "Intent Classifier"
            },
            {
              "id": "eb5a1c86-03d6-40e5-a2cb-ecb181f17336",
              "name": "GetJobInformation",
              "typeId": 0,
              "readableType": "Intent Classifier"
            },
            {
              "id": "dbc4a103-ef2f-4c5b-aa0f-de9a29ac5780",
              "name": "HRF-number",
              "typeId": 8,
              "readableType": "Regex Entity Extractor",
              "regexPattern": "hrf-[0-9]{6}",
              "roles": []
            },
            {
              "id": "a7209967-b7a6-482a-8936-653ec3b7ffb3",
              "name": "Job",
              "typeId": 1,
              "readableType": "Entity Extractor",
              "children": [],
              "roles": []
            },
            {
              "id": "8bb56914-17cc-43ba-a6a4-bfb529fc7d5d",
              "name": "keyPhrase",
              "typeId": 2,
              "readableType": "Prebuilt Entity Extractor",
              "roles": []
            },
            {
              "id": "06d438c6-6aee-4397-b460-d06eb26ba39f",
              "name": "Locations",
              "typeId": 3,
              "readableType": "Hierarchical Entity Extractor",
              "children": [
                {
                  "id": "bd740f68-e8ce-4511-880a-cafc46b4a96a",
                  "name": "Destination",
                  "typeId": 6,
                  "readableType": "Hierarchical Child Entity Extractor"
                },
                {
                  "id": "d6e620e3-6918-4527-8a63-feb1bd8bb667",
                  "name": "Origin",
                  "typeId": 6,
                  "readableType": "Hierarchical Child Entity Extractor"
                }
              ],
              "roles": []
            },
            {
              "id": "e7a4b296-569f-4e14-baf8-1be0269674fc",
              "name": "MoveEmployee",
              "typeId": 0,
              "readableType": "Intent Classifier"
            },
            {
              "id": "ea2ab81a-9cb3-4830-a1e9-7378e37240ec",
              "name": "None",
              "typeId": 0,
              "readableType": "Intent Classifier"
            },
            {
              "id": "81e80d22-3cdf-4210-981c-9a813d444d82",
              "name": "number",
              "typeId": 2,
              "readableType": "Prebuilt Entity Extractor",
              "roles": []
            },
            {
              "id": "39263fd7-5d68-420b-83ed-f1e842a01d47",
              "name": "requestemployeemove",
              "typeId": 4,
              "readableType": "Composite Entity Extractor",
              "children": [
                {
                  "id": "225972cc-84e2-4e8d-af1f-5a74a912e8ef",
                  "name": "datetimeV2",
                  "typeId": 0
                },
                {
                  "id": "bd740f68-e8ce-4511-880a-cafc46b4a96a",
                  "name": "Locations::Destination",
                  "typeId": 0
                },
                {
                  "id": "efe98076-f696-4734-803c-9abfdb50e3fb",
                  "name": "Employee",
                  "typeId": 0
                },
                {
                  "id": "d6e620e3-6918-4527-8a63-feb1bd8bb667",
                  "name": "Locations::Origin",
                  "typeId": 0
                }
              ],
              "roles": []
            },
            {
              "id": "15278e91-7882-410e-a612-7b9cbb0fd608",
              "name": "Utilities.Cancel",
              "typeId": 0,
              "readableType": "Intent Classifier",
              "customPrebuiltDomainName": "Utilities",
              "customPrebuiltModelName": "Cancel"
            },
            {
              "id": "a2cb290a-c52b-456c-b512-b1fed17c4b40",
              "name": "Utilities.Confirm",
              "typeId": 0,
              "readableType": "Intent Classifier",
              "customPrebuiltDomainName": "Utilities",
              "customPrebuiltModelName": "Confirm"
            },
            {
              "id": "a3e26b49-9e61-452a-8457-608dce4c7c8a",
              "name": "Utilities.Help",
              "typeId": 0,
              "readableType": "Intent Classifier",
              "customPrebuiltDomainName": "Utilities",
              "customPrebuiltModelName": "Help"
            },
            {
              "id": "9171b782-3973-49d5-a1f8-7d8cf0d46ca1",
              "name": "Utilities.StartOver",
              "typeId": 0,
              "readableType": "Intent Classifier",
              "customPrebuiltDomainName": "Utilities",
              "customPrebuiltModelName": "StartOver"
            },
            {
              "id": "46c012fa-b2d5-46cf-b5fc-df661bff0424",
              "name": "Utilities.Stop",
              "typeId": 0,
              "readableType": "Intent Classifier",
              "customPrebuiltDomainName": "Utilities",
              "customPrebuiltModelName": "Stop"
            }
          ]
        }
      ]
    },
    {
      "id": "96730277-0a0e-4ee8-b877-e55a420bf3b1",
      "name": "batch - test",
      "description": "Tutorials use Human resources (HR) domain.",
      "culture": "en-us",
      "usageScenario": "",
      "domain": "",
      "versionsCount": 2,
      "createdDateTime": "2019-12-17T18:27:20Z",
      "endpoints": {},
      "endpointHitsCount": 0,
      "activeVersion": "batchtest",
      "ownerEmail": null,
      "tokenizerVersion": "1.0.0",
      "versions": [
        {
          "version": "batchtest",
          "createdDateTime": "2019-12-17T18:27:56Z",
          "lastModifiedDateTime": "2019-12-17T18:47:51Z",
          "lastTrainedDateTime": "2019-12-17T18:47:47Z",
          "lastPublishedDateTime": null,
          "endpointUrl": null,
          "assignedEndpointKey": null,
          "externalApiKeys": null,
          "intentsCount": 11,
          "entitiesCount": 3,
          "endpointHitsCount": 0,
          "trainingStatus": "Trained",
          "models": [
            {
              "id": "1b9c0956-39a9-470a-91b6-84eaad80c6c6",
              "name": "ApplyForJob",
              "typeId": 0,
              "readableType": "Intent Classifier"
            },
            {
              "id": "c93fb0ff-a11e-4496-a459-f3c5a904495b",
              "name": "datetimeV2",
              "typeId": 2,
              "readableType": "Prebuilt Entity Extractor",
              "roles": []
            },
            {
              "id": "b60ad7c4-8a52-40b3-978e-745129356fa6",
              "name": "Employee",
              "typeId": 5,
              "readableType": "Closed List Entity Extractor",
              "subLists": [
                {
                  "id": 109687099,
                  "canonicalForm": "Employee-24612",
                  "list": [
                    "John W. Smith",
                    "john.w.smith@mycompany.com",
                    "x12345",
                    "425-555-1212",
                    "123-45-6789"
                  ]
                },
                {
                  "id": 109687100,
                  "canonicalForm": "Employee-45612",
                  "list": [
                    "Jill Jones",
                    "jill-jones@mycompany.com",
                    "x23456",
                    "425-555-0000",
                    "234-56-7891"
                  ]
                }
              ],
              "roles": []
            },
            {
              "id": "ffff65dc-79d1-42c3-8e48-4e087b7cb579",
              "name": "EmployeeFeedback",
              "typeId": 0,
              "readableType": "Intent Classifier"
            },
            {
              "id": "f60f9c53-a9c3-4d7b-a3af-37a360ed1feb",
              "name": "FindForm",
              "typeId": 0,
              "readableType": "Intent Classifier"
            },
            {
              "id": "d4e5a328-25b4-44e7-91cd-5716808211f2",
              "name": "GetJobInformation",
              "typeId": 0,
              "readableType": "Intent Classifier"
            },
            {
              "id": "9c56b09d-926e-4607-83e3-136ea3d01863",
              "name": "HRF-number",
              "typeId": 8,
              "readableType": "Regex Entity Extractor",
              "regexPattern": "hrf-[0-9]{6}",
              "roles": []
            },
            {
              "id": "49269090-7394-4da7-9b76-95e44376b65f",
              "name": "Job",
              "typeId": 1,
              "readableType": "Entity Extractor",
              "children": [],
              "roles": []
            },
            {
              "id": "ebf8ace7-11a7-49c0-8a4f-f00846f8b67d",
              "name": "keyPhrase",
              "typeId": 2,
              "readableType": "Prebuilt Entity Extractor",
              "roles": []
            },
            {
              "id": "9c6a45e2-cdf3-4983-9d01-a373a9659241",
              "name": "Locations",
              "typeId": 3,
              "readableType": "Hierarchical Entity Extractor",
              "children": [
                {
                  "id": "eb8f17e9-0757-4469-bf25-7738f1a8cf3b",
                  "name": "Destination",
                  "typeId": 6,
                  "readableType": "Hierarchical Child Entity Extractor"
                },
                {
                  "id": "8bcd9380-bc4a-4938-a2cd-e0a88270c084",
                  "name": "Origin",
                  "typeId": 6,
                  "readableType": "Hierarchical Child Entity Extractor"
                }
              ],
              "roles": []
            },
            {
              "id": "cb87f3fe-03c8-46d4-b9fa-81c1d82910b5",
              "name": "MoveEmployee",
              "typeId": 0,
              "readableType": "Intent Classifier"
            },
            {
              "id": "1d67de86-2f8a-4fb9-9ccd-916507d10dda",
              "name": "None",
              "typeId": 0,
              "readableType": "Intent Classifier"
            },
            {
              "id": "04880ce0-cb45-42ed-944b-b787559b107f",
              "name": "number",
              "typeId": 2,
              "readableType": "Prebuilt Entity Extractor",
              "roles": []
            },
            {
              "id": "8dd39f20-88aa-45d4-aa51-f5c3f41a7497",
              "name": "requestemployeemove",
              "typeId": 4,
              "readableType": "Composite Entity Extractor",
              "children": [
                {
                  "id": "c93fb0ff-a11e-4496-a459-f3c5a904495b",
                  "name": "datetimeV2",
                  "typeId": 0
                },
                {
                  "id": "eb8f17e9-0757-4469-bf25-7738f1a8cf3b",
                  "name": "Locations::Destination",
                  "typeId": 0
                },
                {
                  "id": "b60ad7c4-8a52-40b3-978e-745129356fa6",
                  "name": "Employee",
                  "typeId": 0
                },
                {
                  "id": "8bcd9380-bc4a-4938-a2cd-e0a88270c084",
                  "name": "Locations::Origin",
                  "typeId": 0
                }
              ],
              "roles": []
            },
            {
              "id": "31f79dfd-a13f-4e35-875c-1805bc0b5b44",
              "name": "Utilities.Cancel",
              "typeId": 0,
              "readableType": "Intent Classifier",
              "customPrebuiltDomainName": "Utilities",
              "customPrebuiltModelName": "Cancel"
            },
            {
              "id": "0009def1-33bb-462c-b4ce-bf133b90bf83",
              "name": "Utilities.Confirm",
              "typeId": 0,
              "readableType": "Intent Classifier",
              "customPrebuiltDomainName": "Utilities",
              "customPrebuiltModelName": "Confirm"
            },
            {
              "id": "deb4f760-0522-4a8d-be47-c56306f40296",
              "name": "Utilities.Help",
              "typeId": 0,
              "readableType": "Intent Classifier",
              "customPrebuiltDomainName": "Utilities",
              "customPrebuiltModelName": "Help"
            },
            {
              "id": "ffdac32a-7b94-4336-ba82-35f2d599c27c",
              "name": "Utilities.StartOver",
              "typeId": 0,
              "readableType": "Intent Classifier",
              "customPrebuiltDomainName": "Utilities",
              "customPrebuiltModelName": "StartOver"
            },
            {
              "id": "0416fef5-7e76-4900-9642-988a746f7789",
              "name": "Utilities.Stop",
              "typeId": 0,
              "readableType": "Intent Classifier",
              "customPrebuiltDomainName": "Utilities",
              "customPrebuiltModelName": "Stop"
            }
          ]
        },
        {
          "version": "review",
          "createdDateTime": "2019-12-17T18:27:20Z",
          "lastModifiedDateTime": "2019-12-17T18:27:22Z",
          "lastTrainedDateTime": null,
          "lastPublishedDateTime": null,
          "endpointUrl": null,
          "assignedEndpointKey": null,
          "externalApiKeys": null,
          "intentsCount": 11,
          "entitiesCount": 3,
          "endpointHitsCount": 0,
          "trainingStatus": "NeedsTraining",
          "models": [
            {
              "id": "7d1f900d-ae5b-46c8-90f4-1531537b124b",
              "name": "ApplyForJob",
              "typeId": 0,
              "readableType": "Intent Classifier"
            },
            {
              "id": "565b1651-e04c-439c-a8bb-3d6dbbbcad61",
              "name": "datetimeV2",
              "typeId": 2,
              "readableType": "Prebuilt Entity Extractor",
              "roles": []
            },
            {
              "id": "8b4e2765-ecce-4843-931c-9cf6780f5a27",
              "name": "Employee",
              "typeId": 5,
              "readableType": "Closed List Entity Extractor",
              "subLists": [
                {
                  "id": 109687054,
                  "canonicalForm": "Employee-24612",
                  "list": [
                    "John W. Smith",
                    "john.w.smith@mycompany.com",
                    "x12345",
                    "425-555-1212",
                    "123-45-6789"
                  ]
                },
                {
                  "id": 109687055,
                  "canonicalForm": "Employee-45612",
                  "list": [
                    "Jill Jones",
                    "jill-jones@mycompany.com",
                    "x23456",
                    "425-555-0000",
                    "234-56-7891"
                  ]
                }
              ],
              "roles": []
            },
            {
              "id": "505d26dd-3105-4e81-8feb-e34ccd8c21c7",
              "name": "EmployeeFeedback",
              "typeId": 0,
              "readableType": "Intent Classifier"
            },
            {
              "id": "2a629209-5b45-4b22-83ef-1b0567783479",
              "name": "FindForm",
              "typeId": 0,
              "readableType": "Intent Classifier"
            },
            {
              "id": "baba4087-14d5-4371-9cd2-e38cae586b3b",
              "name": "GetJobInformation",
              "typeId": 0,
              "readableType": "Intent Classifier"
            },
            {
              "id": "b71bbd16-ca7e-4401-b910-140d362c82ef",
              "name": "HRF-number",
              "typeId": 8,
              "readableType": "Regex Entity Extractor",
              "regexPattern": "hrf-[0-9]{6}",
              "roles": []
            },
            {
              "id": "0b194a4d-02d9-40d4-82d9-7c6b46036964",
              "name": "Job",
              "typeId": 1,
              "readableType": "Entity Extractor",
              "children": [],
              "roles": []
            },
            {
              "id": "8b50937c-5a53-478b-ae20-f5b8a699a0e5",
              "name": "keyPhrase",
              "typeId": 2,
              "readableType": "Prebuilt Entity Extractor",
              "roles": []
            },
            {
              "id": "37c45caf-0efe-4227-8539-d739d85592a3",
              "name": "Locations",
              "typeId": 3,
              "readableType": "Hierarchical Entity Extractor",
              "children": [
                {
                  "id": "4c6702a7-c37d-4cec-8b55-d672bdd7513a",
                  "name": "Destination",
                  "typeId": 6,
                  "readableType": "Hierarchical Child Entity Extractor"
                },
                {
                  "id": "65ea4276-796e-4436-a1bf-2c56242d5398",
                  "name": "Origin",
                  "typeId": 6,
                  "readableType": "Hierarchical Child Entity Extractor"
                }
              ],
              "roles": []
            },
            {
              "id": "981c1b4e-b679-419c-ad59-a00bc487d3e3",
              "name": "MoveEmployee",
              "typeId": 0,
              "readableType": "Intent Classifier"
            },
            {
              "id": "a075de74-0da1-41b8-bfdc-10bb125ab035",
              "name": "None",
              "typeId": 0,
              "readableType": "Intent Classifier"
            },
            {
              "id": "3d956439-e196-400a-a21a-52fc5595d9b4",
              "name": "number",
              "typeId": 2,
              "readableType": "Prebuilt Entity Extractor",
              "roles": []
            },
            {
              "id": "59c9edc7-35ca-45de-a1ee-707c573f25eb",
              "name": "requestemployeemove",
              "typeId": 4,
              "readableType": "Composite Entity Extractor",
              "children": [
                {
                  "id": "565b1651-e04c-439c-a8bb-3d6dbbbcad61",
                  "name": "datetimeV2",
                  "typeId": 0
                },
                {
                  "id": "4c6702a7-c37d-4cec-8b55-d672bdd7513a",
                  "name": "Locations::Destination",
                  "typeId": 0
                },
                {
                  "id": "8b4e2765-ecce-4843-931c-9cf6780f5a27",
                  "name": "Employee",
                  "typeId": 0
                },
                {
                  "id": "65ea4276-796e-4436-a1bf-2c56242d5398",
                  "name": "Locations::Origin",
                  "typeId": 0
                }
              ],
              "roles": []
            },
            {
              "id": "931d2c29-84e5-4edd-a722-05db0da77a9d",
              "name": "Utilities.Cancel",
              "typeId": 0,
              "readableType": "Intent Classifier",
              "customPrebuiltDomainName": "Utilities",
              "customPrebuiltModelName": "Cancel"
            },
            {
              "id": "1670a02a-2d5c-4dd0-b8bd-9a32e999f6ed",
              "name": "Utilities.Confirm",
              "typeId": 0,
              "readableType": "Intent Classifier",
              "customPrebuiltDomainName": "Utilities",
              "customPrebuiltModelName": "Confirm"
            },
            {
              "id": "2ed83ccf-a788-4066-b0b8-730ab010abac",
              "name": "Utilities.Help",
              "typeId": 0,
              "readableType": "Intent Classifier",
              "customPrebuiltDomainName": "Utilities",
              "customPrebuiltModelName": "Help"
            },
            {
              "id": "9ebcb5bb-5541-48d2-84fe-54ffe1145f92",
              "name": "Utilities.StartOver",
              "typeId": 0,
              "readableType": "Intent Classifier",
              "customPrebuiltDomainName": "Utilities",
              "customPrebuiltModelName": "StartOver"
            },
            {
              "id": "58321e72-5d9d-495a-85a0-bca30e005c17",
              "name": "Utilities.Stop",
              "typeId": 0,
              "readableType": "Intent Classifier",
              "customPrebuiltDomainName": "Utilities",
              "customPrebuiltModelName": "Stop"
            }
          ]
        }
      ]
    },
    {
      "id": "866c574d-d127-4658-98c3-ef1b03c3e533",
      "name": "HumanResources",
      "description": "",
      "culture": "en-us",
      "usageScenario": "",
      "domain": "",
      "versionsCount": 1,
      "createdDateTime": "2019-12-16T18:18:46Z",
      "endpoints": {
        "PRODUCTION": {
          "versionId": "0.1",
          "directVersionPublish": false,
          "endpointUrl": "https://westus.api.cognitive.microsoft.com/luis/v2.0/apps/866c574d-d127-4658-98c3-ef1b03c3e533",
          "isStaging": false,
          "assignedEndpointKey": null,
          "region": null,
          "endpointRegion": "westus",
          "publishedDateTime": "2019-12-16T18:28:42Z",
          "failedRegions": null
        }
      },
      "endpointHitsCount": 0,
      "activeVersion": "0.1",
      "ownerEmail": null,
      "tokenizerVersion": "1.0.0",
      "versions": [
        {
          "version": "0.1",
          "createdDateTime": "2019-12-16T18:18:46Z",
          "lastModifiedDateTime": "2019-12-16T18:41:42Z",
          "lastTrainedDateTime": "2019-12-16T18:28:27Z",
          "lastPublishedDateTime": "2019-12-16T18:28:43Z",
          "endpointUrl": null,
          "assignedEndpointKey": null,
          "externalApiKeys": null,
          "intentsCount": 2,
          "entitiesCount": 0,
          "endpointHitsCount": 0,
          "trainingStatus": "NeedsTraining",
          "models": [
            {
              "id": "165498ef-580b-45bb-92c4-f6a6e1e54734",
              "name": "geographyV2",
              "typeId": 2,
              "readableType": "Prebuilt Entity Extractor",
              "roles": [
                {
                  "id": "422640a6-70c6-48ef-abaa-09be981c7784",
                  "name": "Destination"
                },
                {
                  "id": "327c3b90-9800-4022-896d-b4e3d22f24c8",
                  "name": "Origin"
                }
              ]
            },
            {
              "id": "65e58f13-2db0-43a0-9b04-e77a1afc3859",
              "name": "MoveEmployeeToCity",
              "typeId": 0,
              "readableType": "Intent Classifier"
            },
            {
              "id": "a0602275-d9e0-4446-b24c-52f369585a01",
              "name": "None",
              "typeId": 0,
              "readableType": "Intent Classifier"
            }
          ]
        }
      ]
    },
    {
      "id": "6a97ec74-7f6c-4fee-8604-c02f07f73f38",
      "name": "public issue 44648",
      "description": "",
      "culture": "en-us",
      "usageScenario": "",
      "domain": "",
      "versionsCount": 1,
      "createdDateTime": "2019-12-13T17:11:59Z",
      "endpoints": {},
      "endpointHitsCount": 0,
      "activeVersion": "0.1",
      "ownerEmail": null,
      "tokenizerVersion": "1.0.0",
      "versions": [
        {
          "version": "0.1",
          "createdDateTime": "2019-12-13T17:11:59Z",
          "lastModifiedDateTime": "2019-12-13T17:11:59Z",
          "lastTrainedDateTime": null,
          "lastPublishedDateTime": null,
          "endpointUrl": null,
          "assignedEndpointKey": null,
          "externalApiKeys": null,
          "intentsCount": 4,
          "entitiesCount": 0,
          "endpointHitsCount": 0,
          "trainingStatus": "NeedsTraining",
          "models": [
            {
              "id": "6c414e4c-3557-4fd1-a446-13854443dcd7",
              "name": "Confirm",
              "typeId": 0,
              "readableType": "Intent Classifier"
            },
            {
              "id": "c3c26a8f-8596-49fe-a580-295574c40c79",
              "name": "Greeting",
              "typeId": 0,
              "readableType": "Intent Classifier"
            },
            {
              "id": "60bdd7e7-13ec-4e4d-91a5-af4f952d4d2e",
              "name": "None",
              "typeId": 0,
              "readableType": "Intent Classifier"
            },
            {
              "id": "1eff7c7a-97b0-409d-869e-31408b9748b4",
              "name": "OrderPizza",
              "typeId": 0,
              "readableType": "Intent Classifier"
            }
          ]
        }
      ]
    },
    {
      "id": "482071c2-5d7b-4e13-bed1-49b1ed48d1fc",
      "name": "Pizza tutorial with entities",
      "description": "",
      "culture": "en-us",
      "usageScenario": "",
      "domain": "",
      "versionsCount": 1,
      "createdDateTime": "2019-12-12T20:49:04Z",
      "endpoints": {},
      "endpointHitsCount": 0,
      "activeVersion": "0.1",
      "ownerEmail": null,
      "tokenizerVersion": "1.0.0",
      "versions": [
        {
          "version": "0.1",
          "createdDateTime": "2019-12-12T20:49:04Z",
          "lastModifiedDateTime": "2019-12-13T01:02:41Z",
          "lastTrainedDateTime": "2019-12-13T01:02:39Z",
          "lastPublishedDateTime": null,
          "endpointUrl": null,
          "assignedEndpointKey": null,
          "externalApiKeys": null,
          "intentsCount": 4,
          "entitiesCount": 1,
          "endpointHitsCount": 0,
          "trainingStatus": "Trained",
          "models": [
            {
              "id": "d7f15c51-05ee-4806-9e82-25b58e375596",
              "name": "Confirm",
              "typeId": 0,
              "readableType": "Intent Classifier"
            },
            {
              "id": "4c24c08b-1893-494e-9774-3c0812e13080",
              "name": "Greeting",
              "typeId": 0,
              "readableType": "Intent Classifier"
            },
            {
              "id": "0e070a70-65c9-47a5-aa94-f83583c5f1e9",
              "name": "None",
              "typeId": 0,
              "readableType": "Intent Classifier"
            },
            {
              "id": "167946ba-0c41-4517-847d-06eddc68fa5f",
              "name": "number",
              "typeId": 2,
              "readableType": "Prebuilt Entity Extractor",
              "roles": []
            },
            {
              "id": "30e05f3f-c7bb-4fa3-a1ba-020a8e95a3c0",
              "name": "Order",
              "typeId": 1,
              "readableType": "Entity Extractor",
              "children": [
                {
                  "id": "03150308-d6da-4bd8-b184-d04c31370010",
                  "name": "Size",
                  "children": [],
                  "typeId": 1,
                  "readableType": "Child Entity Extractor"
                },
                {
                  "id": "2d50776a-3224-4e03-93ba-6ff6330ae18c",
                  "name": "Quantity",
                  "instanceOf": "number",
                  "children": [],
                  "typeId": 1,
                  "readableType": "Child Entity Extractor"
                }
              ],
              "roles": []
            },
            {
              "id": "f4381ea0-a8cf-4439-b9fd-bb8daeb329de",
              "name": "OrderPizza",
              "typeId": 0,
              "readableType": "Intent Classifier"
            }
          ]
        }
      ]
    },
    {
      "id": "e81bd25c-41c7-4ff1-8f8a-de2ad3f29f3c",
      "name": "Pizza App",
      "description": "",
      "culture": "en-us",
      "usageScenario": "",
      "domain": "",
      "versionsCount": 5,
      "createdDateTime": "2019-11-15T21:40:11Z",
      "endpoints": {
        "STAGING": {
          "versionId": "0.3",
          "directVersionPublish": false,
          "endpointUrl": "https://westus.api.cognitive.microsoft.com/luis/v2.0/apps/e81bd25c-41c7-4ff1-8f8a-de2ad3f29f3c",
          "isStaging": true,
          "assignedEndpointKey": null,
          "region": null,
          "endpointRegion": "westus",
          "publishedDateTime": "2019-11-19T22:19:58Z",
          "failedRegions": null
        },
        "PRODUCTION": {
          "versionId": "0.4",
          "directVersionPublish": false,
          "endpointUrl": "https://westus.api.cognitive.microsoft.com/luis/v2.0/apps/e81bd25c-41c7-4ff1-8f8a-de2ad3f29f3c",
          "isStaging": false,
          "assignedEndpointKey": null,
          "region": null,
          "endpointRegion": "westus",
          "publishedDateTime": "2019-12-12T16:59:42Z",
          "failedRegions": null
        }
      },
      "endpointHitsCount": 1,
      "activeVersion": "0.4",
      "ownerEmail": null,
      "tokenizerVersion": "1.0.0",
      "versions": [
        {
          "version": "0.1",
          "createdDateTime": "2019-11-19T22:04:00Z",
          "lastModifiedDateTime": "2019-11-19T22:05:23Z",
          "lastTrainedDateTime": "2019-11-19T19:55:15Z",
          "lastPublishedDateTime": null,
          "endpointUrl": null,
          "assignedEndpointKey": null,
          "externalApiKeys": null,
          "intentsCount": 2,
          "entitiesCount": 1,
          "endpointHitsCount": 1,
          "trainingStatus": "NeedsTraining",
          "models": [
            {
              "id": "97da4fc8-4d0e-4bcc-98a8-1c50c47ea36c",
              "name": "CrustList",
              "typeId": 5,
              "readableType": "Closed List Entity Extractor",
              "subLists": [
                {
                  "id": 106023932,
                  "canonicalForm": "Deep Dish",
                  "list": ["deep dish", "deep dish crust"]
                },
                {
                  "id": 106023933,
                  "canonicalForm": "Pan",
                  "list": [
                    "regular",
                    "normal",
                    "original",
                    "regular crust",
                    "normal crust",
                    "original crust"
                  ]
                },
                {
                  "id": 106023934,
                  "canonicalForm": "Stuffed Crust",
                  "list": ["stuffed criust", "stuffed crusts"]
                },
                {
                  "id": 106023935,
                  "canonicalForm": "Thin",
                  "list": ["thin", "skinny", "thin crust", "skinny crust"]
                }
              ],
              "roles": []
            },
            {
              "id": "9c5f4e7c-e115-4f1a-a73b-5c129b8a1236",
              "name": "Deliver",
              "typeId": 5,
              "readableType": "Closed List Entity Extractor",
              "subLists": [],
              "roles": [
                {
                  "id": "02365747-f2aa-4e78-988d-8c852304c013",
                  "name": "Destination"
                },
                {
                  "id": "c03350be-5a56-4f05-bf2b-e2f4d9ffb99f",
                  "name": "Origin"
                }
              ]
            },
            {
              "id": "5b0c73c5-ee51-4492-93ca-10ebad8a0a5d",
              "name": "ModifierList",
              "typeId": 5,
              "readableType": "Closed List Entity Extractor",
              "subLists": [
                {
                  "id": 106023936,
                  "canonicalForm": "Add",
                  "list": [
                    "with",
                    "with extra",
                    "extra",
                    "add",
                    "more of",
                    "needs",
                    "just",
                    "replaced with",
                    "with some"
                  ]
                },
                {
                  "id": 106023937,
                  "canonicalForm": "Remove",
                  "list": [
                    "without",
                    "substitute",
                    "no",
                    "hold",
                    "hold the",
                    "replace",
                    "instead of",
                    "with no",
                    "leave off",
                    "not want",
                    "dont want",
                    "except"
                  ]
                }
              ],
              "roles": []
            },
            {
              "id": "d57e5d5d-9b28-4d41-b924-653a2e39b057",
              "name": "ModifyOrder",
              "typeId": 0,
              "readableType": "Intent Classifier"
            },
            {
              "id": "e7fef36b-bae8-4289-8cfb-d3c560aae604",
              "name": "None",
              "typeId": 0,
              "readableType": "Intent Classifier"
            },
            {
              "id": "721cc865-a7b9-45c1-8197-1b04a5bdec5d",
              "name": "number",
              "typeId": 2,
              "readableType": "Prebuilt Entity Extractor",
              "roles": []
            },
            {
              "id": "732a1560-a0ad-47fa-9092-c017f01c6998",
              "name": "Order",
              "typeId": 1,
              "readableType": "Entity Extractor",
              "children": [
                {
                  "id": "7cabae61-b6ca-4d72-80ec-5490bcb4f58c",
                  "name": "FullPizzaWithModifiers",
                  "children": [
                    {
                      "id": "3fd1c7e8-d584-4db4-b375-2340e3c68f19",
                      "name": "PizzaType",
                      "children": [],
                      "typeId": 1,
                      "readableType": "Child Entity Extractor"
                    },
                    {
                      "id": "6cad6984-f171-4270-97cf-695144141e6a",
                      "name": "Size",
                      "instanceOf": "SizeList",
                      "children": [],
                      "typeId": 1,
                      "readableType": "Child Entity Extractor"
                    },
                    {
                      "id": "7e5a007d-f475-4663-a659-77c6b77b0f31",
                      "name": "Quantity",
                      "instanceOf": "number",
                      "children": [],
                      "typeId": 1,
                      "readableType": "Child Entity Extractor"
                    },
                    {
                      "id": "8d5f8b51-9f4a-438b-93e0-c8e8f3d274e5",
                      "name": "Crust",
                      "instanceOf": "CrustList",
                      "children": [],
                      "typeId": 1,
                      "readableType": "Child Entity Extractor"
                    },
                    {
                      "id": "b564aeba-a99f-4404-b3fd-c753242a4a89",
                      "name": "ToppingModifiers",
                      "children": [
                        {
                          "id": "c4a17e4c-8146-4848-a7cd-d5228837ae5e",
                          "name": "Topping",
                          "instanceOf": "ToppingList",
                          "children": [],
                          "typeId": 1,
                          "readableType": "Child Entity Extractor"
                        },
                        {
                          "id": "7b5c7278-9401-408c-a63e-152571dd646d",
                          "name": "Modifier",
                          "instanceOf": "ModifierList",
                          "children": [],
                          "typeId": 1,
                          "readableType": "Child Entity Extractor"
                        },
                        {
                          "id": "1b5dafe7-7991-437e-83d9-d9411813eee5",
                          "name": "Scope",
                          "instanceOf": "ScopeList",
                          "children": [],
                          "typeId": 1,
                          "readableType": "Child Entity Extractor"
                        }
                      ],
                      "typeId": 1,
                      "readableType": "Child Entity Extractor"
                    }
                  ],
                  "typeId": 1,
                  "readableType": "Child Entity Extractor"
                },
                {
                  "id": "ef4d8bb0-796a-4914-91f1-741f6cf192cd",
                  "name": "SideOrder",
                  "children": [
                    {
                      "id": "0cbe4824-510d-4e03-b2cf-b5f531d3ab97",
                      "name": "SideProduct",
                      "children": [],
                      "typeId": 1,
                      "readableType": "Child Entity Extractor"
                    }
                  ],
                  "typeId": 1,
                  "readableType": "Child Entity Extractor"
                }
              ],
              "roles": []
            },
            {
              "id": "78547723-f20d-427c-b135-b15cd3ccfa87",
              "name": "ScopeList",
              "typeId": 5,
              "readableType": "Closed List Entity Extractor",
              "subLists": [
                {
                  "id": 106023938,
                  "canonicalForm": "Half",
                  "list": [
                    "on half",
                    "on one half",
                    "the other half",
                    "half with",
                    "on one side",
                    "one side",
                    "1/2",
                    "on the other half",
                    "other half",
                    "the other"
                  ]
                },
                {
                  "id": 106023939,
                  "canonicalForm": "Half And Half",
                  "list": ["half and half", "half & half"]
                },
                {
                  "id": 106023940,
                  "canonicalForm": "On One",
                  "list": ["on one", "on one of them"]
                }
              ],
              "roles": []
            },
            {
              "id": "cc6b7890-8545-467b-856c-29f1728418b5",
              "name": "SizeList",
              "typeId": 5,
              "readableType": "Closed List Entity Extractor",
              "subLists": [
                {
                  "id": 106023941,
                  "canonicalForm": "Extra Large",
                  "list": ["XL", "huge", "super big", "massive"]
                },
                {
                  "id": 106023942,
                  "canonicalForm": "Large",
                  "list": ["large"]
                },
                {
                  "id": 106023943,
                  "canonicalForm": "Medium",
                  "list": ["medium", "regular", "individual"]
                },
                {
                  "id": 106023944,
                  "canonicalForm": "Party Size",
                  "list": ["party size"]
                },
                {
                  "id": 106023945,
                  "canonicalForm": "Small",
                  "list": ["small", "smallest"]
                }
              ],
              "roles": []
            },
            {
              "id": "a62bc191-16e9-4fb6-a7c1-bf6278963ff9",
              "name": "ToppingList",
              "typeId": 5,
              "readableType": "Closed List Entity Extractor",
              "subLists": [
                {
                  "id": 106023946,
                  "canonicalForm": "Alfredo Sauce",
                  "list": ["alfredo", "alfredo sauce", "white sauce"]
                },
                {
                  "id": 106023947,
                  "canonicalForm": "All",
                  "list": ["everything", "various toppings"]
                },
                {
                  "id": 106023948,
                  "canonicalForm": "Anchovies",
                  "list": ["anchovie", "anchovies"]
                },
                {
                  "id": 106023949,
                  "canonicalForm": "Artichoke",
                  "list": ["artichokes", "artichoke"]
                },
                {
                  "id": 106023950,
                  "canonicalForm": "Artichokes",
                  "list": ["artichokes", "artichoke", "artichockes"]
                },
                {
                  "id": 106023951,
                  "canonicalForm": "Bacon",
                  "list": ["bacon", "bacon strips"]
                },
                {
                  "id": 106023952,
                  "canonicalForm": "Banana Pepper",
                  "list": [
                    "yellow peppers",
                    "yellow pepper",
                    "banana pepper",
                    "banana peppers"
                  ]
                },
                {
                  "id": 106023953,
                  "canonicalForm": "Barbecue",
                  "list": ["BBQ", "barbeque", "barbecue"]
                },
                {
                  "id": 106023954,
                  "canonicalForm": "Basil",
                  "list": ["basil", "basils"]
                },
                {
                  "id": 106023955,
                  "canonicalForm": "Beef",
                  "list": ["beef", "ground beef", "meat", "hamburger"]
                },
                {
                  "id": 106023956,
                  "canonicalForm": "Broccoli",
                  "list": ["broccoli"]
                },
                {
                  "id": 106023957,
                  "canonicalForm": "Canadian Bacon",
                  "list": ["canadian bacon", "canada bacon"]
                },
                {
                  "id": 106023958,
                  "canonicalForm": "Cheddar",
                  "list": ["cheddar", "cheddar cheese"]
                },
                {
                  "id": 106023959,
                  "canonicalForm": "Cheese",
                  "list": ["cheeses", "cheese"]
                },
                {
                  "id": 106023960,
                  "canonicalForm": "Chicken",
                  "list": ["chicken", "chickens", "grilled chicken"]
                },
                {
                  "id": 106023961,
                  "canonicalForm": "Corn",
                  "list": ["corn"]
                },
                {
                  "id": 106023962,
                  "canonicalForm": "Dip",
                  "list": []
                },
                {
                  "id": 106023963,
                  "canonicalForm": "Eggplant",
                  "list": ["eggplant", "eggplants"]
                },
                {
                  "id": 106023964,
                  "canonicalForm": "Garlic",
                  "list": ["garlic", "garlics"]
                },
                {
                  "id": 106023965,
                  "canonicalForm": "Green Olive",
                  "list": ["green olive", "green olives"]
                },
                {
                  "id": 106023966,
                  "canonicalForm": "Ham",
                  "list": ["ham"]
                },
                {
                  "id": 106023967,
                  "canonicalForm": "Hot Sauce",
                  "list": ["hot sauce"]
                },
                {
                  "id": 106023968,
                  "canonicalForm": "Jalapeno",
                  "list": [
                    "Jalapenos",
                    "jalapeno",
                    "jalapeno peppers",
                    "jalapeno pepper",
                    "spicy peppers"
                  ]
                },
                {
                  "id": 106023969,
                  "canonicalForm": "Lettuce",
                  "list": ["lettuce"]
                },
                {
                  "id": 106023970,
                  "canonicalForm": "Meatballs",
                  "list": ["meatball", "meatballs"]
                },
                {
                  "id": 106023971,
                  "canonicalForm": "Mozzarella",
                  "list": [
                    "mozzarella",
                    "mozzarella cheese",
                    "mozzerella",
                    "mozzerella cheese",
                    "mozarela cheese",
                    "mozarela",
                    "mozzaralla ranch",
                    "mozzerella ranch"
                  ]
                },
                {
                  "id": 106023972,
                  "canonicalForm": "Mushroom",
                  "list": ["Mushrooms", "mushroom", "muhsroom"]
                },
                {
                  "id": 106023973,
                  "canonicalForm": "Olive",
                  "list": ["olive", "black olive", "black olives", "olives"]
                },
                {
                  "id": 106023974,
                  "canonicalForm": "Onions",
                  "list": ["onion", "onions", "grilled onions"]
                },
                {
                  "id": 106023975,
                  "canonicalForm": "Oregano",
                  "list": ["oregano", "oreganos"]
                },
                {
                  "id": 106023976,
                  "canonicalForm": "Parmesan Cheese",
                  "list": ["parmesan cheese", "parmisan cheese", "parmesan"]
                },
                {
                  "id": 106023977,
                  "canonicalForm": "Pepperoni",
                  "list": ["pepperoni", "pepperonis", "peperoni"]
                },
                {
                  "id": 106023978,
                  "canonicalForm": "Peppers",
                  "list": ["green peppers", "green pepper", "pepper", "peppers"]
                },
                {
                  "id": 106023979,
                  "canonicalForm": "Pesto",
                  "list": ["pesto", "pesto sauce"]
                },
                {
                  "id": 106023980,
                  "canonicalForm": "Pineapple",
                  "list": ["pineapple", "pineapples"]
                },
                {
                  "id": 106023981,
                  "canonicalForm": "Ranch",
                  "list": ["ranch", "ranch sauce"]
                },
                {
                  "id": 106023982,
                  "canonicalForm": "Red Peppers",
                  "list": ["red pepper", "red peppers"]
                },
                {
                  "id": 106023983,
                  "canonicalForm": "Salami",
                  "list": ["salami", "salamis"]
                },
                {
                  "id": 106023984,
                  "canonicalForm": "Sauce",
                  "list": ["sauce", "red sauce", "red sauces", "pizza sauce"]
                },
                {
                  "id": 106023985,
                  "canonicalForm": "Sausage",
                  "list": ["italian sausage", "sausage", "sausages"]
                },
                {
                  "id": 106023986,
                  "canonicalForm": "Spinach",
                  "list": ["spinach"]
                },
                {
                  "id": 106023987,
                  "canonicalForm": "Sun Dried Tomato",
                  "list": ["sun-dried tomato"]
                },
                {
                  "id": 106023988,
                  "canonicalForm": "Tomato",
                  "list": ["tomato", "tomatos", "tomatoes"]
                },
                {
                  "id": 106023989,
                  "canonicalForm": "Turkey",
                  "list": ["turkey"]
                },
                {
                  "id": 106023990,
                  "canonicalForm": "Works",
                  "list": ["various toppings", "the works"]
                },
                {
                  "id": 106023991,
                  "canonicalForm": "Zuccini",
                  "list": ["zuccinis", "zuccini"]
                }
              ],
              "roles": []
            }
          ]
        },
        {
          "version": "0.2",
          "createdDateTime": "2019-11-19T22:02:46Z",
          "lastModifiedDateTime": "2019-11-19T22:07:49Z",
          "lastTrainedDateTime": "2019-11-19T22:07:46Z",
          "lastPublishedDateTime": "2019-11-19T22:08:28Z",
          "endpointUrl": null,
          "assignedEndpointKey": null,
          "externalApiKeys": null,
          "intentsCount": 2,
          "entitiesCount": 1,
          "endpointHitsCount": 1,
          "trainingStatus": "Trained",
          "models": [
            {
              "id": "00fbfcbc-7ef6-4fca-b5cf-f20ccd630a7c",
              "name": "CrustList",
              "typeId": 5,
              "readableType": "Closed List Entity Extractor",
              "subLists": [
                {
                  "id": 106023861,
                  "canonicalForm": "Deep Dish",
                  "list": ["deep dish", "deep dish crust"]
                },
                {
                  "id": 106023862,
                  "canonicalForm": "Pan",
                  "list": [
                    "regular",
                    "normal",
                    "original",
                    "regular crust",
                    "normal crust",
                    "original crust"
                  ]
                },
                {
                  "id": 106023863,
                  "canonicalForm": "Stuffed Crust",
                  "list": ["stuffed criust", "stuffed crusts"]
                },
                {
                  "id": 106023864,
                  "canonicalForm": "Thin",
                  "list": ["thin", "skinny", "thin crust", "skinny crust"]
                }
              ],
              "roles": []
            },
            {
              "id": "837b9885-5694-4ac2-9564-be206b87c830",
              "name": "Deliver",
              "typeId": 5,
              "readableType": "Closed List Entity Extractor",
              "subLists": [],
              "roles": [
                {
                  "id": "0251eb9a-3dfe-4549-b2d4-8cd574246323",
                  "name": "Destination"
                },
                {
                  "id": "747c1b0a-8da4-4b06-8b48-e9f0cb71e766",
                  "name": "Origin"
                }
              ]
            },
            {
              "id": "26e64b96-7003-4584-9cdb-e95256052a6f",
              "name": "ModifierList",
              "typeId": 5,
              "readableType": "Closed List Entity Extractor",
              "subLists": [
                {
                  "id": 106023865,
                  "canonicalForm": "Add",
                  "list": [
                    "with",
                    "with extra",
                    "extra",
                    "add",
                    "more of",
                    "needs",
                    "just",
                    "replaced with",
                    "with some"
                  ]
                },
                {
                  "id": 106023866,
                  "canonicalForm": "Remove",
                  "list": [
                    "without",
                    "substitute",
                    "no",
                    "hold",
                    "hold the",
                    "replace",
                    "instead of",
                    "with no",
                    "leave off",
                    "not want",
                    "dont want",
                    "except"
                  ]
                }
              ],
              "roles": []
            },
            {
              "id": "6ed0cde2-2ac0-495e-a208-56b2bdab5bd9",
              "name": "ModifyOrder",
              "typeId": 0,
              "readableType": "Intent Classifier"
            },
            {
              "id": "4ba14c0f-a86e-41e0-9257-f1cf8ed43e78",
              "name": "None",
              "typeId": 0,
              "readableType": "Intent Classifier"
            },
            {
              "id": "f535b34e-1aa3-4bf3-a863-2ab5790a720b",
              "name": "number",
              "typeId": 2,
              "readableType": "Prebuilt Entity Extractor",
              "roles": []
            },
            {
              "id": "5a0511c9-1ff3-4428-ac04-762a83387a61",
              "name": "Order",
              "typeId": 1,
              "readableType": "Entity Extractor",
              "children": [
                {
                  "id": "6449c741-6d6c-4b91-90a5-11e9f0efe469",
                  "name": "FullPizzaWithModifiers",
                  "children": [
                    {
                      "id": "7aafd486-9e0e-4cb6-a156-6041453b60e9",
                      "name": "PizzaType",
                      "children": [],
                      "typeId": 1,
                      "readableType": "Child Entity Extractor"
                    },
                    {
                      "id": "38dd3893-e76d-4e8b-97e9-17c3bf107f6b",
                      "name": "Size",
                      "instanceOf": "SizeList",
                      "children": [],
                      "typeId": 1,
                      "readableType": "Child Entity Extractor"
                    },
                    {
                      "id": "c5a2cd90-ad1e-4d13-b767-a4337360f3fe",
                      "name": "Quantity",
                      "instanceOf": "number",
                      "children": [],
                      "typeId": 1,
                      "readableType": "Child Entity Extractor"
                    },
                    {
                      "id": "a969bac4-bd13-49f4-a34e-d12221176b2b",
                      "name": "Crust",
                      "instanceOf": "CrustList",
                      "children": [],
                      "typeId": 1,
                      "readableType": "Child Entity Extractor"
                    },
                    {
                      "id": "6fd5d6fa-95f0-4148-bc8f-81f0123b09df",
                      "name": "ToppingModifiers",
                      "children": [
                        {
                          "id": "61133faa-8437-4476-8f9e-aed8a915e1ad",
                          "name": "Topping",
                          "instanceOf": "ToppingList",
                          "children": [],
                          "typeId": 1,
                          "readableType": "Child Entity Extractor"
                        },
                        {
                          "id": "d531ca11-b1b0-47bb-86d4-551d35240c4d",
                          "name": "Modifier",
                          "instanceOf": "ModifierList",
                          "children": [],
                          "typeId": 1,
                          "readableType": "Child Entity Extractor"
                        },
                        {
                          "id": "aa9f6eb0-be85-48b6-8f1b-4c3a2d37afcb",
                          "name": "Scope",
                          "instanceOf": "ScopeList",
                          "children": [],
                          "typeId": 1,
                          "readableType": "Child Entity Extractor"
                        }
                      ],
                      "typeId": 1,
                      "readableType": "Child Entity Extractor"
                    }
                  ],
                  "typeId": 1,
                  "readableType": "Child Entity Extractor"
                },
                {
                  "id": "c9804cb7-365f-4d85-b253-71f6f86072dc",
                  "name": "SideOrder",
                  "children": [
                    {
                      "id": "e3d4e50a-5d19-444b-a999-2c88e43473df",
                      "name": "SideProduct",
                      "children": [],
                      "typeId": 1,
                      "readableType": "Child Entity Extractor"
                    }
                  ],
                  "typeId": 1,
                  "readableType": "Child Entity Extractor"
                }
              ],
              "roles": []
            },
            {
              "id": "559ab965-a66d-437c-9bdc-b9cd759a896c",
              "name": "ScopeList",
              "typeId": 5,
              "readableType": "Closed List Entity Extractor",
              "subLists": [
                {
                  "id": 106023868,
                  "canonicalForm": "Half",
                  "list": [
                    "on half",
                    "on one half",
                    "the other half",
                    "half with",
                    "on one side",
                    "one side",
                    "1/2",
                    "on the other half",
                    "other half",
                    "the other"
                  ]
                },
                {
                  "id": 106023869,
                  "canonicalForm": "Half And Half",
                  "list": ["half and half", "half & half"]
                },
                {
                  "id": 106023870,
                  "canonicalForm": "On One",
                  "list": ["on one", "on one of them"]
                }
              ],
              "roles": []
            },
            {
              "id": "ab0fbaed-7c27-44a0-81a9-aea7d8b3e14b",
              "name": "SizeList",
              "typeId": 5,
              "readableType": "Closed List Entity Extractor",
              "subLists": [
                {
                  "id": 106023871,
                  "canonicalForm": "Extra Large",
                  "list": ["XL", "huge", "super big", "massive"]
                },
                {
                  "id": 106023872,
                  "canonicalForm": "Large",
                  "list": ["large"]
                },
                {
                  "id": 106023873,
                  "canonicalForm": "Medium",
                  "list": ["medium", "regular", "individual"]
                },
                {
                  "id": 106023874,
                  "canonicalForm": "Party Size",
                  "list": ["party size"]
                },
                {
                  "id": 106023875,
                  "canonicalForm": "Small",
                  "list": ["small", "smallest"]
                }
              ],
              "roles": []
            },
            {
              "id": "ab8006f5-c783-471a-91e1-ad66a3896e97",
              "name": "ToppingList",
              "typeId": 5,
              "readableType": "Closed List Entity Extractor",
              "subLists": [
                {
                  "id": 106023876,
                  "canonicalForm": "Alfredo Sauce",
                  "list": ["alfredo", "alfredo sauce", "white sauce"]
                },
                {
                  "id": 106023877,
                  "canonicalForm": "All",
                  "list": ["everything", "various toppings"]
                },
                {
                  "id": 106023878,
                  "canonicalForm": "Anchovies",
                  "list": ["anchovie", "anchovies"]
                },
                {
                  "id": 106023879,
                  "canonicalForm": "Artichoke",
                  "list": ["artichokes", "artichoke"]
                },
                {
                  "id": 106023880,
                  "canonicalForm": "Artichokes",
                  "list": ["artichokes", "artichoke", "artichockes"]
                },
                {
                  "id": 106023881,
                  "canonicalForm": "Bacon",
                  "list": ["bacon", "bacon strips"]
                },
                {
                  "id": 106023882,
                  "canonicalForm": "Banana Pepper",
                  "list": [
                    "yellow peppers",
                    "yellow pepper",
                    "banana pepper",
                    "banana peppers"
                  ]
                },
                {
                  "id": 106023883,
                  "canonicalForm": "Barbecue",
                  "list": ["BBQ", "barbeque", "barbecue"]
                },
                {
                  "id": 106023884,
                  "canonicalForm": "Basil",
                  "list": ["basil", "basils"]
                },
                {
                  "id": 106023885,
                  "canonicalForm": "Beef",
                  "list": ["beef", "ground beef", "meat", "hamburger"]
                },
                {
                  "id": 106023886,
                  "canonicalForm": "Broccoli",
                  "list": ["broccoli"]
                },
                {
                  "id": 106023887,
                  "canonicalForm": "Canadian Bacon",
                  "list": ["canadian bacon", "canada bacon"]
                },
                {
                  "id": 106023888,
                  "canonicalForm": "Cheddar",
                  "list": ["cheddar", "cheddar cheese"]
                },
                {
                  "id": 106023889,
                  "canonicalForm": "Cheese",
                  "list": ["cheeses", "cheese"]
                },
                {
                  "id": 106023890,
                  "canonicalForm": "Chicken",
                  "list": ["chicken", "chickens", "grilled chicken"]
                },
                {
                  "id": 106023891,
                  "canonicalForm": "Corn",
                  "list": ["corn"]
                },
                {
                  "id": 106023892,
                  "canonicalForm": "Dip",
                  "list": []
                },
                {
                  "id": 106023893,
                  "canonicalForm": "Eggplant",
                  "list": ["eggplant", "eggplants"]
                },
                {
                  "id": 106023894,
                  "canonicalForm": "Garlic",
                  "list": ["garlic", "garlics"]
                },
                {
                  "id": 106023895,
                  "canonicalForm": "Green Olive",
                  "list": ["green olive", "green olives"]
                },
                {
                  "id": 106023896,
                  "canonicalForm": "Ham",
                  "list": ["ham"]
                },
                {
                  "id": 106023897,
                  "canonicalForm": "Hot Sauce",
                  "list": ["hot sauce"]
                },
                {
                  "id": 106023898,
                  "canonicalForm": "Jalapeno",
                  "list": [
                    "Jalapenos",
                    "jalapeno",
                    "jalapeno peppers",
                    "jalapeno pepper",
                    "spicy peppers"
                  ]
                },
                {
                  "id": 106023899,
                  "canonicalForm": "Lettuce",
                  "list": ["lettuce"]
                },
                {
                  "id": 106023900,
                  "canonicalForm": "Meatballs",
                  "list": ["meatball", "meatballs"]
                },
                {
                  "id": 106023901,
                  "canonicalForm": "Mozzarella",
                  "list": [
                    "mozzarella",
                    "mozzarella cheese",
                    "mozzerella",
                    "mozzerella cheese",
                    "mozarela cheese",
                    "mozarela",
                    "mozzaralla ranch",
                    "mozzerella ranch"
                  ]
                },
                {
                  "id": 106023902,
                  "canonicalForm": "Mushroom",
                  "list": ["Mushrooms", "mushroom", "muhsroom"]
                },
                {
                  "id": 106023903,
                  "canonicalForm": "Olive",
                  "list": ["olive", "black olive", "black olives", "olives"]
                },
                {
                  "id": 106023904,
                  "canonicalForm": "Onions",
                  "list": ["onion", "onions", "grilled onions"]
                },
                {
                  "id": 106023905,
                  "canonicalForm": "Oregano",
                  "list": ["oregano", "oreganos"]
                },
                {
                  "id": 106023906,
                  "canonicalForm": "Parmesan Cheese",
                  "list": ["parmesan cheese", "parmisan cheese", "parmesan"]
                },
                {
                  "id": 106023907,
                  "canonicalForm": "Pepperoni",
                  "list": ["pepperoni", "pepperonis", "peperoni"]
                },
                {
                  "id": 106023908,
                  "canonicalForm": "Peppers",
                  "list": ["green peppers", "green pepper", "pepper", "peppers"]
                },
                {
                  "id": 106023909,
                  "canonicalForm": "Pesto",
                  "list": ["pesto", "pesto sauce"]
                },
                {
                  "id": 106023910,
                  "canonicalForm": "Pineapple",
                  "list": ["pineapple", "pineapples"]
                },
                {
                  "id": 106023911,
                  "canonicalForm": "Ranch",
                  "list": ["ranch", "ranch sauce"]
                },
                {
                  "id": 106023912,
                  "canonicalForm": "Red Peppers",
                  "list": ["red pepper", "red peppers"]
                },
                {
                  "id": 106023913,
                  "canonicalForm": "Salami",
                  "list": ["salami", "salamis"]
                },
                {
                  "id": 106023914,
                  "canonicalForm": "Sauce",
                  "list": ["sauce", "red sauce", "red sauces", "pizza sauce"]
                },
                {
                  "id": 106023915,
                  "canonicalForm": "Sausage",
                  "list": ["italian sausage", "sausage", "sausages"]
                },
                {
                  "id": 106023916,
                  "canonicalForm": "Spinach",
                  "list": ["spinach"]
                },
                {
                  "id": 106023917,
                  "canonicalForm": "Sun Dried Tomato",
                  "list": ["sun-dried tomato"]
                },
                {
                  "id": 106023918,
                  "canonicalForm": "Tomato",
                  "list": ["tomato", "tomatos", "tomatoes"]
                },
                {
                  "id": 106023919,
                  "canonicalForm": "Turkey",
                  "list": ["turkey"]
                },
                {
                  "id": 106023920,
                  "canonicalForm": "Works",
                  "list": ["various toppings", "the works"]
                },
                {
                  "id": 106023921,
                  "canonicalForm": "Zuccini",
                  "list": ["zuccinis", "zuccini"]
                }
              ],
              "roles": []
            }
          ]
        },
        {
          "version": "0.3",
          "createdDateTime": "2019-11-19T22:01:45Z",
          "lastModifiedDateTime": "2019-11-19T22:09:51Z",
          "lastTrainedDateTime": "2019-11-19T22:09:47Z",
          "lastPublishedDateTime": "2019-11-19T22:19:59Z",
          "endpointUrl": null,
          "assignedEndpointKey": null,
          "externalApiKeys": null,
          "intentsCount": 2,
          "entitiesCount": 1,
          "endpointHitsCount": 1,
          "trainingStatus": "Trained",
          "models": [
            {
              "id": "bdf5776c-3b1a-48f4-b18d-c1e0469c2fa5",
              "name": "CrustList",
              "typeId": 5,
              "readableType": "Closed List Entity Extractor",
              "subLists": [
                {
                  "id": 106023793,
                  "canonicalForm": "Deep Dish",
                  "list": ["deep dish", "deep dish crust"]
                },
                {
                  "id": 106023794,
                  "canonicalForm": "Pan",
                  "list": [
                    "regular",
                    "normal",
                    "original",
                    "regular crust",
                    "normal crust",
                    "original crust"
                  ]
                },
                {
                  "id": 106023795,
                  "canonicalForm": "Stuffed Crust",
                  "list": ["stuffed criust", "stuffed crusts"]
                },
                {
                  "id": 106023796,
                  "canonicalForm": "Thin",
                  "list": ["thin", "skinny", "thin crust", "skinny crust"]
                }
              ],
              "roles": []
            },
            {
              "id": "2a72ef2d-2569-425e-b1a9-81953b86c741",
              "name": "Deliver",
              "typeId": 5,
              "readableType": "Closed List Entity Extractor",
              "subLists": [],
              "roles": [
                {
                  "id": "1d1043cc-9c33-4055-8759-651bf2f4a81d",
                  "name": "Destination"
                },
                {
                  "id": "5f25a523-c704-48ba-b7bb-e8d223f9d98f",
                  "name": "Origin"
                }
              ]
            },
            {
              "id": "620408d1-0268-4576-a394-1a4a17132d9b",
              "name": "ModifierList",
              "typeId": 5,
              "readableType": "Closed List Entity Extractor",
              "subLists": [
                {
                  "id": 106023797,
                  "canonicalForm": "Add",
                  "list": [
                    "with",
                    "with extra",
                    "extra",
                    "add",
                    "more of",
                    "needs",
                    "just",
                    "replaced with",
                    "with some"
                  ]
                },
                {
                  "id": 106023798,
                  "canonicalForm": "Remove",
                  "list": [
                    "without",
                    "substitute",
                    "no",
                    "hold",
                    "hold the",
                    "replace",
                    "instead of",
                    "with no",
                    "leave off",
                    "not want",
                    "dont want",
                    "except"
                  ]
                }
              ],
              "roles": []
            },
            {
              "id": "b066926b-5b75-441a-8391-e21c3ab59e8e",
              "name": "ModifyOrder",
              "typeId": 0,
              "readableType": "Intent Classifier"
            },
            {
              "id": "fcbfc687-9f34-411f-bfb5-4ad69a3e8ac8",
              "name": "None",
              "typeId": 0,
              "readableType": "Intent Classifier"
            },
            {
              "id": "47618975-4c29-4781-a3f4-59242ffe3c08",
              "name": "number",
              "typeId": 2,
              "readableType": "Prebuilt Entity Extractor",
              "roles": []
            },
            {
              "id": "da5ee82e-3390-4f8e-900d-92ded1a14599",
              "name": "Order",
              "typeId": 1,
              "readableType": "Entity Extractor",
              "children": [
                {
                  "id": "eb2a2d77-cab3-4175-b985-8b986ebf3a54",
                  "name": "FullPizzaWithModifiers",
                  "children": [
                    {
                      "id": "f26fd823-7ec9-4350-a742-d7aa64e6c62e",
                      "name": "PizzaType",
                      "children": [],
                      "typeId": 1,
                      "readableType": "Child Entity Extractor"
                    },
                    {
                      "id": "41b8d8fe-70fb-4387-a09f-3dfa825b75bd",
                      "name": "Size",
                      "instanceOf": "SizeList",
                      "children": [],
                      "typeId": 1,
                      "readableType": "Child Entity Extractor"
                    },
                    {
                      "id": "dcf4f157-17d9-46fb-b484-89ef863ee75c",
                      "name": "Quantity",
                      "instanceOf": "number",
                      "children": [],
                      "typeId": 1,
                      "readableType": "Child Entity Extractor"
                    },
                    {
                      "id": "ef930d06-7585-4381-8378-c3dd24b74a60",
                      "name": "Crust",
                      "instanceOf": "CrustList",
                      "children": [],
                      "typeId": 1,
                      "readableType": "Child Entity Extractor"
                    },
                    {
                      "id": "6c277106-8afe-408c-a206-2091fb91a751",
                      "name": "ToppingModifiers",
                      "children": [
                        {
                          "id": "677eac2c-7b6f-4f52-89b2-8f7d575a8d52",
                          "name": "Topping",
                          "instanceOf": "ToppingList",
                          "children": [],
                          "typeId": 1,
                          "readableType": "Child Entity Extractor"
                        },
                        {
                          "id": "048a75fd-9845-439f-a56f-74e316408ef1",
                          "name": "Modifier",
                          "instanceOf": "ModifierList",
                          "children": [],
                          "typeId": 1,
                          "readableType": "Child Entity Extractor"
                        },
                        {
                          "id": "13ff5505-60c5-42ee-bfe4-b3aac3f1be5b",
                          "name": "Scope",
                          "instanceOf": "ScopeList",
                          "children": [],
                          "typeId": 1,
                          "readableType": "Child Entity Extractor"
                        }
                      ],
                      "typeId": 1,
                      "readableType": "Child Entity Extractor"
                    }
                  ],
                  "typeId": 1,
                  "readableType": "Child Entity Extractor"
                },
                {
                  "id": "dcfc1106-1de6-499d-8ac2-49e5a59a2674",
                  "name": "SideOrder",
                  "children": [
                    {
                      "id": "4891ff97-d0d7-452c-9d7e-22fcfb3e0c36",
                      "name": "SideProduct",
                      "children": [],
                      "typeId": 1,
                      "readableType": "Child Entity Extractor"
                    }
                  ],
                  "typeId": 1,
                  "readableType": "Child Entity Extractor"
                }
              ],
              "roles": []
            },
            {
              "id": "fa80b7e9-1b36-453e-aff9-04d750caac0c",
              "name": "ScopeList",
              "typeId": 5,
              "readableType": "Closed List Entity Extractor",
              "subLists": [
                {
                  "id": 106023799,
                  "canonicalForm": "Half",
                  "list": [
                    "on half",
                    "on one half",
                    "the other half",
                    "half with",
                    "on one side",
                    "one side",
                    "1/2",
                    "on the other half",
                    "other half",
                    "the other"
                  ]
                },
                {
                  "id": 106023800,
                  "canonicalForm": "Half And Half",
                  "list": ["half and half", "half & half"]
                },
                {
                  "id": 106023801,
                  "canonicalForm": "On One",
                  "list": ["on one", "on one of them"]
                }
              ],
              "roles": []
            },
            {
              "id": "db2bf557-1ffe-44ae-a478-7bfe5c03c665",
              "name": "SizeList",
              "typeId": 5,
              "readableType": "Closed List Entity Extractor",
              "subLists": [
                {
                  "id": 106023802,
                  "canonicalForm": "Extra Large",
                  "list": ["XL", "huge", "super big", "massive"]
                },
                {
                  "id": 106023803,
                  "canonicalForm": "Large",
                  "list": ["large"]
                },
                {
                  "id": 106023804,
                  "canonicalForm": "Medium",
                  "list": ["medium", "regular", "individual"]
                },
                {
                  "id": 106023805,
                  "canonicalForm": "Party Size",
                  "list": ["party size"]
                },
                {
                  "id": 106023806,
                  "canonicalForm": "Small",
                  "list": ["small", "smallest"]
                }
              ],
              "roles": []
            },
            {
              "id": "7c85731e-1755-485f-b667-0c12e5e6ebf3",
              "name": "ToppingList",
              "typeId": 5,
              "readableType": "Closed List Entity Extractor",
              "subLists": [
                {
                  "id": 106023807,
                  "canonicalForm": "Alfredo Sauce",
                  "list": ["alfredo", "alfredo sauce", "white sauce"]
                },
                {
                  "id": 106023808,
                  "canonicalForm": "All",
                  "list": ["everything", "various toppings"]
                },
                {
                  "id": 106023809,
                  "canonicalForm": "Anchovies",
                  "list": ["anchovie", "anchovies"]
                },
                {
                  "id": 106023810,
                  "canonicalForm": "Artichoke",
                  "list": ["artichokes", "artichoke"]
                },
                {
                  "id": 106023811,
                  "canonicalForm": "Artichokes",
                  "list": ["artichokes", "artichoke", "artichockes"]
                },
                {
                  "id": 106023812,
                  "canonicalForm": "Bacon",
                  "list": ["bacon", "bacon strips"]
                },
                {
                  "id": 106023813,
                  "canonicalForm": "Banana Pepper",
                  "list": [
                    "yellow peppers",
                    "yellow pepper",
                    "banana pepper",
                    "banana peppers"
                  ]
                },
                {
                  "id": 106023814,
                  "canonicalForm": "Barbecue",
                  "list": ["BBQ", "barbeque", "barbecue"]
                },
                {
                  "id": 106023815,
                  "canonicalForm": "Basil",
                  "list": ["basil", "basils"]
                },
                {
                  "id": 106023816,
                  "canonicalForm": "Beef",
                  "list": ["beef", "ground beef", "meat", "hamburger"]
                },
                {
                  "id": 106023817,
                  "canonicalForm": "Broccoli",
                  "list": ["broccoli"]
                },
                {
                  "id": 106023818,
                  "canonicalForm": "Canadian Bacon",
                  "list": ["canadian bacon", "canada bacon"]
                },
                {
                  "id": 106023819,
                  "canonicalForm": "Cheddar",
                  "list": ["cheddar", "cheddar cheese"]
                },
                {
                  "id": 106023820,
                  "canonicalForm": "Cheese",
                  "list": ["cheeses", "cheese"]
                },
                {
                  "id": 106023821,
                  "canonicalForm": "Chicken",
                  "list": ["chicken", "chickens", "grilled chicken"]
                },
                {
                  "id": 106023822,
                  "canonicalForm": "Corn",
                  "list": ["corn"]
                },
                {
                  "id": 106023823,
                  "canonicalForm": "Dip",
                  "list": []
                },
                {
                  "id": 106023824,
                  "canonicalForm": "Eggplant",
                  "list": ["eggplant", "eggplants"]
                },
                {
                  "id": 106023825,
                  "canonicalForm": "Garlic",
                  "list": ["garlic", "garlics"]
                },
                {
                  "id": 106023826,
                  "canonicalForm": "Green Olive",
                  "list": ["green olive", "green olives"]
                },
                {
                  "id": 106023827,
                  "canonicalForm": "Ham",
                  "list": ["ham"]
                },
                {
                  "id": 106023828,
                  "canonicalForm": "Hot Sauce",
                  "list": ["hot sauce"]
                },
                {
                  "id": 106023829,
                  "canonicalForm": "Jalapeno",
                  "list": [
                    "Jalapenos",
                    "jalapeno",
                    "jalapeno peppers",
                    "jalapeno pepper",
                    "spicy peppers"
                  ]
                },
                {
                  "id": 106023830,
                  "canonicalForm": "Lettuce",
                  "list": ["lettuce"]
                },
                {
                  "id": 106023831,
                  "canonicalForm": "Meatballs",
                  "list": ["meatball", "meatballs"]
                },
                {
                  "id": 106023832,
                  "canonicalForm": "Mozzarella",
                  "list": [
                    "mozzarella",
                    "mozzarella cheese",
                    "mozzerella",
                    "mozzerella cheese",
                    "mozarela cheese",
                    "mozarela",
                    "mozzaralla ranch",
                    "mozzerella ranch"
                  ]
                },
                {
                  "id": 106023833,
                  "canonicalForm": "Mushroom",
                  "list": ["Mushrooms", "mushroom", "muhsroom"]
                },
                {
                  "id": 106023834,
                  "canonicalForm": "Olive",
                  "list": ["olive", "black olive", "black olives", "olives"]
                },
                {
                  "id": 106023835,
                  "canonicalForm": "Onions",
                  "list": ["onion", "onions", "grilled onions"]
                },
                {
                  "id": 106023836,
                  "canonicalForm": "Oregano",
                  "list": ["oregano", "oreganos"]
                },
                {
                  "id": 106023837,
                  "canonicalForm": "Parmesan Cheese",
                  "list": ["parmesan cheese", "parmisan cheese", "parmesan"]
                },
                {
                  "id": 106023838,
                  "canonicalForm": "Pepperoni",
                  "list": ["pepperoni", "pepperonis", "peperoni"]
                },
                {
                  "id": 106023839,
                  "canonicalForm": "Peppers",
                  "list": ["green peppers", "green pepper", "pepper", "peppers"]
                },
                {
                  "id": 106023840,
                  "canonicalForm": "Pesto",
                  "list": ["pesto", "pesto sauce"]
                },
                {
                  "id": 106023841,
                  "canonicalForm": "Pineapple",
                  "list": ["pineapple", "pineapples"]
                },
                {
                  "id": 106023842,
                  "canonicalForm": "Ranch",
                  "list": ["ranch", "ranch sauce"]
                },
                {
                  "id": 106023843,
                  "canonicalForm": "Red Peppers",
                  "list": ["red pepper", "red peppers"]
                },
                {
                  "id": 106023844,
                  "canonicalForm": "Salami",
                  "list": ["salami", "salamis"]
                },
                {
                  "id": 106023845,
                  "canonicalForm": "Sauce",
                  "list": ["sauce", "red sauce", "red sauces", "pizza sauce"]
                },
                {
                  "id": 106023846,
                  "canonicalForm": "Sausage",
                  "list": ["italian sausage", "sausage", "sausages"]
                },
                {
                  "id": 106023847,
                  "canonicalForm": "Spinach",
                  "list": ["spinach"]
                },
                {
                  "id": 106023848,
                  "canonicalForm": "Sun Dried Tomato",
                  "list": ["sun-dried tomato"]
                },
                {
                  "id": 106023849,
                  "canonicalForm": "Tomato",
                  "list": ["tomato", "tomatos", "tomatoes"]
                },
                {
                  "id": 106023850,
                  "canonicalForm": "Turkey",
                  "list": ["turkey"]
                },
                {
                  "id": 106023851,
                  "canonicalForm": "Works",
                  "list": ["various toppings", "the works"]
                },
                {
                  "id": 106023852,
                  "canonicalForm": "Zuccini",
                  "list": ["zuccinis", "zuccini"]
                }
              ],
              "roles": []
            }
          ]
        },
        {
          "version": "0.4",
          "createdDateTime": "2019-11-15T21:40:11Z",
          "lastModifiedDateTime": "2019-12-12T21:18:52Z",
          "lastTrainedDateTime": "2019-12-12T21:18:50Z",
          "lastPublishedDateTime": "2019-12-12T16:59:44Z",
          "endpointUrl": null,
          "assignedEndpointKey": null,
          "externalApiKeys": null,
          "intentsCount": 5,
          "entitiesCount": 1,
          "endpointHitsCount": 1,
          "trainingStatus": "Trained",
          "models": [
            {
              "id": "4a465c5f-039f-4702-af11-d5cd09fa70df",
              "name": "CancelOrder",
              "typeId": 0,
              "readableType": "Intent Classifier"
            },
            {
              "id": "0800639f-8a07-40c1-bc8e-90d135bc6131",
              "name": "Confirmation",
              "typeId": 0,
              "readableType": "Intent Classifier"
            },
            {
              "id": "e3b4c551-c0f5-4d7c-af7f-010739f41108",
              "name": "CrustList",
              "typeId": 5,
              "readableType": "Closed List Entity Extractor",
              "subLists": [
                {
                  "id": 105631134,
                  "canonicalForm": "Deep Dish",
                  "list": ["deep dish", "deep dish crust"]
                },
                {
                  "id": 105631135,
                  "canonicalForm": "Pan",
                  "list": [
                    "regular",
                    "normal",
                    "original",
                    "regular crust",
                    "normal crust",
                    "original crust"
                  ]
                },
                {
                  "id": 105631136,
                  "canonicalForm": "Stuffed Crust",
                  "list": ["stuffed criust", "stuffed crusts"]
                },
                {
                  "id": 105631137,
                  "canonicalForm": "Thin",
                  "list": ["thin", "skinny", "thin crust", "skinny crust"]
                }
              ],
              "roles": []
            },
            {
              "id": "7ccd6e7c-016f-46e2-9067-3fdc823b1042",
              "name": "Deliver",
              "typeId": 5,
              "readableType": "Closed List Entity Extractor",
              "subLists": [],
              "roles": [
                {
                  "id": "df110bdf-0d44-4f0f-a9cd-0c280fc98628",
                  "name": "Origin"
                },
                {
                  "id": "5e6f0a80-6b33-42ac-80f4-cb9080afce17",
                  "name": "Destination"
                }
              ]
            },
            {
              "id": "ee68bad4-77bf-4644-af96-c551aad245be",
              "name": "Greetings",
              "typeId": 0,
              "readableType": "Intent Classifier"
            },
            {
              "id": "b2c5c6a8-340d-4434-886f-76d5bc6b9137",
              "name": "ModifierList",
              "typeId": 5,
              "readableType": "Closed List Entity Extractor",
              "subLists": [
                {
                  "id": 105631138,
                  "canonicalForm": "Add",
                  "list": [
                    "with",
                    "with extra",
                    "extra",
                    "add",
                    "more of",
                    "needs",
                    "just",
                    "replaced with",
                    "with some"
                  ]
                },
                {
                  "id": 105631139,
                  "canonicalForm": "Remove",
                  "list": [
                    "without",
                    "substitute",
                    "no",
                    "hold",
                    "hold the",
                    "replace",
                    "instead of",
                    "with no",
                    "leave off",
                    "not want",
                    "dont want",
                    "except"
                  ]
                }
              ],
              "roles": []
            },
            {
              "id": "a66eb923-1aa2-49f1-8619-935a70800f23",
              "name": "ModifyOrder",
              "typeId": 0,
              "readableType": "Intent Classifier"
            },
            {
              "id": "1f854b0f-3b4c-40c6-a269-b354bdc85346",
              "name": "None",
              "typeId": 0,
              "readableType": "Intent Classifier"
            },
            {
              "id": "fb704d0c-1449-4746-98a9-36e9e54df8b7",
              "name": "number",
              "typeId": 2,
              "readableType": "Prebuilt Entity Extractor",
              "roles": []
            },
            {
              "id": "696f4a97-1faa-46af-a48a-108a07cfc7f1",
              "name": "Order",
              "typeId": 1,
              "readableType": "Entity Extractor",
              "children": [
                {
                  "id": "f9099ab6-46db-44fc-93e1-5785802eba78",
                  "name": "FullPizzaWithModifiers",
                  "children": [
                    {
                      "id": "33e3d472-08e9-4822-94ce-bded70ab5810",
                      "name": "PizzaType",
                      "children": [],
                      "typeId": 1,
                      "readableType": "Child Entity Extractor"
                    },
                    {
                      "id": "1ccfdd56-31e4-44e1-a128-2897300b448c",
                      "name": "Size",
                      "instanceOf": "SizeList",
                      "children": [],
                      "typeId": 1,
                      "readableType": "Child Entity Extractor"
                    },
                    {
                      "id": "0e8ab0da-096e-4f88-a3b9-890fb748f364",
                      "name": "Quantity",
                      "instanceOf": "number",
                      "children": [],
                      "typeId": 1,
                      "readableType": "Child Entity Extractor"
                    },
                    {
                      "id": "eadd063f-983e-48fe-8d78-c9505d5283ed",
                      "name": "Crust",
                      "instanceOf": "CrustList",
                      "children": [],
                      "typeId": 1,
                      "readableType": "Child Entity Extractor"
                    },
                    {
                      "id": "84e76428-e02d-4343-8442-c8022999167b",
                      "name": "ToppingModifiers",
                      "children": [
                        {
                          "id": "ac3dfa23-13c7-4077-b106-3247eda4aeff",
                          "name": "Topping",
                          "instanceOf": "ToppingList",
                          "children": [],
                          "typeId": 1,
                          "readableType": "Child Entity Extractor"
                        },
                        {
                          "id": "5d2eb548-3a4f-4938-8599-4668293fb7c4",
                          "name": "Modifier",
                          "instanceOf": "ModifierList",
                          "children": [],
                          "typeId": 1,
                          "readableType": "Child Entity Extractor"
                        },
                        {
                          "id": "a92cac50-b336-4655-9122-26e08744ebb3",
                          "name": "Scope",
                          "instanceOf": "ScopeList",
                          "children": [],
                          "typeId": 1,
                          "readableType": "Child Entity Extractor"
                        }
                      ],
                      "typeId": 1,
                      "readableType": "Child Entity Extractor"
                    }
                  ],
                  "typeId": 1,
                  "readableType": "Child Entity Extractor"
                },
                {
                  "id": "2e00cdd3-697b-4c7e-a758-8c4871f640a4",
                  "name": "SideOrder",
                  "children": [
                    {
                      "id": "794c7bf8-900f-4dcd-a7dd-d6cd3deb4408",
                      "name": "SideProduct",
                      "children": [],
                      "typeId": 1,
                      "readableType": "Child Entity Extractor"
                    }
                  ],
                  "typeId": 1,
                  "readableType": "Child Entity Extractor"
                }
              ],
              "roles": []
            },
            {
              "id": "fdd6776b-7abc-45e8-9278-60a18ec0397a",
              "name": "ScopeList",
              "typeId": 5,
              "readableType": "Closed List Entity Extractor",
              "subLists": [
                {
                  "id": 105631140,
                  "canonicalForm": "Half",
                  "list": [
                    "on half",
                    "on one half",
                    "the other half",
                    "half with",
                    "on one side",
                    "one side",
                    "1/2",
                    "on the other half",
                    "other half",
                    "the other"
                  ]
                },
                {
                  "id": 105631141,
                  "canonicalForm": "Half And Half",
                  "list": ["half and half", "half & half"]
                },
                {
                  "id": 105631142,
                  "canonicalForm": "On One",
                  "list": ["on one", "on one of them"]
                }
              ],
              "roles": []
            },
            {
              "id": "c89c56de-5ab5-4cf8-a23b-cab0fe0976fb",
              "name": "SizeList",
              "typeId": 5,
              "readableType": "Closed List Entity Extractor",
              "subLists": [
                {
                  "id": 105631143,
                  "canonicalForm": "Extra Large",
                  "list": ["XL", "huge", "super big", "massive"]
                },
                {
                  "id": 105631144,
                  "canonicalForm": "Large",
                  "list": ["large"]
                },
                {
                  "id": 105631145,
                  "canonicalForm": "Medium",
                  "list": ["medium", "regular", "individual"]
                },
                {
                  "id": 105631146,
                  "canonicalForm": "Party Size",
                  "list": ["party size"]
                },
                {
                  "id": 105631147,
                  "canonicalForm": "Small",
                  "list": ["small", "smallest"]
                }
              ],
              "roles": []
            },
            {
              "id": "3d717086-ef96-4d2c-ab23-84a9a960fe7f",
              "name": "ToppingList",
              "typeId": 5,
              "readableType": "Closed List Entity Extractor",
              "subLists": [
                {
                  "id": 105631148,
                  "canonicalForm": "Alfredo Sauce",
                  "list": ["alfredo", "alfredo sauce", "white sauce"]
                },
                {
                  "id": 105631149,
                  "canonicalForm": "All",
                  "list": ["everything", "various toppings"]
                },
                {
                  "id": 105631150,
                  "canonicalForm": "Anchovies",
                  "list": ["anchovie", "anchovies"]
                },
                {
                  "id": 105631151,
                  "canonicalForm": "Artichoke",
                  "list": ["artichokes", "artichoke"]
                },
                {
                  "id": 105631152,
                  "canonicalForm": "Artichokes",
                  "list": ["artichokes", "artichoke", "artichockes"]
                },
                {
                  "id": 105631153,
                  "canonicalForm": "Bacon",
                  "list": ["bacon", "bacon strips"]
                },
                {
                  "id": 105631154,
                  "canonicalForm": "Banana Pepper",
                  "list": [
                    "yellow peppers",
                    "yellow pepper",
                    "banana pepper",
                    "banana peppers"
                  ]
                },
                {
                  "id": 105631155,
                  "canonicalForm": "Barbecue",
                  "list": ["BBQ", "barbeque", "barbecue"]
                },
                {
                  "id": 105631156,
                  "canonicalForm": "Basil",
                  "list": ["basil", "basils"]
                },
                {
                  "id": 105631157,
                  "canonicalForm": "Beef",
                  "list": ["beef", "ground beef", "meat", "hamburger"]
                },
                {
                  "id": 105631158,
                  "canonicalForm": "Broccoli",
                  "list": ["broccoli"]
                },
                {
                  "id": 105631159,
                  "canonicalForm": "Canadian Bacon",
                  "list": ["canadian bacon", "canada bacon"]
                },
                {
                  "id": 105631160,
                  "canonicalForm": "Cheddar",
                  "list": ["cheddar", "cheddar cheese"]
                },
                {
                  "id": 105631161,
                  "canonicalForm": "Cheese",
                  "list": ["cheeses", "cheese"]
                },
                {
                  "id": 105631162,
                  "canonicalForm": "Chicken",
                  "list": ["chicken", "chickens", "grilled chicken"]
                },
                {
                  "id": 105631163,
                  "canonicalForm": "Corn",
                  "list": ["corn"]
                },
                {
                  "id": 105631164,
                  "canonicalForm": "Dip",
                  "list": []
                },
                {
                  "id": 105631165,
                  "canonicalForm": "Eggplant",
                  "list": ["eggplant", "eggplants"]
                },
                {
                  "id": 105631166,
                  "canonicalForm": "Garlic",
                  "list": ["garlic", "garlics"]
                },
                {
                  "id": 105631167,
                  "canonicalForm": "Green Olive",
                  "list": ["green olive", "green olives"]
                },
                {
                  "id": 105631168,
                  "canonicalForm": "Ham",
                  "list": ["ham"]
                },
                {
                  "id": 105631169,
                  "canonicalForm": "Hot Sauce",
                  "list": ["hot sauce"]
                },
                {
                  "id": 105631170,
                  "canonicalForm": "Jalapeno",
                  "list": [
                    "Jalapenos",
                    "jalapeno",
                    "jalapeno peppers",
                    "jalapeno pepper",
                    "spicy peppers"
                  ]
                },
                {
                  "id": 105631171,
                  "canonicalForm": "Lettuce",
                  "list": ["lettuce"]
                },
                {
                  "id": 105631172,
                  "canonicalForm": "Meatballs",
                  "list": ["meatball", "meatballs"]
                },
                {
                  "id": 105631173,
                  "canonicalForm": "Mozzarella",
                  "list": [
                    "mozzarella",
                    "mozzarella cheese",
                    "mozzerella",
                    "mozzerella cheese",
                    "mozarela cheese",
                    "mozarela",
                    "mozzaralla ranch",
                    "mozzerella ranch"
                  ]
                },
                {
                  "id": 105631174,
                  "canonicalForm": "Mushroom",
                  "list": ["Mushrooms", "mushroom", "muhsroom"]
                },
                {
                  "id": 105631175,
                  "canonicalForm": "Olive",
                  "list": ["olive", "black olive", "black olives", "olives"]
                },
                {
                  "id": 105631176,
                  "canonicalForm": "Onions",
                  "list": ["onion", "onions", "grilled onions"]
                },
                {
                  "id": 105631177,
                  "canonicalForm": "Oregano",
                  "list": ["oregano", "oreganos"]
                },
                {
                  "id": 105631178,
                  "canonicalForm": "Parmesan Cheese",
                  "list": ["parmesan cheese", "parmisan cheese", "parmesan"]
                },
                {
                  "id": 105631179,
                  "canonicalForm": "Pepperoni",
                  "list": ["pepperoni", "pepperonis", "peperoni"]
                },
                {
                  "id": 105631180,
                  "canonicalForm": "Peppers",
                  "list": ["green peppers", "green pepper", "pepper", "peppers"]
                },
                {
                  "id": 105631181,
                  "canonicalForm": "Pesto",
                  "list": ["pesto", "pesto sauce"]
                },
                {
                  "id": 105631182,
                  "canonicalForm": "Pineapple",
                  "list": ["pineapple", "pineapples"]
                },
                {
                  "id": 105631183,
                  "canonicalForm": "Ranch",
                  "list": ["ranch", "ranch sauce"]
                },
                {
                  "id": 105631184,
                  "canonicalForm": "Red Peppers",
                  "list": ["red pepper", "red peppers"]
                },
                {
                  "id": 105631185,
                  "canonicalForm": "Salami",
                  "list": ["salami", "salamis"]
                },
                {
                  "id": 105631186,
                  "canonicalForm": "Sauce",
                  "list": ["sauce", "red sauce", "red sauces", "pizza sauce"]
                },
                {
                  "id": 105631187,
                  "canonicalForm": "Sausage",
                  "list": ["italian sausage", "sausage", "sausages"]
                },
                {
                  "id": 105631188,
                  "canonicalForm": "Spinach",
                  "list": ["spinach"]
                },
                {
                  "id": 105631189,
                  "canonicalForm": "Sun Dried Tomato",
                  "list": ["sun-dried tomato"]
                },
                {
                  "id": 105631190,
                  "canonicalForm": "Tomato",
                  "list": ["tomato", "tomatos", "tomatoes"]
                },
                {
                  "id": 105631191,
                  "canonicalForm": "Turkey",
                  "list": ["turkey"]
                },
                {
                  "id": 105631192,
                  "canonicalForm": "Works",
                  "list": ["various toppings", "the works"]
                },
                {
                  "id": 105631193,
                  "canonicalForm": "Zuccini",
                  "list": ["zuccinis", "zuccini"]
                }
              ],
              "roles": []
            }
          ]
        }
      ]
    }
  ];

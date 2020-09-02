{

  // The type of resource
  "resourceType": "Encounter",

  // Identifier at the resource level. Required to bulk-upload the ndjson to Aidbox successfully. 
  "id": "some-encounter-id",

  // The type of the encounter
  "class": {
    "system": "http://terminology.hl7.org/CodeSystem/v3-ActCode",
    "code": "IMP",
    "display": "inpatient encounter"
  },

  "subject": {
    "reference": "Patient/24235135"
  },

  "reasonCode": [{
    "text": "This patient was hospitalized for Condition X"
  }],

  "period": {
    // YYYY-MM-DDThh:mm:ss+zz:zz
    "start": "2017-02-01T17:23:07Z",
    "end": "2017-03-01T17:23:07Z"
  }
}
{

  // The type of resource
  "resourceType": "Encounter",

  // Identifier at the resource level. Required to bulk-upload the ndjson to Aidbox successfully. 
  "id": "some-encounter-id",

  // An identifier for this encounter
  "identifier": [{
    // Indicate that this ID is a medical record number
    "type": {
      "coding": [{
        "system": "http://terminology.hl7.org/CodeSystem/v2-0203",
        // Visit number - to be confirmed if this is the correct category
        "code": "VN"
      }]
    },

    // The episode number id
    "value": "453265624",

    // The organization assigning the ID
    "assigner": {
      "reference": "CHUM",
      "type": "Organization"
    }
  }],

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
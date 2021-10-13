{
  // The type of resource
  "resourceType": "ImagingStudy",

  // Each resource entry needs a unique id for the ndjson bulk upload. 
  "id": "example",

  // WADO-RS resource where Study is available.
  "url": "https://<local DICOM server url>/studies/example",

  "subject": {
    "reference": "Patient/patid"
  },
  
  // YYYY-MM-DDThh:mm:ss+zz:zz
  "started": "2017-02-01T17:23:07Z",
  
  "numberOfSeries": 1,
  "numberOfInstances": 1,
  
  "procedureCode": [{
    // LOINC code for the imaging study
    "coding": [{
      "system": "http://loinc.org",
      "code": "29252-4",
      "display": "CT Chest WO contrast"
    }]
  }],

  "series": [{
    
    "uid": "12asdf515kljasdflkaja35asdaasdkj155",
    "number": 1,

    // DICOM modality code
    "modality": {
      "system": "http://dicom.nema.org/resources/ontology/DCM",
      "code": "CT"
    },

    // SNOMED body site code
    "bodySite": {
      "system": "http://snomed.info/sct",
      "code": "67734004",
      "display": "Structure of thoracic segment of trunk (body structure)"
    },

    "description": "CT Surview 180",
    "numberOfInstances": 1,

    "instance": [{
      "uid": "Idaf83fhahfiosdjfsidfha039hf39ha5",
      "sopClass": {
        "system": "urn:ietf:rfc:3986",
        "code": "urn:oid:1.2.840.10008.5.1.4.1.1.2"
      },
      "number": 1

    }]
    
  }]
  
}

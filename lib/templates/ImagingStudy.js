{
  // The type of resource
  "resourceType": "ImagingStudy",

  // Each resource entry needs a unique id for the ndjson bulk upload. 
  "id": "example",

  "subject": {
    "reference": "Patient/patid"
  },
  
  // YYYY-MM-DDThh:mm:ss+zz:zz
  "started": "2017-02-01T17:23:07Z",
  
  "numberOfSeries": 1,
  "numberOfInstances": 1,
  
  "procedureCode": [{
    // Ref: http://playbook.radlex.org/playbook/SearchRadlexAction
    "coding": [{
      "system": "http://www.radlex.org",
      "code": "RPID16",
      "display": "CT Chest wo IV Contrast"
    }],
    "text": "CT Chest wo IV Contrast"
  }],

  "series": [{
    
    "uid": "12asdf515kljasdflkaja35asdaasdkj155",
    "number": 1,
    "modality": {
      "system": "http://dicom.nema.org/resources/ontology/DCM",
      "code": "CT"
    },

    "description": "CT Surview 180",
    "numberOfInstances": 1,
    "bodySite": {
      "system": "http://snomed.info/sct",
      "code": "67734004",
      "display": "Structure of thoracic segment of trunk (body structure)"
    },

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
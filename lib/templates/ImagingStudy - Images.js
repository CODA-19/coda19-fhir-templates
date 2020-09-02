{
  // The type of resource
  "resourceType": "ImagingStudy",

  // Each resource entry needs a unique id for the ndjson bulk upload. 
  "id": "example",
  
  "subject": {
             "reference": "Patient/patid"
              },
			  
   "started": "YYYY-MM-DDThh:mm:ss+zz:zz",
   "numberOfSeries": 1,
   "numberOfInstances": 1,
   "procedureCode": [
    {
      "coding": [
        {
          "system": "http://www.radlex.org",
          "code": "RPID2502",
          "display": "XR Chest 1 View"
        }
      ],
      "text": "XR Chest 1 View"
    }
  ]
   
   "series": [
				{
				  "number": 1,
				  "modality": {
					"system": "http://dicom.nema.org/resources/ontology/DCM",
					"code": "DX"
				  },
						  
				  "description": "Chest X-Ray",
				  "numberOfInstances": 1,
				  "bodySite": {
					"system": "http://snomed.info/sct",
					"code": "78904004",
					"display": "Chest wall structure (body structure)"
				  }
			]
  
}
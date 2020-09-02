{
	"resourceType": "ImagingStudy",
	"id": "example",
	"subject": {
		"reference": "Patient/patid"
	  },
	  
	  "started": "YYYY-MM-DDThh:mm:ss+zz:zz",
	  "numberOfSeries": 1,
	  "numberOfInstances": 1,
	  "series": [
		{
		  "uid": "12asdf515kljasdflkaja35asdaasdkj155",
		  "number": 3,
		  "modality": {
			"system": "http://dicom.nema.org/resources/ontology/DCM",
			"code": "CT"
		  },
				  
		  "description": "CT Surview 180",
		  "numberOfInstances": 1,
		  "bodySite": {
			"system": "http://snomed.info/sct",
			"code": "67734004",
			"display": dfSlice.iloc[i]["slice_patient_position"]
		  },
		  
		  "instance": [
			{
			  "uid": "Idaf83fhahfiosdjfsidfha039hf39ha5",
			  "sopClass": {
				"system": "urn:ietf:rfc:3986",
				"code": "urn:oid:1.2.840.10008.5.1.4.1.1.2"
			  },
					  
			  "number": 1
			  
			}
		  ]
		}
	  ]
  }
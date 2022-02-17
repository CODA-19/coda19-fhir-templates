const fs = require("fs");
const _ = require("lodash");

const recursivelyFindPaths = (
  attributeDictionary,
  attributeNames,
  pathPrefix
) => {
  const paths = [];
  for (const attributeName of attributeNames) {
    const attribute = attributeDictionary[attributeName];
    const prefixedAttributeName = pathPrefix
      ? [pathPrefix, attributeName].join(".")
      : attributeName;
    if (Array.isArray(attribute)) {
      paths.push({
        name: prefixedAttributeName,
        type: "array",
        subpaths: recursivelyFindPaths(attribute[0], Object.keys(attribute[0])),
      });
    } else if (typeof attribute === "object") {
      paths.push(
        recursivelyFindPaths(
          attribute,
          Object.keys(attribute),
          pathPrefix ? [pathPrefix, attributeName].join(".") : attributeName
        )
      );
    } else {
      paths.push({
        name: prefixedAttributeName,
        type: "string",
      });
    }
  }
  return _.flatten(paths);
};

const basePath = "./lib/templates/";
const templateFileList = fs.readdirSync(basePath);

const attributeDictionary = {};

for (const templateFile of templateFileList) {
  const templateFilePath = basePath + templateFile;

  const templateFileContent = fs.readFileSync(basePath + templateFile, "utf-8");
  const templateFileContentWithoutComments = templateFileContent.replace(
    /\n\s*\/\/(.*)/g,
    ""
  );

  const resourceAttributeDictionary = JSON.parse(
    templateFileContentWithoutComments
  );

  const resourceName = templateFile.split("-")[0].split(".")[0];
  const resourceAttributeNames = Object.keys(
    resourceAttributeDictionary
  ).filter((x) => x != "id");

  attributeDictionary[resourceName] = recursivelyFindPaths(
    resourceAttributeDictionary,
    resourceAttributeNames,
    ""
  );
}

const resourceTypes = Object.keys(attributeDictionary);

const filtersByDataType = {
  string: ["equal", "not equal", "is null", "is not null"],
  array: ["is empty", "is not empty", "contains", "does not contain"],
};

console.log(attributeDictionary);
fs.writeFileSync(
  "resourceAttributes.js",
  `

export const filtersByDataType = ${JSON.stringify(filtersByDataType)}
export const resourceTypes = ${JSON.stringify(resourceTypes, null, 2)}
export const attributesByResourceType = ${JSON.stringify(
    attributeDictionary,
    null,
    2
  )};

`
);

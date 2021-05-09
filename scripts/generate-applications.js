const puppeteer = require('puppeteer')
const fs = require('fs')
const path = require('path')

// ref: http://stackoverflow.com/a/1293163/2343
// This will parse a delimited string into an array of
// arrays. The default delimiter is the comma, but this
// can be overriden in the second argument.
function CSVToArray(strData, strDelimiter) {
  // Check to see if the delimiter is defined. If not,
  // then default to comma.
  strDelimiter = strDelimiter || ','

  // Create a regular expression to parse the CSV values.
  var objPattern = new RegExp(
    // Delimiters.
    '(\\' +
      strDelimiter +
      '|\\r?\\n|\\r|^)' +
      // Quoted fields.
      '(?:"([^"]*(?:""[^"]*)*)"|' +
      // Standard fields.
      '([^"\\' +
      strDelimiter +
      '\\r\\n]*))',
    'gi',
  )

  // Create an array to hold our data. Give the array
  // a default empty first row.
  var arrData = [[]]

  // Create an array to hold our individual pattern
  // matching groups.
  var arrMatches = null

  // Keep looping over the regular expression matches
  // until we can no longer find a match.
  while ((arrMatches = objPattern.exec(strData))) {
    // Get the delimiter that was found.
    var strMatchedDelimiter = arrMatches[1]

    // Check to see if the given delimiter has a length
    // (is not the start of string) and if it matches
    // field delimiter. If id does not, then we know
    // that this delimiter is a row delimiter.
    if (strMatchedDelimiter.length && strMatchedDelimiter !== strDelimiter) {
      // Since we have reached a new row of data,
      // add an empty row to our data array.
      arrData.push([])
    }

    var strMatchedValue

    // Now that we have our delimiter out of the way,
    // let's check to see which kind of value we
    // captured (quoted or unquoted).
    if (arrMatches[2]) {
      // We found a quoted value. When we capture
      // this value, unescape any double quotes.
      strMatchedValue = arrMatches[2].replace(new RegExp('""', 'g'), '"')
    } else {
      // We found a non-quoted value.
      strMatchedValue = arrMatches[3]
    }

    // Now that we have our value string, let's add
    // it to the data array.
    arrData[arrData.length - 1].push(strMatchedValue)
  }

  // Return the parsed data.
  return arrData
}

const CSV_PATH = path.resolve(process.cwd(), process.argv[2])
if (!CSV_PATH || !CSV_PATH.endsWith('.csv')) throw new Error('Invalid CSV file!')

async function main() {
  const [headers, ...rows] = CSVToArray(fs.readFileSync(CSV_PATH, 'utf-8'))
  const applicants = rows.map(row => Object.fromEntries(row.map((value, i) => [headers[i], value])))

  const html = `
  <html>
  <head>
    <style>
    html, body { margin: 0; font-family: 'Helvetica Neue', Verdana, Arial; }
    pre { max-width: 100vw; overflow: hidden; white-space: pre-wrap; font-family: 'Helvetica Neue', Verdana, Arial; }
    </style>
  </head>
  <body style="padding: 10px;">
  ${applicants
    .map(
      application => `
  <h1>${application['First Name']} ${application['Last Name']}</h1>
  ${Object.entries({...application, 'First Name': '', 'Last Name': ''})
    .filter(entry => entry[1])
    .map(
      entry =>
        `<p><strong>${entry[0]}:</strong> ${
          entry[1].length > 100 ? `<br /><pre>${entry[1]}</pre>` : entry[1]
        }</p>`,
    )
    .join('\n')}
  <div style="page-break-after: always"> </div>
  `,
    )
    .join('\n')}
  </body>
  </html>`
  try {
    fs.writeFileSync('test.html', html)
  } catch (err) {}
}

main()

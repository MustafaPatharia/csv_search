const Papa = require('papaparse')
const fs = require('fs')

// Access arguments
const filePath = process.argv[2];
const searchCol = process.argv[3];
const searchValue = process.argv[4];

// Read file
fs.readFile(filePath, 'utf8', (err, file) => {
    if (err) {
        console.error("Please check the file path")
        process.exit(1);
    }
    const parseCSV = Papa.parse(file).data;

    // Search Value
    searchData = parseCSV.filter(item => item[searchCol] === searchValue)[0]
    if(searchData === undefined ){
        console.log("Data not found")
        process.exit(1);
    }
    console.log(searchData.join(','));
    
})
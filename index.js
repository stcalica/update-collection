const core = require('@actions/core');
const axios = require('axios');

async function run() {
  try {
    const apiKey = core.getInput('postman_api_key');
    const collectionId = core.getInput('collection_id');
    const collectionData = core.getInput('collection_data');

    const response = await axios.put(`https://api.getpostman.com/collections/${collectionId}`, { 'collection': JSON.parse(collectionData) }, {
      headers: { 'X-Api-Key': apiKey, 'Content-Type': 'application/json' }
    });

    console.log("Collection updated successfully:", JSON.stringify(response.data));
    
  } catch (error) {
    core.setFailed(`Error updating collection: ${error.response ? JSON.stringify(error.response.data) : error.message}`);
  }
}

run();

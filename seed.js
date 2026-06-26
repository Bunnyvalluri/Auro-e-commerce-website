import { algoliasearch } from 'algoliasearch';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const APP_ID = '5TDVBUOR8O';
const WRITE_API_KEY = 'dd8cd2376eed480a2c191a5e7817c437'; // Admin API key for seeding data
const INDEX_NAME = 'products';

async function seedData() {
  try {
    const jsonPath = path.join(__dirname, 'products.json');
    console.log(`Reading products database from ${jsonPath}...`);
    const rawData = fs.readFileSync(jsonPath, 'utf8');
    const products = JSON.parse(rawData);

    // Map id to objectID for Algolia compatibility
    const records = products.map(item => ({
      ...item,
      objectID: item.id
    }));

    console.log(`Connecting to Algolia Application ${APP_ID}...`);
    const client = algoliasearch(APP_ID, WRITE_API_KEY);

    console.log(`Clearing existing objects in index "${INDEX_NAME}"...`);
    await client.clearObjects({ indexName: INDEX_NAME });

    console.log(`Saving ${records.length} new products to index...`);
    const response = await client.saveObjects({
      indexName: INDEX_NAME,
      objects: records,
    });

    console.log('Seeding completed successfully!');
    console.log('Response:', JSON.stringify(response, null, 2));
  } catch (error) {
    console.error('Error seeding Algolia data:', error);
    process.exit(1);
  }
}

seedData();

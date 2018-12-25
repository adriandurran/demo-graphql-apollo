const { RESTDataSource } = require('apollo-datasource-rest');

class NASAEarthAPI extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = 'https://api.nasa.gov/planetary/earth/';
  }

  async getEarthImage(lat, lon, date, dim) {
    const res = await this.get('imagery', {
      lon,
      lat,
      date,
      dim,
      api_key: process.env.NASA_API_KEY
    });
    return res;
  }

  async getEarthImageAssets(lat, lon, begin) {
    const res = await this.get('assets', {
      lat,
      lon,
      begin,
      api_key: process.env.NASA_API_KEY
    });
    return res;
  }
}

module.exports = NASAEarthAPI;

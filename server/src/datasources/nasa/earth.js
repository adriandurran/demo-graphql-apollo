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
    console.log(res);
    return res;
  }
}

module.exports = NASAEarthAPI;

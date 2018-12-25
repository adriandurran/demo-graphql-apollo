const { RESTDataSource } = require('apollo-datasource-rest');
const moment = require('moment');

class NASAEpicAPI extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = 'https://epic.gsfc.nasa.gov/api/enhanced/date/';
    this.imageUrl = 'https://epic.gsfc.nasa.gov/archive/enhanced';
  }

  async getEpicList(date) {
    const res = await this.get(`${date}`);
    return res && res.length ? res.map((e) => this.epicListReducer(e)) : [];
  }

  epicListReducer(epic) {
    const { identifier, caption, image, coords, date } = epic;
    const imgDate = moment(date);
    const epicImageUrl = `${this.imageUrl}/${imgDate.year()}/${imgDate.month() +
      1}/${imgDate.date()}`;
    return {
      identifier,
      caption,
      image,
      date,
      coords: {
        lat: coords.centroid_coordinates.lat,
        lon: coords.centroid_coordinates.lon
      },
      image_locations: {
        thumb: `${epicImageUrl}/thumbs/${image}.jpg`,
        jpg: `${epicImageUrl}/jpg/${image}.jpg`,
        png: `${epicImageUrl}/png/${image}.png`
      }
    };
  }
}

module.exports = NASAEpicAPI;

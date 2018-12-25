const { gql } = require('apollo-server');

const typeDefs = gql`
  type Query {
    earthImage(lat: Float, lon: Float, date: String, dim: Float): NASAEarthImage
    earthImageAssets(
      lat: Float
      lon: Float
      begin: String
    ): NASAImageAssetsResults
    epicImageList(date: String): EpicImageResults
  }

  type NASAEarthImage {
    id: String
    cloud_score: Float
    date: String
    service_version: String
    url: String
    resource: NASAResource
  }

  type NASAResource {
    dataset: String
    planet: String
  }

  type NASAImageAssetsResults {
    count: Int
    results: [NASAImageAsset]
  }

  type NASAImageAsset {
    date: String
    id: String
  }

  type EpicImageResults {
    success: Boolean
    results: [EpicImage]
  }

  type EpicImage {
    identifier: String
    caption: String
    image: String
    date: String
    coords: Coords
    sat_pos: Position
    image_locations: ImageLocations
  }

  type Coords {
    lat: Float
    lon: Float
  }

  type Position {
    x: Float
    y: Float
    z: Float
  }

  type ImageLocations {
    thumb: String
    jpg: String
    png: String
  }
`;

module.exports = typeDefs;

module.exports = {
  Query: {
    earthImage: async (_, { lat, lon, date, dim }, { dataSources }) => {
      const nasaImage = await dataSources.nasaEarthAPI.getEarthImage(
        lat,
        lon,
        date,
        dim
      );
      return nasaImage;
    },
    earthImageAssets: async (_, { lat, lon, begin }, { dataSources }) => {
      const nasaImageAssets = await dataSources.nasaEarthAPI.getEarthImageAssets(
        lat,
        lon,
        begin
      );
      return nasaImageAssets;
    },
    epicImageList: async (_, { date }, { dataSources }) => {
      const epicImages = await dataSources.nasaEpicAPI.getEpicList(date);
      return {
        success: true,
        results: epicImages
      };
    }
  }
};

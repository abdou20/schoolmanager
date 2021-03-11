import StudentsModelGenerated from "./generated/StudentsModelGenerated";

const customModel = {

  /**
   * Override here your custom queries
   * EXAMPLE:
   *
   
    async get(id) {
      console.log("This is my custom query");
      return await StudentsModelGenerated.getModel().findOne({ _id: id });
    }

   */

};

export default {
  ...StudentsModelGenerated,
  ...customModel
};

import updatedNewsSchema from '../validator/newsValidation/updateNewsSchema';
 import NewsModel from '../models/NewsModel'
import FileService from '../services/FileService';
 export default { 
     
    list:  async (req,res) => {
    //fetch data
   const list = await NewsModel.find();
      
    return res.json(list);
    },
    get: async (req, res) => {

      const { id } = req.params;
      const foundItem = await NewsModel.findOne({_id: id});
  
      return res.json(foundItem);
    },
    post: async (req, res) => {
      const news = new NewsModel(req.body);
  
       await  news.save();

       return res.json(news);
    },
    delete: async (req, res) => {
      const {id} = req.params;

      try{ 

      await NewsModel.deleteOne({_id : id, /*userId:authId.req*/ });
      return res.json({deleted: true});

    }catch(err){
    }
  },
  put: async  (req, res) => {

    const news = req.body;

   const validationResult =  updatedNewsSchema.validate(news);

    if(validationResult.error){
       return res.status(401)
       .json({
          message: "Validation failed while updating ",
          error: validationResult.error,
       });
    }

    await NewsModel.updateOne(
       {_id: news._id}, 
         news
         );

         const updatedNews = await NewsModel.find({
            _id: news._id,
         });

    return res.json(updatedNews);
 },

 deleteFile: async (req, res)  => {

  const {newsId, filename} = req.params;

  FileService.deleteFiles([filename]);

  const newsData = await NewsModel.findOne({ _id: newsId}, {files: 1});

  const updatedFilenames =  newsData.files.replace(`${filename};`,'')
  .replace(filename,'');

  await NewsModel.updateOne({_id: newsId}, {
      files: updatedFilenames,
   });
   
  const updatedNews = await NewsModel.findOne({_id: newsId}, {
      files: updatedFilenames,
   });
   return res.json(updatedNews);
 },

 uploadFile: async (req, res) => {
    const { id } = req.params;

    const receivedFiles = [req.files.file];

    try {
      const files = await FileService.uploadFiles(receivedFiles);

      console.log("files - ", files);

      const news = await NewsModel.find({ _id: id }, { files: 1 });
      const oldFiles = news.files;

      const newFiles = `${oldFiles || ""}${oldFiles ? ";" : ""}${files}`;

      await NewsModel.updateOne({ _id: id }, [
        {
          $set: { files: newFiles },
        },
      ]);

      const updatedNews = await NewsModel.find({ _id: id });
      return res.json(updatedNews);
    } catch (err) {
      res.status(500).json({ err: err.toString() });
    }
 }
};
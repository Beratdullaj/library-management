import updatedAssetsSchema from '../validator/assetsValidation/updatedAssetsSchema';
 import AssetsModel from '../models/AssetsModel'
import FileService from '../services/FileService';
 export default { 
     
    list:  async (req,res) => {
    //fetch data
   const list = await AssetsModel.find();
      
    return res.json(list);
    },
    get: async (req, res) => {

      const { id } = req.params;
      const foundItem = await AssetsModel.findOne({_id: id});
  
      return res.json(foundItem);
    },
    post: async (req, res) => {
      const assets = new AssetsModel(req.body);
  
       await  assets.save();

       return res.json(assets);
    },
    delete: async (req, res) => {
      const {id} = req.params;

      try{ 

      await AssetsModel.deleteOne({_id : id, /*userId:authId.req*/ });
      return res.json({deleted: true});

    }catch(err){
    }
  },
  put: async  (req, res) => {

    const assets = req.body;

   const validationResult =  updatedAssetsSchema.validate(assets);

    if(validationResult.error){
       return res.status(401)
       .json({
          message: "Validation failed while updating ",
          error: validationResult.error,
       });
    }

    await AssetsModel.updateOne(
       {_id: assets._id}, 
       assets
         );

         const updatedAssets = await AssetsModel.find({
            _id: assets._id,
         });

    return res.json(updatedAssets);
 },   
  deleteFile: async (req, res)  => {

    const {assetsId, filename} = req.params;

    FileService.deleteFiles([filename]);

    const assetsData = await AssetsModel.findOne({ _id: assetsId}, {files: 1});

    const updatedFilenames =  assetsData.files.replace(`${filename};`,'')
    .replace(filename,'');

    await AssetsModel.updateOne({_id: assetsId}, {
        files: updatedFilenames,
     });
     
    const updatedAssets = await AssetsModel.findOne({_id: assetsId}, {
        files: updatedFilenames,
     });
     return res.json(updatedAssets);
   },
   uploadFile: async (req, res) => {
    const { id } = req.params;

    const receivedFiles = [req.files.file];

    try {
      const files = await FileService.uploadFiles(receivedFiles);

      console.log("files - ", files);

      const assets = await AssetsModel.find({ _id: id }, { files: 1 });
      const oldFiles = assets.files;

      const newFiles = `${oldFiles || ""}${oldFiles ? ";" : ""}${files}`;

      await AssetsModel.updateOne({ _id: id }, [
        {
          $set: { files: newFiles },
        },
      ]);

      const updatedAssets = await AssetsModel.find({ _id: id });
      return res.json(updatedAssets);
    } catch (err) {
      res.status(500).json({ err: err.toString() });
    }
 }
};
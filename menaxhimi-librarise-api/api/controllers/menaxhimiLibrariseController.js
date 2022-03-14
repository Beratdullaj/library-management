import updatedMenaxhimiLibrariseSchema from '../validator/menaxhimiLibrariseValidation/updateMenaxhimiLibrariseSchema';
 import MenaxhimiLibrariseModel from '../models/MenaxhimiLibrariseModel'
import FileService from '../services/FileService';
 export default { 
     
    list:  async (req,res) => {
    //fetch data
   const list = await MenaxhimiLibrariseModel.find();
      
    return res.json(list);
    },
    get: async (req, res) => {

      const { id } = req.params;
      const foundItem = await MenaxhimiLibrariseModel.findOne({_id: id});
  
      return res.json(foundItem);
    },
    post: async (req, res) => {
      const menaxhimiLibrarise = new MenaxhimiLibrariseModel(req.body);
  
       await  menaxhimiLibrarise.save();

       return res.json(menaxhimiLibrarise);
    },
    delete: async (req, res) => {
      const {id} = req.params;

      try{ 

      await MenaxhimiLibrariseModel.deleteOne({_id : id, /*userId:authId.req*/ });
      return res.json({deleted: true});

    }catch(err){
    }
  },
    put: async  (req, res) => {

       const menaxhimiLibrarise = req.body;

      const validationResult =  updatedMenaxhimiLibrariseSchema.validate(menaxhimiLibrarise);

       if(validationResult.error){
          return res.status(401)
          .json({
             message: "Validation failed while updating ",
             error: validationResult.error,
          });
       }

       await MenaxhimiLibrariseModel.updateOne(
          {_id: menaxhimiLibrarise._id}, 
            menaxhimiLibrarise
            );

            const updatedMenaxhimiLibrarise = await MenaxhimiLibrariseModel.find({
               _id: menaxhimiLibrarise._id,
            });

       return res.json(updatedMenaxhimiLibrarise);
    },

    deleteFile: async (req, res)  => {

     const {menaxhimiLibrariseId, filename} = req.params;

     FileService.deleteFiles([filename]);

     const menaxhimiLibrariseData = await MenaxhimiLibrariseModel.findOne({ _id: menaxhimiLibrariseId}, {files: 1});

     const updatedFilenames =  menaxhimiLibrariseData.files.replace(`${filename};`,'')
     .replace(filename,'');

     await MenaxhimiLibrariseModel.updateOne({_id: menaxhimiLibrariseId}, {
         files: updatedFilenames,
      });
      
     const updatedMenaxhimiLibrarise = await MenaxhimiLibrariseModel.findOne({_id: menaxhimiLibrariseId}, {
         files: updatedFilenames,
      });
      return res.json(updatedMenaxhimiLibrarise);
    },


    uploadFile: async (req, res) => {
      const { id } = req.params;
  
      const receivedFiles = [req.files.file];
  
      try {
        const files = await FileService.uploadFiles(receivedFiles);
  
        console.log("files - ", files);
  
        const menaxhimiLibrarise = await MenaxhimiLibrariseModel.find({ _id: id }, { files: 1 });
        const oldFiles = menaxhimiLibrarise.files;
  
        const newFiles = `${oldFiles || ""}${oldFiles ? ";" : ""}${files}`;
  
        await MenaxhimiLibrariseModel.updateOne({ _id: id }, [
          {
            $set: { files: newFiles },
          },
        ]);
  
        const updatedMenaxhimiLibrarise = await MenaxhimiLibrariseModel.find({ _id: id });
        return res.json(updatedMenaxhimiLibrarise);
      } catch (err) {
        res.status(500).json({ err: err.toString() });
      }
   }
 };
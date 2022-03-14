import express from "express";
import asstesController from "../controllers/asstesController";
//import checkIfAuthenticated from '../middlewares/checkIfAuthenticated'

const assetsRoute = express.Router();

//menaxhimiLibrariseRoute.use(checkIfAuthenticated);

assetsRoute.get('/list' , asstesController.list);
assetsRoute.get('/:id' , asstesController.get);
assetsRoute.post('/create' , asstesController.post);
assetsRoute.put('/update', asstesController.put );
assetsRoute.put("/:id/uploadFile",asstesController.uploadFile);
assetsRoute.put("/:newsId/removeFile/:filename",asstesController.deleteFile);
assetsRoute.delete('/:id', asstesController.delete);

export default assetsRoute;
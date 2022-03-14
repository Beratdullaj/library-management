import express from "express";
import menaxhimiLibrariseController from "../controllers/menaxhimiLibrariseController";
//import checkIfAuthenticated from '../middlewares/checkIfAuthenticated'

const menaxhimiLibrariseRoute = express.Router();

//menaxhimiLibrariseRoute.use(checkIfAuthenticated);

menaxhimiLibrariseRoute.get('/list' , menaxhimiLibrariseController.list);
menaxhimiLibrariseRoute.get('/:id' , menaxhimiLibrariseController.get);
menaxhimiLibrariseRoute.post('/create' , menaxhimiLibrariseController.post);
menaxhimiLibrariseRoute.put('/update', menaxhimiLibrariseController.put );
menaxhimiLibrariseRoute.put("/:id/uploadFile",menaxhimiLibrariseController.uploadFile);
menaxhimiLibrariseRoute.put("/:menaxhimiLibrariseId/removeFile/:filename",menaxhimiLibrariseController.deleteFile);
menaxhimiLibrariseRoute.delete('/:id', menaxhimiLibrariseController.delete);

export default menaxhimiLibrariseRoute;
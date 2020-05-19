const express = require('express').Router();
const router = express;
const UserController = require('../../controllers/UserController');

router.get('/hello',async(req,res)=>{
  return  res.json( await UserController.teste());
});

router.post('/create',async(req,res)=>{
 res.json(await UserController.store(req.body));
})


router.post('/authenticate',async(req,res)=>{
    res.json(await UserController.authenticate(req.body));
   })
   

router.get('/:id',async(req,res)=>{
    const{id} = req.params;
   let resp = await UserController.getById(id);

   if(resp.hasOwnProperty('status')){
       return res.status(resp.status).json({msg:resp.msg});
   }

   return res.json(resp);
}),

router.get('/', async(req,res)=>{
    return res.json( await UserController.getAll());
})

router.delete('/delete/:id', async(req,res)=>{
    const{id} = req.params;
    let resp = await UserController.delete(id);
 
    if(resp.hasOwnProperty('msg')){
        return res.status(204);
    }
 
    return res.json(resp);
})

router.put('/update/:user_id',async(req,res)=>{
    res.json(await UserController.update(req));
})
module.exports = router;
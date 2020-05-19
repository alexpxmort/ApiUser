const User = require('../models/user');

const Util = require('../utils/util');
const base64 = require('base-64');
const Op = require( 'sequelize').Op;

module.exports = {

   async teste(){
        return {msg:'Hello User'};
    },
    async store(vals){

       let{name,user_name,email,password} = vals;


       let user = await User.findOne({
       
          where:{deleted:false, [Op.or]: [
            {
              email: email
            },
            {
              user_name: user_name
            }
          ]}
        
        });

        if(user){
            const err ={msg:'User already exists',status:400};
            return err;
        }

        if(password.length<6){

            const err ={msg:'Password should be at least 6 characters',status:400};
            return err;
            
        }

       const hash = await base64.encode(password);

       password = hash;

        user = await User.create({name,user_name,email,password});

       user = Util.formatObject(user);

       user.password = undefined;
       user.deleted = undefined;


       return user;

    },
    async update(requests){
        let {params,body} = requests; 
        let user = await User.findOne({
            where:{id:params.user_id,deleted:false}
        });

        let {name,user_name,email,password} = body;

        if(!user){
            const err ={msg:'Not Found User',status:404};
            return err;
        }

        password = base64.encode(password);

      let updateUser = await  user.update({name,user_name,email,password},{where:{id:params.user_id}});

      updateUser.password = undefined;

        return updateUser;
    }
    ,
    async getById(userId){
        let user = await User.findOne({
            where:{id:userId,deleted:false}
        });

        if(!user){
            const err ={msg:'User not found',status:400};
            return err;
        }

        user = Util.formatObject(user);

        user.password = undefined;
        user.deleted = undefined;

       return user;
    },
    
    async getAll(){
        let users = await User.findAll(
            {
                where: {
                  deleted:false
                }
              }
        );
       
        users =  Util.formatObject(users);

        users.forEach((val)=>{
            val.password = undefined;
            val.deleted = undefined;
        })


        return users;
    },
    async delete(id){

        let user  = await User.findOne(
            {
                where:{id:id,deleted:false}
            }
        );

        if(!!user){
            if(!user){
                const err ={msg:'Not Found User',status:404};
                return err;
            }
        }

        const {name,user_name,email,password} = user;

        let deletedUser = await  user.update({name,user_name,email,password,deleted:true},{where:{id:id}});
        deletedUser.deleted = undefined;
        deletedUser.password = undefined;

        return {msg:`DELETED`};
    },

    async authenticate(vals){
        const{email,password} = vals;

        let user = await User.findOne({
            where:{email:email,deleted:false}
        });

        if(!user){
            const err ={msg:'User not found',status:400};
            return err;
        }

        user = Util.formatObject(user);

        if(base64.decode(user.password) == password){
            user.password = undefined;
            user.deleted = undefined;
            return user;
        }else{
            const err ={msg:'Invalid login',status:400};
            return err;
        }

       return user;
    }

      
   
}
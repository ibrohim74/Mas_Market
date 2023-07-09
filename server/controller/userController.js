const {Basket, User} = require('../moduls/moduls');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const ApiError = require('../error/apiError');
const generateJwt = (id , email , role)=>{
   return  jwt.sign({id, email, role},
        process.env.SECRET_KEY,
        {expiresIn: '24h'});
}
class UserController {

    async registration(req, res, next) {
        const {email, password, role} = req.body;
        if (!email || !password) {
            next(ApiError.badRequest('Telefon yoki parol kiritilmadi'))
        }
        const candidate = await User.findOne({where: {email}})
        if (candidate) {
            return next(ApiError.badRequest('Bu nomer registratsiyadan otgan'))
        }

        const hashPassword = await bcrypt.hash(password, 5);
        const user = await User.create({email, role, password: hashPassword});
        const basket = await Basket.create({userId: user.id});
        const token = generateJwt(user.id , user.email , user.role)

        return res.json({token})
    }

    async login(req, res, next) {
const {email , password} = req.body;
const user = await User.findOne({where:{email}})
        if(!user){
            res.json(ApiError.badRequest("bunday user topilmadi"))
        }
        let comparePassword= bcrypt.compareSync(password, user.password);
        if (!comparePassword){
            res.json(ApiError.badRequest("parol notogri"))
        }
        const token = generateJwt(user.id, user.email, user.role);
        return res.json({token})
    }

    async check(req, res, next) {
        const token = generateJwt(req.user.id, req.user.email , req.user.role);
        return res.json({token})
    }
}

module.exports = new UserController();

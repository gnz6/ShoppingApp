const { usersModel } = require("../models");
const { jwt, sign } = require("jsonwebtoken")
const { SECRET } = require("../config/config");

const signUp = async (req, res) => {
    try {
        const {
            nickname,
            email,
            password,
            type,
            projects,
            favourites,
            status
        } = req.body

        const findUser = await usersModel.find({ email })

        if (!findUser.length) {    
            const newUser = {
                nickname,
                email,
                password: await usersModel.encryptPassword(password),
                type,
                projects,
                favourites,
                status
            }

            console.log(newUser)
            const addUser = await usersModel.create(newUser)
            const userId = addUser._id
            const token = sign({ id: addUser._id }, `${SECRET}`, { expiresIn: 86400 })

            res.status(200).send({ token, userId })

        }else{
            return res.status(400).send("User already registered")
        }
    } catch (error) {
        console.log(error)
    }
}




const logIn = async (req, res) => {
    const{email, password}= req.body
    
    try {
       const findUser = await usersModel.findOne({email})
       
       if(!findUser)return res.status(400).send("user not found")
       
       const matches = await usersModel.comparePassword(password, findUser.password)

       if(!matches) return res.status(400).send({token: null, message: "Invalid password"})
       
       const token = sign({ id: findUser._id }, `${SECRET}`, { expiresIn: 86400 })
        const userId = findUser._id

       res.send({token, userId })

    } catch (error) {
        console.log(error)
    }
}



module.exports = { signUp, logIn }
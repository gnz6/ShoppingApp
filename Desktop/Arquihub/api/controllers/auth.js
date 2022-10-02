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
            status,
            avatar
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
                status,
                avatar:"https://i.pinimg.com/originals/0c/3b/3a/0c3b3adb1a7530892e55ef36d3be6cb8.png"
            }

            console.log(newUser)
            const addUser = await usersModel.create(newUser)
            const token = sign({ id: addUser._id }, `${SECRET}`, { expiresIn: 86400 })

            res.status(200).send({ token })

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
       console.log(findUser);
       if(!findUser)return res.status(400).send("user not found")
       
       const matches = await usersModel.comparePassword(password, findUser.password)

       if(!matches) return res.status(400).send({token: null, message: "Invalid password"})
       
       const token = sign({ id: findUser._id }, `${SECRET}`, { expiresIn: 86400 })
        const userImg = findUser.avatar
        const username = findUser.nickname
       res.send({token, userImg, username })

    } catch (error) {
        console.log(error)
    }
}



module.exports = { signUp, logIn }
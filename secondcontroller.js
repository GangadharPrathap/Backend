const express = require('express')
const form = require('../models/secondmodel')

const AddData = async(req,res)=>{
    try{
        console.log(req.body);
        const {Name,Email,Mobile,Age} = req.body
        // validations
        if(!Name || !Email || !Mobile || !Age){
            return res.status(400).json("All fields are required")
        }
        const result = await form.create(req.body)
        return res.status(201).json("THE DATA IS ADDED SUCCESSFULLY")
    }catch(error){
        console.log(error);
        res.status(500).json("THE DATA WAS NOT OBTAINED")
    }
}

const GetData = async(req,res)=>{
    try{
        const result = await form.find()
        return res.status(200).json(result)
    }catch(err){
        return res.status(500).json(err)
    }
}

const UpdateData = async(req,res)=>{
    try{
        const result = await form.findByIdAndUpdate(req.params.id,req.body)
        return res.status(200).json("records are updated")
    }catch(err){
        return res.status(500).json(err)
    }
}

const DeleteData = async(req,res)=>{
    try{
        if(!req.params.id){
            return res.status(400).json("Id is required")
        }
        const result = await form.findByIdAndUpdate(req.params.id)
        return res.status(200).json("record deleted")
    }catch(err){
        return res.status(500).json(err)
    }
}


exports.AddData = AddData
exports.GetData = GetData
exports.UpdateData = UpdateData
exports.DeleteData = DeleteData

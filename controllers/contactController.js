const asyncHanlder = require("express-async-handler");
const Contact = require("../models/contactModel");
//@desc Get all contacts
//@route GET /api/contacts
//@access Public
const getContacts = asyncHanlder(async (req, res) => {
  const contact = await Contact.find();
  res.status(200).json(contact);
});

//@desc Create new contact
//@route POST /api/contacts
//@access Public
const createContacts = asyncHanlder(async (req, res) => {
  console.log(req.body);
  const { name, email, phone } = req.body;
  if(!name || !email || !phone) {
    res.status(400);
    throw new Error("All filed are mandatory!")
  }

  const contact = await Contact.create({
    name, 
    email,
    phone,
  })

  res.status(201).json(contact);
});

//@desc GET contact
//@route GET /api/contacts/:id
//@access Public
const getContact = asyncHanlder(async (req, res) => {
  const contact = await Contact.findById(req.params.id);
  if(!contact) {
    res.status(404);
    throw new Error("Contact not found");
  }
  res.status(200).json(contact);
});

//@desc Update contact
//@route PUT /api/contacts/:id
//@access Public
const updateContact = asyncHanlder(async (req, res) => {
  const contact = await Contact.findById(req.params.id);
  if(!contact) {
    res.status(404);
    throw new Error("Contact not found");
  }

  const updateContact = await Contact.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true}
  );

  res.status(200).json(updateContact);
});

//@desc Create new contact
//@route POST /api/contacts/:id
//@access Public
const deleteContact = asyncHanlder(async (req, res) => {
  const contact = await Contact.findById(req.params.id);
  if(!contact) {
    res.status(404);
    throw new Error("Contact not found");
  }
  await Contact.findByIdAndDelete(req.params.id);
  res.status(200).json(contact);
});

module.exports = { getContacts, createContacts,  getContact, updateContact,  deleteContact };



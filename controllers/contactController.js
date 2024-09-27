//@desc Get all contacts
//@route GET /api/contacts
//@access Public
const getContacts = (req, res) => {
  res.status(200).json({ message: "Get all contacts"});
};

//@desc Create new contact
//@route POST /api/contacts
//@access Public
const createContacts = (req, res) => {
  console.log(req.body);
  const { name, email, phone } = req.body;
  if(!name || !email || !phone) {
    res.status(400);
    throw new Error("All filed are mandatory!")
  }
  res.status(201).json({ message: "Create contacts"});
};

//@desc GET contact
//@route GET /api/contacts/:id
//@access Public
const getContact = (req, res) => {
  res.status(200).json({ message:`Get contact for ${req.params.id}`});
}

//@desc Update contact
//@route PUT /api/contacts/:id
//@access Public
const updateContact = (req, res) => {
  res.status(200).json({ message:`Update contact for ${req.params.id}`});
}

//@desc Create new contact
//@route POST /api/contacts/:id
//@access Public
const deleteContact = (req, res) => {
  res.status(200).json({ message: `Delete contact for ${req.params.id}`});
}

module.exports = { getContacts, createContacts,  getContact, updateContact,  deleteContact };



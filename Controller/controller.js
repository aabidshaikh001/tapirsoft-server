const Contact = require('../model/contact.modal')
const validator = require('validator');


const submitContactForm = async (req, res) => {
  const { name, email, contactNumber, message } = req.body;

  // Basic server-side validation
  if (!name || !email || !contactNumber || !message) {
    return res.status(400).json({ error: 'All fields are required.' });
  }

  // Email format validation
  if (!validator.isEmail(email)) {
    return res.status(400).json({ error: 'Invalid email format.' });
  }

  // Optionally, validate contact number format
  // Add your own validation logic for contactNumber if needed

  try {
    // Create a new contact entry
    const newContact = new Contact({ name, email, contactNumber, message });
    await newContact.save();

    res.status(201).json({ message: 'Your message has been sent successfully!', contact: newContact });
  } catch (error) {
    console.error('Error saving contact form:', error);
    res.status(500).json({ error: 'Server error. Please try again later.' });
  }
};

module.exports = {
  submitContactForm,
};

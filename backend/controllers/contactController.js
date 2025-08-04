import Contact from "../models/contactSchema.js";
export const createContact = async (req, res) => {
  try {
    const { from_name, from_email, from_mobile, message_type } = req.body;

    const newContact = new Contact({
      from_name,
      from_email,
      from_mobile,
      message_type,
    });

    await newContact.save();

    res.status(201).json({ message: "Contact form submitted successfully." });
  } catch (error) {
    console.error("Error submitting contact form:", error);
    res.status(500).json({ error: "Internal server error." });
  }
};
export const getAllContacts = async (req, res) => {
  try {
    const contacts = await Contact.find().sort({ date: -1 });
    res.status(200).json({ success: true, data: contacts });
  } catch (error) {
    console.error("Error fetching contacts:", error);
    res.status(500).json({ success: false, message: "Internal server error." });
  }
};

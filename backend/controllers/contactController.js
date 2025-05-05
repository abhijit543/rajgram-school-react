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

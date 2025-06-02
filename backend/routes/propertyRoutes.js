// // import express from 'express';
// // import { searchProperties, getLocationTrends } from '../controller/propertyController.js';

// // const router = express.Router();

// // // Route to search for properties
// // router.post('/properties/search', searchProperties);

// // // Route to get location trends
// // router.get('/locations/:city/trends', getLocationTrends);

// // export default router;
// import express from "express";
// import Property from "../models/propertymodel.js"; // Make sure this model exists

// // chat gpt edited

// import multer from "multer";

// const upload = multer({ dest: "uploads/" }); // Or use diskStorage for file names

// router.post("/", upload.single("image"), async (req, res) => {
//   const { title, price, location } = req.body;
//   const image = req.file; // This is the uploaded image

//   console.log(image); // Check what multer gives you

//   // Now save to database or wherever needed
//   res.json({ success: true, message: "Property added!" });
// });


// const router = express.Router();

// // Search Properties
// router.post("/search", async (req, res) => {
//     try {
//         const { location, minPrice, maxPrice, type } = req.body;

//         const query = {};
//         if (location) query.location = { $regex: location, $options: "i" };
//         if (minPrice) query.price = { $gte: minPrice };
//         if (maxPrice) query.price = { ...query.price, $lte: maxPrice };
//         if (type) query.type = type;

//         const properties = await Property.find(query);
//         res.json(properties);
//     } catch (error) {
//         console.error("Error searching properties:", error);
//         res.status(500).json({ error: "Server error" });
//     }
// });
// // import express from "express";
// // ✅ Now use router
// // router.get("/something", (req, res) => {
// //   res.send("Hello from properties!");
// // });
// router.get("/", (req, res) => {
//     res.send("Property route working");
//   });

// // export default router;


// // export default router;
// import express from "express";
// import multer from "multer";
// import Property from "../models/propertymodel.js"; // Ensure this exists

// const router = express.Router(); // ✅ Define router at the top

// Set up multer for file upload
// const upload = multer({ dest: "uploads/" }); // You can customize storage later

// Route to add a new property
// router.post("/", upload.single("image"), async (req, res) => {
//   const { title, price, location } = req.body;
//   const image = req.file; // Uploaded image

//   console.log(image); // Optional: log uploaded file info

//   // Save property to DB (optional)
//   try {
//     const newProperty = new Property({
//       title,
//       price,
//       location,
//       image: image.filename, // Or path, based on your schema
//     });

//     await newProperty.save();

//     res.json({ success: true, message: "Property added!", property: newProperty });
//   } catch (error) {
//     console.error("Error adding property:", error);
//     res.status(500).json({ success: false, message: "Server error" });
//   }
// });
// router.post("/", upload.single("image"), async (req, res) => {
//     const { title, price, location } = req.body;
//     const image = req.file;
  
//     // Log to debug
//     console.log("Uploaded file:", image);
  
//     try {
//       const newProperty = new Property({
//         title,
//         price,
//         location,
//         image: image ? image.filename : "", // Avoid crash if no file uploaded
//       });
  
//       await newProperty.save();
  
//       res.json({ success: true, message: "Property added!", property: newProperty });
//     } catch (error) {
//       console.error("Error adding property:", error);
//       res.status(500).json({ success: false, message: "Server error" });
//     }
//   });
// router.post("/", upload.single("image"), async (req, res) => {
//     console.log("Received body:", req.body);
//     console.log("Received file:", req.file);
  
//     try {
//       const { title, price, location } = req.body;
//       const image = req.file ? req.file.filename : "";
  
//       const newProperty = new Property({
//         title,
//         price,
//         location,
//         image,
//       });
  
//       await newProperty.save();
//       res.json({ success: true, message: "Property added!" });
//     } catch (error) {
//       console.error("Error adding property:", error.message);
//       res.status(500).json({ success: false, message: "Server error" });
//     }
//   });
  
  

// // Search Properties
// router.post("/search", async (req, res) => {
//   try {
//     const { location, minPrice, maxPrice, type } = req.body;

//     const query = {};
//     if (location) query.location = { $regex: location, $options: "i" };
//     if (minPrice) query.price = { $gte: minPrice };
//     if (maxPrice) query.price = { ...query.price, $lte: maxPrice };
//     if (type) query.type = type;

//     const properties = await Property.find(query);
//     res.json(properties);
//   } catch (error) {
//     console.error("Error searching properties:", error);
//     res.status(500).json({ error: "Server error" });
//   }
// });

// // Basic test route
// router.get("/", (req, res) => {
//   res.send("Property route working");
// });
// new code
// import express from "express";
// import multer from "multer";
// import Property from "../models/propertymodel.js";

// const router = express.Router();

// // 🧱 Setup multer for file upload
// const storage = multer.diskStorage({
//   destination: function (req, file, cb) {
//     cb(null, "uploads/");
//   },
//   filename: function (req, file, cb) {
//     const uniqueName = Date.now() + "-" + file.originalname;
//     cb(null, uniqueName);
//   },
// });

// const upload = multer({ storage: storage });

// // 🚀 Route to add a property
// router.post("/", upload.single("image"), async (req, res) => {
//   try {
//     console.log("BODY:", req.body);
//     console.log("FILE:", req.file);

//     const { title, price, location } = req.body;

//     const newProperty = new Property({
//       title,
//       price,
//       location,
//       image: req.file.filename,
//     });

//     await newProperty.save();

//     res.status(200).json({ success: true, message: "Property added!" });
//   } catch (err) {
//     console.error("Error adding property:", err.message);
//     res.status(500).json({ success: false, message: "Server error" });
//   }
// });
// export default router;
//  code updated new 
import express from "express";
import multer from "multer";
import Property from "../models/propertymodel.js";

const router = express.Router();

// Setup multer
const upload = multer({ dest: "uploads/" });

router.post("/", upload.single("image"), async (req, res) => {
  try {
    const { title, price, location, phone, description, availability, type, sqft, beds, baths } = req.body;
    const image = req.file?.filename;

    if (!title || !price || !location || !image || !phone || !description || !availability || !type || !sqft || !beds || !baths) {
      return res.status(400).json({ error: "All fields are required" });
    }

    const newProperty = new Property({
      title,
      price,
      location,
      phone,
      description,
      availability,
      type,
      sqft,
      beds,
      baths,
      image, // store filename or file path
    });

    await newProperty.save();
    res.json({ success: true, message: "Property added!" });

  } catch (error) {
    console.error("Error adding property:", error);
    res.status(500).json({ error: "Server error" });
  }
});

export default router;



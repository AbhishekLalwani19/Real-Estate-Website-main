import express from "express";

const router = express.Router();

// Mock data for location trends (Replace with real database queries)
const trendsData = {
    "New York": { avgPrice: 500000, demand: "High", listings: 1200 },
    "San Francisco": { avgPrice: 750000, demand: "Medium", listings: 900 },
};

// Get Location Trends
router.get("/:city/trends", async (req, res) => {
    try {
        const city = req.params.city;
        const trends = trendsData[city] || { avgPrice: "Unknown", demand: "Unknown", listings: 0 };
        res.json(trends);
    } catch (error) {
        console.error("Error fetching location trends:", error);
        res.status(500).json({ error: "Server error" });
    }
});

export default router;

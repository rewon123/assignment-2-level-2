"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const orderModels_1 = require("../models/orderModels");
const validationMiddleware_1 = require("../middleware/validationMiddleware");
const router = express_1.default.Router();
router.post('/', (0, validationMiddleware_1.validateRequest)(orderModels_1.orderValidationSchema), async (req, res) => {
    try {
        const newOrder = await orderModels_1.Order.create(req.body);
        res.json(newOrder);
    }
    catch (error) {
        res.status(500).json({ error: error.message });
    }
});
router.get('/', async (req, res) => {
    try {
        const orders = await orderModels_1.Order.find().populate('userId');
        res.json(orders);
    }
    catch (error) {
        res.status(500).json({ error: error.message });
    }
});
exports.default = router;

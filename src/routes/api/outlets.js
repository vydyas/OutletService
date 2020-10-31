import express from 'express';
import asyncHandler from 'express-async-handler';
import { outletService } from '../../services';

export const outletRouter = express.Router();

// Get one outlet
outletRouter.post(
    '/',
    asyncHandler(async (req, res) => {
        try {
            const { lat, long } = JSON.parse(JSON.stringify(req.body));
            const outlet = await outletService.findOutlet(lat, long);
            res.send(outlet);
        } catch (error) {
            res.send(error);
        }
    })
);

import { Request, Response, NextFunction } from 'express';

export const errorHandler = (err: Error, req: Request, res: Response, next: NextFunction) => {
    console.log('❌ Server Error:', err.message);

    res.status(500).json({
        message: 'Something went wrong on the server!',
        error: err.message
    });
};


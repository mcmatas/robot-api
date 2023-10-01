import { Request, Response, NextFunction } from 'express';

export function validateCommands(req: Request, res: Response, next: NextFunction) {
    const { commands } = req.body;

    const regex = /^[LRM]+$/;

    if (!commands || !regex.test(commands)) {
        return res.status(400).json({ 
            ok: false,
            error: 'El comando solo puede contener L, R o M' 
        });
    }

    next();
}

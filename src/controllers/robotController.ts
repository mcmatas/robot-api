import { Request, Response } from 'express';
import { Robot } from '../models/Robot';

export const moveRobot = (req: Request, res: Response) => {
  try {

    // Recogemos los datos del body de la petición POST
    const { commands } = req.body;

    // Creamos una instancia para manejar la lógica
    const robot = new Robot();
    robot.processCommands(commands);

    // Devolvemos la posición del robot
    const position = robot.getPosition();
    res.status(200).json({ position });

  } catch (error) {

    console.error(error);
    res.status(500).json({ error: 'Internal server error' });

  }
};

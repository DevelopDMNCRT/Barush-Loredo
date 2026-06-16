import { Request, Response } from 'express';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export const getSliders = async (req: Request, res: Response) => {
  try {
    const images = await prisma.sliderImage.findMany({
      orderBy: { createdAt: 'desc' }
    });
    res.json(images);
  } catch (error) {
    res.status(500).json({ error: 'Error fetching slider images' });
  }
};

export const createSliderImage = async (req: Request, res: Response) => {
  const files = req.files as Express.Multer.File[];
  
  if (!files || files.length === 0) {
    return res.status(400).json({ error: 'No files provided' });
  }

  try {
    const createdImages = await Promise.all(
      files.map(file => prisma.sliderImage.create({
        data: { url: file.path }
      }))
    );
    res.status(201).json(createdImages);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error creating slider images' });
  }
};

export const deleteSliderImage = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    await prisma.sliderImage.delete({
      where: { id: Number(id) },
    });
    res.status(204).send();
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error deleting slider image' });
  }
};

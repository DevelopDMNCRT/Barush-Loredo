import { Request, Response } from 'express';
import { PrismaClient } from '@prisma/client';
import multer from 'multer';
import { v2 as cloudinary } from 'cloudinary';
import { CloudinaryStorage } from 'multer-storage-cloudinary';
import path from 'path';

const prisma = new PrismaClient();

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

const storage = new CloudinaryStorage({
  cloudinary: cloudinary,
  params: {
    folder: 'Barush',
    allowed_formats: ['jpg', 'jpeg', 'png', 'gif', 'webp'],
  } as any,
});

export const upload = multer({ storage: storage });

export const getNotes = async (req: Request, res: Response) => {
  try {
    const notes = await prisma.note.findMany({
      orderBy: { createdAt: 'desc' }
    });
    res.json(notes);
  } catch (error) {
    res.status(500).json({ error: 'Error fetching notes' });
  }
};

export const createNote = async (req: Request, res: Response) => {
  const { title, body } = req.body;
  const files = req.files as Express.Multer.File[];
  
  try {
    const images = files ? files.map(file => file.path) : [];
    
    const note = await prisma.note.create({
      data: {
        title,
        body,
        images,
      },
    });
    res.status(201).json(note);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error creating note' });
  }
};

export const updateNote = async (req: Request, res: Response) => {
  const { id } = req.params;
  const { title, body } = req.body;
  const files = req.files as Express.Multer.File[];
  
  try {
    let existingImages: string[] = [];
    if (req.body.existingImages) {
      if (Array.isArray(req.body.existingImages)) {
        existingImages = req.body.existingImages;
      } else {
        existingImages = [req.body.existingImages];
      }
    }

    const dataToUpdate: any = { title, body };
    
    const newImagesUrls = files && files.length > 0 ? files.map(file => file.path) : [];
    dataToUpdate.images = [...existingImages, ...newImagesUrls];
    
    const note = await prisma.note.update({
      where: { id: Number(id) },
      data: dataToUpdate,
    });
    res.json(note);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error updating note' });
  }
};

export const deleteNote = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    await prisma.note.delete({
      where: { id: Number(id) },
    });
    res.status(204).send();
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error deleting note' });
  }
};

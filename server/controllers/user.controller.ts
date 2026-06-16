import { Request, Response } from 'express';
import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcrypt';

const prisma = new PrismaClient();

export const getUsers = async (req: Request, res: Response) => {
  try {
    const users = await prisma.user.findMany({
      select: {
        id: true,
        name: true,
        role: true,
        email: true,
        createdAt: true,
        updatedAt: true,
      },
    });
    res.json(users);
  } catch (error) {
    res.status(500).json({ error: 'Error fetching users' });
  }
};

export const createUser = async (req: Request, res: Response) => {
  const { name, username, role, email, password } = req.body;
  try {
    const hashedPassword = await bcrypt.hash(password, 10);
    
    // Generate 4-digit random unique ID
    let newId: number = 0;
    let exists = true;
    while (exists) {
      newId = Math.floor(1000 + Math.random() * 9000);
      const existing = await prisma.user.findUnique({ where: { id: newId } });
      if (!existing) exists = false;
    }

    const user = await prisma.user.create({
      data: {
        id: newId,
        name,
        role,
        email,
        password: hashedPassword,
      },
      select: {
        id: true,
        name: true,
        role: true,
        email: true,
      },
    });
    res.status(201).json(user);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error creating user' });
  }
};

export const updateUser = async (req: Request, res: Response) => {
  const { id } = req.params;
  const { name, role, email, password } = req.body;
  
  try {
    const updateData: any = { name, role, email };
    
    if (password) {
      updateData.password = await bcrypt.hash(password, 10);
    }

    const user = await prisma.user.update({
      where: { id: Number(id) },
      data: updateData,
      select: {
        id: true,
        name: true,
        role: true,
        email: true,
      },
    });
    res.json(user);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error updating user' });
  }
};

export const deleteUser = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    await prisma.user.delete({
      where: { id: Number(id) },
    });
    res.status(204).send();
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error deleting user' });
  }
};

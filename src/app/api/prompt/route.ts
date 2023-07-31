import { connectToDB } from '@/utils/database';
import Prompt from '@/models/prompt';

export const GET = async (request) => {
  try {
    await connectToDB();
    const prompts = await Prompt.find({}).populate('creator');

    return new Response(JSON.stringify(prompts), {
      status: 200,
    });
  } catch (error) {
    console.log('failed to get prompts from database', error);

    return new Response('Failed to get prompts from Database', {
      status: 500,
    });
  }
};

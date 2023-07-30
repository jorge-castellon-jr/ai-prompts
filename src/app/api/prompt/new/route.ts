import { connectToDB } from '@/utils/database';
import Prompt from '@/models/prompt';

export const POST = async (request) => {
  const { userId, prompt, tag } = await request.json();

  try {
    await connectToDB();
    console.log('new Prompt ', userId, prompt, tag);
    const newPrompt = new Prompt({ creator: userId, prompt, tag });

    console.log('new Prompt ', newPrompt);

    await newPrompt.save();

    return new Response(JSON.stringify(newPrompt), {
      status: 201,
    });
  } catch (error) {
    console.log('failed to create prompt in database', error);

    return new Response('Failed to create prompt in Database', {
      status: 500,
    });
  }
};

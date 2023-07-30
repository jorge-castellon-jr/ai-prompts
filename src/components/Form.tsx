import Link from 'next/link';

const Form = ({
  type,
  post,
  setPost,
  submitting,
  handleSubmit,
}: {
  type: string;
  post: any;
  setPost: any;
  submitting: any;
  handleSubmit: any;
}) => {
  return (
    <section className='w-full max-w-full flex-start flex-col'>
      <h1 className='head_text text-left'>
        <span className='blue_gradient'>{type} Post</span>
      </h1>
      <p className='desc text-left max-w-md'>
        {type} and share amazing prompts with the world, and let your
        imagination run wild with any AI-powered platform
      </p>

      <form
        className='mt-10 w-full max-w-2xl flex flex-col glassmorphism'
        onSubmit={handleSubmit}
      >
        <label>
          <span className='font-satoshi font-semibold text-base text-slate-100'>
            Your AI Prompt
          </span>
          <textarea
            value={post.prompt}
            className='form_textarea mb-6'
            placeholder='Write your prompt here...'
            required
            onChange={(e) => setPost({ ...post, prompt: e.target.value })}
          />
        </label>
        <label>
          <span className='font-satoshi font-semibold text-base text-slate-100'>
            Tag{' '}
            <span className='font-normal'>
              (#product, #webdevelopment, #idea)
            </span>
          </span>
          <input
            value={post.tag}
            className='form_input mb-6'
            placeholder='#tag'
            required
            onChange={(e) => setPost({ ...post, tag: e.target.value })}
          />
        </label>

        <div className='flex-end mx-3 mb-3 gap-4'>
          <Link href='/' className='text-sm'>
            Cancel
          </Link>
          <button
            type='submit'
            className='px-5 py-1.5 text-sm bg-white rounded-full text-slate-800'
            disabled={submitting}
          >
            {submitting ? `${type}...` : type}
          </button>
        </div>
      </form>
    </section>
  );
};

export default Form;

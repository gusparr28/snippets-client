import { writeTextFile } from '@tauri-apps/api/fs'
import { desktopDir } from '@tauri-apps/api/path'
import { useState } from 'react';

function SnippetForm() {
  const [snippetName, setSnippetName] = useState('');

  return (
    <form onSubmit={async (e) => {
      e.preventDefault();
      const desktopPath = await desktopDir();
      await writeTextFile(`${desktopPath}/snippets/${snippetName}.json`, `{}`);
      setSnippetName('');
    }}>
      <input type='text'
        placeholder='Write a Snippet'
        className='bg-zinc-900 w-full border-none outline-none p-4'
        onChange={(e) => setSnippetName(e.target.value)}
        value={snippetName}
      />
      <button className='hidden'>
        Save
      </button>
    </form>
  )
}

export default SnippetForm
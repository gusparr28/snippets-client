import { readDir } from "@tauri-apps/api/fs"
import { useEffect } from "react"
import { desktopDir } from '@tauri-apps/api/path'
import { useSnippetStore } from '../store/snippetsStore';

function SnippetList() {
  const snippetNames = useSnippetStore(state => state.snippetsNames);
  const setSnippetsNames = useSnippetStore(state => state.setSnippetsNames);

  useEffect(() => {
    const loadFiles = async () => {
      const desktopPath = await desktopDir();
      const files = await readDir(`${desktopPath}/snippets`);
      const fileNames = files.map((file) => file.name!);
      setSnippetsNames(fileNames);
    }
    loadFiles();
  }, []);

  return (
    <div>
      {snippetNames.map((snippetName) => (
        <div>
          <h1>{snippetName}</h1>
        </div>
      ))}
    </div>
  )
}

export default SnippetList
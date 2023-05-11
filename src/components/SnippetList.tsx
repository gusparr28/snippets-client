import { readDir } from "@tauri-apps/api/fs"
import { useEffect } from "react"
import { desktopDir } from '@tauri-apps/api/path'
import { useSnippetStore } from '../store/snippetsStore';
import SnippetItem from "./SnippetItem";

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
        <SnippetItem snippetName={snippetName} />
      ))}
    </div>
  )
}

export default SnippetList
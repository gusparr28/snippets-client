import Editor from '@monaco-editor/react'
import { useSnippetStore } from '../store/snippetsStore'

function SnippetEditor() {
  const selectedSnippet = useSnippetStore((state) => state.selectedSnippet);

  return (
    <>
      {
        selectedSnippet ? (

          <Editor
            theme='vs-dark'
            defaultLanguage='javascript'
            options={{
              fontSize: 14
            }}
          />
        ) : (
          <h1>No Snippets selected</h1>
        )
      }
    </>
  )
}

export default SnippetEditor